import React from "react";
import ContentRoutes from "./content/ContentRoutes";
import ThemeProvider from "../context/themeContext";
import AuthProvider from "../context/authContext";
import { BrowserRouter as Router } from "react-router-dom";
import MySider from "./sider/MySider";
import MyHeader from "./header/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";

function AppLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <Router>
            <MySider />
            <Layout className="site-layout">
              <MyHeader />
              <ContentRoutes />
            </Layout>
          </Router>
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default AppLayout;
