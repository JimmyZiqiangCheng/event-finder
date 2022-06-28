import { Popover } from "antd";
import styles from "./myPopUp.module.scss";
function MyPopUp({ children, visible, setVisible, logout }) {
  const onClick = async () => {
    await logout();
    setVisible();
  };
  return (
    <div className={styles.my_popup}>
      <Popover
        className="my-popup"
        content={
          <div className="popup-content">
            <li className="popup-content-list">
              <ul>
                <a onClick={setVisible}>Settings</a>
              </ul>
              <ul>
                <a onClick={onClick}>Log Out</a>
              </ul>
            </li>
          </div>
        }
        trigger="click"
        visible={visible}
        onVisibleChange={setVisible}
      >
        {children}
      </Popover>
    </div>
  );
}

export default MyPopUp;
