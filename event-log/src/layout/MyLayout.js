import React from "react";
import MyContent from "./content/MyContent";
import ThemeProvider from "../context/themeContext";
import AuthProvider from "../context/authContext";
import MySider from "./sider/MySider";
import MyHeader from "./header/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";

function MyLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Layout>
          <MySider />
          <Layout className="site-layout">
            <MyHeader />
            <MyContent />
          </Layout>
        </Layout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyLayout;
