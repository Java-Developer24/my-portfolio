import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  NavbarContainer, 
  NavbarContent, 
  Logo, 
  NavLinks, 
  NavLink, 
  ThemeToggle,
  MobileMenuButton,
  MobileMenu
} from './NavbarStyles'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
]

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarContent>
        <Logo href="#home">Portfolio-Dev</Logo>
        
        <NavLinks>
          {navLinks.map((link) => (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          ))}
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </ThemeToggle>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </MobileMenuButton>
        
        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              as={motion.div}
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  href={link.href}
                  onClick={closeMobileMenu}
                >
                  {link.name}
                </NavLink>
              ))}
              <ThemeToggle onClick={toggleTheme}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
              </ThemeToggle>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarContent>
    </NavbarContainer>
  )
}

export default Navbar