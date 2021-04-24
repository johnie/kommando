import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';
import mockData from '../../mockData';

import TabItem from './';

test('renders tab item with data', async () => {
  const { getByText } = render(TabItem, {
    tab: mockData[0],
    index: 0,
    currentIndex: 5,
  });
  const tabItem = getByText('Dashboard – Vercel');

  expect(tabItem).toHaveTextContent('Dashboard – Vercel');
});

test('tab item with active class', async () => {
  const { container } = render(TabItem, {
    tab: mockData[1],
    index: 1,
    currentIndex: 1,
  });

  const tabItem = container.querySelector('li');

  expect(tabItem).toHaveClass('bg-purple-800');
});

test('tab item with no active class', async () => {
  const { container } = render(TabItem, {
    tab: mockData[3],
    index: 3,
    currentIndex: 1,
  });

  const tabItem = container.querySelector('li');

  expect(tabItem).not.toHaveClass('bg-purple-800')
});
