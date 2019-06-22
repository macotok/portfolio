import { shallowMount } from '@vue/test-utils';
import AtButton from '@/components/atoms/form/AtButton';

describe('AtButton test', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(AtButton, {
      slots: {
        default: '<div data-test="slotContent">slot content</div>',
      },
    });
  });
  describe('v-on', () => {
    test('clickでclickButtonメソッドが実行されること', () => {
      const stub = jest.fn();
      wrapper.setMethods({
        clickButton: stub,
      });
      wrapper.trigger('click');
      expect(stub).toHaveBeenCalled();
    });
  });
  describe('slot', () => {
    test('slotにコンテンツが挿入できること', () => {
      const slotContent = wrapper.find('[data-test="slotContent"]');
      expect(slotContent.exists()).toBe(true);
      expect(slotContent.text()).toBe('slot content');
    });
  });
});
