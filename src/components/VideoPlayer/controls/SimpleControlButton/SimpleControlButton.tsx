import { StyledSimpleControlButton } from './styles';
import { SimpleControlButtonProps } from './types';

function PlayAndPauseButton({ onClick, img, title }: SimpleControlButtonProps) {
  return <StyledSimpleControlButton onClick={onClick}>{img || title}</StyledSimpleControlButton>;
}

export default PlayAndPauseButton;
