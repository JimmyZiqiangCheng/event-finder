import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";

const { Content } = Layout;

function Home() {
  return (
    <Layout>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        ></Content>
      </Layout>
    </Layout>
  );
}

export default Home;
