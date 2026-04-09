import { useMemo, useState } from 'react'
import { SITE, whatsappUrl } from '../data/site'
import { Reveal } from './Reveal'

const initial = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '2',
  note: '',
}

export function Reservation() {
  const [form, setForm] = useState(initial)
  const minDate = useMemo(() => new Date().toISOString().split('T')[0], [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const text = [
      `Reservation — ${SITE.name}`,
      '',
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Date: ${form.date}`,
      `Time: ${form.time || 'Flexible'}`,
      `Guests: ${form.guests}`,
      form.note.trim() ? `Notes: ${form.note.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    const url = whatsappUrl + encodeURIComponent(text)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section reservation" id="reservation">
      <div className="reservation-glow" aria-hidden="true" />
      <Reveal>
        <div className="container reservation-grid">
          <div className="reservation-copy">
            <p className="section-label">Reservations</p>
            <h2 className="section-title">Save your table in seconds</h2>
            <p className="section-intro reservation-lead">
              Share your preferred date and party size — we&apos;ll open WhatsApp with your
              request ready to send. The team usually replies quickly during opening hours.
            </p>
            <ul className="reservation-points">
              <li>Birthdays &amp; group tables welcome</li>
              <li>Same-day requests subject to availability</li>
              <li>Prefer a call? Ring {SITE.phoneDisplay}</li>
            </ul>
          </div>
          <form className="reservation-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row two">
              <label className="field">
                <span>Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                />
              </label>
              <label className="field">
                <span>Phone</span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="06 …"
                />
              </label>
            </div>
            <div className="form-row three">
              <label className="field">
                <span>Date</span>
                <input
                  name="date"
                  type="date"
                  min={minDate}
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="field">
                <span>Time</span>
                <input
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                />
              </label>
              <label className="field">
                <span>Guests</span>
                <select name="guests" value={form.guests} onChange={handleChange}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={String(n)}>
                      {n}
                    </option>
                  ))}
                  <option value="9+">9+</option>
                </select>
              </label>
            </div>
            <label className="field">
              <span>Occasion or dietary notes (optional)</span>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                rows={3}
                placeholder="Birthday, high chair, window seat…"
              />
            </label>
            <button type="submit" className="btn btn-solid btn-block">
              Continue on WhatsApp
            </button>
            <p className="form-hint">
              Opens WhatsApp with your message — you can edit before sending.
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
