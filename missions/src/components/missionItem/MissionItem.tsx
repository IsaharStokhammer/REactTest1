import React from "react";
import { Mission } from "../../types/types";

interface MissionItemProps {
  mission: Mission;
  deleteMission: (id: string) => Promise<void>;
  toggleCompletion: (id: string) => Promise<void>;
}
const MissionItem: React.FC<MissionItemProps> = ({
  mission: mission,
  deleteMission: deleteMission,
  toggleCompletion,
}) => {
  return (
    <li className={`mission-item`}>
    {/* <li className={`todo-item ${mission.completed ? "completed" : ""} `}> */}
      <div className="mission-status-and-text" onClick={()=>toggleCompletion(mission.id)}>
        <span>{mission.name}</span>
        <span className="mission-status">{mission.status}</span>
        <span>{mission.priority}</span>
        <span>{mission.description}</span>

      </div>
      <button onClick={()=>deleteMission(mission.id)}>Delete</button>
    </li>
  );
};

export default MissionItem;