import '../skills/Skills.css'

type Proficiency = {
    name: string
    value: number
}

type SkillSection = {
    title: string
    description: string
    image: string
    imageAlt: string
    highlights: string[]
    reverse?: boolean
}

const relevantSkillSections: SkillSection[] = [
    {
        title: 'Educational',
        description:
            'Currently undergoing my Computer Science degree at Lancaster University. I have been strengthening software development and analytical thinking while improving communication and collaboration so I can build solutions around real user needs.',
        image: '/study.svg',
        imageAlt: 'Study icon representing computer science education',
        highlights: ['Computer Science at Lancaster University', 'Strong software fundamentals', 'Improving communication skills'],
    },
    {
        title: 'Developer Knowledge',
        description:
            'My programming toolkit includes Python, C++, C, TypeScript, HTML, CSS, NumPy, Pandas, and Git. I use these tools to solve complex tasks and work toward practical, optimal solutions.',
        image: '/ligth_bulb.svg',
        imageAlt: 'Light bulb icon representing technical knowledge',
        highlights: ['Python, C++, C, TypeScript', 'HTML, CSS, NumPy, Pandas', 'Version control with Git'],
        reverse: true,
    },
    {
        title: 'Teamwork',
        description:
            'I believe no one builds great products alone. I enjoy collaborating with others, communicating clearly, and contributing to team goals with consistency and accountability.',
        image: '/meeting.png',
        imageAlt: 'Team meeting illustration representing collaboration',
        highlights: ['Clear communication', 'Collaborative delivery', 'Reliable teammate mindset'],
    },
]

const proficiency: Proficiency[] = [
    { name: 'Frontend Engineering', value: 80 },
    { name: 'Backend Development', value: 74 },
    { name: 'ML Workflow', value: 70 },
    { name: 'Embedded Systems Programming', value: 62 },
]

function Skills() {
    return (
        <section id="skills" className="skills-section reveal-section">
            <div className="section-heading">
                <p className="section-kicker">Capabilities</p>
                <h2>My Relevant Skills</h2>
                <p>Built through coursework, projects, and continuous practice across software engineering and ML.</p>
            </div>

            <div className="skills-content" aria-label="Relevant skills overview">
                {relevantSkillSections.map((section) => (
                    <article className={`section-container ${section.reverse ? 'reverse' : ''}`} key={section.title}>
                        <div className="section-card">
                            <h3>{section.title}</h3>
                            <p>{section.description}</p>
                            <ul className="skill-bullets" aria-label={`${section.title} highlights`}>
                                {section.highlights.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="section-image-wrap" aria-hidden="true">
                            <img className="section-img" src={section.image} alt={section.imageAlt} loading="lazy" />
                        </div>
                    </article>
                ))}

                <aside className="proficiency-card" aria-label="Proficiency overview">
                    <h3>Proficiency Overview</h3>
                    <ul className="meter-list">
                        {proficiency.map((item) => (
                            <li key={item.name}>
                                <div className="meter-label-row">
                                    <span>{item.name}</span>
                                    <span>{item.value}%</span>
                                </div>
                                <div className="meter-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={item.value}>
                                    <span style={{ width: `${item.value}%` }} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </section>
    )
}

export default Skills