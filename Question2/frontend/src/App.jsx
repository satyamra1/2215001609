import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Feed from '../pages/Feed';

function App() {
  return (
    <Router>
      <nav>
        
        <Link to="/feed">Feed</Link>
      </nav>
      <Routes>
        
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
