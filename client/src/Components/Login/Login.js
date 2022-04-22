import { React, useState, useHistory } from 'react';
// import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Error from './Error';
import './Login.css';

function Login({ onLogin }) {
  const history = useHistory();

  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState ({
      username: "",
      password: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        username: formData.username,
        password: formData.password
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => onLogin(user));
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });

    setFormData({
      username: "",
      password: ""
    })
  }

  function signupClick() {
    console.log('clicked')
    // history.push("/signup")
  }

  return (
    <>
      <Navbar />
      <div className='form-container'>
        <h2 id='sign-in-header'> Sign-In </h2>
        {errors && (
          <p className="error"> 
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))} 
          </p>
        )}
        <form onSubmit={handleSubmit}> 
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
          <input className='submit' type="submit" value="Submit" />
        </form>
        <p id='sign-up' onClick={signupClick}>or sign-up </p>
      </div>
    </>
  );

}

export default Login;