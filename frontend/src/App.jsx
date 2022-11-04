import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Learn from './Pages/Learn/Learn'
import Search from './Pages/Search/Search'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/learn" element={<Learn />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
