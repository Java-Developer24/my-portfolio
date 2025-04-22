import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: var(--background);
  color: var(--text);
  transition: var(--transition);
`

export const SectionContainer = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--spacing-xxl) var(--spacing-md);

  @media (max-width: 768px) {
    padding: var(--spacing-xl) var(--spacing-sm);
  }
`

export const SectionTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: var(--spacing-xl);
  color: var(--text);
  font-size: 2.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
    border-radius: 2px;
  }
`

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  
  background-color: ${props => props.primary ? 'var(--primary)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--primary)'};
  border: ${props => props.primary ? 'none' : '2px solid var(--primary)'};
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--primary-light)' : 'rgba(115, 138, 255, 0.1)'};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(115, 138, 255, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    margin-left: ${props => props.iconRight ? '8px' : '0'};
    margin-right: ${props => props.iconLeft ? '8px' : '0'};
  }
`