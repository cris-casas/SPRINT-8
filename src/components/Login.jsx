import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    if (storedUsername === username && storedPassword === password) {
      setLoggedIn(true);
      console.log("inicio de sesión conseguido")
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  if (loggedIn) {
    return (
      <div className="registro-container">
        <h1>Successful Login!</h1>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Login</h1>
        <label htmlFor="username">ENTER YOUR EMAIL ADDRESS</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">ENTER YOUR PASSWORD</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
