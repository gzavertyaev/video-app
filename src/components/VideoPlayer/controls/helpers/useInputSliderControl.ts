import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
  RefObject,
} from 'react';

export interface UseInputSliderControlProps {
  videoRef: RefObject<HTMLVideoElement>;
  setCurrentTime: Dispatch<SetStateAction<number>>;
  currentTime: any;
}

export function useInputSliderControl({
  videoRef,
  setCurrentTime,
  currentTime,
}: UseInputSliderControlProps) {
  const sliderRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onSeek = useCallback(
    (time: number) => {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
        setCurrentTime(time);
      }
    },
    [videoRef, setCurrentTime],
  );

  const handleSliderChange = useCallback(() => {
    if (sliderRef.current) {
      const time = parseFloat(sliderRef.current.value);

      onSeek(time);
    }
  }, [sliderRef, onSeek]);

  const handleSliderMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleSliderMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      return;
    }

    if (sliderRef.current) {
      sliderRef.current.value = currentTime.toString();
    }
  }, [currentTime, isDragging]);

  return { handleSliderMouseUp, handleSliderMouseDown, handleSliderChange, sliderRef };
}
