import React from "react";
import MyContent from "./content/MyContent";
import ThemeProvider from "../context/themeContext";
import AuthProvider from "../context/authContext";
import MySider from "./sider/MySider";
import MyHeader from "./header/MyHeader";
import "antd/dist/antd.css";
import { Layout } from "antd";
import { onAuthStatusChange } from "../services/AuthService";
import { useWillMount } from "../utils/customHooks";

function MyLayout() {
  return (
    <AuthProvider
      onAuthStatusChange={onAuthStatusChange}
      useWillMount={useWillMount}
    >
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
