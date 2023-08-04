import styled, { css } from 'styled-components';

import {
  Pause_Icon,
  Play_Icon,
  Fullscreen_Icon,
  Fullscreen_Exit,
  Forward_Icon,
  Volume_Icon,
  Volume_Off_Icon,
} from 'assets';
import { colors } from 'styles';

interface VideoPlayerContainerProps {
  $isFullscreen: boolean;
}

const iconStyles = css`
  width: 32px;
  height: 32px;
`;

export const VideoPlayerContainer = styled.div<VideoPlayerContainerProps>`
  position: relative;
  max-width: ${({ $isFullscreen }) => ($isFullscreen ? '100%' : '800px')};
  max-height: ${({ $isFullscreen }) => ($isFullscreen ? '100%' : '600px')};
`;

export const StyledVideoPlayer = styled.video`
  width: 100%;
  height: 100%;
`;

export const ButtonControls = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 4px 8px;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: ${colors.PLAYER_MENU};
`;

export const RewindForwardControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContlolsLeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export const ContlolsRightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayIcon = styled(Play_Icon)`
  ${iconStyles}
`;

export const PauseIcon = styled(Pause_Icon)`
  ${iconStyles}
`;

export const FullscreenIcon = styled(Fullscreen_Icon)`
  ${iconStyles}
`;

export const FullscreenExit = styled(Fullscreen_Exit)`
  ${iconStyles}
`;

export const VolumeIcon = styled(Volume_Icon)`
  ${iconStyles}
`;

export const VolumeOffIcon = styled(Volume_Off_Icon)`
  ${iconStyles}
`;

export const ForwardIcon = styled(Forward_Icon)`
  width: 20px;
  height: 20px;
  cursor: pointer;

  & > path {
    fill: ${colors.WHITE};
  }
`;

export const RewindIcon = styled(Forward_Icon)`
  width: 20px;
  height: 20px;
  margin: 10px;
  transform: rotate(180deg);
  cursor: pointer;

  & > path {
    fill: ${colors.WHITE};
  }
`;
