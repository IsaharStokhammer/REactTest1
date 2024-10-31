import React, { useEffect, useState } from "react";
import MissionForm from "../missionForm/MissionForm";
import axios from "axios";
import { Mission } from "../../types/types";
import MissionItem from "../missionItem/MissionItem";
import { v4 as uuidv4 } from "uuid";


const BASE_URL = "https://reactexambackend.onrender.com/missions/:8281913";

const MissionsComponent: React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);

  const getMissions = async () => {
    try {
      console.log("fetching data");      
      const response = await axios.get<Mission[]>(BASE_URL);
      console.log(response.data);
      
      setMissions(response.data);
    } catch (error) {
      console.error("error featching data 😒", error);
    }
  };
  useEffect(() => {
    console.log("getting missions...🙄");    
    getMissions();
  }, []);
  
  
  
  //Create
  const addMission = async (mission: Mission): Promise<void> => {
    try {
      const response = await axios.post<Mission>(BASE_URL, {
        mission
      });
      getMissions();
    } catch (error) {
      console.error("cant add mission", error);
    }
  };

  const deleteMission = async (id: string): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      getMissions();
    } catch (error) {
      console.error("cant delete mission", error);
    }
  };
  const increaseMission = async (id: string): Promise<void> => {

    try {
      const singleMission: Mission | undefined = missions.find((mission) => mission.id === id);
      if (!singleMission) {
        throw new Error("cant find mission with this id");
      }
      if(singleMission.status === "Completed"){
        throw new Error("mission already completed");
      }
      singleMission.status = singleMission.status === "In progress" ? "Completed" : "In progress";
      await axios.post<Mission>(`${BASE_URL}/progress/:${id}`, {
        ...singleMission,
      });
      getMissions();
    } catch (error) {
      console.error("cant increase mission", error);
    }
  };

  return (
    <div className="missionsComponent">
        
      <MissionForm addMission={addMission}/>
      <ul>
        {
          missions.map((mission) => (
            <MissionItem
              key={mission.id}
              deleteMission={deleteMission}
              mission={mission}
              increaseMission={increaseMission}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default MissionsComponent;
