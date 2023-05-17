import React, { useState, useEffect } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registered, setRegistered] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const isRegistered = localStorage.getItem('registered') === 'true';
    if (isRegistered) {
      setRegistered(true);
      console.log('User List:', userList);
    }
  }, [userList]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    setTimeout(() => {
      setRegistered(true);
      localStorage.setItem('registered', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      const newUser = {
        username: username,
        password: password,
      };
      
      setUserList((prevUserList) => [...prevUserList, newUser]);
    }, 2000); // 2 segundos
  };

  if (registered) {
    return (
      <div className="registro-container">
        <h1>Successful SignUp!</h1>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <div>
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
      <button type="submit">SignUp</button>
    </form>
  );
};

export default SignUp;