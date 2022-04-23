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

export const formatUser = (user) => {
  if (user) {
    return {
      id: user.uid,
      name: user.displayName || user.email,
      email: user.email,
      token: user.stsTokenManager,
      provider: user.providerData[0].providerId,
      photoURL: user.photoURL,
    };
  } else {
    return null;
  }
};
