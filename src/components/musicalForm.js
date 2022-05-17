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

  const handleChangeTitle = ({target}) => {
    const { value } = target
    setTitle(value)
  }

  const handleChangeActors = ({target}) => {
    const { value } = target
    setActors(value)
  }

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="title"> Title ?</label>
          <input
            onChange={handleChangeTitle}
            id="title"
            name="title"
            value={title}
          />
        </div>

        <div className="form-group">
          <label htmlFor="actors"> Actors ?</label>
          <input
            onChange={handleChangeActors}
            id="actors"
            name="actors"
            value={actors}
          />
        </div>


      </form>
      <h2>Title : {title} </h2>
      <div><strong>Actors: </strong> {actors}</div>
      <div><strong>Locations: </strong> {Object.keys(locations).map(key => {
        return <li key={key}>{key}</li>
      })}</div>
    </div>


  )
}

export default MusicalForm;
