import React from 'react'
import MissionForm from './components/missionForm/MissionForm'
import { Mission } from './types/types'

const addMission: (mission: Mission) => Promise<void> = async (mission) => {
  // const response = await fetch('/api/missions', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     name: mission
  //   })
  // })
  // const data = await response.json()
  // console.log(data)
}

const App = () => {
  return (
    <div>
      <MissionForm addMission={addMission}/>
    </div>
  )
}

export default App