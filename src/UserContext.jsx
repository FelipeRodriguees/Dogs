import { createContext, useCallback, useEffect, useState } from 'react';
import {
  TOKEN_REQUEST,
  USER_GET_REQUEST,
  VALIDATE_TOKEN,
} from './services/api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [isLogged, setIsLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const userLogout = useCallback(
    async function () {
      console.log('exit');
      setData(null);
      setError(null);
      setIsLoading(false);
      setIsLogged(false);
      window.localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate],
  );

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (token) {
        try {
          setError(null);
          setIsLoading(true);
          const { url, options } = VALIDATE_TOKEN(token);
          const request = await fetch(url, options);

          if (!request.ok) throw new Error('Invalid token!');

          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setIsLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  async function userLogin(username, password) {
    try {
      setError(null);
      setIsLoading(true);
      const { url, options } = TOKEN_REQUEST({ username, password });
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Un error ocurred ${token.statusText}`);
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  async function getUser(token) {
    const { url, options } = USER_GET_REQUEST(token);
    const response = await fetch(url, options);
    const user = await response.json();
    setData(user);
    setIsLogged(true);
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, isLoading, isLogged }}
    >
      {children}
    </UserContext.Provider>
  );
};
