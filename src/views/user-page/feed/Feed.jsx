import React, { useState } from 'react';
import FeedModal from './feed-modal/FeedModal';
import FeedPhotos from './feed-photos/FeedPhotos';

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos setModalPhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
