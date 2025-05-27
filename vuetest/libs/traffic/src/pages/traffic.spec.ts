import { mount } from '@vue/test-utils';
import traffic from './traffic.vue';
import { useRoute, useRouter } from 'vue-router';

vi.mock('vue-router');

describe('traffic', () => {
  useRouter.mockReturnValue({
    replace: vi.fn(),
  });
  useRoute.mockReturnValue({
    query: vi.fn(),
  });
  beforeEach(() => {
    useRouter().replace.mockReset();
    useRoute().query.mockReset();
  });
  it('renders properly', () => {
    const wrapper = mount(traffic, {});
    expect(wrapper.text()).toContain(
      'Invalid light parameter. Reset to Default Light'
    );
  });
});
