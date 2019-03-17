// import db from './stub';
import moment from 'moment';
import { firestore, storage } from '../server/firebase';
import serverWorks from '../server/works';
import serverSkill from '../server/skill';
import { WORKS_START_NUMBER } from '../defines';
import addNewWork from './addNewWork';
import editWork from './editWork';
import inputSkillData from './inputSkillData';

const state = {
  works: serverWorks(),
  skill: serverSkill(),
  addNewWork,
  editWork,
  inputSkillData,
  worksPaginationNUmber: WORKS_START_NUMBER,
  admin: false,
};

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
  addWorkData(data, values) {
    state.addNewWork = values;
  },
  addSkill(data, addData) {
    state.skill = addData;
    state.inputSkillData = inputSkillData;
  },
  addSkillData(data, values) {
    state.inputSkillData = values;
  },
  updateWork(data, updateData) {
    state.works = updateData;
  },
  updateWorkData(data, values) {
    state.editWork = values;
  },
  updateSkill(data, updateData) {
    state.skill = updateData;
    state.inputSkillData = inputSkillData;
  },
  updateSkillData(data, values) {
    state.inputSkillData = values;
  },
  worksPaginationNUmber(data, pagerNumber) {
    state.worksPaginationNUmber = pagerNumber;
  },
  admin(data, isAdmin) {
    state.admin = isAdmin;
  },
  getEditData(data, payload) {
    const { type, editData } = payload;
    switch (type) {
      case 'works':
        state.editWork = editData;
        break;
      case 'skill':
        state.inputSkillData = editData;
        break;
      default:
        break;
    }
  },
  checkHasData(data, payload) {
    const { type, findData } = payload;
    switch (type) {
      case 'works':
        state.editWork = findData;
        break;
      case 'skill':
        if (findData) {
          state.inputSkillData = findData;
        } else {
          state.inputSkillData = inputSkillData;
        }
        break;
      default:
        break;
    }
  },
};

const storageRef = storage.ref();
const actions = {
  updateFormValue(context, payload) {
    context.commit(
      payload.mutationName,
      Object.assign({}, { ...context.state[payload.type] }, { ...payload.value }),
    );
  },
  addData(context, payload) {
    const { type } = payload;
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
              updatedAt: moment().format(),
              createdAt: moment().format(),
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
    const { type, updateData } = payload;
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
                updatedAt: moment().format(),
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
        updatedAt: moment().format(),
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
  removeData(context, payload) {
    const { type, id } = payload;
    const getData = context.state[type].find(d => (d.id === parseInt(id, 10)));
    const imagesRef = storageRef.child(`images/${type}/${id}_${getData.image_name}`);
    imagesRef.delete().then(() => {
      switch (type) {
        case
          'works':
          firestore.collection(type).doc(id.toString(10)).delete()
            .then(() => (serverWorks()))
            .then((data) => {
              context.commit('updateWork', data);
            });
          break;
        case
          'skill':
          firestore.collection(type).doc(id.toString(10)).delete()
            .then(() => (serverSkill()))
            .then((data) => {
              context.commit('updateSkill', data);
            });
          break;
        default:
          break;
      }
    });
  },
  worksPaginationNUmber(context, payload) {
    const { pagerNumber } = payload;
    context.commit('worksPaginationNUmber', pagerNumber);
  },
  admin(context, payload) {
    const { isAdmin } = payload;
    context.commit('admin', isAdmin);
  },
  getEditData(context, payload) {
    context.commit('getEditData', payload);
  },
  checkHasData(context, payload) {
    context.commit('checkHasData', payload);
  },
};

export default {
  state,
  mutations,
  actions,
};
