import { createContext, useState } from 'react';
import { TOKEN_REQUEST, USER_GET_REQUEST } from './services/api';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  async function userLogin(username, password) {
    const { url, options } = TOKEN_REQUEST({ username, password });
    const response = await fetch(url, options);
    const { token } = await response.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  async function getUser(token) {
    const { url, options } = USER_GET_REQUEST(token);
    const response = await fetch(url, options);
    const user = await response.json();
    setData(user);
    setIsLogged(true);
  }

  return (
    <UserContext.Provider value={{ userLogin, data, isLogged }}>
      {children}
    </UserContext.Provider>
  );
};
