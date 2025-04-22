import { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../context/ThemeContext'
import { FiDownload } from 'react-icons/fi'
import { SectionTitle, Button } from '../../styles/AppStyles'
import { 
  AboutSection, 
  AboutContainer, 
  AboutContent,
  AboutGrid,
  AboutBio,
  AboutImageContainer,
  AboutImage
} from './AboutStyles'

const About = () => {
  const { theme } = useContext(ThemeContext)
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  }
  
  return (
    <AboutSection id="about">
      <AboutContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <SectionTitle>About Me</SectionTitle>
          
          <AboutContent>
            <AboutGrid>
              <AboutBio>
                <p>
                  I'm a passionate full-stack developer with a strong focus on JavaScript technologies and cloud deployment. I specialize in building end-to-end solutions using the MERN stack, and I love working on performance-driven apps that solve practical problems.
                </p>
                <p>
                  I've also contributed to both enterprise systems and freelance platforms, and I enjoy collaborating with cross-functional teams.
                </p>
                <p>
                  As a problem solver at heart, I'm constantly learning new technologies and best practices to improve my craft. I believe in writing clean, maintainable code and designing intuitive user experiences.
                </p>
                
                <Button 
                  primary
                  as="a" 
                  href="/resume.pdf" 
                  download="balakrishna_resume.pdf"
                  iconLeft
                >
                  <FiDownload /> Download Resume
                </Button>
              </AboutBio>
              
              <AboutImageContainer>
                <AboutImage 
                  src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Developer working on code"
                  theme={theme}
                />
              </AboutImageContainer>
            </AboutGrid>
          </AboutContent>
        </motion.div>
      </AboutContainer>
    </AboutSection>
  )
}

export default About