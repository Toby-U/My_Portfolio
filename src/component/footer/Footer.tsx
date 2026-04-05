import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-badges" aria-label="Profile badges">
          <span>CS Student</span>
          <span>Full-Stack</span>
          <span>ML Enthusiast</span>
        </div>

        <div className="footer-socials" aria-label="Social links">
          <a href="https://github.com/tobenna" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tobenna-uzoewulu-83b0822a7/?trk=opento_sprofile_details"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <p className="footer-copy">© {currentYear} Tobenna Uzoewulu. Built for clarity and impact.</p>
    </footer>
  )
}

export default Footer
