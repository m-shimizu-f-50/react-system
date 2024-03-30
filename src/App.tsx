import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Top from './pages/homes/top';
import Profile from './pages/homes/profile';
import Skill from './pages/homes/skill';
import Production from './pages/homes/production';
import Contact from './pages/homes/contact';
import NoMatch from './pages/homes/nomatch';

const App: React.FC = () => {
  return (
    <>
      <h1>ポートフォリオサイト</h1>
      <ul>
        <li>
          <Link to='/'>Top</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
        <li>
          <Link to='/skill'>Skill</Link>
        </li>
        <li>
          <Link to='/production'>Production</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<Top />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/production' element={<Production />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NoMatch />} />
      </Routes>
      <h2>フッター</h2>
    </>
  );
};

export default App;
