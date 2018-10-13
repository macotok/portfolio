import Vue from 'vue';
import VueFaker from 'vue-faker';

Vue.use(VueFaker);

const worksLength = 100;
const db = {
  works: [],
};

for (let i = 0; i < worksLength; i += 1) {
  db.works.push({
    id: i + 1,
    title: Vue.faker().name.title(),
    text: Vue.faker().lorem.words(),
    tags: [Vue.faker().lorem.word(), Vue.faker().lorem.word()],
    image_path: Vue.faker().image.image(),
    createdAt: Vue.faker.date.past(),
    updateAt: Vue.faker.date.future(),
  });
}

export default db;
