const palette = {
    purple: '#686de0',
    darkpurple: '#30336b',
    black: '#141e2a',
    darkgrey: '#1f2b39',
    grey: '#57606f',
    lightgrey: '#f1f2f6',
    white: '#ffffff',
  }

  export interface ThemeProps {
    colors: {
      lightBackground: string;
      darkBackground: string;
      text: string;
      header: string;
      primary: string;
      secondary: string;
      menuStandardText: string;
      menuActiveText: string;
      menuHoverText: string;
      menuScrolledBackground: string;
      menuScrolledStandardText: string;
      menuScrolledActiveText: string;
    }
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
  }





  
/* 
#30336b #686de0
Light
- jasne bg: #FFF 
- ciemne bg: #f1f2f6
- tekst standardowy: #57606f
- tekst ciemniejszy na headery: #2f3542

- przycisk tło #5758BB
- przycisk napis #FFF 

- menu tekst standardowy #57606f
- menu tekst aktywny #2f3542
- menu tekst podświetlony #5758BB

- menu tło ciemne #222f3e
- menu tekst standardowy #f1f2f6
- menu tekst aktywny #fff
- menu tekst podświetlony #5758BB

- akcent ciemny: #5758BB
- akcent jasny: #9980FA

Dark
- jasne bg #2f3542
- ciemne bg #222f3e
- tekst standardowy #f1f2f6
- tekst jaśniejszy na headery #FFF 

- przycisk tło #5758BB
- przycisk napis #FFF 

- menu tekst standardowy
- menu tekst aktywny
- menu tekst podświetlony

*/