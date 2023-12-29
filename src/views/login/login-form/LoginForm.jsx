import { Link } from 'react-router-dom';
import Button from '../../../components/forms/button/Button';
import Input from '../../../components/forms/input/Input';
import useForm from '../../../utils/hooks/useForm';
import { UserContext } from '../../../UserContext';
import { useContext } from 'react';

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
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {isLoading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/create">Novo usuario</Link>
    </section>
  );
};

export default LoginForm;
