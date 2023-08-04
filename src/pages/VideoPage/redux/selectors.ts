import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store';

import { VideoPageSliceInitialStateProps } from './types';

const videoPage = (state: RootState) => state.videoPage;

export const videoPageSelector = createSelector(
  videoPage,
  (videoPageData: VideoPageSliceInitialStateProps) => videoPageData,
);
