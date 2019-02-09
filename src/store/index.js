import db from '../stub';
import database from '../database';
import { WORKS_START_NUMBER } from '../defines';
import addNewWork from './addNewWork';
import addNewSkill from './addNewSkill';

console.log(database);

const state = {
  works: db.works,
  skill: db.skill,
  addNewWork,
  addNewSkill,
  worksPaginationNUmber: WORKS_START_NUMBER,
};

const util = {
  findIndex(works, id) {
    const targetId = parseInt(id, 10);
    return works.findIndex(work => work.id === targetId);
  },
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
  removeWork(data, id) {
    const index = util.findIndex(data.works, id);
    state.works.splice(index, 1);
  },
  updateWork(data, work) {
    const index = util.findIndex(data.works, work.id);
    state.works.splice(index, 1, work);
  },
};

export default {
  state,
  mutations,
};

