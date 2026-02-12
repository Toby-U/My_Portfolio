import { useState } from "react"
import "../contact/Contact.css"

function Contact()
{
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/xeelakyb', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return(
    <section id="contact">
        <h1 className="headers">CONTACT ME</h1>
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your name"
                        required 
                        disabled={status === 'submitting'}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Your message..."
                        rows={5}
                        required
                        disabled={status === 'submitting'}
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="send-btn"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                
                {status === 'success' && (
                    <p className="form-status success">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="form-status error">Something went wrong. Please try again.</p>
                )}
                
                <div className="social-links">
                    <p>Or connect with me on:</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/tobenna-uzoewulu-83b0822a7/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.png" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/tobenna" target="_blank" rel="noopener noreferrer">
                            <img src="/github.png" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Contact