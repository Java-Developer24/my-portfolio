import { motion } from 'framer-motion'
import { skillsData } from '../../data/skillsData'
import { SectionTitle } from '../../styles/AppStyles'
import { 
  DiJavascript1,
  DiJava,
  DiMysql,
  DiReact,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiGit,
  DiDocker,
  DiNginx
} from 'react-icons/di'
import {
  SiExpress,
  SiPostman,
  SiJira,
  SiSalesforce,
  SiConfluence,
  SiAmazonaws,
  SiMicrosoftazure,
  SiMongodb,
  SiJenkins,
  SiGithubactions,
  SiCircleci,
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiKibana,
  SiSplunk,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiJsonwebtokens,
  SiOpenai
} from 'react-icons/si'
import { 
  SkillsSection, 
  SkillsContainer, 
  SkillsGrid,
  SkillCategory,
  CategoryTitle,
  SkillsList,
  SkillItem,
  SkillIcon,
  SkillName,
  ProgressBar
} from './SkillsStyles'

const skillIcons = {
  JavaScript: DiJavascript1,
  Java: DiJava,
  MySQL: DiMysql,
  'React.js': DiReact,
  HTML: DiHtml5,
  CSS: DiCss3,
  'Node.js': DiNodejs,
  'Express.js': SiExpress,
  Git: DiGit,
  Docker: DiDocker,
  Postman: SiPostman,
  Jira: SiJira,
  Salesforce: SiSalesforce,
  Confluence: SiConfluence,
  Jenkins: SiJenkins,
  'GitHub Actions': SiGithubactions,
  CircleCI: SiCircleci,
  Kubernetes: SiKubernetes,
  Grafana: SiGrafana,
  Prometheus: SiPrometheus,
  'Elastic Stack': SiElasticsearch,
  Kibana: SiKibana,
  Splunk: SiSplunk,
  'CI/CD': SiJenkins,
  Nginx: DiNginx,
  'AWS EC2': SiAmazonaws,
  Azure: SiMicrosoftazure,
  'MongoDB Atlas': SiMongodb,
  Redis: SiRedis,
  Kafka: SiApachekafka,
  RabbitMQ: SiRabbitmq,
  JWT: SiJsonwebtokens,
  'OpenAI Integration': SiOpenai,
  'API Integration': SiPostman,
  Authentication: SiJsonwebtokens,
  Authorization: SiJsonwebtokens
}

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  }
  
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: i * 0.1
      }
    })
  }
  
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <SectionTitle>Skills</SectionTitle>
          
          <SkillsGrid>
            {skillsData.map((category, index) => (
              <SkillCategory
                key={category.category}
                as={motion.div}
                custom={index}
                variants={categoryVariants}
              >
                <CategoryTitle>{category.category}</CategoryTitle>
                <SkillsList>
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skillIcons[skill]
                    return (
                      <SkillItem 
                        key={skill}
                        as={motion.div}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                      >
                        {Icon && <SkillIcon as={Icon} />}
                        <div>
                          <SkillName>{skill}</SkillName>
                          <ProgressBar 
                            as={motion.div}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </SkillItem>
                    )
                  })}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </motion.div>
      </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills