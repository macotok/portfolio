// import db from './stub';
import { firestore, storage } from '../server/firebase';
import serverWorks from '../server/works';
import serverSkill from '../server/skill';
import { WORKS_START_NUMBER } from '../defines';
import addNewWork from './addNewWork';
import editWork from './editWork';
import addNewSkill from './addNewSkill';
import editSkill from './editSkill';

const state = {
  works: serverWorks(),
  skill: serverSkill(),
  addNewWork,
  editWork,
  addNewSkill,
  editSkill,
  worksPaginationNUmber: WORKS_START_NUMBER,
  admin: false,
};

const storageRef = storage.ref();
const mutations = {
  addWork(data, addData) {
    state.works = addData;
    state.addNewWork = {
      title: '',
      tags: '',
      image_path: '',
      image_name: '',
      url: '',
      text: '',
    };
  },
  addWorkData(data, value) {
    state.addNewWork = Object.assign({}, { ...data.addNewWork }, { ...value });
  },
  addSkill(data, addData) {
    state.skill = addData;
    state.addNewSkill = {
      title: '',
      image_path: '',
      image_name: '',
      text: '',
    };
  },
  addSkillData(data, value) {
    state.addNewSkill = Object.assign({}, { ...data.addNewSkill }, { ...value });
  },
  updateWork(data, updateData) {
    state.works = updateData;
  },
  updateWorkData(data, value) {
    state.editWork = Object.assign({}, { ...data.editWork }, { ...value });
  },
  updateSkill(data, updateData) {
    state.skill = updateData;
  },
  updateSkillData(data, value) {
    state.editSkill = Object.assign({}, { ...data.editSkill }, { ...value });
  },
  removeWork(data, id) {
    const getData = (data.works).find(w => (w.id === parseInt(id, 10)));
    const imagesRef = storageRef.child(`images/works/${id}_${getData.image_name}`);
    imagesRef.delete().then(() => {
      firestore.collection('works').doc(id.toString(10)).delete()
        .then(() => (serverWorks()))
        .then((worksData) => {
          state.works = worksData;
        });
    });
  },
  removeSkill(data, id) {
    const getData = (data.skill).find(s => (s.id === parseInt(id, 10)));
    const imagesRef = storageRef.child(`images/skill/${id}_${getData.image_name}`);
    imagesRef.delete().then(() => {
      firestore.collection('skill').doc(id.toString(10)).delete()
        .then(() => (serverSkill()))
        .then((skillData) => {
          state.skill = skillData;
        });
    });
  },
};

const actions = {
  addData(context, payload) {
    const type = payload.type;
    const createId = context.state[type].reduce((id, data) => (id < data.id ? data.id : id), 0) + 1;
    const imagesRef = storageRef.child(`images/${type}/${createId}_${payload.addData.image_name}`);
    imagesRef.putString(payload.addData.image_path, 'data_url')
      .then((snapshot) => {
        const starsRef = storageRef.child(snapshot.metadata.fullPath);
        starsRef.getDownloadURL()
          .then((url) => {
            const addOtherData = {
              id: createId,
              image_path: url,
              updatedAt: new Date(),
              createdAt: new Date(),
            };
            const concatData = Object.assign({}, { ...payload.addData }, { ...addOtherData });
            switch (type) {
              case
                'works':
                firestore.collection(type).doc((concatData.id).toString(10)).set(concatData)
                  .then(() => (serverWorks()))
                  .then((data) => {
                    context.commit('addWork', data);
                  });
                break;
              case
                'skill':
                firestore.collection(type).doc((concatData.id).toString(10)).set(concatData)
                  .then(() => (serverSkill()))
                  .then((data) => {
                    context.commit('addSkill', data);
                  });
                break;
              default:
                break;
            }
          });
      });
  },
  updateData(context, payload) {
    const type = payload.type;
    const updateData = payload.updateData;
    const getData = context.state[type].find(d => (d.id === updateData.id));
    if (getData.image_path !== updateData.image_path) {
      const imagesRef = storageRef.child(`images/${type}/${updateData.id}_${updateData.image_name}`);
      imagesRef.putString(updateData.image_path, 'data_url')
        .then((snapshot) => {
          const starsRef = storageRef.child(snapshot.metadata.fullPath);
          starsRef.getDownloadURL()
            .then((url) => {
              const updateOtherData = {
                image_path: url,
                updatedAt: new Date(),
              };
              const updateNewData = Object.assign({}, { ...updateData }, { ...updateOtherData });
              switch (type) {
                case
                  'works':
                  firestore.collection(type).doc((updateData.id).toString(10)).update(updateNewData)
                    .then(() => (serverWorks()))
                    .then((data) => {
                      context.commit('updateWork', data);
                    });
                  break;
                case
                  'skill':
                  firestore.collection(type).doc((updateData.id).toString(10)).update(updateNewData)
                    .then(() => (serverSkill()))
                    .then((data) => {
                      context.commit('updateSkill', data);
                    });
                  break;
                default:
                  break;
              }
            });
        });
    } else {
      const updateOtherData = {
        updatedAt: new Date(),
      };
      const updateNewData = Object.assign({}, { ...updateData }, { ...updateOtherData });
      switch (type) {
        case
          'works':
          firestore.collection(type).doc((updateData.id).toString(10)).update(updateNewData)
            .then(() => (serverWorks()))
            .then((data) => {
              context.commit('updateWork', data);
            });
          break;
        case
          'skill':
          firestore.collection(type).doc((updateData.id).toString(10)).update(updateNewData)
            .then(() => (serverSkill()))
            .then((data) => {
              context.commit('updateSkill', data);
            });
          break;
        default:
          break;
      }
    }
  },
};

export default {
  state,
  mutations,
  actions,
};

