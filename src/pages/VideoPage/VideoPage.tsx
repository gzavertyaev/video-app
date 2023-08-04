import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Spinner, VideoPlayer } from 'components';
import { videoPageSelector } from './redux/selectors';
import { videoPageActionTypes } from './redux/videoPageSlice';
import { getVideoInfo } from './redux/thunks';

import { VideoPageWrapper } from './styles';

function VideoPage() {
  const dispatch = useDispatch();
  const { videoData, loading, error } = useSelector(videoPageSelector);

  const videoContent = videoData?.url ? <VideoPlayer src={videoData?.url} /> : 'VideoNotFound';

  console.error(error);

  useEffect(() => {
    dispatch(getVideoInfo() as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      dispatch(videoPageActionTypes.resetVideoPageData());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <VideoPageWrapper>{loading ? <Spinner /> : videoContent}</VideoPageWrapper>;
}

export default VideoPage;
