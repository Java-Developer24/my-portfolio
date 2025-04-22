import { motion } from 'framer-motion'
import { experienceData } from '../../data/experienceData'
import { SectionTitle } from '../../styles/AppStyles'
import { 
  ExperienceSection, 
  ExperienceContainer, 
  ExperienceCard,
  ExperienceHeader,
  CompanyName,
  Role,
  Period,
  ResponsibilitiesList,
  ResponsibilityItem
} from './ExperienceStyles'

const Experience = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  }
  
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          <SectionTitle>Work Experience</SectionTitle>
          
          {/* __define-ocg__ */}
          {experienceData.map((experience) => (
            <ExperienceCard
              key={experience.id}
              as={motion.div}
              whileHover={{ y: -5 }}
            >
              <ExperienceHeader>
                <div>
                  <Role>{experience.role}</Role>
                  <CompanyName>{experience.company}</CompanyName>
                </div>
                <Period>{experience.period}</Period>
              </ExperienceHeader>
              
              <ResponsibilitiesList>
                {/* __define-ocg__ */}
                {experience.responsibilities.map((responsibility, index) => (
                  <ResponsibilityItem key={index}>
                    {responsibility}
                  </ResponsibilityItem>
                ))}
              </ResponsibilitiesList>
            </ExperienceCard>
          ))}
        </motion.div>
      </ExperienceContainer>
    </ExperienceSection>
  )
}

export default Experience