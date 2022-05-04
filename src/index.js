import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Menu from './components/Menu.js';
import Welcome from './components/Welcome.js';
import Blogs from './components/Blogs.js';
import Work from './components/Work.js';
import Contact from './components/Contact.js';
import './index.css';

ReactDOM.render(
  <>
    <Router>
      <Menu/>
      <div className='pageContent'>
        <Routes>
          <Route path="/" exact element={<Welcome/>}/>
          <Route path="/blogs" exact element={<Blogs/>}/>
          <Route path="/work" exact element={<Work/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  </>
  ,
  document.querySelector('#root')
);