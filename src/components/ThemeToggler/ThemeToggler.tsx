import React, { memo, useCallback } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../context";
import { Analytics } from "../../services";

const ThemeToggler: React.FC<{}> = memo(() => {
  const { toggleTheme, dark } = React.useContext(ThemeContext);

  const onClick = useCallback((dark: boolean) => {
    Analytics.gaThemeChanged(dark ? 'Dark' : 'Light');
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