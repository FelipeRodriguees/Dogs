import { useState } from "react";
import useFetch from "../../../../utils/hooks/useFetch";
import { SEND_COMMENT } from "../../../../services/api";
import ErrorMessage from "../../../../components/helper/ErrorMessage";
import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();
  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const token = window.localStorage.getItem("token");

    const { url, options } = SEND_COMMENT(id, token, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.singlePhoto : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Insira seu comentário..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <button className={styles.sendButton}>
        <IconComponent
          iconPath={"./assets/Enviar.svg"}
          iconAlt={"Dogs - Ícone de enviar comentário"}
        />
      </button>

      <ErrorMessage error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
