import { Routes, Route } from 'react-router-dom';

import './styles.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Game } from './pages/Game';
import { Navbar } from './components/Navbar';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <Container>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Container>
  );
}

export default App;
