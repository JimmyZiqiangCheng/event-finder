import React from "react";
import BasicModal from "./BasicModal";
import SignupModalForm from "../forms/SignupModalForm";

function SignupModal({ showSignup, toggleSignup }) {
  return (
    <BasicModal
      visible={showSignup}
      onCancel={toggleSignup}
      title={"Sign up"}
      footer={null}
    >
      <SignupModalForm toggleSignup={toggleSignup} />
    </BasicModal>
  );
}

export default SignupModal;
