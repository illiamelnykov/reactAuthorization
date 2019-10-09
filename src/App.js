import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRouter from './PrivateRoute';
import Home from './pages/Home';
import { AuthContext } from './context/auth';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = data => {
    localStorage.setItem('token', JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Route path='/' component={Login}></Route>
        <Route path="/signup" component={Signup} />
        <PrivateRouter path='/home' component={Home} />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
