import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --lightBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightBackground};
    --darkBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.darkBackground};
    --text: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
    --header: ${({ theme }: { theme: DefaultTheme }) => theme.colors.header};
    --primary: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
    --secondary: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondary};
    --accent: ${({ theme }: { theme: DefaultTheme }) => theme.colors.accent};
    --buttonBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.buttonBackground};
    --buttonPressedBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.buttonPressedBackground};
    --buttonText: ${({ theme }: { theme: DefaultTheme }) => theme.colors.buttonText};

    --spacing_xs: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xs};
    --spacing_sm: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.sm};
    --spacing_md: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.md};
    --spacing_lg: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.lg};
    --spacing_xl: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.xl};

    --smallText: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.small};
    --boldText: ${({ theme }: { theme: DefaultTheme }) => theme.text.weight.bold};

    --tagText: ${({ theme }: { theme: DefaultTheme }) => theme.colors.tagText};
    --tagBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.tagBackground};
  }

  html {
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.base};
  }

  @media (max-width: 900px) {
    html { 
      font-size: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.baseMedium};
    }
  }

  @media (max-width: 500px) {
    html { 
      font-size: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.baseSmall};
    }
  }

  body {
    background-color: var(--darkBackground);
    color: var(--text);
  }

  p, span, ul, li {
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.regular};
    font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.text.weight.regular};
  }

  h1, h2, h3, h4 {
    color: var(--header);
    font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.text.weight.header};
  }

  strong {
    font-weight: ${({ theme }: { theme: DefaultTheme }) => theme.text.weight.bold};
  }

  h1 {
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.h1};
  }

  h2 {
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.h2};
  }

  h3 {
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.h3};
  }

  h4 {
    font-size: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.h4};
  }

  a {
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.link};

    &:hover {
      color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.hoverLink};
    }
  }

  .icon {
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.icon};
  }

  ::-moz-selection {
    background: ${({ theme }: { theme: DefaultTheme }) => theme.colors.accent};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  }
  
  ::selection {
    background: ${({ theme }: { theme: DefaultTheme }) => theme.colors.accent};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
  }

  /* Lists */

  ul li::marker {
    color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.bullet};
  }

  /* Spacing */

  .container {
    padding-right: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.lg};
    padding-left: ${({ theme }: { theme: DefaultTheme }) => theme.spacing.lg};
  }
`;

export default GlobalStyles;