import React from 'react';
import '../styles.css';

export type Player = 'X' | 'O' | null;

type TileProps = {
  value: Player;
  winner: Player;
  onClick: () => void;
};

function Tile({ value, onClick, winner }: TileProps) {
  const disabled = Boolean(value) || Boolean(winner);

  return (
    <button
      className={`square ${value ? `square_${value.toLowerCase()}` : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}

export default Tile;
