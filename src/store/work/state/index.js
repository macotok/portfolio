import db from '@/store/stub';
import inputDataList from '@/store/work/state/inputDataList';
import { WORKS_START_NUMBER } from '@/defines';

const state = {
  db: db.work,
  update: inputDataList,
  pagerNumber: WORKS_START_NUMBER,
};

export default state;
