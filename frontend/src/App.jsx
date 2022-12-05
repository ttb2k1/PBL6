import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Learn from './Pages/Learn'
import Lesson from './Pages/Lesson'
import Asssessment from './Pages/Assessment';
import Vocabulary from './Pages/Vocabulary';
import Header from './Components/Header';
import Slide from './Components/Slides';

const App = () => {
  return (
    <Router>
      <Header />
      <Slide />
      <Routes>
        <Route path="/" element={<Learn />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path='/assessment' element={<Asssessment />} />
        <Route path='/lesson' element={<Lesson />} />
      </Routes>
    </Router>
  );
}

export default App;
