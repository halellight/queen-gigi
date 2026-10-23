/**
 * MINIMALIST SILK WHITE BIRTHDAY EXPERIENCE
 * Target Celebration: October 23rd
 */

// --- Default Configuration & State ---
const DEFAULT_STATE = {
  girlfriendName: "Belle",
  senderName: "Forever Yours",
  tagline: "“You bring a quiet, breathtaking elegance to this world — and today is all for you.”",
  letterText: `There is an effortless grace in the way you exist. Just like your favorite color white — calm, pure, timeless, and quietly radiant — you bring peace to every room you enter and every life you touch.\n\nOn your birthday, I want you to feel as deeply cherished as you make everyone around you feel. Thank you for every quiet morning, every shared laugh, your soft touch, and the unwavering kindness of your soul.\n\nAs you blow out your candles today on the 23rd, remember that my greatest wish will always be your happiness, your laughter, and being by your side to celebrate every single year to come.`,
  isPartyMode: false,
  candlesBlown: false,
  musicPlaying: false,
  playlistTitle: "Soundtrack Just For Her",
  spotifyUrl: "https://open.spotify.com"
};

const REASONS = [
  "The gentle way you smile when you're caught thinking about something you love.",
  "How effortlessly you make every room feel calm, elegant, and peaceful.",
  "Your pure heart and the deep kindness you show to everyone around you.",
  "The feeling of your hand quietly slipping into mine during long walks.",
  "Your laugh — especially when you can barely catch your breath because something was so silly.",
  "How you look on quiet Sunday mornings wrapped in cozy white linen.",
  "The passion and focus in your eyes whenever you talk about your dreams.",
  "How safe and grounded I feel whenever I am with you.",
  "The sweet little expressions you make when you are concentrating.",
  "Your taste in the simple, beautiful, and timeless things in life.",
  "The warmth of your hugs at the end of a long, exhausting day.",
  "How you always know the exact right thing to say when I need comfort.",
  "The way you make ordinary grocery runs feel like romantic adventures.",
  "Your incredible strength and grace through every life challenge.",
  "How you glow in candlelight — tonight and every night.",
  "The soft sound of your voice when you say goodnight.",
  "How you remember the smallest, sweetest details about us.",
  "The way you inspire me to be a kinder, better person every day.",
  "Your patience, understanding, and open heart.",
  "The spontaneous little dance steps you do when you are happy.",
  "How our silence together is never awkward, just pure tranquility.",
  "The way your eyes catch the autumn light in October.",
  "Simply because you are you — my favorite soul in this entire world."
];

// Curated Romantic Tracklist Just For Her
const PLAYLIST_TRACKS = [
  {
    id: 1,
    title: "Golden Hour",
    artist: "JVKE",
    duration: 209,
    durationStr: "3:29",
    art: "her-portrait-square.jpg",
    dedication: "“For the golden glow you bring to every room and every quiet moment.”",
    chords: [
      [261.63, 329.63, 392.00, 523.25], // C major
      [220.00, 261.63, 329.63, 440.00], // A minor
      [174.61, 220.00, 261.63, 349.23], // F major
      [196.00, 246.94, 293.66, 392.00]  // G major
    ],
    arpPattern: [0, 1, 2, 3, 2, 1]
  },
  {
    id: 2,
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    duration: 177,
    durationStr: "2:57",
    art: "her-portrait-square.jpg",
    dedication: "“I would never fall in love until I found you — happy 23rd October, my love.”",
    chords: [
      [220.00, 277.18, 329.63, 440.00], // A major
      [185.00, 220.00, 277.18, 369.99], // F# minor
      [146.83, 185.00, 220.00, 293.66], // D major
      [164.81, 207.65, 246.94, 329.63]  // E major
    ],
    arpPattern: [0, 2, 1, 3, 1, 2]
  },
  {
    id: 3,
    title: "Lover",
    artist: "Taylor Swift",
    duration: 221,
    durationStr: "3:41",
    art: "her-portrait-square.jpg",
    dedication: "“Can I go where you go? Can we always be this close, forever and ever?”",
    chords: [
      [293.66, 369.99, 440.00, 587.33], // D major
      [246.94, 293.66, 369.99, 493.88], // B minor
      [196.00, 246.94, 293.66, 392.00], // G major
      [220.00, 277.18, 329.63, 440.00]  // A major
    ],
    arpPattern: [0, 1, 3, 2, 1, 2]
  },
  {
    id: 4,
    title: "Fly Me to the Moon",
    artist: "Acoustic Serenade",
    duration: 165,
    durationStr: "2:45",
    art: "her-portrait-square.jpg",
    dedication: "“Let me see what spring is like on Jupiter and Mars, holding your hand.”",
    chords: [
      [220.00, 261.63, 329.63, 392.00], // Am7
      [146.83, 174.61, 220.00, 261.63], // Dm7
      [196.00, 246.94, 293.66, 349.23], // G7
      [261.63, 329.63, 392.00, 493.88]  // Cmaj7
    ],
    arpPattern: [0, 2, 3, 1, 2, 3]
  },
  {
    id: 5,
    title: "Can't Take My Eyes Off You",
    artist: "Silk Strings",
    duration: 195,
    durationStr: "3:15",
    art: "her-portrait-square.jpg",
    dedication: "“You're just too good to be true. Can't take my eyes off of you.”",
    chords: [
      [261.63, 329.63, 392.00, 523.25], // C
      [261.63, 329.63, 392.00, 493.88], // Cmaj7
      [261.63, 329.63, 392.00, 466.16], // C7
      [174.61, 220.00, 261.63, 349.23]  // F
    ],
    arpPattern: [0, 1, 2, 3, 2, 1]
  },
  {
    id: 6,
    title: "October Serenade",
    artist: "Music Box for Belle",
    duration: 150,
    durationStr: "2:30",
    art: "her-portrait-square.jpg",
    dedication: "“A calm, crystalline melody crafted just for your special day on October 23rd.”",
    chords: [
      [329.63, 392.00, 493.88, 659.25], // Em
      [261.63, 329.63, 392.00, 523.25], // C
      [196.00, 246.94, 293.66, 392.00], // G
      [293.66, 369.99, 440.00, 587.33]  // D
    ],
    arpPattern: [0, 3, 2, 1, 0, 2]
  }
];

