import db from './stub';
import database from './database';
import { WORKS_START_NUMBER } from './defines';

console.log(database);

const state = {
  works: db.works,
  addWork: {
    title: '',
    text: '',
    tags: '',
    image_path: '',
    url: '',
  },
  skill: db.skill,
  worksPaginationNUmber: WORKS_START_NUMBER,
};

const util = {
  findIndex(works, id) {
    const targetId = parseInt(id, 10);
    return works.findIndex(work => work.id === targetId);
  },
};

const mutations = {
  addWork(data, newWork) {
    const addWork = newWork;
    addWork.id = data.works.reduce((id, work) => (id < work.id ? work.id : id), 0) + 1;
    addWork.title = state.addWork.title;
    addWork.tags = state.addWork.tags;
    addWork.url = state.addWork.url;
    addWork.text = state.addWork.text;
    addWork.image_path = state.addWork.image_path;
    state.works.push(addWork);
  },
  workTitle(data, value) {
    state.addWork.title = value;
  },
  workTags(data, value) {
    state.addWork.tags = value.trim() ? value.replace(/\s+/g, '').split(',') : [];
  },
  workUrl(data, value) {
    state.addWork.url = value;
  },
  workImage(data, value) {
    state.addWork.image_path = value;
  },
  workText(data, value) {
    state.addWork.text = value;
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

