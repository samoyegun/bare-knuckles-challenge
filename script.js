// ===== QUIZ DATA (Round 1: "How Ready Are You?") =====
// Structure supports easy swapping for monthly rounds
const QUIZ_DATA = {
  round: 1,
  title: "How Ready Are You?",
  questions: [
    {
      text: "Your friend introduces you to someone fine at a hangout. What's your first move?",
      options: [
        { letter: "A", text: "Check their vibe and energy first — looks fade", points: 3 },
        { letter: "B", text: "Shoot your shot immediately, life is short", points: 1 },
        { letter: "C", text: "Observe from a distance for a while before making any move", points: 2 },
        { letter: "D", text: "Ask your friend what their character is like before anything", points: 4 }
      ]
    },
    {
      text: "What's the #1 thing that makes you attracted to someone?",
      options: [
        { letter: "A", text: "Their ambition and drive", points: 3 },
        { letter: "B", text: "Physical attraction — let's be honest", points: 1 },
        { letter: "C", text: "Their relationship with God", points: 4 },
        { letter: "D", text: "How they treat other people", points: 3 }
      ]
    },
    {
      text: "You and your partner disagree about something serious. What do you do?",
      options: [
        { letter: "A", text: "Talk it out immediately, even if it gets heated", points: 2 },
        { letter: "B", text: "Give it space — revisit when emotions cool down", points: 3 },
        { letter: "C", text: "Pray about it first, then address it calmly", points: 4 },
        { letter: "D", text: "Stand your ground — if you're right, you're right", points: 1 }
      ]
    },
    {
      text: "Your partner earns significantly less money than you. How do you feel?",
      options: [
        { letter: "A", text: "No problem at all — money isn't everything", points: 3 },
        { letter: "B", text: "Slightly uncomfortable but I'd manage", points: 2 },
        { letter: "C", text: "It depends on whether they're hardworking or lazy", points: 4 },
        { letter: "D", text: "That's a dealbreaker honestly", points: 1 }
      ]
    },
    {
      text: "How would you describe what marriage actually is?",
      options: [
        { letter: "A", text: "A partnership between two people who love each other", points: 2 },
        { letter: "B", text: "A covenant that reflects how God relates to His people", points: 4 },
        { letter: "C", text: "A legal and social commitment", points: 1 },
        { letter: "D", text: "The ultimate expression of romantic love", points: 2 }
      ]
    },
    {
      text: "You find out your partner has a large debt they didn't tell you about. What's your reaction?",
      options: [
        { letter: "A", text: "That's a betrayal of trust — I need to seriously reconsider", points: 2 },
        { letter: "B", text: "Let's sit down and make a plan to tackle it together", points: 4 },
        { letter: "C", text: "It depends on how much and what it was for", points: 3 },
        { letter: "D", text: "Everyone has secrets, it's not that deep", points: 1 }
      ]
    },
    {
      text: "In a marriage, who should manage the money?",
      options: [
        { letter: "A", text: "Whoever is better with finances, regardless of gender", points: 3 },
        { letter: "B", text: "The man — he's the head of the home", points: 1 },
        { letter: "C", text: "Both should manage it together with full transparency", points: 4 },
        { letter: "D", text: "Keep finances separate — what's mine is mine", points: 1 }
      ]
    },
    {
      text: "Your partner wants to relocate to another city for a big career opportunity. You'd have to leave everything behind. What do you do?",
      options: [
        { letter: "A", text: "Support them fully — their growth is our growth", points: 3 },
        { letter: "B", text: "Have a serious conversation about what works for BOTH of us", points: 4 },
        { letter: "C", text: "That's a tough one — I'd need a lot of convincing", points: 2 },
        { letter: "D", text: "No — they need to find an opportunity where we already are", points: 1 }
      ]
    },
    {
      text: "What does 'submitting' or 'leading' in a home mean to you?",
      options: [
        { letter: "A", text: "The man makes final decisions and the woman follows", points: 1 },
        { letter: "B", text: "Leading means serving. Submitting means trusting. It's mutual respect.", points: 4 },
        { letter: "C", text: "Those are outdated ideas — marriage should be 50/50", points: 2 },
        { letter: "D", text: "I honestly haven't thought deeply about this yet", points: 2 }
      ]
    },
    {
      text: "If God told you to wait 3 more years before getting married, would you?",
      options: [
        { letter: "A", text: "Absolutely — God's timing is perfect", points: 4 },
        { letter: "B", text: "I'd struggle but I'd try to obey", points: 3 },
        { letter: "C", text: "That depends on the reason", points: 2 },
        { letter: "D", text: "Three years? That's a lot to ask", points: 1 }
      ]
    }
  ]
};

