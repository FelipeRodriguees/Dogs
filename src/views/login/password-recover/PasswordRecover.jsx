import Input from "../../../components/forms/input/Input";
import Button from "../../../components/forms/button/Button";
import ErrorMessage from "../../../components/helper/ErrorMessage";
import useForm from "../../../utils/hooks/useForm";
import useFetch from "../../../utils/hooks/useFetch";
import { PASSWORD_RECOVER } from "../../../services/api";

const PasswordRecover = () => {
  const login = useForm(true);
  const { data, isLoading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_RECOVER({
        login: login.value,
        url: window.location.href.replace("recover-password", "reset"),
      });

      const { json } = await request(url, options);
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>

      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {isLoading ? (
            <Button disabled="disabled">Carregando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <ErrorMessage error={error} />
    </section>
  );
};

export default PasswordRecover;
