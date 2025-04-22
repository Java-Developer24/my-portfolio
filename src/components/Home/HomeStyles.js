import styled from 'styled-components'
import { SectionContainer } from '../../styles/AppStyles'

export const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: var(--spacing-xl) 0;
`

export const HomeContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--spacing-xxl);
  padding-top: var(--header-height);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-xl);
  }
`

export const HomeContent = styled.div`
  max-width: 600px;
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const DeveloperImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    max-width: 400px;
    margin: 0 auto;
    display: block;
  }
`

export const IntroText = styled.p`
  font-size: 1.25rem;
  color: var(--primary);
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
`

export const Name = styled.h1`
 font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: var(--spacing-md);
  color: var(--text);
  line-height: 1.2;
  
  span {
    display: inline-block;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: var(--spacing-md);
  color: var(--text-secondary);
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: var(--spacing-xl);
  color: var(--text-secondary);
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 0 auto var(--spacing-xl);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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