import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import { useAuth } from '../context/auth';

import Sidebar from '../components/Sidebar';

const { Header, Footer, Sider, Content } = Layout;

function Home() {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div>
      <Layout>
        <Header>
          Header
          <Button type='primary' onClick={logOut}>logOut</Button>
        </Header>
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default Home;