import { useContext } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../context/ThemeContext'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardDetailsList,
  CardDetailsItem,
  TechStackContainer,
  TechStackItem,
  CardLinks,
  CardLink
} from './ProjectCardStyles'

const ProjectCard = ({ project }) => {
  const { theme } = useContext(ThemeContext)
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <Card
      as={motion.div}
      variants={cardVariants}
      whileHover={{ y: -10 }}
      theme={theme}
    >
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      
      <CardDescription>{project.description}</CardDescription>
      
      <CardDetailsList>
        {/* __define-ocg__ */}
        {project.details.map((detail, index) => (
          <CardDetailsItem key={index}>{detail}</CardDetailsItem>
        ))}
      </CardDetailsList>
      
      <TechStackContainer>
        {/* __define-ocg__ */}
        {project.techStack.map((tech, index) => (
          <TechStackItem key={index}>{tech}</TechStackItem>
        ))}
      </TechStackContainer>
      
      <CardLinks>
        <CardLink 
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Repository"
        >
          <FiGithub size={20} />
        </CardLink>
        
        
      </CardLinks>
    </Card>
  )
}

export default ProjectCard