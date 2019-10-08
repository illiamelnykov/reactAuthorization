import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import { Card, Form, Input, Button, Errors } from '../components/AuthForm';
import { useAuth } from '../context/auth';
import request from '../utils/agent';

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthTokens } = useAuth();

  const referer = props.location.state ? props.location.state.referer : '/home';

  async function postLogin() {
      try {
        const data = await request('post', '/api/v2/current-user/login-session', {
          userName, password,
        }) 
        setAuthTokens(data);
        setLoggedIn(true);
      } catch {
        setIsError(true)  
      };
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <Card>
      <Form>
        <Input
          type="email"
          value={userName}
          onChange={e => {
            setUserName(e.target.value)
          }}
          placeholder="email"
        />
        <Input 
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value)
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
      {isError && <Errors>The username or password provided were incorrect</Errors>}
    </Card>
  );
}

export default Login;