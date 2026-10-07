"use client";

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* HEADER */}
        <header className="page-header">
        <div className="page-header-inner">

            <div className="header-left">

            {/* BACK ARROW */}
            <a
                href="/"
                className="back-arrow"
                aria-label="Go back to Home"
            >
                ←
            </a>

            {/* BRAND */}
            <a href="/" className="page-brand">
                <div className="page-brand-mark">K</div>

                <div>
                <div className="page-brand-name">
                    Karauli
                </div>

                <div className="page-brand-tagline">
                    RAJASTHAN • INDIA
                </div>
                </div>
            </a>

            </div>

            <nav className="page-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/tourist">Explore</a>
            <a href="/government">Services</a>
            <a href="/events">News</a>
            <a href="/contact">Contact</a>
            </nav>

        </div>
        </header>

      {/* HERO */}
      <section className="about-hero">

        <div className="about-hero-image">
          <img
            src="/images/karauli.jpeg"
            alt="Karauli Rajasthan"
          />
        </div>

        <div className="about-hero-overlay" />

        <div className="about-hero-content">

          <span>
            RAJASTHAN • INDIA
          </span>

          <h1>
            About
            <br />
            <strong>Karauli</strong>
          </h1>

          <p>
            Discover the history, culture, people and
            everyday life of Karauli.
          </p>

        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="about-introduction">

        <div className="about-container">

          <div className="about-label">
            DISCOVER KARAULI
          </div>

          <h2>
            A City of Heritage,
            <br />
            Culture & Devotion
          </h2>

          <p>
            Karauli is a historic city in Rajasthan known
            for its royal heritage, temples, traditional
            architecture and vibrant local culture.
          </p>

          <p>
            The city and surrounding region offer a
            combination of spiritual destinations,
            historical landmarks, natural landscapes,
            local markets and traditional Rajasthani life.
          </p>

        </div>

      </section>


      {/* QUICK INFORMATION */}
      <section className="about-information">

        <div className="about-container">

          <div className="about-section-heading">

            <span>
              KARAULI AT A GLANCE
            </span>

            <h2>
              Know Karauli
            </h2>

          </div>

          <div className="about-info-grid">

            <div className="about-info-card">
              <span>01</span>
              <h3>Location</h3>
              <p>
                Karauli is located in the eastern part
                of Rajasthan, India.
              </p>
            </div>

            <div className="about-info-card">
              <span>02</span>
              <h3>Heritage</h3>
              <p>
                The region is associated with royal
                heritage, forts, palaces and historic temples.
              </p>
            </div>

            <div className="about-info-card">
              <span>03</span>
              <h3>Culture</h3>
              <p>
                Traditional festivals, temples, markets,
                handicrafts and local customs are an
                important part of Karauli's identity.
              </p>
            </div>

            <div className="about-info-card">
              <span>04</span>
              <h3>Tourism</h3>
              <p>
                Karauli offers religious, historical and
                nature-based places for visitors.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* HERITAGE */}
      <section className="about-feature">

        <div className="about-container about-feature-grid">

          <div className="about-feature-image">

            <img
              src="/images/karauli-fort.jpeg"
              alt="Karauli Fort"
            />

          </div>

          <div className="about-feature-content">

            <span>
              ROYAL HERITAGE
            </span>

            <h2>
              A Historic
              <br />
              Rajasthan Destination
            </h2>

            <p>
              Karauli's identity is closely connected with
              its royal history and historic architecture.
              The city preserves an atmosphere of traditional
              Rajasthan through its old buildings, temples,
              markets and cultural traditions.
            </p>

            <a
              href="/history"
              className="about-button"
            >
              Explore History →
            </a>

          </div>

        </div>

      </section>


      {/* EXPLORE */}
      <section className="about-explore">

        <div className="about-container">

          <div className="about-section-heading">

            <span>
              EXPLORE KARAULI
            </span>

            <h2>
              Start Exploring
            </h2>

          </div>

          <div className="about-explore-grid">

            <a
              href="/history"
              className="about-explore-card"
            >
              <span>01</span>
              <h3>History & Heritage</h3>
              <p>
                Discover Karauli's historic places,
                forts and royal heritage.
              </p>
              <strong>→</strong>
            </a>

            <a
              href="/kaila-devi"
              className="about-explore-card"
            >
              <span>02</span>
              <h3>Kaila Devi Temple</h3>
              <p>
                Learn about one of the region's
                important pilgrimage destinations.
              </p>
              <strong>→</strong>
            </a>

            <a
              href="/tourist"
              className="about-explore-card"
            >
              <span>03</span>
              <h3>Tourist Places</h3>
              <p>
                Find places to visit and explore
                around Karauli.
              </p>
              <strong>→</strong>
            </a>

          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="about-footer">

        <div className="about-container">

          <div className="about-footer-grid">

            <div>

              <div className="about-footer-brand">
                <div>K</div>

                <span>
                  Karauli
                  <small>
                    Information Portal
                  </small>
                </span>
              </div>

              <p>
                Discover Karauli — its heritage,
                tourism, services, people and opportunities.
              </p>

            </div>


            <div>

              <h4>
                Explore
              </h4>

              <a href="/history">
                History
              </a>

              <a href="/tourist">
                Tourist Places
              </a>

              <a href="/kaila-devi">
                Kaila Devi
              </a>

              <a href="/gallery">
                Gallery
              </a>

            </div>


            <div>

              <h4>
                Services
              </h4>

              <a href="/government">
                Government
              </a>

              <a href="/hospitals">
                Hospitals
              </a>

              <a href="/education">
                Education
              </a>

              <a href="/jobs">
                Jobs & Business
              </a>

            </div>


            <div>

              <h4>
                Karauli
              </h4>

              <p>
                Rajasthan, India
              </p>

              <a href="/contact">
                Contact Us →
              </a>

            </div>

          </div>


          <div className="about-footer-bottom">

            <span>
              © {new Date().getFullYear()} Karauli Information Portal
            </span>

            <span>
              Rajasthan • India
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}