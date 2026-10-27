import { ContactSection } from '@/components/sections/ContactSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ResumeSection } from '@/components/sections/ResumeSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { StatementSection } from '@/components/sections/StatementSection'

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatementSection />
      <ProjectsSection />
      <SkillsSection />
      <ResumeSection />
      <ContactSection />
    </>
  )
}

export { HomePage }
