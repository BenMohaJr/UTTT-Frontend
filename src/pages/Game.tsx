// Game component
import Board, { BOARD_SIZE } from '../containers/Board';
import { Button, Container } from 'react-bootstrap';

export function Game() {
  const boards: JSX.Element[][] = [];
  const posX = 4;
  let posY = 2;

  for (let i = 0; i < BOARD_SIZE; i += 3) {
    const row: JSX.Element[] = [];
    posY++;

    for (let j = i; j < i + 3; j++) {
      row.push(
        <Board
          key={j}
          onReset={handleReset}
          boardPosX={posX}
          boardPosY={posY}
        />
      );
    }
    boards.push(row);
  }

  function handleReset() {
    return;
  }

  return (
    <Container>
      <div>
        <div className="d-flex flex-row-reverse align-items-center">
          <Button style={{ position: 'relative' }} variant="outline-primary">
            Reset
          </Button>
        </div>
        {boards.map((row, index) => (
          <div key={index} style={{ display: 'flex' }}>
            {row}
          </div>
        ))}
      </div>
    </Container>
  );
}
