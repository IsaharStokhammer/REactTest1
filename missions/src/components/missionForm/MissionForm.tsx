import React, { useRef, useState } from "react";
import { Mission } from "../../types/types";
import { v4 as uuid } from "uuid";

interface MissionFormProps {
  addMission: (mission: Mission) => Promise<void>;
}

const MissionForm: React.FC<MissionFormProps> = ({
  addMission: addMission,
}) => {

  const inputName = useRef<any>(null);
  const inputStatus = useRef<any>(null);
  const inputPriority = useRef<any>(null);
  const inputDescription = useRef<any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newMissionInput: Mission = {
      name: inputName.current.value,
      status: inputStatus.current.value,
      priority: inputPriority.current.value,
      description: inputDescription.current.value,
      id : uuid()
    };
    console.log(newMissionInput);

    // console.log(newMission);

    addMission(newMissionInput);
  };
  return (
    <form className="mission-form" onSubmit={handleSubmit}>
      <input ref={inputName} placeholder="name here" />
      <select ref={inputStatus}>
        <option value="In progress">In progress</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
      <select ref={inputPriority}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input type="text" placeholder="description" ref={inputDescription} />
      <button type="submit">Add Mission</button>
    </form>
  );
};

export default MissionForm;
