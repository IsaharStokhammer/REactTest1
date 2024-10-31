import React, { useEffect, useState } from "react";
import MissionForm from "../missionForm/MissionForm";
import axios from "axios";
import { Mission } from "../../types/types";
import MissionItem from "../missionItem/MissionItem";
import { v4 as uuidv4 } from "uuid";
import BasicSpinner from "../basicSpiner/BasicSpiner";


const BASE_URL = "https://reactexambackend.onrender.com/missions/:8281913";

const MissionsComponent: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [missions, setMissions] = useState<Mission[]>([]);

  const getMissions = async () => {
    try {
      setIsLoading(true);
      console.log("fetching data");      
      const response = await axios.get<Mission[]>(BASE_URL);
      console.log(response.data);
      
      setMissions(response.data);
    } catch (error) {
      console.error("error featching data", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    console.log("getting missions");    
    getMissions();
  }, []);

  const addMission = async (mission: Mission): Promise<void> => {
    try {
      const response = await axios.post<Mission>(BASE_URL, {
        mission,
        completed: false,
      });
      getMissions();
    } catch (error) {
      console.error("cant add todo", error);
    }
  };

  const deleteMission = async (id: string): Promise<void> => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      getMissions();
    } catch (error) {
      console.error("cant delete todo", error);
    }
  };
  const toggleCompletion = async (id: string): Promise<void> => {
    try {
      const singleMission: Mission | undefined = missions.find((mission) => mission.id === id);
      if (!singleMission) {
        throw new Error("cant find todo with this id");
      }
      await axios.put<Mission>(`${BASE_URL}/${id}`, {
        ...singleMission,
        // completed: !singleMission.completed,
      });
      getMissions();
    } catch (error) {
      console.error("cant toogle todo", error);
    }
  };

  return (
    <div className="missionsComponent">
      <ul>
        {isLoading ? (
          <BasicSpinner />
        ) : (
          missions.map((mission) => (
            <MissionItem
              key={mission.id}
              deleteMission={deleteMission}
              mission={mission}
              toggleCompletion={toggleCompletion}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default MissionsComponent;
