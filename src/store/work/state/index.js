import db from '@/store/stub';
import work from '@/server/GET/work';
import inputDataList from '@/store/work/state/inputDataList';
import { PAGER_DEFAULT_NUMBER } from '@/defines';

// const workDB = (process.env.SWITCH_DATABASE === 'production') ? work() : db.work;

const state = {
  db: [],
  update: inputDataList,
  pagerNumber: PAGER_DEFAULT_NUMBER,
};

export default state;
