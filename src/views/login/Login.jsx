import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './login-form/LoginForm';
import CreateAccount from './create-account/CreateAccount';
import PasswordRecover from './password-recover/PasswordRecover';
import PasswordReset from './password-reset/PasswordReset';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" end element={<LoginForm />} />
        <Route path="create" element={<CreateAccount />} />
        <Route path="recover" element={<PasswordRecover />} />
        <Route path="reset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
