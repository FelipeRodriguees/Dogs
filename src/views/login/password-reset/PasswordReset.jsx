import React, { useState, useEffect } from "react";
import Input from "../../../components/forms/input/Input";
import Button from "../../../components/forms/button/Button";
import useFetch from "../../../utils/hooks/useFetch";
import useForm from "../../../utils/hooks/useForm";
import { PASSWORD_RESET } from "../../../services/api";
import ErrorMessage from "../../../components/helper/ErrorMessage";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const { isLoading, error, request } = useFetch();
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm(true);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key && login) {
      setKey(key);
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Resete sua senha</h1>

      <form onSubmit={handleSubmit}>
        <Input
          label="Nova senha"
          type="password"
          name="password"
          {...password}
        />

        {isLoading ? (
          <Button disabled="disabled">Carregando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>

      <ErrorMessage error={error} />
    </section>
  );
};

export default PasswordReset;
