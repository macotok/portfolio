import Vue from 'vue';
import VueFaker from 'vue-faker';

Vue.use(VueFaker);

const db = {
  works: [],
  skill: [],
};

for (let i = 0; i < 50; i += 1) {
  db.works.push({
    id: i + 1,
    title: Vue.faker().name.title(),
    text: Vue.faker().lorem.sentences(),
    tags: [Vue.faker().lorem.word(), Vue.faker().lorem.word()],
    image_path: Vue.faker().image.avatar(),
    url: Vue.faker().image.avatar(),
    updatedAt: Vue.faker().date.past(),
    createdAt: Vue.faker().date.past(),
  });
}

for (let i = 0; i < 20; i += 1) {
  db.skill.push({
    id: i + 1,
    title: Vue.faker().name.title(),
    text: Vue.faker().lorem.sentences(),
    image_path: Vue.faker().image.avatar(),
    updatedAt: Vue.faker().date.past(),
    createdAt: Vue.faker().date.past(),
  });
}

export default db;
