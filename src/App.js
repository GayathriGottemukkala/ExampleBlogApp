import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.css"
import NavCom from './components/Navbar';
import Home from './components/homepage'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LearnPage from './components/learnpage';
import Mentorship from './components/mentorshippage';
import PracticePage from './components/practicepage';
import CompetePage from './components/competepage';
import JobPage from './components/jobspage';
import ProtectedRoute from './components/example';

function App() {
  return (
    <div className="App">
     <NavCom/>
     <div className='main-container'>
     <Routes>
      <Route path="/" element={ <Home/>}/>
     
      
      <Route path="/learn" element={<LearnPage />} />
      
      <Route path="/mentorship" element={<Mentorship/>}/>
      <Route path="/practice" element={<PracticePage/>}/>
      <Route path="/compete" element={<CompetePage/>}/>
      <Route path="/jobs" element={<JobPage/>}/>
     </Routes>
     </div>
     
    
    </div>
  );
}

export default App;


