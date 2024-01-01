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
    <Box className="center-screen">
      <ResetButton onClick={() => buildBoard()}></ResetButton>
      <Box>
        {boards.map((row, index) => (
          <Grid container spacing={0} key={index}>
            {row}
          </Grid>
        ))}
      </Box>
    </Box>
  );
}
