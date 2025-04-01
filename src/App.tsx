
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import About from '@/pages/About';
import Exhibitions from '@/pages/Exhibitions';
import Gallery from '@/pages/Gallery';
import Programs from '@/pages/Programs';
import ProgramDetail from '@/pages/ProgramDetail';
import NotFound from '@/pages/NotFound';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/exhibitions" element={<Exhibitions />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:programId" element={<ProgramDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
