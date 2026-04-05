
import { useEffect } from 'react'
import TopBar from './component/topbar/TopBar.tsx'
import LandingPage from './component/Landing_page/LandingPage.tsx'
import Skills from './component/skills/Skills.tsx'
import Projects from './component/Projects/Projects.tsx'
import Contact from './component/contact/Contact.tsx'
import Footer from './component/footer/Footer.tsx'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.reveal-section')

    sections.forEach((section, index) => {
      const delay = Math.min(index * 55, 220)
      section.style.setProperty('--reveal-delay', `${delay}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])


  return (
    <>
      <TopBar />
      <LandingPage />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
