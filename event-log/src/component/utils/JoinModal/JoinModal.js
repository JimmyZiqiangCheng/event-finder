import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Modal, Button, Rate, message } from "antd";
import { ExclamationCircleTwoTone } from "@ant-design/icons";
import ThemeContext from "../../layout/theme";
import styles from "./join.module.scss";

function JoinModal() {
  const { showJoin, setShowJoin } = useContext(ThemeContext);
  const handleCancel = () => {
    setShowJoin(false);
  };
  const handleOk = () => {
    message.success("Event Joined!", 1);
    setShowJoin(false);
  };
  return (
    <Modal
      className={styles.join_modal}
      visible={showJoin}
      onCancel={handleCancel}
      onOk={handleOk}
      closable={false}
      footer={[
        <Button
          className="modal-button cancel-button"
          key="cancel"
          type="secondary"
          onClick={handleCancel}
        >
          cancel
        </Button>,
        <Button
          className="modal-button join-button"
          key="join"
          type="primary"
          onClick={handleOk}
        >
          Join
        </Button>,
      ]}
    >
      <div className="join-title">
        <ExclamationCircleTwoTone
          style={{ fontSize: "22px" }}
          twoToneColor="orange"
        />
        <h1>Are you sure you want to join this event?</h1>
      </div>
    </Modal>
  );
}

export default JoinModal;