// ===== RESULT TYPES =====
const RESULT_TYPES = [
  {
    name: "The Foundation Layer",
    range: [10, 16],
    tagline: "You're at the starting line — and that's okay. This program is built for you.",
    description: "Real talk — you've got some ground to cover when it comes to understanding what marriage really demands. But that's not a knock, it's an invitation. Bare Knuckles exists for people who are honest enough to admit they don't have it all figured out. Come learn. Come grow. Come ready."
  },
  {
    name: "The Romantic Realist",
    range: [17, 22],
    tagline: "You've got heart, but some of your ideas about marriage need sharpening.",
    description: "You feel things deeply and that's a strength — but feelings alone can't carry a covenant. Some of your instincts are solid, others are shaped more by culture than by truth. Bare Knuckles will challenge what you think you know and replace it with what actually works."
  },
  {
    name: "The Builder",
    range: [23, 28],
    tagline: "You're thinking practically. You understand marriage takes work, not just love.",
    description: "You've moved past fairy tales. You know that love is a decision, not just an emotion, and that marriage is something you build brick by brick. You've got a strong foundation — Bare Knuckles will help you reinforce it with wisdom that lasts."
  },
  {
    name: "The Covenant Keeper",
    range: [29, 34],
    tagline: "You see marriage through a deeper lens. You're closer to ready than you think.",
    description: "You're operating from a place of purpose, not just passion. You understand that marriage is a covenant, not a contract — and that changes everything. Come to Bare Knuckles not because you need fixing, but because iron sharpens iron."
  },
  {
    name: "The Ready One",
    range: [35, 40],
    tagline: "Your mindset is solid. Now come sharpen it even further at Bare Knuckles.",
    description: "You've done the inner work. Your understanding of marriage is rooted in faith, wisdom, and intentionality. But even the sharpest blade needs a whetstone. Bare Knuckles will push you further and surround you with people who match your seriousness."
  }
];

// ===== SUPABASE CLIENT =====
const SUPABASE_URL = 'https://kwgretcswdjhszhnfgaw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_NZ2VWfY2XWG0U1aQbx926g_H24skxZb';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Generate a persistent device ID to identify this browser
function getDeviceId() {
  let id = localStorage.getItem('bk_device_id');
  if (!id) {
    id = 'dev_' + crypto.randomUUID();
    localStorage.setItem('bk_device_id', id);
  }
  return id;
}

