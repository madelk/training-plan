import { mount } from '@vue/test-utils';
import traffic from './traffic.vue';

describe('traffic', () => {
  it('renders properly', () => {
    const wrapper = mount(traffic, {});
    expect(wrapper.text()).toContain('Welcome to traffic');
  });
});
