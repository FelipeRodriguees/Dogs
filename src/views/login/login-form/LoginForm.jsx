import { Link } from 'react-router-dom';
import Button from '../../../components/forms/button/Button';
import Input from '../../../components/forms/input/Input';
import useForm from '../../../utils/hooks/useForm';

const LoginForm = () => {
  const username = useForm('email');
  const password = useForm(true);

  function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((json) => console.log(json));
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
