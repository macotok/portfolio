const state = {
  works: require('./works.json'),
};

const util = {
  findIndex(works, id) {
    const targetId = parseInt(id, 10);
    return works.findIndex(work => work.id === targetId);
  },
};

const mutations = {
  addWork(state, newWork) {
    newWork.id = state.works.reduce((id, work) => (id < work.id ? work.id : id), 0) + 1;
    state.works.push(newWork);
  },
  removeWork(state, id) {
    const index = util.findIndex(state.works, id);
    state.works.splice(index, 1);
  },
  updateWork(state, work) {
    const index = util.findIndex(state.works, work.id);
    state.works.splice(index, 1, work);
  },
};

export default {
  state,
  mutations,
};

