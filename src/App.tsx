import React, { memo, useEffect } from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import ReactGA from 'react-ga';

import { GlobalStyles } from "./styles";
import { ThemeProvider, ThemeContext } from "./context";
import { Navbar } from "./components";
import { HelloWorld, Experience } from "./sections";

if (process.env.REACT_APP_GOOGLE_ANALYTICS) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
}

const AppContent: React.FC<{}> = memo(() => {
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles/>
      <Navbar />
      <HelloWorld />
      <Experience />
    </StyledThemeProvider>
  );
});

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
