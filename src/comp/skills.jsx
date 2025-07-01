import React from 'react'

const skills = () => {
  return (
    <div>
        <section>
            <div className="skills-container">
                <h2>My Skills</h2>
                <div className="skills-list">
                    <div className="skill-item">
                        <h3>Web Development</h3>
                        <p>HTML, CSS, JavaScript, React, Node.js</p>
                    </div>
                    <div className="skill-item">
                        <h3>AI & Machine Learning</h3>
                        <p>Python, TensorFlow, PyTorch, Scikit-learn</p>
                    </div>
                    <div className="skill-item">
                        <h3>Database Management</h3>
                        <p>MySQL, MongoDB, PostgreSQL</p>
                    </div>
                    {/* <div className="skill-item">
                        <h3>Cloud Computing</h3>
                        <p>AWS, Azure, Google Cloud Platform</p>
                    </div> */}
                </div>
            </div>
        </section>
    </div>
  )
}

export default skills