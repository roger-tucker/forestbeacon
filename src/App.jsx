import './App.css'
import forestWalk from './assets/images/forest walk 80.JPG'
import toddlersRestart from './assets/images/toddlersRestart.jpg'
import forestChurchBeacon from './assets/images/Forest-church-beacon.jpg'
import toddlerGroup from './assets/images/toddlers1c.jpeg'
import growingTogether from './assets/images/sundayz 80.JPG'
import fireValue from './assets/images/fire.jpg'
import tableValue from './assets/images/table.jpg'
import pathValue from './assets/images/path.png'

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
              (Ruardean Hill Baptist Church)
            </p>
          </div>
          <p className="hero__mission">
            We are a small rural church, committed to loving and serving our local community
          </p>
        </div>
      </section>

      <section className="coming-up" aria-label="Coming Up">
        <h2 className="section-heading coming-up__heading">Coming Up</h2>
        <div className="coming-up__image-wrap">
          <img
            className="coming-up__image"
            src={toddlersRestart}
            alt="Toddlers restarts 4th Sept"
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
          join us please contact us for details. <br /><br />
        </p>

        <section id="news" className="panel">
        <h2 className="section-heading">News</h2>
        <p className="home-content__text">Toddlers Restarts 4th September.</p>
        <p className="home-content__text">
          Next service 6th September - we have Tim Welch from the YMCA joining
          us.
        </p>
      </section>

      <section id="contact" className="panel">
        <h2 className="section-heading">Contact</h2>
        <p className="home-content__text">email: enquiries@forestbeacon.org</p>
        <p className="home-content__text">
          phone: 07714 349210 (please leave message)
        </p>
      </section>
        <h2 className="section-heading">Values</h2>
        <p className="section-subheading">
          With God. As family. For the Forest and beyond.
        </p>
        <p className="values__intro">
          We have three values which shape the way we do life in our small
          community:
        </p>

        <div className="value-row">
          <img className="value-row__icon" src={fireValue} alt="Fire" />
          <div className="value-row__body">
            <h3 className="value-row__title">With God (Fire)</h3>
            <p className="value-row__lead">
              Faith isn’t just talked about here—it’s experienced.
            </p>
          </div>
          <p className="value-row__detail">
            <em>
              We make space to pray, worship, and encounter God in a way
              that’s real. A place to pause, breathe, and be renewed—no pressure, no
              pretending.
            </em>
          </p>
        </div>

        <div className="value-row">
          <img className="value-row__icon" src={tableValue} alt="Table" />
          <div className="value-row__body">
            <h3 className="value-row__title">As Family (Table)</h3>
            <p className="value-row__lead">
              You don’t have to have it all together to belong.
            </p>
          </div>
          <p className="value-row__detail">
            <em>
              We share meals, stories, and everyday life—building a community
              where people are known, supported, and can grow at their own
              pace.
            </em>
          </p>
        </div>

        <div className="value-row">
          <img className="value-row__icon" src={pathValue} alt="Path" />
          <div className="value-row__body">
            <h3 className="value-row__title">For the Forest and Beyond (Path)</h3>
            <p className="value-row__lead">Faith isn&apos;t just for Sundays</p>
          </div>
          <p className="value-row__detail">
            <em>
              We’re learning to live it out in real life—at home, at work,
              wherever we are. Bringing hope, kindness, and something different into the world
              around us.
            </em>
          </p>
        </div>
      </section>

      
    </div>
  )
}

export default App