// Load saved state or defaults
let appState = { ...DEFAULT_STATE };
try {
  const saved = localStorage.getItem('birthday_silk_state');
  if (saved) {
    appState = { ...DEFAULT_STATE, ...JSON.parse(saved) };
  }
} catch (e) {
  console.warn("Storage access limited:", e);
}

// --- DOM References ---
const displayGirlfriendName = document.getElementById('display-girlfriend-name');
const displayTagline = document.getElementById('display-tagline');
const cdDays = document.getElementById('cd-days');
const cdHours = document.getElementById('cd-hours');
const cdMins = document.getElementById('cd-mins');
const cdSecs = document.getElementById('cd-secs');
const countdownLabel = document.getElementById('countdown-label');
const toggleModeBtn = document.getElementById('toggle-mode-btn');
const modeText = document.getElementById('mode-text');

// Cake & Candles
const blowCandlesBtn = document.getElementById('blow-candles-btn');
const micBlowBtn = document.getElementById('mic-blow-btn');
const micBtnText = document.getElementById('mic-btn-text');
const relightBtn = document.getElementById('relight-btn');
const wishStatus = document.getElementById('wish-status');
const wishStatusText = document.getElementById('wish-status-text');
const wishRevealCard = document.getElementById('wish-reveal-card');
const candles = document.querySelectorAll('.candle');

// Spotify Playlist & Player DOM References
const displayPlaylistForName = document.getElementById('display-playlist-for-name');
const displayMixtapeTitle = document.getElementById('display-mixtape-title');
const openSpotifyBtn = document.getElementById('open-spotify-btn');
const howToScanBtn = document.getElementById('how-to-scan-btn');
const expandCodeBtn = document.getElementById('expand-code-btn');
const scanGuideModal = document.getElementById('scan-guide-modal');
const closeScanModalBtn = document.getElementById('close-scan-modal-btn');
const guideCloseBtn = document.getElementById('guide-close-btn');
const guideOpenAppBtn = document.getElementById('guide-open-app-btn');
const lightboxModal = document.getElementById('lightbox-modal');
const closeLightboxBtn = document.getElementById('close-lightbox-btn');

const vinylDisc = document.getElementById('vinyl-disc');
const spotifyCardOuter = document.querySelector('.spotify-card-outer');
const equalizerBars = document.getElementById('equalizer-bars');
const currentTrackArt = document.getElementById('current-track-art');
const currentTrackName = document.getElementById('current-track-name');
const currentTrackArtist = document.getElementById('current-track-artist');
const currentTrackDedication = document.getElementById('current-track-dedication');
const nowPlayingBox = document.querySelector('.now-playing-box');

const scrubberBar = document.getElementById('scrubber-bar');
const scrubberProgress = document.getElementById('scrubber-progress');
const timeCurrent = document.getElementById('time-current');
const timeTotal = document.getElementById('time-total');

const playerShuffleBtn = document.getElementById('player-shuffle-btn');
const playerPrevBtn = document.getElementById('player-prev-btn');
const playerPlayBtn = document.getElementById('player-play-btn');
const playerPlayIcon = document.getElementById('player-play-icon');
const playerPauseIcon = document.getElementById('player-pause-icon');
const playerNextBtn = document.getElementById('player-next-btn');
const playerRepeatBtn = document.getElementById('player-repeat-btn');
const playlistTracksList = document.getElementById('playlist-tracks-list');
const tracksCount = document.getElementById('tracks-count');

// Letter & Envelope
const sealedEnvelope = document.getElementById('sealed-envelope');
const unfoldedLetter = document.getElementById('unfolded-letter');
const closeLetterBtn = document.getElementById('close-letter-btn');
const editLetterBtn = document.getElementById('edit-letter-btn');
const letterName = document.getElementById('letter-name');
const letterSenderName = document.getElementById('letter-sender-name');
const letterBodyText = document.getElementById('letter-body-text');

// Reasons Jar
const interactiveJar = document.getElementById('interactive-jar');
const drawNextBtn = document.getElementById('draw-next-btn');
const drawnCounter = document.getElementById('drawn-counter');
const drawnText = document.getElementById('drawn-text');
let currentReasonIdx = 0;

// Sky Lantern Wishmaker
const wishInput = document.getElementById('wish-input');
const releaseLanternBtn = document.getElementById('release-lantern-btn');
const lanternsSky = document.getElementById('lanterns-sky');
const skyHint = document.getElementById('sky-hint');

