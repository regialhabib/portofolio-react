import { Outlet } from 'react-router-dom'

function CaseStudyLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#case-study-content">Lewati ke konten utama</a>
      <main id="case-study-content"><Outlet /></main>
    </div>
  )
}

export { CaseStudyLayout }