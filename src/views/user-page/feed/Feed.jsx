import React, { useEffect, useState } from "react";
import FeedModal from "./feed-modal/FeedModal";
import FeedPhotos from "./feed-photos/FeedPhotos";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [isInfinite, setIsInfinite] = useState(true);

  useEffect(() => {
    let wait = false;

    function infiniteScrool() {
      if (isInfinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);

          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScrool);
    window.addEventListener("scroll", infiniteScrool);

    return () => {
      window.removeEventListener("wheel", infiniteScrool);
      window.removeEventListener("scroll", infiniteScrool);
    };
  }, [isInfinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setIsInfinite={setIsInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
