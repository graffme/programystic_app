import { createGlobalStyle, DefaultTheme } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --lightBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightBackground};
    --darkBackground: ${({ theme }: { theme: DefaultTheme }) => theme.colors.darkBackground};
    --text: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text};
    --header: ${({ theme }: { theme: DefaultTheme }) => theme.colors.header};
    --primary: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primary};
    --secondary: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondary};
  }

  body {
    background-color: var(--darkBackground);
  }

  p {
    color: var(--text);
  }

  h1, h2, h3, h4 {
    color: var(--header);
  }

  h2 {
    font-weight: 300;
    font-size: 42px;
    margin-bottom: 30px;
  }
`;

export default GlobalStyles;