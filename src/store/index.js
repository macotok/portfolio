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
    const createId = data.works.reduce((id, work) => (id < work.id ? work.id : id), 0) + 1;
    const imagesRef = storageRef.child(`images/works/${createId}_${addData.image_name}`);
    imagesRef.putString(addData.image_path, 'data_url')
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
            const addWork = Object.assign({}, { ...addData }, { ...addOtherData });
            firestore.collection('works').doc((addWork.id).toString(10)).set(addWork)
              .then(() => (serverWorks()))
              .then((worksData) => {
                state.works = worksData;
              });
          });
      });
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
  updateWork(data, updateData) {
    const getData = (data.works).find(w => (w.id === updateData.id));
    if (getData.image_path !== updateData.image_path) {
      const imagesRef = storageRef.child(`images/works/${updateData.id}_${updateData.image_name}`);
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
              firestore.collection('works').doc((updateData.id).toString(10)).update(updateNewData)
                .then(() => (serverWorks()))
                .then((worksData) => {
                  state.works = worksData;
                });
            });
        });
    } else {
      const updateOtherData = {
        updatedAt: new Date(),
      };
      const updateNewData = Object.assign({}, { ...updateData }, { ...updateOtherData });
      firestore.collection('works').doc((updateData.id).toString(10)).update(updateNewData)
        .then(() => (serverWorks()))
        .then((worksData) => {
          state.works = worksData;
        });
    }
  },
  updateWorkData(data, value) {
    state.editWork = Object.assign({}, { ...data.editWork }, { ...value });
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
  addSkill(data, addData) {
    const createId = data.skill.reduce((id, skill) => (id < skill.id ? skill.id : id), 0) + 1;
    const imagesRef = storageRef.child(`images/skill/${createId}_${addData.image_name}`);
    imagesRef.putString(addData.image_path, 'data_url')
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
            const addSkill = Object.assign({}, { ...addData }, { ...addOtherData });
            firestore.collection('skill').doc((addSkill.id).toString(10)).set(addSkill)
              .then(() => (serverSkill()))
              .then((skillData) => {
                state.skill = skillData;
              });
          });
      });
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
  updateSkill(data, updateData) {
    const getData = (data.skill).find(s => (s.id === updateData.id));
    if (getData.image_path !== updateData.image_path) {
      const imagesRef = storageRef.child(`images/skill/${updateData.id}_${updateData.image_name}`);
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
              firestore.collection('skill').doc((updateData.id).toString(10)).update(updateNewData)
                .then(() => (serverSkill()))
                .then((skillData) => {
                  state.skill = skillData;
                });
            });
        });
    } else {
      const updateOtherData = {
        updatedAt: new Date(),
      };
      const updateNewData = Object.assign({}, { ...updateData }, { ...updateOtherData });
      firestore.collection('skill').doc((updateNewData.id).toString(10)).update(updateNewData)
        .then(() => (serverSkill()))
        .then((skillData) => {
          state.skill = skillData;
        });
    }
  },
  updateSkillData(data, value) {
    state.editSkill = Object.assign({}, { ...data.editSkill }, { ...value });
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

export default {
  state,
  mutations,
};

