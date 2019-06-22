import { shallowMount } from '@vue/test-utils';
import AtTextInput from '@/components/atoms/form/AtTextInput';

describe('AtTextInput', () => {
  let wrapper;
  const propsData = {
    name: 'test name',
  };
  beforeEach(() => {
    wrapper = shallowMount(AtTextInput, {
      propsData,
    });
  });
  describe('props', () => {
    test('propsを受け取れること', () => {
      wrapper.setProps({
        placeholder: 'test placeholder',
      });
      expect(wrapper.vm.$props.name).toBe(propsData.name);
      expect(wrapper.vm.$props.placeholder).toBe('test placeholder');
    });
    test('型が期待しているとおりか', () => {
      expect(typeof wrapper.vm.$props.name).toBe('string');
      expect(typeof wrapper.vm.$props.placeholder).toBe('string');
    });
    test('requiredがtrueになっていること', () => {
      expect(wrapper.vm.$options.props.name.required).toBe(true);
    });
  });
  describe('template', () => {
    describe('v-on', () => {
      test('inputでinputTextメソッドが実行されること', () => {
        const stub = jest.fn();
        wrapper.setMethods({
          inputText: stub,
        });
        wrapper.trigger('input');
        expect(stub).toHaveBeenCalled();
      });
    });
  });
  describe('methods', () => {
    describe('inputText', () => {
      test('input-textイベントがemitされること', () => {
        wrapper.vm.inputText({ target: { value: 'inputValue' } });
        expect(wrapper.emitted('input-text')).not.toBeUndefined();
      });
      test('input-textイベントのemitで値が渡されること', () => {
        wrapper.vm.inputText({ target: { value: 'inputValue' } });
        expect(wrapper.emitted('input-text')[0][0].target.value).toBe('inputValue');
      });
    });
  });
});
