import db from '../stub';
import database from '../database';
import { WORKS_START_NUMBER } from '../defines';
import addNewWork from './addNewWork';
import editWork from './editWork';
import addNewSkill from './addNewSkill';
import editSkill from './editSkill';
import findIndex from '../utils/findIndex';

console.log(database);

const state = {
  works: db.works,
  skill: db.skill,
  addNewWork,
  editWork,
  addNewSkill,
  editSkill,
  worksPaginationNUmber: WORKS_START_NUMBER,
};

const mutations = {
  addWork(data, addData) {
    const addWork = addData;
    addWork.id = data.works.reduce((id, work) => (id < work.id ? work.id : id), 0) + 1;
    state.works.push(addWork);
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
  addSkill(data, addData) {
    const addSkill = addData;
    addSkill.id = data.skill.reduce((id, skill) => (id < skill.id ? skill.id : id), 0) + 1;
    state.skill.push(addSkill);
    state.addNewSkill = {
      title: '',
      image_path: '',
      text: '',
    };
  },
  addSkillData(data, value) {
    state.addNewSkill = Object.assign({}, { ...data.addNewSkill }, { ...value });
  },
  updateWork(data, updateWork) {
    state.works.splice(findIndex(data.works, updateWork.id), 1, updateWork);
  },
  updateWorkData(data, value) {
    state.editWork = Object.assign({}, { ...data.editWork }, { ...value });
  },
  updateSkill(data, updateSkill) {
    state.skill.splice(findIndex(data.skill, updateSkill.id), 1, updateSkill);
  },
  updateSkillData(data, value) {
    state.editSkill = Object.assign({}, { ...data.editSkill }, { ...value });
  },
  removeWork(data, id) {
    state.works.splice(findIndex(data.works, id), 1);
  },
  removeSkill(data, id) {
    state.skill.splice(findIndex(data.skill, id), 1);
  },
};

export default {
  state,
  mutations,
};

