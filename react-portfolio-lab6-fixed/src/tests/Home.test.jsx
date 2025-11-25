import { render, screen } from '@testing-library/react';
import Home from '../Home';

test('renders Home page main title', () => {
  render(<Home />);
  expect(screen.getByText(/Welcome to My Portfolio/i)).toBeInTheDocument();
});

test('renders Home page subtitle', () => {
  render(<Home />);
  expect(screen.getByText(/Hi there, my name is Praise Babalola/i)).toBeInTheDocument();
});
