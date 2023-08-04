export interface TimerControlProps {
  currentTime: number;
  formatTime: (seconds: number) => string;
  duration: number;
}
