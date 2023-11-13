// App.tsx

import React from 'react';
import Home from '../pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ItemPage } from '../pages/ItemPage';

export const  RouterHome =() => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Item" element={<ItemPage />} />
      </Routes>
    </Router>
  );
}

