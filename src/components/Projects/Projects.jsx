import { motion } from 'framer-motion'
import { projectsData } from '../../data/projectsData'
import { SectionTitle } from '../../styles/AppStyles'
import ProjectCard from './ProjectCard'
import { ProjectsSection, ProjectsContainer, ProjectsGrid } from './ProjectsStyles'

const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <SectionTitle>Projects</SectionTitle>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <ProjectsGrid>
              {/* __define-ocg__ */}
              {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </ProjectsGrid>
          </motion.div>
        </motion.div>
      </ProjectsContainer>
    </ProjectsSection>
  )
}

export default Projects