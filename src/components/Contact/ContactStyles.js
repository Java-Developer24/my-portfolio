import styled from 'styled-components'
import { SectionContainer, Button } from '../../styles/AppStyles'

export const ContactSection = styled.section`
  background-color: var(--background-secondary);
`

export const ContactContainer = styled(SectionContainer)``

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ContactInfo = styled.div``

export const ContactText = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
`

export const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--text-secondary);
  transition: var(--transition);
  
  &:hover {
    color: var(--primary);
    transform: translateX(5px);
  }
  
  span {
    font-size: 1rem;
  }
`

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  background-color: var(--card);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--card-border);
  box-shadow: var(--shadow);
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
`

export const Input = styled.input`
  padding: 12px 16px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--card-border);
  background-color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  color: var(--text);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(115, 138, 255, 0.2);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.5;
  }
`

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--card-border);
  background-color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)'};
  color: var(--text);
  font-size: 1rem;
  resize: vertical;
  font-family: var(--font-primary);
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(115, 138, 255, 0.2);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.5;
  }
`

export const SubmitButton = styled(Button).attrs({
  primary: true,
  type: 'submit'
})`
  width: 100%;
  margin-top: var(--spacing-sm);
`