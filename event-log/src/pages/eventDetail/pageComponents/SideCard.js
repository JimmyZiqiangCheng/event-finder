import React from "react";
import { Badge } from "antd";

function SideCard({ host }) {
  return (
    <div className="card-section card-host">
      <div className="title"> Event Host</div>
      <Badge.Ribbon text="host">
        <div className="host-info">
          <img src={host.photoUrl} alt="avatar" />
          <p className="host-name">{host.name}</p>
        </div>
      </Badge.Ribbon>
    </div>
  );
}

export default SideCard;
