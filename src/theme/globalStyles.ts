import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.body};
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
