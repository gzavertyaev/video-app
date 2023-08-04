import styled from 'styled-components';

import { colors } from 'styles';

export const StyledSimpleControlButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  border-radius: 50%;
  background-color: transparent;
  color: ${colors.WHITE};
  cursor: pointer;

  &:hover {
    color: ${colors.DARK};
    background-color: ${colors.WHITE};

    & > svg {
      fill: ${colors.DARK};

      & > path {
        fill: ${colors.DARK};
      }
    }
  }

  & > svg {
    fill: ${colors.WHITE};

    & > path {
      fill: ${colors.WHITE};
    }
  }
`;
