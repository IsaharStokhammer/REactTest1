import React, { useState } from "react";
import { Mission } from "../../types/types";

interface MissionFormProps {
  addMission: (mission: Mission) => Promise<void>;
}

const MissionForm: React.FC<MissionFormProps> = ({
  addMission: addMission,
}) => {
  const [newMission, setNewMission] = useState<Mission | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newMission) {
        console.log("no mission");
        
      return;
    }
    console.log(newMission);
    
    addMission(newMission);
    setNewMission(null);
  };
  return (
    <form className="mission-form" onSubmit={handleSubmit}>
      <input
        type="text"
        // onChange={(e) => setNewMission(e.target.value)}
        placeholder="Add new Mission"
      />
      <button type="submit">Add Mission</button>
    </form>
  );
};

export default MissionForm;
