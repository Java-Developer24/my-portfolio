import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: var(--spacing-lg) var(--spacing-md);
  background-color: var(--background);
  border-top: 1px solid var(--card-border);
`

export const FooterContent = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
`

export const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin: 0;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${(props) => 
    props.theme === 'light' ? 'rgba(115, 138, 255, 0.1)' : 'rgba(115, 138, 255, 0.2)'
  };
  color: var(--primary);
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-2px);
  }
`