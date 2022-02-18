import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import ThemeContext from "./theme";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;
function MyHeader() {
  const { collapsed, setCollapsed } = useContext(ThemeContext);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
      })}
    </Header>
  );
}

export default MyHeader;
