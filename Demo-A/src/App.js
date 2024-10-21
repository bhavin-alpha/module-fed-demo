// src/App.js
import React from "react";
import { Link, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import DemoB from "./DemoB";
import DemoC from "./DemoC";
import DemoD from "./DemoD";

const A = () => {
  return <div>Hello world <Outlet /></div>
}

const B = () => {
  return <div>Hello world B</div>
}

const D = () => {
  return <div>Hello world D</div>
}

const App = () => {
  return (
    <div>
      <h1>Hello, React from Demo - A</h1>
      <button type="button" onClick={() => alert('fdsfds')} style={{ padding: 5 }}>
        B1
      </button>
      <p onClick={() => { alert('dsadsa') }}>Hello workld</p>
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/abc" style={{ padding: 5 }}>
            ABC
          </Link>
          <Link to="abc/d" style={{ padding: 5 }}>
            D
          </Link>
          <Link to="/def" style={{ padding: 5 }}>
            DEF
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
          <Route path="/" element={<Home />}>
            <Route
              path="demob/*"
              element={<DemoB />}
            />
            <Route path="/democ" element={<DemoC />} />
            <Route path="/demod" element={<DemoD />} />
          </Route>
          <Route path="/abc/*" element={<A />}>
            <Route path="d" element={<D />}></Route>
          </Route>
          <Route path="/def" element={<B />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
