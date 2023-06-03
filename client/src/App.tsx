import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Candidates from './pages/Candidates';
import InterviewFeedback from './pages/InterviewFeedback';
import Reports from './pages/Reports';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import AddCandidate from './components/AddCandidate';

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/candidates' element={<Candidates />} />
          <Route path='/interview' element={<InterviewFeedback />} />
          <Route path='/reports' element={<Reports />} />
          <Route path="/addcandidate" element={<AddCandidate />} />
        </Routes>

        <Footer />
      </Router>

    </>
  )
}

export default App