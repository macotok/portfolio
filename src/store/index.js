import db from '../stub';
import database from '../database';
import { WORKS_START_NUMBER } from '../defines';
import addNewWork from './addNewWork';
import editWork from './editWork';
import addNewSkill from './addNewSkill';
import editSkill from './editSkill';
import findIndex from '../utils/findIndex';

const state = {
  works: database.works,
  skill: database.skill,
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
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    const addWork = Object.assign({}, { ...addData }, { ...addOtherData });
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
    const addOtherData = {
      id: data.skill.reduce((id, skill) => (id < skill.id ? skill.id : id), 0) + 1,
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    const addSkill = Object.assign({}, { ...addData }, { ...addOtherData });
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
    const updateOtherData = {
      updatedAt: new Date(),
    };
    const updateData = Object.assign({}, { ...updateWork }, { ...updateOtherData });
    state.works.splice(findIndex(data.works, updateWork.id), 1, updateData);
  },
  updateWorkData(data, value) {
    state.editWork = Object.assign({}, { ...data.editWork }, { ...value });
  },
  updateSkill(data, updateSkill) {
    const updateOtherData = {
      updatedAt: new Date(),
    };
    const updateData = Object.assign({}, { ...updateSkill }, { ...updateOtherData });
    state.skill.splice(findIndex(data.skill, updateSkill.id), 1, updateData);
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

