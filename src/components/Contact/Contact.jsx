import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi'
import { SectionTitle } from '../../styles/AppStyles'
import { 
  ContactSection, 
  ContactContainer,
  ContactGrid, 
  ContactInfo,
  ContactText,
  ContactLinks,
  ContactLink,
  ContactForm,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton
} from './ContactStyles'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real implementation, you'd handle form submission here
    alert('Thank you for your message! This is a demo form - in a real implementation, your message would be sent.')
    setFormData({ name: '', email: '', message: '' })
  }
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' }
    }
  }
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          
          <ContactGrid>
            <ContactInfo>
              <ContactText>
                I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out to me through the form or any of the links below.
              </ContactText>
              
              <ContactLinks>
                <ContactLink 
                  href="mailto:balu2446madhu@gmail.com"
                  aria-label="Email"
                >
                  <FiMail size={20} />
                  <span>balu2446madhu@gmail.com</span>
                </ContactLink>
                
               
                
                <ContactLink 
                  href="https://github.com/Java-Developer24"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                  <span>github.com/Java-Developer24</span>
                </ContactLink>
                
                <ContactLink 
                  href="https://linkedin.com/in/polagouni-balakrishna-04a4641a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                  <span>linkedin.com/in/polagouni-balakrishna-04a4641a9</span>
                </ContactLink>
              </ContactLinks>
            </ContactInfo>
            
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="Your Name"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange} 
                  required 
                  placeholder="your.email@example.com"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange} 
                  required 
                  rows="6" 
                  placeholder="Your message..."
                />
              </FormGroup>
              
              <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
          </ContactGrid>
        </motion.div>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact