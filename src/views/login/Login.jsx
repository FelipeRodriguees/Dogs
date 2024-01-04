import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './login-form/LoginForm';
import CreateAccount from './create-account/CreateAccount';
import PasswordRecover from './password-recover/PasswordRecover';
import PasswordReset from './password-reset/PasswordReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/account" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" end element={<LoginForm />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="recover" element={<PasswordRecover />} />
          <Route path="reset" element={<PasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
