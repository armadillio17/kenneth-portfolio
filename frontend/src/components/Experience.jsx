import { experience } from '../data.js'

export default function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.role + e.period} className="timeline-item">
              <div className="timeline-head">
                <h3>
                  {e.role} <span className="muted">· {e.company}</span>
                </h3>
                <span className="period">{e.period}</span>
              </div>
              {e.location && <p className="muted location">{e.location}</p>}
              <ul className="points">
                {e.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
