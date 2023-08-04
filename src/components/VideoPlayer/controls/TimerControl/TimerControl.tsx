import { TimerControlProps } from './types';
import { StyledTimerControl } from './styles';

function TimerControl({ currentTime, formatTime, duration }: TimerControlProps) {
  return (
    <StyledTimerControl>
      {formatTime(currentTime)} / {formatTime(duration)}
    </StyledTimerControl>
  );
}

export default TimerControl;
