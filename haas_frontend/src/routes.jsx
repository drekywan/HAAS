// src/routes.jsx

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/AboutPage';
// ... other imports

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* ... other routes*/}
    </Routes>
  </Router>
);

export default AppRoutes;
