// import db from '../stub';
import firestore from '../server/firestore';
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
};

const mutations = {
  addWork(data, addData) {
    const addOtherData = {
      id: data.works.reduce((id, work) => (id < work.id ? work.id : id), 0) + 1,
      image_path: 'https://the-ans.jp/wp-content/uploads/2019/02/20190220_ichiro_gi.jpg',
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    const addWork = Object.assign({}, { ...addData }, { ...addOtherData });
    firestore.collection('works').doc((addWork.id).toString(10)).set(addWork)
      .then(() => (serverWorks()))
      .then((worksData) => {
        state.works = worksData;
      });
    state.addNewWork = {
      title: '',
      tags: '',
      image_path: '',
      url: '',
      text: '',
    };
  },
  addWorkData(data, value) {
    state.addNewWork = Object.assign({}, { ...data.addNewWork }, { ...value });
  },
  updateWork(data, updateWork) {
    const updateOtherData = {
      updatedAt: new Date(),
    };
    const updateData = Object.assign({}, { ...updateWork }, { ...updateOtherData });
    firestore.collection('works').doc((updateWork.id).toString(10)).update(updateData)
      .then(() => (serverWorks()))
      .then((worksData) => {
        state.works = worksData;
      });
  },
  updateWorkData(data, value) {
    state.editWork = Object.assign({}, { ...data.editWork }, { ...value });
  },
  removeWork(data, id) {
    firestore.collection('works').doc(id.toString(10)).delete()
      .then(() => (serverWorks()))
      .then((worksData) => {
        state.works = worksData;
      });
  },
  addSkill(data, addData) {
    const addOtherData = {
      id: data.skill.reduce((id, skill) => (id < skill.id ? skill.id : id), 0) + 1,
      image_path: 'https://the-ans.jp/wp-content/uploads/2019/02/20190220_ichiro_gi.jpg',
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    const addSkill = Object.assign({}, { ...addData }, { ...addOtherData });
    firestore.collection('skill').doc((addSkill.id).toString(10)).set(addSkill)
      .then(() => (serverSkill()))
      .then((skillData) => {
        state.skill = skillData;
      });
    state.addNewSkill = {
      title: '',
      image_path: '',
      text: '',
    };
  },
  addSkillData(data, value) {
    state.addNewSkill = Object.assign({}, { ...data.addNewSkill }, { ...value });
  },
  updateSkill(data, updateSkill) {
    const updateOtherData = {
      updatedAt: new Date(),
    };
    const updateData = Object.assign({}, { ...updateSkill }, { ...updateOtherData });
    firestore.collection('skill').doc((updateSkill.id).toString(10)).update(updateData)
      .then(() => (serverSkill()))
      .then((skillData) => {
        state.skill = skillData;
      });
  },
  updateSkillData(data, value) {
    state.editSkill = Object.assign({}, { ...data.editSkill }, { ...value });
  },
  removeSkill(data, id) {
    firestore.collection('skill').doc(id.toString(10)).delete()
      .then(() => (serverSkill()))
      .then((skillData) => {
        state.skill = skillData;
      });
  },
};

export default {
  state,
  mutations,
};

