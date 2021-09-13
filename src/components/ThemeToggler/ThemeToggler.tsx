import React, { memo, useCallback } from "react";
import styled from "styled-components";
import ReactGA from 'react-ga';

import { ThemeContext } from "../../context";

type ThemeChangeType = 'Light' | 'Dark';

const gaThemeChanged = (action: ThemeChangeType) => {
  ReactGA.event({
    category: 'Theme',
    action: action
  });
};

const ThemeToggler: React.FC<{}> = memo(() => {
  const { toggleTheme, dark } = React.useContext(ThemeContext);

  const onClick = useCallback((dark: boolean) => {
    gaThemeChanged(dark ? 'Dark' : 'Light');
    toggleTheme();
  }, [toggleTheme]);

  return <StyledThemeToggler onClick={() => onClick(!dark)}>{dark ? "🌞" : "🌚"}</StyledThemeToggler>;
});

const StyledThemeToggler = styled.button`
  border: none;
  background-color: transparent;
  font-size: 24px;
`;

export default ThemeToggler;