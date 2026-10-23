(function () {
  if (window.__gigiSiteInit) return;
  window.__gigiSiteInit = true;

  const NAME = 'Dr. Gigi';
  const $ = (id) => document.getElementById(id);
  const on = (el, ev, fn) => el && el.addEventListener(ev, fn);
  const show = (el) => el && el.classList.remove('hidden');
  const hide = (el) => el && el.classList.add('hidden');

  const REASONS = [
    'The calm that follows you into every room.',
    'How much you know, and how thoughtfully you share it.',
    'The way your mind works. It is hard to overlook.',
    'Your dedication to medicine and to caring for people.',
    'Your kindness, which shows up in the little things.',
    'The faith that steadies you when things feel uncertain.',
    'Your love for white: simple, clean, and timeless, just like you.',
    'The big dreams you are not afraid to say out loud.',
    'Stanford Med in your future, and the faith with which you speak it.',
    'The poise with which you carry yourself.',
    'Your warmth in conversation.',
    'Your sense of humour.',
    'The care you put into your work.',
    'Your curiosity about the world, and about Nigeria’s future.',
    'How you make people feel seen.',
    'Your patience.',
    'The courage to chase hard things.',
    'Your elegance: never loud, always noticed.',
    'The way you encourage the people around you.',
    'Your generosity of spirit.',
    'How naturally you bring peace into a conversation.',
    'The person you are becoming, and the possibilities ahead of you.',
    'Simply that you are you.'
  ];

  const TRACKS = [
    {
      title: 'Golden Hour', artist: 'JVKE', duration: 209, dedication: '“For the golden glow you bring to every room.”',
      chords: [[261.63, 329.63, 392, 523.25], [220, 261.63, 329.63, 440], [174.61, 220, 261.63, 349.23], [196, 246.94, 293.66, 392]], arp: [0, 1, 2, 3, 2, 1]
    },
    {
      title: 'Until I Found You', artist: 'Stephen Sanchez', duration: 177, dedication: '“A gentle one, for a gentle soul.”',
      chords: [[220, 277.18, 329.63, 440], [185, 220, 277.18, 369.99], [146.83, 185, 220, 293.66], [164.81, 207.65, 246.94, 329.63]], arp: [0, 2, 1, 3, 1, 2]
    },
    {
      title: 'Lover', artist: 'Taylor Swift', duration: 221, dedication: '“Pick your favourite line from this one and keep it.”',
      chords: [[293.66, 369.99, 440, 587.33], [246.94, 293.66, 369.99, 493.88], [196, 246.94, 293.66, 392], [220, 277.18, 329.63, 440]], arp: [0, 1, 3, 2, 1, 2]
    },
    {
      title: 'Fly Me to the Moon', artist: 'Acoustic Serenade', duration: 165, dedication: '“For the dreamer who is always aiming higher.”',
      chords: [[220, 261.63, 329.63, 392], [146.83, 174.61, 220, 261.63], [196, 246.94, 293.66, 349.23], [261.63, 329.63, 392, 493.88]], arp: [0, 2, 3, 1, 2, 3]
    },
    {
      title: 'Can’t Take My Eyes Off You', artist: 'Silk Strings', duration: 195, dedication: '“A soft one for a quiet moment of your day.”',
      chords: [[261.63, 329.63, 392, 523.25], [261.63, 329.63, 392, 493.88], [261.63, 329.63, 392, 466.16], [174.61, 220, 261.63, 349.23]], arp: [0, 1, 2, 3, 2, 1]
    },
    {
      title: 'October Serenade', artist: 'Music Box Serenade', duration: 150, dedication: '“A calm, crystalline melody made just for October 23rd.”',
      chords: [[329.63, 392, 493.88, 659.25], [261.63, 329.63, 392, 523.25], [196, 246.94, 293.66, 392], [293.66, 369.99, 440, 587.33]], arp: [0, 3, 2, 1, 0, 2]
    }
  ];

  const fmt = (s) => Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');

  // ---------------------------------------------------------------- audio
  let audioCtx = null;
  function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
  }
  function tone(freq, dur, lush) {
    try {
      initAudio();
      const t = audioCtx.currentTime;
      const gain = audioCtx.createGain();
      const out = audioCtx.createBiquadFilter();
      out.type = 'lowpass';
      out.frequency.setValueAtTime(lush ? 1800 : 6000, t);
      if (lush) out.frequency.exponentialRampToValueAtTime(800, t + dur);
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.exponentialRampToValueAtTime(lush ? 0.065 : 0.08, t + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      gain.connect(out);
      out.connect(audioCtx.destination);
      [['sine', 1], ['triangle', 1.002]].slice(0, lush ? 2 : 1).forEach(([type, mult]) => {
        const o = audioCtx.createOscillator();
        o.type = type;
        o.frequency.setValueAtTime(freq * mult, t);
        o.connect(gain);
        o.start(t);
        o.stop(t + dur);
      });
    } catch (e) { /* audio needs a user gesture */ }
  }
  const chime = () => [523.25, 659.25, 783.99, 1046.5].forEach((n, i) => setTimeout(() => tone(n, 2.8, false), i * 160));

  // ---------------------------------------------------------------- confetti
  function confetti(count) {
    const c = document.createElement('canvas');
    Object.assign(c.style, { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 });
    c.width = innerWidth; c.height = innerHeight;
    document.body.appendChild(c);
    const g = c.getContext('2d');
    const colors = ['#FFFFFF', '#FDFBF7', '#EAE6DF', '#C2A676', '#D6AF5D'];
    const ps = Array.from({ length: count }, () => ({
      x: innerWidth / 2 + Math.random() * 200 - 100, y: innerHeight * 0.45,
      vx: (Math.random() - 0.5) * 16, vy: -Math.random() * 14 - 6, s: Math.random() * 9 + 5,
      col: colors[Math.floor(Math.random() * colors.length)], r: Math.random() * 360,
      vr: (Math.random() - 0.5) * 12, a: 1, round: Math.random() > 0.6
    }));
    (function frame() {
      g.clearRect(0, 0, c.width, c.height);
      let live = 0;
      ps.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.vy += 0.38; p.vx *= 0.985; p.r += p.vr; p.a -= 0.009;
        if (p.a <= 0 || p.y >= c.height) return;
        live++;
        g.save(); g.translate(p.x, p.y); g.rotate(p.r * Math.PI / 180);
        g.globalAlpha = p.a; g.fillStyle = p.col;
        if (p.round) { g.beginPath(); g.arc(0, 0, p.s / 2, 0, Math.PI * 2); g.fill(); }
        else g.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.7);
        g.restore();
      });
      live ? requestAnimationFrame(frame) : c.remove();
    })();
  }

  // ---------------------------------------------------------------- ambient motes
  function ambient() {
    const cv = $('ambient-canvas');
    if (!cv) return;
    const g = cv.getContext('2d');
    let w, h;
    const size = () => { w = cv.width = innerWidth; h = cv.height = innerHeight; };
    addEventListener('resize', size); size();
    const motes = Array.from({ length: 38 }, () => ({
      x: Math.random() * w, y: Math.random() * h, r: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.3, vy: -Math.random() * 0.4 - 0.1,
      a: Math.random() * 0.45 + 0.1, f: Math.random() * 0.005 + 0.002
    }));
    (function draw() {
      g.clearRect(0, 0, w, h);
      motes.forEach((m) => {
        m.x += m.vx; m.y += m.vy; m.a += m.f;
        if (m.a > 0.6 || m.a < 0.1) m.f = -m.f;
        if (m.y < -10) { m.y = h + 10; m.x = Math.random() * w; }
        if (m.x < -10) m.x = w + 10;
        if (m.x > w + 10) m.x = -10;
        g.beginPath(); g.arc(m.x, m.y, m.r, 0, Math.PI * 2); g.fillStyle = `rgba(194,166,118,${m.a * 0.4})`; g.fill();
        g.beginPath(); g.arc(m.x, m.y, m.r * 2.5, 0, Math.PI * 2); g.fillStyle = `rgba(255,255,255,${m.a * 0.8})`; g.fill();
      });
      requestAnimationFrame(draw);
    })();
  }

  // ---------------------------------------------------------------- countdown
  function countdown() {
    const label = $('countdown-label');
    const cells = ['cd-days', 'cd-hours', 'cd-mins', 'cd-secs'].map($);
    const set = (vals) => cells.forEach((el, i) => { if (el) el.textContent = String(vals[i]).padStart(2, '0'); });
    function tick() {
      const now = new Date();
      const target = new Date(now.getFullYear(), 9, 23, 0, 0, 0);
      if (now >= target) {
        const isToday = now.getMonth() === 9 && now.getDate() === 23;
        label.textContent = isToday
          ? 'TODAY IS OCTOBER 23RD • HAPPY BIRTHDAY, ' + NAME.toUpperCase() + '!'
          : 'OCTOBER 23RD • HAPPY BIRTHDAY, ' + NAME.toUpperCase() + '!';
        set([0, 0, 0, 0]);
        return;
      }
      label.textContent = 'COUNTDOWN TO OCTOBER 23RD';
      const d = target - now;
      set([Math.floor(d / 864e5), Math.floor(d / 36e5) % 24, Math.floor(d / 6e4) % 60, Math.floor(d / 1e3) % 60]);
    }
    tick();
    setInterval(tick, 1000);
  }

  // ---------------------------------------------------------------- candles
  let blown = false, micOn = false, micStream = null;
  function candles() {
    const flames = document.querySelectorAll('.candle');
    const status = $('wish-status');
    const blowBtn = $('blow-candles-btn'), micBtn = $('mic-blow-btn'), relight = $('relight-btn'), card = $('wish-reveal-card');
    const micText = $('mic-btn-text');

    function stopMic() {
      micOn = false;
      micText.textContent = 'Blow via Mic';
      micBtn.classList.remove('primary');
      if (micStream) { micStream.getTracks().forEach((t) => t.stop()); micStream = null; }
    }
    function blowOut() {
      if (blown) return;
      blown = true;
      flames.forEach((c, i) => setTimeout(() => c.classList.add('extinguished'), i * 140));
      chime();
      status.innerHTML = '<span class="status-dot" style="background:#8C8C86;"></span><span>Flames blown with warmth. Your wish is on its way!</span>';
      hide(blowBtn); hide(micBtn); show(relight);
      confetti(70);
      setTimeout(() => show(card), 700);
    }
    function lightAgain() {
      blown = false;
      flames.forEach((c) => c.classList.remove('extinguished'));
      status.innerHTML = '<span class="status-dot pulsing"></span><span>Candles are glowing. Close your eyes &amp; make a wish...</span>';
      show(blowBtn); show(micBtn); hide(relight); hide(card);
    }
    on(blowBtn, 'click', blowOut);
    flames.forEach((c) => on(c, 'click', blowOut));
    on(relight, 'click', lightAgain);

    on(micBtn, 'click', async () => {
      if (micOn) return stopMic();
      try {
        micText.textContent = 'Listening for breath...';
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        micOn = true;
        micBtn.classList.add('primary');
        const mc = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = mc.createAnalyser();
        analyser.fftSize = 256;
        mc.createMediaStreamSource(micStream).connect(analyser);
        const data = new Uint8Array(analyser.frequencyBinCount);
        (function listen() {
          if (!micOn || blown) return;
          analyser.getByteFrequencyData(data);
          let sum = 0;
          for (let i = 0; i < 30; i++) sum += data[i];
          if (sum / 30 > 90) { stopMic(); blowOut(); return; }
          requestAnimationFrame(listen);
        })();
      } catch (e) {
        alert("Microphone access isn't available. You can still tap 'Blow Out Candles'!");
        micText.textContent = 'Blow via Mic';
        micOn = false;
      }
    });
  }

  // ---------------------------------------------------------------- gallery
  function gallery() {
    const pills = document.querySelectorAll('.filter-pill');
    const items = document.querySelectorAll('.polaroid-item');
    pills.forEach((p) => on(p, 'click', () => {
      pills.forEach((x) => x.classList.remove('active'));
      p.classList.add('active');
      items.forEach((it) => it.classList.toggle('hidden', p.dataset.filter !== 'all' && it.dataset.category !== p.dataset.filter));
    }));
    document.querySelectorAll('.polaroid-card, .flip-hint-btn').forEach((t) =>
      on(t, 'click', () => t.closest('.polaroid-item').classList.toggle('flipped')));
  }

  // ---------------------------------------------------------------- player
  let idx = 0, playing = false, elapsed = 0, shuffle = false, repeat = false, clock = null, synth = null, chordI = 0, arpI = 0;

  function player() {
    const list = $('playlist-tracks-list');
    const q = (id) => $(id);
    q('tracks-count').textContent = TRACKS.length + ' TRACKS';

    TRACKS.forEach((t, i) => {
      const row = document.createElement('div');
      row.className = 'track-row';
      row.innerHTML = `<span class="track-num">${i + 1}</span><div class="track-meta"><div class="track-row-title"></div><div class="track-row-artist"></div></div><span class="track-row-time">${fmt(t.duration)}</span>`;
      row.querySelector('.track-row-title').textContent = t.title;
      row.querySelector('.track-row-artist').textContent = t.artist;
      on(row, 'click', () => { idx = i; elapsed = 0; load(); start(); });
      list.appendChild(row);
    });

    function paint() {
      const t = TRACKS[idx];
      q('time-current').textContent = fmt(elapsed);
      q('scrubber-progress').style.width = (elapsed / t.duration) * 100 + '%';
    }
    function load() {
      const t = TRACKS[idx];
      q('current-track-name').textContent = t.title;
      q('current-track-artist').textContent = t.artist;
      q('current-track-dedication').textContent = t.dedication;
      q('time-total').textContent = fmt(t.duration);
      list.querySelectorAll('.track-row').forEach((r, i) => r.classList.toggle('active', i === idx));
      chordI = 0; arpI = 0;
      paint();
    }
    function visuals(isOn) {
      const playI = q('player-play-icon'), pauseI = q('player-pause-icon');
      (isOn ? hide : show)(playI);
      (isOn ? show : hide)(pauseI);
      document.querySelector('.spotify-card-outer')?.classList.toggle('is-playing', isOn);
      q('equalizer-bars')?.classList.toggle('active', isOn);
      document.querySelector('.now-playing-box')?.classList.toggle('playing', isOn);
      q('toggle-music-btn')?.classList.toggle('primary', isOn);
      q('music-label').textContent = isOn ? '♫ ' + TRACKS[idx].title : 'Soundtrack: Paused';
    }
    function step() {
      if (!playing) return;
      const t = TRACKS[idx];
      const chord = t.chords[chordI % t.chords.length];
      tone(chord[t.arp[arpI % t.arp.length]], 2.2, true);
      arpI++;
      if (arpI % t.arp.length === 0) chordI = (chordI + 1) % t.chords.length;
      synth = setTimeout(step, 340);
    }
    function start() {
      initAudio();
      playing = true;
      visuals(true);
      clearInterval(clock); clearTimeout(synth);
      clock = setInterval(() => {
        elapsed++;
        if (elapsed >= TRACKS[idx].duration) { repeat ? (elapsed = 0) : next(); }
        paint();
      }, 1000);
      step();
    }
    function pause() {
      playing = false;
      visuals(false);
      clearInterval(clock); clearTimeout(synth);
    }
    function next() {
      if (shuffle && TRACKS.length > 1) { let n; do { n = Math.floor(Math.random() * TRACKS.length); } while (n === idx); idx = n; }
      else idx = (idx + 1) % TRACKS.length;
      elapsed = 0; load();
      if (playing) start();
    }
    function prev() {
      if (elapsed > 4) { elapsed = 0; paint(); return; }
      idx = (idx - 1 + TRACKS.length) % TRACKS.length;
      elapsed = 0; load();
      if (playing) start();
    }
    window.__gigiPausePlayer = pause;

    const toggle = () => (playing ? pause() : start());
    on(q('player-play-btn'), 'click', toggle);
    on(q('toggle-music-btn'), 'click', toggle);
    on(q('player-next-btn'), 'click', next);
    on(q('player-prev-btn'), 'click', prev);
    on(q('player-shuffle-btn'), 'click', (e) => { shuffle = !shuffle; e.currentTarget.classList.toggle('active', shuffle); });
    on(q('player-repeat-btn'), 'click', (e) => { repeat = !repeat; e.currentTarget.classList.toggle('active', repeat); });
    on(q('scrubber-bar'), 'click', (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      elapsed = Math.floor(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * TRACKS[idx].duration);
      paint();
    });
    load();
  }

  // ---------------------------------------------------------------- modals
  function modals() {
    const scan = $('scan-guide-modal'), box = $('lightbox-modal');
    on($('how-to-scan-btn'), 'click', () => show(scan));
    on($('close-scan-modal-btn'), 'click', () => hide(scan));
    on($('guide-close-btn'), 'click', () => hide(scan));
    on(scan, 'click', (e) => { if (e.target === scan) hide(scan); });
    on($('expand-code-btn'), 'click', () => show(box));
    on($('close-lightbox-btn'), 'click', () => hide(box));
    on(box, 'click', (e) => { if (e.target === box) hide(box); });
    on(document, 'keydown', (e) => { if (e.key === 'Escape') { hide(scan); hide(box); } });
    on($('scroll-to-top-btn'), 'click', () => scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ---------------------------------------------------------------- video
  function video() {
    const v = $('featured-video-player');
    if (!v) return;
    const cards = document.querySelectorAll('.video-card-item');
    on(v, 'play', () => window.__gigiPausePlayer && playing && window.__gigiPausePlayer());
    cards.forEach((card) => on(card, 'click', () => {
      cards.forEach((c) => c.classList.remove('active'));
      card.classList.add('active');
      $('current-video-title').textContent = card.dataset.title;
      $('current-video-sub').textContent = card.dataset.sub;
      v.src = card.dataset.videoSrc;
      v.load();
      v.play().catch(() => { });
    }));
  }

  // ---------------------------------------------------------------- envelope, jar, lanterns
  function envelope() {
    const sealed = $('sealed-envelope'), letter = $('unfolded-letter');
    on(sealed, 'click', () => { hide(sealed); show(letter); letter.scrollIntoView({ behavior: 'smooth', block: 'center' }); confetti(25); });
    on($('close-letter-btn'), 'click', () => { hide(letter); show(sealed); sealed.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
  }

  function jar() {
    const j = $('interactive-jar'), counter = $('drawn-counter'), text = $('drawn-text');
    let n = 0;
    function draw() {
      n = (n + 1) % REASONS.length;
      counter.textContent = `REASON Nº ${n + 1} OF ${REASONS.length}`;
      text.style.opacity = '0'; text.style.transform = 'translateY(10px)';
      setTimeout(() => { text.textContent = `“${REASONS[n]}”`; text.style.opacity = '1'; text.style.transform = 'translateY(0)'; }, 200);
      j.style.transform = 'rotate(-8deg) scale(1.08)';
      setTimeout(() => { j.style.transform = 'rotate(8deg) scale(1.08)'; setTimeout(() => { j.style.transform = 'none'; }, 150); }, 150);
    }
    on($('draw-next-btn'), 'click', draw);
    on(j, 'click', draw);
  }

  function lanterns() {
    const input = $('wish-input'), sky = $('lanterns-sky');
    function release() {
      const text = input.value.trim();
      if (!text) { input.focus(); return; }
      const hint = $('sky-hint');
      if (hint) hint.style.display = 'none';
      const l = document.createElement('div');
      l.className = 'floating-lantern';
      l.style.left = Math.floor(Math.random() * 70) + 15 + '%';
      l.innerHTML = '<div class="lantern-orb"></div><div class="lantern-label"></div>';
      l.querySelector('.lantern-label').textContent = text;
      sky.appendChild(l);
      input.value = '';
      tone(660, 1.8, false);
      setTimeout(() => l.remove(), 9500);
    }
    on($('release-lantern-btn'), 'click', release);
    on(input, 'keydown', (e) => { if (e.key === 'Enter') release(); });
  }

  // ---------------------------------------------------------------- start
  function init() {
    [ambient, countdown, candles, gallery, player, modals, video, envelope, jar, lanterns].forEach((fn) => {
      try { fn(); } catch (err) { console.error('Setup failed:', fn.name, err); }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();