// ===== DATA LAYER (Supabase-backed with localStorage cache) =====
const DataStore = {
  _cache: {},

  // --- Player record management ---
  async ensurePlayer() {
    const deviceId = getDeviceId();
    // Check if player exists in Supabase
    const { data } = await supabase
      .from('players')
      .select('*')
      .eq('device_id', deviceId)
      .single();

    if (data) {
      this._cache = data;
      // Sync to localStorage for offline fallback
      this._syncToLocal(data);
      return data;
    }

    // Create new player
    const referralCode = generateReferralCode();
    const { data: newPlayer, error } = await supabase
      .from('players')
      .insert({
        device_id: deviceId,
        referral_code: referralCode
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating player:', error);
      // Fallback to localStorage
      localStorage.setItem('bk_referralCode', referralCode);
      return null;
    }

    this._cache = newPlayer;
    this._syncToLocal(newPlayer);
    return newPlayer;
  },

  _syncToLocal(data) {
    if (data.score != null) localStorage.setItem('bk_score', JSON.stringify(data.score));
    if (data.display_name) localStorage.setItem('bk_displayName', data.display_name);
    if (data.referral_code) localStorage.setItem('bk_referralCode', data.referral_code);
    if (data.result_type) localStorage.setItem('bk_resultType', data.result_type);
    if (data.quiz_completed) localStorage.setItem('bk_quizCompleted', '1');
    localStorage.setItem('bk_referralCount', String(data.referral_count || 0));
  },

  async _updatePlayer(fields) {
    const deviceId = getDeviceId();
    const { error } = await supabase
      .from('players')
      .update({ ...fields, updated_at: new Date().toISOString() })
      .eq('device_id', deviceId);

    if (error) console.error('Update error:', error);
    Object.assign(this._cache, fields);
  },

  // --- Score ---
  async saveScore(score) {
    localStorage.setItem('bk_score', JSON.stringify(score));
    await this._updatePlayer({ score });
  },

  getScore() {
    const data = localStorage.getItem('bk_score');
    return data ? JSON.parse(data) : null;
  },

  // --- Display Name ---
  async saveDisplayName(name) {
    localStorage.setItem('bk_displayName', name);
    await this._updatePlayer({ display_name: name });
  },

  getDisplayName() {
    return localStorage.getItem('bk_displayName') || '';
  },

  // --- Referral Code ---
  saveReferralCode(code) {
    localStorage.setItem('bk_referralCode', code);
    // Already saved in ensurePlayer, no extra call needed
  },

  getReferralCode() {
    return localStorage.getItem('bk_referralCode') || '';
  },

  // --- Referred By ---
  saveReferredBy(code) {
    localStorage.setItem('bk_referredBy', code);
  },

  getReferredBy() {
    return localStorage.getItem('bk_referredBy') || '';
  },

  saveReferrerName(name) {
    localStorage.setItem('bk_referrerName', name);
  },

  getReferrerName() {
    return localStorage.getItem('bk_referrerName') || '';
  },

  // --- Referral Count ---
  async incrementReferralCount(referrerCode) {
    // Increment the REFERRER's count in the database
    const { error } = await supabase.rpc('increment_referral_count', { ref_code: referrerCode });
    if (error) console.error('Referral increment error:', error);
  },

  getReferralCount() {
    return parseInt(localStorage.getItem('bk_referralCount') || '0', 10);
  },

  // --- Quiz Completion ---
  async setQuizCompleted(completed) {
    localStorage.setItem('bk_quizCompleted', completed ? '1' : '0');
    await this._updatePlayer({ quiz_completed: completed });
  },

  isQuizCompleted() {
    return localStorage.getItem('bk_quizCompleted') === '1';
  },

  // --- Result Type ---
  async saveResultType(typeName) {
    localStorage.setItem('bk_resultType', typeName);
    await this._updatePlayer({ result_type: typeName });
  },

  getResultType() {
    return localStorage.getItem('bk_resultType') || '';
  },

  // --- Leaderboard (REAL DATA from Supabase) ---
  async getLeaderboard() {
    const { data, error } = await supabase
      .from('players')
      .select('display_name, referral_count, referral_code')
      .not('display_name', 'is', null)
      .gt('referral_count', 0)
      .order('referral_count', { ascending: false })
      .limit(10);

    if (error || !data) {
      console.error('Leaderboard error:', error);
      // Fallback: just show current user
      const userName = this.getDisplayName();
      const userCount = this.getReferralCount();
      return userName ? [{ name: userName, count: userCount, isCurrentUser: true }] : [];
    }

    const myCode = this.getReferralCode();
    const leaderboard = data.map(row => ({
      name: row.display_name,
      count: row.referral_count,
      isCurrentUser: row.referral_code === myCode
    }));

    // If current user has a name but isn't in top 10, add them
    const userName = this.getDisplayName();
    if (userName && !leaderboard.find(e => e.isCurrentUser)) {
      const userCount = this.getReferralCount();
      leaderboard.push({ name: userName, count: userCount, isCurrentUser: true });
    }

    return leaderboard;
  },

  // --- Referrer lookup (find who referred this user) ---
  async getReferrerByCode(code) {
    const { data } = await supabase
      .from('players')
      .select('display_name')
      .eq('referral_code', code)
      .single();

    return data ? data.display_name : null;
  },

  // --- Refresh own data from Supabase ---
  async refreshFromServer() {
    const deviceId = getDeviceId();
    const { data } = await supabase
      .from('players')
      .select('*')
      .eq('device_id', deviceId)
      .single();

    if (data) {
      this._cache = data;
      this._syncToLocal(data);
    }
    return data;
  }
};

// ===== UTILITY =====
function generateReferralCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

function getResultType(score) {
  for (const type of RESULT_TYPES) {
    if (score >= type.range[0] && score <= type.range[1]) {
      return type;
    }
  }
  return RESULT_TYPES[0];
}

function getSiteUrl() {
  return window.location.origin + window.location.pathname;
}

// ===== APP STATE =====
let currentQuestion = 0;
let totalScore = 0;
let previousScreen = 'screenLanding';

// ===== SCREEN NAVIGATION =====
function showScreen(screenId) {
  const prevActive = document.querySelector('.screen.active');
  if (prevActive) {
    previousScreen = prevActive.id;
    prevActive.classList.remove('active');
  }

  const nextScreen = document.getElementById(screenId);
  nextScreen.classList.add('active');

  // Show top nav on all screens except landing
  const topNav = document.getElementById('topNav');
  const isLanding = screenId === 'screenLanding';

  if (isLanding) {
    topNav.classList.add('hidden');
    nextScreen.classList.remove('has-nav');
  } else {
    topNav.classList.remove('hidden');
    nextScreen.classList.add('has-nav');
  }

  window.scrollTo(0, 0);
}

// ===== QUIZ LOGIC =====
function renderQuestion(index) {
  const q = QUIZ_DATA.questions[index];
  const area = document.getElementById('questionArea');

  document.getElementById('progressCurrent').textContent = index + 1;
  document.getElementById('progressFill').style.width =
    ((index + 1) / QUIZ_DATA.questions.length * 100) + '%';

  const card = document.createElement('div');
  card.className = 'question-card';
  card.innerHTML = `
    <p class="question-text">${q.text}</p>
    <ul class="options-list">
      ${q.options.map((opt, i) => `
        <li class="option-card" data-index="${i}" data-points="${opt.points}">
          <span><span class="option-letter">${opt.letter})</span> ${opt.text}</span>
        </li>
      `).join('')}
    </ul>
  `;

  area.innerHTML = '';
  area.appendChild(card);

  // Attach option listeners
  card.querySelectorAll('.option-card').forEach(option => {
    option.addEventListener('click', () => handleOptionSelect(option, card));
  });
}

