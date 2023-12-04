// Game component
import Board, { BOARD_SIZE } from '../containers/Board';
import { Container } from 'react-bootstrap';

export function Game() {
  const boards: JSX.Element[][] = [];

  for (let i = 0; i < BOARD_SIZE; i += 3) {
    const row: JSX.Element[] = [];
    for (let j = i; j < i + 3; j++) {
      row.push(<Board key={j} onReset={handleReset} />);
    }
    boards.push(row);
  }

  function handleReset() {
    return;
  }

  return (
    <Container>
      {boards.map((row, index) => (
        <div key={index} style={{ display: 'flex' }}>
          {row}
        </div>
      ))}
    </Container>
  );
}
