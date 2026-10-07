"use client";

import Link from "next/link";

export default function HistoryPage() {
  return (
    <main className="history-page">

      {/* HEADER */}
      <header className="history-header">
        <div className="history-header-left">
          <Link href="/" className="history-back">
            ←
          </Link>

          <Link href="/" className="history-brand">
            <span className="history-brand-name">Karauli</span>
            <span className="history-brand-tagline">
              HISTORY • HERITAGE • CULTURE
            </span>
          </Link>
        </div>

        <nav className="history-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/tourist">Explore</Link>
          <Link href="/government">Services</Link>
          <Link href="/events">News</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>


      {/* HERO */}
      <section className="history-hero">
        <img
          src="/images/karauli-fort.jpeg"
          alt="Karauli Fort and historic heritage"
        />

        <div className="history-hero-overlay">
          <div className="history-hero-content">
            <span>राजसी विरासत • सदियों पुराना इतिहास</span>

            <h1>
              करौली का इतिहास
              <br />
              और विरासत
            </h1>

            <p>
              यदुवंशी राजाओं की धरती, प्राचीन दुर्गों, राजमहलों,
              मंदिरों और लाल पत्थरों की अद्भुत वास्तुकला से सजा
              करौली राजस्थान की अनमोल विरासत है।
            </p>
          </div>
        </div>
      </section>


      {/* INTRODUCTION */}
      <section className="history-intro">
        <div className="history-intro-label">
          HISTORY & HERITAGE
        </div>

        <h2>
          जहाँ इतिहास
          <br />
          आज भी जीवित है
        </h2>

        <p>
          करौली राजस्थान के उन ऐतिहासिक नगरों में से एक है जहाँ
          राजपूत परंपरा, धार्मिक आस्था और स्थापत्य कला आज भी
          साथ-साथ दिखाई देती है। शहर की पहचान इसके पुराने किलों,
          राजमहलों, मंदिरों, हवेलियों और लाल बलुआ पत्थर से बनी
          ऐतिहासिक इमारतों से बनी है।
        </p>

        <p>
          करौली का इतिहास यदुवंशी राजपूत राजवंश से गहराई से जुड़ा
          हुआ है। सदियों से यह क्षेत्र राजनीतिक, धार्मिक और
          सांस्कृतिक गतिविधियों का महत्वपूर्ण केंद्र रहा है।
        </p>
      </section>


      {/* HISTORY TIMELINE */}
      <section className="history-timeline-section">

        <div className="history-section-heading">
          <span>राजसी यात्रा</span>
          <h2>करौली के इतिहास की झलक</h2>
        </div>

        <div className="history-timeline">

          <div className="history-timeline-item">
            <div className="history-year">1348</div>

            <div className="history-timeline-content">
              <h3>करौली की स्थापना</h3>

              <p>
                राजस्थान सरकार के ऐतिहासिक विवरण के अनुसार,
                करौली की स्थापना 1348 ई. में यदुवंशी राजा
                अर्जुन पाल द्वारा की गई थी। इसके साथ करौली
                एक महत्वपूर्ण राजसी केंद्र के रूप में विकसित
                हुआ।
              </p>
            </div>
          </div>


          <div className="history-timeline-item">
            <div className="history-year">राजसी युग</div>

            <div className="history-timeline-content">
              <h3>यदुवंशी राजाओं की विरासत</h3>

              <p>
                करौली का इतिहास यदुवंशी राजपूत राजवंश से
                जुड़ा रहा। राजाओं ने यहां दुर्गों, महलों,
                मंदिरों और अन्य ऐतिहासिक संरचनाओं के विकास
                में महत्वपूर्ण भूमिका निभाई।
              </p>
            </div>
          </div>


          <div className="history-timeline-item">
            <div className="history-year">आज</div>

            <div className="history-timeline-content">
              <h3>जीवित विरासत</h3>

              <p>
                आज भी करौली में पुराने महल, मंदिर, किले,
                हवेलियां और लोक परंपराएं इसके गौरवशाली
                अतीत की कहानी कहती हैं।
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* CITY PALACE */}
      <section className="heritage-feature">

        <div className="heritage-feature-image">
          <img
            src="/images/city-palace.jpeg"
            alt="Karauli City Palace"
          />
        </div>

        <div className="heritage-feature-content">
          <span>01 • ROYAL HERITAGE</span>

          <h2>
            सिटी पैलेस
            <br />
            और राजसी वास्तुकला
          </h2>

          <p>
            करौली का सिटी पैलेस शहर की राजसी विरासत का
            महत्वपूर्ण हिस्सा है। महल की वास्तुकला में
            पत्थर की नक्काशी, जालीदार खिड़कियां, भित्तिचित्र
            और पारंपरिक राजस्थानी स्थापत्य की झलक दिखाई देती है।
          </p>

          <p>
            महल और इसके आसपास की ऐतिहासिक संरचनाएं करौली के
            राजसी अतीत और शासकों की स्थापत्य कला को समझने का
            अवसर देती हैं।
          </p>
        </div>

      </section>


      {/* RED SANDSTONE */}
      <section className="heritage-stone">

        <div className="heritage-stone-content">
          <span>02 • ARCHITECTURE</span>

          <h2>
            लाल पत्थरों में
            <br />
            बसा करौली
          </h2>

          <p>
            करौली की सबसे विशिष्ट पहचान यहां का लाल बलुआ
            पत्थर है। पुराने महलों, मंदिरों, हवेलियों और
            अन्य ऐतिहासिक संरचनाओं में इस पत्थर का सुंदर
            उपयोग दिखाई देता है।
          </p>

          <p>
            पत्थर की नक्काशी, जालीदार खिड़कियां और पारंपरिक
            स्थापत्य शैली करौली को राजस्थान के अन्य ऐतिहासिक
            नगरों से अलग पहचान देती हैं।
          </p>
        </div>

        <div className="heritage-stone-image">
          <img
            src="/images/karauli.jpeg"
            alt="Historic Karauli architecture"
          />
        </div>

      </section>


      {/* TEMPLES */}
      <section className="heritage-temples">

        <div className="history-section-heading">
          <span>RELIGIOUS HERITAGE</span>

          <h2>
            मंदिरों की नगरी
          </h2>

          <p>
            करौली की विरासत केवल किलों और महलों तक सीमित नहीं है।
            यहां के प्राचीन मंदिर शहर की पहचान और संस्कृति का
            महत्वपूर्ण हिस्सा हैं।
          </p>
        </div>


        <div className="heritage-temple-grid">

          <Link
            href="/kaila-devi"
            className="heritage-temple-card"
          >
            <img
              src="/images/kaila-devi.jpeg"
              alt="Kaila Devi Temple"
            />

            <div className="heritage-temple-card-content">
              <span>01</span>
              <h3>कैला देवी मंदिर</h3>

              <p>
                करौली के प्रमुख शक्तिधामों में से एक,
                जहां लाखों श्रद्धालु माता के दर्शन के लिए
                आते हैं।
              </p>

              <strong>
                मंदिर की कहानी →
              </strong>
            </div>
          </Link>


          <div className="heritage-temple-card">
            <img
              src="/images/madan-mohan.jpeg"
              alt="Madan Mohan Ji Temple"
            />

            <div className="heritage-temple-card-content">
              <span>02</span>
              <h3>मदन मोहन जी मंदिर</h3>

              <p>
                भगवान श्रीकृष्ण की भक्ति और करौली की
                वैष्णव धार्मिक परंपरा से जुड़ा महत्वपूर्ण
                मंदिर।
              </p>

              <strong>
                धार्मिक विरासत →
              </strong>
            </div>
          </div>

        </div>
      </section>


      {/* FORTS */}
      <section className="forts-section">

        <div className="forts-image">
          <img
            src="/images/timangarh.jpeg"
            alt="Timangarh Fort Karauli"
          />
        </div>

        <div className="forts-content">
          <span>03 • FORTS & DEFENCE</span>

          <h2>
            दुर्गों में छिपी
            <br />
            इतिहास की कहानियां
          </h2>

          <p>
            करौली जिले की ऐतिहासिक विरासत शहर तक सीमित नहीं है।
            तिमनगढ़ और क्षेत्र के अन्य पुराने दुर्ग इस क्षेत्र
            के मध्यकालीन इतिहास और सैन्य वास्तुकला की झलक देते हैं।
          </p>

          <p>
            इन दुर्गों के अवशेष उस समय की राजनीतिक शक्ति,
            सुरक्षा व्यवस्था और स्थापत्य कौशल की कहानी बताते हैं।
          </p>
        </div>

      </section>


      {/* CULTURE */}
      <section className="culture-section">

        <div className="history-section-heading">
          <span>संस्कृति • परंपरा • लोकजीवन</span>

          <h2>
            इतिहास केवल इमारतों में नहीं
          </h2>

          <p>
            करौली की विरासत इसके मेलों, लोकगीतों, धार्मिक
            यात्राओं और स्थानीय परंपराओं में भी जीवित है।
          </p>
        </div>


        <div className="culture-grid">

          <div className="culture-card">
            <div className="culture-number">01</div>
            <h3>धार्मिक परंपराएं</h3>
            <p>
              मंदिर और धार्मिक आयोजन करौली के सामाजिक और
              सांस्कृतिक जीवन का महत्वपूर्ण हिस्सा हैं।
            </p>
          </div>


          <div className="culture-card">
            <div className="culture-number">02</div>
            <h3>मेले और उत्सव</h3>
            <p>
              विशेष अवसरों और मेलों के दौरान करौली की
              पारंपरिक संस्कृति जीवंत हो उठती है।
            </p>
          </div>


          <div className="culture-card">
            <div className="culture-number">03</div>
            <h3>लोकगीत</h3>
            <p>
              कैला देवी मेले से जुड़े लांगुरिया गीत
              करौली की प्रसिद्ध लोक परंपराओं में शामिल हैं।
            </p>
          </div>

        </div>

      </section>


      {/* HERITAGE QUOTE */}
      <section className="heritage-quote">

        <div className="heritage-quote-inner">

          <span>THE SPIRIT OF KARAULI</span>

          <h2>
            “करौली की विरासत
            <br />
            पत्थरों में नहीं,
            <br />
            लोगों की यादों में भी है।”
          </h2>

          <p>
            राजसी इतिहास, धार्मिक आस्था और लोक संस्कृति —
            यही करौली की पहचान है।
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="history-cta">

        <div>
          <span>EXPLORE MORE OF KARAULI</span>

          <h2>
            करौली को और करीब से जानें
          </h2>

          <p>
            ऐतिहासिक स्थलों, मंदिरों और पर्यटन स्थलों की
            यात्रा के लिए करौली के अन्य पेज देखें।
          </p>
        </div>

        <div className="history-cta-buttons">
          <Link href="/tourist">
            Tourist Places →
          </Link>

          <Link href="/kaila-devi">
            Kaila Devi Temple →
          </Link>
        </div>

      </section>


      {/* FOOTER */}
      <footer className="history-footer">

        <div className="history-footer-brand">
          <h3>Karauli</h3>
          <p>
            History • Heritage • Culture
          </p>
        </div>

        <div className="history-footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/history">History</Link>
          <Link href="/tourist">Tourist Places</Link>
          <Link href="/kaila-devi">Kaila Devi</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <p className="history-copyright">
          © {new Date().getFullYear()} Karauli Information
        </p>

      </footer>

    </main>
  );
}