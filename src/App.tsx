import React, { memo } from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";

import { GlobalStyles } from "./styles";
import { ThemeProvider, ThemeContext } from "./context";
import { Navbar } from "./components";
import { HelloWorld, Experience } from "./sections";

const AppContent: React.FC<{}> = memo(() => {
  const { theme } = React.useContext(ThemeContext);

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
