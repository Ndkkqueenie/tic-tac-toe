import { render, screen } from '@testing-library/react';
import Board from '../Board';

test('renders board', () => {
  render(<Board />);
  const boardElement = screen.getByTestId("board-game");
  expect(boardElement).toBeInTheDocument();
});