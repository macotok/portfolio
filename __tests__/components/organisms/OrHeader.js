import { shallowMount } from '@vue/test-utils';
import OrHeader from '@/components/organisms/OrHeader';

describe('OrHeader test', () => {
  let wrapper;
  const propsData = { title: 'hello title' };
  beforeEach(() => {
    wrapper = shallowMount(OrHeader, { propsData });
  });
  describe('props', () => {
    test('propsが受け取れること', () => {
      expect(wrapper.vm.$props.title).toBe(propsData.title);
    });
    test('requiredがtrueになっていること', () => {
      expect(wrapper.vm.$options.props.title.required).toBe(true);
    });
  });
});
