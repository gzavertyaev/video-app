import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { VideoPageSliceInitialStateProps, GetVideoDataItemResponse } from './types';

const videoPageInitialState: VideoPageSliceInitialStateProps = {
  videoData: undefined,
  loading: false,
  error: null,
};

const videoPageSlice = createSlice({
  name: 'VIDEO_PAGE',
  initialState: videoPageInitialState,
  reducers: {
    getVideoDataStart: (state: VideoPageSliceInitialStateProps) => {
      state.loading = true;
    },
    getVideoDataSuccess: (
      state: VideoPageSliceInitialStateProps,
      { payload }: PayloadAction<GetVideoDataItemResponse>,
    ) => {
      state.loading = false;
      state.videoData = payload;
    },
    getVideoDataError: (
      state: VideoPageSliceInitialStateProps,
      { payload }: PayloadAction<unknown>,
    ) => {
      state.loading = false;
      state.error = payload;
    },
    resetVideoPageData: () => videoPageInitialState,
  },
});

export const videoPageActionTypes = videoPageSlice.actions;

export default videoPageSlice.reducer;
