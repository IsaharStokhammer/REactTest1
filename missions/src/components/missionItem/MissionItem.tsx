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
        <h4 className="mission-status">{mission.status}</h4>
        <h4>{mission.priority}</h4>
        <h4>{mission.description}</h4>
      </div>
      <button onClick={()=>deleteMission(mission.id)}>Delete</button>
      <button className={`${mission.status==="Completed" ? "green" : "red"}`} onClick={()=>increaseMission(mission.id)}>progress</button>
    </li>
  );
};

export default MissionItem;