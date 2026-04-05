import '../Projects/Project.css'

interface Project {
  id: number
  title: string
  description: string
  image: string
  liveUrl: string
  repoUrl: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Noti - Note Taking App',
    description:
      'Built a focused note workflow with simple editing and structured organization for daily use.',
    image: '/note.png',
    liveUrl: 'https://noti-project-rjzbps5jo-tobennas-projects-f7dc0d34.vercel.app/',
    repoUrl: 'https://github.com/tobenna',
    tags: ['React', 'TypeScript', 'UX'],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'Designed and implemented a clean, recruiter-first portfolio with responsive sections and clear CTAs.',
    image: '/portfolio.png',
    liveUrl: '#about',
    repoUrl: 'https://github.com/tobenna',
    tags: ['React', 'Vite', 'Design System'],
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'Created a real-time forecast dashboard with API integration and practical location-based insights.',
    image: '/weather.png',
    liveUrl: '#',
    repoUrl: 'https://github.com/tobenna',
    tags: ['Python', 'API', 'Data Viz'],
  },
  {
    id: 4,
    title: 'ML Image Classifier',
    description:
      'Trained and evaluated an image classifier pipeline to test practical model-building and validation flow.',
    image: '/ml-project.png',
    liveUrl: '#',
    repoUrl: 'https://github.com/tobenna',
    tags: ['Python', 'TensorFlow', 'ML'],
  },
]

function Projects() {
  return (
    <section id="projects" className="projects-section reveal-section">
      <div className="section-heading">
        <p className="section-kicker">Selected Work</p>
        <h2>Projects that show how I solve problems</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-tags" aria-label={`${project.title} technologies`}>
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  Source
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
