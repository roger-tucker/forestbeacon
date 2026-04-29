import './App.css'

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">Forest Beacon Church</div>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home" className="landing">
        <p className="eyebrow">Welcome</p>
        <h1>Simple church community, rooted in faith and village life.</h1>
        <p className="intro">
          This is the starter version of your site. We can now build out each page
          and section together as you add content.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#news">
            View News
          </a>
          <a className="btn btn-secondary" href="#contact">
            Get in Touch
          </a>
        </div>
      </main>

      <section id="news" className="panel">
        <h2>News</h2>
        <p>Placeholder area for updates, events, and stories.</p>
      </section>

      <section id="contact" className="panel">
        <h2>Contact</h2>
        <p>Placeholder area for contact details and a future form.</p>
      </section>
    </div>
  )
}

export default App
