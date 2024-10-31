import React from 'react'
import MissionForm from './components/missionForm/MissionForm'
import { Mission } from './types/types'
import MissionsComponent from './components/MissionsComponent/MissionsComponent'

const addMission: (mission: Mission) => Promise<void> = async (mission) => {
  console.log(mission);

}

const App = () => {
  return (
    <div>
      <MissionForm addMission={addMission}/>
      <MissionsComponent />
    </div>
  )
}

export default App