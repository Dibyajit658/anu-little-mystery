
import { useEffect, useRef } from "react";

function MusicPlayer() {

  const audioRef = useRef(null);

  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.35;

    // Attempt automatic playback
    const startMusic = () => {
      audio.play().catch(() => {
        // Browser may block autoplay.
        // First visitor interaction will retry.
      });
    };

    startMusic();

    // Retry when the visitor interacts
    const unlockMusic = () => {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
    };

    document.addEventListener(
      "click",
      unlockMusic
    );

    document.addEventListener(
      "touchstart",
      unlockMusic
    );

    return () => {
      document.removeEventListener(
        "click",
        unlockMusic
      );

      document.removeEventListener(
        "touchstart",
        unlockMusic
      );
    };

  }, []);

  return (

    <audio
      ref={audioRef}
      src="/music/ishq_wala_jamal.mp3"
      loop
      preload="auto"
    />

  );

}

export default MusicPlayer;
