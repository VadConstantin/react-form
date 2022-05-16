import React, { useState} from 'react'
import './form.css'

const Form = () => {

  const [ profile, setProfile ] = useState({})

  const handleChange = ({target}) => {
    const { name, value } = target
    setProfile((prev) => {
      return {...prev, [name]: value}
    })
  }

  return(
    <div>
      <form className="form">
        <input
        onChange={handleChange}
        value={profile.firstName || ''}
        type="text"
        placeholder="First Name"
        name="firstName"
        />
        <input
          onChange={handleChange}
          value={profile.surName || ''}
          type="text"
          placeholder="Surname"
          name="surName"
        />
        <input
          onChange={handleChange}
          value={profile.age || ''}
          type="number"
          placeholder="Age"
          name="age"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Profil : {profile.firstName} {profile.surName}, you are {profile.age}</p>
    </div>
  )

}

export default Form;
