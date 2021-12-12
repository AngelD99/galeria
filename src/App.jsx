import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaVideos from './PaginaVideos';
import Login from './Login';
import Reproductor from './Reproductor';

export function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Routes>
            <Route path='/reproductor' element={<Reproductor />} />
            <Route path='/principal' element={<PaginaVideos />} />
            <Route path='/' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}