// Customization Modal
const openCustomizeBtn = document.getElementById('open-customize-btn');
const customizeModal = document.getElementById('customize-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const inputHerName = document.getElementById('input-her-name');
const inputYourName = document.getElementById('input-your-name');
const inputPlaylistTitle = document.getElementById('input-playlist-title');
const inputSpotifyUrl = document.getElementById('input-spotify-url');
const inputTagline = document.getElementById('input-tagline');
const inputLetter = document.getElementById('input-letter');
const saveSettingsBtn = document.getElementById('save-settings-btn');
const resetDefaultsBtn = document.getElementById('reset-defaults-btn');

// Photo Upload
const photoFileInput = document.getElementById('photo-file-input');
let activeImageTargetId = null;

// Ambient Music
const toggleMusicBtn = document.getElementById('toggle-music-btn');
const musicLabel = document.getElementById('music-label');

// Canvas Background
const ambientCanvas = document.getElementById('ambient-canvas');
const ctx = ambientCanvas.getContext('2d');

// --- Initialization ---
function initApp() {
  applyStateToUI();
  setupCountdown();
  setupAmbientCanvas();
  setupCandles();
  setupGallery();
  setupSpotifyPlayer();
  setupVideoCinema();
  setupEnvelope();
  setupJar();
  setupLanterns();
  setupModal();
  setupPhotoUpload();
  setupAudioSynth();
}

// --- Apply Saved State ---
function applyStateToUI() {
  if (displayGirlfriendName) displayGirlfriendName.textContent = appState.girlfriendName.toUpperCase();
  if (displayTagline) displayTagline.textContent = appState.tagline;
  if (letterName) letterName.textContent = appState.girlfriendName;
  if (letterSenderName) letterSenderName.textContent = appState.senderName;
  if (displayPlaylistForName) displayPlaylistForName.textContent = appState.girlfriendName;
  if (displayMixtapeTitle) displayMixtapeTitle.textContent = appState.playlistTitle;

  if (openSpotifyBtn && appState.spotifyUrl) openSpotifyBtn.href = appState.spotifyUrl;
  if (guideOpenAppBtn && appState.spotifyUrl) guideOpenAppBtn.href = appState.spotifyUrl;
  
  if (letterBodyText) {
    const paragraphs = appState.letterText.split('\n\n');
    letterBodyText.innerHTML = paragraphs.map(p => `<p>${escapeHTML(p)}</p>`).join('');
  }

  // Restore saved photos if available
  const savedPhotos = JSON.parse(localStorage.getItem('birthday_silk_photos') || '{}');
  Object.keys(savedPhotos).forEach(slotId => {
    const imgEl = document.getElementById(slotId);
    if (imgEl) imgEl.src = savedPhotos[slotId];
  });
}

function saveState() {
  try {
    localStorage.setItem('birthday_silk_state', JSON.stringify(appState));
  } catch (e) {
    console.warn("Could not save state:", e);
  }
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// --- Countdown Logic ---
let countdownInterval = null;

function setupCountdown() {
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);

  toggleModeBtn.addEventListener('click', () => {
    appState.isPartyMode = !appState.isPartyMode;
    if (appState.isPartyMode) {
      modeText.textContent = "View Countdown";
      countdownLabel.textContent = "OCTOBER 23RD • HAPPY BIRTHDAY, " + appState.girlfriendName.toUpperCase() + "!";
      cdDays.textContent = "00";
      cdHours.textContent = "00";
      cdMins.textContent = "00";
      cdSecs.textContent = "00";
      triggerSilkConfetti(35);
    } else {
      modeText.textContent = "Preview Oct 23 Party";
      updateCountdown();
    }
  });
}

function updateCountdown() {
  if (appState.isPartyMode) return;

  const now = new Date();
  const currentYear = now.getFullYear();
  // Target: October 23rd of the current year (months are 0-indexed: 9 = October)
  let targetDate = new Date(currentYear, 9, 23, 0, 0, 0);

  // If already past October 23 this year and not the 23rd itself, target next year
  if (now > targetDate && (now.getMonth() !== 9 || now.getDate() !== 23)) {
    targetDate = new Date(currentYear + 1, 9, 23, 0, 0, 0);
  }

  // Check if today IS October 23rd!
  if (now.getMonth() === 9 && now.getDate() === 23) {
    countdownLabel.textContent = "TODAY IS OCTOBER 23RD • YOUR CELEBRATION IS HERE!";
    cdDays.textContent = "00";
    cdHours.textContent = "00";
    cdMins.textContent = "00";
    cdSecs.textContent = "00";
    return;
  }

  countdownLabel.textContent = "COUNTDOWN TO OCTOBER 23RD";
  const diff = targetDate - now;

  if (diff <= 0) {
    cdDays.textContent = "00";
    cdHours.textContent = "00";
    cdMins.textContent = "00";
    cdSecs.textContent = "00";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  cdDays.textContent = String(days).padStart(2, '0');
  cdHours.textContent = String(hours).padStart(2, '0');
  cdMins.textContent = String(minutes).padStart(2, '0');
  cdSecs.textContent = String(seconds).padStart(2, '0');
}

// --- Interactive Candle Ceremony & Cake ---
function setupCandles() {
  blowCandlesBtn.addEventListener('click', () => {
    extinguishCandles();
  });

  // Clicking directly on any candle stick also blows it out
  candles.forEach(candle => {
    candle.addEventListener('click', () => {
      extinguishCandles();
    });
  });

  relightBtn.addEventListener('click', () => {
    relightCandles();
  });

  setupMicBlowing();
}

function extinguishCandles() {
  if (appState.candlesBlown) return;
  appState.candlesBlown = true;

  candles.forEach((c, idx) => {
    setTimeout(() => {
      c.classList.add('extinguished');
    }, idx * 140);
  });

  // Sound chime
  playCelebrationChime();

  // Update status UI
  wishStatus.innerHTML = `<span class="status-dot" style="background:#8C8C86;"></span><span>Flames blown with pure love & warmth!</span>`;
  blowCandlesBtn.classList.add('hidden');
  micBlowBtn.classList.add('hidden');
  relightBtn.classList.remove('hidden');

  // Trigger celebration confetti
  triggerSilkConfetti(70);

  // Reveal Wish Card with smooth reveal
  setTimeout(() => {
    wishRevealCard.classList.remove('hidden');
  }, 700);
}

function relightCandles() {
  appState.candlesBlown = false;
  candles.forEach(c => {
    c.classList.remove('extinguished');
  });

  wishStatus.innerHTML = `<span class="status-dot pulsing"></span><span>Candles are glowing. Close your eyes & make a wish...</span>`;
  blowCandlesBtn.classList.remove('hidden');
  micBlowBtn.classList.remove('hidden');
  relightBtn.classList.add('hidden');
  wishRevealCard.classList.add('hidden');
}

// Microphone blow detection
let micStream = null;
let audioContext = null;
let analyser = null;
let isMicListening = false;

function setupMicBlowing() {
  micBlowBtn.addEventListener('click', async () => {
    if (isMicListening) {
      stopMicListening();
      return;
    }

    try {
      micBtnText.textContent = "Listening for breath...";
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStream = stream;
      isMicListening = true;
      micBlowBtn.classList.add('primary');

      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const micCtx = new AudioContextClass();
      const micSource = micCtx.createMediaStreamSource(stream);
      analyser = micCtx.createAnalyser();
      analyser.fftSize = 256;
      micSource.connect(analyser);

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      function detectBlow() {
        if (!isMicListening || appState.candlesBlown) return;
        analyser.getByteFrequencyData(dataArray);

        // Calculate average low-frequency air turbulence (blowing creates high energy in lower bins)
        let sum = 0;
        for (let i = 0; i < 30; i++) {
          sum += dataArray[i];
        }
        const avg = sum / 30;

        if (avg > 90) { // Threshold for a deliberate puff of air
          stopMicListening();
          extinguishCandles();
          return;
        }

        requestAnimationFrame(detectBlow);
      }

      detectBlow();
    } catch (err) {
      alert("Microphone access could not be opened. You can still click the 'Blow Out Candles' button directly!");
      micBtnText.textContent = "Blow via Mic";
      isMicListening = false;
    }
  });
}

function stopMicListening() {
  isMicListening = false;
  micBtnText.textContent = "Blow via Mic";
  micBlowBtn.classList.remove('primary');
  if (micStream) {
    micStream.getTracks().forEach(track => track.stop());
    micStream = null;
  }
}

// --- Polaroid Gallery Logic ---
function setupGallery() {
  // Filter pills
  const filterPills = document.querySelectorAll('.filter-pill');
  const polaroidItems = document.querySelectorAll('.polaroid-item');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;

      polaroidItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Flip interactions
  document.querySelectorAll('.polaroid-card, .flip-hint-btn').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      // Don't flip if clicking the photo replacement button
      if (e.target.closest('.replace-photo-btn')) return;

      const polaroid = trigger.closest('.polaroid-item');
      if (polaroid) {
        polaroid.classList.toggle('flipped');
      }
    });
  });

  // Add Custom Memory Button
  const addMemoryBtn = document.getElementById('add-memory-btn');
  if (addMemoryBtn) {
    addMemoryBtn.addEventListener('click', () => {
      const title = prompt("Enter a title for this memory:", "A Special Afternoon");
      if (!title) return;
      const note = prompt("Enter the heartfelt note for the back of this polaroid:", "Looking at you and knowing I found my home.");
      if (!note) return;

      createCustomPolaroid(title, note);
    });
  }
}

