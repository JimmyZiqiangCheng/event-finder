import { Popover } from "antd";
import styles from "./myPopover.module.scss";
function MyPopover({ children, visible, setVisible, logout }) {
  const onClick = async () => {
    await logout();
    setVisible();
  };
  return (
    <div className={styles.my_popover}>
      <Popover
        className="my-popover"
        content={
          <div className="popover-content">
            <li className="popover-content-list">
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

export default MyPopover;
