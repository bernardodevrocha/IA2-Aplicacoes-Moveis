const PRIMARY_COLOR = "#008e05";
const PRIMARY_FOREGROUND_COLOR = "#5b5b5b";
const HEADING_COLOR = "#2b2d30";
const SUBTITLE_COLOR = "#747477";
const BORDER_INPUT_COLOR = "#cdcdd1";
const ERROR_COLOR = "#b61047";
const BORDER_RADIUS_MD = 8;
const BORDER_RADIUS_LG = 12;
const BORDER_RADIUS_XL = 16;

export const THEME = {
  colors: {
    primary: PRIMARY_COLOR,
    primary_foreground: PRIMARY_FOREGROUND_COLOR,
    heading: HEADING_COLOR,
    subtitle: SUBTITLE_COLOR,
    error: ERROR_COLOR,
    border: {
      input: BORDER_INPUT_COLOR,
    },
  },
  border: {
    radius: {
      md: BORDER_RADIUS_MD,
      lg: BORDER_RADIUS_LG,
      xl: BORDER_RADIUS_XL,
    },
  },
  text: {
    heading: {
      h1: 48,
      h2: 32,
      h3: 16,
    },
  },
};
