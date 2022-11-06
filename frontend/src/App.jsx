import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Learn from './Pages/Learn'
import Lesson from './Pages/Lesson'
import Asssessment from './Pages/Assessment';
import Vocabulary from './Pages/Vocabulary';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/learn" element={<Learn />} />
        <Route path="/search" element={<Vocabulary />} />
        <Route path='/assessment' element={<Asssessment />} />
        <Route path='/lesson' element={<Lesson />} />
      </Routes>
    </Router>
  );
}

export default App;
