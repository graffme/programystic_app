const palette = {
    purple: '#686de0',
    darkpurple: '#30336b',
    black: '#141e2a',
    darkgrey: '#1f2b39',
    grey: '#57606f',
    lightgrey: '#f1f2f6',
    white: '#ffffff',
  }

  const fontUnit = 'px';
  
  export const lightTheme = {
    colors: {
      // Basics
      lightBackground: palette.white,
      darkBackground: palette.lightgrey,
      text: palette.grey,
      header: palette.darkgrey,
      primary: palette.darkpurple,
      secondary: palette.purple,
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
    },
    text: {
      size: {
        regular: 18 + fontUnit,
        h1: 42 + fontUnit,
        h2: 32 + fontUnit,
        h3: 24 + fontUnit,
        h4: 20 + fontUnit,
      },
      weight: {
        regular: 300,
        header: 400,
        bold: 500,
      }
    }
  };
  
  export const darkTheme = {
    ...lightTheme,
    colors: {
      // Basics
      lightBackground: palette.darkgrey,
      darkBackground: palette.black,
      text: palette.white,
      header: palette.white,
      primary: palette.darkpurple,
      secondary: palette.purple,
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
    },
  };