import './App.css'
import forestWalk from './assets/images/forest walk.JPG'

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="brand">Forest Beacon</div>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero" aria-label="Welcome">
        <img
          className="hero__image"
          src={forestWalk}
          alt=""
          fetchPriority="high"
        />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="hero__content">
          <div className="hero__headline">
            <h1 className="hero__title">Welcome to Forest Beacon</h1>
            <p className="hero__church">
              The home of Ruardean Hill Baptist Church
            </p>
          </div>
          <p className="hero__mission">
            We are a simple church community, rooted in faith and village life
          </p>
        </div>
      </section>

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
