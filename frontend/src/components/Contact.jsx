import { useState } from 'react'
import { profile } from '../data.js'

// No backend: the form opens the visitor's email app with the message prefilled.
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section alt">
      <div className="container contact">
        <h2 className="section-title">Get in touch</h2>
        <p className="muted contact-intro">
          Have a project in mind or just want to say hi? Send me a message.
        </p>

        <form className="contact-form" onSubmit={submit}>
          <div className="form-row">
            <label>
              Name
              <input name="name" value={form.name} onChange={update} required />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                required
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={update}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
        </form>

        <div className="socials">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {profile.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
