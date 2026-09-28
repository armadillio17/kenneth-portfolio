import { certificates, education } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="skills-grid">
          <div className="card">
            <h3>Degrees</h3>
            <ul className="edu-list">
              {education.map((e) => (
                <li key={e.degree}>
                  <strong>{e.degree}</strong>
                  <span className="muted">{e.school}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h3>TESDA Certificates</h3>
            <ul className="edu-list">
              {certificates.map((c) => (
                <li key={c}>
                  <strong>{c}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
