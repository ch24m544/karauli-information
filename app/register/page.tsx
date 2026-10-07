"use client";

import { FormEvent, useState } from "react";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Supabase connection can be added here later.
    setSubmitted(true);
  };

  return (
    <main className="register-page">

      {/* HEADER */}
      <header className="register-header">
        <div className="register-header-inner">

          <a href="/" className="register-brand">
            <span className="register-brand-main">
              KARAULI
            </span>

            <span className="register-brand-sub">
              INFORMATION
            </span>
          </a>

          <nav className="register-nav">
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
      <section className="register-hero">

        <div className="register-hero-content">

          <span className="register-eyebrow">
            FOR LOCAL BUSINESSES
          </span>

          <h1>
            List Your Business
            <br />
            <strong>for FREE</strong>
          </h1>

          <p className="register-hero-title">
            Connect with New Customers &amp; Grow Your Business
          </p>

          <p className="register-hero-text">
            Register your business on Karauli Information
            and help local customers discover your products
            and services.
          </p>

        </div>

      </section>


      {/* REGISTRATION FORM */}
      <section className="register-section">

        <div className="register-heading">

          <span>FREE BUSINESS LISTING</span>

          <h2>
            Register Your Business
          </h2>

          <p>
            Enter a few basic details to create your free
            business listing.
          </p>

        </div>


        <div className="register-form-container">

          {submitted ? (

            /* SUCCESS MESSAGE */

            <div className="register-success">

              <div className="success-check">
                ✓
              </div>

              <h2>
                Registration Submitted!
              </h2>

              <p>
                Thank you for registering your business
                with Karauli Information.
              </p>

              <p className="success-small">
                Your business details have been received.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="register-again"
              >
                Register Another Business
              </button>

            </div>

          ) : (

            <form
              className="register-form"
              onSubmit={handleSubmit}
            >

              {/* BUSINESS NAME */}

              <div className="register-field full">
                <label htmlFor="businessName">
                  Business Name *
                </label>

                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Enter your business name"
                  required
                />
              </div>


              {/* OWNER NAME */}

              <div className="register-field">
                <label htmlFor="ownerName">
                  Owner / Contact Name *
                </label>

                <input
                  id="ownerName"
                  name="ownerName"
                  type="text"
                  placeholder="Enter owner or contact name"
                  required
                />
              </div>


              {/* PHONE */}

              <div className="register-field">
                <label htmlFor="phone">
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="10 digit phone number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                />
              </div>


              {/* BUSINESS TYPE */}

              <div className="register-field full">
                <label htmlFor="businessType">
                  Business Type *
                </label>

                <select
                  id="businessType"
                  name="businessType"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select your business type
                  </option>

                  <option value="shop">
                    Shop / Retail
                  </option>

                  <option value="hotel">
                    Hotel / Guest House
                  </option>

                  <option value="restaurant">
                    Restaurant / Food
                  </option>

                  <option value="service">
                    Local Service
                  </option>

                  <option value="professional">
                    Professional Service
                  </option>

                  <option value="education">
                    Education / Coaching
                  </option>

                  <option value="health">
                    Health / Clinic
                  </option>

                  <option value="travel">
                    Travel / Transport
                  </option>

                  <option value="real-estate">
                    Property / Real Estate
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>


              {/* ADDRESS */}

              <div className="register-field full">
                <label htmlFor="address">
                  Address *
                </label>

                <textarea
                  id="address"
                  name="address"
                  rows={3}
                  placeholder="Enter your complete business address"
                  required
                />
              </div>


              {/* LANDMARK */}

              <div className="register-field">
                <label htmlFor="landmark">
                  Landmark *
                </label>

                <input
                  id="landmark"
                  name="landmark"
                  type="text"
                  placeholder="e.g. Near City Palace"
                  required
                />
              </div>


              {/* LOCALITY */}

              <div className="register-field">
                <label htmlFor="area">
                  Locality / Area *
                </label>

                <input
                  id="area"
                  name="area"
                  type="text"
                  placeholder="e.g. Gulab Bagh"
                  required
                />
              </div>


              {/* WHATSAPP */}

              <div className="register-field full">
                <label htmlFor="whatsapp">
                  WhatsApp Number
                  <span className="optional-text">
                    Optional
                  </span>
                </label>

                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  inputMode="numeric"
                  placeholder="WhatsApp number if different"
                  pattern="[0-9]{10}"
                  maxLength={10}
                />
              </div>


              {/* SUBMIT */}

              <div className="register-submit full">

                <button
                  type="submit"
                  className="register-submit-button"
                >
                  Register My Business for FREE
                  <span>→</span>
                </button>

                <p>
                  No registration fee • No listing fee
                </p>

              </div>

            </form>

          )}

        </div>

      </section>


      {/* BENEFITS */}

      <section className="register-benefits">

        <div className="register-benefits-heading">

          <span>WHY REGISTER?</span>

          <h2>
            Help Customers Find Your Business
          </h2>

        </div>


        <div className="register-benefits-grid">

          <div className="register-benefit-card">

            <div className="register-benefit-icon">
              👥
            </div>

            <h3>
              Reach New Customers
            </h3>

            <p>
              Make your business easier for people in
              Karauli to discover.
            </p>

          </div>


          <div className="register-benefit-card">

            <div className="register-benefit-icon">
              📍
            </div>

            <h3>
              Local Visibility
            </h3>

            <p>
              Help customers find businesses and services
              near their area.
            </p>

          </div>


          <div className="register-benefit-card">

            <div className="register-benefit-icon">
              🆓
            </div>

            <h3>
              Completely Free
            </h3>

            <p>
              Register your business without any listing
              or registration fee.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="register-footer">

        <div>

          <strong>
            KARAULI INFORMATION
          </strong>

          <p>
            Discover Karauli. Explore local businesses,
            places, services and opportunities.
          </p>

        </div>


        <div className="register-footer-links">

          <a href="/">
            Home
          </a>

          <a href="/about">
            About
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

      </footer>

    </main>
  );
}