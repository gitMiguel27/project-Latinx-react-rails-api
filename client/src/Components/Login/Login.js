import {React, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
// import '../Login.css';
// import { Button, Error, Input, FormField, Label } from "../styles";

function Login( {onLogin} ) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();
  console.log("history: ", history)

  async function loginUser(credentials) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .then(json => {
          history.push('/home')
          // setToken(json);
      })
      .catch(error => {
          history.push('/');
          console.log(error);
      });
  }

  const handleSubmit = async e => {
      e.preventDefault();
      await loginUser({
          username,
          password
      });
  }

  return (
    <div>
      <Navbar />
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            <p className="litext"><strong>USERNAME</strong></p>
            <input type= "text" onChange={e => setUserName(e.target.value)}/>
          </label>
          <label>
            <p className="litext"><strong>PASSWORD</strong></p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login