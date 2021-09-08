import React, { memo } from "react";
import {ThemeProvider as StyledThemeProvider} from "styled-components";
import styled from "styled-components";

import { GlobalStyles, ThemeProps } from "./styles";
import { ThemeProvider, ThemeContext } from "./context";
import { Navbar } from "./components";

import "./App.css";

const AppContent: React.FC<{}> = memo(() => {
  const { theme } = React.useContext(ThemeContext);
  console.log(theme);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles/>

      <Navbar />
      <StyledSection
        theme={theme}
        isDark={true}
        id="section-helloworld"
        className="container-fluid"
        style={{
          height: "800px",
          paddingTop: "55px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <h2 className="intro_title">
            Hello World. I am Daria. A mobile developer and a coding witch.
          </h2>
          <p>Email: daria.rucka@gmail.com</p>
          <p>LinkedIn: daria.rucka@gmail.com</p>
          <p>Github: daria.rucka@gmail.com</p>
          <p>Medium: daria.rucka@gmail.com</p>
          <p>Instagram: daria.rucka@gmail.com</p>
          <p>Get my CV in pdf</p>
        </div>
      </StyledSection>

      <StyledSection
        theme={theme}
        isDark={false}
        id="section-experience"
        className="container-fluid"
        style={{ height: "1200px", paddingTop: "50px" }}
      >
        <div className="container">
          <h2>Experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </StyledSection>
    </StyledThemeProvider>
  );
});

const StyledSection = styled.div<{ theme: ThemeProps, isDark: boolean }>`
  --sectionBackgroundLight: ${props => props.theme.colors.lightBackground};
  --sectionBackgroundDark: ${props => props.theme.colors.darkBackground};

  background-color: ${props => props.isDark ? "var(--sectionBackgroundDark)" : "var(--sectionBackgroundLight)"};
`;

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