function createCustomPolaroid(title, note) {
  const grid = document.getElementById('polaroid-grid');
  const newId = 'img-slot-' + Date.now();
  const tilt = (Math.random() * 6 - 3).toFixed(1);

  const item = document.createElement('div');
  item.className = 'polaroid-item';
  item.dataset.category = 'candid';
  item.style.setProperty('--tilt', `${tilt}deg`);
  item.innerHTML = `
    <div class="polaroid-pin"></div>
    <div class="polaroid-card">
      <div class="polaroid-inner">
        <div class="polaroid-front">
          <div class="polaroid-photo-frame">
            <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80" alt="${escapeHTML(title)}" class="polaroid-img" id="${newId}">
            <button class="replace-photo-btn" data-target="${newId}" title="Change photo">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
            </button>
          </div>
          <div class="polaroid-caption">
            <p class="caption-title">${escapeHTML(title)}</p>
            <span class="caption-date">October Memory • Cherished</span>
          </div>
        </div>
        <div class="polaroid-back">
          <div class="note-paper">
            <span class="note-stamp">NEW MEMORY</span>
            <p class="handwritten-note">"${escapeHTML(note)}"</p>
            <div class="note-footer">— Always</div>
          </div>
        </div>
      </div>
    </div>
    <button class="flip-hint-btn">Flip Note ↻</button>
  `;

  // Attach flip listeners
  item.querySelectorAll('.polaroid-card, .flip-hint-btn').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.replace-photo-btn')) return;
      item.classList.toggle('flipped');
    });
  });

  // Attach photo replace listener
  item.querySelector('.replace-photo-btn').addEventListener('click', (e) => {
    activeImageTargetId = newId;
    photoFileInput.click();
  });

  grid.appendChild(item);
  item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ==========================================================================
