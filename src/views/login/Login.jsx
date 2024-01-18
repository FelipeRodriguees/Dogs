import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./login-form/LoginForm";
import CreateAccount from "./create-account/CreateAccount";
import PasswordRecover from "./password-recover/PasswordRecover";
import PasswordReset from "./password-reset/PasswordReset";
import { UserContext } from "../../UserContext";
import styles from "./Login.module.css";
import NotFound from "../not-found/NotFound";
import Head from "../../components/helper/Head";

const Login = () => {
  const { isLogged } = useContext(UserContext);

  if (isLogged) return <Navigate to="/account" />;

  return (
    <section className={styles.login}>
      <Head title="Login" description="Login do site Dogs." />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" end element={<LoginForm />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="recover-password" element={<PasswordRecover />} />
          <Route path="reset" element={<PasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
