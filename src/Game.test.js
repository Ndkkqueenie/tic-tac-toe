import { render, screen } from '@testing-library/react';
import Game from './Game';

test('renders game', () => {
  render(<Game />);
  const linkElement = screen.getByTestId("tic-game");
  expect(linkElement).toBeInTheDocument();
});
