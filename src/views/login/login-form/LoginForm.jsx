import { Link } from "react-router-dom";
import Button from "../../../components/forms/button/Button";
import Input from "../../../components/forms/input/Input";
import useForm from "../../../utils/hooks/useForm";
import { UserContext } from "../../../UserContext";
import { useContext } from "react";
import ErrorMessage from "../../../components/helper/ErrorMessage";
import styles from "./LoginForm.module.css";
import stylesButton from "../../../components/forms/button/Button.module.css";

const LoginForm = () => {
  const { userLogin, error, isLoading } = useContext(UserContext);
  const username = useForm(true);
  const password = useForm(true);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {isLoading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <ErrorMessage error={error && "Dados incorretos."} />
      </form>
      <Link className={styles.recover} to="/login/recover-password">
        Recuperar senha
      </Link>

      <div className={styles.create}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesButton.button} to="/login/create-account">
          Criar conta
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
