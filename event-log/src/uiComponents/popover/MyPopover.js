import { Popover } from "antd";
function MyPopover({ children, visible, setVisible, onClick }) {
  return (
    <Popover
      content={
        <div>
          <a onClick={setVisible}>Settings</a>
          <a onClick={onClick}>Log Out</a>
        </div>
      }
      title="Title"
      trigger="click"
      visible={visible}
      onVisibleChange={setVisible}
    >
      {children}
    </Popover>
  );
}

export default MyPopover;
