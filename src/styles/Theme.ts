const palette = {
    purple: '#686de0',
    darkpurple: '#30336b',
    black: '#141e2a',
    darkgrey: '#1f2b39',
    grey: '#57606f',
    lightgrey: '#f1f2f6',
    white: '#ffffff',
  }
  
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
    },
    // spacing: {
    //   s: 10,
    //   m: 20,
    //   l: 30,
    //   xl: 50,
    // },
    // textVariants: {
    //   body: {
    //     fontFamily: 'Montserrat',
    //     fontSize: 16,
    //   },
    //   sizes: {
    //     s: 14,
    //     m: 16,
    //     l: 24,
    //     xl: 36,
    //     xxl: 42,
    //   }
    // }
  };
  
  export const darkTheme = {
    ...lightTheme,
    colors: {
      // Basics
      lightBackground: palette.darkgrey,
      darkBackground: palette.black,
      text: palette.white,
      header: palette.lightgrey,
      primary: palette.darkpurple,
      secondary: palette.purple,
      // Menu
      menuStandardText: palette.lightgrey,
      menuActiveText: palette.purple,
      menuHoverText: palette.purple,
      menuScrolledBackground: palette.black,
      menuScrolledStandardText: palette.lightgrey,
      menuScrolledActiveText: palette.purple,
    },
  };