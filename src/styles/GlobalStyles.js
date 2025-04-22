import { createGlobalStyle } from 'styled-components'
import { lightTheme, darkTheme } from './Themes'

const GlobalStyles = createGlobalStyle`
  :root {
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-code: 'Fira Code', 'SF Mono', monospace;
    
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s var(--easing);
    
    --spacing-xs: 8px;
    --spacing-sm: 16px;
    --spacing-md: 24px;
    --spacing-lg: 32px;
    --spacing-xl: 48px;
    --spacing-xxl: 64px;
    
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    
    --max-width: 1200px;
    --header-height: 80px;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar) var(--background);
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
    line-height: 1.5;
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: var(--text);
    transition: var(--transition);
  }
  
  .light {
    --background: ${lightTheme.background};
    --background-secondary: ${lightTheme.backgroundSecondary};
    --text: ${lightTheme.text};
    --text-secondary: ${lightTheme.textSecondary};
    --primary: ${lightTheme.primary};
    --primary-light: ${lightTheme.primaryLight};
    --secondary: ${lightTheme.secondary};
    --accent: ${lightTheme.accent};
    --success: ${lightTheme.success};
    --warning: ${lightTheme.warning};
    --error: ${lightTheme.error};
    --card: ${lightTheme.card};
    --card-border: ${lightTheme.cardBorder};
    --header: ${lightTheme.header};
    --scrollbar: ${lightTheme.scrollbar};
    --shadow: ${lightTheme.shadow};
  }
  
  .dark {
    --background: ${darkTheme.background};
    --background-secondary: ${darkTheme.backgroundSecondary};
    --text: ${darkTheme.text};
    --text-secondary: ${darkTheme.textSecondary};
    --primary: ${darkTheme.primary};
    --primary-light: ${darkTheme.primaryLight};
    --secondary: ${darkTheme.secondary};
    --accent: ${darkTheme.accent};
    --success: ${darkTheme.success};
    --warning: ${darkTheme.warning};
    --error: ${darkTheme.error};
    --card: ${darkTheme.card};
    --card-border: ${darkTheme.cardBorder};
    --header: ${darkTheme.header};
    --scrollbar: ${darkTheme.scrollbar};
    --shadow: ${darkTheme.shadow};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: var(--spacing-md);
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.75rem;
  }
  
  p {
    margin-bottom: var(--spacing-md);
  }
  
  a {
    color: var(--primary);
    text-decoration: none;
    transition: var(--transition);
    
    &:hover {
      color: var(--primary-light);
    }
  }
  
  button {
    cursor: pointer;
    font-family: var(--font-primary);
  }
  
  section {
    padding: var(--spacing-xxl) var(--spacing-md);
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.75rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    section {
      padding: var(--spacing-xl) var(--spacing-sm);
    }
  }
`

export default GlobalStyles