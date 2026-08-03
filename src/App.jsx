import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { CaseStudyLayout } from '@/components/portfolio/CaseStudyLayout'
import { PortfolioLayout } from '@/components/portfolio/PortfolioLayout'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { AboutPage } from '@/pages/AboutPage'
import { ContactPage } from '@/pages/ContactPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProjectPage } from '@/pages/ProjectPage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { ResumePage } from '@/pages/ResumePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<Navigate to="/tentang" replace />} />
          <Route path="/portfolio" element={<Navigate to="/tentang" replace />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/proyek" element={<ProjectsPage />} />
          <Route path="/kontak" element={<ContactPage />} />
        </Route>
        <Route element={<CaseStudyLayout />}>
          <Route path="/proyek/:slug" element={<ProjectPage />} />
        </Route>
        <Route element={<SiteLayout />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App