import '@testing-library/jest-dom/extend-expect';

import { render, fireEvent } from '@testing-library/svelte';

import SearchInput from './';

test('renders input with value', async () => {
  const { getByRole } = render(SearchInput, {
    value: 'this tab',
    onChange: () => {},
    onKeyDown: () => {},
  });
  const search = getByRole('textbox');

  expect(search.value).toBe('this tab');
});

test('focus on search element', async () => {
  const { getByRole } = render(SearchInput, {
    value: '',
    onChange: () => {},
    onKeyDown: () => {},
  });
  const search = getByRole('textbox');

  expect(document.activeElement).toBe(search);
})
