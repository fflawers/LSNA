import React, { useState } from 'react';
import './LetterBook.css';

// =============================
// 🔧 PERSONALIZA AQUÍ tu carta
// =============================
const HER_NAME = 'Sarai';    // ← Pon el nombre de tu novia
const YOUR_NAME = 'Fernando Flores Garcia';  // ← Pon tu nombre
const DATE = '';     // ← La fecha especial

const PAGES = [
  {
    id: 'cover',
    type: 'cover',
    content: null,
  },
  {
    id: 'letter-1',
    type: 'letter',
    content: {
      heading: 'Para ti:',
      body: `${HER_NAME},
Desde que llegaste a mi vida, algo cambió. No fue solamente tu sonrisa, tus ojos o tu forma de ser. Fue la manera en que empecé a sentir paz cuando estabas cerca.

Pero también he aprendido algo importante: el amor más fuerte no es el que se arrastra, ni el que se conforma. El amor verdadero es el que se construye entre dos personas que se eligen, se cuidan y se corresponden.

Porque puedo amarte con toda mi alma, admirarte y valorar cada momento contigo, pero también entiendo que una relación sana necesita reciprocidad. Necesita que los dos quieran estar, que los dos hagan el esfuerzo y que los dos demuestren con acciones lo que sienten.

Te amo, y precisamente por eso quiero un amor donde ambos caminemos en la misma dirección. Donde yo te dé lo mejor de mí y tú también me des lo mejor de ti. Porque cuando el cariño es mutuo, cuando el respeto y el interés vienen de ambos lados, es cuando el amor realmente florece.

No se trata de amar menos; se trata de amarnos bien. De construir algo bonito entre los dos, desde la elección diaria, el respeto y la reciprocidad. Porque te amo tanto, pero también creo que el amor más valioso es aquel en el que ambos ponen el corazón.
`,
    },
  },
  {
    id: 'photo-1',
    type: 'photo',
    src: '/photo1.png',
    caption: 'Juntos en cada momento',
  },
  {
    id: 'letter-2',
    type: 'letter',
    content: {
      heading: 'Lo que más amo de ti...',
      body: `Me encanta cómo te emocionas con las cosas pequeñas y cómo ves el mundo con esa ternura y esa fuerza que te hacen ser tú.

Me encanta que tengas tu carácter, que a veces choquemos y discutamos, porque los dos somos intensos a nuestra manera. Pero algo que admiro de nosotros es que siempre encontramos la manera de regresar y seguir eligiéndonos.

Tú eres esa calma cuando yo soy demasiado impulsivo, y yo quiero ser ese apoyo que te ayude a cumplir todo lo que sueñas.

No te amo porque seas perfecta; te amo porque eres real, con tus virtudes y tus defectos, igual que yo. Y lo más valioso es que el amor entre nosotros siempre ha sido de dos: nos cuidamos, nos corregimos y seguimos creciendo juntos.
`,
    },
  },
  {
    id: 'photo-2',
    type: 'photo',
    src: '/photo2.png',
    caption: '',
  },
  {
    id: 'letter-3',
    type: 'letter',
    content: {
      heading: 'Promesas desde el corazón',
      body: `Te prometo estar para ti cuando me necesites, pero también ser alguien en quien puedas confiar en tus días buenos y en los difíciles.

Te prometo escucharte, entenderte y aprender a tener más calma, porque sé que muchas veces tú eres quien trae paz cuando yo reacciono de más.

Te prometo hacerte reír, apoyarte en tus sueños y seguir admirando esa mujer que eres.

Y sobre todo, te prometo seguir eligiéndote cada día, así como deseo que tú también me elijas a mí.

No busco una relación perfecta, porque sé que vamos a discutir y tendremos diferencias. Lo que quiero es construir algo real, donde los dos nos respetemos, crezcamos y siempre encontremos el camino de vuelta.
`,
    },
  },
  {
    id: 'photo-3',
    type: 'photo',
    src: '/photo3.png',
    caption: 'Esos momentos que guardo en el corazón',
  },
  {
    id: 'closing',
    type: 'closing',
    content: {
      message: `Con todo mi amor`,
      signature: YOUR_NAME,
      date: DATE,
    },
  },
];

