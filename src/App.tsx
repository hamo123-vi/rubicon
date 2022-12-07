import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Page from './components/Page';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:tab/:id" element={<Page />} />
    </Routes>
  </Router>
  );
}

export default App;
