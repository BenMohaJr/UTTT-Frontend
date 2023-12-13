import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './styles.css';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Game } from './pages/Game';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </main>
  );
}

export default App;