// SPOTIFY PLAYLIST & INTERACTIVE AUDIO PLAYER
// ==========================================================================
let currentTrackIdx = 0;
let isMixtapePlaying = false;
let currentElapsedSecs = 0;
let isShuffleActive = false;
let isRepeatActive = false;
let mixtapeTimer = null;
let synthTimer = null;
let currentChordIdx = 0;
let currentArpIdx = 0;

function setupSpotifyPlayer() {
  renderPlaylistTracklist();
  loadTrack(0);

  // Play / Pause toggle
  if (playerPlayBtn) {
    playerPlayBtn.addEventListener('click', () => {
      toggleMixtapePlay();
    });
  }

  // Next / Prev buttons
  if (playerNextBtn) {
    playerNextBtn.addEventListener('click', () => {
      playNextTrack();
    });
  }

  if (playerPrevBtn) {
    playerPrevBtn.addEventListener('click', () => {
      playPrevTrack();
    });
  }

  // Shuffle toggle
  if (playerShuffleBtn) {
    playerShuffleBtn.addEventListener('click', () => {
      isShuffleActive = !isShuffleActive;
      playerShuffleBtn.classList.toggle('active', isShuffleActive);
    });
  }

  // Repeat toggle
  if (playerRepeatBtn) {
    playerRepeatBtn.addEventListener('click', () => {
      isRepeatActive = !isRepeatActive;
      playerRepeatBtn.classList.toggle('active', isRepeatActive);
    });
  }

  // Scrubber seeking
  if (scrubberBar) {
    scrubberBar.addEventListener('click', (e) => {
      const rect = scrubberBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      const track = PLAYLIST_TRACKS[currentTrackIdx];
      currentElapsedSecs = Math.floor(pct * track.duration);
      updateScrubberUI(track);
    });
  }

  // Modals: How to Scan Guide
  if (howToScanBtn) {
    howToScanBtn.addEventListener('click', () => {
      if (scanGuideModal) scanGuideModal.classList.remove('hidden');
    });
  }

  if (closeScanModalBtn) {
    closeScanModalBtn.addEventListener('click', () => {
      if (scanGuideModal) scanGuideModal.classList.add('hidden');
    });
  }

  if (guideCloseBtn) {
    guideCloseBtn.addEventListener('click', () => {
      if (scanGuideModal) scanGuideModal.classList.add('hidden');
    });
  }

  if (scanGuideModal) {
    scanGuideModal.addEventListener('click', (e) => {
      if (e.target === scanGuideModal) scanGuideModal.classList.add('hidden');
    });
  }

  // Modals: Lightbox Full Card
  if (expandCodeBtn) {
    expandCodeBtn.addEventListener('click', () => {
      if (lightboxModal) lightboxModal.classList.remove('hidden');
    });
  }

  if (closeLightboxBtn) {
    closeLightboxBtn.addEventListener('click', () => {
      if (lightboxModal) lightboxModal.classList.add('hidden');
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) lightboxModal.classList.add('hidden');
    });
  }

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (scanGuideModal) scanGuideModal.classList.add('hidden');
      if (lightboxModal) lightboxModal.classList.add('hidden');
    }
  });
}

function renderPlaylistTracklist() {
  if (!playlistTracksList) return;
  playlistTracksList.innerHTML = '';
  
  if (tracksCount) {
    tracksCount.textContent = `${PLAYLIST_TRACKS.length} TRACKS`;
  }

  PLAYLIST_TRACKS.forEach((track, idx) => {
    const row = document.createElement('div');
    row.className = `track-row ${idx === currentTrackIdx ? 'active' : ''}`;
    row.dataset.idx = idx;
    row.innerHTML = `
      <span class="track-num">${idx + 1}</span>
      <div class="track-meta">
        <div class="track-row-title">${escapeHTML(track.title)}</div>
        <div class="track-row-artist">${escapeHTML(track.artist)}</div>
      </div>
      <span class="track-row-time">${track.durationStr}</span>
    `;

    row.addEventListener('click', () => {
      currentTrackIdx = idx;
      currentElapsedSecs = 0;
      loadTrack(currentTrackIdx);
      startMixtapeAudio();
    });

    playlistTracksList.appendChild(row);
  });
}

function loadTrack(idx) {
  const track = PLAYLIST_TRACKS[idx];
  if (!track) return;

  if (currentTrackName) currentTrackName.textContent = track.title;
  if (currentTrackArtist) currentTrackArtist.textContent = track.artist;
  if (currentTrackDedication) currentTrackDedication.textContent = track.dedication;
  if (timeTotal) timeTotal.textContent = track.durationStr;
  
  updateScrubberUI(track);

  // Update active row
  if (playlistTracksList) {
    const rows = playlistTracksList.querySelectorAll('.track-row');
    rows.forEach((r, i) => {
      r.classList.toggle('active', i === idx);
    });
  }

  currentChordIdx = 0;
  currentArpIdx = 0;
}

function updateScrubberUI(track) {
  if (timeCurrent) timeCurrent.textContent = formatAudioTime(currentElapsedSecs);
  if (scrubberProgress) {
    const pct = (currentElapsedSecs / track.duration) * 100;
    scrubberProgress.style.width = `${pct}%`;
  }
}

