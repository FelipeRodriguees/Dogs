import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../UserContext";
import PhotoCommentsForms from "../photo-comments-form/PhotoCommentsForm";
import styles from "./PhotoComments.module.css";

const PhotoComments = (props) => {
  const { isLogged } = useContext(UserContext);
  const commentsSection = useRef(null);
  const [comments, setComments] = useState(() => props.comments);

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}:</b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {isLogged && (
        <PhotoCommentsForms id={props.id} setComments={setComments} />
      )}
    </>
  );
};

export default PhotoComments;
