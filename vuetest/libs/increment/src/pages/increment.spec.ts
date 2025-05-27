import { mount } from '@vue/test-utils';
import Increment from './increment.vue';

describe('Increment', () => {
  it('renders properly', () => {
    const wrapper = mount(Increment, {});
    expect(wrapper.text()).toContain(
      'Increment PageCurrent count: 0 Increment'
    );
  });
});
