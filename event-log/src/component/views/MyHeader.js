import React, { useContext } from "react";
import "../view.css";
import "antd/dist/antd.css";
import { Layout, Button } from "antd";
import ThemeContext from "./theme";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header } = Layout;
function MyHeader() {
  const { collapsed, setCollapsed } = useContext(ThemeContext);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header className="site-layout-background my-header" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: toggle,
      })}
      <div className="header-button-group">
        <Button className="header-button" type="primary" size={"middle"}>
          {" "}
          Login{" "}
        </Button>
        <Button className="header-button" type="primary" size={"middle"}>
          {" "}
          Sign Up{" "}
        </Button>
      </div>
    </Header>
  );
}

export default MyHeader;
