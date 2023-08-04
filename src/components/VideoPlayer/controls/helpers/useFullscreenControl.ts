import { useCallback, useState, RefObject } from 'react';

export interface UseFullscreenControlProps {
  playerWrapperRef: RefObject<any>;
}

export function useFullscreenControl({ playerWrapperRef }: UseFullscreenControlProps) {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleFullScreen = useCallback(() => {
    setIsFullScreen((prev) => !prev);

    if (!isFullScreen) {
      if (playerWrapperRef.current.requestFullscreen) {
        playerWrapperRef.current.requestFullscreen();
      } else if (playerWrapperRef.current.mozRequestFullScreen) {
        playerWrapperRef.current.mozRequestFullScreen();
      } else if (playerWrapperRef.current.webkitRequestFullScreen) {
        playerWrapperRef.current.webkitRequestFullScreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, [isFullScreen, playerWrapperRef]);

  return { isFullScreen, handleFullScreen };
}
