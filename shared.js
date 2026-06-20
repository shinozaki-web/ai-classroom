// ===== BADGES =====
const BADGES = [
  {
    id: 'teytan',
    name: 'ていたん',
    region: '北九州市',
    desc: '環境キャラクター。ひまわりのバンダナがトレードマーク！',
    stepLabel: 'STEP 1クリア',
    bg: '#FFF8EB',
    border: '#F5A623',
    svgContent: `
      <circle cx="50" cy="50" r="48" fill="#FFF8EB" stroke="#F5A623" stroke-width="3"/>
      <!-- body -->
      <ellipse cx="50" cy="56" rx="22" ry="26" fill="#A8D8EA"/>
      <!-- head -->
      <circle cx="50" cy="32" r="18" fill="#A8D8EA"/>
      <!-- ears -->
      <ellipse cx="34" cy="22" rx="7" ry="9" fill="#A8D8EA"/>
      <ellipse cx="66" cy="22" rx="7" ry="9" fill="#A8D8EA"/>
      <ellipse cx="34" cy="22" rx="4" ry="6" fill="#FFB3C1"/>
      <ellipse cx="66" cy="22" rx="4" ry="6" fill="#FFB3C1"/>
      <!-- eyes -->
      <circle cx="44" cy="30" r="4" fill="white"/>
      <circle cx="56" cy="30" r="4" fill="white"/>
      <circle cx="45" cy="31" r="2.5" fill="#1a1a2e"/>
      <circle cx="57" cy="31" r="2.5" fill="#1a1a2e"/>
      <!-- nose/eco -->
      <text x="50" y="40" text-anchor="middle" font-size="8" font-weight="bold" fill="#2ecc71">エコ</text>
      <!-- bandana sunflower -->
      <rect x="34" y="42" width="32" height="8" rx="4" fill="#F5A623"/>
      <circle cx="50" cy="42" r="5" fill="#FFD700"/>
      <line x1="50" y1="37" x2="50" y2="34" stroke="#228B22" stroke-width="1.5"/>
      <circle cx="50" cy="33" r="2" fill="#FFD700"/>
    `
  },
  {
    id: 'jeemo',
    name: 'じーも',
    region: '門司区',
    desc: '門司港を元気にする門司区のキャラクター！',
    stepLabel: 'STEP 2クリア',
    bg: '#EBF4FF',
    border: '#4A90E2',
    svgContent: `
      <circle cx="50" cy="50" r="48" fill="#EBF4FF" stroke="#4A90E2" stroke-width="3"/>
      <!-- body -->
      <ellipse cx="50" cy="58" rx="20" ry="22" fill="#FF8C42"/>
      <!-- head -->
      <circle cx="50" cy="34" r="19" fill="#FF8C42"/>
      <!-- eyes big -->
      <circle cx="43" cy="31" r="6" fill="white"/>
      <circle cx="57" cy="31" r="6" fill="white"/>
      <circle cx="44" cy="32" r="3.5" fill="#1a1a2e"/>
      <circle cx="58" cy="32" r="3.5" fill="#1a1a2e"/>
      <circle cx="45" cy="31" r="1.2" fill="white"/>
      <circle cx="59" cy="31" r="1.2" fill="white"/>
      <!-- smile -->
      <path d="M 43 40 Q 50 46 57 40" stroke="#1a1a2e" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- cap - retro style -->
      <ellipse cx="50" cy="16" rx="21" ry="6" fill="#1a1a2e"/>
      <rect x="36" y="12" width="28" height="8" rx="3" fill="#1a1a2e"/>
      <!-- arms -->
      <ellipse cx="28" cy="57" rx="7" ry="10" fill="#FF8C42" transform="rotate(-15,28,57)"/>
      <ellipse cx="72" cy="57" rx="7" ry="10" fill="#FF8C42" transform="rotate(15,72,57)"/>
    `
  },
  {
    id: 'yahatan',
    name: 'ヤハタン',
    region: '八幡区',
    desc: '八幡ぎょうざPR隊長！熱い溶鉱炉から生まれたキャラ！',
    stepLabel: 'STEP 3クリア',
    bg: '#FFF0EE',
    border: '#F26B5B',
    svgContent: `
      <circle cx="50" cy="50" r="48" fill="#FFF0EE" stroke="#F26B5B" stroke-width="3"/>
      <!-- body round like gyoza -->
      <ellipse cx="50" cy="60" rx="24" ry="20" fill="#E8A87C"/>
      <!-- head -->
      <circle cx="50" cy="34" r="20" fill="#E8A87C"/>
      <!-- gyoza shape on head -->
      <ellipse cx="50" cy="16" rx="18" ry="7" fill="#F5CBA7"/>
      <path d="M 32 16 Q 50 10 68 16" stroke="#C9956C" stroke-width="1.5" fill="none"/>
      <!-- eyes -->
      <circle cx="43" cy="31" r="5" fill="white"/>
      <circle cx="57" cy="31" r="5" fill="white"/>
      <circle cx="44" cy="32" r="3" fill="#1a1a2e"/>
      <circle cx="58" cy="32" r="3" fill="#1a1a2e"/>
      <!-- rosy cheeks -->
      <circle cx="38" cy="38" r="5" fill="#FFB3C1" opacity="0.6"/>
      <circle cx="62" cy="38" r="5" fill="#FFB3C1" opacity="0.6"/>
      <!-- smile big -->
      <path d="M 40 39 Q 50 47 60 39" stroke="#1a1a2e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- scarf red -->
      <rect x="33" y="50" width="34" height="8" rx="4" fill="#E74C3C"/>
      <!-- hands holding gyoza -->
      <circle cx="28" cy="66" r="8" fill="#E8A87C"/>
      <circle cx="72" cy="66" r="8" fill="#E8A87C"/>
      <ellipse cx="28" cy="66" rx="6" ry="4" fill="#F5CBA7"/>
      <ellipse cx="72" cy="66" rx="6" ry="4" fill="#F5CBA7"/>
    `
  },
  {
    id: 'sunaq',
    name: 'すなQ',
    region: '北九州市',
    desc: '北九州のゆるキャラ！海や砂浜が大好きなキャラクター！',
    stepLabel: 'STEP 4クリア',
    bg: '#E8FBF2',
    border: '#34C88A',
    svgContent: `
      <circle cx="50" cy="50" r="48" fill="#E8FBF2" stroke="#34C88A" stroke-width="3"/>
      <!-- body crab-like -->
      <ellipse cx="50" cy="60" rx="22" ry="18" fill="#FF6B6B"/>
      <!-- head -->
      <circle cx="50" cy="36" r="19" fill="#FF6B6B"/>
      <!-- eyes on stalks -->
      <line x1="43" y1="20" x2="40" y2="14" stroke="#FF6B6B" stroke-width="3"/>
      <line x1="57" y1="20" x2="60" y2="14" stroke="#FF6B6B" stroke-width="3"/>
      <circle cx="40" cy="13" r="6" fill="white"/>
      <circle cx="60" cy="13" r="6" fill="white"/>
      <circle cx="40" cy="13" r="3.5" fill="#1a1a2e"/>
      <circle cx="60" cy="13" r="3.5" fill="#1a1a2e"/>
      <circle cx="41" cy="12" r="1.2" fill="white"/>
      <circle cx="61" cy="12" r="1.2" fill="white"/>
      <!-- smile -->
      <path d="M 41 42 Q 50 50 59 42" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- claws -->
      <ellipse cx="24" cy="58" rx="10" ry="7" fill="#FF6B6B" transform="rotate(-20,24,58)"/>
      <ellipse cx="19" cy="52" rx="6" ry="4" fill="#FF8E8E" transform="rotate(-40,19,52)"/>
      <ellipse cx="76" cy="58" rx="10" ry="7" fill="#FF6B6B" transform="rotate(20,76,58)"/>
      <ellipse cx="81" cy="52" rx="6" ry="4" fill="#FF8E8E" transform="rotate(40,81,52)"/>
      <!-- wave pattern on belly -->
      <path d="M 34 60 Q 40 55 46 60 Q 52 65 58 60 Q 64 55 68 60" stroke="white" stroke-width="1.5" fill="none" opacity="0.5"/>
    `
  },
  {
    id: 'sekimaru',
    name: 'せきまる',
    region: '下関市',
    desc: 'クジラとフグがモチーフ！奇兵隊の笠がトレードマーク！',
    stepLabel: '全ステップクリア',
    bg: '#F0EEFF',
    border: '#7C6FE0',
    svgContent: `
      <circle cx="50" cy="50" r="48" fill="#F0EEFF" stroke="#7C6FE0" stroke-width="3"/>
      <!-- whale-fugu body -->
      <ellipse cx="50" cy="57" rx="26" ry="22" fill="#A8C5DA"/>
      <!-- head round like fugu -->
      <circle cx="50" cy="33" r="22" fill="#A8C5DA"/>
      <!-- fugu spikes hint -->
      <circle cx="50" cy="11" r="4" fill="#A8C5DA"/>
      <circle cx="65" cy="15" r="3" fill="#A8C5DA"/>
      <circle cx="35" cy="15" r="3" fill="#A8C5DA"/>
      <!-- eyes -->
      <circle cx="42" cy="29" r="7" fill="white"/>
      <circle cx="58" cy="29" r="7" fill="white"/>
      <circle cx="43" cy="30" r="4" fill="#1a1a2e"/>
      <circle cx="59" cy="30" r="4" fill="#1a1a2e"/>
      <circle cx="44" cy="29" r="1.5" fill="white"/>
      <circle cx="60" cy="29" r="1.5" fill="white"/>
      <!-- small mouth -->
      <circle cx="50" cy="39" r="3" fill="#1a1a2e"/>
      <!-- kihentai kasa (hat) -->
      <ellipse cx="50" cy="12" rx="26" ry="6" fill="#8B6914"/>
      <path d="M 28 12 L 35 -2 L 65 -2 L 72 12 Z" fill="#A0822A"/>
      <rect x="36" y="-4" width="28" height="6" rx="3" fill="#C4A747"/>
      <!-- whale tail -->
      <path d="M 36 76 Q 50 82 64 76 Q 58 68 50 72 Q 42 68 36 76 Z" fill="#8BB8D0"/>
      <!-- boots hint -->
      <rect x="38" y="76" width="10" height="8" rx="3" fill="#4a4a6a"/>
      <rect x="52" y="76" width="10" height="8" rx="3" fill="#4a4a6a"/>
    `
  }
];



