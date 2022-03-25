import React from "react";
import { Button } from "antd";
function HeaderButton({ toggle, name }) {
  return (
    <Button className={name} type="primary" size={"middle"} onClick={toggle}>
      {name}
    </Button>
  );
}

export default HeaderButton;
