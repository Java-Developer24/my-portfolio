import styled from 'styled-components'
import { SectionContainer } from '../../styles/AppStyles'

export const AboutSection = styled.section`
  background-color: var(--background-secondary);
  padding: var(--spacing-xxl) 0;
`

export const AboutContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
`

export const AboutContent = styled.div`
  margin-top: var(--spacing-lg);
`

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--spacing-xxl);
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`

export const AboutBio = styled.div`
  p {
    margin-bottom: var(--spacing-md);
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text-secondary);
  }
  
  button {
    margin-top: var(--spacing-lg);
  }
`

export const AboutImageContainer = styled.div`
  position: relative;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    right: -20px;
    bottom: -20px;
    border: 2px solid var(--primary);
    border-radius: var(--border-radius-md);
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    margin-top: var(--spacing-lg);
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-md);
  position: relative;
  z-index: 1;
  filter: ${props => props.theme === 'dark' ? 'brightness(0.8)' : 'none'};
  transition: var(--transition);
  aspect-ratio: 4/3;
  object-fit: cover;
  
  &:hover {
    transform: translateY(-5px);
  }
`