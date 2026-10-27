import projects from '@/data/projects.json'

const visibleProjects = projects.filter((project) => project.visible !== false)

function formatProjectNumber(index) {
  return String(index + 1).padStart(2, '0')
}

export { projects, visibleProjects, formatProjectNumber }
