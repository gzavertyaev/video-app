import styled from 'styled-components';

import { colors } from 'styles';

export const VideoPageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, ${colors.PRIMARY}, ${colors.SECONDARY});
`;

export const VideoContainer = styled.div`
  display: flex;
`;
