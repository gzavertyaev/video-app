import { useRef, useCallback } from 'react';

import {
  SimpleControlButton,
  TimerControl,
  InputSliderControl,
  usePlayAndPauseControl,
  useFullscreenControl,
  useRewindAndForwardControl,
  useMuteControl,
  useTimerControl,
  useInputSliderControl,
} from './controls';
import {
  ContlolsLeftSide,
  ContlolsRightSide,
  VideoPlayerContainer,
  StyledVideoPlayer,
  ButtonControls,
  PlayIcon,
  PauseIcon,
  FullscreenIcon,
  FullscreenExit,
  ForwardIcon,
  RewindIcon,
  RewindForwardControls,
  VolumeIcon,
  VolumeOffIcon,
} from './styles';
import { VideoPlayerProps } from './types';

function VideoPlayer({ src }: VideoPlayerProps) {
  const playerWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Controls hooks
  const { currentTime, formatTime, duration, setCurrentTime } = useTimerControl({
    videoRef: videoRef,
  });
  const { isPlaying, handlePlayAndPause } = usePlayAndPauseControl({ videoRef: videoRef });
  const { isFullScreen, handleFullScreen } = useFullscreenControl({
    playerWrapperRef: playerWrapperRef,
  });
  const { handleFastForward, handleRewind } = useRewindAndForwardControl({ videoRef: videoRef });
  const { handleMuteUnmute, isMuted } = useMuteControl({ videoRef: videoRef });
  const { handleSliderChange, sliderRef, handleSliderMouseDown, handleSliderMouseUp } =
    useInputSliderControl({
      currentTime: currentTime,
      setCurrentTime: setCurrentTime,
      videoRef: videoRef,
    });

  const progress = (currentTime / duration) * 100;

  const handleVideoClick = useCallback(() => {
    handlePlayAndPause();
  }, [handlePlayAndPause]);

  return (
    <VideoPlayerContainer $isFullscreen={isFullScreen} ref={playerWrapperRef}>
      <StyledVideoPlayer onClick={handleVideoClick} ref={videoRef} src={src} />
      <InputSliderControl
        progress={progress}
        duration={duration}
        sliderRef={sliderRef}
        onChange={handleSliderChange}
        onMouseDown={handleSliderMouseDown}
        onMouseUp={handleSliderMouseUp}
      />
      <ButtonControls>
        <ContlolsLeftSide>
          <SimpleControlButton
            img={isPlaying ? <PauseIcon /> : <PlayIcon />}
            onClick={handlePlayAndPause}
          />
          <TimerControl formatTime={formatTime} currentTime={currentTime} duration={duration} />
          <RewindForwardControls>
            <RewindIcon onClick={handleRewind} />
            <ForwardIcon onClick={handleFastForward} />
          </RewindForwardControls>
        </ContlolsLeftSide>
        <ContlolsRightSide>
          <SimpleControlButton
            img={isMuted ? <VolumeIcon /> : <VolumeOffIcon />}
            onClick={handleMuteUnmute}
          />
          <SimpleControlButton
            img={isFullScreen ? <FullscreenExit /> : <FullscreenIcon />}
            onClick={handleFullScreen}
          />
        </ContlolsRightSide>
      </ButtonControls>
    </VideoPlayerContainer>
  );
}

export default VideoPlayer;
