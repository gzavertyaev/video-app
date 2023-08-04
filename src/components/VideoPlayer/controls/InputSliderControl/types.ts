import { RefObject } from 'react';

export interface InputSliderControlProps {
  duration: number;
  sliderRef: RefObject<HTMLInputElement>;
  onChange: () => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  progress: number;
}
