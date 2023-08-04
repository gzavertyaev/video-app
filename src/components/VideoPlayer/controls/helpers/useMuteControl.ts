import { useState, RefObject } from 'react';

export interface UseMuteControlProps {
  videoRef: RefObject<HTMLVideoElement>;
}

export function useMuteControl({ videoRef }: UseMuteControlProps) {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return { handleMuteUnmute, isMuted };
}
