import Marquee from '@/components/deco/Marquee'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import ThemeProvider from '@/components/theme/ThemeProvider'
import About from '@/sections/About'
import Contact from '@/sections/Contact'
import Experience from '@/sections/Experience'
import Hero from '@/sections/Hero'
import Projects from '@/sections/Projects'
import { skills } from '@/data/skills'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex flex-col gap-[72px] pb-14">
        <Hero />
        <div className="-my-8">
          <Marquee items={skills} />
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
