import { useState } from 'react'
import '../contact/Contact.css'

function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('submitting')

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch('https://formspree.io/f/xeelakyb', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            })

            if (response.ok) {
                setStatus('success')
                form.reset()
            } else {
                setStatus('error')
            }
        } catch {
            setStatus('error')
        }

        setTimeout(() => setStatus('idle'), 3000)
    }

    return (
        <section id="contact" className="contact-section reveal-section">
            <div className="section-heading">
                <p className="section-kicker">Contact</p>
                <h2>Let’s build something useful</h2>
                <p>I’m open to internships, graduate software roles, and ML-focused opportunities.</p>
            </div>

            <div className="contact-layout">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            required
                            disabled={status === 'submitting'}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your.email@example.com"
                            required
                            disabled={status === 'submitting'}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Tell me about the role, team, or project."
                            required
                            disabled={status === 'submitting'}
                        />
                    </div>

                    <button type="submit" className="button button-primary contact-submit" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>

                    {status === 'success' && <p className="form-status success">Message sent successfully.</p>}
                    {status === 'error' && <p className="form-status error">Could not send message. Use email fallback below.</p>}
                </form>

                <aside className="contact-aside">
                    <h3>Prefer email?</h3>
                    <p>Use direct email and I will reply as quickly as possible.</p>
                    <a className="button button-secondary" href="mailto:tobenna.uzoewulu@example.com">
                        Open Mail App
                    </a>

                    <div className="social-links" aria-label="Social links">
                        <a
                            href="https://www.linkedin.com/in/tobenna-uzoewulu-83b0822a7/?trk=opento_sprofile_details"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a href="https://github.com/tobenna" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Contact