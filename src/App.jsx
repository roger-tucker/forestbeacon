import './App.css'
import forestWalk from './assets/images/forest walk.JPG'
import chayah from './assets/images/Chayah.jpeg'
import forestChurchBeacon from './assets/images/Forest-church-beacon.png'
import toddlerGroup from './assets/images/toddler1ac.JPG'
import growingTogether from './assets/images/sundayz.JPG'

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

      <section className="coming-up" aria-label="Coming Up">
        <h2 className="section-heading coming-up__heading">Coming Up</h2>
        <div className="coming-up__image-wrap">
          <img
            className="coming-up__image"
            src={chayah}
            alt="Chayah event"
          />
        </div>
      </section>

      <section className="home-content" aria-label="About Forest Beacon">
        <h2 className="section-heading">Our Special Place</h2>
        <p className="home-content__text">
          Our building is situated adjacent to the forest, and is just down the
          road from the Beacon which is lit on special occasions, so we take
          inspiration from the beauty of our setting and Jesus the light of all
          mankind to call ourselves &apos;Forest Beacon&apos;
        </p>
        <img
          className="content-image"
          src={forestChurchBeacon}
          alt="Forest, church and beacon"
        />
        <p className="home-content__text">
          Click{' '}
          <a
            href="https://maps.app.goo.gl/hogdpDcNBXqtesoXA"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{' '}
          to find us on Google Maps or What3Words /// being.broadcast.nurture
        </p>

        <h2 className="section-heading">Forest Beacon Sparks</h2>
        <p className="home-content__text">
          Our toddler group meets on a Tuesday morning every week from 9:30 -
          11:00 AM.
        </p>
        <img
          className="content-image"
          src={toddlerGroup}
          alt="Forest Beacon Sparks toddler group"
        />

        <h2 className="section-heading">Growing Together</h2>
        <p className="home-content__text">
          We meet twice a month, first Sunday at 10:30 AM and 3rd Sunday at
          4:00 PM. Meetings last about 90 minutes including refreshments and
          chat. All are welcome to join us as we explore the Christian faith
          together!
        </p>
        <img
          className="content-image"
          src={growingTogether}
          alt="Growing Together gathering"
        />
        <p className="home-content__text">
          We&apos;re always happy for newcomers to join us. We are quite
          informal and often chat things through together.
        </p>
        <p className="home-content__text">
          We pray online weekday mornings at 8am for half an hour, and in the
          evening on the second Thursday of the month. If you&apos;d like to
          join us please contact us for details.
        </p>
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
