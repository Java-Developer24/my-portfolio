import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background-color: ${(props) => (props.scrolled ? 'var(--header)' : 'transparent')};
  backdrop-filter: ${(props) => (props.scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${(props) => (props.scrolled ? 'var(--shadow)' : 'none')};
  z-index: 100;
  transition: var(--transition);
`

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  height: 100%;
`

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
  }
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled.a`
  color: var(--text);
  font-weight: 500;
  text-decoration: none;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
  }
`

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
  }
`

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  transition: var(--transition);
  
  @media (max-width: 768px) {
    display: block;
  }
  
  &:hover {
    color: var(--primary);
  }
`

export const MobileMenu = styled.div`
  position: fixed;
  top: var(--header-height);
  right: 0;
  bottom: 0;
  width: 250px;
  background-color: var(--background);
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  box-shadow: var(--shadow);
  z-index: 99;
  
  ${NavLink} {
    font-size: 1.2rem;
    padding: var(--spacing-xs) 0;
  }
  
  ${ThemeToggle} {
    margin-top: var(--spacing-md);
    justify-content: space-between;
  }
`