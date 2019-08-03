import db from '@/store/stub';
import skill from '@/server/GET/skill';
import inputDataList from '@/store/skill/state/inputDataList';

const skillDB = (process.env.SWITCH_DATABASE === 'production') ? skill() : db.skill;

const state = {
  db: skillDB,
  update: inputDataList,
};

export default state;
