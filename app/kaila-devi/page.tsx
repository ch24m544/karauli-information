import Link from "next/link";

export default function KailaDeviPage() {
  return (
    <main className="history-page">

      {/* HEADER */}
      <header className="history-header">

        <div className="history-header-left">

          <Link href="/" className="history-back">
            ←
          </Link>

          <Link href="/" className="history-brand">
            <span className="history-brand-name">
              Karauli
            </span>

            <span className="history-brand-tagline">
              इतिहास • आस्था • संस्कृति
            </span>
          </Link>

        </div>

        <nav className="history-nav">
          <Link href="/">होम</Link>
          <Link href="/about">करौली के बारे में</Link>
          <Link href="/history">इतिहास</Link>
          <Link href="/tourist">पर्यटन</Link>
          <Link href="/events">समाचार</Link>
          <Link href="/contact">संपर्क</Link>
        </nav>

      </header>


      {/* HERO */}
      <section className="history-hero">

        <img
          src="/images/kaila-devi1.jpeg"
          alt="कैला देवी मंदिर करौली"
        />

        <div className="history-hero-overlay">

          <div className="history-hero-content">

            <span>
              करौली • राजस्थान
            </span>

            <h1>
              माँ कैला देवी
              <br />
              मंदिर
            </h1>

            <p>
              आस्था, शक्ति और भक्ति का पवित्र धाम,
              जो करौली की धार्मिक और सांस्कृतिक पहचान
              का महत्वपूर्ण हिस्सा है।
            </p>

          </div>

        </div>

      </section>


      {/* INTRODUCTION */}
      <section className="history-intro">

        <div className="history-intro-label">
          कैला देवी धाम
        </div>

        <h2>
          करौली की आस्था का
          <br />
          पवित्र केंद्र
        </h2>

        <p>
          कैला देवी मंदिर राजस्थान के करौली जिले में
          स्थित प्रसिद्ध धार्मिक स्थलों में से एक है।
          यह मंदिर त्रिकूट पहाड़ियों के बीच कालीसिल
          नदी के किनारे स्थित है।
        </p>

        <p>
          माँ कैला देवी को शक्ति के स्वरूप के रूप में
          श्रद्धा से पूजा जाता है। मंदिर से जुड़ी
          धार्मिक मान्यताएं, लोककथाएं और परंपराएं
          इसे राजस्थान के प्रमुख तीर्थस्थलों में
          विशेष स्थान देती हैं।
        </p>

      </section>


      {/* STORY */}
      <section className="heritage-feature">

        <div className="heritage-feature-image">

          <img
            src="/images/kaila-devi1.jpeg"
            alt="कैला देवी मंदिर में श्रद्धालु"
          />

        </div>

        <div className="heritage-feature-content">

          <span>
            01 • माँ की कथा
          </span>

          <h2>
            कैला देवी की
            <br />
            पौराणिक कथा
          </h2>

          <p>
            धार्मिक मान्यता के अनुसार माँ कैला देवी का
            संबंध भगवान श्रीकृष्ण की बहन योगमाया से
            माना जाता है।
          </p>

          <p>
            कथा के अनुसार जब कंस ने नवजात कन्या को
            मारने का प्रयास किया, तब वह उसके हाथ से
            निकलकर दिव्य रूप में आकाश की ओर चली गई।
          </p>

          <p>
            भक्तों की मान्यता है कि इसी देवी स्वरूप की
            आराधना आगे चलकर कैला देवी के रूप में की
            जाने लगी।
          </p>

          <div className="kaila-story-note">
            <strong>धार्मिक मान्यता</strong>
            <p>
              यह कथा मंदिर से जुड़ी धार्मिक और
              लोक परंपराओं का हिस्सा है।
            </p>
          </div>

        </div>

      </section>


      {/* HISTORY */}
      <section className="heritage-stone">

        <div className="heritage-stone-content">

          <span>
            02 • इतिहास और परंपरा
          </span>

          <h2>
            करौली राजघराने की
            <br />
            आराध्य देवी
          </h2>

          <p>
            कैला देवी का संबंध करौली के यदुवंशी
            राजघराने की धार्मिक परंपराओं से गहराई
            से जुड़ा रहा है।
          </p>

          <p>
            समय के साथ यह मंदिर करौली की धार्मिक,
            सांस्कृतिक और सामाजिक पहचान का महत्वपूर्ण
            केंद्र बन गया।
          </p>

          <p>
            आज भी देश के विभिन्न हिस्सों से श्रद्धालु
            माँ कैला देवी के दर्शन और आशीर्वाद के लिए
            यहां पहुंचते हैं।
          </p>

        </div>

        <div className="heritage-stone-image">

          <img
            src="/images/kaila-devi2.jpeg"
            alt="कैला देवी मंदिर"
          />

        </div>

      </section>


      {/* QUICK INFORMATION */}
      <section className="kaila-information">

        <div className="history-section-heading">

          <span>
            महत्वपूर्ण जानकारी
          </span>

          <h2>
            कैला देवी धाम
            <br />
            एक नज़र में
          </h2>

        </div>


        <div className="kaila-information-grid">

          <div className="kaila-info-card">
            <div className="kaila-info-number">
              01
            </div>

            <h3>
              स्थान
            </h3>

            <p>
              करौली जिले में त्रिकूट पहाड़ियों के
              बीच कालीसिल नदी के किनारे।
            </p>
          </div>


          <div className="kaila-info-card">
            <div className="kaila-info-number">
              02
            </div>

            <h3>
              आराध्य देवी
            </h3>

            <p>
              माँ कैला देवी को शक्ति के स्वरूप में
              श्रद्धा और भक्ति से पूजा जाता है।
            </p>
          </div>


          <div className="kaila-info-card">
            <div className="kaila-info-number">
              03
            </div>

            <h3>
              प्रमुख मेला
            </h3>

            <p>
              चैत्र नवरात्रि के दौरान यहां प्रसिद्ध
              कैला देवी मेले का आयोजन होता है।
            </p>
          </div>


          <div className="kaila-info-card">
            <div className="kaila-info-number">
              04
            </div>

            <h3>
              लोक संस्कृति
            </h3>

            <p>
              लांगुरिया गीत कैला देवी की यात्रा से
              जुड़ी प्रसिद्ध लोक परंपरा है।
            </p>
          </div>

        </div>

      </section>


      {/* FAIR */}
      <section className="forts-section">

        <div className="forts-image">

          <img
            src="/images/kaila-devi3.jpeg"
            alt="कैला देवी मेले में श्रद्धालु"
          />

        </div>

        <div className="forts-content">

          <span>
            03 • चैत्र नवरात्रि
          </span>

          <h2>
            कैला देवी का
            <br />
            प्रसिद्ध मेला
          </h2>

          <p>
            चैत्र नवरात्रि के अवसर पर कैला देवी मंदिर
            में विशाल मेले का आयोजन होता है। इस दौरान
            राजस्थान के साथ-साथ आसपास के राज्यों से
            बड़ी संख्या में श्रद्धालु यहां पहुंचते हैं।
          </p>

          <p>
            श्रद्धालु पैदल यात्राएं करते हुए मंदिर
            पहुंचते हैं और माता के दर्शन कर अपनी
            मनोकामनाओं के लिए प्रार्थना करते हैं।
          </p>

          <p>
            मेले के दौरान धार्मिक आयोजनों के साथ
            स्थानीय बाजार और लोक संस्कृति भी
            जीवंत दिखाई देती है।
          </p>

        </div>

      </section>


      {/* LANGURIYA */}
      <section className="heritage-feature">

        <div className="heritage-feature-image">

          <img
            src="/images/kaila-devi4.jpeg"
            alt="कैला देवी की लोक परंपरा"
          />

        </div>

        <div className="heritage-feature-content">

          <span>
            04 • लोक संस्कृति
          </span>

          <h2>
            लांगुरिया गीतों की
            <br />
            अनोखी परंपरा
          </h2>

          <p>
            कैला देवी की यात्रा केवल धार्मिक अनुभव
            तक सीमित नहीं है। यहां की लोक संस्कृति
            में लांगुरिया गीतों का विशेष स्थान है।
          </p>

          <p>
            मेले और नवरात्रि के दौरान गाए जाने वाले
            ये लोकगीत कैला देवी की यात्रा को एक
            अलग सांस्कृतिक पहचान देते हैं।
          </p>

        </div>

      </section>


      {/* NATURE */}
      <section className="heritage-stone">

        <div className="heritage-stone-content">

          <span>
            05 • प्रकृति और आस्था
          </span>

          <h2>
            त्रिकूट पहाड़ियों के
            <br />
            बीच माँ का धाम
          </h2>

          <p>
            मंदिर का प्राकृतिक परिवेश इसकी सुंदरता
            को और बढ़ाता है। त्रिकूट पहाड़ियों और
            कालीसिल नदी के आसपास का क्षेत्र मंदिर
            को एक शांत और आध्यात्मिक वातावरण प्रदान
            करता है।
          </p>

          <p>
            यहां आने वाले श्रद्धालुओं के लिए यह
            यात्रा धार्मिक आस्था के साथ-साथ प्रकृति
            और स्थानीय संस्कृति को करीब से देखने
            का अवसर भी देती है।
          </p>

        </div>

        <div className="heritage-stone-image">

          <img
            src="/images/kaila-devi5.jpeg"
            alt="कैला देवी मंदिर का प्राकृतिक परिवेश"
          />

        </div>

      </section>


      {/* PHOTO GALLERY */}
      <section className="kaila-gallery">

        <div className="kaila-gallery-heading">

          <span>
            चित्र यात्रा
          </span>

          <h2>
            कैला देवी मंदिर
            <br />
            तस्वीरों में
          </h2>

          <p>
            मंदिर और यहां की धार्मिक परंपराओं की
            कुछ झलकियां।
          </p>

        </div>


        <div className="kaila-gallery-grid">

          <div className="gallery-photo">
            <img
              src="/images/kaila-devi1.jpeg"
              alt="कैला देवी मंदिर में श्रद्धालु"
            />
          </div>

          <div className="gallery-photo">
            <img
              src="/images/kaila-devi2.jpeg"
              alt="कैला देवी मंदिर"
            />
          </div>

          <div className="gallery-photo">
            <img
              src="/images/kaila-devi3.jpeg"
              alt="कैला देवी मेले का दृश्य"
            />
          </div>

          <div className="gallery-photo">
            <img
              src="/images/kaila-devi4.jpeg"
              alt="कैला देवी धार्मिक परंपरा"
            />
          </div>

          <div className="gallery-photo">
            <img
              src="/images/kaila-devi5.jpeg"
              alt="कैला देवी मंदिर परिसर"
            />
          </div>

        </div>

      </section>


      {/* VISITOR INFORMATION */}
      <section className="kaila-visit">

        <div className="history-section-heading">

          <span>
            यात्रा की जानकारी
          </span>

          <h2>
            कैला देवी दर्शन
          </h2>

          <p>
            कैला देवी धाम की यात्रा की योजना बनाते
            समय यह जानकारी उपयोगी हो सकती है।
          </p>

        </div>


        <div className="kaila-visit-grid">

          <div>
            <h3>📍 स्थान</h3>

            <p>
              कैला देवी धाम, करौली जिला,
              राजस्थान।
            </p>
          </div>


          <div>
            <h3>🙏 दर्शन</h3>

            <p>
              श्रद्धालु वर्षभर माँ के दर्शन और
              पूजा के लिए मंदिर आते हैं।
            </p>
          </div>


          <div>
            <h3>🌸 विशेष समय</h3>

            <p>
              चैत्र नवरात्रि के दौरान मंदिर में
              विशेष धार्मिक आयोजन और मेला होता है।
            </p>
          </div>


          <div>
            <h3>🚶 यात्रा</h3>

            <p>
              मेले के समय बड़ी संख्या में श्रद्धालु
              यहां पहुंचते हैं, इसलिए यात्रा की
              योजना पहले से बनाना उपयोगी रहता है।
            </p>
          </div>

        </div>

      </section>


      {/* QUOTE */}
      <section className="heritage-quote">

        <div className="heritage-quote-inner">

          <span>
            माँ कैला देवी • करौली
          </span>

          <h2>
            “आस्था की इस धरती पर
            <br />
            हर यात्रा अपने साथ
            <br />
            एक विश्वास लेकर आती है।”
          </h2>

          <p>
            माँ कैला देवी करौली की धार्मिक और
            सांस्कृतिक पहचान का अभिन्न हिस्सा हैं।
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="history-cta">

        <div>

          <span>
            करौली को और जानें
          </span>

          <h2>
            करौली की अन्य विरासत
            <br />
            भी देखें
          </h2>

          <p>
            करौली के इतिहास, पर्यटन स्थलों और
            अन्य धार्मिक स्थलों के बारे में जानें।
          </p>

        </div>


        <div className="history-cta-buttons">

          <Link href="/history">
            करौली का इतिहास →
          </Link>

          <Link href="/tourist">
            पर्यटन स्थल →
          </Link>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="history-footer">

        <div className="history-footer-brand">

          <h3>
            Karauli
          </h3>

          <p>
            इतिहास • आस्था • संस्कृति
          </p>

        </div>


        <div className="history-footer-links">

          <Link href="/">
            होम
          </Link>

          <Link href="/about">
            करौली के बारे में
          </Link>

          <Link href="/history">
            इतिहास
          </Link>

          <Link href="/tourist">
            पर्यटन
          </Link>

          <Link href="/kaila-devi">
            कैला देवी
          </Link>

          <Link href="/contact">
            संपर्क
          </Link>

        </div>


        <p className="history-copyright">
          © {new Date().getFullYear()} Karauli Information
        </p>

      </footer>

    </main>
  );
}