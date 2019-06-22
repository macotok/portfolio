import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Root from '@/components/pages/Root';
import TeRoot from '@/components/templates/TeRoot';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    label01: 'test label01',
  },
});

describe('Sample test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Root, {
      store,
      localVue,
    });
  });
  describe('mount', () => {
    test('TeSampleにstateの値をpropsで渡せているかどうか', () => {
      expect(wrapper.find(TeRoot).props().label01).toBe('test label01');
    });
  });
});
