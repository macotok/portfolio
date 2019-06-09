import db from '@/store/stub';
import inputDataList from './inputDataList';
import { WORKS_START_NUMBER } from '@/defines';

const state = {
  db: db.work,
  update: inputDataList,
  paginationNumber: WORKS_START_NUMBER,
};

export default state;
