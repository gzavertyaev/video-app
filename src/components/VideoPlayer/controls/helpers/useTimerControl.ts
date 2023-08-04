import { useEffect, useCallback, useState, RefObject } from 'react';

export interface TimerControlProps {
  videoRef: RefObject<HTMLVideoElement>;
}

export function useTimerControl({ videoRef }: TimerControlProps) {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  }, [videoRef]);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, [videoRef]);

  const handleVideoEnd = useCallback(() => {
    setCurrentTime(0);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [videoRef]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = Math.floor(seconds % 60);

    return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
      videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
      videoRef.current.addEventListener('ended', handleVideoEnd);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
        // eslint-disable-next-line
        videoRef.current.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [handleLoadedMetadata, handleTimeUpdate, handleVideoEnd, videoRef]);

  return { currentTime, formatTime, duration, setCurrentTime };
}
