import React from "react";
import ContentRoutes from "./content/ContentRoutes";
import MultiProvider from "../context/MultiProvider";
import { BrowserRouter as Router } from "react-router-dom";
import MySider from "./sider/MySider";
import MyHeader from "./header/MyHeader";
import "antd/dist/antd.min.css";
import { Layout } from "antd";

function AppLayout() {
  return (
    <MultiProvider>
      <Layout>
        <Router>
          <MySider />
          <Layout className="site-layout">
            <MyHeader />
            <ContentRoutes />
          </Layout>
        </Router>
      </Layout>
    </MultiProvider>
  );
}

export default AppLayout;
