import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const debounce = (func, delay) => {
  let myTimeOut;
  return () => {
    clearTimeout(myTimeOut);
    myTimeOut = setTimeout(() => func(), delay);
  };
};

export const displayAvatar = (url) => {
  return url ? (
    <Avatar data-testid="avatar-url" src={url} />
  ) : (
    <Avatar data-testid="avatar-default" icon={<UserOutlined />} />
  );
};
