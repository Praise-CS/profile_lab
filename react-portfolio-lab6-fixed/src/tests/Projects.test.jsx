import { render, screen } from '@testing-library/react';
import Projects from '../pages/Projects';

describe('Projects Page', () => {
  test('renders Projects page title', () => {
 render(<Projects />);
    expect(screen.getByText(/My Projects/i)).toBeInTheDocument();
  });

   test('renders first project title', () => {
    render(<Projects />);
    expect(screen.getByText(/AI Text Summerizer/i)).toBeInTheDocument();
     });
});