function formatAudioTime(totalSecs) {
  const mins = Math.floor(totalSecs / 60);
  const secs = totalSecs % 60;
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

function toggleMixtapePlay() {
  if (isMixtapePlaying) {
    pauseMixtapeAudio();
  } else {
    startMixtapeAudio();
  }
}

function startMixtapeAudio() {
  initAudioContext();
  isMixtapePlaying = true;
  appState.musicPlaying = true;

  const track = PLAYLIST_TRACKS[currentTrackIdx];

  // Visual cues
  if (playerPlayIcon) playerPlayIcon.classList.add('hidden');
  if (playerPauseIcon) playerPauseIcon.classList.remove('hidden');
  if (spotifyCardOuter) spotifyCardOuter.classList.add('is-playing');
  if (equalizerBars) equalizerBars.classList.add('active');
  if (nowPlayingBox) nowPlayingBox.classList.add('playing');

  // Header sound bar sync
  if (musicLabel) musicLabel.textContent = `♫ ${track.title}`;
  if (toggleMusicBtn) toggleMusicBtn.classList.add('primary');

  // Play progress clock
  if (mixtapeTimer) clearInterval(mixtapeTimer);
  mixtapeTimer = setInterval(() => {
    currentElapsedSecs++;
    updateScrubberUI(track);

    if (currentElapsedSecs >= track.duration) {
      if (isRepeatActive) {
        currentElapsedSecs = 0;
        updateScrubberUI(track);
      } else {
        playNextTrack();
      }
    }
  }, 1000);

  // Synthesizer Harmonic Melodic Engine
  startSongMelody(track);
}

function pauseMixtapeAudio() {
  isMixtapePlaying = false;
  appState.musicPlaying = false;

  if (playerPlayIcon) playerPlayIcon.classList.remove('hidden');
  if (playerPauseIcon) playerPauseIcon.classList.add('hidden');
  if (spotifyCardOuter) spotifyCardOuter.classList.remove('is-playing');
  if (equalizerBars) equalizerBars.classList.remove('active');
  if (nowPlayingBox) nowPlayingBox.classList.remove('playing');

  if (musicLabel) musicLabel.textContent = "Soundtrack: Paused";
  if (toggleMusicBtn) toggleMusicBtn.classList.remove('primary');

  if (mixtapeTimer) clearInterval(mixtapeTimer);
  if (synthTimer) clearTimeout(synthTimer);
}

function playNextTrack() {
  if (isShuffleActive && PLAYLIST_TRACKS.length > 1) {
    let nextIdx;
    do {
      nextIdx = Math.floor(Math.random() * PLAYLIST_TRACKS.length);
    } while (nextIdx === currentTrackIdx);
    currentTrackIdx = nextIdx;
  } else {
    currentTrackIdx = (currentTrackIdx + 1) % PLAYLIST_TRACKS.length;
  }

  currentElapsedSecs = 0;
  loadTrack(currentTrackIdx);
  if (isMixtapePlaying) {
    startMixtapeAudio();
  }
}

function playPrevTrack() {
  if (currentElapsedSecs > 4) {
    currentElapsedSecs = 0;
    updateScrubberUI(PLAYLIST_TRACKS[currentTrackIdx]);
    return;
  }

  currentTrackIdx = (currentTrackIdx - 1 + PLAYLIST_TRACKS.length) % PLAYLIST_TRACKS.length;
  currentElapsedSecs = 0;
  loadTrack(currentTrackIdx);
  if (isMixtapePlaying) {
    startMixtapeAudio();
  }
}

// Romantic Acoustic Harmonic Synth Engine
function startSongMelody(track) {
  if (synthTimer) clearTimeout(synthTimer);

  function stepArpeggio() {
    if (!isMixtapePlaying) return;

    const chords = track.chords;
    const currentChord = chords[currentChordIdx % chords.length];
    const arpPattern = track.arpPattern;
    const noteIdxInChord = arpPattern[currentArpIdx % arpPattern.length];
    const freq = currentChord[noteIdxInChord];

    // Play note with gentle warm bell tone
    playLushTone(freq, 2.2);

    currentArpIdx++;
    if (currentArpIdx % arpPattern.length === 0) {
      currentChordIdx = (currentChordIdx + 1) % chords.length;
    }

    // Tempo: ~340ms per arpeggio note (relaxed romantic ballad speed)
    synthTimer = setTimeout(stepArpeggio, 340);
  }

  stepArpeggio();
}

function playLushTone(freq, duration = 2.0) {
  try {
    initAudioContext();
    const now = audioCtx.currentTime;

    const osc1 = audioCtx.createOscillator();
    const osc2 = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    // Soft warm triangle + sine mix
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 1.002, now); // subtle lush chorus detune

    // Warm analog low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, now);
    filter.frequency.exponentialRampToValueAtTime(800, now + duration);

    // Envelope
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.065, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(filter);
    filter.connect(audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  } catch (e) {
    // Audio context may require click
  }
}

// ==========================================================================
// CINEMA OF LOVE — VIDEO KEEPSAKES LOGIC
// ==========================================================================
function setupVideoCinema() {
  const featuredVideoPlayer = document.getElementById('featured-video-player');
  const currentVideoTitle = document.getElementById('current-video-title');
  const currentVideoSub = document.getElementById('current-video-sub');
  const videoCards = document.querySelectorAll('.video-card-item');

  if (!featuredVideoPlayer) return;

  // Auto-pause background music/mixtape when video begins playing
  featuredVideoPlayer.addEventListener('play', () => {
    if (isMixtapePlaying) {
      pauseMixtapeAudio();
    }
    if (appState.musicPlaying) {
      stopAmbientMusic();
    }
  });

  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      videoCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const videoSrc = card.dataset.videoSrc;
      const title = card.dataset.title;
      const sub = card.dataset.sub;

      if (currentVideoTitle) currentVideoTitle.textContent = title;
      if (currentVideoSub) currentVideoSub.textContent = sub;

      featuredVideoPlayer.src = videoSrc;
      featuredVideoPlayer.load();
      featuredVideoPlayer.play().catch(e => {
        // Autoplay may wait for user click on player
      });
    });
  });
}

