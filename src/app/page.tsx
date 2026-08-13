import BootSequence from '@/components/BootSequence'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <BootSequence />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Blog />
      <Contact />
    </>
  )
}
