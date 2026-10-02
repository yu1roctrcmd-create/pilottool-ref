/* NCA Tools 参照ページ共通（EMER / QRH / MEL）: パスワードロック・テーマ連動・📥キャッシュボタン
   本体（NCA_Tools）と同じオリジン(yu1roctrcmd-create.github.io)のため localStorage は本体と共有される。 */
(function () {
  var PW_HASH = 'a213c2708fef3c96b62a45938bd848f7e91eb00c14f1c9399a9e077ce4cfaed9';
  var KEY = 'nca_auth_ts2';            // 本体と共通（パスワード変更時にキー名も更新して再認証させる）
  var TTL = 24 * 60 * 60 * 1000;       // 24時間
  var root = document.documentElement;

  function authed() {
    try { var t = localStorage.getItem(KEY); return !!t && Date.now() - parseInt(t, 10) < TTL; }
    catch (e) { return false; }
  }
  async function sha256Hex(text) {
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
  }

  /* ── スタイル ── */
  var css = '' +
    '#nca-lock{position:fixed;inset:0;z-index:2147483000;background:#060d16;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 32px;font-family:-apple-system,"SF Pro Text","Helvetica Neue",sans-serif}' +
    '#nca-lock.hidden{display:none}' +
    '#nca-lock .l-logo{font-size:1.4em;font-weight:700;color:#00c8ff;letter-spacing:4px;margin-bottom:4px}' +
    '#nca-lock .l-sub{font-size:.7em;color:#4a6880;letter-spacing:2px;margin-bottom:48px}' +
    '#nca-lock .l-icon{font-size:2.4em;margin-bottom:24px;opacity:.6}' +
    '#nca-lock input{width:100%;max-width:300px;background:#0b1624;border:1px solid #162840;border-radius:10px;color:#b8cce0;padding:14px 18px;font-size:1.2em;font-family:inherit;text-align:center;letter-spacing:4px;-webkit-appearance:none;outline:none;margin-bottom:14px}' +
    '#nca-lock input:focus{border-color:#00c8ff}' +
    '#nca-lock input.shake{animation:ncashake .35s ease;border-color:#ff4560}' +
    '@keyframes ncashake{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px)}40%{transform:translateX(8px)}60%{transform:translateX(-6px)}80%{transform:translateX(6px)}}' +
    '#nca-lock button{width:100%;max-width:300px;padding:13px;background:#00c8ff;border:none;border-radius:10px;color:#060d16;font-size:.9em;font-weight:700;letter-spacing:2px;font-family:inherit;cursor:pointer}' +
    '#nca-lock .l-err{font-size:.72em;color:#ff4560;margin-top:12px;min-height:1em;letter-spacing:1px}' +
    '#nca-cache-btn{position:fixed;right:10px;bottom:10px;z-index:2147482000;width:38px;height:38px;border-radius:50%;border:1px solid rgba(128,128,128,.5);background:rgba(20,30,45,.85);color:#fff;font-size:18px;line-height:1;cursor:pointer;opacity:.75}' +
    '#nca-cache-btn:disabled{opacity:.5}';
  var st = document.createElement('style'); st.textContent = css; root.appendChild(st);

  /* ── ロック画面（最初の描画前に被せる） ── */
  if (!authed()) {
    var lock = document.createElement('div'); lock.id = 'nca-lock';
    lock.innerHTML = '<div class="l-logo">PILOT TOOL</div><div class="l-sub">FLIGHT OPERATIONS</div><div class="l-icon">🔒</div>' +
      '<input id="nca-lock-input" type="password" placeholder="PASSWORD" autocomplete="off" autocorrect="off" spellcheck="false">' +
      '<button id="nca-lock-btn">UNLOCK</button><div class="l-err" id="nca-lock-err"></div>';
    root.appendChild(lock);
    var input = lock.querySelector('input'), err = lock.querySelector('#nca-lock-err'), btn = lock.querySelector('button');
    async function unlock() {
      btn.disabled = true;
      var h = await sha256Hex(input.value);
      btn.disabled = false;
      if (h === PW_HASH) {
        try { localStorage.setItem(KEY, Date.now().toString()); } catch (e) {}
        lock.classList.add('hidden'); err.textContent = '';
      } else {
        err.textContent = 'パスワードが違います';
        input.classList.remove('shake'); void input.offsetWidth; input.classList.add('shake');
        input.value = ''; setTimeout(function () { input.classList.remove('shake'); }, 400);
      }
    }
    btn.addEventListener('click', unlock);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') unlock(); });
  }

  /* ── テーマ（本体の nca_theme=day と同じ。親からの postMessage にも追従） ── */
  function applyTheme(day) {
    if (document.body) document.body.classList.toggle('day', !!day);
  }
  function initialDay() { try { return localStorage.getItem('nca_theme') === 'day'; } catch (e) { return false; } }
  document.addEventListener('DOMContentLoaded', function () { applyTheme(initialDay()); });
  window.addEventListener('message', function (e) {
    if (e && e.data && e.data.type === 'nca-theme') applyTheme(e.data.theme === 'light');
  });

  /* ── Service Worker ＋ 📥 キャッシュボタン ── */
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(function () {});
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.createElement('button'); b.id = 'nca-cache-btn'; b.textContent = '📥';
    b.title = 'オフライン用キャッシュを更新（このページ群の画像を保存）';
    b.addEventListener('click', async function () {
      b.disabled = true; b.textContent = '⏳'; var ok = true;
      try {
        if (navigator.serviceWorker && navigator.serviceWorker.controller) {
          ok = await new Promise(function (res) {
            var ch = new MessageChannel(); ch.port1.onmessage = function (ev) { res(ev.data === 'done'); };
            navigator.serviceWorker.controller.postMessage('FORCE_CACHE', [ch.port2]);
          });
        } else { ok = false; }
      } catch (e) { ok = false; }
      try {
        if (typeof window.prefetchAllImages === 'function') { var r = await window.prefetchAllImages(); if (r && r.fail) ok = false; }
      } catch (e) { ok = false; }
      b.textContent = ok ? '✅' : '⚠️';
      setTimeout(function () { b.textContent = '📥'; b.disabled = false; }, 2500);
    });
    document.body.appendChild(b);
  });
})();
