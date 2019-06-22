import Vue from 'vue';
import VueFaker from 'vue-faker';

Vue.use(VueFaker);

const db = {
  work: [],
  skill: [],
};
const workLength = 3;
const skillLength = 3;

for (let i = 0; i < workLength; i += 1) {
  db.work.push({
    id: i + 1,
    title: Vue.faker().name.title(),
    text: Vue.faker().lorem.sentences(),
    tags: [Vue.faker().lorem.word(), Vue.faker().lorem.word()],
    image: {
      path: Vue.faker().image.avatar(),
      name: Vue.faker().name.title(),
    },
    url: Vue.faker().image.avatar(),
    updatedAt: Vue.faker().date.past(),
    createdAt: Vue.faker().date.past(),
  });
}

for (let i = 0; i < skillLength; i += 1) {
  db.skill.push({
    id: i + 1,
    title: Vue.faker().name.title(),
    text: Vue.faker().lorem.sentences(),
    image: {
      path: Vue.faker().image.avatar(),
      name: Vue.faker().name.title(),
    },
    updatedAt: Vue.faker().date.past(),
    createdAt: Vue.faker().date.past(),
  });
}

export default db;
