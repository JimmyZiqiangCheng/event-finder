import React from "react";
import { Button } from "antd";
function ToggleButton({ onClick, name }) {
  return (
    <Button className={name} type="primary" size={"middle"} onClick={onClick}>
      {name}
    </Button>
  );
}

export default ToggleButton;
