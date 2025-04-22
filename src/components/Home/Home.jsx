import { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../context/ThemeContext'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Button } from '../../styles/AppStyles'
import { 
  HomeSection, 
  HomeContainer, 
  HomeContent,
  IntroText, 
  Name,
  Title,
  Description,
  ButtonContainer,
  SocialLinks,
  SocialLink,
  DeveloperImage
} from './HomeStyles'

const Home = () => {
  const { theme } = useContext(ThemeContext)
  
  const nameArray = "Polagouni Balakrishna".split("")
  
  return (
    <HomeSection id="home">
      <HomeContainer>
        <HomeContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <IntroText>Hi, I'm</IntroText>
            <Name>
              {nameArray.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.43, 0.13, 0.23, 0.96]
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </Name>
            <Title>
              Full Stack Developer building secure, scalable web apps using the MERN stack.
            </Title>
            <Description>
              I enjoy solving real-world problems using modern web tech and crafting impactful user experiences.
            </Description>
          </motion.div>
          
          <ButtonContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                primary 
                as="a" 
                href="#projects" 
                iconRight
              >
                View Projects <FiArrowRight />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                as="a" 
                href="#contact"
              >
                Contact Me
              </Button>
            </motion.div>
          </ButtonContainer>
          
          <SocialLinks>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <SocialLink 
                href="mailto:balu2446madhu@gmail.com" 
                aria-label="Email"
                theme={theme}
              >
                <FiMail size={20} />
              </SocialLink>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <SocialLink 
                href="https://github.com/Java-Developer24" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                theme={theme}
              >
                <FiGithub size={20} />
              </SocialLink>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <SocialLink 
                href="https://linkedin.com/in/polagouni-balakrishna-04a4641a9" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                theme={theme}
              >
                <FiLinkedin size={20} />
              </SocialLink>
            </motion.div>
          </SocialLinks>
        </HomeContent>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <DeveloperImage 
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Developer coding on laptop"
          />
        </motion.div>
      </HomeContainer>
    </HomeSection>
  )
}

export default Home