import React, { useState } from "react";
import "antd/dist/antd.css";
import { useParams } from "react-router-dom";
import { Modal, Button, Rate } from "antd";
import styles from "./modal.module.scss";
import { message } from "antd";
import { postRating } from "../../services/eventsApi";

function RateModal({ showModal, setShowModal }) {
  const [rating, setRating] = useState(2.5);
  const { id } = useParams();
  const handleCancel = () => {
    setShowModal(false);
  };
  const handleChange = (r) => {
    setRating(r);
  };
  const handleOk = async () => {
    await postRating(id, rating);
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
