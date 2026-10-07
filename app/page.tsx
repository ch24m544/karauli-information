"use client";

import { useState } from "react";

const sections = [
  {
    number: "01",
    id: "about",
    href: "/about",
    title: "Karauli",
    subtitle: "Discover Karauli",
    description: "Introduction, culture, people and local information.",
    icon: "✦",
  },
  {
    number: "02",
    id: "history",
    href: "/history",
    title: "History & Heritage",
    subtitle: "Royal Heritage",
    description: "Explore the history, palaces, forts and heritage of Karauli.",
    icon: "◈",
  },
  {
    number: "03",
    id: "kaila-devi",
    href: "/kaila-devi",
    title: "Kaila Devi Temple",
    subtitle: "Spiritual Karauli",
    description: "Temple information, pilgrimage and important details.",
    icon: "✧",
  },
  {
      number: "04",
      id: "mohanji",
      href: "/madan-mohan",
      title: "/madan-mohan/ About",
      subtitle: "Connect With Us",
      description: "About this website and contact information.",
      icon: "◇",
    },
        {
    number: "05",
    id: "tourist",
    href: "/tourist",
    title: "Tourist Places",
    subtitle: "Explore Karauli",
    description: "Places to visit, attractions and things to explore.",
    icon: "⌖",
  },
    {
    number: "06",
    id: "government",
    href: "/government",
    title: "Government Services",
    subtitle: "Public Services",
    description: "Government offices, schemes and useful public services.",
    icon: "▣",
  },
    {
    number: "07",
    id: "hospitals",
    href: "/hospitals",
    title: "Hospitals & Emergency",
    subtitle: "Health & Safety",
    description: "Hospitals, healthcare and important emergency contacts.",
    icon: "＋",
  },
  {
    number: "08",
    id: "events",
    href: "/events",
    title: "News & Events",
    subtitle: "Stay Updated",
    description: "Local news, festivals, announcements and events.",
    icon: "◉",
  },
  {
    number: "09",
    id: "markets",
    href: "/markets",
    title: "Local Markets",
    subtitle: "Shop Local",
    description: "Markets, shopping areas and local products.",
    icon: "✢",
  },
   {
    number: "10",
    id: "gallery",
    href: "/gallery",
    title: "Photo Gallery",
    subtitle: "See Karauli",
    description: "Photographs of Karauli, temples, markets and landmarks.",
    icon: "▧",
  },
 {
    number: "11",
    id: "hotels",
    href: "/hotels",
    title: "Hotels & Restaurants",
    subtitle: "Stay & Food",
    description: "Hotels, restaurants and places to stay in Karauli.",
    icon: "◇",
  },

  {
    number: "12",
    id: "Properties",
    href: "/Properties",
    title: "Resale house and plots, shops",
    subtitle: "Sale house, plot, shop",
    description: "Sale-Purchase for Sale house, plot, shop information.",
    icon: "◇",
  },
  {
    number: "13",
    id: "Tour & Travels",
    href: "/Taxi",
    title: "Book Tour packages",
    subtitle: "Book Taxi",
    description: "Tour packages-Taxi",
    icon: "↗",
  },
  
   {
    number: "14",
    id: "Rent Room, House, Shop",
    href: "/Rent",
    title: "Search Rented Room, House, Shop",
    subtitle: "Search Rented Room, House, Shop",
    description: "Search Rented Room, House, Shop",
    icon: "◇",
  },
  {
    number: "15",
    id: "contact",
    href: "/contact",
    title: "Contact / About",
    subtitle: "Connect With Us",
    description: "About this website and contact information.",
    icon: "◇",
  },
  

];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredSections = sections.filter((item) =>
    `${item.title} ${item.subtitle} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleSearch = () => {
    if (filteredSections.length > 0) {
      window.location.href = filteredSections[0].href;
    }
  };

  return (
    <main className="karauli-site">

      {/* ================= HEADER ================= */}

      <header className="site-header">
        <div className="header-inner">

          <a href="/about" className="brand">
            <div className="brand-mark">K</div>

            <div>
              <div className="brand-name">Karauli</div>

              <div className="brand-tagline">
                RAJASTHAN • INDIA
              </div>
            </div>
          </a>

          <nav className="desktop-nav">
            <a href="/about">About</a>
            <a href="/tourist">Explore</a>
            <a href="/government">Services</a>
            <a href="/events">News</a>
        
            <a href="/register" className="business-nav-link">
              Register Your Business for FREE
            </a>
          </nav>

          <a href="/contact" className="header-button">
            Contact
          </a>

        </div>
      </header>


      {/* ================= HERO ================= */}

      <section id="home" className="hero-section">

        {/* IMAGE DIRECTLY FROM PUBLIC/IMAGES */}
        <div
          className="hero-image"
          style={{
            backgroundImage: "url('/images/karauli-hero.jpg')",
          }}
        />

        <div className="hero-overlay" />

        <div className="hero-content">

          <div className="hero-eyebrow">
            RAJASTHAN • INDIA
          </div>

          <h1>
            Discover
            <br />
            <span>Karauli</span>
          </h1>

          <p className="hero-description">
            Explore the heritage, temples, culture, tourism,
            local services and everyday life of Karauli.
          </p>

          <div className="hero-search">

            <input
              type="text"
              placeholder="What are you looking for in Karauli?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button onClick={handleSearch}>
              Search
            </button>

          </div>

          <div className="hero-links">

            <a href="/kaila-devi">
              Temples
            </a>

            <a href="/tourist">
              Places
            </a>

            <a href="/hotels">
              Hotels
            </a>

            <a href="/markets">
              Markets
            </a>

            <a href="/jobs">
              Jobs
            </a>

          </div>

        </div>
      </section>


      


      {/* ================= SECTION CARDS ================= */}

      <section id="services" className="sections-container">

        <div className="section-grid-new">

          {filteredSections.map((item) => (

            <a
              href={item.href}
              key={item.id}
              className="feature-card"
            >

              <div className="feature-top">

                <span className="feature-number">
                  {item.number}
                </span>

                <span className="feature-icon">
                  {item.icon}
                </span>

              </div>

              <div className="feature-content">

                <span className="feature-subtitle">
                  {item.subtitle}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

              <span className="feature-arrow">
                →
              </span>

            </a>

          ))}

        </div>

        {filteredSections.length === 0 && (

          <div className="no-results">

            <h3>
              No section found
            </h3>

            <p>
              Try tourism, temples, hotels, jobs,
              hospitals or government services.
            </p>

          </div>

        )}

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="site-footer">

        <div className="footer-inner">

          <div>

            <div className="footer-brand">

              <div className="footer-mark">
                K
              </div>

              <div>
                <strong>Karauli</strong>
                <span>Information Portal</span>
              </div>

            </div>

            <p>
              Discover Karauli — its heritage, tourism,
              services, people and opportunities.
            </p>

          </div>


          <div>

            <h4>
              Explore
            </h4>

            <a href="/about">
              Karauli
            </a>

            <a href="/history">
              History
            </a>

            <a href="/tourist">
              Tourist Places
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


        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} Karauli Information Portal
          </span>

          <span>
            Rajasthan • India
          </span>

        </div>

      </footer>

    </main>
  );
}