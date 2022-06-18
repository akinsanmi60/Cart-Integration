import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/cart"
          element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
