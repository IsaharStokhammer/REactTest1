import React from "react";
import { Mission } from "../../types/types";
import "./MissionItem.css";

interface MissionItemProps {
  mission: Mission;
  deleteMission: (id: string) => Promise<void>;
  increaseMission: (id: string) => Promise<void>;
}
const MissionItem: React.FC<MissionItemProps> = ({
  mission: mission,
  deleteMission: deleteMission,
  increaseMission: increaseMission,
}) => {
  return (
    <li className={`mission-item`}>
    {/* <li className={`todo-item ${mission.completed ? "completed" : ""} `}> */}
      <div className="mission-details">
        <h4>{mission.name}</h4>
        <p className="mission-status">{mission.status}</p>
        <p>{mission.priority}</p>
        <p>{mission.description}</p>
      </div>
      <button onClick={()=>deleteMission(mission._id)}>Delete</button>
      <button className={`${mission.status==="Completed" ? "green" : "red"}`} onClick={()=>increaseMission(mission._id)}>progress</button>
    </li>
  );
};

export default MissionItem;