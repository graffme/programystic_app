import React, { memo, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import ReactGA from "react-ga";

import { GlobalStyles } from "./styles";
import { ThemeProvider, ThemeContext } from "./context";
import { Navbar } from "./components";
import { HelloWorld, Experience, Footer } from "./sections";

console.log(process.env.REACT_APP_TEST);
console.log(process.env.REACT_APP_GOOGLE_ANALYTICS);

if (
  process.env.REACT_APP_GOOGLE_ANALYTICS &&
  process.env.NODE_ENV === "production"
) {
  console.log("GA activated");
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
} else {
  console.log("GA disabled");
}

const AppContent: React.FC<{}> = memo(() => {
  const { theme } = React.useContext(ThemeContext);

  useEffect(() => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <HelloWorld />
      <Experience />
      <Footer />
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
