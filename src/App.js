import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Location from './pages/Location';
const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Menu />} />
          <Route path='/location' element={<Location />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App