

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import './app.css'

import { Link, Route, BrowserRouter as Router, Routes, useNavigate, Outlet } from "react-router-dom";


const Sample = ({ text }) => {
    return (
        <div>
            {text}
        </div>
    )
}


const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <button type="button" onClick={() => alert('fdsfds')} style={{ padding: 5 }}>
                B1
            </button>
            <p onClick={() => { alert('dsadsa') }}>Hello workld</p>
            <button type="button" onClick={() => navigate(`/demob/b2`)} style={{ padding: 5 }}>
                B2
            </button>
            <button onClick={() => navigate(`/demob/b3`)} style={{ padding: 5 }}>
                B3
            </button>
            <button onClick={() => navigate(`/demob/b4`)} style={{ padding: 5 }}>
                B4
            </button>
            <Link to="dashboard">Dashboard</Link>
            <button onClick={() => navigate(`./dashboard`)} style={{ padding: 5 }}>
                Dashboard btn
            </button>
        </>
    )
}

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={() => navigate('profile')}>Go to profile</button>
            <button onClick={() => navigate('settings')}>Go to settings</button>
            <Outlet />
        </div>
    );
};


const Profile = () => {
    return (
        <div>
            <h3>Profile Page</h3>
            <p>This is the profile page under Dashboard.</p>
        </div>
    );
};


const Settings = () => {
    return (
        <div>
            <h3>Settings Page</h3>
            <p>This is the settings page under Dashboard.</p>
        </div>
    );
};


const App = () => {
    return (
        <Router basename="demob">
            <h1>Hello, React from Demo - BB</h1>
            <>
                <Routes >
                    <Route index element={<Header />} />
                    <Route path="dashboard/*" element={<Dashboard />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    <Route path="abc" element={<Sample text="FROM ABC" />}></Route>
                </Routes>
            </>
        </Router>
    );
};


ReactDOM.render(<App />, document.getElementById("root"));

export default App;
