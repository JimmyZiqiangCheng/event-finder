import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const debounce = (func, delay) => {
  let myTimeOut;
  return () => {
    clearTimeout(myTimeOut);
    myTimeOut = setTimeout(() => func(), delay);
  };
};

export const displayAvatar = (url, index) => {
  return url ? (
    <Avatar data-testid="avatar-url" src={url} key={index} />
  ) : (
    <Avatar data-testid="avatar-default" icon={<UserOutlined />} key={index} />
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

export const getTimeDiff = (date1, date2) => {
  const diff = Math.floor(date1.diff(date2) / (1000 * 3600 * 24));
  let ans;
  if (diff > 365) {
    const year = Math.floor(diff / 365);
    const unit = year > 1 ? "years" : "year";
    ans = `${year} ${unit} ago`;
  } else if (diff > 30) {
    const month = Math.floor(diff / 30);
    const unit = month > 1 ? "months" : "month";
    ans = `${month} ${unit} ago`;
  } else if (diff > 0) {
    const unit = diff > 1 ? "days" : "day";
    ans = `${diff} ${unit} ago`;
  } else {
    ans = "just now";
  }
  return ans;
};
