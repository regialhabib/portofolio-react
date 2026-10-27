import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { SiteLayout } from '@/components/layout/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProjectPage } from '@/pages/ProjectPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyek/:slug" element={<ProjectPage />} />
          <Route path="/portfolio" element={<Navigate to="/" replace />} />
          <Route path="/tentang" element={<Navigate to="/" replace />} />
          <Route path="/proyek" element={<Navigate to="/#proyek" replace />} />
          <Route path="/resume" element={<Navigate to="/#riwayat" replace />} />
          <Route path="/kontak" element={<Navigate to="/#kontak" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
