import './App.css';
import React from 'react';  
import Home from './comp/home';  
import Skills from './comp/skills';
import Projects from './comp/projects';
import Certifications from './comp/certifications';
import Autonomous from './comp/autonomous';
import Restaurant from './comp/restaurant';
import Chat from './comp/chat';
import Certificates from './comp/all_certificates'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for individual pages */}
        <Route path="/projects/autonomous" element={<Autonomous />} />
        <Route path="/projects/restaurant" element={<Restaurant />} />
        <Route path="/projects/chat" element={<Chat />} />
        <Route path='/all_certificates' element={<Certificates/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        
        {/* Default route shows homepage content */}
        <Route
          path="/"
          element={
            <div className='box1'>
              <div className='box2'>
                <Home />
                <Skills />
                <Projects />
                <Certifications />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
