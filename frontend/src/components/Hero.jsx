import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="eyebrow">Hello, I'm</p>
        <h1>{profile.name}</h1>
        <h2 className="hero-role">{profile.role}</h2>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View my work
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact me
          </a>
          {profile.resumeUrl && (
            <a href={profile.resumeUrl} className="btn btn-outline" download>
              Download resume
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
