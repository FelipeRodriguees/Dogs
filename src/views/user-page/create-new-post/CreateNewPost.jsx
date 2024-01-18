import styles from "./CreateNewPost.module.css";
import Input from "../../../components/forms/input/Input";
import Button from "../../../components/forms/button/Button";
import useForm from "../../../utils/hooks/useForm";
import useFetch from "../../../utils/hooks/useFetch";
import { useEffect, useState } from "react";
import { NEW_POST } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import Head from "../../../components/helper/Head";

const CreateNewPost = () => {
  const name = useForm(true);
  const weight = useForm("number");
  const age = useForm("number");
  const [img, setImg] = useState({});
  const { data, isLoading, error, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/account");
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("peso", weight.value);
    formData.append("idade", age.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = NEW_POST(formData, token);

    request(url, options);
  }

  function handleImageChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head
        title="Novo Post"
        description="Novo post do usuário logado do site Dogs."
      />
      <form onSubmit={handleSubmit}>
        <Input
          label="Nome"
          type="text"
          name="name"
          value={name.value}
          {...name}
        />
        <Input
          label="Peso"
          type="number"
          name="weight"
          value={weight.value}
          {...weight}
        />
        <Input
          label="Idade"
          type="number"
          name="age"
          value={age.value}
          {...age}
        />
        <input
          className={styles.fileInput}
          type="file"
          name="img"
          id="img"
          onChange={handleImageChange}
        />
        {isLoading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default CreateNewPost;
