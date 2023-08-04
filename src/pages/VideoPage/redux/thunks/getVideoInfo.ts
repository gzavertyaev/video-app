import { Dispatch } from '@reduxjs/toolkit';

import { networkService } from 'services';
import { videoPageActionTypes } from 'pages/VideoPage/redux/videoPageSlice';
import { GetVideoDataItemResponse } from 'pages/VideoPage/redux/types';

export const getVideoInfo = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(videoPageActionTypes.getVideoDataStart());
      const response = await networkService.get(process.env.REACT_APP_API_URL_VIDEO as string);

      const videoData = response?.data.find(
        (videoDataItem: GetVideoDataItemResponse) => videoDataItem.format === 'mp4',
      );

      dispatch(videoPageActionTypes.getVideoDataSuccess(videoData));
    } catch (error) {
      dispatch(videoPageActionTypes.getVideoDataError(error));
    }
  };
};
