import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Error from "../Login/Error";

import "./Signup.css"

function Signup({ setUser }) {
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [formData, setFormData] = useState ({
        name: "",
        username: "",
        password: "",
        nationality: "",
        age: "",
        life_mission: "",
        country: ""
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
            life_mission: formData.life_mission,
            country: formData.country
          }),
        }).then((resp) => {
            if (resp.ok) {
              resp.json().then((user) => setUser(user));
            } else {
              resp.json().then((err) => setErrors(err.errors));
            }
        });
        //   :name, :username, :password, :nationality, :age, :life_mission ^^^
    
        setFormData({
            name: "",
            username: "",
            password: "",
            nationality: "",
            age: "",
            life_mission: "",
            country: ""
        });

        if (errors === []) {
            history.push("/mypage")
        }

        setErrors([]);
    }


    return (
        <>
            <Navbar />
            <div className='account-form-container'>
                <h2> Create An Account </h2>
                {errors && (
                    <p className="error"> 
                    {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                    ))} 
                    </p>
                )}
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
                    <label>
                    Country: 
                    <input
                        name='country'
                        type="text"
                        placeholder="Country..."
                        value={formData.country}
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