// Photo upload binding
function setupPhotoUpload() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.replace-photo-btn');
    if (btn) {
      e.stopPropagation();
      activeImageTargetId = btn.dataset.target;
      photoFileInput.click();
    }
  });

  photoFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && activeImageTargetId) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const targetImg = document.getElementById(activeImageTargetId);
        if (targetImg) {
          targetImg.src = event.target.result;
          // Save to local storage
          const savedPhotos = JSON.parse(localStorage.getItem('birthday_silk_photos') || '{}');
          savedPhotos[activeImageTargetId] = event.target.result;
          try {
            localStorage.setItem('birthday_silk_photos', JSON.stringify(savedPhotos));
          } catch (storageErr) {
            console.warn("Storage full for large photo, displayed in-session only:", storageErr);
          }
        }
      };
      reader.readAsDataURL(file);
    }
    photoFileInput.value = '';
  });
}

// --- Wax-Sealed Envelope & Love Letter ---
function setupEnvelope() {
  sealedEnvelope.addEventListener('click', () => {
    openEnvelope();
  });

  closeLetterBtn.addEventListener('click', () => {
    closeEnvelope();
  });

  editLetterBtn.addEventListener('click', () => {
    openModal();
  });
}

function openEnvelope() {
  sealedEnvelope.classList.add('hidden');
  unfoldedLetter.classList.remove('hidden');
  unfoldedLetter.scrollIntoView({ behavior: 'smooth', block: 'center' });
  triggerSilkConfetti(25);
}

function closeEnvelope() {
  unfoldedLetter.classList.add('hidden');
  sealedEnvelope.classList.remove('hidden');
  sealedEnvelope.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// --- 23 Reasons Jar ---
function setupJar() {
  function drawReason() {
    currentReasonIdx = (currentReasonIdx + 1) % REASONS.length;
    drawnCounter.textContent = `REASON Nº ${currentReasonIdx + 1} OF 23`;
    drawnText.style.opacity = '0';
    drawnText.style.transform = 'translateY(10px)';

    setTimeout(() => {
      drawnText.textContent = `“${REASONS[currentReasonIdx]}”`;
      drawnText.style.opacity = '1';
      drawnText.style.transform = 'translateY(0)';
    }, 200);

    // subtle jar shake
    interactiveJar.style.transform = 'rotate(-8deg) scale(1.08)';
    setTimeout(() => {
      interactiveJar.style.transform = 'rotate(8deg) scale(1.08)';
      setTimeout(() => {
        interactiveJar.style.transform = 'none';
      }, 150);
    }, 150);
  }

  drawNextBtn.addEventListener('click', drawReason);
  interactiveJar.addEventListener('click', drawReason);
}

// --- Floating Sky Lantern Wishmaker ---
function setupLanterns() {
  releaseLanternBtn.addEventListener('click', () => {
    releaseWishLantern();
  });

  wishInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      releaseWishLantern();
    }
  });
}

function releaseWishLantern() {
  const text = wishInput.value.trim();
  if (!text) {
    wishInput.focus();
    return;
  }

  if (skyHint) skyHint.style.display = 'none';

  const lantern = document.createElement('div');
  lantern.className = 'floating-lantern';
  
  // Random horizontal position within sky box
  const leftPos = Math.floor(Math.random() * 70) + 15;
  lantern.style.left = `${leftPos}%`;

  lantern.innerHTML = `
    <div class="lantern-orb"></div>
    <div class="lantern-label">${escapeHTML(text)}</div>
  `;

  lanternsSky.appendChild(lantern);
  wishInput.value = '';

  // Soft sparkle
  playBellTone(660);

  setTimeout(() => {
    lantern.remove();
  }, 9500);
}

