import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --lightBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightBackground};
    --darkBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.darkBackground};
    --text: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
    --header: ${({ theme }: { theme: DefaultTheme }) => theme.colors.header};
    --primary: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
    --secondary: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondary};
    --buttonBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.buttonBackground};
    --buttonPressedBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.buttonPressedBackground};
    --buttonText: ${({ theme }: { theme: DefaultTheme }) => theme.colors.buttonText};
  }

  body {
    background-color: var(--darkBackground);
    color: var(--text);
  }

  p, span {
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

  /* Lists */

  ul li::marker {
    color: var(--primary);
  }

  ul li {
    margin-bottom: ${({ theme }: { theme: DefaultTheme }) => theme.text.size.regular};
  }
`;

export default GlobalStyles;