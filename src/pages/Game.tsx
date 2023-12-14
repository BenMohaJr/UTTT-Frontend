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
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              fill="none"
              width="50"
              height="50"
              viewBox="0 0 16 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 7 1 4l3-3m0 12h6.5a4.5 4.5 0 1 0 0-9H2"
              />
            </svg>
          </Button>
        </div>
        {boards.map((row, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              width: '180px',
              height: '180px'
            }}
          >
            {row}
          </div>
        ))}
      </div>
    </Container>
  );
}
