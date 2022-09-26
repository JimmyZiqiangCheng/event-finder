import React, { memo } from "react";
import { Badge } from "antd";
import { displayHostAvatar } from "../../../utils/helperFunctions";

function SideCard({ host }) {
  console.log("side car re-render");
  return (
    <div className="card-section card-host">
      <div className="title"> Event Host</div>
      <Badge.Ribbon text="host">
        <div className="host-info">
          {displayHostAvatar(host.photoUrl)}
          <p className="host-name">{host.name}</p>
        </div>
      </Badge.Ribbon>
    </div>
  );
}

export default memo(SideCard);
