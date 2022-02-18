import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import EventCalendar from "./EventCalendar";
import MyHeader from "./MyHeader";
import MySider from "./MySider";

const { Content } = Layout;

function Home() {
  return (
    <Layout>
      <MySider />
      <Layout className="site-layout">
        <MyHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <p className="placeholder">placeholder</p>
          <EventCalendar className="calendar" />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
