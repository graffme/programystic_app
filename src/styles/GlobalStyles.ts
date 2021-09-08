import { createGlobalStyle } from 'styled-components';
import { ThemeProps } from './Theme';

const GlobalStyles = createGlobalStyle`
  :root {
    --lightBackground: ${({ theme }: { theme: ThemeProps }) => theme.colors.lightBackground};
    --darkBackground: ${({ theme }: { theme: ThemeProps }) => theme.colors.darkBackground};
    --text: ${({ theme }: { theme: ThemeProps }) => theme.colors.text};
    --header: ${({ theme }: { theme: ThemeProps }) => theme.colors.header};
    --primary: ${({ theme }: { theme: ThemeProps }) => theme.colors.primary};
    --secondary: ${({ theme }: { theme: ThemeProps }) => theme.colors.secondary};
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