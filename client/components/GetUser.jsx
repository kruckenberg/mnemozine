import React, { useState } from 'react';

const GetUser = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState({ loggedIn: undefined, userId: undefined });

  const onNameChange = e => setName(e.target.value);
  const onEmailChange = e => setEmail(e.target.value);
  const onPasswordChange = e => setPassword(e.target.value);
  const onLogin = (e, status) => setLoggedIn(status)

  const handleSubmit = e => {
    e.preventDefault();

    const user = { name, email, password };
    const postOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    };

    const action = e.target.id
    if (action === 'loginButton') {
      fetch('http://localhost:8080/login', postOptions)
        .then((response) => { 
          const [key, value] = document.cookie.split('=');
          if (response.ok) { 
            onLogin(e, { loggedIn: true, userId: Number(value) });
          } else {
            onLogin(e, { loggedIn: false, userId: undefined });
          }
        })
        .catch((error) => {
          
        });
    } else if (action === 'signupButton') {
      fetch('http://localhost:8080/signup', postOptions)
        .then((response) => { 
          const [key, value] = document.cookie.split('=');
          if (response.ok) { 
            onLogin(e, { loggedIn: true, userId: Number(value) });
          } else {
            onLogin(e, { loggedIn: false, userId: undefined });
          }
        })
        .catch((error) => {
        
        });;
    }
    
    // Reset input fields after submit
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
	<div id="getUserWrapper">
      <h1>Log In or Sign Up</h1>
      <input 
        placeholder="Name"
        value={ name } 
        onChange={ onNameChange }
      />
      <input 
        placeholder="Email"
        value={ email }
        onChange={ onEmailChange } 
      />
      <input 
        placeholder="Password"
        type="password"
        value={ password }
        onChange={ onPasswordChange } 
      />
      <div id="buttonWrapper">
        <button
            type="submit"
            id="loginButton"
            onClick={ handleSubmit }
        >
        Log In  
        </button>
        <button
            type="submit"
            id="signupButton"
            onClick={ handleSubmit }
        >
        Sign Up  
        </button>
        { isLoggedIn.loggedIn &&
          <p>You've successfully logged in!</p>
        }
        { isLoggedIn.loggedIn === false &&
          <p>Credentials do not match. Please try again or create a new account.</p>
        }
      </div>
	</div>
  );
}

export default GetUser;