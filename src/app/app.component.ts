import { Component, signal } from '@angular/core';

type NavGroup = { label: string; links: { label: string; href: string }[] };

@Component({
  selector: 'hrc-root',
  standalone: true,
  template: `
    <a class="skip-link" href="#contenido">Saltar al contenido</a>

    <div class="topline">
      <span>Carrión de los Céspedes · Sevilla</span>
      <a href="#contacto">Información y contacto <span aria-hidden="true">↗</span></a>
    </div>

    <header class="site-header">
      <a class="brand" href="#inicio" aria-label="Hermandad del Rocío de Carrión, inicio">
        <span class="crest" aria-hidden="true">
          <svg viewBox="0 0 64 74" fill="none">
            <path d="M32 3 57 12v22c0 16-10 27-25 36C17 61 7 50 7 34V12L32 3Z" fill="currentColor"/>
            <path d="M32 9 51 16v18c0 12-7 21-19 29C20 55 13 46 13 34V16l19-7Z" stroke="#f8f2e8" stroke-width="1.5"/>
            <path d="M32 20v24M24 27c0-4 3-7 8-7s8 3 8 7-3 6-8 6-8 2-8 6 3 8 8 8 8-4 8-8" stroke="#f8f2e8" stroke-width="2" stroke-linecap="round"/>
            <path d="M20 54h24" stroke="#d8bd86" stroke-width="2"/>
            <circle cx="32" cy="15" r="2" fill="#d8bd86"/>
          </svg>
        </span>
        <span class="brand-copy">
          <span class="brand-kicker">Rocío · Carrión de los Céspedes</span>
          <span class="brand-name">Hermandad del Rocío</span>
          <span class="brand-place">Carrión de los Céspedes</span>
        </span>
      </a>

      <button class="menu-toggle" type="button" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()" aria-controls="main-nav">
        <span class="menu-icon" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>{{ menuOpen() ? 'Cerrar' : 'Menú' }}</span>
      </button>

      <nav id="main-nav" class="main-nav" [class.is-open]="menuOpen()" aria-label="Navegación principal">
        <a class="nav-home" href="#inicio" (click)="closeMenu()">Inicio</a>
        @for (group of navGroups; track group.label) {
          <details class="nav-group">
            <summary>{{ group.label }} <span class="chevron" aria-hidden="true">⌄</span></summary>
            <div class="submenu">
              @for (link of group.links; track link.href) {
                <a [href]="link.href" (click)="closeMenu()">{{ link.label }}</a>
              }
            </div>
          </details>
        }
        <a class="nav-contact" href="#contacto" (click)="closeMenu()">Contacto <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main id="contenido">
      <section class="hero" id="inicio" aria-labelledby="hero-title">
        <div class="hero-texture" aria-hidden="true"></div>
        <div class="hero-content">
          <p class="eyebrow light"><span></span> Una devoción que nos une</p>
          <h1 id="hero-title">Camino, fe<br>y <em>hermandad.</em></h1>
          <p class="hero-intro">Bienvenidos a la Hermandad del Rocío de Carrión de los Céspedes. Un lugar de encuentro para compartir nuestra devoción, nuestra historia y el camino hacia la Blanca Paloma.</p>
          <div class="hero-actions">
            <a class="button button-gold" href="#hermandad">Conócenos <span aria-hidden="true">→</span></a>
            <a class="button button-ghost" href="#cultos">Cultos y agenda</a>
          </div>
        </div>
        <div class="hero-mark" aria-hidden="true">
          <span class="mark-top">NUESTRA SEÑORA</span>
          <span class="mark-star">✳</span>
          <span class="mark-bottom">DEL ROCÍO</span>
        </div>
        <a class="scroll-cue" href="#bienvenida"><span></span> Descubre la hermandad</a>
      </section>

      <section class="welcome section-wrap" id="bienvenida">
        <div class="welcome-heading">
          <p class="eyebrow"><span></span> Saluda</p>
          <h2>Una casa abierta<br>para todos.</h2>
        </div>
        <div class="welcome-copy">
          <p>La Hermandad es mucho más que un camino. Es fe compartida, tradición y el abrazo de un pueblo que camina unido. Esta web quiere ser un espacio para acercarte a nuestra vida y mantenerte al día.</p>
          <a class="text-link" href="#hermandad">Conoce nuestra hermandad <span aria-hidden="true">↗</span></a>
        </div>
        <div class="welcome-seal" aria-hidden="true"><span>CARIDAD</span><b>✳</b><span>DEVOCIÓN</span></div>
      </section>

      <section class="section-pale" id="hermandad">
        <div class="section-wrap">
          <div class="section-heading">
            <div><p class="eyebrow"><span></span> Conócenos</p><h2>La vida de la Hermandad</h2></div>
            <p>Descubre quiénes somos, de dónde venimos y cómo puedes formar parte de esta familia rociera.</p>
          </div>
          <div class="feature-grid">
            <a class="feature-card feature-history" id="historia" href="#historia">
              <span class="feature-number">01</span><span class="feature-icon" aria-hidden="true">✳</span>
              <span class="feature-title">Nuestra historia</span><span class="feature-desc">Orígenes, momentos y recuerdos que nos hacen hermandad.</span><span class="feature-arrow" aria-hidden="true">↗</span>
            </a>
            <a class="feature-card feature-life" id="vida" href="#vida">
              <span class="feature-number">02</span><span class="feature-icon" aria-hidden="true">♧</span>
              <span class="feature-title">Vida de hermandad</span><span class="feature-desc">Cultos, actividades y convivencia a lo largo del año.</span><span class="feature-arrow" aria-hidden="true">↗</span>
            </a>
            <a class="feature-card feature-join" id="ser-hermano" href="#ser-hermano">
              <span class="feature-number">03</span><span class="feature-icon" aria-hidden="true">⌂</span>
              <span class="feature-title">Hazte hermano</span><span class="feature-desc">Conoce los pasos para unirte a nuestra comunidad.</span><span class="feature-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
          <div class="info-strip">
            <span id="junta"><b>Junta de gobierno</b><small>Información próximamente</small></span>
            <span id="estatutos"><b>Estatutos</b><small>Información próximamente</small></span>
          </div>
        </div>
      </section>

      <section class="cultos-section" id="cultos">
        <div class="cultos-inner section-wrap">
          <div class="cultos-copy">
            <p class="eyebrow light"><span></span> Fe y celebración</p>
            <h2>Nos encontramos<br>en torno a Ella.</h2>
            <p>Consulta aquí la información sobre cultos, celebraciones y actos de la Hermandad. Próximamente encontrarás el calendario actualizado.</p>
            <a class="button button-gold" href="#agenda">Ver cultos y actos <span aria-hidden="true">→</span></a>
          </div>
          <div class="calendar-card" id="agenda">
            <div class="calendar-top"><span>En comunidad</span><span class="calendar-flower" aria-hidden="true">✳</span></div>
            <div class="calendar-line"></div>
            <p class="calendar-title">Agenda de la Hermandad</p>
            <p class="calendar-note">Aquí se publicarán las próximas fechas, horarios y avisos de interés.</p>
            <a href="#actualidad" class="text-link light-link">Ver actualidad <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section class="section-wrap heritage-section" id="patrimonio">
        <div class="section-heading">
          <div><p class="eyebrow"><span></span> Memoria y devoción</p><h2>Un patrimonio compartido</h2></div>
          <p>Un espacio para conocer y cuidar los símbolos y enseres de nuestra Hermandad.</p>
        </div>
        <div class="heritage-grid">
          <article id="simpecado"><span aria-hidden="true">✳</span><h3>El Simpecado</h3><p>Historia, descripción y significado de nuestro principal estandarte devocional.</p><small>Contenido próximamente</small></article>
          <article id="insignias"><span aria-hidden="true">✧</span><h3>Insignias y enseres</h3><p>Conoce las piezas que acompañan a la Hermandad en sus cultos y peregrinación.</p><small>Contenido próximamente</small></article>
          <article id="galeria"><span aria-hidden="true">▧</span><h3>Galería</h3><p>Imágenes y recuerdos de nuestros caminos, cultos y momentos compartidos.</p><small>Contenido próximamente</small></article>
        </div>
      </section>

      <section class="section-wrap camino-section" id="camino">
        <div class="section-heading">
          <div><p class="eyebrow"><span></span> Peregrinación</p><h2>El camino se vive juntos</h2></div>
          <p>Información práctica y espiritual para acompañar a la Hermandad en su peregrinación.</p>
        </div>
        <div class="path-list">
          <a href="#salida"><span class="path-icon" aria-hidden="true">⌖</span><span><b>La salida</b><small>Preparativos, fechas y recomendaciones</small></span><span class="path-arrow">↗</span></a>
          <a id="itinerario" href="#itinerario"><span class="path-icon" aria-hidden="true">⌁</span><span><b>Itinerario</b><small>Etapas, paradas y puntos de encuentro</small></span><span class="path-arrow">↗</span></a>
          <a id="consejos" href="#consejos"><span class="path-icon" aria-hidden="true">✧</span><span><b>Consejos para el camino</b><small>Todo lo que conviene saber antes de partir</small></span><span class="path-arrow">↗</span></a>
        </div>
      </section>

      <section class="news-section" id="actualidad">
        <div class="section-wrap">
          <div class="section-heading">
            <div><p class="eyebrow"><span></span> Desde la casa</p><h2>Actualidad y avisos</h2></div>
            <a class="text-link" href="#noticias">Toda la actualidad <span aria-hidden="true">↗</span></a>
          </div>
          <div class="news-placeholder" id="noticias">
            <div class="news-date"><span>PRÓXIMAMENTE</span><b>✳</b></div>
            <div><p class="news-label">Noticias de la Hermandad</p><h3>Este espacio será el punto de encuentro para nuestras noticias y avisos.</h3><p>Publicaremos aquí novedades, convocatorias, galerías y recuerdos de los actos.</p></div>
            <a class="round-arrow" href="#contacto" aria-label="Contactar con la hermandad">↗</a>
          </div>
        </div>
      </section>
    </main>

    <footer id="contacto">
      <div class="footer-main section-wrap">
        <div class="footer-identity">
          <span class="footer-crest" aria-hidden="true">✳</span>
          <p class="brand-kicker">Rocío · Carrión de los Céspedes</p>
          <p class="footer-title">Hermandad del Rocío</p>
          <p class="footer-place">Carrión de los Céspedes · Sevilla</p>
        </div>
        <div class="footer-column"><p class="footer-heading">La Hermandad</p><a href="#historia">Historia</a><a href="#vida">Junta de gobierno</a><a href="#ser-hermano">Hazte hermano</a><a href="#patrimonio">Patrimonio</a></div>
        <div class="footer-column"><p class="footer-heading">A tu lado</p><a href="#cultos">Cultos y agenda</a><a href="#camino">El camino</a><a href="#actualidad">Noticias y avisos</a><a href="#contacto">Datos de contacto</a></div>
        <div class="footer-contact"><p class="footer-heading">Estamos para ayudarte</p><p>En este espacio se añadirán los datos oficiales de contacto de la Hermandad.</p><a class="footer-email" href="#contacto">Añadir datos de contacto <span aria-hidden="true">↗</span></a></div>
      </div>
        <div class="footer-bottom"><span>© 2026 Hermandad del Rocío de Carrión de los Céspedes</span><a id="privacidad" href="#privacidad">Privacidad y cookies</a><span>Con fe, por el camino.</span></div>
    </footer>
  `
})
export class AppComponent {
  readonly menuOpen = signal(false);
  readonly navGroups: NavGroup[] = [
    { label: 'La Hermandad', links: [{ label: 'Historia', href: '#historia' }, { label: 'Junta de gobierno', href: '#junta' }, { label: 'Ser hermano', href: '#ser-hermano' }, { label: 'Estatutos', href: '#estatutos' }] },
    { label: 'Cultos', links: [{ label: 'Cultos y celebraciones', href: '#cultos' }, { label: 'Calendario', href: '#agenda' }, { label: 'Avisos', href: '#actualidad' }] },
    { label: 'El camino', links: [{ label: 'Peregrinación', href: '#camino' }, { label: 'Itinerario', href: '#itinerario' }, { label: 'Consejos', href: '#consejos' }] },
    { label: 'Patrimonio', links: [{ label: 'Simpecado', href: '#simpecado' }, { label: 'Insignias', href: '#insignias' }, { label: 'Galería', href: '#galeria' }] },
    { label: 'Actualidad', links: [{ label: 'Noticias', href: '#noticias' }, { label: 'Galería de fotos', href: '#galeria' }] }
  ];

  toggleMenu(): void { this.menuOpen.update((open) => !open); }
  closeMenu(): void { this.menuOpen.set(false); }
}
