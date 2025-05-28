import { mount } from '@vue/test-utils';
import todo from './todo.vue';
import { useRoute, useRouter } from 'vue-router';

vi.mock('vue-router');

describe('todo', () => {
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
    const wrapper = mount(todo, {});
    expect(wrapper.text()).toContain(
      'Invalid light parameter. Reset to Default Light',
    );
  });
});
