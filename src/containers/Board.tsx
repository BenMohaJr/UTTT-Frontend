/** @format */

import { useState, useEffect } from 'react';
import Tile from './Tile';
import '../styles.css';
import { Box, Container, Grid, Paper } from '@mui/material';
import React from 'react';

export const BOARD_SIZE = 9;
const TILES_IN_ROW = 3;

type Choice = 'O' | 'X';

interface BoardProps {
  onReset: () => void;
  boardPosX: number;
  boardPosY: number;
}

function Board({ onReset, boardPosX, boardPosY }: BoardProps) {
  const [squares, setSquares] = useState(Array(BOARD_SIZE).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(
    Math.random() < 0.5 ? 'X' : 'O'
  );
  const [winner, setWinner] = useState<null | Choice>(null);

  useEffect(() => {
    checkWinner();
  }, [squares, currentPlayer]);

  function calculateWinningCombinations(): number[][] {
    const combinations: number[][] = [];

    // Rows
    for (let i = 0; i < BOARD_SIZE; i += TILES_IN_ROW) {
      const row = Array.from({ length: TILES_IN_ROW }, (_, index) => i + index);
      combinations.push(row);
    }

    // Columns
    for (let i = 0; i < TILES_IN_ROW; i++) {
      const col = Array.from(
        { length: TILES_IN_ROW },
        (_, index) => i + index * TILES_IN_ROW
      );
      combinations.push(col);
    }

    // Diagonals
    const diagonal1 = Array.from(
      { length: TILES_IN_ROW },
      (_, index) => index * (TILES_IN_ROW + 1)
    );
    const diagonal2 = Array.from(
      { length: TILES_IN_ROW },
      (_, index) => (index + 1) * (TILES_IN_ROW - 1)
    );
    combinations.push(diagonal1, diagonal2);

    return combinations;
  }

  function checkWinner() {
    const winningCombinations = calculateWinningCombinations();

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        setWinner(squares[a]);
        PaintBoard(squares[a]);
        return;
      }
    }
  }

  function PaintBoard(winner: string) {
    return;
  }

  function setTileValue(clickIndex: number) {
    if (squares[clickIndex] || winner) {
      return;
    }

    const newData = squares.map((val, squaresIndex) =>
      clickIndex === squaresIndex ? currentPlayer : val
    );

    setSquares(newData);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  function reset() {
    setSquares(Array(BOARD_SIZE).fill(null));
    setWinner(null);
    setCurrentPlayer(Math.random() < 0.5 ? 'X' : 'O');
    onReset();
  }

  const renderTile = (index: number) => {
    return (
      <Tile
        winner={winner}
        key={index}
        onClick={() => setTileValue(index)}
        value={squares[index]}
      />
    );
  };

  return (
    <React.Fragment>
      <Grid item>{renderTile(0)}</Grid>
      <Grid item>{renderTile(1)}</Grid>
      <Grid item>{renderTile(2)}</Grid>
      <Grid item>{renderTile(3)}</Grid>
      <Grid item>{renderTile(4)}</Grid>
      <Grid item>{renderTile(5)}</Grid>
      <Grid item>{renderTile(6)}</Grid>
      <Grid item>{renderTile(7)}</Grid>
      <Grid item>{renderTile(8)}</Grid>
    </React.Fragment>
  );
}

export default Board;
