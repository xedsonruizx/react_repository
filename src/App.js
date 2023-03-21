import { useState } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaBeer } from 'react-icons/fa';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Components from './pages/Components';
import Profile from './pages/Profile';

import './assets/css/styles.scss';

function App() {

  return (
    <div className='App'>
      <Sidebar
      />
      {/* <main>
        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
          <FaBars />
        </div>
        <Routes>
          <Route path="/components" component={Components} />
          <Route path="/profile" component={Profile} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact>
            <Home image={image} handleImageChange={handleImageChange} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </main> */}
    </div>
  );
}

export default App;
