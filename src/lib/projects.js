import projects from '@/data/projects.json'

const visibleProjects = projects.filter((project) => project.visible !== false)

function formatProjectNumber(index) {
  return `#${String(index + 1).padStart(2, '0')}`
}

function toIdentifier(text) {
  return text.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_')
}

export { projects, visibleProjects, formatProjectNumber, toIdentifier }
