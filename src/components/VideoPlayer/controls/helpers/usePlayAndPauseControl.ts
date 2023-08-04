import { useCallback, useState, RefObject } from 'react';

export interface UsePlayAndPauseControlnProps {
  videoRef: RefObject<HTMLVideoElement>;
}

export function usePlayAndPauseControl({ videoRef }: UsePlayAndPauseControlnProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayAndPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }

      setIsPlaying((prev) => !prev);
    }
  }, [isPlaying, videoRef]);

  return { isPlaying, handlePlayAndPause };
}
