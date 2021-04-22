import { render, screen } from '@testing-library/react';
import Game from './Game';

test('renders game', () => {
  render(<Game />);
  const gameElement = screen.getByTestId("tic-game");
  expect(gameElement).toBeInTheDocument();
});
