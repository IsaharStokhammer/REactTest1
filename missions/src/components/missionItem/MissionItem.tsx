import React from "react";
import { Mission } from "../../types/types";
import "./MissionItem.css";

interface MissionItemProps {
  mission: Mission;
  deleteMission: (id: string) => Promise<void>;
  increaseMission: (id: string) => Promise<void>;
}
const changeBackgroundPerStatus = (status: string) => {
    switch (status) {
      case "In progress":
        return "orange";
      case "Completed":
        return "green";
        case "Pending":
            return "red";
      default:
        return "red";
    }
}
const MissionItem: React.FC<MissionItemProps> = ({
  mission: mission,
  deleteMission: deleteMission,
  increaseMission: increaseMission,
  
}) => {
  return (
    <li className={`mission-item`}>
      <div className={changeBackgroundPerStatus(mission.status)}>
        <h4>{mission.name}</h4>
        <p className="mission-status">{mission.status}</p>
        <p>{mission.priority}</p>
        <p>{mission.description}</p>
      </div>
      <button onClick={()=>deleteMission(mission._id)}>Delete</button>
      <button  onClick={()=>increaseMission(mission._id)}>progress</button>
    </li>
  );
};

export default MissionItem;