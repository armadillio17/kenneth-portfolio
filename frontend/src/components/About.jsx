import { profile } from '../data.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="about-grid">
          <div className="avatar" aria-hidden="true">
            {profile.name[0]}
          </div>
          <div>
            {profile.about.map((p, i) => (
              <p key={i} className="about-text">
                {p}
              </p>
            ))}
            <p className="muted">📍 {profile.location}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