// ===== STATE =====
let state = {
  name: '',
  classCode: '',
  currentStep: 0,
  completedSteps: [],
  quizAnswered: [],
  chatCounts: [0, 0, 0, 0, 0],
  startTime: Date.now()
};

// ===== INIT =====
function loadState() {
  const saved = localStorage.getItem('ai-classroom-state');
  if (saved) {
    try { state = { ...state, ...JSON.parse(saved) }; } catch(e) {}
  }
}

function saveState() {
  localStorage.setItem('ai-classroom-state', JSON.stringify(state));
  // Send summary to teacher store
  const teacherData = JSON.parse(localStorage.getItem('ai-classroom-teacher') || '{}');
  if (state.classCode) {
    if (!teacherData[state.classCode]) teacherData[state.classCode] = {};
    teacherData[state.classCode][state.name] = {
      name: state.name,
      completedSteps: state.completedSteps,
      chatCounts: state.chatCounts,
      lastSeen: Date.now()
    };
    localStorage.setItem('ai-classroom-teacher', JSON.stringify(teacherData));
  }
}

function startApp() {
  const name = document.getElementById('name-input').value.trim();
  const classCode = document.getElementById('class-input').value.trim();
  if (!name) { showToast('なまえを入力してね！'); return; }
  state.name = name;
  state.classCode = classCode || 'クラスなし';
  saveState();
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('app-screen').style.display = 'block';
  document.getElementById('header-name').textContent = name + 'さん';
  renderApp();
}


