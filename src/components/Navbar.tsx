// Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  CssBaseline,
  Box
} from '@mui/material';
import { Grid3x3 } from '@mui/icons-material';

export const Navbar = () => {
  return (
    <AppBar sx={{ background: 'black' }}>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <Grid3x3 />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Ultimate Tic Tac Toe
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={Link} to="/game">
            Game
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
