import styled, { keyframes } from 'styled-components';

import { Loading_Icon } from 'assets';
import { colors } from 'styles';

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.WHITE};
`;

export const StyledSpinner = styled(Loading_Icon)`
  width: 14px;
  height: 14px;
  animation: 1s ${rotateAnimation} infinite linear;
`;
