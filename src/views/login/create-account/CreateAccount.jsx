import React, { useContext } from 'react';
import Input from '../../../components/forms/input/Input';
import Button from '../../../components/forms/button/Button';
import useForm from '../../../utils/hooks/useForm';
import { CREATE_USER } from '../../../services/api';
import { UserContext } from '../../../UserContext';

const CreateAccount = () => {
  const username = useForm(true);
  const email = useForm('email');
  const password = useForm();
  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      const { url, options } = CREATE_USER({
        username: username.value,
        email: email.value,
        password: password.value,
      });

      const response = await fetch(url, options);
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
        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default CreateAccount;
