import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './reset.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Loacation from './pages/Location';
import Projects from './pages/Projects';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='impact' element={<Impact />} />
          <Route path='locatin' element={<Loacation />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
