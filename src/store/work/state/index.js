import db from '@/store/stub';
import work from '@/server/work';
import inputDataList from '@/store/work/state/inputDataList';
import { WORKS_START_NUMBER } from '@/defines';

const workDB = (process.env.SWITCH_DATABASE === 'produciton') ? work() : db.work;

const state = {
  db: workDB,
  update: inputDataList,
  pagerNumber: WORKS_START_NUMBER,
};

export default state;
