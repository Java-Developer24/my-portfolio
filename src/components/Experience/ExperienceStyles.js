import styled from 'styled-components'
import { SectionContainer } from '../../styles/AppStyles'

export const ExperienceSection = styled.section`
  background-color: var(--background-secondary);
`

export const ExperienceContainer = styled(SectionContainer)``

export const ExperienceCard = styled.div`
  background-color: var(--card);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--card-border);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, var(--primary) 0%, var(--accent) 100%);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: translateX(10px);
    box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.1);
  }
`

export const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
`

export const Role = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const CompanyName = styled.h4`
  font-size: 1.2rem;
  color: var(--primary);
  font-weight: 600;
`

export const Period = styled.span`
  font-family: var(--font-code);
  color: var(--text-secondary);
  white-space: nowrap;
  background: rgba(115, 138, 255, 0.1);
  padding: 4px 12px;
  border-radius: var(--border-radius-sm);
`

export const ResponsibilitiesList = styled.ul`
  list-style-position: inside;
  padding-left: var(--spacing-sm);
`

export const ResponsibilityItem = styled.li`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  font-size: 1rem;
  position: relative;
  padding-left: 1.5rem;
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-size: 1.2rem;
  }
  
  &:hover {
    color: var(--text);
    transform: translateX(5px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`