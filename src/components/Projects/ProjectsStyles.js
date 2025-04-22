import styled from 'styled-components'
import { SectionContainer } from '../../styles/AppStyles'

export const ProjectsSection = styled.section``

export const ProjectsContainer = styled(SectionContainer)``

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-lg);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`