import { memo } from 'react';

import { SpinnerWrapper, StyledSpinner } from './styles';

function Spinner() {
  return (
    <SpinnerWrapper>
      <StyledSpinner />
    </SpinnerWrapper>
  );
}

export default memo(Spinner);
