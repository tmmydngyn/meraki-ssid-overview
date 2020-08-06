import 'antd/dist/antd.css';

import React from 'react';
import { NavigationBar } from './NavigationBar';
import { SsidOverview } from './SsidOverview';
import { SearchBar } from './SearchBar';
import { Layout } from 'antd';
import ciscoMerakiLogo from '../images/cisco-meraki-white.svg'

const { Header, Footer, Sider, Content } = Layout;

export const AntDApp = () => {
  return (
    <Layout>
      <Sider>
        <img style={{ padding: "1rem", width: "100%" }} src={ciscoMerakiLogo} alt="Cisco Meraki logo" />
        <NavigationBar />
      </Sider>
      <Layout>
        <Header style={{ backgroundColor: "white" }}>
          <SearchBar />
        </Header>
        <Content>
          <SsidOverview />
        </Content>
        <Footer>
          © 2020 Cisco Systems, Inc.
        </Footer>
      </Layout>
    </Layout>
  );
};
