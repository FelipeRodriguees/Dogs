import React, { useContext } from 'react';
import Input from '../../../components/forms/input/Input';
import Button from '../../../components/forms/button/Button';
import useForm from '../../../utils/hooks/useForm';
import useFetch from '../../../utils/hooks/useFetch';
import { CREATE_USER } from '../../../services/api';
import { UserContext } from '../../../UserContext';
import ErrorMessage from '../../../components/helper/ErrorMessage';

const CreateAccount = () => {
  const username = useForm(true);
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { isLoading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && email.validate()) {
      const { url, options } = CREATE_USER({
        username: username.value,
        email: email.value,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {isLoading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <ErrorMessage error={error} />
      </form>
    </section>
  );
};

export default CreateAccount;
