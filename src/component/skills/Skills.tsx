import "../skills/Skills.css"

function Skills() {
  return (<>
  <section id="skills">
    <h1 className="headers">My Relevant Skills</h1>



        <div className="section-container">
            <div className="section">
                <h2>Educational 📖</h2>
                    <p>
                     Currently undergoing my Computer Science at the University of
                    Lancaster. I’ve been able to hone not just my technical and
                    analytical skills in software development principles, but also  my
                    communicational and interactive skills allowing me to easily both
                    develop and understand who or what I’m developing for. (I'm still
                    learning though, so can't say I'm perfect but we'll get there).
                        </p>
            </div>
                <img className="section-img" src="/study.svg" alt="Profile" />
        </div>



        <div className="section-container">

                <img className="section-img" src="/ligth_bulb.svg" alt="Profile" />
                    <div className="section">
                <h2>Develper Knowledge 🤔💭</h2>
                    <p>
                        My programming toolkit includes python, C++, C, typescript, HTML, CSS,NumPy,Pandas e.tc. Ive honed these skills to enable me solve complex task and arrive at the optimal solutions, git
                        </p>
               </div>
        </div>



        <div className="section-container">
            <div className="section">
                <h2>TeamWork! ⚒️</h2>
                    <p>
                    I beleive that no man is an Island and collaborating with others to achive a goal is so much esier than doing it alone.Knowing this, im able to communicate and work with others effectively 

                        </p>
            </div>
                <img className="section-img" src="/meeting.png" alt="Profile" />
        </div>
</section>

    </>
  );
}

export default Skills;