export default function LetterBook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState('next'); // 'next' | 'prev'
  const [entered, setEntered] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setEntered(true), 50);
  }, []);

  const goNext = () => {
    if (flipping || currentPage >= PAGES.length - 1) return;
    setFlipDir('next');
    setFlipping(true);
    setTimeout(() => {
      setCurrentPage(p => p + 1);
      setFlipping(false);
    }, 500);
  };

  const goPrev = () => {
    if (flipping || currentPage <= 0) return;
    setFlipDir('prev');
    setFlipping(true);
    setTimeout(() => {
      setCurrentPage(p => p - 1);
      setFlipping(false);
    }, 500);
  };

  const page = PAGES[currentPage];

  return (
    <div className={`book-scene ${entered ? 'entered' : ''}`}>
      {/* Page counter */}
      <div className="page-counter">
        <span>{currentPage + 1}</span>
        <span className="page-sep">/</span>
        <span>{PAGES.length}</span>
      </div>

      {/* The Book */}
      <div
        className={`book ${flipping ? `flipping-${flipDir}` : ''}`}
        role="main"
        aria-label={`Carta - página ${currentPage + 1} de ${PAGES.length}`}
      >
        {/* Book spine decoration */}
        <div className="book-spine" aria-hidden="true">
          <div className="spine-line" />
          <div className="spine-line" />
          <div className="spine-ornament">❤</div>
          <div className="spine-line" />
          <div className="spine-line" />
        </div>

        {/* Page content */}
        <div className="book-page">
          {/* Page decorations */}
          <div className="page-corner page-corner-tl" aria-hidden="true" />
          <div className="page-corner page-corner-tr" aria-hidden="true" />
          <div className="page-corner page-corner-bl" aria-hidden="true" />
          <div className="page-corner page-corner-br" aria-hidden="true" />

          {page.type === 'cover' && <CoverPage herName={HER_NAME} />}
          {page.type === 'letter' && <LetterPage content={page.content} />}
          {page.type === 'photo' && <PhotoPage src={page.src} caption={page.caption} />}
          {page.type === 'closing' && <ClosingPage content={page.content} herName={HER_NAME} />}
        </div>
      </div>

      {/* Navigation */}
      <div className="book-nav">
        <button
          id="prev-page-btn"
          className="nav-btn nav-prev"
          onClick={goPrev}
          disabled={currentPage === 0}
          aria-label="Página anterior"
        >
          ‹ Anterior
        </button>

        {/* Dot indicators */}
        <div className="nav-dots" role="tablist" aria-label="Páginas">
          {PAGES.map((p, i) => (
            <button
              key={p.id}
              className={`nav-dot ${i === currentPage ? 'active' : ''}`}
              onClick={() => {
                if (!flipping) {
                  setFlipDir(i > currentPage ? 'next' : 'prev');
                  setFlipping(true);
                  setTimeout(() => { setCurrentPage(i); setFlipping(false); }, 500);
                }
              }}
              aria-label={`Ir a página ${i + 1}`}
              role="tab"
              aria-selected={i === currentPage}
            />
          ))}
        </div>

        <button
          id="next-page-btn"
          className="nav-btn nav-next"
          onClick={goNext}
          disabled={currentPage === PAGES.length - 1}
          aria-label="Siguiente página"
        >
          Siguiente ›
        </button>
      </div>
    </div>
  );
}

/* ===== PAGE COMPONENTS ===== */

function CoverPage({ herName }) {
  return (
    <div className="page-cover">
      <div className="cover-ornament top" aria-hidden="true">✦ ❤ ✦</div>
      <div className="cover-rose" aria-hidden="true">🌹</div>
      <p className="cover-for">Para</p>
      <p className="cover-name">{herName}</p>
      <div className="cover-divider" aria-hidden="true">
        <span>——</span><span>✦</span><span>——</span>
      </div>
      <p className="cover-hint">Pasa la página para comenzar...</p>
      <div className="cover-ornament bottom" aria-hidden="true">✦ ❤ ✦</div>
    </div>
  );
}

function LetterPage({ content }) {
  return (
    <div className="page-letter">
      <div className="letter-header" aria-hidden="true">
        <div className="letter-line-deco" />
      </div>
      <h2 className="letter-heading">{content.heading}</h2>
      <div className="letter-body">
        {content.body.split('\n\n').map((para, i) => (
          <p key={i} className="letter-para">{para}</p>
        ))}
      </div>
      <div className="letter-footer" aria-hidden="true">
        <div className="letter-line-deco" />
      </div>
    </div>
  );
}

function PhotoPage({ src, caption }) {
  return (
    <div className="page-photo">
      <div className="photo-frame">
        <img
          src={src}
          alt={caption}
          className="photo-img"
          loading="lazy"
        />
        <div className="photo-overlay" aria-hidden="true" />
      </div>
      <p className="photo-caption">{caption}</p>
      <div className="photo-ornaments" aria-hidden="true">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>
    </div>
  );
}

function ClosingPage({ content, herName }) {
  return (
    <div className="page-closing">
      <div className="closing-ornament top" aria-hidden="true">✦ ❤ ✦</div>
      <div className="closing-heart" aria-hidden="true">❤</div>
      <p className="closing-message">{content.message}</p>
      <p className="closing-signature">{content.signature}</p>
      <div className="closing-kisses" aria-hidden="true">x o x o</div>
      <p className="closing-date">{content.date}</p>
      <div className="closing-final">
        <p>"Te amo"</p>
      </div>
      <div className="closing-ornament bottom" aria-hidden="true">✦ ❤ ✦</div>
    </div>
  );
}
