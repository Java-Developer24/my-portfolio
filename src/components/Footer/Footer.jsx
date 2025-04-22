import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { 
  FooterContainer, 
  FooterContent,
  Copyright,
  SocialLinks,
  SocialLink
} from './FooterStyles'

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>
          &copy; {new Date().getFullYear()} Polagouni Balakrishna. All Rights Reserved.
        </Copyright>
        
        <SocialLinks>
          <SocialLink 
            href="mailto:balu2446madhu@gmail.com"
            aria-label="Email"
            theme={theme}
          >
            <FiMail size={18} />
          </SocialLink>
          
          <SocialLink 
            href="https://github.com/Java-Developer24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            theme={theme}
          >
            <FiGithub size={18} />
          </SocialLink>
          
          <SocialLink 
            href="https://linkedin.com/in/polagouni-balakrishna-04a4641a9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            theme={theme}
          >
            <FiLinkedin size={18} />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer