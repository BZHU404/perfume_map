/* ==========================================================================
   Simon Workshop™ · Scent Map / 香谱
   纯静态原生 JavaScript：检索、筛选、详情抽屉、深链接、收藏、比较、
   香调轮盘、气味逆向检索、和弦实验室与随机探索。
   ========================================================================== */
(function () {
  'use strict';

  const S = window.SCENT;
  if (!S) return;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const PAGE = document.body.dataset.page || 'home';
  const TYPE_META = {
    material: { label: '天然原料', en: 'MATERIAL', page: 'natural.html', collection: 'materials' },
    extract: { label: '提取物', en: 'EXTRACT', page: 'natural.html', collection: 'extracts' },
    molecule: { label: '芳香分子', en: 'MOLECULE', page: 'molecules.html', collection: 'molecules' },
    ingredient: { label: '商品/辅助原料', en: 'MATERIAL', page: 'molecules.html', collection: 'ingredients' },
    family: { label: '香调', en: 'FAMILY', page: 'perfumery.html', collection: 'families' },
    accord: { label: '香气和弦', en: 'ACCORD', page: 'perfumery.html', collection: 'accords' },
    perfume: { label: '香水作品', en: 'PERFUME', page: 'perfume.html', collection: 'perfumes' },
    incense: { label: '传统香文化', en: 'INCENSE', page: 'incense.html', collection: 'incense' },
    perfumery: { label: '调香知识', en: 'PERFUMERY', page: 'perfumery.html', collection: 'perfumeryKnowledge' },
    safety: { label: '安全与法规', en: 'SAFETY', page: 'safety.html', collection: 'safety' },
  };
  const TYPE_ORDER = ['material', 'extract', 'molecule', 'ingredient', 'family', 'accord', 'perfume', 'incense', 'perfumery', 'safety'];
  const COLLECTIONS = {};
  const BY_ID = {};
  TYPE_ORDER.forEach((type) => {
    const arr = S[TYPE_META[type].collection] || [];
    COLLECTIONS[type] = arr;
    arr.forEach((rec) => { BY_ID[rec.id] = { type, rec }; });
  });

  const ICONS = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.6"/><path d="m16 16 4.4 4.4"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>',
    random: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 7h3.2c5.8 0 5.8 10 11.6 10H21M3 17h3.2c2 0 3.2-1.2 4.4-2.6M14 6.5c1.2-.9 2.3-1.5 3.8-1.5H21"/><path d="m18 2 3 3-3 3M18 14l3 3-3 3"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M6 3.8h12v17.1l-6-4.1-6 4.1Z"/></svg>',
    bookmarkFill: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M6 3.8h12v17.1l-6-4.1-6 4.1Z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg>',
    copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><rect x="8" y="8" width="12" height="12"/><path d="M16 8V4H4v12h4"/></svg>',
    closeAlt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M20 4C11 4 5 8 5 15c0 2 .8 3.5 2 5 6-1 11-5 13-16Z"/><path d="M5 20C8 14 12 10 17 7"/></svg>',
  };

  const esc = (value) => String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  const attr = esc;
  const norm = (value) => String(value == null ? '' : value)
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/[×✕]/g, 'x').replace(/\s+/g, ' ').trim();
  const stripNorm = (value) => norm(value).replace(/[\s·・\-—–_/\\()（），,。.;；:：'"“”‘’]/g, '');
  const joinList = (arr) => Array.isArray(arr) && arr.length ? arr.map(esc).join('、') : '未录入';
  const splitList = (arr) => Array.isArray(arr) && arr.length ? arr.join(' / ') : '未录入';
  const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

  function typeLabel(type) { return (TYPE_META[type] || {}).label || type; }
  function typePage(type) { return (TYPE_META[type] || {}).page || 'index.html'; }
  function getEntity(type, id) { return BY_ID[id] && BY_ID[id].type === type ? BY_ID[id].rec : null; }
  function findAny(id) { return BY_ID[id] || null; }
  function recordName(rec) { return rec.nameZh || rec.title || rec.nameEn || rec.id; }
  function recordEn(rec) { return rec.nameEn || rec.titleEn || ''; }
  function formatNames(ids, type) {
    return (ids || []).map((id) => {
      const hit = BY_ID[id];
      if (!hit) return '';
      return `<button class="tag" type="button" data-open-type="${attr(hit.type)}" data-open-id="${attr(id)}">${esc(recordName(hit.rec))}</button>`;
    }).filter(Boolean).join('');
  }
  function gradeBadge(grade, withLabel) {
    const g = S.reliability[grade] || S.reliability.U;
    return `<span class="badge grade-${attr(grade)}" title="${attr(g.title)}">${esc(grade)}</span>${withLabel ? ` <span class="small-caps">可信度 ${esc(grade)}</span>` : ''}`;
  }
  function toast(message) {
    let el = $('#toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast'; el.className = 'toast'; el.setAttribute('role', 'status');
      el.setAttribute('aria-live', 'polite');
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.classList.add('is-visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => el.classList.remove('is-visible'), 2300);
  }

  function fillCounts() {
    const map = {
      materials: S.materials.length, extracts: S.extracts.length, molecules: S.molecules.length,
      ingredients: S.ingredients.length, families: S.families.length, accords: S.accords.length,
      perfumes: S.perfumes.length, brands: S.brands.length, incense: S.incense.length,
      perfumery: S.perfumeryKnowledge.length, safety: S.safety.length, specialty: S.extracts.filter((e) => e.specialty).length,
    };
    $$('[data-count]').forEach((el) => {
      const key = el.dataset.count;
      if (!key || key === 'favorites') return;
      if (map[key] != null) el.textContent = String(map[key]);
    });
  }

  /* ========================================================================
     Favorites
     ======================================================================== */
  const FAV_KEY = 'scentmap:favorites:v1';
  let favorites = [];
  try {
    const raw = localStorage.getItem(FAV_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) favorites = parsed.filter((x) => typeof x === 'string' && x.includes(':'));
    }
  } catch (e) { favorites = []; }
  function saveFavorites() {
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favorites)); } catch (e) { /* file:// / private mode */ }
  }
  function isFav(type, id) { return favorites.includes(type + ':' + id); }
  function updateFavCount() {
    const count = favorites.length;
    $$('.fav-count').forEach((el) => { el.textContent = String(count); el.dataset.count = String(count); });
    $$('[data-fav-toggle]').forEach((btn) => {
      const type = btn.dataset.favType, id = btn.dataset.favId;
      const active = isFav(type, id);
      btn.classList.toggle('is-fav', active);
      btn.setAttribute('aria-pressed', String(active));
      btn.setAttribute('aria-label', active ? '取消收藏' : '收藏');
      if (btn.classList.contains('fav-btn')) btn.innerHTML = active ? ICONS.bookmarkFill : ICONS.bookmark;
      else if (btn.classList.contains('drawer-fav')) btn.innerHTML = (active ? ICONS.bookmarkFill : ICONS.bookmark) + '<span>' + (active ? '已收藏' : '收藏') + '</span>';
    });
  }
  function toggleFavorite(type, id, silent) {
    const key = type + ':' + id;
    const idx = favorites.indexOf(key);
    if (idx >= 0) favorites.splice(idx, 1);
    else favorites.push(key);
    saveFavorites(); updateFavCount();
    if (!silent) toast(idx >= 0 ? '已取消收藏' : '已加入收藏 · ' + typeLabel(type));
    renderFavoritesModal();
  }

  /* ========================================================================
     Search index
     ======================================================================== */
  function buildSearchText(rec, type) {
    const bits = [recordName(rec), recordEn(rec), rec.id];
    if (rec.aliases) bits.push(...rec.aliases);
    if (rec.scientificName) bits.push(rec.scientificName);
    if (rec.synonyms) bits.push(...rec.synonyms);
    if (rec.iupacName) bits.push(rec.iupacName);
    if (rec.cas) bits.push(rec.cas);
    if (rec.formula) bits.push(rec.formula);
    if (rec.category) bits.push(rec.category);
    if (rec.subcategory) bits.push(rec.subcategory);
    if (rec.chemicalClass) bits.push(rec.chemicalClass);
    if (rec.family) bits.push(rec.family);
    if (rec.plantPart) bits.push(rec.plantPart);
    if (rec.origin) bits.push(...rec.origin);
    if (rec.aroma) bits.push(...rec.aroma);
    if (rec.odorDescription) bits.push(...rec.odorDescription);
    if (rec.majorConstituents) bits.push(...rec.majorConstituents);
    if (rec.naturalOccurrence) bits.push(...rec.naturalOccurrence);
    if (rec.region) bits.push(rec.region);
    if (rec.era) bits.push(rec.era);
    if (rec.brand) bits.push(rec.brand);
    if (rec.perfumer) bits.push(...rec.perfumer);
    if (rec.releaseYear) bits.push(rec.releaseYear);
    if (rec.supplier) bits.push(rec.supplier);
    if (rec.extractType) bits.push(rec.extractType);
    if (rec.description) bits.push(rec.description);
    if (rec.summary) bits.push(rec.summary);
    if (rec.history) bits.push(rec.history);
    if (rec.notes) bits.push(rec.notes);
    if (rec.practice) bits.push(rec.practice);
    if (rec.target) bits.push(rec.target);
    if (rec.core) bits.push(rec.core);
    if (rec.officialNotes) bits.push(...(rec.officialNotes.top || []), ...(rec.officialNotes.heart || []), ...(rec.officialNotes.base || []));
    if (rec.body) bits.push(...rec.body);
    if (rec.keyPoints) bits.push(...rec.keyPoints);
    if (rec.subfamilies) rec.subfamilies.forEach((sf) => bits.push(sf.nameZh, sf.nameEn, sf.core));
    if (rec.combinations) bits.push(...rec.combinations);
    return norm(bits.filter(Boolean).join(' · '));
  }
  const SEARCH_INDEX = [];
  TYPE_ORDER.forEach((type) => {
    COLLECTIONS[type].forEach((rec) => {
      SEARCH_INDEX.push({
        type, id: rec.id, rec,
        name: recordName(rec),
        en: recordEn(rec),
        subtitle: searchSubtitle(rec, type),
        text: buildSearchText(rec, type),
        nameNorm: norm(recordName(rec)),
        enNorm: norm(recordEn(rec)),
      });
    });
  });
  function searchSubtitle(rec, type) {
    if (type === 'material') return [rec.scientificName, rec.category, rec.family].filter(Boolean).join(' · ');
    if (type === 'extract') {
      const mat = findAny(rec.materialId);
      return [mat ? recordName(mat.rec) : '', rec.extractType].filter(Boolean).join(' · ');
    }
    if (type === 'molecule') return [rec.formula, rec.cas ? 'CAS ' + rec.cas : '', rec.chemicalClass].filter(Boolean).join(' · ');
    if (type === 'ingredient') return [rec.supplier, rec.chemicalIdentity].filter(Boolean).join(' · ');
    if (type === 'family') return [rec.nameEn, (rec.subfamilies || []).length + ' 个子香调'].filter(Boolean).join(' · ');
    if (type === 'accord') return rec.nameEn || rec.target || '';
    if (type === 'perfume') return [rec.brand, rec.releaseYear, (rec.perfumer || []).join(' / ')].filter(Boolean).join(' · ');
    if (type === 'incense') return [rec.region, rec.era, rec.type].filter(Boolean).join(' · ');
    if (type === 'perfumery' || type === 'safety') return [rec.category, rec.titleEn].filter(Boolean).join(' · ');
    return rec.nameEn || '';
  }
  function searchAll(query) {
    const q = norm(query);
    if (!q) return [];
    const tokens = q.split(' ').filter(Boolean);
    const results = [];
    SEARCH_INDEX.forEach((item) => {
      let score = 0;
      if (item.nameNorm === q) score += 120;
      else if (item.nameNorm.startsWith(q)) score += 76;
      else if (item.nameNorm.includes(q)) score += 58;
      if (item.enNorm === q) score += 100;
      else if (item.enNorm.startsWith(q)) score += 62;
      else if (item.enNorm.includes(q)) score += 42;
      if (item.text.includes(q)) score += 28;
      let tokenHits = 0;
      tokens.forEach((t) => {
        if (item.text.includes(t)) { tokenHits += 1; score += 12; }
      });
      if (tokens.length > 1 && tokenHits < tokens.length) score -= 20;
      if (score > 0) results.push({ item, score });
    });
    results.sort((a, b) => b.score - a.score || a.item.name.localeCompare(b.item.name, 'zh'));
    return results.slice(0, 70);
  }
  function highlight(text, query) {
    const raw = String(text);
    const q = String(query || '').trim();
    if (!q) return esc(raw);
    const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    try {
      return esc(raw).replace(new RegExp('(' + escaped.split(/\s+/).map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')', 'gi'), '<mark>$1</mark>');
    } catch (e) { return esc(raw); }
  }

  /* ========================================================================
     Search overlay
     ======================================================================== */
  let searchActiveIndex = -1;
  let searchLastFocus = null;
  const searchOverlay = $('#search-overlay');
  const searchInput = $('#search-overlay-input');
  const searchResultsEl = $('#search-results');

  function openSearch(initial) {
    if (!searchOverlay) return;
    searchLastFocus = document.activeElement;
    searchOverlay.hidden = false;
    document.body.classList.add('overlay-open');
    if (typeof initial === 'string') searchInput.value = initial;
    renderSearchResults(searchInput.value);
    setTimeout(() => { searchInput.focus(); searchInput.select(); }, 30);
  }
  function closeSearch() {
    if (!searchOverlay || searchOverlay.hidden) return;
    searchOverlay.hidden = true;
    document.body.classList.remove('overlay-open');
    if (searchLastFocus && searchLastFocus.focus) searchLastFocus.focus();
  }
  function renderSearchResults(query) {
    if (!searchResultsEl) return;
    const q = String(query || '').trim();
    searchActiveIndex = -1;
    if (!q) {
      const recent = readRecent();
      searchResultsEl.innerHTML = `
        <div class="search-group">
          <h3><span>快速入口</span><span>INDEX</span></h3>
          <div class="search-recent">
            ${TYPE_ORDER.slice(0, 7).map((type) => `<button type="button" data-search-jump="${attr(typePage(type))}">${esc(typeLabel(type))}</button>`).join('')}
            <button type="button" data-search-query="雨后森林">雨后森林</button>
            <button type="button" data-search-query="香草">香草</button>
            <button type="button" data-search-query="CAS 121-33-5">CAS 121-33-5</button>
          </div>
        </div>
        ${recent.length ? `<div class="search-group"><h3><span>最近查看</span><span>RECENT</span></h3>${recent.map((item) => {
          const hit = findAny(item);
          if (!hit) return '';
          return `<button class="search-result" type="button" data-open-type="${attr(hit.type)}" data-open-id="${attr(hit.rec.id)}" data-search-result data-page="${attr(typePage(hit.type))}">
            <span class="sr-main"><span class="sr-title">${esc(recordName(hit.rec))}</span><span class="sr-sub">${esc(typeLabel(hit.type))} · ${esc(searchSubtitle(hit.rec, hit.type))}</span></span>
            <span class="sr-arrow">↗</span></button>`;
        }).join('')}</div>` : ''}
        <div class="search-group">
          <h3><span>检索说明</span><span>HOW TO</span></h3>
          <p class="disclaimer">可检索中文名、英文名、别名、学名、CAS、品牌、调香师、文化地区与知识条目。输入 <b>/</b> 聚焦搜索，<b>Esc</b> 关闭，<b>Enter</b> 打开第一条结果。所有匹配均在本地完成。</p>
        </div>`;
      return;
    }
    const results = searchAll(q);
    if (!results.length) {
      searchResultsEl.innerHTML = `<div class="empty-state">没有找到“${esc(q)}”<small>试试更短的关键词、中文/英文名、学名、CAS 号，或从香调轮盘开始探索。</small></div>`;
      return;
    }
    const groups = {};
    results.forEach((r) => { (groups[r.item.type] = groups[r.item.type] || []).push(r); });
    let html = `<div class="search-help"><span>${results.length} 个相关条目</span><span><kbd>↑</kbd><kbd>↓</kbd> 选择</span><span><kbd>Enter</kbd> 打开</span><span><kbd>Esc</kbd> 关闭</span></div>`;
    let flatIndex = 0;
    TYPE_ORDER.forEach((type) => {
      if (!groups[type]) return;
      const list = groups[type].slice(0, 5);
      html += `<div class="search-group"><h3><span>${esc(typeLabel(type))}</span><span>${esc((TYPE_META[type] || {}).en || '')}</span></h3>`;
      list.forEach(({ item }) => {
        html += `<button class="search-result" type="button" data-open-type="${attr(item.type)}" data-open-id="${attr(item.id)}" data-search-result data-result-index="${flatIndex}" data-page="${attr(typePage(item.type))}">
          <span class="sr-main"><span class="sr-title">${highlight(item.name, q)}</span><span class="sr-sub">${esc(item.en)} ${item.en ? '· ' : ''}${esc(item.subtitle)}</span></span>
          <span class="sr-arrow">↗</span></button>`;
        flatIndex += 1;
      });
      html += '</div>';
    });
    searchResultsEl.innerHTML = html;
  }
  function moveSearchSelection(delta) {
    const items = $$('[data-search-result]', searchResultsEl);
    if (!items.length) return;
    searchActiveIndex = (searchActiveIndex + delta + items.length) % items.length;
    items.forEach((el, i) => el.classList.toggle('is-active', i === searchActiveIndex));
    items[searchActiveIndex].scrollIntoView({ block: 'nearest' });
  }
  function activateSearchSelection() {
    const items = $$('[data-search-result]', searchResultsEl);
    if (!items.length) return;
    const el = items[searchActiveIndex >= 0 ? searchActiveIndex : 0];
    if (el) el.click();
  }
  function readRecent() {
    try {
      const raw = localStorage.getItem('scentmap:recent:v1');
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.slice(0, 5) : [];
    } catch (e) { return []; }
  }
  function rememberRecent(id) {
    try {
      let arr = readRecent();
      arr = [id].concat(arr.filter((x) => x !== id)).slice(0, 8);
      localStorage.setItem('scentmap:recent:v1', JSON.stringify(arr));
    } catch (e) { /* ignore */ }
  }

  /* ========================================================================
     Drawer
     ======================================================================== */
  const drawer = $('#detail-drawer');
  const drawerOverlay = $('#drawer-overlay');
  const drawerContent = $('#drawer-content');
  let lastDrawerFocus = null;

  function openEntity(type, id, opts) {
    const rec = getEntity(type, id);
    if (!rec || !drawer) return;
    lastDrawerFocus = document.activeElement;
    rememberRecent(id);
    drawerContent.innerHTML = renderEntity(type, rec);
    drawerOverlay.hidden = false;
    requestAnimationFrame(() => {
      drawerOverlay.classList.add('is-open');
      drawer.classList.add('is-open');
    });
    document.body.classList.add('drawer-open');
    drawer.setAttribute('aria-hidden', 'false');
    const closeBtn = $('.drawer-close', drawer);
    if (closeBtn) setTimeout(() => closeBtn.focus(), 80);
    if (!opts || opts.push !== false) {
      const nextHash = '#' + encodeURIComponent(id);
      if (location.hash !== nextHash) { try { history.pushState({ detail: id }, '', nextHash); } catch (e) { /* file:// may restrict history */ } }
    }
    updateFavCount();
    bindDrawerActions();
  }
  function closeDrawer(opts) {
    if (!drawer || !drawer.classList.contains('is-open')) return;
    drawer.classList.remove('is-open');
    drawerOverlay.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
    setTimeout(() => {
      if (!drawer.classList.contains('is-open')) {
        drawerOverlay.hidden = true;
        drawerContent.innerHTML = '';
      }
    }, 430);
    if (!opts || opts.push !== false) {
      if (location.hash) { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) { /* ignore */ } }
    }
    if (lastDrawerFocus && lastDrawerFocus.focus) setTimeout(() => lastDrawerFocus.focus(), 60);
  }
  function bindDrawerActions() {
    const copy = $('[data-copy-link]', drawer);
    if (copy) {
      copy.addEventListener('click', () => {
        const url = location.href.split('#')[0] + '#' + encodeURIComponent(copy.dataset.copyLink);
        const done = () => toast('链接已复制');
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done).catch(() => fallbackCopy(url, done));
        else fallbackCopy(url, done);
      });
    }
  }
  function fallbackCopy(text, done) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); done();
    } catch (e) { toast('无法自动复制，请手动复制地址栏链接'); }
  }
  function openRelated(type, id) {
    if (getEntity(type, id)) {
      openEntity(type, id, { push: true });
    } else {
      window.location.href = typePage(type) + '#' + encodeURIComponent(id);
    }
  }
  function renderEntity(type, rec) {
    if (type === 'material') return renderMaterial(rec);
    if (type === 'extract') return renderExtract(rec);
    if (type === 'molecule') return renderMolecule(rec);
    if (type === 'ingredient') return renderIngredient(rec);
    if (type === 'family') return renderFamily(rec);
    if (type === 'accord') return renderAccord(rec);
    if (type === 'perfume') return renderPerfume(rec);
    if (type === 'incense') return renderIncense(rec);
    return renderKnowledge(type, rec);
  }
  function drawerHeader(type, rec, subtitle) {
    const active = isFav(type, rec.id);
    return `<div class="drawer-head">
      <div class="dh-meta"><span>${esc(typeLabel(type))}</span><span class="dot"></span><span>${esc(rec.id)}</span></div>
      <div class="dh-actions">
        <button class="icon-button drawer-fav ${active ? 'is-fav' : ''}" type="button" data-fav-toggle data-fav-type="${attr(type)}" data-fav-id="${attr(rec.id)}" aria-pressed="${active}" aria-label="${active ? '取消收藏' : '收藏'}">${active ? ICONS.bookmarkFill : ICONS.bookmark}</button>
        <button class="icon-button" type="button" data-copy-link="${attr(rec.id)}" aria-label="复制此条目链接">${ICONS.copy}</button>
        <button class="close-btn drawer-close" type="button" data-close-drawer aria-label="关闭详情">${ICONS.close}</button>
      </div>
    </div>`;
  }
  function drawerHeadline(type, rec, subtitle) {
    const en = recordEn(rec);
    return `<div class="drawer-eyebrow"><span>${esc((TYPE_META[type] || {}).en || '')}</span><span class="grade-pill">审核 ${esc((rec.audit && rec.audit.grade) || 'U')}</span></div>
      <h2 class="drawer-title" id="drawer-title">${esc(recordName(rec))}</h2>
      ${rec.scientificName ? `<div class="drawer-latin">${esc(rec.scientificName)}</div>` : ''}
      ${en ? `<div class="drawer-sub-en">${esc(en)}</div>` : ''}
      ${subtitle ? `<p class="drawer-tagline">${esc(subtitle)}</p>` : ''}`;
  }
  function factTable(rows) {
    return `<table class="fact-table"><tbody>${rows.filter(Boolean).map(([k, v]) => `<tr><th>${esc(k)}</th><td>${v == null || v === '' ? '未录入' : v}</td></tr>`).join('')}</tbody></table>`;
  }
  function section(title, html) {
    return html ? `<section class="drawer-section"><h3>${esc(title)}</h3>${html}</section>` : '';
  }
  function prose(text) { return text ? `<p>${esc(text)}</p>` : ''; }
  function listHtml(arr, className) {
    if (!arr || !arr.length) return '<p class="muted">未录入</p>';
    return `<ul${className ? ' class="' + attr(className) + '"' : ''}>${arr.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
  }
  function tagsHtml(arr, extraClass) {
    if (!arr || !arr.length) return '<p class="muted">未录入</p>';
    return `<div class="tag-row">${arr.map((x) => `<span class="tag ${extraClass || ''}">${esc(x)}</span>`).join('')}</div>`;
  }
  function relationButtons(ids, fallbackType) {
    if (!ids || !ids.length) return '<p class="muted">未录入</p>';
    return `<div class="relation-grid">${ids.map((id) => {
      const hit = findAny(id);
      if (!hit) return '';
      const t = fallbackType || hit.type;
      return `<button class="relation-link" type="button" data-open-type="${attr(t)}" data-open-id="${attr(id)}">
        <span class="rl-main"><span class="rl-type">${esc(typeLabel(t))}</span><span class="rl-name">${esc(recordName(hit.rec))}</span></span>
        <span class="rl-arrow">↗</span></button>`;
    }).join('')}</div>`;
  }
  function sourceList(refs) {
    if (!refs || !refs.length) return '<p class="muted">未录入来源。</p>';
    return `<ul class="source-list">${refs.map((ref) => {
      const link = ref.url ? `<a href="${attr(ref.url)}" target="_blank" rel="noopener noreferrer">${esc(ref.name || ref.sourceId)}</a>` : `<span>${esc(ref.name || ref.sourceId)}</span>`;
      return `<li>${gradeBadge(ref.grade || 'U')}<div>${link}<span class="source-meta">${esc(ref.org || '')}${ref.org ? ' · ' : ''}${esc(ref.type || '')} · 最后核对 ${esc(ref.checked || '未注明')}</span>${ref.note ? `<span class="source-meta">${esc(ref.note)}</span>` : ''}</div></li>`;
    }).join('')}</ul>`;
  }
  function auditBlock(audit) {
    if (!audit) return '';
    const g = S.reliability[audit.grade] || S.reliability.U;
    return `<div class="audit-box"><div class="audit-top">${gradeBadge(audit.grade)}<strong>审核摘要 · ${esc(g.title)}</strong></div><p>${esc(audit.summary || '未提供审核摘要。')}</p></div>`;
  }
  function sourceSection(refs) {
    return section('来源与核实', sourceList(refs));
  }

  /* ---------------------------- material ---------------------------- */
  function renderMaterial(rec) {
    const extracts = (S.extracts || []).filter((e) => e.materialId === rec.id);
    const extractHtml = extracts.length ? `<div class="tag-row">${extracts.map((e) => `<button class="tag" type="button" data-open-type="extract" data-open-id="${attr(e.id)}">${esc(e.nameZh)}</button>`).join('')}</div>` : '<p class="muted">本页暂未单列提取物档案。原料本身不等于某一种提取物。</p>';
    const aroma = tagsHtml(rec.aroma, 'amber');
    return drawerHeader('material', rec) + `<div class="drawer-scroll" data-lenis-prevent><div class="drawer-body">
      ${drawerHeadline('material', rec, rec.description)}
      <div class="drawer-section"><div class="tag-row"><span class="tag olive">${esc(rec.category)}</span>${rec.subcategory ? `<span class="tag">${esc(rec.subcategory)}</span>` : ''}${(rec.fragranceFamilies || []).map((fid) => { const f = getEntity('family', fid); return f ? `<button class="tag solid" type="button" data-open-type="family" data-open-id="${attr(fid)}">${esc(f.nameZh)}</button>` : ''; }).join('')}</div></div>
      ${section('档案识别', factTable([
        ['学名', rec.scientificName ? `<i>${esc(rec.scientificName)}</i>` : '未录入'],
        ['科属', rec.family || '未录入'],
        ['来源类型', rec.sourceType || '未录入'],
        ['使用部位', rec.plantPart || '未录入'],
        ['主要产地', joinList(rec.origin)],
        ['采收', rec.harvestMethod || '未录入'],
        ['提取方式', joinList(rec.extractionMethods)],
        ['挥发性', rec.volatility || '未录入'],
        ['留香', rec.longevity || '未录入'],
        ['强度', rec.intensity || '未录入'],
      ]))}
      ${section('气味 · 品鉴参考', `<div class="tag-row">${(rec.aroma || []).map((a) => `<span class="tag amber">${esc(a)}</span>`).join('')}</div><div class="drawer-note mt-2">气味描述是主观品鉴与行业语言，不是化学分析结论；“天然”也不等于安全或完整。</div>`)}
      ${section('主要化学线索', `${tagsHtml(rec.majorConstituents, 'small')}<div class="mt-2">${relationButtons(rec.associatedMolecules, 'molecule')}</div>`)}
      ${section('提取物', extractHtml)}
      ${section('应用', tagsHtml(rec.applications))}
      ${section('历史用途', listHtml(rec.historicalUses))}
      ${section('文化背景', prose(rec.culturalBackground))}
      ${section('安全 · 过敏 · 限制', `${prose(rec.safety)}${rec.allergens && rec.allergens.length ? `<p class="small-caps mt-2">潜在过敏原 / 标签相关</p>${listHtml(rec.allergens)}` : ''}${rec.contraindications && rec.contraindications.length ? `<p class="small-caps mt-2">注意事项</p>${listHtml(rec.contraindications)}` : ''}<div class="drawer-note mt-2">安全信息为一般知识整理，不构成医疗建议；具体配方须按最新法规与专业评估。</div>`)}
      ${section('创作提示', prose(rec.creative))}
      ${section('关联', `<div class="stack-16"><div><p class="small-caps">和弦</p>${relationButtons(rec.relatedAccords, 'accord')}</div><div><p class="small-caps">香水作品</p>${relationButtons(rec.relatedPerfumes, 'perfume')}</div><div><p class="small-caps">相关原料</p>${relationButtons(rec.relatedMaterials, 'material')}</div></div>`)}
      ${rec.notes ? section('编辑注记', `<div class="drawer-note">${esc(rec.notes)}</div>`) : ''}
      ${section('审核摘要', auditBlock(rec.audit))}
      ${sourceSection(rec.references)}
    </div></div>`;
  }

  /* ---------------------------- extract ---------------------------- */
  function renderExtract(rec) {
    const mat = findAny(rec.materialId);
    return drawerHeader('extract', rec) + `<div class="drawer-scroll" data-lenis-prevent><div class="drawer-body">
      ${drawerHeadline('extract', rec, `${rec.extractType} · ${mat ? recordName(mat.rec) : '原料待核实'}`)}
      ${mat ? section('对应原料', relationButtons([rec.materialId], 'material')) : ''}
      ${section('提取档案', factTable([
        ['提取物类型', rec.extractType],
        ['提取方式', rec.extractionMethod],
        ['物理形态', rec.physicalForm],
        ['得率', rec.yield],
        ['挥发性/用途', joinList(rec.applications)],
      ]))}
      ${section('气味 · 品鉴参考', tagsHtml(rec.aromaProfile, 'amber'))}
      ${section('化学轮廓', tagsHtml(rec.chemicalProfile, 'small'))}
      ${section('应用', tagsHtml(rec.applications))}
      ${rec.specialty ? section('特殊属性', '<div class="drawer-note">此条属于“特殊/加工香料”层：可能是干馏、CO₂ 萃取、茶/咖啡提取、海藻/蜂蜜原精或焦油等。它不是普通精油，安全与法规状态必须按具体商品核对。</div>') : ''}
      ${section('安全与使用', `${prose(rec.safety)}<div class="drawer-note mt-2">精油、原精、浸膏、纯露、酊剂与油树脂不能互相替代。具体规格、溶剂与法规状态须查供应商与最新标准。</div>`)}
      ${rec.notes ? section('编辑注记', `<div class="drawer-note">${esc(rec.notes)}</div>`) : ''}
      ${section('审核摘要', auditBlock(rec.audit))}
      ${sourceSection(rec.references)}
    </div></div>`;
  }

  /* ---------------------------- molecule ---------------------------- */
  function renderMolecule(rec) {
    return drawerHeader('molecule', rec) + `<div class="drawer-scroll" data-lenis-prevent><div class="drawer-body">
      ${drawerHeadline('molecule', rec, rec.description)}
      ${rec.structure ? `<div class="drawer-section"><div class="structure-large"><img src="${attr(rec.structure)}" alt="${attr(rec.nameZh + ' 的二维化学结构图')}" loading="lazy"></div><div class="structure-credit">2D structure · PubChem CID ${esc(rec.cid || '')} · 结构图仅用于识别，不等于气味</div></div>` : ''}
      ${section('化学识别', factTable([
        ['IUPAC', rec.iupacName ? `<span class="mono">${esc(rec.iupacName)}</span>` : '未录入'],
        ['CAS', rec.cas || '未录入'],
        ['分子式', rec.formula ? `<span class="mono">${esc(rec.formula)}</span>` : '未录入'],
        ['分子量', rec.molecularWeight || '未录入'],
        ['化学类别', [rec.chemicalClass, rec.subcategory].filter(Boolean).join(' · ') || '未录入'],
        ['PubChem CID', rec.cid || '未录入'],
      ]))}
      ${section('气味 · 品鉴参考', `${tagsHtml(rec.odorDescription, 'amber')}<div class="fact-table mt-2"><table class="fact-table"><tbody><tr><th>气味阈值</th><td>${esc(rec.odorThreshold || '未录入')}</td></tr><tr><th>挥发性</th><td>${esc(rec.volatility || '未录入')}</td></tr><tr><th>蒸气压</th><td>${esc(rec.vaporPressure || '未录入')}</td></tr></tbody></table></div>`)}
      ${section('天然存在', listHtml(rec.naturalOccurrence))}
      ${section('生产/获取', prose(rec.productionMethod))}
      ${section('调香角色', tagsHtml(rec.perfumeryRole))}
      ${section('关联', `<div class="stack-16"><div><p class="small-caps">相关原料</p>${relationButtons(rec.relatedMaterials, 'material')}</div><div><p class="small-caps">相关分子</p>${relationButtons(rec.relatedMolecules, 'molecule')}</div><div><p class="small-caps">和弦</p>${relationButtons(rec.relatedAccords, 'accord')}</div><div><p class="small-caps">香水作品</p>${relationButtons(rec.relatedPerfumes, 'perfume')}</div></div>`)}
      ${section('安全与法规', `${prose(rec.safety)}${rec.allergens && rec.allergens.length ? `<p class="small-caps mt-2">过敏原 / 标签</p>${listHtml(rec.allergens)}` : ''}${rec.regulatoryNotes ? `<div class="drawer-note mt-2">${esc(rec.regulatoryNotes)}</div>` : ''}`)}
      ${rec.notes ? section('编辑注记', `<div class="drawer-note">${esc(rec.notes)}</div>`) : ''}
      ${section('审核摘要', auditBlock(rec.audit))}
      ${sourceSection(rec.references)}
    </div></div>`;
  }

  /* ---------------------------- ingredient ---------------------------- */
  function renderIngredient(rec) {
    const mol = findAny(rec.moleculeId);
    return drawerHeader('ingredient', rec) + `<div class="drawer-scroll" data-lenis-prevent><div class="drawer-body">
      ${drawerHeadline('ingredient', rec, rec.chemicalIdentity)}
      ${section('原料档案', factTable([
        ['名称', rec.nameEn],
        ['类别', rec.category || '商品基料'],
        ['供应商/商标', rec.supplier],
        ['化学身份', rec.chemicalIdentity],
        ['物理形态', rec.physicalForm],
        ['纯度', rec.purity],
        ['规格', rec.specs],
      ]))}
      ${mol ? section('对应分子记录', relationButtons([rec.moleculeId], 'molecule')) : ''}
      ${section('气味 · 品鉴参考', tagsHtml(rec.odorProfile, 'amber'))}
      ${section('调香角色', tagsHtml(rec.perfumeryRole))}
      ${section('使用说明', prose(rec.usageNote))}
      ${rec.safety ? section('安全与使用边界', prose(rec.safety)) : ''}
      ${section('注意', `<div class="drawer-note">${esc(rec.notes)}</div>`)}
      ${section('审核摘要', auditBlock(rec.audit))}
      ${sourceSection(rec.references)}
    </div></div>`;
  }

  /* ---------------------------- family ---------------------------- */
  function renderFamily(rec) {
    const subs = (rec.subfamilies || []).map((sf) => `<div class="scene-block"><h4>${esc(sf.nameZh)}</h4><p class="small-caps">${esc(sf.nameEn || '')}</p><p>${esc(sf.core || '')}</p>${sf.materials && sf.materials.length ? `<div class="tag-row mt-1">${sf.materials.map((id) => { const hit = findAny(id); return hit ? `<button class="tag" type="button" data-open-type="${attr(hit.type)}" data-open-id="${attr(id)}">${esc(recordName(hit.rec))}</button>` : ''; }).join('')}</div>` : ''}</div>`).join('');
    return drawerHeader('family', rec) + `<div class="drawer-scroll" data-lenis-prevent><div class="drawer-body">
      ${drawerHeadline('family', rec, rec.core)}
      ${section('气味目标', prose(rec.tagline))}
      ${section('代表原料', relationButtons(rec.materials, 'material'))}
      ${section('代表分子', relationButtons(rec.molecules, 'molecule'))}
      ${section('常见组合', tagsHtml(rec.combinations))}
      ${section('子香调', subs || '<p class="muted">未录入</p>')}
      ${section('历史演变', prose(rec.history))}
      ${section('经典作品', relationButtons(rec.classics, 'perfume'))}
      ${section('常见误解', `<div class="drawer-note">${esc(rec.misunderstanding)}</div>`)}
      ${section('创作场景', prose(rec.creative))}
      ${section('审核摘要', auditBlock(rec.audit))}
      ${sourceSection(rec.references)}
    </div></div>`;
  }

  /* ---------------------------- accord ---------------------------- */
  function renderAccord(rec) {
    return drawerHeader('accord', rec) + `<div class="drawer-scroll" data-lenis-prevent><div class="drawer-body">
      ${drawerHeadline('accord', rec, rec.description)}
      ${section('气味目标', `<p class="lead-p">${esc(rec.target)}</p>`)}
      ${section('材料方向', `<div class="stack-16"><div><p class="small-caps">天然/提取物</p>${relationButtons(rec.materials, 'material')}</div><div><p class="small-caps">分子</p>${relationButtons(rec.molecules, 'molecule')}</div></div>`)}
      ${section('构建思路', listHtml(rec.approach))}
      ${section('风格变体', tagsHtml(rec.styleVariants))}
      ${section('经典案例', relationButtons(rec.classics, 'perfume'))}
      ${section('限制与注意', listHtml(rec.limits))}
      <div class="drawer-note mt-2">和弦不是唯一标准配方。本页不给精确比例；任何实际配方都须经过稳定性、安全与法规评估。</div>
      ${section('审核摘要', auditBlock(rec.audit))}
      ${sourceSection(rec.references)}
    </div></div>`;
  }

  /* ---------------------------- perfume ---------------------------- */
  function renderPerfume(rec) {
    const brand = findAny(rec.brandId);
    const n = rec.officialNotes || { top: [], heart: [], base: [] };
    return drawerHeader('perfume', rec) + `<div class="drawer-scroll" data-lenis-prevent><div class="drawer-body">
      ${drawerHeadline('perfume', rec, rec.description)}
      ${section('档案', factTable([
        ['品牌', brand ? recordName(brand.rec) : (rec.brand || '未录入')],
        ['调香师', joinList(rec.perfumer)],
        ['发布年份', rec.releaseYear || '未录入'],
        ['浓度', rec.concentration || '未录入'],
        ['香调', (rec.fragranceFamilies || []).map((fid) => { const f = getEntity('family', fid); return f ? f.nameZh : fid; }).join(' · ') || '未录入'],
      ]))}
      ${section('公开香调表 · 非完整配方', `<div class="note-pyramid"><div class="note-tier"><span class="tier-label">TOP</span><span class="tier-notes">${joinList(n.top)}</span></div><div class="note-tier"><span class="tier-label">HEART</span><span class="tier-notes">${joinList(n.heart)}</span></div><div class="note-tier"><span class="tier-label">BASE</span><span class="tier-notes">${joinList(n.base)}</span></div></div><div class="drawer-note mt-2">公开香调表可能来自品牌/行业资料与营销材料，不等于商业配方；不同版本、批次与市场可能变化。</div>`)}
      ${section('历史', prose(rec.history))}
      ${section('创作提示', prose(rec.creative))}
      ${section('关联和弦', relationButtons(rec.accords, 'accord'))}
      ${section('相关原料', relationButtons(rec.relatedMaterials, 'material'))}
      ${section('相关分子', relationButtons(rec.relatedMolecules, 'molecule'))}
      ${section('审核摘要', auditBlock(rec.audit))}
      ${sourceSection(rec.references)}
    </div></div>`;
  }

  /* ---------------------------- incense ---------------------------- */
  function renderIncense(rec) {
    return drawerHeader('incense', rec) + `<div class="drawer-scroll" data-lenis-prevent><div class="drawer-body">
      ${drawerHeadline('incense', rec, rec.summary)}
      ${section('文化档案', factTable([
        ['地区', rec.region],
        ['文化语境', rec.culture],
        ['时期', rec.era],
        ['类型', rec.type],
      ]))}
      ${section('实践', prose(rec.practice))}
      ${section('香材与器物', `<div class="stack-16"><div><p class="small-caps">香材</p>${relationButtons(rec.materials, 'material')}</div><div><p class="small-caps">器物</p>${tagsHtml(rec.objects)}</div></div>`)}
      ${section('历史准确性', `<div class="drawer-note">${esc(rec.accuracy)}</div>`)}
      ${section('文化尊重提示', `<div class="scene-block"><p>${esc(rec.respectfulNote)}</p></div>`)}
      ${section('安全提示', `<div class="drawer-note">${esc(rec.safety)}</div>`)}
      ${rec.relatedPerfumes && rec.relatedPerfumes.length ? section('相关香水', relationButtons(rec.relatedPerfumes, 'perfume')) : ''}
      ${section('审核摘要', auditBlock(rec.audit))}
      ${sourceSection(rec.references)}
    </div></div>`;
  }

  /* ---------------------------- knowledge ---------------------------- */
  function renderKnowledge(type, rec) {
    return drawerHeader(type, rec) + `<div class="drawer-scroll" data-lenis-prevent><div class="drawer-body">
      ${drawerHeadline(type, rec, rec.summary)}
      ${type === 'safety' ? section('适用范围与核对', factTable([['适用范围', rec.region || '见条目'], ['最后核对', rec.lastVerified || '未注明'], ['版本提示', '法规/标准会更新；本页不复制具体限值，实际适用性须查原始文件。']])) : ''}
      ${section('知识正文', (rec.body || []).map((p) => `<p>${esc(p)}</p>`).join(''))}
      ${section('要点', listHtml(rec.keyPoints))}
      ${rec.relatedMaterials && rec.relatedMaterials.length ? section('相关原料', relationButtons(rec.relatedMaterials, 'material')) : ''}
      ${rec.relatedMolecules && rec.relatedMolecules.length ? section('相关分子', relationButtons(rec.relatedMolecules, 'molecule')) : ''}
      ${rec.relatedAccords && rec.relatedAccords.length ? section('相关和弦', relationButtons(rec.relatedAccords, 'accord')) : ''}
      ${rec.relatedPerfumes && rec.relatedPerfumes.length ? section('相关香水', relationButtons(rec.relatedPerfumes, 'perfume')) : ''}
      ${section('审核摘要', auditBlock(rec.audit))}
      ${sourceSection(rec.references)}
    </div></div>`;
  }

  /* ========================================================================
     Card renderers
     ======================================================================== */
  function favButton(type, id, extra) {
    const active = isFav(type, id);
    return `<button class="fav-btn ${active ? 'is-fav' : ''} ${extra || ''}" type="button" data-fav-toggle data-fav-type="${attr(type)}" data-fav-id="${attr(id)}" aria-pressed="${active}" aria-label="${active ? '取消收藏' : '收藏'}">${active ? ICONS.bookmarkFill : ICONS.bookmark}</button>`;
  }
  function materialCard(rec) {
    const familyTags = (rec.fragranceFamilies || []).slice(0, 2).map((fid) => {
      const f = getEntity('family', fid);
      return f ? `<span class="tag small">${esc(f.short || f.nameZh)}</span>` : '';
    }).join('');
    return `<article class="specimen-card" data-material-card>
      <a class="card-body-link" href="natural.html#${attr(rec.id)}" data-open-type="material" data-open-id="${attr(rec.id)}" aria-label="查看 ${attr(rec.nameZh)}">
        <div class="card-top"><span class="card-no">MAT · ${esc(rec.id.slice(0, 2).toUpperCase())} / ${esc(rec.category)}</span><span class="card-kind">${esc((rec.fragranceFamilies || []).slice(0, 1).map((fid) => { const f = getEntity('family', fid); return f ? f.short : fid; }).join('') || 'RAW')}</span></div>
        <h3>${esc(rec.nameZh)}<span class="latin">${esc(rec.scientificName || '')}</span></h3>
        <div class="card-en">${esc(rec.nameEn)}</div>
        <p class="card-desc">${esc(rec.description)}</p>
        <div class="tag-row">${(rec.aroma || []).slice(0, 3).map((a) => `<span class="tag amber small">${esc(a)}</span>`).join('')}${familyTags}</div>
      </a>
      <div class="card-foot">
        <label class="compare-check" title="加入原料比较"><input type="checkbox" data-compare-id="${attr(rec.id)}" ${selectedMaterials.has(rec.id) ? 'checked' : ''}> 比较</label>
        ${favButton('material', rec.id)}
      </div>
    </article>`;
  }
  function moleculeCard(rec) {
    return `<article class="specimen-card molecule-card">
      <a class="card-body-link" href="molecules.html#${attr(rec.id)}" data-open-type="molecule" data-open-id="${attr(rec.id)}" aria-label="查看 ${attr(rec.nameZh)}">
        <div class="card-top"><span class="card-no">MOL · CID ${esc(rec.cid || '—')}</span><span class="card-kind">${esc(rec.chemicalClass)}</span></div>
        <div class="structure-thumb"><img src="${attr(rec.structure)}" alt="${attr(rec.nameZh + ' 的二维结构式')}" loading="lazy"></div>
        <h3>${esc(rec.nameZh)}<span class="latin">${esc(rec.nameEn)}</span></h3>
        <div class="formula">${esc(rec.formula)} · MW ${esc(rec.molecularWeight)}</div>
        <div class="cas">CAS ${esc(rec.cas || '未录入')}</div>
        <div class="tag-row mt-1">${(rec.odorDescription || []).slice(0, 3).map((a) => `<span class="tag amber small">${esc(a)}</span>`).join('')}</div>
      </a>
      <div class="card-foot"><span class="mono">${esc(rec.volatility)}</span>${favButton('molecule', rec.id)}</div>
    </article>`;
  }
  function ingredientCard(rec) {
    const aux = rec.ingredientType === 'auxiliary' || rec.category === '辅助材料';
    return `<article class="specimen-card molecule-card">
      <a class="card-body-link" href="molecules.html#${attr(rec.id)}" data-open-type="ingredient" data-open-id="${attr(rec.id)}" aria-label="查看 ${attr(rec.nameZh)}">
        <div class="card-top"><span class="card-no">ING · ${aux ? 'AUXILIARY' : 'COMMERCIAL'}</span><span class="card-kind">${aux ? '辅助' : '商品'}</span></div>
        <h3>${esc(rec.nameZh)}</h3>
        <div class="card-en">${esc(rec.supplier)}</div>
        <p class="card-desc">${esc(rec.chemicalIdentity)}</p>
        <div class="tag-row mt-2">${(rec.odorProfile || []).slice(0, 3).map((a) => `<span class="tag small">${esc(a)}</span>`).join('')}</div>
      </a>
      <div class="card-foot"><span class="mono">商品名 ≠ 化学名</span>${favButton('ingredient', rec.id)}</div>
    </article>`;
  }
  function extractCard(rec) {
    const mat = findAny(rec.materialId);
    return `<article class="specimen-card extract-card">
      <a class="card-body-link" href="natural.html#${attr(rec.id)}" data-open-type="extract" data-open-id="${attr(rec.id)}" aria-label="查看 ${attr(rec.nameZh)}">
        <div class="card-top"><span class="card-no">SPECIAL · ${esc(rec.extractType)}</span><span class="card-kind">加工原料</span></div>
        <h3>${esc(rec.nameZh)}<span class="latin">${esc(rec.nameEn)}</span></h3>
        <div class="card-en">${mat ? '对应原料：' + esc(recordName(mat.rec)) : '原料待核实'}</div>
        <p class="card-desc">${esc((rec.aromaProfile || []).join(' · '))}</p>
        <div class="tag-row">${(rec.applications || []).slice(0, 3).map((a) => `<span class="tag small">${esc(a)}</span>`).join('')}<span class="tag amber small">SPECIALTY</span></div>
      </a>
      <div class="card-foot"><span class="mono">${esc(rec.extractType)}</span>${favButton('extract', rec.id)}</div>
    </article>`;
  }
  function perfumeCard(rec) {
    const fams = (rec.fragranceFamilies || []).slice(0, 2).map((fid) => { const f = getEntity('family', fid); return f ? f.short : fid; }).join(' · ');
    return `<article class="specimen-card perfume-card">
      <a class="card-body-link" href="perfume.html#${attr(rec.id)}" data-open-type="perfume" data-open-id="${attr(rec.id)}" aria-label="查看 ${attr(rec.nameZh)}">
        <div class="card-top"><span class="year-stamp">${esc(rec.releaseYear || '—')}</span><span class="card-kind">${esc(fams || 'ARCHIVE')}</span></div>
        <div class="brand-line">${esc(rec.brand)}</div>
        <h3>${esc(rec.nameZh)}<span class="latin">${esc(rec.nameEn)}</span></h3>
        <div class="perfumer-line">${esc((rec.perfumer || []).join(' / '))}</div>
        <dl class="note-peek"><dt>TOP</dt><dd>${esc((rec.officialNotes.top || []).slice(0, 4).join(' · '))}</dd><dt>BASE</dt><dd>${esc((rec.officialNotes.base || []).slice(0, 4).join(' · '))}</dd></dl>
      </a>
      <div class="card-foot"><span class="mono">公开香调 · 非完整配方</span>${favButton('perfume', rec.id)}</div>
    </article>`;
  }
  function incenseCard(rec) {
    return `<article class="specimen-card incense-card">
      <a class="card-body-link" href="incense.html#${attr(rec.id)}" data-open-type="incense" data-open-id="${attr(rec.id)}" aria-label="查看 ${attr(rec.nameZh)}">
        <div class="card-top"><span class="museum-label">${esc(rec.type)}</span><span class="card-no">${esc(rec.region)}</span></div>
        <h3>${esc(rec.nameZh)}<span class="latin">${esc(rec.nameEn)}</span></h3>
        <div class="region-line">${esc(rec.era)} · ${esc(rec.culture)}</div>
        <p class="card-desc">${esc(rec.summary)}</p>
        <div class="tag-row">${(rec.materials || []).slice(0, 3).map((id) => { const hit = findAny(id); return hit ? `<span class="tag small">${esc(recordName(hit.rec))}</span>` : ''; }).join('')}</div>
      </a>
      <div class="card-foot"><span class="mono">文化实践 · 非装饰符号</span>${favButton('incense', rec.id)}</div>
    </article>`;
  }
  function knowledgeCard(type, rec, index) {
    return `<article class="specimen-card knowledge-card">
      <a class="card-body-link" href="${attr(typePage(type))}#${attr(rec.id)}" data-open-type="${attr(type)}" data-open-id="${attr(rec.id)}" aria-label="查看 ${attr(rec.title)}">
        <div class="card-top"><span class="card-no">${esc((TYPE_META[type] || {}).en || '')} · ${String(index + 1).padStart(2, '0')}</span><span class="card-kind">${esc(rec.category)}</span></div>
        <div class="k-index">${String(index + 1).padStart(2, '0')}</div>
        <h3>${esc(rec.title)}</h3>
        <div class="k-en">${esc(rec.titleEn)}</div>
        <p class="k-summary">${esc(rec.summary)}</p>
      </a>
      <div class="card-foot"><span class="k-meta">${gradeBadge((rec.audit && rec.audit.grade) || 'U', true)}</span>${favButton(type, rec.id)}</div>
    </article>`;
  }
  function familyCard(rec) {
    return `<article class="family-card">
      <button type="button" data-open-type="family" data-open-id="${attr(rec.id)}" style="all:unset;cursor:pointer;display:block;width:100%">
        <span class="fam-index">CHAPTER ${esc(rec.index)}</span>
        <h3>${esc(rec.nameZh)}</h3>
        <div class="fam-en">${esc(rec.nameEn)} · ${esc((rec.subfamilies || []).length)} subfamilies</div>
        <p>${esc(rec.core)}</p>
      </button>
    </article>`;
  }
  function accordCard(rec) {
    return `<article class="family-card">
      <button type="button" data-open-type="accord" data-open-id="${attr(rec.id)}" style="all:unset;cursor:pointer;display:block;width:100%">
        <span class="fam-index">ACCORD · ${esc(rec.materials.length)} MATERIALS</span>
        <h3>${esc(rec.nameZh)}</h3>
        <div class="fam-en">${esc(rec.nameEn)}</div>
        <p>${esc(rec.target)}</p>
      </button>
    </article>`;
  }
  function emptyState(text, hint) {
    return `<div class="empty-state">${esc(text)}<small>${esc(hint || '')}</small></div>`;
  }

  /* ========================================================================
     Material page
     ======================================================================== */
  const selectedMaterials = new Set();
  function initNatural() {
    const grid = $('#material-grid');
    if (!grid) return;
    const all = S.materials;
    const cats = ['全部'].concat(Array.from(new Set(all.map((m) => m.category))));
    let q = '', cat = '全部';
    const filters = $('#material-filters');
    const counts = Object.fromEntries(cats.map((c) => [c, c === '全部' ? all.length : all.filter((m) => m.category === c).length]));
    filters.innerHTML = cats.map((c) => `<button class="filter-chip" type="button" data-cat="${attr(c)}" aria-pressed="${c === '全部'}">${esc(c)}<span class="chip-count">${counts[c]}</span></button>`).join('');
    const render = () => {
      const query = norm(q);
      const list = all.filter((m) => {
        if (cat !== '全部' && m.category !== cat) return false;
        if (!query) return true;
        return norm([m.nameZh, m.nameEn, m.scientificName, m.aliases.join(' '), m.category, m.aroma.join(' '), m.majorConstituents.join(' '), m.description].join(' ')).includes(query);
      });
      grid.innerHTML = list.length ? list.map(materialCard).join('') : emptyState('这一分类下没有匹配的原料', '尝试清除筛选或换一个关键词。');
      const count = $('#material-count');
      if (count) count.textContent = list.length + ' / ' + all.length + ' 条';
      updateFavCount();
      syncCompareChecks();
    };
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-cat]');
      if (!btn) return;
      cat = btn.dataset.cat;
      $$('.filter-chip', filters).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      render();
    });
    const specialtyGrid = $('#specialty-grid');
    if (specialtyGrid) {
      const specialty = S.extracts.filter((e) => e.specialty);
      specialtyGrid.innerHTML = specialty.map(extractCard).join('');
      const specialtyCount = $('#specialty-count');
      if (specialtyCount) specialtyCount.textContent = specialty.length + ' / ' + specialty.length + ' 条';
    }
    const search = $('#material-search');
    if (search) search.addEventListener('input', () => { q = search.value; render(); });
    grid.addEventListener('change', (e) => {
      const cb = e.target.closest('[data-compare-id]');
      if (cb) toggleCompare(cb.dataset.compareId, cb.checked, cb);
    });
    setCompareTrayHandlers();
    render();
  }
  function syncCompareChecks() {
    $$('[data-compare-id]').forEach((cb) => { cb.checked = selectedMaterials.has(cb.dataset.compareId); });
  }
  function toggleCompare(id, checked, cb) {
    if (checked) {
      if (selectedMaterials.size >= 3) {
        toast('最多比较 3 种原料');
        if (cb) cb.checked = false;
        return;
      }
      selectedMaterials.add(id);
    } else {
      selectedMaterials.delete(id);
    }
    renderCompareTray();
    syncCompareChecks();
  }
  function renderCompareTray() {
    const tray = $('#compare-tray');
    if (!tray) return;
    const items = Array.from(selectedMaterials).map((id) => findAny(id)).filter(Boolean);
    tray.classList.toggle('is-visible', items.length > 0);
    const itemsEl = $('#compare-items');
    if (itemsEl) {
      itemsEl.innerHTML = items.length
        ? `<span class="ct-label">比较中</span>${items.map((h) => `<span class="tag">${esc(recordName(h.rec))}</span>`).join('')}`
        : '<span class="ct-label">选择 2–3 种原料进行比较</span>';
    }
    const open = $('#compare-open');
    if (open) open.disabled = items.length < 2;
  }
  function setCompareTrayHandlers() {
    const open = $('#compare-open');
    const clear = $('#compare-clear');
    if (open && !open.dataset.bound) {
      open.dataset.bound = '1';
      open.addEventListener('click', openCompareModal);
    }
    if (clear && !clear.dataset.bound) {
      clear.dataset.bound = '1';
      clear.addEventListener('click', () => {
        selectedMaterials.clear(); renderCompareTray(); syncCompareChecks();
      });
    }
  }
  function openCompareModal() {
    const modal = $('#compare-modal');
    const content = $('#compare-content');
    if (!modal || !content) return;
    const items = Array.from(selectedMaterials).map((id) => findAny(id)).filter(Boolean);
    if (items.length < 2) { toast('请至少选择 2 种原料'); return; }
    const names = items.map((h) => h.rec);
    let rows = [
      ['中文名', (rec) => `<b>${esc(rec.nameZh)}</b>`],
      ['英文名', (rec) => esc(rec.nameEn)],
      ['学名', (rec) => `<i>${esc(rec.scientificName || '未录入')}</i>`],
      ['分类', (rec) => esc([rec.category, rec.subcategory].filter(Boolean).join(' · '))],
      ['来源/科/部位', (rec) => esc([rec.sourceType, rec.family, rec.plantPart].filter(Boolean).join(' · '))],
      ['产地', (rec) => esc((rec.origin || []).join('、') || '未录入')],
      ['提取方式', (rec) => esc((rec.extractionMethods || []).join('、') || '未录入')],
      ['提取物档案', (rec) => {
        const ex = S.extracts.filter((e) => e.materialId === rec.id).map((e) => e.nameZh);
        return ex.length ? esc(ex.join('、')) : '— 未单列';
      }],
      ['主要成分', (rec) => esc((rec.majorConstituents || []).join('、') || '未录入')],
      ['气味（品鉴参考）', (rec) => esc((rec.aroma || []).join('、') || '未录入')],
      ['香调', (rec) => esc((rec.fragranceFamilies || []).map((fid) => { const f = getEntity('family', fid); return f ? f.nameZh : fid; }).join('、') || '未录入')],
      ['挥发性', (rec) => esc(rec.volatility || '未录入')],
      ['留香', (rec) => esc(rec.longevity || '未录入')],
      ['强度', (rec) => esc(rec.intensity || '未录入')],
      ['应用', (rec) => esc((rec.applications || []).join('、') || '未录入')],
      ['安全', (rec) => esc(rec.safety || '未录入')],
      ['过敏原', (rec) => esc((rec.allergens || []).join('、') || '未录入')],
      ['审核', (rec) => gradeBadge((rec.audit && rec.audit.grade) || 'U', true)],
    ];
    content.innerHTML = `<div class="compare-table-wrap"><table class="compare-table"><thead><tr><th>字段</th>${names.map((rec) => `<th>${esc(rec.nameZh)}<small>${esc(rec.nameEn)}</small></th>`).join('')}</tr></thead><tbody>${rows.map(([label, fn]) => `<tr><th>${esc(label)}</th>${names.map((rec) => `<td>${fn(rec)}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="disclaimer">空白/未录入项不会被推测填充。比较只基于已录入字段，不代表完整成分、安全性或质量评价。数据可能随版本更新。</p>`;
    openModal('compare-modal');
  }

  /* ========================================================================
     Molecules page
     ======================================================================== */
  function initMolecules() {
    const grid = $('#molecule-grid');
    if (!grid) return;
    const all = S.molecules;
    let q = '', cls = '全部';
    const classes = ['全部'].concat(Array.from(new Set(all.map((m) => m.chemicalClass))));
    const filters = $('#molecule-filters');
    filters.innerHTML = classes.map((c) => `<button class="filter-chip" type="button" data-class="${attr(c)}" aria-pressed="${c === '全部'}">${esc(c)}${c === '全部' ? '' : `<span class="chip-count">${all.filter((m) => m.chemicalClass === c).length}</span>`}</button>`).join('');
    const render = () => {
      const query = norm(q);
      const list = all.filter((m) => {
        if (cls !== '全部' && m.chemicalClass !== cls) return false;
        if (!query) return true;
        return norm([m.nameZh, m.nameEn, m.iupacName, m.cas, m.synonyms.join(' '), m.chemicalClass, m.odorDescription.join(' '), m.naturalOccurrence.join(' '), m.description].join(' ')).includes(query);
      });
      grid.innerHTML = list.length ? list.map(moleculeCard).join('') : emptyState('没有匹配的分子', '试试中文名、英文名、CAS 或化学类别。');
      const count = $('#molecule-count'); if (count) count.textContent = list.length + ' / ' + all.length + ' 条';
      updateFavCount();
    };
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-class]'); if (!btn) return;
      cls = btn.dataset.class;
      $$('.filter-chip', filters).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      render();
    });
    const search = $('#molecule-search'); if (search) search.addEventListener('input', () => { q = search.value; render(); });
    const ingGrid = $('#ingredient-grid');
    if (ingGrid) ingGrid.innerHTML = S.ingredients.map(ingredientCard).join('');
    render(); updateFavCount();
  }

  /* ========================================================================
     Perfume page
     ======================================================================== */
  function initPerfume() {
    const grid = $('#perfume-grid');
    if (!grid) return;
    const all = S.perfumes;
    const brands = Array.from(new Set(all.map((p) => p.brand))).sort();
    const perfumers = Array.from(new Set(all.flatMap((p) => p.perfumer || []))).sort();
    const familyOptions = S.families.map((f) => [f.id, f.nameZh]);
    const brandSel = $('#filter-brand'), perfumerSel = $('#filter-perfumer'), familySel = $('#filter-family'), decadeSel = $('#filter-decade'), yearSel = $('#filter-year'), concSel = $('#filter-concentration');
    if (brandSel) brandSel.innerHTML = '<option value="">全部品牌</option>' + brands.map((b) => `<option value="${attr(b)}">${esc(b)}</option>`).join('');
    if (perfumerSel) perfumerSel.innerHTML = '<option value="">全部调香师</option>' + perfumers.map((p) => `<option value="${attr(p)}">${esc(p)}</option>`).join('');
    if (familySel) familySel.innerHTML = '<option value="">全部香调</option>' + familyOptions.map(([id, name]) => `<option value="${attr(id)}">${esc(name)}</option>`).join('');
    if (decadeSel) decadeSel.innerHTML = '<option value="">全部年代</option>' + ['1910', '1920', '1930', '1950', '1960', '1980', '1990', '2000', '2010'].map((d) => `<option value="${d}">${d}s</option>`).join('');
    if (yearSel) yearSel.innerHTML = '<option value="">全部年份</option>' + Array.from(new Set(all.map((p) => p.releaseYear).filter(Boolean))).sort().map((y) => `<option value="${attr(y)}">${esc(y)}</option>`).join('');
    if (concSel) concSel.innerHTML = '<option value="">全部浓度</option>' + ['Parfum', 'Eau de Parfum', 'Eau de Toilette', 'Eau de Cologne', 'Extrait'].map((c) => `<option value="${attr(c)}">${esc(c)}</option>`).join('');
    let q = '';
    const render = () => {
      const query = norm(q);
      const list = all.filter((p) => {
        if (brandSel && brandSel.value && p.brand !== brandSel.value) return false;
        if (perfumerSel && perfumerSel.value && !(p.perfumer || []).includes(perfumerSel.value)) return false;
        if (familySel && familySel.value && !(p.fragranceFamilies || []).includes(familySel.value)) return false;
        if (decadeSel && decadeSel.value) {
          const y = parseInt(p.releaseYear, 10);
          if (!(y >= parseInt(decadeSel.value, 10) && y < parseInt(decadeSel.value, 10) + 10)) return false;
        }
        if (yearSel && yearSel.value && String(p.releaseYear) !== yearSel.value) return false;
        if (concSel && concSel.value && !String(p.concentration || '').toLowerCase().includes(concSel.value.toLowerCase())) return false;
        if (!query) return true;
        return norm([p.nameZh, p.nameEn, p.brand, p.perfumer.join(' '), p.releaseYear, p.description, p.history, (p.officialNotes.top || []).join(' '), (p.officialNotes.heart || []).join(' '), (p.officialNotes.base || []).join(' ')].join(' ')).includes(query);
      });
      list.sort((a, b) => parseInt(a.releaseYear || 0, 10) - parseInt(b.releaseYear || 0, 10));
      grid.innerHTML = list.length ? list.map(perfumeCard).join('') : emptyState('档案中没有匹配的作品', '尝试清除品牌/年代筛选，或使用更短的关键词。');
      const count = $('#perfume-count'); if (count) count.textContent = list.length + ' / ' + all.length + ' 款';
      updateFavCount();
    };
    [brandSel, perfumerSel, familySel, decadeSel, yearSel, concSel].forEach((sel) => { if (sel) sel.addEventListener('change', render); });
    const search = $('#perfume-search'); if (search) search.addEventListener('input', () => { q = search.value; render(); });
    const brandIndex = $('#brand-index-grid');
    if (brandIndex) {
      brandIndex.innerHTML = S.brands.map((b) => `<article class="brand-index-card">
        <div class="bi-country"><span>${esc(b.country)}</span><span>EST. ${esc(b.founded)}</span></div>
        <h3>${esc(b.nameZh)}</h3>
        <div class="bi-en">${esc(b.nameEn)}</div>
        <div class="bi-style">${(b.style || []).slice(0, 3).map((x) => `<span class="tag small">${esc(x)}</span>`).join('')}</div>
        <div class="bi-meta">${esc(b.description)}</div>
        <button class="brand-filter-btn" type="button" data-brand-filter="${attr(b.nameEn)}">筛选该品牌作品 →</button>
      </article>`).join('');
      brandIndex.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-brand-filter]');
        if (!btn) return;
        if (brandSel) { brandSel.value = btn.dataset.brandFilter; render(); $('#perfume-grid').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    }
    render();
  }

  /* ========================================================================
     Perfumery page
     ======================================================================== */
  let wheelIdCounter = 0;
  function initPerfumery() {
    const famGrid = $('#family-grid');
    if (famGrid) famGrid.innerHTML = S.families.map(familyCard).join('');
    const accGrid = $('#accord-grid');
    if (accGrid) accGrid.innerHTML = S.accords.map(accordCard).join('');
    const kGrid = $('#perfumery-grid');
    if (kGrid) kGrid.innerHTML = S.perfumeryKnowledge.map((rec, i) => knowledgeCard('perfumery', rec, i)).join('');
    initWheel($('#scent-wheel'), $('#wheel-panel'));
    initAccordLab();
    updateFavCount();
  }
  function wheelSegmentPath(cx, cy, rOuter, rInner, a0, a1) {
    const rad = (deg) => (deg - 90) * Math.PI / 180;
    const p = (r, a) => [cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))];
    const [x1, y1] = p(rOuter, a0);
    const [x2, y2] = p(rOuter, a1);
    const [x3, y3] = p(rInner, a1);
    const [x4, y4] = p(rInner, a0);
    const large = a1 - a0 > 180 ? 1 : 0;
    return `M${x1} ${y1} A${rOuter} ${rOuter} 0 ${large} 1 ${x2} ${y2} L${x3} ${y3} A${rInner} ${rInner} 0 ${large} 0 ${x4} ${y4} Z`;
  }
  function initWheel(wrap, panel) {
    if (!wrap) return;
    const id = 'wheel-' + (++wheelIdCounter);
    const cx = 320, cy = 320, rOuter = 296, rInner = 111;
    const n = S.families.length;
    const step = 360 / n;
    const colors = ['rgba(53,75,60,.14)', 'rgba(181,138,84,.15)', 'rgba(96,104,74,.13)', 'rgba(148,116,90,.12)', 'rgba(53,75,60,.08)'];
    const segments = S.families.map((f, i) => {
      const a0 = i * step, a1 = (i + 1) * step;
      const mid = a0 + step / 2;
      const rad = (mid - 90) * Math.PI / 180;
      const lx = cx + 205 * Math.cos(rad);
      const ly = cy + 205 * Math.sin(rad);
      const nx = cx + 286 * Math.cos(rad);
      const ny = cy + 286 * Math.sin(rad);
      return `<g class="wheel-seg" data-family="${attr(f.id)}" tabindex="0" role="button" aria-label="${attr(f.nameZh + ' ' + f.nameEn)}" aria-pressed="false">
        <path d="${wheelSegmentPath(cx, cy, rOuter, rInner, a0 + 0.7, a1 - 0.7)}" fill="${colors[i % colors.length]}" stroke="#f5f1e8" stroke-width="1.4"/>
        <text class="wheel-num" x="${nx}" y="${ny}" text-anchor="middle">${esc(f.index)}</text>
        <text class="wheel-label" x="${lx}" y="${ly - 3}" text-anchor="middle">${esc(f.short || f.nameZh)}</text>
        <text class="wheel-label en" x="${lx}" y="${ly + 9}" text-anchor="middle">${esc(f.nameEn)}</text>
      </g>`;
    }).join('');
    wrap.innerHTML = `<div class="wheel-wrap">
      <svg class="wheel-svg" viewBox="0 0 640 640" role="group" aria-label="交互式香调轮盘">
        <circle cx="320" cy="320" r="309" fill="rgba(251,248,241,.28)" stroke="#d8d0c1" stroke-width="1"/>
        <circle cx="320" cy="320" r="101" fill="none" stroke="#d8d0c1" stroke-width="1"/>
        <circle cx="320" cy="320" r="299" fill="none" stroke="#bdb4a4" stroke-width=".7" stroke-dasharray="1 7"/>
        ${segments}
      </svg>
      <div class="wheel-center"><div><div class="wc-kicker">FAMILY WHEEL</div><strong id="${id}-center-name">花香调</strong><small id="${id}-center-en">Floral</small></div></div>
    </div>`;
    let selected = S.families[0].id;
    let subSelected = null;
    const setActive = (famId, push) => {
      selected = famId; subSelected = null;
      $$('.wheel-seg', wrap).forEach((g) => {
        const on = g.dataset.family === famId;
        g.classList.toggle('is-active', on);
        g.setAttribute('aria-pressed', String(on));
        const path = $('path', g);
        if (path) path.style.fill = on ? 'rgba(53,75,60,.86)' : '';
      });
      const fam = getEntity('family', famId);
      if (!fam) return;
      const centerName = $('#' + id + '-center-name'); if (centerName) centerName.textContent = fam.nameZh;
      const centerEn = $('#' + id + '-center-en'); if (centerEn) centerEn.textContent = fam.nameEn;
      if (panel) renderWheelPanel(panel, fam, subSelected);
    };
    wrap.addEventListener('click', (e) => {
      const g = e.target.closest('[data-family]'); if (!g) return;
      setActive(g.dataset.family, true);
    });
    wrap.addEventListener('keydown', (e) => {
      const g = e.target.closest('[data-family]');
      if (!g) return;
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(g.dataset.family, true); }
    });
    if (panel) {
      panel.addEventListener('click', (e) => {
        const sub = e.target.closest('[data-wheel-sub]');
        if (sub) {
          subSelected = sub.dataset.wheelSub;
          const fam = getEntity('family', selected);
          $$('.wheel-sub', panel).forEach((b) => b.setAttribute('aria-pressed', String(b === sub)));
          if (fam) renderWheelPanel(panel, fam, subSelected);
          return;
        }
        const famBtn = e.target.closest('[data-wheel-family]');
        if (famBtn) setActive(famBtn.dataset.wheelFamily, true);
      });
    }
    setActive(selected, false);
  }
  function renderWheelPanel(panel, fam, subId) {
    const subs = fam.subfamilies || [];
    const sub = subId ? subs.find((s) => s.id === subId) : null;
    const mats = sub ? sub.materials : fam.materials;
    const mols = sub ? sub.molecules : fam.molecules;
    panel.innerHTML = `<div class="wp-index">FAMILY ${esc(fam.index)} / ${esc(fam.nameEn.toUpperCase())}</div>
      <h3>${esc(sub ? sub.nameZh : fam.nameZh)}</h3>
      <div class="wp-en">${esc(sub ? sub.nameEn : fam.nameEn)} · ${esc(sub ? '子香调' : '主香调')}</div>
      <p class="wp-desc">${esc(sub ? sub.core : fam.core)}</p>
      <div class="wheel-sub-list">${subs.map((s) => `<button class="wheel-sub" type="button" data-wheel-sub="${attr(s.id)}" aria-pressed="${subSelected(s)}">${esc(s.nameZh)}</button>`).join('')}</div>
      <div class="wheel-represent"><div class="wr-label">代表原料 / MATERIALS</div><div class="tag-row">${mats.map((id) => { const hit = findAny(id); return hit ? `<button class="tag" type="button" data-open-type="${attr(hit.type)}" data-open-id="${attr(id)}">${esc(recordName(hit.rec))}</button>` : ''; }).join('') || '<span class="muted">未录入</span>'}</div></div>
      <div class="wheel-represent"><div class="wr-label">代表分子 / MOLECULES</div><div class="tag-row">${mols.map((id) => { const hit = findAny(id); return hit ? `<button class="tag" type="button" data-open-type="${attr(hit.type)}" data-open-id="${attr(id)}">${esc(recordName(hit.rec))}</button>` : ''; }).join('') || '<span class="muted">未录入</span>'}</div></div>
      <div class="mt-2"><button class="section-link" type="button" data-open-type="family" data-open-id="${attr(fam.id)}">查看完整香调档案 →</button></div>`;
    function subSelected(s) { return String(s.id === (sub ? subId : null)); }
  }

  /* ========================================================================
     Accord lab
     ======================================================================== */
  function initAccordLab() {
    const select = $('#lab-select');
    if (!select) return;
    select.innerHTML = '<option value="">选择一种天然原料…</option>' + S.materials.map((m) => `<option value="${attr(m.id)}">${esc(m.nameZh)} · ${esc(m.nameEn)}</option>`).join('');
    const selected = [];
    const addBtn = $('#lab-add'), clearBtn = $('#lab-clear'), chips = $('#lab-chips'), results = $('#lab-results');
    const render = () => {
      chips.innerHTML = selected.length ? selected.map((id) => {
        const hit = findAny(id);
        return `<span class="lab-chip">${esc(recordName(hit.rec))}<button type="button" data-lab-remove="${attr(id)}" aria-label="移除">×</button></span>`;
      }).join('') : '<span class="muted">尚未选择材料。最多 6 种。</span>';
      if (!selected.length) {
        results.innerHTML = '<div class="lab-empty">选择 2 种以上原料，查看香调重叠、可能的和弦方向与需要留意的气味张力。<br><small>不是调香模拟器，不生成比例。</small></div>';
        return;
      }
      const recs = selected.map((id) => findAny(id).rec);
      const familyCounts = {};
      recs.forEach((r) => (r.fragranceFamilies || []).forEach((fid) => { familyCounts[fid] = (familyCounts[fid] || 0) + 1; }));
      const families = Object.entries(familyCounts).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
      const familyNames = families.map(([fid]) => { const f = getEntity('family', fid); return f ? f.nameZh : fid; });
      const relatedAccords = S.accords.map((a) => {
        const overlap = selected.filter((id) => a.materials.includes(id));
        return { a, overlap };
      }).filter((x) => x.overlap.length >= 1).sort((x, y) => y.overlap.length - x.overlap.length);
      const molecules = Array.from(new Set(recs.flatMap((r) => r.associatedMolecules || []))).slice(0, 12);
      const tensionPairs = [
        ['gourmand', 'smoky', '甜香与烟熏/树脂可能形成强对比，甜味过量会遮住烟熏。'],
        ['aquatic', 'leather', '水生的洁净感与皮革的动物/烟熏感容易互相拉扯，需中间材料过渡。'],
        ['citrus', 'gourmand', '柑橘的明亮挥发与厚重甜香可能产生“断层”，前调与后调需要桥接。'],
        ['floral', 'smoky', '白花/花香的甜与烟熏可能产生张力，也可能形成复杂的花香焚香。'],
        ['green', 'amber', '青绿与暖树脂的方向相反，少量对比可以清新，过量会互相削弱。'],
        ['musky', 'spicy', '麝香的贴肤与辛香的热感叠加时，注意整体强度与嗅觉疲劳。'],
      ];
      const tensions = tensionPairs.filter(([a, b]) => familyCounts[a] && familyCounts[b]);
      results.innerHTML = `<div class="lab-result-section"><h4>所选材料 · 各自气味与香调</h4><div class="stack-16">${recs.map((r) => `<div class="scene-block"><h4>${esc(r.nameZh)} <span class="mono" style="font-size:7px;color:var(--gray)">${esc(r.nameEn)}</span></h4><p>${esc((r.aroma || []).join(' · ') || '气味未录入')}</p><div class="tag-row">${(r.fragranceFamilies || []).map((fid) => { const f = getEntity('family', fid); return f ? `<span class="tag small">${esc(f.nameZh)}</span>` : ''; }).join('')}</div></div>`).join('')}</div></div>
      <div class="lab-result-section"><h4>香调分布 · 基于已录入标签</h4><div class="family-meter">${families.map(([fid, count]) => {
        const f = getEntity('family', fid);
        return `<div class="family-meter-row"><span>${esc(f ? f.nameZh : fid)}</span><span class="family-meter-bar"><i style="width:${Math.min(100, count / Math.max(1, recs.length) * 100)}%"></i></span><span class="fm-count">${count}</span></div>`;
      }).join('')}</div></div>
      <div class="lab-result-section"><h4>共同/相关分子</h4><div class="tag-row">${molecules.map((id) => { const hit = findAny(id); return hit ? `<button class="tag small" type="button" data-open-type="molecule" data-open-id="${attr(id)}">${esc(recordName(hit.rec))}</button>` : ''; }).join('') || '<span class="muted">未录入</span>'}</div></div>
      <div class="lab-result-section"><h4>可能的和弦方向</h4>${relatedAccords.length ? relatedAccords.slice(0, 5).map(({ a, overlap }) => `<button class="lab-suggestion" type="button" data-open-type="accord" data-open-id="${attr(a.id)}"><span class="ls-title">${esc(a.nameZh)} <span class="mono" style="font-size:8px;color:var(--gray)">${overlap.length} 种材料相交</span></span><span class="ls-reason">${esc(a.target)}</span></button>`).join('') : `<div class="lab-warning">没有直接匹配的已录入和弦。可以根据共同香调 ${esc(familyNames.slice(0, 2).join(' / ') || '未识别')} 继续探索，但不要把标签当成配方。</div>`}</div>
      <div class="lab-result-section"><h4>可能需要留意的张力</h4>${tensions.length ? tensions.map(([, , text]) => `<div class="lab-warning" style="margin-bottom:6px">${esc(text)}</div>`).join('') : '<p class="lab-note">当前材料组合未触发已录入的香调张力提示。这不代表一定和谐；真实配方仍需小样与稳定性/安全评估。</p>'}</div>
      <p class="lab-note">本工具只做知识关联与创作提示，不提供比例、不模拟化学稳定性，也不评估安全用量。</p>`;
    };
    const add = () => {
      const id = select.value;
      if (!id) return;
      if (selected.includes(id)) { toast('已经在材料列表中'); return; }
      if (selected.length >= 6) { toast('最多选择 6 种原料'); return; }
      selected.push(id);
      select.value = ''; render();
    };
    addBtn.addEventListener('click', add);
    select.addEventListener('change', () => { if (select.value) add(); });
    clearBtn.addEventListener('click', () => { selected.length = 0; render(); });
    chips.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-lab-remove]');
      if (!btn) return;
      const i = selected.indexOf(btn.dataset.labRemove);
      if (i >= 0) selected.splice(i, 1);
      render();
    });
    render();
  }

  /* ========================================================================
     Reverse scent search
     ======================================================================== */
  function initReverseSearch() {
    const input = $('#reverse-input');
    const go = $('#reverse-go');
    const chips = $('#scene-chips');
    const results = $('#scene-results');
    if (!input || !results) return;
    if (chips) {
      chips.innerHTML = S.scenes.slice(0, 8).map((s) => `<button class="scene-chip" type="button" data-scene="${attr(s.id)}">${esc(s.phrase)}</button>`).join('') + `<button class="scene-chip" type="button" data-reverse-random>随便一个 →</button>`;
      chips.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-scene]');
        if (btn) {
          const scene = S.scenes.find((s) => s.id === btn.dataset.scene);
          if (scene) { input.value = scene.phrase; showScene(scene); }
          return;
        }
        if (e.target.closest('[data-reverse-random]')) {
          const scene = S.scenes[Math.floor(Math.random() * S.scenes.length)];
          input.value = scene.phrase; showScene(scene);
        }
      });
    }
    const run = () => {
      const q = input.value.trim();
      if (!q) { results.innerHTML = '<div class="empty-state">先输入一个气味场景<small>例如：雨后的森林、旧书和纸张、海风、干净的皮肤。</small></div>'; return; }
      const scene = matchScene(q);
      if (scene) { showScene(scene, q); return; }
      const matches = searchAll(q).filter((r) => !['ingredient'].includes(r.item.type)).slice(0, 16);
      if (!matches.length) {
        results.innerHTML = `<div class="empty-state">暂时没有匹配“${esc(q)}”的思路<small>可以试试：潮湿的泥土、烟草与皮革、海风、蜂蜜与焦糖、雪松木柜。</small></div>`;
        return;
      }
      const groups = {};
      matches.forEach(({ item }) => { (groups[item.type] = groups[item.type] || []).push(item); });
      results.innerHTML = `<div class="scene-intro"><div class="scene-title">“${esc(q)}” 的相关资料</div><div class="scene-mood">LOCAL SEMANTIC MATCH · 不是气味还原</div><p>没有命中预设场景，但以下条目的名称、描述或标签包含相关线索。结果只是知识入口，不是配方建议。</p></div><div class="scene-groups">${TYPE_ORDER.filter((t) => groups[t]).map((t) => `<div class="scene-group"><h4>${esc(typeLabel(t))}</h4><div class="scene-links">${groups[t].slice(0, 5).map((item) => `<button class="scene-link" type="button" data-open-type="${attr(t)}" data-open-id="${attr(item.id)}"><span class="sl-name">${esc(item.name)}</span><span class="sl-type">${esc(item.subtitle)}</span></button>`).join('')}</div></div>`).join('')}</div><p class="disclaimer">本地语义匹配基于已录入文本与标签，不具备 AI 理解能力，也不声称能通过文字精确还原气味。请将结果视为创作参考。</p>`;
    };
    if (go) go.addEventListener('click', run);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); run(); } });
    results.innerHTML = '<div class="empty-state">输入一个主观气味场景，或点击上方示例<small>匹配会给出原料、分子、香调、和弦与香水，并解释关联理由。</small></div>';
  }
  function matchScene(query) {
    const q = norm(query);
    const qs = stripNorm(query);
    if (!q) return null;
    let best = null, bestScore = 0;
    S.scenes.forEach((scene) => {
      let score = 0;
      const phrases = [scene.phrase, ...(scene.aliases || [])];
      phrases.forEach((p) => {
        const np = norm(p), sp = stripNorm(p);
        if (np === q || sp === qs) score += 40;
        else if (q.includes(np) || np.includes(q)) score += 18;
        if (qs && (sp.includes(qs) || qs.includes(sp))) score += 10;
      });
      if (norm([scene.mood, scene.description, scene.reason].join(' ')).includes(q)) score += 12;
      if (score > bestScore) { bestScore = score; best = scene; }
    });
    return bestScore >= 10 ? best : null;
  }
  function showScene(scene, rawQuery) {
    const results = $('#scene-results');
    if (!results) return;
    const groups = [
      ['天然原料', scene.materialIds, 'material'],
      ['芳香分子', scene.moleculeIds, 'molecule'],
      ['香调', scene.familyIds, 'family'],
      ['香气和弦', scene.accordIds, 'accord'],
      ['香水作品', scene.perfumeIds, 'perfume'],
    ];
    results.innerHTML = `<div class="scene-intro"><div class="scene-title">${esc(scene.phrase)}</div><div class="scene-mood">${esc(scene.mood)} · SEMANTIC MATCH</div><p>${esc(scene.description)}</p></div>
      <div class="reason-box"><strong>为什么推荐</strong>${esc(scene.reason)}</div>
      <div class="scene-groups">${groups.map(([label, ids, type]) => {
        if (!ids || !ids.length) return '';
        return `<div class="scene-group"><h4>${esc(label)}</h4><div class="scene-links">${ids.map((id) => {
          const hit = findAny(id);
          if (!hit) return '';
          return `<button class="scene-link" type="button" data-open-type="${attr(hit.type)}" data-open-id="${attr(id)}"><span class="sl-name">${esc(recordName(hit.rec))}</span><span class="sl-type">${esc(typeLabel(hit.type))} · 关联理由见上</span></button>`;
        }).join('')}</div></div>`;
      }).join('')}</div>
      <p class="disclaimer">${esc(scene.caution)} “${esc(rawQuery || scene.phrase)}” 的匹配基于标签、同义词与关联数据，不是 AI 气味还原，也不代表这些材料可以按任意比例混合。实际调香需专业评估。</p>`;
  }

  /* ========================================================================
     Incense / Science / Safety pages
     ======================================================================== */
  function initIncense() {
    const grid = $('#incense-grid'); if (!grid) return;
    const all = S.incense;
    let region = '全部', q = '';
    const regions = ['全部', '中国', '日本', '阿拉伯半岛/海湾地区', '南亚/中东', '中东/南亚/地中海', '欧洲', '南亚/印度', '地中海/北非', '北美洲/中美洲/南美洲'];
    const filters = $('#incense-filters');
    if (filters) {
      filters.innerHTML = ['全部'].concat(Array.from(new Set(all.map((i) => i.region)))).map((r) => `<button class="filter-chip" type="button" data-region="${attr(r)}" aria-pressed="${r === '全部'}">${esc(r)}</button>`).join('');
      filters.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-region]'); if (!btn) return;
        region = btn.dataset.region;
        $$('.filter-chip', filters).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        render();
      });
    }
    const render = () => {
      const query = norm(q);
      const list = all.filter((i) => {
        if (region !== '全部' && i.region !== region) return false;
        if (!query) return true;
        return norm([i.nameZh, i.nameEn, i.region, i.era, i.summary, i.practice, i.accuracy, i.respectfulNote].join(' ')).includes(query);
      });
      grid.innerHTML = list.length ? list.map(incenseCard).join('') : emptyState('没有匹配的文化条目', '尝试其他地区或关键词。');
      const count = $('#incense-count'); if (count) count.textContent = list.length + ' / ' + all.length + ' 条';
      updateFavCount();
    };
    const search = $('#incense-search'); if (search) search.addEventListener('input', () => { q = search.value; render(); });
    render();
  }
  function initSafety() {
    const grid = $('#safety-grid'); if (!grid) return;
    const all = S.safety;
    let category = '全部', q = '';
    const cats = ['全部'].concat(Array.from(new Set(all.map((x) => x.category))));
    const filters = $('#safety-filters');
    if (filters) {
      filters.innerHTML = cats.map((c) => `<button class="filter-chip" type="button" data-category="${attr(c)}" aria-pressed="${c === '全部'}">${esc(c)}</button>`).join('');
      filters.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-category]'); if (!btn) return;
        category = btn.dataset.category;
        $$('.filter-chip', filters).forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
        render();
      });
    }
    const render = () => {
      const query = norm(q);
      const list = all.filter((x) => {
        if (category !== '全部' && x.category !== category) return false;
        if (!query) return true;
        return norm([x.title, x.titleEn, x.category, x.summary, x.body.join(' '), x.keyPoints.join(' ')].join(' ')).includes(query);
      });
      grid.innerHTML = list.length ? list.map((rec, i) => knowledgeCard('safety', rec, i)).join('') : emptyState('没有匹配的安全条目', '试试其他分类或关键词。');
      const count = $('#safety-count'); if (count) count.textContent = list.length + ' / ' + all.length + ' 条';
      updateFavCount();
    };
    const search = $('#safety-search'); if (search) search.addEventListener('input', () => { q = search.value; render(); });
    render();
  }

  /* ========================================================================
     Home
     ======================================================================== */
  function initHome() {
    const statEl = $('#home-stats');
    if (statEl) {
      const stats = [
        ['天然原料', S.materials.length, 'natural.html'],
        ['芳香分子', S.molecules.length, 'molecules.html'],
        ['香水作品', S.perfumes.length, 'perfume.html'],
        ['香调', S.families.length, 'perfumery.html'],
        ['香文化', S.incense.length, 'incense.html'],
        ['知识条目', S.safety.length + S.perfumeryKnowledge.length, 'safety.html'],
      ];
      statEl.innerHTML = stats.map(([l, n, href]) => `<div class="stat"><a href="${attr(href)}"><span class="num">${n}</span><span class="lbl">${esc(l)}</span></a></div>`).join('');
    }
    const featured = $('#home-featured');
    if (featured) {
      const material = S.materials.find((m) => m.id === 'rose-damascena');
      const molecule = S.molecules.find((m) => m.id === 'geosmin');
      const perfume = S.perfumes.find((p) => p.id === 'shalimar');
      featured.innerHTML = `<div class="home-feature-grid">
        <div class="feature-panel"><div class="fp-label">THIS ISSUE / MATERIAL</div><h3>${esc(material.nameZh)}</h3><p>${esc(material.description)}</p><button class="section-link" type="button" data-open-type="material" data-open-id="${attr(material.id)}">打开标本档案 →</button></div>
        <div class="stack-16">
          <div class="feature-panel"><div class="fp-label">MOLECULE</div><h3>${esc(molecule.nameZh)}</h3><p>${esc(molecule.description)}</p><button class="section-link" type="button" data-open-type="molecule" data-open-id="${attr(molecule.id)}">查看分子 →</button></div>
          <div class="feature-panel"><div class="fp-label">PERFUME</div><h3>${esc(perfume.nameZh)}</h3><p>${esc(perfume.description)}</p><button class="section-link" type="button" data-open-type="perfume" data-open-id="${attr(perfume.id)}">打开作品档案 →</button></div>
        </div>
      </div>`;
    }
    const homeFamily = $('#home-family-grid');
    if (homeFamily) homeFamily.innerHTML = S.families.slice(0, 8).map(familyCard).join('');
    initWheel($('#home-wheel'), $('#home-wheel-panel'));
    initReverseSearch();
    updateFavCount();
  }

  /* ========================================================================
     Modals / random / method / favorites
     ======================================================================== */
  function openModal(id) {
    const modal = typeof id === 'string' ? document.getElementById(id) : id;
    if (!modal) return;
    modal.hidden = false;
    document.body.classList.add('modal-open');
    const focusTarget = $('button, [href], input, select, textarea', modal);
    if (focusTarget) setTimeout(() => focusTarget.focus(), 40);
  }
  function closeModal(modal) {
    if (!modal) return;
    modal.hidden = true;
    if (!$$('.modal-overlay:not([hidden])').length) document.body.classList.remove('modal-open');
  }
  function renderMethod() {
    const body = $('#method-content');
    if (!body) return;
    const grades = Object.values(S.reliability).map((g) => `<div class="scene-block"><h4>${esc(g.label)} · ${esc(g.title)}</h4><p>${esc(g.desc)}</p></div>`).join('');
    const sources = Object.values(S.sources).filter((s) => s.id !== 'brand').slice(0, 12).map((s) => `<li><a href="${attr(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.name)}</a> · ${esc(s.org)}</li>`).join('');
    body.innerHTML = `<p class="lead-p">${esc(S.methodology.intro)}</p>
      <div class="section-head" style="margin-top:24px"><div><div class="section-index">EVIDENCE GRADES</div><h2>可信度制度</h2></div></div>
      <div class="scene-groups">${grades}</div>
      <h3>编辑规则</h3><ul>${S.methodology.rules.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
      <h3>主要参考起点</h3><ul>${sources}</ul>
      <div class="audit-box"><div class="audit-top"><span class="badge grade-B">B</span><strong>最后核对</strong></div><p>${esc(S.methodology.updated)}。外部资料会更新；法规、标准与商品规格须回查原始来源。</p></div>
      <p class="disclaimer">香谱是由编辑整理的知识网站，不是监管机构、医疗机构或调香实验室。网站内容不构成医疗、毒理、配方或合规建议。分子二维结构图来自 PubChem（NCBI/NLM）对应 CID 的公开记录，仅用于化学识别；图片不表示气味或配方。</p>`;
  }
  function renderFavoritesModal() {
    const body = $('#favorites-content');
    if (!body) return;
    const items = favorites.map((key) => { const [type, ...rest] = key.split(':'); const id = rest.join(':'); const hit = findAny(id); return hit ? { type, hit } : null; }).filter(Boolean);
    if (!items.length) {
      body.innerHTML = '<div class="empty-state">还没有收藏<small>在原料、分子、香水或知识条目的星标按钮上点击，即可保存在本机浏览器。</small></div>';
      return;
    }
    const groups = {};
    items.forEach(({ type, hit }) => { (groups[type] = groups[type] || []).push(hit); });
    body.innerHTML = TYPE_ORDER.filter((t) => groups[t]).map((t) => `<div class="scene-group"><h4>${esc(typeLabel(t))}</h4><div class="scene-links">${groups[t].map((hit) => `<button class="scene-link" type="button" data-open-type="${attr(hit.type)}" data-open-id="${attr(hit.rec.id)}"><span class="sl-name">${esc(recordName(hit.rec))}</span><span class="sl-type">${esc(searchSubtitle(hit.rec, hit.type))}</span></button>`).join('')}</div></div>`).join('');
  }
  function openRandom() {
    const pool = [];
    S.materials.forEach((r) => pool.push(['material', r]));
    S.extracts.forEach((r) => pool.push(['extract', r]));
    S.molecules.forEach((r) => pool.push(['molecule', r]));
    S.perfumes.forEach((r) => pool.push(['perfume', r]));
    S.incense.forEach((r) => pool.push(['incense', r]));
    S.perfumeryKnowledge.forEach((r) => pool.push(['perfumery', r]));
    S.safety.forEach((r) => pool.push(['safety', r]));
    const [type, rec] = pool[Math.floor(Math.random() * pool.length)];
    openEntity(type, rec.id, { push: true });
    toast('随机取样 · ' + typeLabel(type));
  }

  /* ========================================================================
     Global events
     ======================================================================== */
  function bindGlobal() {
    document.addEventListener('click', (e) => {
      const sr = e.target.closest('[data-search-result]');
      if (sr) {
        e.preventDefault();
        const type = sr.dataset.openType, id = sr.dataset.openId;
        const page = sr.dataset.page || typePage(type);
        const currentFile = (location.pathname.split('/').pop() || 'index.html');
        closeSearch();
        if (page && page !== currentFile) {
          window.location.href = page + '#' + encodeURIComponent(id);
        } else {
          openEntity(type, id, { push: true });
        }
        return;
      }
      const openBtn = e.target.closest('[data-open-type][data-open-id]');
      if (openBtn) {
        const type = openBtn.dataset.openType, id = openBtn.dataset.openId;
        const parentModal = openBtn.closest('.modal-overlay');
        if (parentModal) closeModal(parentModal);
        if (openBtn.tagName === 'A') {
          const href = openBtn.getAttribute('href') || '';
          const currentFile = (location.pathname.split('/').pop() || 'index.html');
          const targetFile = href.split('#')[0];
          if (!targetFile || targetFile === currentFile) {
            e.preventDefault();
            openEntity(type, id, { push: true });
            return;
          }
          // 让浏览器原生导航到目标页面；页面加载后通过 hash 打开。
          return;
        }
        e.preventDefault();
        openEntity(type, id, { push: true });
        return;
      }
      const fav = e.target.closest('[data-fav-toggle]');
      if (fav) {
        e.preventDefault(); e.stopPropagation();
        toggleFavorite(fav.dataset.favType, fav.dataset.favId);
        return;
      }
      if (e.target.closest('[data-open-search]')) { e.preventDefault(); openSearch(); return; }
      if (e.target.closest('[data-open-favorites]')) { e.preventDefault(); renderFavoritesModal(); openModal('favorites-modal'); return; }
      if (e.target.closest('[data-open-method]')) { e.preventDefault(); renderMethod(); openModal('method-modal'); return; }
      if (e.target.closest('[data-random]')) { e.preventDefault(); openRandom(); return; }
      if (e.target.closest('[data-menu-toggle]')) {
        e.preventDefault();
        const header = $('.site-header');
        const open = header.classList.toggle('nav-open');
        $('[data-menu-toggle]').setAttribute('aria-expanded', String(open));
        return;
      }
      const closer = e.target.closest('[data-close-modal]');
      if (closer) { closeModal(closer.closest('.modal-overlay')); return; }
      const modalOverlay = e.target.closest('.modal-overlay');
      if (modalOverlay && e.target === modalOverlay) { closeModal(modalOverlay); return; }
      if (e.target.closest('[data-close-search]')) { closeSearch(); return; }
      if (e.target === searchOverlay) { closeSearch(); return; }
      if (e.target.closest('[data-search-jump]')) {
        window.location.href = e.target.closest('[data-search-jump]').dataset.searchJump;
        return;
      }
      const qbtn = e.target.closest('[data-search-query]');
      if (qbtn) { searchInput.value = qbtn.dataset.searchQuery; renderSearchResults(searchInput.value); searchInput.focus(); return; }
      if (e.target === drawerOverlay || e.target.closest('[data-close-drawer]')) { closeDrawer(); return; }
      if (e.target.closest('[data-close-favorites]')) { closeModal($('#favorites-modal')); return; }
    });
    document.addEventListener('keydown', (e) => {
      const tag = (e.target.tagName || '').toLowerCase();
      const typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable;
      if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault(); openSearch(); return;
      }
      if (e.key === 'Escape') {
        if (searchOverlay && !searchOverlay.hidden) { closeSearch(); return; }
        const openModals = $$('.modal-overlay:not([hidden])');
        if (openModals.length) { closeModal(openModals[openModals.length - 1]); return; }
        if (drawer && drawer.classList.contains('is-open')) { closeDrawer(); return; }
        const header = $('.site-header');
        if (header && header.classList.contains('nav-open')) { header.classList.remove('nav-open'); $('[data-menu-toggle]').setAttribute('aria-expanded', 'false'); }
        return;
      }
      if (searchOverlay && !searchOverlay.hidden) {
        const items = $$('[data-search-result]', searchResultsEl);
        if (e.key === 'ArrowDown') { e.preventDefault(); moveSearchSelection(1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); moveSearchSelection(-1); }
        else if (e.key === 'Enter') { e.preventDefault(); activateSearchSelection(); }
        else if (e.key === 'Tab') {
          // 基础焦点循环，避免 Tab 跑出搜索面板
          const focusables = $$('button:not([disabled]), input, a[href]', searchOverlay).filter((el) => el.offsetParent !== null);
          if (!focusables.length) return;
          const first = focusables[0], last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
      if (drawer && drawer.classList.contains('is-open') && e.key === 'Tab') {
        const focusables = $$('button:not([disabled]), a[href], input, select, textarea', drawer).filter((el) => el.offsetParent !== null);
        if (!focusables.length) return;
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    if (searchInput) searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));
    if (drawerOverlay) drawerOverlay.addEventListener('click', () => closeDrawer());
    window.addEventListener('popstate', () => {
      const id = decodeURIComponent(location.hash.replace(/^#/, ''));
      if (id && findAny(id)) {
        const hit = findAny(id);
        openEntity(hit.type, id, { push: false });
      } else if (drawer && drawer.classList.contains('is-open')) {
        closeDrawer({ push: false });
      }
    });
    window.addEventListener('hashchange', () => {
      const id = decodeURIComponent(location.hash.replace(/^#/, ''));
      if (id && findAny(id)) {
        const hit = findAny(id);
        if (!drawer.classList.contains('is-open') || !drawerContent.innerHTML.includes('data-copy-link="' + id + '"')) openEntity(hit.type, id, { push: false });
      }
    });
  }

  /* ========================================================================
     Boot
     ======================================================================== */
  function initPrefetch() {
    if (!/^https?:$/.test(location.protocol)) return;
    const pages = ['index.html', 'natural.html', 'molecules.html', 'perfumery.html', 'perfume.html', 'incense.html', 'safety.html', 'workshop.html'];
    const current = location.pathname.split('/').pop() || 'index.html';
    const run = () => pages.filter((p) => p !== current).forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'prefetch'; link.as = 'document'; link.href = href;
      document.head.appendChild(link);
    });
    if ('requestIdleCallback' in window) requestIdleCallback(run, { timeout: 2600 });
    else setTimeout(run, 1500);
  }
  function init() {
    bindGlobal();
    fillCounts();
    const initMap = {
      home: initHome,
      natural: initNatural,
      molecules: initMolecules,
      perfume: initPerfume,
      perfumery: initPerfumery,
      incense: initIncense,
      safety: initSafety,
    };
    if (initMap[PAGE]) initMap[PAGE]();
    // 全局页脚/弹窗中的收藏按钮刷新
    updateFavCount();
    // 初始深链接
    const initialId = decodeURIComponent(location.hash.replace(/^#/, ''));
    if (initialId && findAny(initialId)) {
      const hit = findAny(initialId);
      openEntity(hit.type, initialId, { push: false });
    }
    initPrefetch();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
