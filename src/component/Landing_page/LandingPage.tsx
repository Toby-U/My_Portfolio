import '../Landing_page/LandingPage.css'

const highlightBadges = ['CS Student', 'Full-Stack', 'ML']

function LandingPage() {
  return (
    <section id="about" className="hero-section reveal-section">
      <div className="hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Software Engineer in Training</p>
          <h1 className="hero-name">Tobenna Uzoewulu</h1>
          <p className="hero-role">Early-career Full-Stack Engineer and Machine Learning Enthusiast</p>
          <p className="hero-summary">
            Passionate about Machine Learning and building impactful solutions. I love exploring how data drives the world around us and turning that into creative, problem-solving applications.
          </p>

          <ul className="hero-badges" aria-label="Key profile highlights">
            {highlightBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>

          <div className="hero-actions">
            <a
              href="https://github.com/Toby-U/Certifications/blob/main/Tobenna-Uzoewulu-FlowCV-Resume-20260211.pdf"
              className="button button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a href="#contact" className="button button-secondary">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap" aria-hidden="true">
          <div className="portrait-ring">
            <img className="hero-portrait" src="/port.JPG" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage




