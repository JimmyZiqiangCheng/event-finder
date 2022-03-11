import React, { useContext } from "react";
import "antd/dist/antd.css";
import { Modal, Button, Rate, message } from "antd";
import ThemeContext from "../../layout/theme";
import styles from "./rateModal.module.scss";

function RateModal() {
  const { showRating, setShowRating } = useContext(ThemeContext);
  const handleCancel = () => {
    setShowRating(false);
  };
  const handleChange = (r) => {
    console.log(`rating: ${r}`);
  };
  const handleOk = () => {
    message.success("Event Rated!", 1);
    setShowRating(false);
  };
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