function handleOptionSelect(option, card) {
  // Prevent double-tap
  if (card.querySelector('.option-card.selected')) return;

  option.classList.add('selected');
  totalScore += parseInt(option.dataset.points, 10);

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion >= QUIZ_DATA.questions.length) {
      finishQuiz();
    } else {
      card.classList.add('exit');
      setTimeout(() => renderQuestion(currentQuestion), 300);
    }
  }, 500);
}

async function finishQuiz() {
  const resultType = getResultType(totalScore);

  // Save to Supabase + localStorage
  await DataStore.saveScore(totalScore);
  await DataStore.saveResultType(resultType.name);
  await DataStore.setQuizCompleted(true);

  // Handle referral tracking — NOW WORKS with Supabase!
  const referredBy = DataStore.getReferredBy();
  if (referredBy) {
    await DataStore.incrementReferralCount(referredBy);
    // Also save who referred this player
    await DataStore._updatePlayer({ referred_by: referredBy });
  }

  showResultScreen(totalScore, resultType);
}

function showResultScreen(score, resultType) {
  showScreen('screenResult');

  // Animate score counting up
  const scoreEl = document.getElementById('scoreNumber');
  scoreEl.textContent = '0';
  scoreEl.classList.add('score-animate');

  let current = 0;
  const duration = 1500;
  const increment = score / (duration / 30);
  const counter = setInterval(() => {
    current += increment;
    if (current >= score) {
      current = score;
      clearInterval(counter);
    }
    scoreEl.textContent = Math.round(current);
  }, 30);

  // Show type name with delay
  const typeNameEl = document.getElementById('typeName');
  const typeTaglineEl = document.getElementById('typeTagline');
  const typeDescEl = document.getElementById('typeDescription');

  typeNameEl.textContent = resultType.name.toUpperCase();
  typeTaglineEl.textContent = `"${resultType.tagline}"`;
  typeDescEl.textContent = resultType.description;

  typeNameEl.classList.add('type-animate');
  typeTaglineEl.classList.add('type-animate');

  // Share card
  document.getElementById('shareCardType').textContent = resultType.name.toUpperCase();
  document.getElementById('shareCardScore').textContent = `${score}/40`;

  // Set up WhatsApp share link on result screen
  const waShareText = encodeURIComponent(
    `I just took the Bare Knuckles Challenge and got "${resultType.name}"! 🔥\n\nHow ready are YOU for marriage? Take the quiz here: ${getSiteUrl()}`
  );
  document.getElementById('btnShareWhatsApp').href = `https://wa.me/?text=${waShareText}`;
}