// --- Customization Modal ---
function setupModal() {
  openCustomizeBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  customizeModal.addEventListener('click', (e) => {
    if (e.target === customizeModal) closeModal();
  });

  saveSettingsBtn.addEventListener('click', () => {
    if (inputHerName && inputHerName.value.trim()) appState.girlfriendName = inputHerName.value.trim();
    if (inputYourName && inputYourName.value.trim()) appState.senderName = inputYourName.value.trim();
    if (inputPlaylistTitle && inputPlaylistTitle.value.trim()) appState.playlistTitle = inputPlaylistTitle.value.trim();
    if (inputSpotifyUrl && inputSpotifyUrl.value.trim()) appState.spotifyUrl = inputSpotifyUrl.value.trim();
    if (inputTagline && inputTagline.value.trim()) appState.tagline = inputTagline.value.trim();
    if (inputLetter && inputLetter.value.trim()) appState.letterText = inputLetter.value.trim();

    saveState();
    applyStateToUI();
    closeModal();
    triggerSilkConfetti(20);
  });

  resetDefaultsBtn.addEventListener('click', () => {
    if (confirm("Reset to default text and name?")) {
      appState = { ...DEFAULT_STATE };
      saveState();
      applyStateToUI();
      closeModal();
    }
  });

  // Scroll to top button in footer
  const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function openModal() {
  if (inputHerName) inputHerName.value = appState.girlfriendName;
  if (inputYourName) inputYourName.value = appState.senderName;
  if (inputPlaylistTitle) inputPlaylistTitle.value = appState.playlistTitle;
  if (inputSpotifyUrl) inputSpotifyUrl.value = appState.spotifyUrl;
  if (inputTagline) inputTagline.value = appState.tagline;
  if (inputLetter) inputLetter.value = appState.letterText;
  customizeModal.classList.remove('hidden');
}

function closeModal() {
  customizeModal.classList.add('hidden');
}

// --- Web Audio Synthesizer (Serene Music Box & Chimes) ---
let audioCtx = null;
let melodyTimer = null;

function setupAudioSynth() {
  if (toggleMusicBtn) {
    toggleMusicBtn.addEventListener('click', () => {
      if (isMixtapePlaying) {
        pauseMixtapeAudio();
      } else {
        startMixtapeAudio();
      }
    });
  }
}

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Gentle serene chord progression (Cmaj9, Am9, Fmaj7, Gsus4)
const MELODY_NOTES = [
  // Cmaj9
  [261.63, 329.63, 392.00, 493.88],
  // Am9
  [220.00, 261.63, 329.63, 392.00],
  // Fmaj7
  [174.61, 261.63, 329.63, 349.23],
  // Gsus4 / G
  [196.00, 261.63, 392.00, 493.88]
];

let chordIndex = 0;

function startAmbientMusic() {
  initAudioContext();
  appState.musicPlaying = true;
  musicLabel.textContent = "Ambient Melody: On";
  toggleMusicBtn.classList.add('primary');

  function playNextChord() {
    if (!appState.musicPlaying) return;
    const chord = MELODY_NOTES[chordIndex];
    chord.forEach((freq, i) => {
      setTimeout(() => {
        if (appState.musicPlaying) {
          playBellTone(freq, 2.5);
        }
      }, i * 350);
    });

    chordIndex = (chordIndex + 1) % MELODY_NOTES.length;
    melodyTimer = setTimeout(playNextChord, 3200);
  }

  playNextChord();
}

function stopAmbientMusic() {
  appState.musicPlaying = false;
  musicLabel.textContent = "Ambient Melody: Off";
  toggleMusicBtn.classList.remove('primary');
  if (melodyTimer) clearTimeout(melodyTimer);
}

function playBellTone(freq, duration = 1.8) {
  try {
    initAudioContext();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    // Audio context may require user interaction
  }
}

function playCelebrationChime() {
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((n, idx) => {
    setTimeout(() => {
      playBellTone(n, 2.8);
    }, idx * 160);
  });
}

// --- Silk White & Gold Confetti Particle Cannon ---
function triggerSilkConfetti(particleCount = 50) {
  const confettiCanvas = document.createElement('canvas');
  confettiCanvas.style.position = 'fixed';
  confettiCanvas.style.top = '0';
  confettiCanvas.style.left = '0';
  confettiCanvas.style.width = '100vw';
  confettiCanvas.style.height = '100vh';
  confettiCanvas.style.pointerEvents = 'none';
  confettiCanvas.style.zIndex = '9999';
  document.body.appendChild(confettiCanvas);

  const cCtx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const particles = [];
  const colors = [
    '#FFFFFF', '#FDFBF7', '#EAE6DF', '#C2A676', '#D6AF5D', 'rgba(255,255,255,0.9)'
  ];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: window.innerWidth / 2 + (Math.random() * 200 - 100),
      y: window.innerHeight * 0.45,
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 14 - 6,
      size: Math.random() * 9 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      opacity: 1,
      shape: Math.random() > 0.4 ? 'rect' : 'circle'
    });
  }

  let animationFrame;
  function updateConfetti() {
    cCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    let activeParticles = 0;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.38; // gravity
      p.vx *= 0.985;
      p.rotation += p.vRot;
      p.opacity -= 0.009;

      if (p.opacity > 0 && p.y < confettiCanvas.height) {
        activeParticles++;
        cCtx.save();
        cCtx.translate(p.x, p.y);
        cCtx.rotate((p.rotation * Math.PI) / 180);
        cCtx.globalAlpha = Math.max(0, p.opacity);
        cCtx.fillStyle = p.color;

        if (p.shape === 'rect') {
          cCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        } else {
          cCtx.beginPath();
          cCtx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          cCtx.fill();
        }
        cCtx.restore();
      }
    });

    if (activeParticles > 0) {
      animationFrame = requestAnimationFrame(updateConfetti);
    } else {
      cancelAnimationFrame(animationFrame);
      confettiCanvas.remove();
    }
  }

  updateConfetti();
}

// --- Ambient Canvas Particles (Gentle floating silk motes) ---
function setupAmbientCanvas() {
  let width, height;
  function resize() {
    width = ambientCanvas.width = window.innerWidth;
    height = ambientCanvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const motes = [];
  const moteCount = 38;

  for (let i = 0; i < moteCount; i++) {
    motes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      alpha: Math.random() * 0.45 + 0.1,
      fadeSpeed: Math.random() * 0.005 + 0.002
    });
  }

  function renderMotes() {
    ctx.clearRect(0, 0, width, height);

    motes.forEach(m => {
      m.x += m.speedX;
      m.y += m.speedY;
      m.alpha += m.fadeSpeed;

      if (m.alpha > 0.6 || m.alpha < 0.1) {
        m.fadeSpeed = -m.fadeSpeed;
      }

      if (m.y < -10) {
        m.y = height + 10;
        m.x = Math.random() * width;
      }
      if (m.x < -10) m.x = width + 10;
      if (m.x > width + 10) m.x = -10;

      ctx.beginPath();
      ctx.arc(m.x, m.y, m.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(194, 166, 118, ${m.alpha * 0.4})`;
      ctx.fill();

      // soft glow
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.radius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${m.alpha * 0.8})`;
      ctx.fill();
    });

    requestAnimationFrame(renderMotes);
  }

  renderMotes();
}

// Start everything when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
