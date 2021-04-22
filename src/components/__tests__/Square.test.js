import { render, screen } from '@testing-library/react';
import Square from '../Square';

test('renders square as button', () => {
  render(<Square />);
  const squareElement = screen.getByRole('button');
  expect(squareElement).toBeInTheDocument();
  expect(squareElement).not.toHaveAttribute('onClick')
});