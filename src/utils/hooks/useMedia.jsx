import React, { useEffect, useState } from 'react';

const useMedia = (media) => {
  const [isMatch, setIsMatch] = useState(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);

      setIsMatch(matches);
    }

    changeMatch();

    window.addEventListener('resize', changeMatch);
    return () => {
      window.removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return isMatch;
};

export default useMedia;
