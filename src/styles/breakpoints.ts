const BREAKPOINTS = {
  SMALL: '.screen-small',
  MEDIUM: '.screen-medium',
  LARGE: '.screen-large',
  EXTRA_LARGE: '.screen-extra-large',
};

const BREAKPOINT_TO_SIZE = {
  [BREAKPOINTS.SMALL]: 1024,
  [BREAKPOINTS.MEDIUM]: 1280,
  [BREAKPOINTS.LARGE]: 1600,
  [BREAKPOINTS.EXTRA_LARGE]: 1920,
};

export { BREAKPOINTS, BREAKPOINT_TO_SIZE };
