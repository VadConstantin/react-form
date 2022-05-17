import React, { useState } from 'react'

const MusicalForm = () => {

  const [title, setTitle] = useState("Best Musical Ever")
  const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"])
  const [locations, setLocations] = useState({
    Chicago: {
      dates: ["1/1", "2/2"],
      address: "chicago theater"
    },
    SanFrancisco: {
      dates: ["5/2"],
      address: "sf theater"
    }}
  )

  return (
    <div>
      <div>Hello {actors.join(', ')}</div>
      <div>Hello {locations.Chicago.address}</div>
    </div>


  )
}

export default MusicalForm;
