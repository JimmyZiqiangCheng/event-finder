import React from "react";
import styles from "./modal.module.scss";
import { Modal } from "antd";

function BasicModal({ children, visible, onCancel, title, footer }) {
  return (
    <Modal
      className={styles.basic_modal}
      visible={visible}
      onCancel={onCancel}
      title={title}
      footer={footer}
    >
      {children}
    </Modal>
  );
}

export default BasicModal;
