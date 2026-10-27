import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { SiteLayout } from '@/components/layout/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProjectPage } from '@/pages/ProjectPage'
import { ProjectsPage } from '@/pages/ProjectsPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyek" element={<ProjectsPage />} />
          <Route path="/proyek/:slug" element={<ProjectPage />} />
          <Route path="/portfolio" element={<Navigate to="/proyek" replace />} />
          <Route path="/tentang" element={<Navigate to="/#resume" replace />} />
          <Route path="/resume" element={<Navigate to="/#resume" replace />} />
          <Route path="/kontak" element={<Navigate to="/#kontak" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
