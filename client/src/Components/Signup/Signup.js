import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Signup.css"

function Signup() {
    const [formData, setFormData] = useState ({
        name: "",
        username: "",
        password: "",
        nationality: "",
        age: "",
        life_mission: ""
    });
  
    function handleChange(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      })
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            name: formData.name,
            username: formData.username,
            password: formData.password,
            nationality: formData.nationality,
            age: formData.age,
            life_mission: formData.life_mission
          }),
        });
        //   :name, :username, :password, :nationality, :age, :life_mission ^^^
    
        setFormData({
            name: "",
            username: "",
            password: "",
            nationality: "",
            age: "",
            life_mission: ""
        });
    }


    return (
        <>
            <Navbar />
            <div className='account-form-container'>
                <h2> Create An Account </h2>
                <form onSubmit={handleSubmit}> 
                    <label>
                    Full Name: 
                    <input
                        name='name'
                        type="text"
                        placeholder="first and last name..."
                        value={formData.name}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Username: 
                    <input
                        name='username'
                        type="text"
                        placeholder="username..."
                        value={formData.username}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Password: 
                    <input
                        name='password'
                        type="text"
                        placeholder="password..."
                        value={formData.password}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Nationality: 
                    <input
                        name='nationality'
                        type="text"
                        placeholder="nationality..."
                        value={formData.nationality}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Age: 
                    <input
                        name='age'
                        type="text"
                        placeholder="age..."
                        value={formData.age}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    Life Mission: 
                    <input
                        name='life_mission'
                        type="text"
                        placeholder="my life mission is..."
                        value={formData.life_mission}
                        onChange={handleChange}
                    />
                    </label>
                    <input className='submit' type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default Signup;