import styled from 'styled-components';

import { colors } from 'styles';

export interface StyledInputSaliderControlProps {
  $progress: number;
}

export const InputSliderControlControl = styled.div`
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: -2px;
  z-index: 11;
`;

export const StyledInputSliderControl = styled.input<StyledInputSaliderControlProps>`
  position: absolute;
  width: 100%;
  height: 8px;
  background: ${colors.INPUT_SLIDER};
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: ${colors.WHITE};
    border: 2px solid ${colors.INPUT_SLIDER_BORDER};
    border-radius: 50%;
    margin-top: -5px;
    cursor: pointer;
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(
      to right,
      red 0%,
      red ${({ $progress }) => $progress}%,
      ${colors.INPUT_SLIDER} ${({ $progress }) => $progress}%,
      ${colors.INPUT_SLIDER} 100%
    );
    height: 8px;
  }
`;
