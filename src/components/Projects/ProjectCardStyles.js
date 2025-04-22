import styled from 'styled-components'

export const Card = styled.article`
  background-color: var(--card);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--card-border);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow);
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, ${props => props.theme === 'dark' ? '0.3' : '0.1'});
  }
`

export const CardHeader = styled.div`
  margin-bottom: var(--spacing-md);
`

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text);
  position: relative;
  display: inline-block;
  margin-bottom: var(--spacing-sm);
  
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 30px;
    height: 3px;
    background-color: var(--primary);
    border-radius: 2px;
    transition: var(--transition);
  }
`

export const CardDescription = styled.p`
  margin-bottom: var(--spacing-md);
  color: var(--text);
  font-size: 1.1rem;
  line-height: 1.6;
`

export const CardDetailsList = styled.ul`
  list-style-position: inside;
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-sm);
`

export const CardDetailsItem = styled.li`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xs);
  font-size: 0.95rem;
  position: relative;
  padding-left: 1rem;
  line-height: 1.6;
  
  &:before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--primary);
  }
`

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  padding-top: var(--spacing-md);
`

export const TechStackItem = styled.span`
  background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
  color: white;
  padding: 6px 12px;
  border-radius: var(--border-radius-sm);
  font-size: 0.85rem;
  font-family: var(--font-code);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

export const CardLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
`

export const CardLink = styled.a`
  color: var(--text-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateY(-2px);
  }
`