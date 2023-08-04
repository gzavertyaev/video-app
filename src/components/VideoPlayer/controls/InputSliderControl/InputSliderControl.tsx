import { InputSliderControlControl, StyledInputSliderControl } from './styles';

import { InputSliderControlProps } from './types';

function InputSliderControl({
  duration,
  sliderRef,
  onChange,
  onMouseDown,
  onMouseUp,
  progress,
}: InputSliderControlProps) {
  return (
    <InputSliderControlControl>
      <StyledInputSliderControl
        type="range"
        min="0"
        max={duration}
        step="0.1"
        ref={sliderRef}
        onChange={onChange}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        $progress={progress}
      />
    </InputSliderControlControl>
  );
}

export default InputSliderControl;
