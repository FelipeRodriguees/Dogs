import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const LoginRouterMenager = ({ children }) => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return children;
  if (!isLogged) <Navigate to="/login" />;
};

export default LoginRouterMenager;
