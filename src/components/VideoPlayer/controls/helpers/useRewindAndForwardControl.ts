import { useCallback, RefObject } from 'react';

export interface UseRewindAndForwardControlProps {
  videoRef: RefObject<HTMLVideoElement>;
}

export function useRewindAndForwardControl({ videoRef }: UseRewindAndForwardControlProps) {
  const handleRewind = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 5;
    }
  }, [videoRef]);

  const handleFastForward = useCallback(() => {
    if (videoRef.current) {
      if (videoRef.current.currentTime + 5 <= videoRef.current.duration) {
        videoRef.current.currentTime += 5;
      }
    }
  }, [videoRef]);

  return { handleRewind, handleFastForward };
}
