import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Developer from './Developer';
import Flexzapp from './Flexzapp';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  // return (
  //   <Router>
  //     <div>
  //       {/* <Navbar />
  //       <Header />
  //       <About />
  //       <Developer /> */}
  //       <Footer />
  //     </div>
  //   </Router>
  // );

  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Routes>
          <Route
            exact
            path="/github"
            element={() => {
              window.location.replace('https://github.com/IbrahimYemi');
              return null;
            }}
          />
          <Route exact path="/about" element={<About />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/flexzapp" element={<Flexzapp />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
