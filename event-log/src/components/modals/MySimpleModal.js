import React, { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import { message } from "antd";
import JoinModal from "./SimpleModal/JoinModal";
import RateModal from "./SimpleModal/RateModal";

function MySimpleModal(props) {
  const { isRateModal } = props;
  const { showRating, setShowRating } = useContext(ThemeContext);
  const handleRatingCancel = () => {
    setShowRating(false);
  };
  const handleRatingChange = (r) => {
    console.log(`rating: ${r}`);
  };
  const handleRatingOk = () => {
    message.success("Event Rated!", 1);
    setShowRating(false);
  };

  const { showJoin, setShowJoin } = useContext(ThemeContext);
  const handleJoinCancel = () => {
    setShowJoin(false);
  };
  const handleJoinOk = () => {
    message.success("Event Joined!", 1);
    setShowJoin(false);
  };

  return isRateModal ? (
    <RateModal
      showRating={showRating}
      handleOk={handleRatingOk}
      handleChange={handleRatingChange}
      handleCancel={handleRatingCancel}
    />
  ) : (
    <JoinModal
      showJoin={showJoin}
      handleOk={handleJoinOk}
      handleCancel={handleJoinCancel}
    />
  );
}

export default MySimpleModal;
