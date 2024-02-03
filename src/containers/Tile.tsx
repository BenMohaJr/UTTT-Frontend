import React from 'react';
import '../styles.css';
import { Button } from '@mui/material';
export type Player = 'X' | 'O' | null;

type TileProps = {
  value: Player;
  winner: Player;
  onClick: () => void;
};

function Tile({ value, onClick, winner }: TileProps) {
  const disabled = Boolean(value) || Boolean(winner);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        className={`square ${value ? `square_${value.toLowerCase()}` : ''} ${
          value ? `animation_${value.toLowerCase()}` : ''
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        {value}
      </Button>
    </div>
  );
}

export default Tile;
