export interface GetVideoDataItemResponse {
  name: string;
  format: string;
  spource: string;
  url: string;
}

export interface VideoPageSliceInitialStateProps {
  videoData: GetVideoDataItemResponse | undefined;
  loading: boolean;
  error: any;
}
