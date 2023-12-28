import { Link } from 'react-router-dom';
import Button from '../../../components/forms/button/Button';
import Input from '../../../components/forms/input/Input';
import useForm from '../../../utils/hooks/useForm';
import { TOKEN_REQUEST, USER_GET_REQUEST } from '../../../services/api';
import { useEffect } from 'react';

const LoginForm = () => {
  const username = useForm(true);
  const password = useForm(true);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) getUser(token);
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET_REQUEST(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_REQUEST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/create">Novo usuario</Link>
    </section>
  );
};

export default LoginForm;
