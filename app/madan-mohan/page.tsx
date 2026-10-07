import Link from "next/link";

export default function MadanMohanPage() {
  return (
    <main className="history-page">
      {/* HEADER */}
      <header className="history-header">
        <div className="history-header-inner">
          <div className="history-brand">
            <Link href="/" className="history-back">
              ←
            </Link>

            <Link href="/" className="history-brand-text">
              <span className="history-brand-name">KARAULI</span>
              <span className="history-brand-tagline">
                HERITAGE • FAITH • CULTURE
              </span>
            </Link>
          </div>

          <nav className="history-nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/history">History</Link>
            <Link href="/kaila-devi">Kaila Devi</Link>
            <Link href="/madan-mohan" className="active">
              Madan Mohan Ji
            </Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="history-hero">
        <img
          src="/images/madan-mohan.jpeg"
          alt="श्री मदन मोहन जी मंदिर, करौली"
        />

        <div className="history-hero-overlay">
          <div className="history-hero-content">
            <span>RELIGIOUS HERITAGE OF KARAULI</span>

            <h1>
              श्री मदन मोहन जी
              <br />
              मंदिर
            </h1>

            <p>
              करौली की आस्था, भक्ति और कृष्ण परंपरा से जुड़ा
              एक महत्वपूर्ण धार्मिक स्थल।
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="history-intro">
        <div className="history-intro-inner">
          <div className="history-section-label">
            MADAN MOHAN JI TEMPLE
          </div>

          <h2>
            करौली की भक्ति परंपरा
            <br />
            का प्रमुख केंद्र
          </h2>

          <p>
            श्री मदन मोहन जी मंदिर करौली के प्रमुख धार्मिक स्थलों में
            शामिल है। यह मंदिर भगवान श्रीकृष्ण के मदन मोहन स्वरूप
            की आराधना से जुड़ा हुआ है और करौली की धार्मिक एवं
            सांस्कृतिक पहचान का महत्वपूर्ण हिस्सा है।
          </p>

          <p>
            मंदिर में होने वाली पूजा-अर्चना, भक्ति परंपराएं और
            धार्मिक उत्सव स्थानीय जीवन में विशेष महत्व रखते हैं।
            देश के विभिन्न क्षेत्रों से श्रद्धालु यहां दर्शन के लिए
            आते हैं।
          </p>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="heritage-feature">
        <div className="heritage-feature-image">
          <img
            src="/images/madan-mohan.jpeg"
            alt="मदन मोहन जी मंदिर"
          />
        </div>

        <div className="heritage-feature-content">
          <span>मंदिर की कथा</span>

          <h2>
            श्रीकृष्ण के
            <br />
            मदन मोहन स्वरूप की आराधना
          </h2>

          <p>
            भगवान श्रीकृष्ण के मदन मोहन स्वरूप को प्रेम, भक्ति और
            आध्यात्मिक आकर्षण का प्रतीक माना जाता है। करौली में
            मदन मोहन जी की आराधना लंबे समय से धार्मिक परंपरा का
            हिस्सा रही है।
          </p>

          <p>
            मंदिर में श्रद्धालु भगवान के दर्शन, पूजा और भक्ति के
            माध्यम से अपनी आस्था व्यक्त करते हैं। मंदिर की
            धार्मिक परंपराएं करौली की पहचान से गहराई से जुड़ी हैं।
          </p>
        </div>
      </section>

      {/* HISTORY */}
      <section className="heritage-stone">
        <div className="heritage-stone-content">
          <span>इतिहास और परंपरा</span>

          <h2>
            करौली के धार्मिक
            <br />
            इतिहास का हिस्सा
          </h2>

          <p>
            करौली का इतिहास राजवंशीय परंपराओं के साथ-साथ धार्मिक
            आस्था से भी जुड़ा रहा है। मदन मोहन जी मंदिर इसी
            धार्मिक विरासत का महत्वपूर्ण हिस्सा है।
          </p>

          <p>
            मंदिर और उससे जुड़ी पूजा परंपराएं पीढ़ियों से स्थानीय
            समाज में धार्मिक जीवन को प्रभावित करती रही हैं। यहां
            आने वाले श्रद्धालुओं के लिए यह स्थान केवल पूजा का
            केंद्र नहीं बल्कि करौली की सांस्कृतिक पहचान का भी
            प्रतीक है।
          </p>
        </div>

        <div className="heritage-stone-image">
          <img
            src="/images/madan-mohan.jpeg"
            alt="मदन मोहन जी मंदिर की धार्मिक विरासत"
          />
        </div>
      </section>

      {/* INFORMATION CARDS */}
      <section className="kaila-information">
        <div className="kaila-gallery-heading">
          <span>QUICK INFORMATION</span>

          <h2>
            मंदिर के बारे में
            <br />
            महत्वपूर्ण जानकारी
          </h2>
        </div>

        <div className="kaila-information-grid">
          <div className="kaila-info-card">
            <span>01</span>
            <h3>देवता</h3>
            <p>
              भगवान श्रीकृष्ण के मदन मोहन स्वरूप की आराधना।
            </p>
          </div>

          <div className="kaila-info-card">
            <span>02</span>
            <h3>स्थान</h3>
            <p>
              करौली शहर के धार्मिक और ऐतिहासिक क्षेत्र में स्थित
              प्रमुख मंदिर।
            </p>
          </div>

          <div className="kaila-info-card">
            <span>03</span>
            <h3>आस्था</h3>
            <p>
              स्थानीय लोगों और दूर-दूर से आने वाले श्रद्धालुओं
              के लिए महत्वपूर्ण धार्मिक स्थल।
            </p>
          </div>

          <div className="kaila-info-card">
            <span>04</span>
            <h3>परंपरा</h3>
            <p>
              पूजा, दर्शन और कृष्ण भक्ति से जुड़ी धार्मिक
              परंपराएं यहां की पहचान हैं।
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE / CULTURE */}
      <section className="forts-section">
        <div className="forts-section-inner">
          <div className="forts-section-image">
            <img
              src="/images/madan-mohan.jpeg"
              alt="मदन मोहन जी मंदिर की वास्तुकला"
            />
          </div>

          <div className="forts-section-content">
            <span>धार्मिक वास्तुकला</span>

            <h2>
              मंदिर, वास्तुकला
              <br />
              और वातावरण
            </h2>

            <p>
              मंदिर का वातावरण श्रद्धा और आध्यात्मिकता से भरा हुआ
              दिखाई देता है। धार्मिक गतिविधियों के साथ मंदिर की
              वास्तुकला भी आगंतुकों के लिए आकर्षण का केंद्र है।
            </p>

            <p>
              करौली की अन्य ऐतिहासिक इमारतों और मंदिरों की तरह
              मदन मोहन जी मंदिर भी शहर की सांस्कृतिक विरासत को
              समझने में महत्वपूर्ण भूमिका निभाता है।
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="kaila-gallery">
        <div className="kaila-gallery-heading">
          <span>VISUAL JOURNEY</span>

          <h2>
            मदन मोहन जी मंदिर
            <br />
            तस्वीरों में
          </h2>

          <p>
            मंदिर और करौली की धार्मिक विरासत की झलक।
          </p>
        </div>

        <div className="kaila-gallery-grid madan-gallery">
          <div className="gallery-photo">
            <img
              src="/images/madan-mohan.jpeg"
              alt="मदन मोहन जी मंदिर"
            />
          </div>

          <div className="gallery-photo">
            <img
              src="/images/madan-mohan.jpeg"
              alt="मदन मोहन जी मंदिर का दृश्य"
            />
          </div>

          <div className="gallery-photo">
            <img
              src="/images/madan-mohan.jpeg"
              alt="मंदिर की वास्तुकला"
            />
          </div>
        </div>
      </section>

      {/* VISITOR INFORMATION */}
      <section className="kaila-visit">
        <div className="kaila-gallery-heading">
          <span>PLAN YOUR VISIT</span>

          <h2>
            मंदिर दर्शन के लिए
            <br />
            उपयोगी बातें
          </h2>
        </div>

        <div className="kaila-visit-grid">
          <div className="kaila-info-card">
            <span>01</span>
            <h3>दर्शन</h3>
            <p>
              दर्शन के समय और पूजा संबंधी जानकारी स्थानीय मंदिर
              प्रशासन से प्राप्त करें।
            </p>
          </div>

          <div className="kaila-info-card">
            <span>02</span>
            <h3>त्योहार</h3>
            <p>
              विशेष धार्मिक अवसरों और त्योहारों पर मंदिर में
              श्रद्धालुओं की संख्या बढ़ सकती है।
            </p>
          </div>

          <div className="kaila-info-card">
            <span>03</span>
            <h3>आचरण</h3>
            <p>
              मंदिर परिसर में स्वच्छता और धार्मिक मर्यादाओं का
              ध्यान रखें।
            </p>
          </div>

          <div className="kaila-info-card">
            <span>04</span>
            <h3>करौली यात्रा</h3>
            <p>
              मदन मोहन जी मंदिर के साथ करौली के अन्य ऐतिहासिक
              और धार्मिक स्थलों को भी देखा जा सकता है।
            </p>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="heritage-quote">
        <div>
          <span>करौली की आस्था</span>

          <blockquote>
            “जहाँ इतिहास, संस्कृति और भक्ति
            <br />
            एक साथ दिखाई देती है।”
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="history-cta">
        <span>EXPLORE KARAULI</span>

        <h2>
          करौली की धार्मिक
          <br />
          विरासत को जानें
        </h2>

        <div className="history-cta-links">
          <Link href="/kaila-devi">
            Kaila Devi Temple →
          </Link>

          <Link href="/history">
            History & Heritage →
          </Link>

          <Link href="/tourist">
            Tourist Places →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="history-footer">
        <div>
          <strong>KARAULI</strong>
          <span>HERITAGE • FAITH • CULTURE</span>
        </div>

        <p>
          Discover the history, culture and religious heritage
          of Karauli, Rajasthan.
        </p>

        <Link href="/">← Back to Home</Link>
      </footer>
    </main>
  );
}