// ===== BADGE FUNCTIONS =====
// ===== BADGE FUNCTIONS =====
function getBadgeSVG(badge, size=62) {
  return `<svg viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">${badge.svgContent}</svg>`;
}

function openMypage() {
  const overlay = document.getElementById('mypage-overlay');
  const grid = document.getElementById('mp-badge-grid');
  const bar = document.getElementById('mp-bar');
  const total = typeof LESSONS !== 'undefined' ? LESSONS.length : 5;
  const pct = Math.round((state.completedSteps.length / total) * 100);

  document.getElementById('mp-name').textContent = (state.name || 'あなた') + 'さん';
  document.getElementById('mp-progress-label').textContent = `授業の進み具合：${state.completedSteps.length} / ${total} ステップ完了`;
  bar.style.width = pct + '%';

  grid.innerHTML = BADGES.map((badge, i) => {
    const earned = i < 4
      ? state.completedSteps.includes(i)
      : state.completedSteps.length >= total;
    const isNew = earned && !(state.seenBadges || []).includes(badge.id);
    return `
      <div class="badge-item">
        <div class="badge-circle ${earned ? 'earned' : 'locked'}"
             style="${earned ? 'background:' + badge.bg + ';border:3px solid ' + badge.border : ''}"
             ${earned ? 'onclick="showBadgeDetail(' + i + ')"' : ''}>
          ${getBadgeSVG(badge)}
          ${isNew ? '<span class="badge-new-tag">NEW!</span>' : ''}
          ${!earned ? '<span class="badge-lock-icon">🔒</span>' : ''}
        </div>
        <div class="badge-name ${earned ? '' : 'locked'}">${badge.name}</div>
        <div class="badge-step-label">${badge.stepLabel}</div>
      </div>
    `;
  }).join('');

  overlay.classList.add('open');
}

