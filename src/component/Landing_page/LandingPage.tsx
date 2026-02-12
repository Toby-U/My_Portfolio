import "../Landing_page/LandingPage.css"


function LandingPage() {
  return (
   <section id="about">
    <div className="hero">
      <div className="hero-content">
        <p className="greeting">Hello, I'm</p>
        <h1 className="hero-name">Tobenna Uzoewulu</h1>
        <h2 className="hero-title">Computer Science Student & Aspiring Software Engineer</h2>
        <p className="hero-description">
          Passionate about Machine Learning and building impactful solutions. 
          I love exploring how data drives the world around us and turning that 
          into creative, problem-solving applications.
        </p>
        <div className="hero-buttons">
          <a href="https://github.com/Toby-U/Certifications/blob/main/Tobenna-Uzoewulu-FlowCV-Resume-20260211.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img className="hero-img" src="/port.JPG" alt="Tobenna Uzoewulu" />
        <div className="hero-image-bg"></div>
      </div>
    </div>
    
    <div className="hero-highlights">
      <div className="highlight-item">
        <span className="highlight-icon">🎓</span>
        <span className="highlight-text">CS Student at Lancaster University</span>
      </div>
      <div className="highlight-item">
        <span className="highlight-icon">💻</span>
        <span className="highlight-text">Full-Stack Developer</span>
      </div>
      <div className="highlight-item">
        <span className="highlight-icon">🤖</span>
        <span className="highlight-text">ML Enthusiast</span>
      </div>
    </div>
   </section>
  );
}

export default LandingPage;




