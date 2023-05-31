import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from './components/Home';
import Candidates from './components/Candidates';
import InterviewFeedback from './components/InterviewFeedback';
import Reports from './components/Reports';
import Footer from './components/Footer';

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
        </Routes>

        <Footer />
      </Router>

    </>
  )
}

export default App