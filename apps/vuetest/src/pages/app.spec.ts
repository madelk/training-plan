import { mount } from '@vue/test-utils';
import app from './about.vue';

describe('Increment', () => {
  it('renders properly', () => {
    const wrapper = mount(app, {});
    expect(wrapper.text()).toContain('This is an about page.');
  });
});
