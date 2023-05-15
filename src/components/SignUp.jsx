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
      console.log(userList);
      
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica de registro, como enviar una solicitud al servidor o guardar los datos en tu backend

    // Simulando un registro exitoso después de 2 segundos
    setTimeout(() => {
      setRegistered(true);
      localStorage.setItem('registered', 'true');
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // Guardar los datos de registro en el array userList
      const newUser = {
        username: username,
        password: password,
      };
      setUserList((prevUserList) => [...prevUserList, newUser]);
    }, 2000);
  };

  const handleLogout = () => {
    setRegistered(false);
    localStorage.setItem('registered', 'false');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  };

  if (registered) {
    return (
      <div>
        <div>¡Te has registrado con éxito!</div>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default SignUp;
