import React, { useState} from 'react'
import './form.css'

const Form = () => {

  const [ profile, setProfile ] = useState({})

  const handleChange = ({target}) => {
    const { name, value } = target
    console.log(name)

    setProfile((prev) => {
      return {...prev, [name]: value}
    })
  }

  return(
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="name"> First Name: </label>
          <input className="form-control"
            onChange={handleChange}
            value={profile.firstName || ''}
            type="text"
            placeholder="First Name"
            name="firstName"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="surName"> Family Name: </label>
          <input className="form-control"
            onChange={handleChange}
            value={profile.surName || ''}
            type="text"
            placeholder="Surname"
            name="surName"
            id="surName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Age"> Age: </label>
          <input className="form-control"
            onChange={handleChange}
            value={profile.age || ''}
            type="number"
            placeholder="Age"
            name="age"
            id="Age"
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
      <p>Profil : {profile.firstName} {profile.surName} {profile.age}</p>
    </div>
  )

}

export default Form;
