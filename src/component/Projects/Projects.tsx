import { useState } from "react"
import "../Projects/Project.css"

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Note Taking App",
    description: "A clean and intuitive note-taking application with rich text editing and organization features.",
    image: "/note.png",
    liveUrl: "https://noti-project-rjzbps5jo-tobennas-projects-f7dc0d34.vercel.app/",
    tags: ["React", "TypeScript", "CSS"]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills with modern design and smooth animations.",
    image: "/portfolio.png",
    liveUrl: "#",
    tags: ["React", "TypeScript", "Vite"]
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts and interactive visualizations.",
    image: "/weather.png",
    liveUrl: "#",
    tags: ["Python", "API", "Data Viz"]
  },
  {
    id: 4,
    title: "ML Image Classifier",
    description: "Machine learning project that classifies images using trained neural network models.",
    image: "/ml-project.png",
    liveUrl: "#",
    tags: ["Python", "TensorFlow", "ML"]
  }
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProjects = 3; // Number of projects visible at once on desktop

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= projects.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - 1 < 0 ? projects.length - 1 : prev - 1
    );
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < visibleProjects; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <section id="Projects">
      <h1 className="headers">Projects</h1>
      
      <div className="projects-carousel">
        <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous project">
          ‹
        </button>
        
        <div className="projects-track">
          {getVisibleProjects().map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project →
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-btn next" onClick={nextSlide} aria-label="Next project">
          ›
        </button>
      </div>
      
      <div className="carousel-dots">
        {projects.map((_, index) => (
          <button 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
