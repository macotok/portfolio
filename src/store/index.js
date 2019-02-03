import db from '../stub';
import database from '../database';
import { WORKS_START_NUMBER } from '../defines';
import addNewWork from './addNewWork';

console.log(database);

const state = {
  works: db.works,
  skill: db.skill,
  addNewWork,
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
  },
  workTitle(data, value) {
    state.addNewWork.title = value;
  },
  workTags(data, value) {
    state.addNewWork.tags = value.trim() ? value.replace(/\s+/g, '').split(',') : [];
  },
  workUrl(data, value) {
    state.addNewWork.url = value;
  },
  workImage(data, value) {
    state.addNewWork.image_path = value;
  },
  workText(data, value) {
    state.addNewWork.text = value;
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

