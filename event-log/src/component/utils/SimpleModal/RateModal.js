import React from "react";
import "antd/dist/antd.css";
import { Modal, Button, Rate } from "antd";
import styles from "./rateModal.module.scss";

function RateModal(props) {
  const { showRating, handleOk, handleCancel, handleChange } = props;
  return (
    <Modal
      className={styles.rate_modal}
      visible={showRating}
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
