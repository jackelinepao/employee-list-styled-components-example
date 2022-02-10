const colors = {
  primaryColors: {
    gray1: "#fafafa",
    gray2: "#f5f5f5",
    gray3: "#ebebeb",
    purple1: "#e9e8fc",
  },
};

const spacing = {
  s: "8px",
  m: "24px",
  l: "48px",
  xl: "64px",
  xxl: "128px",
};
const cornerRadius = {
  small: "4px",
  medium: "8px",
};

const elevation = {
  s: {
    boxShadow:
      "0px 2px 8px rgba(0, 0, 0, 0.08), 0px 4px 20px 4px rgba(0, 0, 0, 0.08)",
  },
  l: {
    boxShadow:
      "0px 2px 8px rgba(0, 0, 0, 0.08), 0px 4px 20px 4px rgba(0, 0, 0, 0.08)",
  },
};

const fonts = {
  OpenSans: {
    fontFamily: "'Open Sans', sans-serif",
    margin: 0,
  },
  montserrat: {
    fontFamily: "'Montserrat', sans-serif",
    margin: 0,
  },
};

const typography = {
  regular: {
    caption: {
      fontSize: "12px",
      lineHeight: "24px",
      fontWeight: "normal",
    },
    body: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "normal",
    },
  },
  semibold: {
    h3: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "38px",
      lineHeight: "48px",
      fontWeight: 600,
    },
    h1: {
      fontSize: "46px",
      lineHeight: "56px",
      fontWeight: 600,
    },
  },
};

export const theme = {
  colors,
  spacing,
  typography,
  fonts,
  cornerRadius,
  elevation,
};
