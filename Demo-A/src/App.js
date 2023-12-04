// src/App.js
import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import DemoB from "./DemoB";
import DemoC from "./DemoC";
import DemoD from "./DemoD";

const App = () => {
  return (
    <div>
      <h1>Hello, React from Demo - A</h1>
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/demob" style={{ padding: 5 }}>
            Demo B
          </Link>
          <Link to="/democ" style={{ padding: 5 }}>
            Demo C
          </Link>
          <Link to="/demod" style={{ padding: 5 }}>
            Demo D
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demob" element={<DemoB />} />
          <Route path="/democ" element={<DemoC />} />
          <Route path="/demod" element={<DemoD />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
