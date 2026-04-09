import { Reveal } from './Reveal'

export function Experience() {
  return (
    <section className="section experience" id="experience">
      <Reveal>
        <div className="container narrow">
        <p className="section-label">The experience</p>
        <h2 className="section-title">Designed for women who value beauty &amp; ease</h2>
        <p className="section-intro">
          Soft pink tones, thoughtful lighting, and generous seating make Kiki&apos;s
          a natural choice for brunch with friends, birthdays, and moments that deserve
          a beautiful setting — without sacrificing comfort or clarity.
        </p>
        <ul className="pill-list">
          <li>Aesthetic interior</li>
          <li>Birthdays &amp; gatherings</li>
          <li>International menu</li>
          <li>Warm, attentive service</li>
        </ul>
        </div>
      </Reveal>
    </section>
  )
}
