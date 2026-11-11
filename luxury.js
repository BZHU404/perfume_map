/* ==========================================================================
   Scent Map · LUXURY LAYER
   依赖（本地托管）：GSAP 3.12.5 / ScrollTrigger 3.12.5 / Lenis 1.1.14
   没有库、减少动态效果、触屏环境都会自动降级。
   ========================================================================== */
(function () {
  'use strict';

  const root = document.documentElement;
  const body = document.body;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(pointer: fine)').matches;
  const ua = navigator.userAgent;
  const isSafari = /Safari/i.test(ua) && !/Chrome|CriOS|Chromium|Edg|OPR|Android/i.test(ua);
  const gsap = window.gsap;
  const ScrollTrigger = window.ScrollTrigger;
  const hasGSAP = !!(gsap && ScrollTrigger);

  if (reduced) {
    root.classList.add('lux-reduced');
    return;
  }
  if (!hasGSAP) return;

  gsap.registerPlugin(ScrollTrigger);
  root.classList.add('lux-js');
  if (isSafari) root.classList.add('lux-safari');

  const header = document.querySelector('.site-header');
  const page = body.dataset.page || 'home';
  let lenis = null;

  /* -----------------------------------------------------------------------
     Preloader — direct entry / reload, not internal navigation
     ----------------------------------------------------------------------- */
  function initPreloader(start) {
    // Skip the opening only for an internal link navigation. A reload or a
    // direct entry still gets the full preloader + hero entrance.
    let internalEntry = false;
    try {
      internalEntry = !!document.referrer && new URL(document.referrer).origin === location.origin;
    } catch (e) { internalEntry = false; }
    const navEntry = performance.getEntriesByType('navigation')[0];
    const isReload = (!!navEntry && navEntry.type === 'reload') || (performance.navigation && performance.navigation.type === 1);
    if (internalEntry && !isReload) { start(true); return; }
    body.classList.add('lux-preloading');

    const overlay = document.createElement('div');
    overlay.className = 'lux-preloader';
    overlay.innerHTML = `
      <div class="lp-inner">
        <div class="lp-kicker">SIMON WORKSHOP™ · SCENT MAP</div>
        <div class="lp-mark">香<em>谱</em></div>
        <div class="lp-line"><i></i></div>
        <div class="lp-meta"><span>COMPOSING THE INDEX</span><span>NO. 001 / 2026</span></div>
      </div>`;
    body.appendChild(overlay);

    let started = false;
    let finished = false;
    const begin = () => {
      if (started) return;
      started = true;
      start(isSafari);
    };
    const finish = () => {
      if (finished) return;
      finished = true;
      begin();
      body.classList.remove('lux-preloading');
      overlay.style.pointerEvents = 'none';
      overlay.style.visibility = 'hidden';
      // Keep the layer one extra frame after opacity reaches zero.
      // This prevents a compositor flash on Safari when a fixed layer is removed.
      setTimeout(() => overlay.remove(), 280);
    };
    const tl = gsap.timeline({ onComplete: finish });
    tl.fromTo('.lux-preloader .lp-kicker, .lux-preloader .lp-mark, .lux-preloader .lp-meta',
        { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: .5, stagger: .05, ease: 'power3.out' })
      .to('.lux-preloader .lp-line i', { scaleX: 1, duration: .65, ease: 'power2.inOut' }, '-=.35')
      .to('.lux-preloader .lp-inner', { opacity: 0, duration: .28, ease: 'power2.inOut' }, '-=.02')
      // Start the page underneath while the preloader is still opaque, then crossfade.
      .add(begin)
      .to('.lux-preloader', { opacity: 0, duration: .9, ease: 'power2.inOut' });
    // Failsafe: never trap the page if an animation is interrupted.
    setTimeout(finish, 3000);
  }

  /* -----------------------------------------------------------------------
     Lenis smooth scrolling + ScrollTrigger synchronization
     ----------------------------------------------------------------------- */
  function initScroll() {
    if (!window.Lenis || reduced || isSafari) return;
    lenis = new window.Lenis({
      duration: 1.05,
      lerp: .085,
      smoothWheel: true,
      wheelMultiplier: .92,
      touchMultiplier: 1.15,
      smoothTouch: false,
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Pause smooth scrolling while a drawer/search/modal owns the screen.
    const syncLenis = () => {
      const locked = body.classList.contains('drawer-open') || body.classList.contains('overlay-open') || body.classList.contains('modal-open');
      if (locked) lenis.stop(); else lenis.start();
    };
    new MutationObserver(syncLenis).observe(body, { attributes: true, attributeFilter: ['class'] });
    syncLenis();
  }

  /* -----------------------------------------------------------------------
     Hero / page-head entrance
     ----------------------------------------------------------------------- */
  function initIntro() {
    const hero = document.querySelector('.hero');
    if (hero) {
      const tl = gsap.timeline({ delay: .08, defaults: { ease: 'power4.out' } });
      tl.from('.hero-kicker', { opacity: 0, y: 14, duration: .55 })
        .from('.hero h1 .hero-line', { opacity: 0, y: 34, duration: .8, stagger: .08 }, '-=.42')
        .from('.hero-sub', { opacity: 0, y: 16, duration: .65 }, '-=.55')
        .from('.hero-actions .btn', { opacity: 0, y: 12, duration: .5, stagger: .05 }, '-=.55')
        .from('.hero-meta', { opacity: 0, y: 10, duration: .55 }, '-=.45')
        .from('.hero-plate', { opacity: 0, y: 34, rotate: 3.4, scale: .97, duration: 1.05, ease: 'power3.out' }, '-=.85')
        .from('.hero-stamp', { opacity: 0, scale: .7, rotate: -25, duration: .7, ease: 'back.out(1.6)' }, '-=.65');
    } else {
      const tl = gsap.timeline({ delay: .05, defaults: { ease: 'power4.out' } });
      tl.from('.page-head .eyebrow', { opacity: 0, y: 14, duration: .7 })
        .from('.page-head h1', { opacity: 0, y: 34, duration: .95 }, '-=.42')
        .from('.page-head .lead', { opacity: 0, y: 18, duration: .8 }, '-=.52')
        .from('.page-head .page-aside', { opacity: 0, x: 16, duration: .75 }, '-=.55');
    }
  }

  /* -----------------------------------------------------------------------
     Scroll reveals
     ----------------------------------------------------------------------- */
  function initReveals() {
    const blocks = gsap.utils.toArray(
      '.section-head, .manifesto > *, .editorial-note, .plate-feature, .flow-map, .wheel-layout, .lab-grid, .site-footer .footer-grid, .chapter-watermark'
    ).filter((el) => !el.closest('.lux-preloader'));

    blocks.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 26,
        duration: .95,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 94%', once: true },
      });
    });

    const groups = [
      ['.chapter-card', .055],
      ['.specimen-card', .032],
      ['.family-card', .04],
      ['.brand-index-card', .04],
      ['.feature-panel', .06],
      ['.stats-strip .stat', .055],
      ['.note-tier', .04],
    ];
    groups.forEach(([selector, stagger]) => {
      const els = gsap.utils.toArray(selector).filter((el) => !el.closest('.lux-preloader'));
      if (!els.length) return;
      ScrollTrigger.batch(els, {
        start: 'top 94%',
        once: true,
        onEnter: (batch) => gsap.from(batch, {
          opacity: 0,
          y: 30,
          duration: .85,
          stagger: stagger,
          ease: 'power3.out',
          overwrite: true,
        }),
      });
    });

    // The wheel gets a slightly more theatrical entrance.
    const wheel = document.querySelector('.wheel-wrap');
    if (wheel) {
      gsap.from(wheel, {
        opacity: 0,
        scale: .9,
        rotate: -2,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: wheel, start: 'top 88%', once: true },
      });
    }

    gsap.utils.toArray('.hero-plate, .plate-figure img').forEach((el) => {
      gsap.to(el, {
        yPercent: 3.5,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    });
  }

  /* -----------------------------------------------------------------------
     Header progress, frame, compact header
     ----------------------------------------------------------------------- */
  function initChrome() {
    const progress = document.createElement('div');
    progress.className = 'lux-progress';
    progress.setAttribute('aria-hidden', 'true');
    progress.innerHTML = '<span></span>';
    body.appendChild(progress);

    const frame = document.createElement('div');
    frame.className = 'lux-frame';
    frame.setAttribute('aria-hidden', 'true');
    frame.innerHTML = '<span class="lf-mark">SCENT MAP / ARCHIVE</span>';
    body.appendChild(frame);

    gsap.to(progress.firstElementChild, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: .25 },
    });

    if (header) {
      const update = () => header.classList.toggle('is-scrolled', window.scrollY > 42);
      update();
      window.addEventListener('scroll', update, { passive: true });
    }
  }

  /* -----------------------------------------------------------------------
     Gold dust canvas
     ----------------------------------------------------------------------- */
  function initParticles() {
    if (window.innerWidth < 760) return;
    const canvas = document.createElement('canvas');
    canvas.className = 'lux-particles';
    canvas.setAttribute('aria-hidden', 'true');
    body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let w = 0, h = 0, dpr = 1;
    let pointerX = 0, pointerY = 0;
    const particles = [];
    const count = window.innerWidth < 900 ? 14 : 28;

    const make = () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + .35,
      vx: (Math.random() - .5) * .16,
      vy: (Math.random() - .5) * .12,
      alpha: Math.random() * .32 + .1,
      phase: Math.random() * Math.PI * 2,
      star: Math.random() > .78,
    });

    const resize = () => {
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      while (particles.length < count) particles.push(make());
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', (event) => {
      pointerX = (event.clientX / w - .5) * 16;
      pointerY = (event.clientY / h - .5) * 16;
    }, { passive: true });

    const draw = (time) => {
      if (document.hidden) { requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, w, h);
      const drift = Math.sin(time * .00012) * 2;
      particles.forEach((p) => {
        p.x += p.vx + drift * .02;
        p.y += p.vy + Math.cos(time * .0001 + p.phase) * .035;
        if (p.x < -8) p.x = w + 8;
        if (p.x > w + 8) p.x = -8;
        if (p.y < -8) p.y = h + 8;
        if (p.y > h + 8) p.y = -8;
        const x = p.x + pointerX * p.r;
        const y = p.y + pointerY * p.r;
        ctx.globalAlpha = p.alpha * (.7 + Math.sin(time * .001 + p.phase) * .3);
        ctx.fillStyle = '#b58a54';
        if (p.star) {
          ctx.strokeStyle = '#b58a54';
          ctx.lineWidth = .65;
          ctx.beginPath();
          ctx.moveTo(x - 3.5, y); ctx.lineTo(x + 3.5, y);
          ctx.moveTo(x, y - 3.5); ctx.lineTo(x, y + 3.5);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(x, y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);
  }

  /* -----------------------------------------------------------------------
     Tilt + magnetic interactions (no custom cursor)
     ----------------------------------------------------------------------- */
  function initTilt() {
    if (!fine || window.innerWidth < 900) return;
    const seen = new WeakSet();
    const selector = '.chapter-card, .specimen-card, .family-card, .brand-index-card, .plate-figure';
    const bind = (el) => {
      if (seen.has(el)) return;
      seen.add(el);
      let rx, ry, lift;
      el.addEventListener('pointerenter', () => {
        gsap.set(el, { transformPerspective: 900 });
        rx = gsap.quickTo(el, 'rotationX', { duration: .55, ease: 'power3' });
        ry = gsap.quickTo(el, 'rotationY', { duration: .55, ease: 'power3' });
        lift = gsap.quickTo(el, 'y', { duration: .45, ease: 'power3' });
      });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        el.style.setProperty('--mx', `${Math.round(px * 100)}%`);
        el.style.setProperty('--my', `${Math.round(py * 100)}%`);
        if (rx && ry) {
          rx((.5 - py) * 2.6);
          ry((px - .5) * 2.6);
        }
        if (lift) lift(-3);
      });
      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--mx', '50%');
        el.style.setProperty('--my', '50%');
        if (rx) rx(0);
        if (ry) ry(0);
        if (lift) lift(0);
      });
    };
    const bindAll = () => document.querySelectorAll(selector).forEach(bind);
    bindAll();

    const grids = ['#material-grid', '#molecule-grid', '#perfume-grid', '#incense-grid', '#safety-grid', '#family-grid', '#brand-index-grid'];
    const observer = new MutationObserver(() => setTimeout(bindAll, 40));
    grids.forEach((sel) => {
      const el = document.querySelector(sel);
      if (el) observer.observe(el, { childList: true });
    });
  }

  function initMagnetic() {
    if (!fine || window.innerWidth < 900) return;
    const els = gsap.utils.toArray('.btn, .search-trigger, .icon-button, .filter-chip, .scene-chip, .brand-filter-btn, .section-link');
    els.forEach((el) => {
      const x = gsap.quickTo(el, 'x', { duration: .38, ease: 'power3' });
      const y = gsap.quickTo(el, 'y', { duration: .38, ease: 'power3' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        x(((e.clientX - r.left) / r.width - .5) * 7);
        y(((e.clientY - r.top) / r.height - .5) * 5);
      });
      el.addEventListener('pointerleave', () => { x(0); y(0); });
    });
  }

  /* -----------------------------------------------------------------------
     Refresh after filters / dynamic app renders
     ----------------------------------------------------------------------- */
  function refreshScroll() {
    ScrollTrigger.refresh();
  }
  function initRefreshHooks() {
    let timer = null;
    const queue = () => {
      clearTimeout(timer);
      timer = setTimeout(refreshScroll, 260);
    };
    document.addEventListener('input', queue);
    document.addEventListener('change', queue);
    document.addEventListener('click', (e) => {
      if (e.target.closest('.filter-chip, .brand-filter-btn, .btn, .section-link, [data-open-type]')) queue();
    });
    window.addEventListener('resize', queue);
    setTimeout(refreshScroll, 600);
  }

  /* -----------------------------------------------------------------------
     Boot
     ----------------------------------------------------------------------- */
  function boot(skipIntro) {
    initScroll();
    initChrome();
    initParticles();
    initTilt();
    initMagnetic();
    initReveals();
    initRefreshHooks();
    if (!skipIntro) initIntro();
    ScrollTrigger.refresh();
  }

  initPreloader(boot);
})();
