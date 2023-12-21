// Game component
import { useEffect } from 'react';
import { ResetButton } from '../components/ResetButton';
import Board, { BOARD_SIZE } from '../containers/Board';
import { Box, Grid } from '@mui/material';
import '../styles.css';

export function Game() {
  const boards: JSX.Element[][] = [];

  buildBoard();
  function buildBoard() {
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
    return boards;
  }

  function handleReset() {
    return;
  }

  useEffect(() => {
    buildBoard();
  }, boards);

  return (
    <Box>
      <ResetButton onClick={() => buildBoard()}></ResetButton>
      <Box className="center-screen">
        <Grid container className="accordion-item" spacing={3} xs={2}>
          {boards.map((row, index) => (
            <Grid item key={index}>
              {row}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
