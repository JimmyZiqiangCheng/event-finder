import React from "react";
import "antd/dist/antd.css";
import { useParams } from "react-router-dom";
import { Modal, Button, message } from "antd";
import { ExclamationCircleTwoTone } from "@ant-design/icons";
import styles from "./modal.module.scss";
import { postAttendee } from "../../api/eventsApi";
import { useAuth } from "../../utils/customHooks";

function ConfirmModal({ showModal, setShowModal }) {
  const { id } = useParams();
  const { currentUser } = useAuth();
  const { name, email, photoURL } = currentUser;
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleOk = async () => {
    await postAttendee(id, name, photoURL, email);
    message.success("Event Joined!", 1);
    setShowModal(false);
  };

  return (
    <Modal
      className={styles.join_modal}
      visible={showModal}
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

export default ConfirmModal;
