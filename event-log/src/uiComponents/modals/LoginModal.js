import React from "react";
import LoginModalForm from "../forms/LoginModalForm";
import BasicModal from "./BasicModal";

function LoginModal({ showLogin, toggleLogin }) {
  return (
    <BasicModal
      visible={showLogin}
      onCancel={toggleLogin}
      title={"Login"}
      footer={null}
    >
      <LoginModalForm toggleLogin={toggleLogin} />
    </BasicModal>
  );
}

export default LoginModal;
