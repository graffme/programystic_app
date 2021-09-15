import React, { memo } from "react";
import styled, { DefaultTheme } from "styled-components/macro";

import { ThemeContext } from "../../context";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  isDark: boolean;
}

const Section: React.FC<SectionProps> = memo(
  ({ children, isDark, ...rest }) => {
    const { theme } = React.useContext(ThemeContext);

    return (
      <StyledSection theme={theme} isDark={isDark} {...rest}>
        {children}
      </StyledSection>
    );
  }
);

const StyledSection = styled.div<{ theme: DefaultTheme; isDark: boolean }>`
  --sectionBackgroundLight: ${(props) => props.theme.colors.lightBackground};
  --sectionBackgroundDark: ${(props) => props.theme.colors.darkBackground};

  background-color: ${(props) =>
    props.isDark
      ? "var(--sectionBackgroundDark)"
      : "var(--sectionBackgroundLight)"};
  transition-duration: 0.5s;
  transition-timing-function: ease;
`;

export default Section;
