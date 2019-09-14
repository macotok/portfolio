import inputDataList from '@/store/work/state/inputDataList';
import { PAGER_DEFAULT_NUMBER } from '@/defines';

const state = {
  db: [],
  dbLength: null,
  update: inputDataList,
  pagerNumber: PAGER_DEFAULT_NUMBER,
};

export default state;
