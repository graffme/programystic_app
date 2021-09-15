const palette = {
  //purple: '#686de0',
  //darkpurple: '#30336b',
  purple: "#706fd3",
  darkpurple: "#30336b",
  lightpurple: "#9e9edd",
  highlight: "rgba(158, 158, 221, 0.1)",
  black: "#141e2a",
  darkgrey: "#1f2b39",
  grey: "#57606f",
  lightgrey: "#f1f2f6",
  white: "#ffffff",
};

const pixelUnit = "px";
const remUnit = "rem";

export const lightTheme = {
  colors: {
    // Basics
    lightBackground: palette.white,
    darkBackground: palette.lightgrey,
    text: palette.grey,
    header: palette.darkgrey,
    link: palette.darkpurple,
    hoverLink: palette.purple,
    icon: palette.darkpurple,
    primary: palette.darkpurple,
    secondary: palette.purple,
    accent: palette.lightpurple,
    // Menu
    menuStandardText: palette.grey,
    menuActiveText: palette.purple,
    menuHoverText: palette.purple,
    menuScrolledBackground: palette.black,
    menuScrolledStandardText: palette.lightgrey,
    menuScrolledActiveText: palette.purple,
    //Button
    buttonBackground: palette.darkpurple,
    buttonPressedBackground: palette.black,
    buttonText: palette.white,
    // Lists
    bullet: palette.darkpurple,
    // Tag | Highlight
    tagText: palette.darkpurple,
    tagBackground: palette.highlight,
  },
  text: {
    size: {
      base: 18 + pixelUnit,
      baseMedium: 16 + pixelUnit,
      baseSmall: 14 + pixelUnit,
      regular: 1 + remUnit,
      h1: 2.4 + remUnit,
      h2: 1.8 + remUnit,
      h3: 1.2 + remUnit,
      h4: 1 + remUnit,
      small: 0.8 + remUnit,
    },
    weight: {
      regular: 300,
      header: 400,
      bold: 500,
    },
  },
  spacing: {
    xs: 0.75 + remUnit,
    sm: 1 + remUnit,
    md: 1.5 + remUnit,
    lg: 2 + remUnit,
    xl: 3 + remUnit,
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    // Basics
    lightBackground: palette.darkgrey,
    darkBackground: palette.black,
    text: palette.white,
    header: palette.white,
    link: palette.white,
    hoverLink: palette.purple,
    icon: palette.purple,
    primary: palette.darkpurple,
    secondary: palette.purple,
    accent: palette.lightpurple,
    // Menu
    menuStandardText: palette.lightgrey,
    menuActiveText: palette.purple,
    menuHoverText: palette.purple,
    menuScrolledBackground: palette.black,
    menuScrolledStandardText: palette.lightgrey,
    menuScrolledActiveText: palette.purple,
    //Button
    buttonBackground: palette.darkpurple,
    buttonPressedBackground: palette.black,
    buttonText: palette.white,
    //Lists
    bullet: palette.purple,
    // Tag | Highlight
    tagText: palette.lightpurple,
    tagBackground: palette.highlight,
  },
};
