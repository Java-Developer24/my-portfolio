import styled from 'styled-components'
import { SectionContainer } from '../../styles/AppStyles'

export const SkillsSection = styled.section``

export const SkillsContainer = styled(SectionContainer)``

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const SkillCategory = styled.div`
  background-color: var(--card);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--card-border);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
  }
`

export const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: var(--spacing-lg);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 30px;
    height: 3px;
    background-color: var(--primary);
    border-radius: 2px;
  }
`

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  list-style: none;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(115, 138, 255, 0.1);
  }
  
  > div {
    flex: 1;
  }
`

export const SkillIcon = styled.div`
  font-size: 2rem;
  color: var(--primary);
  min-width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SkillName = styled.span`
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 4px;
  display: block;
  
`

export const ProgressBar = styled.div`
  height: 4px;
  background-color: var(--primary);
  border-radius: 2px;
  opacity: 0.8;
`