function closeMypage() {
  document.getElementById('mypage-overlay').classList.remove('open');
  // Mark all earned badges as seen
  const _total = typeof LESSONS !== 'undefined' ? LESSONS.length : 5;
  const earned = BADGES.filter((b, i) => i < 4 ? state.completedSteps.includes(i) : state.completedSteps.length >= _total);
  state.seenBadges = earned.map(b => b.id);
  saveState();
}

function showBadgeDetail(idx) {
  const badge = BADGES[idx];
  document.getElementById('bp-svg').innerHTML = getBadgeSVG(badge, 100);
  document.getElementById('bp-sub').textContent = badge.desc;
  document.getElementById('bp-name').textContent = badge.name + '（' + badge.region + '）';
  document.getElementById('badge-popup-overlay').classList.add('open');
}

function closeBadgePopup() {
  document.getElementById('badge-popup-overlay').classList.remove('open');
}

function awardBadgePopup(stepIdx) {
  const _t = typeof LESSONS !== 'undefined' ? LESSONS.length : 5;
  const badgeIdx = stepIdx === _t - 1 ? 4 : stepIdx;
  // Only show if not yet seen
  if ((state.seenBadges || []).includes(BADGES[badgeIdx].id)) return;
  const badge = BADGES[badgeIdx];
  document.getElementById('bp-svg').innerHTML = getBadgeSVG(badge, 100);
  document.getElementById('bp-sub').textContent = '「' + badge.stepLabel + '」達成！\n' + badge.desc;
  document.getElementById('bp-name').textContent = badge.name + 'バッジをゲット！🎊';
  document.getElementById('badge-popup-overlay').classList.add('open');
}

// ===== BOOT =====