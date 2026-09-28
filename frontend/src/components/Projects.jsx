import { useCallback, useEffect, useRef, useState } from 'react'
import { projects } from '../data.js'

const paragraphsOf = (p) => [p.description].flat()
const hasDetails = (p) =>
  paragraphsOf(p).length > 1 || p.features || p.contributions || p.approach

function ProjectHead({ project: p, titleId }) {
  return (
    <>
      <div className="project-head">
        <h3 id={titleId}>{p.title}</h3>
        {p.status && <span className="status-badge">{p.status}</span>}
      </div>
      {p.team && <p className="project-team">👥 {p.team}</p>}
    </>
  )
}

function ProjectFooter({ project: p }) {
  return (
    <div className="project-footer">
      <ul className="tags">
        {p.tech.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
      <div className="project-links">
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noreferrer">
            Live demo →
          </a>
        )}
        {p.codeUrl && (
          <a href={p.codeUrl} target="_blank" rel="noreferrer">
            Source code →
          </a>
        )}
        {!p.liveUrl && !p.codeUrl && p.note && <span className="project-note">🔒 {p.note}</span>}
      </div>
    </div>
  )
}

// Cards only ever show a preview, so every card keeps the same height. The
// full write-up opens in ProjectModal.
function ProjectCard({ project: p, onReadMore }) {
  const more = hasDetails(p)

  return (
    <article className="card project">
      <ProjectHead project={p} />
      <p className={`muted ${more ? 'clamp' : ''}`}>{paragraphsOf(p)[0]}</p>
      {more && (
        <button type="button" className="read-more" onClick={() => onReadMore(p)}>
          Read more →
        </button>
      )}
      <ProjectFooter project={p} />
    </article>
  )
}

// Native <dialog>: showModal() gives focus trapping, Esc to close and the
// backdrop for free.
function ProjectModal({ project: p, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const dialog = ref.current
    if (p && !dialog.open) dialog.showModal()
    if (!p && dialog.open) dialog.close()
    document.body.style.overflow = p ? 'hidden' : ''
  }, [p])

  return (
    <dialog
      ref={ref}
      className="project-modal"
      aria-labelledby="project-modal-title"
      onClose={onClose}
      // A click on the dialog element itself (not its content) is the backdrop.
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {p && (
        <div className="modal-body">
          <button type="button" className="icon-btn modal-close" aria-label="Close" onClick={onClose}>
            ✕
          </button>
          <ProjectHead project={p} titleId="project-modal-title" />
          {paragraphsOf(p).map((para) => (
            <p key={para} className="muted">
              {para}
            </p>
          ))}
          {p.features && (
            <div>
              <h4 className="project-subhead">Key features</h4>
              <ul className="points">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}
          {p.contributions && (
            <div>
              <h4 className="project-subhead">My contributions</h4>
              <ul className="points">
                {p.contributions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}
          {p.approach && (
            <p className="muted">
              <strong className="project-label">Development approach:</strong> {p.approach}
            </p>
          )}
          <ProjectFooter project={p} />
        </div>
      )}
    </dialog>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [openProject, setOpenProject] = useState(null)
  const trackRef = useRef(null)
  const [edges, setEdges] = useState({ start: true, end: true })

  // Which arrows make sense depends on scroll position and on whether the
  // cards overflow at all, so re-check on scroll and on resize.
  const updateEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setEdges({
      start: el.scrollLeft <= 1,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1,
    })
  }, [])

  useEffect(() => {
    if (showAll) return
    const el = trackRef.current
    updateEdges()
    const observer = new ResizeObserver(updateEdges)
    observer.observe(el)
    return () => observer.disconnect()
  }, [showAll, updateEdges])

  const scrollByCard = (dir) => {
    const el = trackRef.current
    const card = el.querySelector('.project')
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' })
  }

  const toggleAll = () => {
    setShowAll(!showAll)
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
  }

  const fits = edges.start && edges.end
  const cards = projects.map((p) => (
    <ProjectCard key={p.title} project={p} onReadMore={setOpenProject} />
  ))

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Projects</h2>
          {!showAll && !fits && (
            <div className="carousel-arrows">
              <button
                type="button"
                className="icon-btn"
                aria-label="Previous projects"
                disabled={edges.start}
                onClick={() => scrollByCard(-1)}
              >
                ←
              </button>
              <button
                type="button"
                className="icon-btn"
                aria-label="Next projects"
                disabled={edges.end}
                onClick={() => scrollByCard(1)}
              >
                →
              </button>
            </div>
          )}
        </div>

        {showAll ? (
          <div className="projects-grid">{cards}</div>
        ) : (
          <div className="carousel" ref={trackRef} onScroll={updateEdges}>
            {cards}
          </div>
        )}

        {(showAll || !fits) && (
          <div className="projects-footer">
            <button type="button" className="btn btn-outline" onClick={toggleAll}>
              {showAll ? 'Show fewer' : `See all ${projects.length} projects`}
            </button>
          </div>
        )}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  )
}
