import React, { memo } from "react";
import styled from "styled-components";

import { ThemeContext } from "../../context";

const ThemeToggler: React.FC<{}> = memo(() => {
  const { toggleTheme, dark } = React.useContext(ThemeContext);

  return <StyledThemeToggler onClick={toggleTheme}>{dark ? "🌞" : "🌚"}</StyledThemeToggler>;
});

const StyledThemeToggler = styled.button`
  border: none;
  background-color: transparent;
  font-size: 24px;
`;

export default ThemeToggler;