// ===== SHARE / REFERRAL LOGIC =====
function setupShareScreen() {
  const existingName = DataStore.getDisplayName();
  if (existingName) {
    showShareContent(existingName);
  } else {
    document.getElementById('nameInputArea').classList.remove('hidden');
    document.getElementById('shareContent').classList.add('hidden');
  }
}

async function showShareContent(name) {
  document.getElementById('nameInputArea').classList.add('hidden');
  document.getElementById('shareContent').classList.remove('hidden');

  // Ensure referral code exists
  let code = DataStore.getReferralCode();
  if (!code) {
    code = generateReferralCode();
    DataStore.saveReferralCode(code);
  }

  // Refresh data from server to get latest referral count
  await DataStore.refreshFromServer();

  const shareUrl = getSiteUrl() + '?ref=' + code;
  document.getElementById('referralLinkText').textContent = shareUrl;
  document.getElementById('inviteCount').textContent = DataStore.getReferralCount();

  // WhatsApp share
  const resultType = DataStore.getResultType();
  const waText = encodeURIComponent(
    `I just took the Bare Knuckles Challenge and got "${resultType}"! 🔥\n\nHow ready are YOU for marriage? Take it here: ${shareUrl}`
  );
  document.getElementById('btnWhatsApp').href = `https://wa.me/?text=${waText}`;

  // Copy button
  document.getElementById('btnCopy').onclick = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      const confirm = document.getElementById('copyConfirm');
      confirm.classList.remove('hidden');
      setTimeout(() => confirm.classList.add('hidden'), 2000);
    });
  };

  // Render mini leaderboard
  await renderLeaderboard('miniLeaderboardList', 5);
}

