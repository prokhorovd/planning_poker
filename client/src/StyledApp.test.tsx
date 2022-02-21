import React from 'react';
import { render, screen } from '@testing-library/react';
import StyledApp from './StyledApp';

test('renders learn react link', () => {
  render(<StyledApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
