import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage.jsx';
import { checkOut as CheckOut } from './components/checkOut.jsx';
import { orders as Orders } from './components/orders.jsx';
import { tracking as Tracking } from './components/tracking.jsx';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
  
  );
}

export default App