// ===== LEADERBOARD =====
async function renderLeaderboard(elementId, limit) {
  const list = document.getElementById(elementId);

  // Show loading state
  list.innerHTML = '<li class="leaderboard-item" style="text-align:center;opacity:0.5;">Loading...</li>';

  const allData = await DataStore.getLeaderboard();
  const data = allData.slice(0, limit || 10);

  if (data.length === 0) {
    list.innerHTML = '<li class="leaderboard-item" style="text-align:center;opacity:0.5;">No referrals yet. Be the first!</li>';
    return;
  }

  list.innerHTML = data.map((entry, i) => `
    <li class="leaderboard-item${entry.isCurrentUser ? ' current-user' : ''}">
      <span class="leaderboard-rank">#${i + 1}</span>
      <span class="leaderboard-name">${entry.isCurrentUser ? entry.name + ' (You)' : entry.name}</span>
      <span class="leaderboard-count">${entry.count} invite${entry.count !== 1 ? 's' : ''}</span>
    </li>
  `).join('');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize player in Supabase (creates record if new)
  await DataStore.ensurePlayer();

  // Start quiz
  document.getElementById('btnStart').addEventListener('click', () => {
    currentQuestion = 0;
    totalScore = 0;
    showScreen('screenQuiz');
    renderQuestion(0);
  });

  // Home button — go back to landing
  document.getElementById('homeBtn').addEventListener('click', () => {
    showScreen('screenLanding');
  });

  // Challenge a friend
  document.getElementById('btnChallenge').addEventListener('click', () => {
    showScreen('screenShare');
    setupShareScreen();
  });

  // Save name
  document.getElementById('btnSaveName').addEventListener('click', async () => {
    const name = document.getElementById('inputName').value.trim();
    if (!name) return;
    await DataStore.saveDisplayName(name);
    showShareContent(name);
  });

  // Enter key on name input
  document.getElementById('inputName').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('btnSaveName').click();
    }
  });

  // Back to result
  document.getElementById('btnBackToResult').addEventListener('click', () => {
    showScreen('screenResult');
  });

  // Leaderboard toggle
  document.getElementById('leaderboardToggle').addEventListener('click', () => {
    showScreen('screenLeaderboard');
    renderLeaderboard('fullLeaderboardList', 10);
  });

  // Close leaderboard
  document.getElementById('btnCloseLeaderboard').addEventListener('click', () => {
    showScreen(previousScreen);
  });

  // Photo upload for share card — click area triggers hidden file input
  document.getElementById('shareCardPhoto').addEventListener('click', () => {
    document.getElementById('photoInput').click();
  });

  document.getElementById('photoInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const preview = document.getElementById('photoPreview');
      preview.src = ev.target.result;
      preview.classList.remove('hidden');
      document.getElementById('photoPlaceholder').classList.add('hidden');
    };
    reader.readAsDataURL(file);
  });

  // Download share card as image
  document.getElementById('btnDownloadCard').addEventListener('click', () => {
    const card = document.getElementById('shareCard');
    const btn = document.getElementById('btnDownloadCard');
    btn.textContent = 'SAVING...';

    html2canvas(card, {
      backgroundColor: '#0A0A0A',
      scale: 3,
      useCORS: true,
      logging: false,
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'bare-knuckles-result.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> SAVE CARD`;
    }).catch(() => {
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> SAVE CARD`;
    });
  });

  // Check for referral parameter
  const urlParams = new URLSearchParams(window.location.search);
  const refCode = urlParams.get('ref');
  if (refCode) {
    DataStore.saveReferredBy(refCode);
    const noteEl = document.getElementById('referralNote');
    const nameEl = document.getElementById('referrerName');

    // Try to look up referrer's name from Supabase
    const referrerName = await DataStore.getReferrerByCode(refCode);
    nameEl.textContent = referrerName || 'a friend';

    noteEl.classList.remove('hidden');
    window.history.replaceState({}, '', window.location.pathname);
  }

  // Check if user has already completed the quiz — show result
  if (DataStore.isQuizCompleted()) {
    const score = DataStore.getScore();
    const resultType = getResultType(score);
    showResultScreen(score, resultType);
  }
});
