import React from "react";
import "antd/dist/antd.css";
import { Modal, Button, Rate } from "antd";
import styles from "./modal.module.scss";
import { message } from "antd";

function RateModal({ showModal, setShowModal }) {
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleChange = (r) => {
    console.log(`rating: ${r}`);
  };
  const handleOk = () => {
    message.success("Event Rated!", 1);
    setShowModal(false);
  };
  return (
    <Modal
      className={styles.rate_modal}
      visible={showModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button
          className="rate-button"
          key="submit"
          type="primary"
          onClick={handleOk}
        >
          Submit
        </Button>,
      ]}
    >
      <h1>How do you rate this event?</h1>
      <Rate onChange={handleChange} allowHalf defaultValue={2.5} />
    </Modal>
  );
}

export default RateModal;
