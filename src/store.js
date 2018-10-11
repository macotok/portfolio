const workList = require('./works.json');

const state = {
  works: workList,
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
    state.works.push(addWork);
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

