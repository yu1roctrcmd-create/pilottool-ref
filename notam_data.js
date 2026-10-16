/* NOTAM 知識整理データ（notam.html が読み込む）
   出典: 会社貸与EFBのスクリーンショット KZ225 / NCA225 RJAA→ZSPD（ALTN ZSSS）Oct 15。
   原文は画面から文字起こしし、明らかな誤読（OCR）は補正している。
   sec : 画面上のセクション（General / RJAA / ZSPD / ZSSS / CHN / ASP / RJJJ / ZSHA / RKRR）
   pri : high（訓練で必ず押さえる）/ mid / low
   perf / nav / ops : 影響。空文字＝影響なし。「［要確認…］」は原文から直接言えない推測・未確認
   rows: グループ（同種の NOTAM をまとめた表）。[{no, valid, text, note}]
   refs: [{label, go:'qrh'|'mel'|'emer'}（参照サイトの他タブ）｜{label, main:'NCA Tools のタブ名'}｜{label}（文字のみ）] */
var NOTAM_FLIGHT = { fn: 'KZ225 / NCA225', route: 'RJAA/NRT → ZSPD/PVG', altn: 'ZSSS/SHA', etd: 'Oct 15 ETD 01:30 – ETA 04:46', shot: '2026-10-15 16:04（EFB画面）' };

var NOTAMS = [

/* ───────────── General（会社 NOTAM） ───────────── */
{ no: 'NCA 00204/26', sec: 'General', pri: 'mid', cat: ['Company', 'EFB・システム'],
  title: 'EFB バージョン要件（08Oct26 時点）',
  issued: '07-OCT-2026 07:25（改訂 08-OCT-2026 05:19）', valid: '07-OCT-2026 15:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nEFB INFORMATION AS OF 08Oct26\nEFF ID OF EFB VERSION INFORMATION IS 261008\n1.SOFTWARE\n MNM VERSION OF IOS(IPADOS): 26.2 or later (For FD Pro 5.1.3)\n                             26.3 or later (For FD Pro 5.2.1)\n2.EFF VERSION OF APPLICATION\n FD PRO: 5.1.3, 5.2.1\n CONTENT: 26.03, 26.05, 26.08\n ACROBAT READER: 26.08.01, 26.08.50, 26.09.00 (*UPDATED)\n eFM: 7.13.0, 7.13.1, 7.14\n OPT: 4.94.2\n\n3.EFF VERSION OF DATABASE\n OPT DATABASE:\n  POLICY: NCA-POLICY-0005 or -0005(G)\n  AIRPORT: NCA-AIRPORT-0024 or -0025\n  DDG: NCA-DDG-0004\n OM: Rev.180\n AM (NCA ISSUE): Rev.10-26\n AOM 8F:Rev.112+Bulletins\n MEL/CDL 8F: Rev.39\n PERFORMANCE HANDBOOK 8F: Rev.20\n OPERATIONS POLICY MANUAL (VOLUME 2): Rev.29',
  ja: '会社が運用を認める EFB の<b>ソフトウェア・アプリ・データベースのバージョン一覧</b>（EFB 情報 ID 261008）。iPadOS は FD Pro 5.1.3 なら 26.2 以上、FD Pro 5.2.1 なら 26.3 以上が最低要件。Acrobat Reader は 26.09.00 が今回の更新。OPT は 4.94.2。<br>OPT データベース：POLICY＝NCA-POLICY-0005／-0005(G)、<b>AIRPORT＝NCA-AIRPORT-0024 または -0025</b>、DDG＝NCA-DDG-0004。<br>有効なマニュアル版：<b>OM Rev.180、AM（NCA ISSUE）Rev.10-26、AOM 8F Rev.112＋Bulletins、MEL/CDL 8F Rev.39、Performance Handbook 8F Rev.20、Operations Policy Manual（Vol.2）Rev.29</b>。',
  perf: '直接の影響なし。ただし<b>離着陸性能計算に使う OPT（4.94.2）と OPT データベース（POLICY／AIRPORT／DDG）</b>が一覧の版であることを確認する。<b>AIRPORT DB が 0024／0025 のとき、NCA 00202/26 の「0026 以降で反映」は未反映の版</b>になる点に注意。［要確認：RJAA 16R/34L の GRV 扱いが DB 0025 でどう出るか］',
  nav: 'FD Pro（チャート・航法データ）、eFM、Content（社内マニュアル）の版が対象。iPadOS 26.2／26.3 以上が条件のため、OS 更新時は FD Pro の版との組合せを確認。',
  ops: 'フライト前に、自分の EFB の iPadOS・FD Pro・Content・eFM・OPT の版が一覧に合うか確認。［要確認：不一致時の対応は社内手順で確認］',
  refs: [{ label: 'EFB 運用（社内規程）［要確認：該当章は未特定］' }] },

{ no: 'NCA 00007/19', sec: 'General', pri: 'high', cat: ['Company', 'GPS・航法'],
  title: 'GPS 衛星の運用状況（24 機以上が利用可能）／24 機未満になった場合',
  issued: '05-MAY-2019 06:10（改訂 15-OCT-2026 04:36）', valid: '20-JUN-2019 15:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nGPS CONSTELLATION AS FLW\n24 OR MORE GPS SATELLITES ARE AVBL\nEXPLANATION: RVSD AT 0435Z 15OCT2026',
  ja: "<b>会社 NOTAM。GPS 衛星の配置状況</b>は、<b>24 機以上の衛星が利用可能</b>（通常どおり）。15OCT2026 0435Z に改訂された。この NOTAM は、<b>NAIM（FMC の完全性監視）を使う Terminal／Enroute 運航の前提</b>になる GPS コンステレーションの状況（OR OMR.4.8）。\n<div class=\"nt-h\">OR OMR.4.8 2.3 ABAS の Availability（要点）</div>\n<ul style=\"margin:0;padding-left:1.3em\">\n<li>ABAS の Availability は、<b>RAIM と NAIM</b> の 2 つの完全性監視要素に依存。どちらが必要かは<b>飛行フェーズ</b>で決まり、Availability の判定に<b>2 つの異なる Prediction 方式</b>を使う。</li>\n<li><b>RAIM</b>：Availability は<b>視認可能な衛星の数と配置（Geometry）</b>の関数。GPS 受信機は通常、航法解の算出に衛星 <b>4 個</b>、<b>RAIM が機能するには最低 5 個</b>を要する。RAIM を使うとき、<b>RAIM Availability の Prediction が必要</b>で、NOTAM で公示される。</li>\n<li><b>NAIM</b>：FMS の設計上、<b>GPS Position が利用可能である限り NAIM は利用可能</b>。ただし GPS コンステレーション内の<b>衛星数は Position の Accuracy と Integrity に影響</b>する。</li>\n<li><b>NAIM を使う場合、RNP1/2 または RNAV1/2 に要求される Accuracy／Integrity を満たすには 24 個以上の衛星が必要</b>。衛星数が減ると NAIM の Availability はより限定される。<b>NAIM は、全衛星が正常でも、RNP/RNAV Approach に必要な RNP 0.3 の Integrity を満たさない</b>。</li>\n</ul>\n<table class=\"nt-tbl\" style=\"margin-top:8px\"><tr><th>飛行フェーズ</th><th>Prediction 方式</th><th>ABAS</th><th>NOTAM 内の掲載箇所</th></tr>\n<tr><td>Approach</td><td>RAIM Prediction</td><td>RAIM</td><td>各 Airport または ENROUTE INFORMATION セクション</td></tr>\n<tr><td>Terminal &amp; Enroute</td><td>GPS Constellation Status</td><td>NAIM</td><td><b>GENERAL INFORMATION セクション（この NOTAM）</b></td></tr></table>\n<div class=\"nm-note\" style=\"margin-top:6px\">注：State が RAIM Prediction を出している場合は、該当空港の NOTAM を確認。それ以外は、ENROUTE INFORMATION – ROUTE NOTAM に Prediction がまとめられている（本便の例：NCA 00078/25）。</div>",
  perf: '',
  nav: "<b>この NOTAM（24 機以上）が出ている間：</b>NAIM で RNP1/2・RNAV1/2（SID/STAR・Enroute）の Accuracy／Integrity を満たせる。<b>Approach の RNP 0.3 は NAIM では満たせない</b>ので、RAIM Prediction（各空港／NCA 00078/25）で確認する。<br><b>衛星数と運航の可否（OM 4-4-6 ②）：</b>RNAV 1/2・RNP 1・RNP 2 は <b>24 個以上</b>、RNAV 5・RNP 4・精度指定なしの RNAV は <b>23 個以上</b>が必要。<b>23 個では RNAV 1/2・RNP 1・RNP 2 は不可、RNAV 5・RNP 4 は可</b>。GPS の Loss of Integrity は <b>EICAS メッセージや計器表示では出ず</b>、ANP が RNP を超えて「UNABLE RNP」が出るまで気付きにくい（OMR.4.6）。",
  ops: "<b>衛星が 24 機未満に改訂されたときの対応</b>（OR OMR.4.9〜4.10「RNAV System の Malfunction への対応」に基づく）\n<ol style=\"margin:4px 0 0;padding-left:1.4em\">\n<li><b>この NOTAM（General）を毎フライト確認</b>（本便：24 機以上・0435Z 改訂）。24 機未満になると NAIM の Availability が限定される。衛星数に応じて可否が変わる（<b>OM 4-4-6 ② GPS 衛星の個数による確認</b>、計器進入方式で GPS を使う場合を除く）。\n <table class=\"nt-tbl\" style=\"margin:4px 0\"><tr><th>運航の種類</th><th>必要最低数</th></tr>\n <tr><td>RNAV 1/2、RNP 1、RNP 2</td><td><b>24</b></td></tr>\n <tr><td>RNAV 5、航法精度が指定されない RNAV、RNP 4</td><td><b>23</b></td></tr></table>\n <b>→ 衛星が 23 個の場合：RNAV 5・RNP 4・精度指定なしの RNAV は可、RNAV 1/2・RNP 1・RNP 2（SID/STAR 等）は不可</b>（OM の表による）。22 個以下はいずれも不可。なお RNP 10 は表に記載なし（IRU 等の許容飛行時間で運用：OM 4-7）。</li>\n<li><b>基本の考え方：</b>Operations Manual 第 4 章の<b>各 RNAV Operation には、Navigation Accuracy を満たせない場合（RNAV System の Malfunction／精度に疑義がある場合）の Contingency Procedure が定められている</b>。その手順に従う。</li>\n<li><b>飛行中に Failure が起きた場合の判断：</b>搭載 Equipment とその必要数は AFM に従い、<b>Departure 時の Requirement</b>。飛行中の Failure 後に<b>飛行を継続するかは Operator（運航側）が判断</b>する。RNAV System が Fail しても、<b>飛ぼうとする RNAV Route（Airspace）の Requirement を満たしている限り、その Route を飛行してよい</b>。<b>DU は Navigation Accuracy とは別に必要</b>で、OM に規定された数を常に満たす。</li>\n<li><b>RNP 10/4 以外の Route：</b>Route の要件を満たしている限り、飛行を継続してよく、<b>ATC への Notification は必須ではない</b>。例：<b>HKG の STAR/SID は GNSS を必要とする RNP 1</b> で設計されている。<b>GPS が 1 つ Fail でも</b>、要求される Navigation Accuracy を満たす限り飛行できる。<b>GPS が 2 つ Fail すると「GNSS Receiver が必須」を満たさなくなり、Pilot は ATC に Notify</b> する。</li>\n<li><b>Jeppesen VHHH／RNAV SID（例：DALOL 1F、RWY 25R）の記載（チャートの Contingency）：</b>\n <div style=\"margin:2px 0 0 0\">① <b>RNP を維持できない場合（例：GNSS の喪失）→ RNAV 1（DME/DME/IRU）に Revert → ATC に通報 → 割り当てられた SID を継続</b>（Critical DME：TD が必要）　② RNP 1 の免除便は空港ブリーフィング頁を参照　③ HONG KONG Departure への初回交信で、コールサイン・現在高度・許可高度を通報　④ SID のトラックに従えない場合は ATC に通報し支援を要求　⑤ 垂直の上昇プロファイルを守れない場合は、出発前（start-up 前）に ATC に通報。</div></li>\n<li><b>RNP 10/4 の Airspace：</b>Equipment は<b>空域の Entry Point で Operative</b> でなければならない。進入前に Operative な Equipment の数が OM の規定数を満たさない場合、<b>Pilot は ATC に Notify</b>。進入が許可されても、意図した高度を飛べない可能性があるため、<b>必要な Fuel 量の再計算を含めて総合的に判断</b>する。進入後の Failure は、要求される Navigation Accuracy を満たす限り、継続でき、ATC への Notification は必須ではない。</li>\n<li><b>「RAIM Prediction が NIL」で確認できるのは Approach フェーズだけ</b>（NCA 00078/25 の 0.3／1.0 は IAP の RAIM）。衛星が 23 個などのとき、<b>NIL を確認しただけでは ABAS の確認が済んだことにならない</b>。\n <div style=\"margin:2px 0 0 0\">・<b>確認できる：</b>進入（RNP APCH の最終 0.3、初期・中間 1.0）の RAIM が欠測なし（OM 4-4-5・4-4-6）。ETA が欠測の時間帯（例：VHHH・ZGSZ）に入るなら、進入方式か到着時刻を変更。日本・韓国・タイ・ベトナムは各国 NOTAM を確認。<br>\n ・<b>確認できない：</b>SID/STAR（RNP 1／RNAV 1/2）・Enroute の RNAV は <b>NAIM</b> で見るため、RAIM の NIL では担保されない。SID/STAR（RNP 1／RNAV 1/2）は<b>衛星 24 個以上</b>、RNAV 5・RNP 4 は 23 個以上が必要（OM 4-4-6 ②）。<b>23 個のときは SID/STAR の RNP 1・RNAV 1/2 は不可</b>。<br>\n ・<b>AM RULES AND REGULATIONS 1-4/1-5（ABAS AVAILABILITY INFORMATION）：</b>Terminal・Enroute（洋上含む）は <b>GPS CONSTELLATION STATUS</b> を確認する。運航管理者が NAVCEN の情報を定期的に確認し、利用可能な GPS 衛星数を会社 NOTAM にまとめる。<b>機長と運航管理者は会社 NOTAM を確認し、意図する航法に GPS が使えることを確認</b>する。必要な衛星数は OM 4-4-6 に示される。</div></li></div></li>\n<li><b>Approach：</b>NAIM は RNP 0.3 を満たせないので、<b>RAIM Prediction（各空港／NCA 00078/25）を確認</b>。欠測の時間帯なら ILS など他の方式を準備。</li>\n<li><b>異常の気付き方：</b>GPS の Loss of Integrity は EICAS や計器に出ない。FMC が GPS で位置更新しなくなる。ANP が RNP を超えると EICAS「UNABLE RNP」。疑わしいときは FMS 位置を IRS・VOR/DME と照合し、<b>GPS Data Unreliable の NNC</b> を実施。</li>\n<li>IRS/GPS 以外の位置更新（VOR/DME 等）での FMC の ANP Capability は OMR 3.4 に数値がある。［要確認：数値表は未取得。必要なら該当頁を追加］</li>\n</ol>\n<div class=\"nm-note\" style=\"margin-top:6px\">出典：NCA Operations Reference（Bilingual Edition、Rev.16、Eff. Sep 7, 2026）OMR.4.9〜4.10。<b>24 機未満の場合を名指しした手順ではなく、RNAV System の Malfunction 一般の手順</b>です。［要確認：衛星数減少時に会社が出す運航上の指示（OPS UPDATE 等）があれば、そちらが優先］</div>",
  refs: [{ label: 'OM 4-4-6 ②（GPS 衛星の必要個数）／AM RULES AND REGULATIONS 1-4・1-5（ABAS AVAILABILITY INFORMATION）' }, { label: 'OR OMR.4.6（Integrity Alert）／OMR.4.8（ABAS Availability）／OMR.4.9〜4.10（RNAV System の Malfunction への対応）' }, { label: 'QRH：GPS Data Unreliable（Quick Reference 5）', go: 'qrh' }, { label: 'MEL：GPS', go: 'mel' }, { label: 'RAIM 予測（NCA 00078/25）', jump: 'NCA 00078/25' }, { label: 'GPS 妨害の注意（Z0718/26）', jump: 'Z0718/26' }, { label: 'RNAV/RNP 運航の必要機上装置（OM 第4章）', main: 'RTE' }] },

{ no: 'NCA 00195/26', sec: 'General', pri: 'mid', cat: ['Company', 'EFB・システム'],
  title: '米国 SIGMET は eFM では入手できない（洋上を除く）',
  issued: '17-SEP-2026 00:52（改訂 05:49）', valid: '17-SEP-2026 00:00Z 〜 UFN',
  orig: 'US SIGMET NA IN eFM EXC OCEANIC. AVBL IN FD Pro.',
  ja: '<b>米国の SIGMET</b>は、洋上（OCEANIC）を除き <b>eFM では入手できない</b>（NA＝not available）。<b>FD Pro では入手できる</b>。',
  perf: '', nav: '',
  ops: '米国内（北米線のアプローチ・目的地・代替）の SIGMET は FD Pro で確認する。eFM の SIGMET 表示だけを見て「無し」と判断しない。',
  refs: [{ label: '気象情報の入手（社内規程）［要確認：該当章は未特定］' }] },

{ no: 'NCA 00155/26', sec: 'General', pri: 'mid', cat: ['Company', 'EFB・システム'],
  title: 'ECL・紙 QRH は REV.111（AOM REV.112 は ECL/QRH を改訂しない）',
  issued: '27-JUL-2026 02:16', valid: '05-AUG-2026 19:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nECL DATABASE "REV.111"\nONBOARD PAPER QRH "REV.111"\nNOTE: AOM REV.112 DOES NOT REVISE CONTENTS OF ECL AND QRH.',
  ja: '<b>ECL データベースと機上の紙 QRH は REV.111</b>。AOM REV.112 は ECL と QRH の内容を改訂しない。',
  perf: '', nav: '',
  ops: 'AOM が REV.112 でも、ECL・紙 QRH は REV.111 が有効。版の不一致を「古い」と誤認しない。',
  refs: [{ label: 'QRH（参照サイト）', go: 'qrh' }] },

{ no: 'NCA 00020/26', sec: 'General', pri: 'high', cat: ['Company', '運航'],
  title: 'OPS UPDATE 25017 REV2：飛行中の2発動不作動を考慮した暫定フライトプラン手順',
  issued: '06-FEB-2026 08:48（改訂 19-FEB-2026 15:43）', valid: '19-FEB-2026 21:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nOPS UPDATE 25017 REV2 "PROVISIONAL FLIGHT-PLANNING PROCEDURE CONSIDERING TWO ENGINES INOPERATIVE DURING FLIGHT" HAS BEEN ISSUED.\n(EFFECTIVE FOR FLT RELEASED AT OR AFTER 2100 UTC, 19 FEB 2026.)',
  ja: 'OPS UPDATE 25017 REV2「<b>飛行中の2発動不作動を考慮した暫定フライトプラン手順</b>」を発行した。<b>2100UTC、2026年2月19日以降にリリースされるフライト</b>から有効。',
  perf: '飛行計画（燃料・ルート・代替）に関わる手順。具体的な数値は OPS UPDATE 本文で確認。［要確認：内容は OPS UPDATE 25017 REV2 を参照］',
  nav: '', ops: 'ルート計画（洋上・遠隔地）で2発動不作動を想定した計画が求められる。OPS UPDATE 25017 REV2 を事前に読んでおく。',
  refs: [{ label: 'OPS UPDATE 25017 REV2（社内資料）' }] },

{ no: 'NCA 00091/25', sec: 'General', pri: 'low', cat: ['Company', 'EFB・システム'],
  title: 'eFM TRIP LOG トライアル Phase 2',
  issued: '30-JUN-2025 09:04（改訂 01-JUL-2025 00:11）', valid: '30-JUN-2025 15:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\neFM TRIP LOG TRIAL PHASE 2 IN PROGRESS.\nUSE THE TRIP LOG FUNCTION PRIMARILY.\nSEND A REPORT WHEN YOU USE PAPER OFP.\nRMK/REF OPERATIONS UPDATE 25015 FOR DETAIL',
  ja: 'eFM <b>トリップログ</b>のトライアル Phase 2 実施中。<b>トリップログ機能を主として使う</b>。<b>紙の OFP を使った場合はレポートを送る</b>。詳細は OPERATIONS UPDATE 25015。',
  perf: '', nav: '', ops: 'OFP の記入は eFM のトリップログを基本とする。紙 OFP を使ったときは報告が必要。',
  refs: [{ label: 'OPERATIONS UPDATE 25015（社内資料）' }] },

{ no: 'NCA 00022/25', sec: 'General', pri: 'high', cat: ['Company', 'EFB・システム', '非常時'],
  title: 'ECL［ENG 1,2,3,4 FAIL］チェックリストのソフトウェア不具合',
  issued: '04-FEB-2025 11:44', valid: '04-FEB-2025 13:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nECL [ENG1, 2, 3, 4 FAIL] CHECKLIST HAVE A SOFTWARE ISSUE.\nAFTER RESTART ATTEMPT IS DONE, IF "RESTART IS NEEDED: YES OR NO" STEP IS SELECTED TO "NO", "ENGINE STAYS FAILED: YES OR NO" STEP AND "ENGINE X START SWITCH PUSH" STEP ARE STILL OPENED INCORRECTLY DUE TO THE ISSUE.\nCAREFULLY CONFIRMING THE SITUATION, THE CHECKLIST CAN BE COMPLETED BY SELECTING "ENGINE STAYS FAILED: YES OR NO" STEP TO "YES", AND THEN OVERRIDING "SELECT ENGINE X START SWITCH ..PUSH" STEP.\nTHIS ISSUE IS BEING INVESTIGATED WITH BOEING.',
  ja: 'ECL の<b>［ENG 1,2,3,4 FAIL］チェックリスト</b>にソフトウェア不具合がある。再始動を試みたあと、「RESTART IS NEEDED: YES OR NO」を <b>NO</b> にしても、不具合のため「ENGINE STAYS FAILED: YES OR NO」と「ENGINE X START SWITCH PUSH」のステップが<b>誤って開いたまま</b>になる。状況を慎重に確認したうえで、「ENGINE STAYS FAILED」を <b>YES</b> にし、「SELECT ENGINE X START SWITCH ..PUSH」を<b>オーバーライド</b>すればチェックリストを完了できる。この件は Boeing と調査中。',
  perf: '', nav: '',
  ops: '全発動機停止（4 ENGINE FAIL）の非常時の ECL 操作。<b>実際には状況の確認が前提</b>で、YES を選ぶのは「エンジンが停止したまま」と確認できた場合に限る。',
  refs: [{ label: 'QRH：ENG 1,2,3,4 FAIL（NNC）', go: 'qrh' }, { label: 'EMER（参照サイト）', go: 'emer' }] },

{ no: 'NCA 00219/22', sec: 'General', pri: 'mid', cat: ['Company', '運航'],
  title: 'OM S-3-10 の事前指定飛行場：なし（NIL）／孤立飛行場の扱い',
  issued: '12-DEC-2022 06:55（改訂 23-DEC-2022 04:54）', valid: '12-DEC-2022 07:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nPRE-DESIGNATED AD STIPULATED BY OM S-3-10\n-NIL-\nNOTE: ISOL AD OPR BY WX RSN SHALL NOT BE APPLIED AT PRE-FLT PLANNING.\nREF. OPS UPDATE 22005',
  ja: 'OM S-3-10 に規定する<b>事前指定飛行場：なし（NIL）</b>。注：気象理由で運用が制限される<b>孤立飛行場（ISOL AD）</b>の扱いは、<b>飛行前の計画では適用しない</b>。OPS UPDATE 22005 参照。',
  perf: '', nav: '', ops: '飛行計画で、気象を理由にした「孤立飛行場」の運用制限を前提にしない。［要確認：ISOL AD の定義は OM S-3-10／OPS UPDATE 22005］',
  refs: [{ label: 'OM(J) S-3-10 / OPS UPDATE 22005（社内資料）' }] },

{ no: 'NCA 00202/26', sec: 'General', pri: 'high', cat: ['Company', '滑走路・誘導路', '性能'],
  title: 'RJAA RWY 16R/34L グルービング一部消失：OPT で使う RWY 名称',
  issued: '01-OCT-2026 09:53（改訂 13-OCT-2026 05:52）', valid: '02-OCT-2026 20:20Z 〜 10-DEC-2026 20:20Z',
  orig: '///// COMPANY NOTAM /////\nTAKE FLWG ACTIONS DUE TO GROOVING FOR RWY 16R/34L PARTLY ERASED.\n///OPT INFO///\n-TKOF & LDG-\nRWY 16RGRV NOT AVAILABLE\nRWY 34LGRV NOT AVAILABLE\nRWY 16RGRVNTM NOT AVAILABLE\nRWY 34LGRVNTM NOT AVAILABLE\n-TKOF-\nRWY 16RA2GRVNTM NOT AVAILABLE\nRWY 16RA2GRV SEE BELOW\n//RWY 16A2GRV//\nSINCE RWY 16RA2 IS TREATED AS A NON-GROOVED RWY, USE RWY 16RA2GRV AND SELECT RWY COND "WET NGRV" WHEN CALCULATING WET PERFORMANCE.\n[AIRPORT DATABASE: NCA-AIRPORT-0026 OR LATER]\nTHIS CHG IS REFLECTED IN THE OPT AP DB "NCA-AIRPORT-0026" OR LATER.\n///i-SKY INFO///\nSELECT FLWG RWY.\n-TKOF & LDG-\nRWY 16RGRV NOT AVAILABLE\nRWY 34LGRV NOT AVAILABLE\n-TKOF-\nRWY 16RA2GRV NOT AVAILABLE\nRWY 16RA2 16RA2NTM\nEXPLANATION: NOTE:REF A1179/26, A1205/26, A1275/26, A1306/26, A1388/26, A1483/26',
  ja: '工事のため RWY 16R/34L の<b>グルービングが部分的に消失</b>。OPT では次のとおり。<br>・離着陸とも <b>16RGRV／34LGRV／16RGRVNTM／34LGRVNTM は使用不可</b>。<br>・離陸の <b>16RA2GRVNTM は使用不可</b>。<b>16RA2 は Non-Grooved 扱いのため、16RA2GRV を選び、WET 性能は滑走路状態「WET NGRV」で計算</b>する。<br>・OPT 空港DB は NCA-AIRPORT-0026 以降に反映済み。i-SKY の選択可能な滑走路は 16R／34L（離着陸）と 16RA2NTM（離陸）。関連 NOTAM：A1179、A1205、A1275、A1306、A1388、A1483（いずれも /26）。',
  perf: '<b>離着陸性能に直結</b>。Grooved 前提の GRV 系の選択肢が使えず、WET の性能・横風制限・FO 乗務制限が変わる。',
  nav: '', ops: '出発前に OPT の滑走路名称（RWY 名）と RWY COND を確認。WET 時は NGRV として計算。',
  refs: [{ label: 'NCA Tools の TO タブ：「RJAA RWY 16R/34L — Grooved vs Non-Grooved」（位置図・性能比較）', main: 'TO' }, { label: '関連 NOTAM：グルービング消失 6 件（RJAA）', jump: 'RJAA グルービング一部消失（6件）' }] },

/* ───────────── RJAA ───────────── */
{ no: 'RJAA グルービング一部消失（6件）', sec: 'RJAA', pri: 'high', cat: ['滑走路・誘導路', '性能'],
  title: 'RWY 16R/34L のグルービング一部消失（NCA 00202/26 に対応する NOTAM 6 件）',
  issued: '31-JUL 〜 02-OCT-2026', valid: '各 NOTAM 参照（最長 10-DEC-2026）',
  orig: '各 NOTAM 共通文：GROOVING FOR RWY 16R/34L PARTLY ERASED DUE TO CONST ／ EXPLANATION: NOTE:REF NCA00202/26',
  ja: '工事によりグルービングが消えた範囲（滑走路の長さ方向の位置と、中心線 RCL からの幅方向の位置）。',
  perf: '消失範囲は滑走路全体に比べて小さいが、会社は OPT 上で GRV 系を使用不可とし、Non-Grooved 扱いにしている（NCA 00202/26）。', nav: '', ops: '',
  rows: [
    { no: 'A1275/26', valid: '24-AUG 〜 23-NOV', text: '16R THR から 274.9〜295.9m（長さ 21.0m）／RCL 西側 2.0〜8.0m（幅 6.0m）' },
    { no: 'A1205/26', valid: '12-AUG 〜 11-NOV', text: '16R THR から 229.7〜239.7m（長さ 10.0m）／RCL 西側 9.0〜15.0m（幅 6.0m）' },
    { no: 'A1179/26', valid: '31-JUL 〜 30-OCT', text: '16R THR から 241.15〜266.15m（長さ 25.0m）／RCL 西側 2.0〜8.0m（幅 6.0m）' },
    { no: 'A1306/26', valid: '28-AUG 〜 27-NOV', text: '34L THR から 22.0〜32.0m（長さ 10.0m）／RCL 東側 5.0〜12.0m（幅 7.0m）' },
    { no: 'A1388/26', valid: '14-SEP 〜 10-DEC', text: '34L THR から 14.45〜49.45m（長さ 35.0m）／RCL 東側 24.6〜30.0m（幅 5.4m）' },
    { no: 'A1483/26', valid: '02-OCT 〜 10-DEC', text: '（1）34L THR から 1,665.0〜1,669.5m（長さ 4.5m）／RCL 東側 0.5〜15.0m（幅 14.5m）\n（2）1,675.0〜1,681.0m（長さ 6.0m）／RCL 東側 2.0〜13.0m（幅 11.0m）　※10-02 発行の新規分' }
  ],
  refs: [{ label: 'NCA Tools の TO タブ：位置図と一覧表', main: 'TO' }, { label: '会社 NOTAM NCA 00202/26', jump: 'NCA 00202/26' }] },

{ no: 'A1472/26', sec: 'RJAA', pri: 'high', cat: ['灯火・NAVAID', '着陸最低気象'],
  title: 'RWY 16L：PALS（進入灯）の一部不作動 → 着陸最低気象の RVR 変更',
  issued: '30-SEP-2026 01:53', valid: '30-SEP-2026 15:00Z 〜 23-DEC-2026 15:00Z',
  orig: 'PALS FOR RWY 16L PARTLY U/S\nRMK: (1) REF AIP SUP 229/26 ITEM RWY:1\n(2) THE EXACT TIME OF NEXT PERIOD WILL BE NOTIFIED BY FURTHER NOTAM\nEXPLANATION: NOTE:REF A/M RJAA 20-8B DATED 9OCT26\n1 PALS for RWY 16L: CHANGE WX MINIMA AS FLW\n-ILS Z/Y/X : R700m\n-LOC Z/Y/X : R1600m\n-RNP (LNAV/VNAV, LNAV only) : R1600m',
  ja: 'RWY 16L の<b>進入灯（PALS）が一部使用不可</b>。着陸最低気象を次に変更：<b>ILS Z/Y/X＝RVR 700m</b>、<b>LOC Z/Y/X＝RVR 1,600m</b>、<b>RNP（LNAV/VNAV、LNAV only）＝RVR 1,600m</b>。次の期間の正確な時刻は別 NOTAM で通知される。参照：AIP SUP 229/26（項目 RWY:1）、A/M RJAA 20-8B（9OCT26）。',
  perf: '<b>着陸最低気象が悪化</b>（視程要件が RVR 700m／1,600m）。16L への進入計画・代替選定に影響。', nav: '',
  ops: 'RJAA が目的地・代替で 16L を使う場合、RVR の要件を確認。天候が悪いときは 16R の使用を検討。',
  refs: [{ label: 'A/M RJAA 20-8B（9OCT26）／AIP SUP 229/26' }] },

{ no: 'A1473/26', sec: 'RJAA', pri: 'low', cat: ['灯火・NAVAID'],
  title: 'RWY 16L：SFL（シーケンスフラッシング灯）使用不可 → 最低気象に影響なし',
  issued: '30-SEP-2026 02:02', valid: '30-SEP-2026 15:00Z 〜 23-DEC-2026 15:00Z',
  orig: 'SEQUENCED-FLG-LGT FOR RWY 16L U/S\nRMK: (1) REF AIP SUP 229/26 ITEM RWY:2\nEXPLANATION: NOTE:REF A/M RJAA 20-8B DATED 9OCT26\n2 SFL for RWY 16L: NOT AFFECT WX MINIMA',
  ja: 'RWY 16L の<b>シーケンスフラッシング灯（SFL）が使用不可</b>。<b>最低気象には影響しない</b>。',
  perf: '', nav: '', ops: '16L 進入時に、SFL が点かなくても最低気象は変わらない。', refs: [{ label: 'A/M RJAA 20-8B／AIP SUP 229/26' }] },

{ no: 'RJAA 滑走路閉鎖（保守）', sec: 'RJAA', pri: 'mid', cat: ['滑走路・誘導路'],
  title: '10月の夜間：RWY 16L/34R と 16R/34L の閉鎖（保守）',
  issued: '28-SEP-2026', valid: '01-OCT 〜 31-OCT-2026',
  orig: 'A1443/26: RWY 16R/34L CLSD DUE TO MAINT\n1. EXC ACFT IN AIC 051/19 ITEM 3\n2. EXC EMERG ACFT WITH PRIOR PERMISSION AT LEAST 1HR BFR\n1510-2030\nA1442/26: RWY 16L/34R CLSD DUE TO MAINT\n1410-2030',
  ja: '保守のため、<b>RWY 16L/34R は 1410–2030Z</b>、<b>RWY 16R/34L は 1510–2030Z</b>（毎日）閉鎖。16R/34L は AIC 051/19 項目 3 の航空機を除き、緊急機も<b>少なくとも 1 時間前の事前許可</b>が必要。',
  perf: '', nav: '',
  ops: 'RJAA の夜間 Curfew（1500–2100Z。1400–1500Z は 16R/34L のみ運用可）と重なる時間帯。この時間帯に RJAA を使う場合（ダイバートなど）は、使える滑走路を事前に確認。',
  rows: [
    { no: 'A1442/26', valid: '01-OCT 1410Z 〜 31-OCT 2030Z', text: 'RWY 16L/34R 閉鎖（保守）　毎日 1410–2030Z' },
    { no: 'A1443/26', valid: '01-OCT 1510Z 〜 31-OCT 2030Z', text: 'RWY 16R/34L 閉鎖（保守）　毎日 1510–2030Z。AIC 051/19 項目 3 の航空機を除く。緊急機は 1 時間前までの事前許可' }
  ],
  refs: [{ label: 'RJAA 空港ガイド：Curfew 1500–2100Z（1400–1500Z は 16R/34L のみ）' }] },

{ no: 'RJAA 誘導路の閉鎖・灯火不作動', sec: 'RJAA', pri: 'mid', cat: ['滑走路・誘導路', '灯火・NAVAID'],
  title: '誘導路の閉鎖／センターライン灯・ストップバー灯の不作動（RJAA）',
  issued: '4-AUG 〜 8-OCT-2026', valid: '各 NOTAM 参照',
  orig: 'A1509/26: "TWY N1(FM SPOT 603 TO SPOT 610D),D3(FM SPOT 600P TO N1) CLSD DUE TO EXER EXC ACFT WITH PRIOR PERMISSION"\nA1475/26: STOP-BAR-LGT FOR TWY B1 THRU B9 U/S ...\nA1474/26: "TWY-CL-LGT FOR TWY A,A2 U/S" ...',
  ja: '誘導路の閉鎖・灯火の不作動。ストップバー・センターライン灯の一部は AIP SUP 229/26 の期間（次の期間は別 NOTAM で通知）。',
  perf: '', nav: '',
  ops: 'タキシー前に、使う誘導路の閉鎖・灯火の状態を確認。センターライン灯が使えない誘導路は、夜間・低視程でタキシーが難しくなる。',
  rows: [
    { no: 'A1509/26', valid: '14-OCT 2300Z 〜 15-OCT 0830Z', text: 'TWY N1（SPOT 603〜610D）、D3（SPOT 600P〜N1）閉鎖（演習）。事前許可のある航空機を除く' },
    { no: 'A1475/26', valid: '30-SEP 1500Z 〜 23-DEC 1500Z', text: 'TWY B1〜B9 のストップバー灯 使用不可。AIP SUP 229/26（TWY:5）。A/M RJAA 20-8B（9OCT26）' },
    { no: 'A1474/26', valid: '30-SEP 1500Z 〜 23-DEC 1500Z', text: 'TWY A、A2 のセンターライン灯 使用不可。AIP SUP 229/26（TWY:2）' },
    { no: 'A1445/26', valid: '01-OCT 1410Z 〜 31-OCT 2030Z', text: 'TWY B、B1〜B9、F（F1–F3 間、F4–F5 間）、F1〜F5、K（B〜B6 間）、C（B〜E1 間）、L（B9〜U5 間）閉鎖（保守）。毎日 1410–2030Z' },
    { no: 'A1430/26', valid: '25-SEP 〜 21-OCT（予定）', text: 'TWY N2、D1（M との交差）、M（D2〜H1 間）のセンターライン灯 使用不可（工事）' },
    { no: 'A1390/26', valid: '11-SEP 〜 21-OCT（予定）', text: 'TWY D1 のセンターライン灯 使用不可（故障）' },
    { no: 'A1349/26', valid: '02-SEP 1500Z 〜 01-DEC 1500Z', text: 'TWY Q6（Q との交差）、Q6、Q7（SPOT 11〜16 間）のセンターライン灯 使用不可（工事）' },
    { no: 'A1346/26', valid: '07-SEP 1510Z 〜 30-NOV 2030Z', text: 'TWY A2 閉鎖（工事）。閉鎖標示と不使用灯を設置' },
    { no: 'A1193/26', valid: '04-AUG 〜 28-OCT（予定）', text: '滑走路誤進入警報（Runway Incursion Warning）の運用を保守のため停止' }
  ],
  refs: [{ label: 'A/M RJAA 20-8B（9OCT26）／AIP SUP 229/26' }] },

{ no: 'NCA 00210/23', sec: 'RJAA', pri: 'high', cat: ['Company', '出発'],
  title: 'NRT の TSAT 運用：TOBT を EOBT の 5 分前に設定',
  issued: '13-DEC-2023 07:49（改訂 01-MAY-2026 02:00）', valid: '13-DEC-2023 00:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nRE TSAT OPS IN NRT (EOBT 2100Z - 1130Z),\nNCA NRT STATION OFFICER WILL SET TOBT 5 MIN BEFORE EOBT FOR ON-TIME PERFORMANCE.\nIF UNABLE TO ACCEPT TOBT 5MIN BEFORE EOBT, CONTACT FOC.\nIF UNABLE TO FOLLOW ASSIGNED TSAT AFTER RECEIVING TSAT INFO, CONTACT FOC AS WELL.',
  ja: 'NRT の TSAT 運用（EOBT 2100Z–1130Z）について。<b>NCA の NRT ステーションオフィサーが、定時性のため TOBT を EOBT の 5 分前に設定</b>する。<b>EOBT の 5 分前の TOBT を受け入れられない場合は FOC に連絡</b>。TSAT 情報を受けたあと、<b>割り当てられた TSAT に従えない場合も FOC に連絡</b>。',
  perf: '', nav: '',
  ops: '出発準備は「EOBT−5分に Ready」が基本。TSAT に間に合わないと分かったら、早めに FOC へ。TOBT を早めたいときは EOBT の 25 分前までに入力が必要（TSAT 確定の EOBT−20分以降は早められない）。',
  refs: [{ label: 'NCA Tools の TAXI タブ：TSAT Management — RJAA（TOBT・TSAT の運用）', main: 'TAXI' }] },

{ no: 'NCA 00008/20', sec: 'RJAA', pri: 'low', cat: ['Company', 'EFB・システム'],
  title: '1500/2100Z に有効な NOTAM（滑走路関連以外）は EFB に表示されない',
  issued: '20-JAN-2020 08:13（改訂 01-JUN-2022 06:32）', valid: '20-JAN-2020 08:30Z 〜 UFN',
  orig: 'NOTAMS OTHER THAN RWY EFF BTN 1500/2100Z NOT DISPLAYED',
  ja: '<b>1500〜2100Z に有効な、滑走路関連以外の NOTAM は（EFB 上で）表示されない</b>。',
  perf: '', nav: '',
  ops: '1500–2100Z は RJAA の Curfew 時間帯。この時間帯にだけ有効な、滑走路以外の NOTAM は画面に出ない前提で見る。［要確認：対象は RJAA の Curfew 時間帯と思われるが、原文に空港名は無い］',
  refs: [{ label: 'RJAA 空港ガイド：Curfew 1500–2100Z' }] },

/* ───────────── ZSPD ───────────── */
{ no: 'F3193/26', sec: 'ZSPD', pri: 'high', cat: ['ATC・手順'],
  title: 'LID（Landing Information Deliver）運用トライアル：ZSPD 到着機へ上海進入が着陸情報を送信',
  issued: '06-AUG-2026（改訂 10-OCT-2026 18:55）', valid: '06-AUG-2026 07:37Z 〜 31-DEC-2026 15:59Z（予定）',
  orig: '"IMPLEMENT THE LID (LANDING INFORMATION DELIVER) OPERATION TRIAL. THE BASIC LID PROCEDURE AS FOLLOW:\n1. SHANGHAI APPROACH WILL ISSUE THE LID MESSAGE BY DATA-LINK TO ARRIVAL FLIGHTS TO ZSPD 50 MINUTES BEFORE LANDING\n2. THE LID INFORMATION WILL INCLUDE EXPECTED ARRIVAL PROCEDURE, TRANSITION (IF REQUIRED), LANDING RUNWAY, AND PARKING STAND\n3. PILOT CAN DIRECTLY USE THE LID INFORMATION FOR FMS PREPARATION DURING CRUISE PHASE WITHOUT RADIO CONFIRMATION BY ACC. PRKG STAND INFORMATION FOR REFERENCE ONLY, BASED ON AD ALLOCATION, DO NOT CONTACT ATC FOR PRKG STAND INFORMATION IN AIR.\n4. ON INITIAL CONTACT SHANGHAI APPROACH, PILOT SHOULD ADVISE YOUR LID INFORMATION INCLUDING EXPECTED ARRIVAL PROCEDURE, TRANSITION (IF ANY), AND LANDING RUNWAY\n5. SHANGHAI APPROACH WILL CONFIRM OR MODIFY FROM PILOT LID REPORT.\n6. AFTER ESTABLISH RADIO COMMUNICATION WITH SHANGHAI APPROACH, ALL CHANGE FOR THE LANDING INFORMATION SHOULD BE JUST FOLLOWED THE INSTRUCTION BY CONTROLLER.\n7. IF PILOT DO NOT RECEIVE THE LID INFORMATION, PILOT SHOULD FOLLOW THE CURRENT PROCEDURE\n8. FOR BETTER IMPROVE THE LID SERVICE, PLEASE FEEL FREE TO TELL US YOUR SUGGESTION AND COMMENTS TO EMAIL: …"\nEXPLANATION: NOTE: If you receive the LID MSG, please treat it same as ATIS. Attachment is LID MSG FOR KZ227/10OCT26 NRTPVG.',
  ja: '上海進入管制が、<b>ZSPD 着陸の約 50 分前</b>に、<b>データリンクで LID メッセージ</b>（予想到着方式、トランジション、<b>着陸滑走路</b>、駐機スポット）を送る。<br>・巡航中、<b>ACC への無線確認なしで LID の情報を FMS の準備に使ってよい</b>。スポット情報は参考で、<b>空中でスポットを ATC に問い合わせない</b>。<br>・上海進入との初回交信で、<b>自分の LID 情報（予想到着方式・トランジション・着陸滑走路）を通報</b>する。進入管制が確認または修正する。<br>・交信確立後の変更は、<b>管制官の指示に従う</b>。<br>・<b>LID を受信しなかった場合は、従来の手順</b>に従う。<br>・<b>LID MSG は ATIS と同じ扱い</b>。例：KZ227/10OCT26 NRT→PVG の LID MSG が添付されている。',
  perf: '', nav: '到着方式・滑走路の事前把握により、FMS（STAR・進入）の準備を巡航中に進められる。',
  ops: 'データリンク（ACARS/CPDLC）で届く LID を、<b>初回交信で必ず通報</b>。<b>スポット情報を ATC に聞かない</b>。受信できないときは従来どおり。',
  refs: [{ label: 'ZSSS にも同内容（F3192/26）', jump: 'F3192/26' }, { label: 'ZSPD Diversion Info（滑走路・スポット）', main: 'DIVERSION' }] },

{ no: 'F4303/26', sec: 'ZSPD', pri: 'mid', cat: ['滑走路・誘導路'],
  title: 'TWY Q5・L15 の一部閉鎖（スポット 313／315 付近）',
  issued: '13-OCT-2026', valid: '15-OCT-2026 02:00Z 〜 15-OCT-2026 09:00Z',
  orig: '"FLW TWY CLSD:\n1. TWY Q5 BTN TWY L15 AND TWY C, INTERSECTION CLSD BTN TWY L15 AND TWY Q5.\n2. TWY L15 BTN PARKING STAND NR.313 AND NR.315. INTERSECTION CLSD BTN PARKING STAND NR.313 AND TWY L15, BTN PARKING STAND NR.315 AND TWY L15."\nEXPLANATION: NOTE: PLEASE BE AWARE OF JET BLAST WHILE CONSTRUCTION EQUIPMENT AND WORKERS ARE ACTIVE IN THE AREA.\nIF YOU FEEL INSUFFICIENT MARGIN FROM THIS AREA, REQ GND TO PULL FORWARD.',
  ja: '<b>TWY Q5（L15〜C 間）と L15（スポット 313〜315 間）、およびそれらの交差点が閉鎖</b>。<b>工事機材・作業員がいるため、ジェットブラストに注意</b>。この区域から十分な余裕がないと感じたら、<b>地上管制にプルフォワード（前進）を要求</b>する。',
  perf: '', nav: '', ops: '313／315 付近へのタキシーは、閉鎖範囲と余裕に注意。余裕が足りなければ前進を要求。', refs: [] },

{ no: 'F3772/26', sec: 'ZSPD', pri: 'low', cat: ['滑走路・誘導路'], title: 'TWY R6 閉鎖（TWY F と RWY 16R/34L の間）',
  issued: '15-SEP-2026（改訂 01-OCT-2026）', valid: '16-SEP-2026 22:31Z 〜 01-NOV-2026 22:30Z',
  orig: 'TWY R6 CLSD BTN TWY F AND RWY 16R/34L.', ja: '<b>TWY R6 の、TWY F と RWY 16R/34L の間が閉鎖</b>。', perf: '', nav: '',
  ops: '16R/34L の脱出路（R6）が使えない。着陸後の脱出を計画するときに考慮。', refs: [] },

{ no: 'F3458/26', sec: 'ZSPD', pri: 'mid', cat: ['ATC・手順', '航法'],
  title: 'STAR HSN-E／F／J／K（PONAB–HSN 区間）：レーダー誘導に従う',
  issued: '24-AUG-2026（改訂 05-SEP-2026）', valid: '02-SEP-2026 16:00Z 〜 31-DEC-2026 15:59Z（予定）',
  orig: '"REF AIP ZSPD-3V-3 HSN-E, HSN-F: SEGMENT PONAB-HSN\nREF AIP ZSPD-3V-6 HSN-J, HSN-K: SEGMENT PONAB-HSN\nACFT SHALL FOLLOW RADAR VECTORING. FLIGHT CREW SHALL EXERCISE CAUTION."\nNOTE: HSN-E, HSN-F REF JEPP 20-313; HSN-J, HSN-K REF JEPP 20-374',
  ja: 'AIP ZSPD の到着方式 <b>HSN-E／F（3V-3）、HSN-J／K（3V-6）の PONAB–HSN 区間</b>は、<b>航空機はレーダー誘導に従う</b>。乗員は<b>注意</b>すること。Jeppesen：HSN-E/F＝20-313、HSN-J/K＝20-374。',
  perf: '', nav: 'STAR の該当区間は、FMS 経路どおりに飛ばず、管制官のレーダー誘導（HDG など）に従う。',
  ops: 'STAR が HSN-E/F/J/K のとき、PONAB 以降は誘導を想定。FMS の経路を勝手に進めない。', refs: [{ label: 'Jeppesen ZSPD 20-313／20-374' }] },

{ no: 'F3286/26', sec: 'ZSPD', pri: 'low', cat: ['滑走路・誘導路'], title: 'TWY T5（S1〜S2 間）は翼幅 36m 未満の機のみ',
  issued: '12-AUG-2026', valid: '12-AUG-2026 09:26Z 〜 25-NOV-2026 15:59Z（予定）',
  orig: 'TWY T5 (BTN TWY S1 AND TWY S2) ONLY AVBL FOR ACFT WITH WINGSPAN LESS THAN 36M.',
  ja: '<b>TWY T5（S1〜S2 間）は、翼幅 36m 未満の航空機のみ</b>使用可。', perf: '', nav: '',
  ops: 'B747-8F（翼幅 68.4m）は<b>使用不可</b>。タキシールートで T5 を指示されたら、不可を伝える。', refs: [] },

{ no: 'F3220/26', sec: 'ZSPD', pri: 'high', cat: ['ATC・手順', '進入'],
  title: '浦東空港 ビジュアルアプローチ（定常運用）',
  issued: '07-AUG-2026', valid: '07-AUG-2026 09:13Z 〜 UFN',
  orig: '"PUDONG AIRPORT VISUAL APPROACH REGULAR OPERATION:\n1. IMPLEMENTATION WEATHER CONDITIONS PREVAILING VISIBILITY: MORE THAN 5,000M, CEILING: 700M AND ABOVE.\n2. INSTRUCTIONS FOR PILOTS\n2.1 THE VISUAL APPROACH SHALL BE INITIATED BY EITHER PILOT OR ATC UPON MUTUAL APPROVAL. ATC WILL INFORM THE CREW OF THE EXPECTED VISUAL APPROACH WHEN ISSUING THE ARRIVAL METHOD, THE PILOT MUST INFORM THE ATC IF CANNOT ACCEPT THE VISUAL APPROACH.\n2.2 THE ATC MAY ISSUE VISUAL APPROACH INSTRUCTION AFTER PILOT REPORT THE LANDING RUNWAY OR THE PRECEDING AIRCRAFT IS IN SIGHT.\n2.3 AFTER RECEIVING THE VISUAL APPROACH CLEARANCE, THE ALTITUDE AND HEADING SHALL BE AT THE PILOT\'S OWN DISCRETION. FLYING TOWARD THE LANDING AIRPORT OR FOLLOW THE PRECEDING AIRCRAFT FOR VISUAL APPROACH, THE PILOT IS RESPONSIBLE FOR MAINTAINING SAFETY SEPARATION BETWEEN PRECEDING AIRCRAFT AND GROUND OBSTACLES.\n2.4 PUDONG AIRPORT WILL BROADCAST THE VISUAL APPROACH INFORMATION ON THE ATIS.\n3. TERMINATION OF VISUAL APPROACH\n3.1 … THE CONTROLLER WILL ACTIVELY TERMINATE THE VISUAL APPROACH IN ANY OF THE FOLLOWING SITUATIONS: 3.1.1 THE PILOT REPORTS THAT IT IS UNABLE TO CONTINUE AND COMPLETE THE VISUAL APPROACH DUE TO WEATHER CONDITIONS OR OTHER REASONS; 3.1.2 THE CONTROLLER FINDS THAT THE WEATHER CONDITIONS ARE BELOW THE METEOROLOGICAL CONDITIONS FOR THE VISUAL APPROACH; 3.1.3 THE CONTROLLER DISCOVERS PHENOMENA THAT MAY AFFECT FLIGHT SAFETY DURING THE VISUAL APPROACH OF THE ACFT.\n3.2 THERE IS NO NEED TO SET A MISSED APPROACH SEGMENT FOR A VISUAL APPROACH. WHEN AN ACFT CANNOT COMPLETE THE VISUAL APPROACH, IT WILL BE CONVERTED TO AN INSTRUMENT APPROACH OR THE APPROACH WILL BE TERMINATED. THE CONTROLLER WILL PROVIDE NECESSARY ASSISTANCE AND ALLOCATE THE ACFT WITH THE SEPARATION IN ACCORDANCE WITH THE REGULATIONS.\n3.3 … 3.4 AFTER TERMINATING THE VISUAL APPROACH, THE CONTROLLER WILL ISSUE CONTROL INSTRUCTIONS SUCH AS HEADING AND ALTITUDE TO THE ACFT TO ESTABLISH THE CORRESPONDING SAFE SEPARATION ASAP."',
  ja: '浦東空港で、<b>ビジュアルアプローチを定常運用</b>する。<br>・<b>条件</b>：卓越視程 5,000m 超、雲高 700m 以上。<br>・パイロットまたは ATC が、<b>双方の合意</b>のもとで開始。ATC が到着方式の指示時に予想を伝える。<b>受けられない場合は ATC に伝える</b>。<br>・ATC は、パイロットが<b>着陸滑走路または先行機を視認</b>したと報告した後に指示を出せる。<br>・許可後の<b>高度・方位はパイロットの裁量</b>。<b>先行機および地上障害物との安全な間隔は、パイロットの責任</b>。<br>・ビジュアルアプローチ情報は ATIS で放送される。<br>・<b>終了</b>：パイロットが継続できない／気象が基準を下回る／安全に影響する事象を管制官が確認した場合、管制官が終了させる。<b>ミストアプローチ区間は設けない</b>。完了できないときは計器進入に切り替えるか、進入を終了。終了後は、管制官が針路・高度を指示して安全間隔を確保。',
  perf: '', nav: 'ビジュアルアプローチでは、計器進入の垂直誘導（VNAV/GP）に頼らず、PAPI などで降下角を管理する。［要確認：B747-8F での自社基準（AOM の Visual Approach）］',
  ops: '<b>後方乱気流・先行機との間隔は自分で守る</b>。ミストアプローチ区間が無いため、継続できないときは早めに ATC へ。',
  refs: [{ label: 'ZSSS にも同内容（F3202/26）', jump: 'F3202/26' }, { label: 'AOM：Visual Approach［要確認：該当章は未特定］' }] },

{ no: 'F2442/26', sec: 'ZSPD', pri: 'low', cat: ['灯火・NAVAID'], title: 'LIUZAO VOR/DME「PDL」109.4MHz：ラジアル 209°〜213°（時計回り）使用不可',
  issued: '22-JUN-2026', valid: '22-JUN-2026 05:06Z 〜 31-DEC-2026 15:59Z（予定）',
  orig: "LIUZAO VOR/DME 'PDL' 109.4MHZ/CH31X U/S BTN RADIAL 209DEG-213DEG CLOCKWISE.",
  ja: '<b>LIUZAO VOR/DME「PDL」（109.4MHz／CH31X）</b>は、<b>ラジアル 209°〜213°（時計回り）の間が使用不可</b>。（同内容が ZSSS の F2443/26 にも出ている。）',
  perf: '', nav: 'PDL を使う方式の、その方位の区間は使えない。FMS・チャートで該当方式を確認。', ops: '', refs: [] },

/* ───────────── ZSSS（代替） ───────────── */
{ no: 'F4290/26', sec: 'ZSSS', pri: 'mid', cat: ['滑走路・誘導路'],
  title: '誘導路の広範囲閉鎖（ZSSS 虹橋）',
  issued: '12-OCT-2026', valid: '13-OCT 1700Z 〜 19-OCT 2200Z（毎日 1700–2200Z）',
  orig: '"FLW TWY CLSD:\n1. TWY A2, A3, A4, B1, B2, B3, B4, B5, B6, B7, B8, T6, K2, K4, K5, K6, K7.\n2. TWY A, B CLSD BTN TWY H4 AND TWY H7.\n3. TWY H2, H3, H5, H6 CLSD BTN RWY18R/36L AND TWY B.\n4. TWY A BTN TWY A2 AND TWY H4.\n5. TWY B BTN TWY H1 AND TWY H4.\n6. TWY H1 BTN RWY18L/36R AND RWY18R/36L."\n1700-2200',
  ja: '<b>TWY A2〜A4、B1〜B8、T6、K2、K4〜K7</b>、TWY A・B の H4〜H7 間、H2・H3・H5・H6（RWY 18R/36L〜B 間）、A（A2〜H4 間）、B（H1〜H4 間）、H1（18L/36R〜18R/36L 間）が<b>閉鎖</b>。毎日 1700–2200Z。',
  perf: '', nav: '', ops: 'ZSSS をダイバート先にする場合、この時間帯は<b>誘導路が大幅に制限される</b>。スポットまでのタキシールートを確認。', refs: [{ label: 'ZSSS Diversion Info', main: 'DIVERSION' }] },

{ no: 'F4301/26', sec: 'ZSSS', pri: 'mid', cat: ['滑走路・誘導路', '着陸'],
  title: '着陸後、接地から 50 秒以内に滑走路を完全に離脱／高速離脱路の距離',
  issued: '13-OCT-2026', valid: '14-OCT-2026 16:00Z 〜 31-DEC-2026 15:59Z（予定）',
  orig: '"ALL LANDING ACFT SHALL FULLY VACATE RWY WITHIN 50S AFTER TOUCHDOWN, ACFT LANDING ON RWY18L/36R IS SUGGESTED TO USE THE FIRST RAPID EXIT TWY (EXCEPT FOR WET OR CONTAMINATED RWY).\nTHE DISTANCES FROM THE DTHR TO THE RAPID EXIT TWY ARE AS FLW (THE DISTANCE IS MEASURED FROM THE DTHR TO THE TANGENT POINT WHERE THE RAPID EXIT TWY CL START TO CURVE AWAY FROM THE RWY CL):\nLANDING RWY / RAPID EXIT TWY / DISTANCE TO DTHR\nRWY18L / TWY B4 / 1,850M\nRWY18L / TWY A3 / 1,890M\nRWY36R / TWY B3 / 1,950M\nRWY36R / TWY A2 / 1,715M"',
  ja: '<b>着陸機は、接地後 50 秒以内に滑走路を完全に離脱</b>すること。<b>RWY 18L/36R に着陸する場合は、最初の高速離脱路の使用を推奨</b>（滑走路が濡れている・汚染されている場合を除く）。しきい値（DTHR）から高速離脱路までの距離：RWY18L は <b>B4＝1,850m</b>／<b>A3＝1,890m</b>、RWY36R は <b>B3＝1,950m</b>／<b>A2＝1,715m</b>。',
  perf: '着陸滑走距離とブレーキング計画に関わる。B747-8F で、最初の高速離脱路（1,715〜1,950m）までに減速できるかを、着陸距離（LDA／ブレーキング）の計画で確認。', nav: '',
  ops: '50 秒以内の離脱要求は、B747-8F の重量・滑走路状態では厳しいことがある。難しい場合は事前に ATC に伝える。［要確認：貨物機の扱い］',
  refs: [{ label: 'ZSSS Diversion Info（滑走路）', main: 'DIVERSION' }] },

{ no: 'F3192/26', sec: 'ZSSS', pri: 'mid', cat: ['ATC・手順'],
  title: 'LID（Landing Information Deliver）運用トライアル：ZSSS 到着機（ZSPD と同内容）',
  issued: '06-AUG-2026（改訂 10-OCT-2026 18:54）', valid: '06-AUG-2026 07:36Z 〜 31-DEC-2026 15:59Z（予定）',
  orig: 'ZSPD の F3193/26 と同じ文面（対象空港が ZSSS）。ZSSS 着陸の 50 分前に LID メッセージを送信。',
  ja: '<b>ZSPD の F3193/26 と同じ内容で、対象が ZSSS</b>。ZSSS 着陸の約 50 分前に、データリンクで LID メッセージが送られる。',
  perf: '', nav: '', ops: 'ZSSS を代替で使う場合も、LID を受信した場合は初回交信で通報（詳細は F3193/26）。', refs: [{ label: '詳細は ZSPD の F3193/26', jump: 'F3193/26' }] },

{ no: 'F4251/26', sec: 'ZSSS', pri: 'mid', cat: ['灯火・NAVAID', '進入'],
  title: 'CHONGGU VOR/DME「CGT」112.5：試験中・使用しない → ILS DME のミストアプローチに影響',
  issued: '10-OCT-2026', valid: '15-OCT-2026 01:00Z 〜 15-OCT-2026 12:00Z',
  orig: "CHONGGU VOR/DME 'CGT' 112.5MHZ/CH72X ON TEST DO NOT USE DUE TO MAINT.\nEXPLANATION: NOTE: AFFECT FOR ALL ILS DME MISSED APCH PROCEDURES",
  ja: '<b>CHONGGU VOR/DME「CGT」（112.5MHz／CH72X）は試験中で、使用しない</b>（保守のため）。<b>すべての ILS DME のミストアプローチ方式に影響</b>する（会社の注記）。',
  perf: '', nav: '<b>ZSSS の ILS DME 進入の復行（ミストアプローチ）が、CGT を使う場合は実施できない</b>。復行方式の確認が必要。［要確認：代替の復行方式は ATC・チャートで確認］',
  ops: 'ZSSS をダイバート・代替にする場合、<b>復行時の航法</b>を事前に確認。', refs: [{ label: 'Jeppesen ZSSS 10-8（ZSSS）' }] },

{ no: 'F3922/26', sec: 'ZSSS', pri: 'low', cat: ['滑走路・誘導路'], title: '虹橋：TWY A 上の交差点 K1 の工事（第1期）',
  issued: '23-SEP-2026（改訂 01-OCT-2026）', valid: '30-SEP-2026 16:00Z 〜 31-OCT-2026 22:00Z',
  orig: 'THE INTERSECTION K1 ON TWY A IN SHANGHAI/HONGQIAO AIRPORT (ZSSS) PHASE ONE IS UNDER CONSTRUCTION. CONSTRUCTION AREA INVOLVED AREA A AND AREA B. IMPACTS ON OPERATION REFER TO AIRAC 2026-10 SUP NR.21/26.\nEXPLANATION: NOTE: REF JEPP 10-8',
  ja: '虹橋（ZSSS）の<b>TWY A 上の交差点 K1</b>が<b>第 1 期工事中</b>。工事区域は A と B。運用への影響は <b>AIRAC 2026-10 SUP 21/26</b> を参照。Jeppesen 10-8 参照。',
  perf: '', nav: '', ops: 'タキシーへの影響は SUP で確認。', refs: [{ label: 'AIRAC 2026-10 SUP 21/26 ／ Jeppesen ZSSS 10-8' }] },

{ no: 'F3202/26', sec: 'ZSSS', pri: 'mid', cat: ['ATC・手順', '進入'], title: '虹橋空港 ビジュアルアプローチ運用（浦東と同様）',
  issued: '07-AUG-2026', valid: '07-AUG-2026 07:36Z 〜 UFN',
  orig: '"SHANGHAI HONGQIAO AIRPORT VISUAL APPROACH OPERATION: 1. IMPLEMENTATION WEATHER CONDITIONS PREVAILING VISIBILITY: MORE THAN 5000M, CEILING: 700M AND ABOVE. 2. INSTRUCTIONS FOR PILOTS … (浦東 F3220/26 とほぼ同文。ATIS で放送、終了条件、ミストアプローチ区間なし 等)"',
  ja: '<b>浦東（F3220/26）とほぼ同じ内容</b>。視程 5,000m 超・雲高 700m 以上、双方合意で開始、許可後の高度・方位はパイロットの裁量、<b>先行機・障害物との間隔はパイロット責任</b>、ミストアプローチ区間なし。',
  perf: '', nav: '', ops: '詳細は F3220/26。', refs: [{ label: '詳細は ZSPD の F3220/26', jump: 'F3220/26' }] },

{ no: 'F2443/26', sec: 'ZSSS', pri: 'low', cat: ['灯火・NAVAID'], title: 'LIUZAO VOR/DME「PDL」109.4：ラジアル 209°〜213° 使用不可（ZSPD の F2442/26 と同じ）',
  issued: '22-JUN-2026', valid: '22-JUN-2026 05:11Z 〜 31-DEC-2026 15:59Z（予定）',
  orig: "LIUZAO VOR/DME 'PDL' 109.4MHZ/CH31X U/S BTN RADIAL 209DEG-213DEG CLOCKWISE.",
  ja: 'ZSPD の F2442/26 と同内容。', perf: '', nav: '同上。', ops: '', refs: [{ label: 'ZSPD の F2442/26', jump: 'F2442/26' }] },

/* ───────────── CHN（国） ───────────── */
{ no: 'NCA 00011/20', sec: 'CHN', pri: 'high', cat: ['Company', '代替空港'],
  title: 'ZGGG（広州）は、整備の理由で代替飛行場として使用不可',
  issued: '17-MAR-2020 22:53（改訂 09-JUN-2023 05:17）', valid: '17-MAR-2020 00:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nZGGG NA FOR ALTN FOR MAINTENANCE REASON\nEXPLANATION: NOTE: COMPANY POLICY',
  ja: '<b>ZGGG（広州白雲）は、整備上の理由で、代替飛行場（ALTN）として使用できない</b>（会社方針）。',
  perf: '', nav: '', ops: '中国線の代替選定で ZGGG を選ばない。RAIM 予測の NOTAM（NCA 00078/25）にも「ZGGG: NOT SUITABLE AS ALTN」とある。',
  refs: [{ label: 'Diversion タブ：ZGGG の警告表示', main: 'DIVERSION' }, { label: 'RAIM 予測 NCA 00078/25', jump: 'NCA 00078/25' }] },

/* ───────────── ASP（エリア） ───────────── */
{ no: 'NCA 00078/25', sec: 'ASP', pri: 'high', cat: ['Company', 'GPS・航法'],
  title: 'RAIM 欠測予測（IAP＝進入フェーズ用）：RNP 0.3／1.0、改訂から 48 時間有効',
  issued: '11-JUN-2025 08:13（改訂 15-OCT-2026 04:39）', valid: '12-JUN-2025 00:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nRAIM OUTAGE PREDICTION FOR IAP AS FLW\n(RNP VALUE 0.3, 1.0, VALID 48H FM RVSD TIME)\n0.3 FOR FINAL APPROACH SEGMENT IN RNAV/RNP APCH\n1.0 OTHER THAN FINAL APPROACH SEGMENT IN IAP\nJAPAN KOREA THAILAND VIETNAM: REF GOVERMENT NOTAM\nVHHH: 0.3/15-10-2026 15:46:30 UTC - 15-10-2026 15:53:30 UTC   1.0/NIL\nRCKH: 0.3/NIL 1.0/NIL\nRCTP: 0.3/NIL 1.0/NIL\nWSSS: 0.3/NIL 1.0/NIL\nWSAP: 0.3/NIL 1.0/NIL\nWMKK: 0.3/NIL 1.0/NIL\nWMKP: 0.3/NIL 1.0/NIL\nZSPD: 0.3/NIL 1.0/NIL\nZSSS: 0.3/NIL 1.0/NIL\nZSHC: 0.3/NIL 1.0/NIL\nZGSZ: 0.3/15-10-2026 15:46:30 UTC - 15-10-2026 15:54:30 UTC   1.0/NIL\nZGGG: NOT SUITABLE AS ALTN\nRPLL: 0.3/NIL 1.0/NIL',
  ja: '計器進入方式（IAP）の<b>RAIM（GPS の完全性監視）が成立しない時間帯の予測</b>。改訂時刻から <b>48 時間有効</b>。<b>RNP 0.3</b>は RNAV/RNP 進入の最終進入区間、<b>RNP 1.0</b>は最終進入区間以外。<br>今回：<b>VHHH の RNP 0.3 が 15-OCT 15:46:30〜15:53:30Z</b>、<b>ZGSZ の RNP 0.3 が 15:46:30〜15:54:30Z</b> に欠測。他空港（RCKH、RCTP、WSSS、WSAP、WMKK、WMKP、ZSPD、ZSSS、ZSHC、RPLL）は NIL（欠測なし）。日本・韓国・タイ・ベトナムは各国政府の NOTAM を参照。<b>ZGGG は代替に不適</b>。<div class="nt-h">AM RULES AND REGULATIONS 1-4「ABAS AVAILABILITY INFORMATION」</div><ul style="margin:0;padding-left:1.3em"><li>運航管理者は、<b>必要な進入方式の RAIM 予測</b>を入手して NOTAM に掲載する。</li><li><b>公式の RAIM NOTAM を出す国：日本・韓国・タイ・ベトナム・ドイツ・スイス</b>（本 NOTAM でも「各国政府の NOTAM を参照」）。それ以外の国は、RAIM 予測システムの結果を<b>会社 NOTAM または OFP の運航管理者コメント</b>で提供する。</li><li><b>予測の設定条件：</b>Mask Angle 5°、GPS Algorithm＝FDE（Fault Detection and Exclusion）、RNP 値＝<b>0.3：RNAV/RNP APCH の最終進入区間／1.0：IAP の最終進入区間以外</b>。</li><li>OM 4-4-5・4-4-6：GPS を使う区間で、飛行予定時刻に RAIM が<b>5 分を超えて連続して失われる</b>予測なら、GPS を使わない進入方式を計画するか、到着予定時間を変更する。</li></ul><div class="nt-h">この NOTAM でカバーされる範囲</div>RAIM 予測は<b>進入フェーズ</b>（Approach＝RAIM）の確認。<b>Terminal・Enroute（SID/STAR・洋上）は RAIM ではなく GPS CONSTELLATION STATUS（NAIM）</b>で見る＝<b>会社 NOTAM NCA 00007/19</b>（AM 1-4・1-5、OM 4-4-6 ②）。',
  perf: '', nav: '<b>RNAV(GNSS)／RNP 進入の使用可否</b>に直結（RNP APCH は RAIM で確認。OM 4-4-6 ②の衛星数の表は計器進入方式で GPS を使う場合は対象外）。到着時刻が欠測の時間帯と重なる空港では、<b>その進入方式は使えない</b>ため、別の進入方式（ILS 等）の準備が必要。',
  ops: '目的地・代替の ETA が欠測時間帯に入っていないか確認。この便（ZSPD ETA 04:46Z、ZSSS 代替）は両方 NIL で影響なし。<b>NIL は進入フェーズの確認のみ。</b>SID/STAR・Enroute の RNAV は衛星数（NCA 00007/19：RNAV 1/2・RNP 1/2 は 24 個、RNAV 5・RNP 4 は 23 個以上）で確認する。',
  refs: [{ label: 'QRH：GPS Data Unreliable', go: 'qrh' }, { label: '会社 NOTAM：GPS 衛星状況（NCA 00007/19）', jump: 'NCA 00007/19' }, { label: 'AM RULES AND REGULATIONS 1-4（ABAS AVAILABILITY INFORMATION）／OM 4-4-5・4-4-6' }, { label: 'RNAV/RNP 運航の必要機上装置・必要衛星数（OM 第4章）', main: 'RTE' }] },

/* ───────────── RJJJ（福岡 FIR）：流量規制・CDR・トラック ───────────── */
{ no: '福岡FIR 流量規制（5件）', sec: 'RJJJ', pri: 'mid', cat: ['流量規制・CDR・トラック'],
  title: '境界での流量規制（Flow Control）：MOLKA・SAPRA・KABAM 経由など',
  issued: '14〜15-OCT-2026', valid: '各 NOTAM 参照（15-OCT）',
  orig: '各 NOTAM: "FLOW CTL AT FIR BDRY AS FLWS, RTE: … ACFT: … PROC: … RMK: REF AIP ENR1.9-1"',
  ja: 'FIR 境界での<b>流量規制</b>。対象ルート・対象機・間隔が決められ、<b>間隔（MIT）の拡大や出発許可時刻（EDCT）の発行</b>が行われる。詳細は AIP ENR 1.9-1。',
  perf: '', nav: '', ops: '遅延・出発許可時刻の発行（EDCT）につながる。対象ルート・対象機種（EB＝東行き、WB＝西行き、SB＝南行き など）を確認。',
  rows: [
    { no: 'Z1822/26', valid: '15-OCT 0700–0900Z', text: 'ルート M750。<b>RCTP 発で日本着の東行き機</b>：セクター F15 の<b>間隔を拡大</b>。<b>MOLKA で RCTP から 7 分間隔</b>。' },
    { no: 'Z1821/26', valid: '15-OCT 0300–0500Z', text: 'ルート M750。<b>RCTP または VHHH 発で福岡 FIR に入る東行き機</b>：<b>MOLKA で高度に関係なく 5 分間隔</b>。' },
    { no: 'Z1820/26', valid: '15-OCT 0400–1100Z', text: 'ルート G585/Y16/Y38。<b>IKEKA W4 経由で中国方面（ZSYT・ZSWH を除く）の西行き機（WB）</b>：<b>SAPRA で高度に関係なく 40NM 間隔</b>。' },
    { no: 'Y1154/26', valid: '14-OCT 0948Z 〜 15-OCT 1600Z', text: 'ATS ルート A1/G581/Y26/Y52。<b>KABAM 経由でマニラ FIR へ向かう機に、出発予定許可時刻（EDCT）を発行</b>。' },
    { no: 'Z1819/26', valid: '14-OCT 0945Z 〜 15-OCT 1600Z', text: 'ルート B576/Y742。<b>KABAM 経由でマニラ FIR へ向かう南行き機（SB）。VVDN 向けを除く</b>：<b>ATOTI・MUGUS で高度に関係なく 12 分間隔</b>。<b>他のルートは使用不可</b>。' }
  ],
  refs: [{ label: 'AIP Japan ENR 1.9-1（流量規制）' }, { label: 'NCA Tools の TAXI タブ：EDCT（EOBT の 60 分前に予測 EDCT、40 分前に確定 EDCT）', main: 'TAXI' }, { label: 'NCA Tools の RTE タブ：台湾・香港ルートの注記', main: 'RTE' }] },

{ no: 'Q2448/26・Q2449/26・Q2443/26', sec: 'RJJJ', pri: 'mid', cat: ['流量規制・CDR・トラック'],
  title: 'CDR（Conditional Route）の開放：Z 系・L512 ほか（15-OCT）',
  issued: '13〜14-OCT-2026', valid: '各 NOTAM 参照（15-OCT）',
  orig: '各 NOTAM: "CDR ARE ESTABLISHED AS FLW, RTE / PERIOD / MNM APPLICABLE ALT … MEA"  RMK: REF AIP ENR3.3',
  ja: '<b>CDR（条件付き経路）</b>として開放される経路と、その<b>期間（YYMMDDHHMM/YYMMDDHHMM、Z）</b>。最低の使用高度は <b>MEA</b>。AIP ENR 3.3 参照。<b>CDR 1 は AIP に記載、CDR 2 は NOTAM で通知</b>（使用可能時間を NOTAM で確認する必要）。',
  perf: '', nav: 'ルート計画に、これらの CDR を使う場合は<b>期間内であること</b>が条件。', ops: '会社ルートに Z29／Z31（日本⇔台湾）がある場合は、この NOTAM で使用可能な時間帯を確認。',
  rows: [
    { no: 'Q2448/26', valid: '14-OCT 2100Z 〜 15-OCT 2100Z', text: 'Z16（15 日 1300–2100Z）、Z17・Z18・Z162（14 日 2100–2200Z と 15 日 1300–2100Z）、Z21・Z171・Z182（14 日 2100–2200Z と 15 日 1200–2100Z）、Z101・Z102（15 日 1300–2100Z）。すべて MEA（画像で確認済み）' },
    { no: 'Q2449/26', valid: '14-OCT 2200Z 〜 15-OCT 2200Z', text: 'L512・Z13・Z14（15 日 1200–2200Z）、Z25・Z26・Z27・Z262（15 日 1330–2200Z）、Z40・Z41（14 日 2200–2300Z と 15 日 1400–2200Z）。すべて MEA' },
    { no: 'Q2443/26', valid: '14-OCT 2100Z 〜 15-OCT 2100Z', text: '<b>Z29・Z31</b>・Z32・Z34（15 日 1500–2100Z）。すべて MEA' }
  ],
  refs: [{ label: 'NCA Tools の RTE タブ：⑪ Z29／Z31（日本⇔台湾）の使用（CDR 2）', main: 'RTE' }, { label: 'AIP Japan ENR 3.3' }] },

{ no: 'Q2450/26・Q2452/26', sec: 'RJJJ', pri: 'mid', cat: ['流量規制・CDR・トラック'],
  title: '東行き PACOTS トラック（15-OCT 0700–2100Z）',
  issued: '14-OCT-2026 18:32', valid: '15-OCT-2026 07:00Z 〜 21:00Z',
  orig: 'Q2450/26: "EASTBOUND PACOTS TRACKS BETWEEN JAPAN AND NORTH AMERICA, TRACK 1 …" / Q2452/26: "EASTBOUND PACOTS TRACKS BETWEEN SOUTHEAST ASIA AND NORTH AMERICA, TRACK 14 …"',
  ja: '北太平洋の<b>東行き PACOTS トラック</b>（日本／東南アジア → 北米）。各トラックの<b>フレックスルート（座標）、日本側ルート、NAR（北米）ルート</b>が示される。',
  perf: '', nav: 'トラックの選択で、巡航経路・距離・燃料が変わる。', ops: '北米線の洋上経路。NRT→北米の便は、割り当てトラックを OFP と照合。',
  rows: [
    { no: 'Q2450/26', valid: '15-OCT 0700–2100Z', text: '日本⇔北米。<b>Track 1</b>：KALNA（ADNAP OTR5 KALNA）→ …PRETY（KSEA/KPDX は PRETY TOU、CYVR は PRETY GOVAD）。<b>Track 2</b>：EMRON（ADNAP OTR7 EMRON）→ TRYSH（KSFO は TRYSH AMAKR BGGLO、KLAX は TRYSH ENI OAK BURGL IRNMN）。<b>Track 3</b>：LEPKI（AVBET OTR11 LEPKI）→ DACEM（KLAX は DACEM PAINT PIRAT BURGL IRNMN、KSFO は DACEM PAINT PIRAT OSI）。ATM センター TEL 81-92-608-8870' },
    { no: 'Q2452/26', valid: '15-OCT 0700–2100Z', text: '東南アジア⇔北米。<b>Track 14</b>：LEPKI → 40N160E … → ALLBE。RCTP/VHHH 側ルート：MOLKA M750 MUKEP Y891 OVSUN Y893 IGMIS Y57 POROT OTR11 LEPKI。NAR ルート：KSFO は ALLBE PIRAT OSI、KLAX は ALLBE PIRAT BURGL IRNMN。<b>Track 15 は使用不可</b>' }
  ],
  refs: [{ label: 'NCA Tools の RTE タブ：NOPAC・PACOTS の要点（Area Guide）', main: 'RTE' }] },

/* ───────────── RJJJ：訓練空域・軍事 ───────────── */
{ no: '福岡FIR 米軍・自衛隊活動（17件）', sec: 'RJJJ', pri: 'mid', cat: ['空域・軍事'],
  title: '米軍・自衛隊の訓練活動空域（福岡 FIR）：非参加の IFR 機は通さない',
  issued: '3〜14-OCT-2026', valid: '各 NOTAM 参照（15-OCT ほか）',
  orig: '各 NOTAM 共通: "MULTIPLE U.S. MIL ACT WILL BE CONDUCTED WI FUKUOKA FIR AS FLW, AREA: BOUNDED BY FLW POINTS … ATC WILL NOT CLEAR NON-PARTICIPATING IFR FLT THRU THIS AREA."（JSDF 版は "JAPAN SELF DEFENCE FORCE ACT WILL BE CONDUCTED …"）',
  ja: '<b>活動空域内は、参加していない IFR 機を通さない</b>。会社ルートが影響を受ける場合は、NCA の運航管理が NOTAM に「NOT AFFECT CO-RTE（会社ルートに影響なし）」と注記する。東北沖の2件（JSDF）は、V22・Y10・Y302 の FL310 以下が影響（RJCC 出発機を除く）。',
  perf: '', nav: '', ops: '飛行経路が活動空域にかかる場合は、管制から迂回の指示がある。OFP と照合して、高度・時間帯を確認。<b>「NOT AFFECT CO-RTE」と書かれたものは、会社ルートに影響しない</b>。',
  rows: [
    { no: 'P5072/26', valid: '15-OCT 0800–1030Z', text: '<b>JSDF</b>（東北太平洋側、三沢の東〜南東。40°N 付近）。5,000ft AMSL〜FL300。V22・Y10・Y302 の FL310 以下が影響（RJCC 出発機を除く）。代替ルートの申請が必要。ATM センター TEL 81-92-608-8872' },
    { no: 'P5067/26', valid: '15-OCT 0800–1030Z', text: '<b>JSDF</b>（青森県の東〜北。41°N 付近。三沢 CTR と NR1/NR2 は除く）。5,000ft AMSL〜FL300。上記と同じ航空路が影響' },
    { no: 'P4984/26', valid: '15-OCT 0115–0615Z', text: '<b>米軍</b>（P5072 と同じ区域。八戸・三沢 CTR は除く）。5,000ft AMSL〜FL300。V22・Y10・Y302 の FL310 以下が影響' },
    { no: 'P4983/26', valid: '15-OCT 0115–0615Z', text: '<b>米軍</b>（P5067 と同じ区域）。5,000ft AMSL〜FL300。同上の航空路が影響' },
    { no: 'P5052/26', valid: '15-OCT 0100–2100Z', text: '<b>米軍 OCTAGON B</b>（伊豆諸島の南方、32°N 付近）。SFC〜UNL' },
    { no: 'P5051/26', valid: '15-OCT 0100–2100Z', text: '<b>米軍 OCTAGON A</b>（伊豆諸島周辺、R116 の南）。SFC〜UNL' },
    { no: 'P4897/26', valid: '11〜17-OCT 毎日 2300–1500Z', text: '<b>米軍 EAGLE-CENTER</b>（沖縄の東、25〜26°N）。SFC〜FL600。<b>会社ルートに影響なし</b>' },
    { no: 'P4899/26', valid: '11〜17-OCT 毎日 2100–1500Z', text: '<b>米軍 LION-WEST</b>（沖縄の西〜南西）。SFC〜FL600。<b>会社ルートに影響なし</b>' },
    { no: 'P4900/26', valid: '11〜17-OCT 毎日 2100–1500Z', text: '<b>米軍 LION-CENTER</b>（沖縄の南〜南西）。SFC〜FL600。<b>会社ルートに影響なし</b>' },
    { no: 'P4910/26', valid: '11〜17-OCT 毎日 2100–1500Z', text: '<b>米軍 TYBEE-WEST</b>（沖縄の西、26°N 付近）。<b>FL280〜FL290</b>' },
    { no: 'P4911/26', valid: '11〜17-OCT 毎日 2100–1500Z', text: '<b>米軍 TYBEE-EAST</b>（沖縄の東、26°N 付近）。<b>FL280〜FL290</b>' },
    { no: 'P4903/26', valid: '11〜17-OCT 毎日 2300–1500Z', text: '<b>米軍 TIGER-EAST</b>（沖縄の東〜北東、26〜27°N）。SFC〜FL600' },
    { no: 'P4902/26', valid: '11〜17-OCT 毎日 2300–1500Z', text: '<b>米軍 TIGER-CENTER</b>（沖縄の北〜北東）。SFC〜FL600' },
    { no: 'P4901/26', valid: '11〜17-OCT 毎日 2300–1500Z', text: '<b>米軍 TIGER-WEST</b>（沖縄の北、奄美付近）。SFC〜FL600' },
    { no: 'P4898/26', valid: '11〜17-OCT 毎日 2300–1500Z', text: '<b>米軍 EAGLE-EAST</b>（沖縄の東北東、25°N 付近）。SFC〜FL600' },
    { no: 'P4908/26', valid: '11〜17-OCT 毎日 2100–1500Z', text: '<b>米軍 MOOSE-SOUTH-HI</b>（台湾の北東、先島諸島の北）。<b>FL250〜FL600</b>' },
    { no: 'P4907/26', valid: '11〜17-OCT 毎日 2100–1500Z', text: '<b>米軍 MOOSE-NORTH</b>（台湾の北東〜沖縄の西）。SFC〜FL600' }
  ],
  refs: [{ label: 'AIP Japan ENR 5.1／5.2（制限・危険・訓練空域）' }, { label: 'NCA Tools の RTE タブ（沖縄・台湾方面の航空路）', main: 'RTE' }] },

{ no: 'P5048/26・P5039/26・P4921/26', sec: 'RJJJ', pri: 'low', cat: ['空域・軍事'],
  title: '高高度訓練空域 K-1-2／K-1-3、岩国 ITRA、警戒区域 W-173 の運用時間変更',
  issued: '13-OCT-2026', valid: '各 NOTAM 参照',
  orig: 'P5048/26: "HIGH ALT TRAINING/TESTING AREA K-1-2 AND K-1-3 ACT AS FLWS … RMK: REF AIP PAGE ENR 5.2-13" / P5039/26: "IWAKUNI TEMPO RESERVED AIRSPACE ACT AS FLW … RMK: REF AIP SUP 023/26" / P4921/26: "REF AIP PAGE ENR5.1-9 WARNING AREA W-173 (HOTEL HOTEL) HOURS OF OPERATION TEMPO CHANGE 2100/1500 UTC INSTEAD OF 2100/1100 UTC"',
  ja: '訓練空域の活動時間。<b>W-173 は 10 月、運用時間を 2100–1500Z に変更</b>（通常は 2100–1100Z）。',
  perf: '', nav: '', ops: '該当空域に近い経路のときに確認。W-173 は会社ルートに影響しない旨の注記あり。',
  rows: [
    { no: 'P5048/26', valid: '15-OCT 0500–0730Z', text: '高高度訓練・試験空域 <b>K-1-2</b>（FL260 より上、FL260〜FL410）と <b>K-1-3</b>（FL310 より上、FL310〜FL410）が活動。AIP ENR 5.2-13' },
    { no: 'P5039/26', valid: '14-OCT 2200Z 〜 15-OCT 1330Z', text: '<b>岩国 ITRA（臨時の留保空域）</b>：ITRA-E（SFC〜FL250）、N1（SFC〜FL180）、N2（SFC〜FL600）、N3（SFC〜FL240）、S10〜S16（SFC〜FL600）、S20〜S25（SFC〜FL450）、S30〜S33（SFC〜FL250）。AIP SUP 023/26' },
    { no: 'P4921/26', valid: '04-OCT 2100Z 〜 31-OCT 1500Z', text: '<b>警戒区域 W-173（HOTEL HOTEL）</b>の運用時間を <b>2100/1500Z</b>（通常 2100/1100Z）に一時変更。SFC〜UNL。<b>会社ルートに影響なし</b>。AIP ENR 5.1-9' }
  ],
  refs: [{ label: 'AIP Japan ENR 5.1-9／5.2-13／AIP SUP 023/26' }] },

/* ───────────── RJJJ：注意喚起・その他 ───────────── */
{ no: 'Q1947/26', sec: 'RJJJ', pri: 'high', cat: ['注意喚起', 'Conflict Zone'],
  title: '日本籍機は、ミンスク（UMMV）FIR に入らないよう勧告',
  issued: '17-AUG-2026', valid: '17-AUG-2026 15:35Z 〜 17-NOV-2026 14:59Z（予定）',
  orig: 'OPERATORS OF AIRCRAFT REGISTERED IN JAPAN ARE ADVISED NOT TO ENTER MINSK (UMMV) FIR DUE TO SERIOUS SAFETY AND SECURITY CONCERNS TO COMMERCIAL AVIATION.\nEXPLANATION: 17 AUG 26 15:35 UNTIL 17 NOV 26 14:59 ESTIMATED\nNOTE: REF EUR NCA00100/21',
  ja: '<b>日本に登録された航空機の運航者は、安全・保安上の重大な懸念から、ミンスク（UMMV）FIR に入らない</b>よう勧告される。会社の注記：EUR NCA 00100/21 参照。',
  perf: '', nav: '欧州線のルート計画で、<b>ベラルーシ（ミンスク）FIR を通過しない</b>。', ops: '欧州線（EHAM／EDDF／LIMC 方面）の経路が、ミンスク FIR を通らないことを OFP で確認。',
  refs: [{ label: 'Diversion タブ：Conflict Zone の地図（FD Pro）。<b>ミンスク FIR は地図に登録済み（Cat.1・暫定）</b>', main: 'DIVERSION' }, { label: '会社 NOTAM EUR NCA 00100/21（社内資料）' }] },

{ no: 'P3999/26', sec: 'RJJJ', pri: 'mid', cat: ['注意喚起'],
  title: '北朝鮮のロケット発射に備え、迎撃ミサイルが発射されることがある（福岡 FIR）',
  issued: '17-AUG-2026', valid: '17-AUG-2026 07:09Z 〜 16-NOV-2026 15:00Z（予定）',
  orig: '"ALL ACFT INTENDING TO FLY WI FUKUOKA FIR ARE ADVISED TO PAY SPECIAL ATTENTION TO THE FOLLOWING INFORMATION. IN ACCORDANCE WITH ARTICLE 82-3 OF JAPAN SELF DEFENSE FORCE LAW, ANTIBALLISTIC MISSILES MAY BE LAUNCHED FOR THE DESTRUCTION OF THE ROCKET EXPECTED TO BE LAUNCHED FROM NORTH KOREA. THE ANTIBALLISTIC MISSILES ARE DEPLOYED AT POSITIONS BLW,\n(1) NAHA-SHT: 261219N1273929E\n(2) MIYAKOJIMA: 244602N1251930E\n(3) ISHIGAKIJIMA: 242404N1241121E\n(4) YONAGUNIJIMA: 242638N1225716E"\nEXPLANATION: 17 AUG 26 07:09 UNTIL 16 NOV 26 15:00 ESTIMATED   F)SFC G)UNL',
  ja: '福岡 FIR を飛ぶすべての航空機は注意。<b>自衛隊法 82 条の 3 に基づき、北朝鮮から発射が予想されるロケットを破壊するため、迎撃ミサイルが発射されることがある</b>。配備位置：<b>那覇（PAC-3）、宮古島、石垣島、与那国島</b>。SFC〜UNL。',
  perf: '', nav: '', ops: '南西諸島方面の経路（台湾・香港線など）で、情報に注意。発射時は ATC から指示があるはず。', refs: [{ label: 'Diversion タブ：Conflict Zone の地図（北朝鮮 FIR は進入禁止）', main: 'DIVERSION' }] },

{ no: 'NCA 00115/24', sec: 'RJJJ', pri: 'high', cat: ['Company', '非常時', '通信'],
  title: 'RJJJ（福岡）：ショートコード 443101 は使用不可／SATCOM 音声の直通電話番号',
  issued: '14-JUN-2024 10:49（改訂 10-DEC-2025 01:04）', valid: '14-JUN-2024 11:00Z 〜 UFN',
  orig: 'SHORT CODE 443101 FOR RJJJ NOT AVBL DUE TO MAINT\nRJJJ SATCOM VOICE DIRECT DIAL PHONE NUMBER 0081926079988. IN USE.\nATTACHED ARTICLE TENTATIVELY REPLACES NCA ISSUE EMER, JAPAN-1,2\nRMKS:\n- PHONE NUMBER IN FD PRO X IS WRONG.\n- NEED TO INPUT PHONE NUMBER MANUALLY.',
  ja: '<b>福岡 ACC（RJJJ）のショートコード 443101 は、保守のため使用できない</b>。代わりに、<b>RJJJ の SATCOM 音声の直通電話番号 0081926079988</b> を使用中。添付の資料は、NCA Issue の EMER 日本（JAPAN-1,2）を<b>暫定的に置き換える</b>。注：<b>FD Pro X の電話番号は誤り</b>。<b>手動で番号を入力する必要がある</b>。',
  perf: '', nav: '', ops: '福岡 FIR で、HF/VHF が使えない非常時に SATCOM で福岡 ACC を呼ぶとき、<b>FD Pro の番号を信用せず、この番号を手入力</b>。',
  refs: [{ label: 'EMER（参照サイト）：日本（JAPAN-1,2）', go: 'emer' }] },

/* ───────────── ZSHA（上海 FIR） ───────────── */
{ no: 'A4484/26・A4646/26', sec: 'ZSHA', pri: 'high', cat: ['中国空域', '空域・軍事', 'ATC・手順'],
  title: '北京周辺の特別制限区域 ZB(SR)801：商業便を除き飛行不可／進入前に保安状態を通報',
  issued: '13-SEP-2026（A4484）／16-SEP-2026（A4646）', valid: '19-SEP-2026 16:00Z 〜 UFN',
  orig: 'A4484/26: "SPECIAL RESTRICTED AREA ESTABLISHED, THE RELEVANT REQUIREMENTS AS FOLLOWS:\n1. NAME AND IDENTIFICATION: SPECIAL RESTRICTED AREA (ZB(SR) 801)\n2. LATERAL LIMITS: A CIRCLE WITH A RADIUS OF 300KM CENTERED AT N395410E1162327, BEIJING PROHIBITED AREA (ZB(P)801) NOT INCLUDED. VERTICAL LIMITS: SFC-UNL. EFFECTIVE TIME: H24\n3. SPECIAL RESTRICTIONS: NO FLIGHT OPERATIONS SHALL BE PERMITTED EXCEPT COMMERCIAL FLIGHTS (NOTE 1), BUSINESS FLIGHTS (NOTE 2), AND FLIGHTS FOR MILITARY, CUSTOMS, POLICE SERVICES, AND FIRE-FIGHTING RESCUE PURPOSES.\n4. OPERATIONAL REQUIREMENTS\n4.1 MANNED AIRCRAFT SHALL BE EQUIPPED WITH A SSR TRANSPONDER OR OTHER SURVEILLANCE EQUIPMENT OF EQUIVALENT PERFORMANCE, WHICH SHALL REMAIN ACTIVATED THROUGHOUT THE FLIGHT. …\n4.2 PILOTS SHALL MAINTAIN CONTINUOUS TWO-WAY COMMUNICATION WITH ATC. … IN THE EVENT OF LOSS OF TWO-WAY COMMUNICATION, PILOTS … SHALL IMMEDIATELY SET THE SSR TRANSPONDER CODE FOR RADIO COMMUNICATION FAILURE, AND TAKE ALL FEASIBLE MEASURES TO OBTAIN ACKNOWLEDGEMENT FROM ATC UNIT.\n4.3 PRIOR TO ENTERING THE SPECIAL RESTRICTED AREA … (以降は画面が切れており未取得)"\nA4646/26: "PRIOR TO ENTERING THE SPECIAL RESTRICTED AREA (ZB(SR) 801), AIRCRAFT MUST REPORT SECURITY STATUS TO THE ATC UNIT AT THE FOLLOWING REPORTING POINTS: (1) B334 TGO (2) W31 CHG (3) G212 VIA TGO: TGO / VIA BESGI: BESGI (4) A575 VIA CHG: CHG / VIA VANVO: VANVO (5) G332 CHG (6) W35 CHG (7) W201 ORAVA (8) W576 JOIN TO W55 ORAVA (9) W200 DOVIV (10) W4 DYN (11) W569 YQG (12) W56 ORODO (13) W62 ORODO (14) W277 OMBIM (15) W69 BAXOD (16) W64 NUTLO (17) W65 TMR (18) B458 TMR (19) W86 TMR (20) B339 ERVEB (21) W33 NUVPU (22) W52 NUVPU (23) W157 DALIM (24) W160 YQG (25) AIRCRAFT TAKING-OFF FROM JINAN/YAOQIANG (ZSJN), TAIYUAN/WUSU (ZBYN), HOHHOT/BAITA (ZBHH) AND ENTERING THE AREA SHALL REPORT TO THE AERODROME ATC UNIT."\nEXPLANATION: NOTE: AFFECT FOR CO-RTE (7) W201 (15) W69  MXP/FRA-NRT ALL CO-RTE. REF NOTAM A4484/26',
  ja: '<b>北京周辺に特別制限区域 ZB(SR)801</b>を設定。<br>・<b>範囲</b>：N39°54\'10"E116°23\'27"（北京）を中心とする<b>半径 300km の円</b>（北京の禁止区域 ZB(P)801 は含まない）。<b>SFC〜UNL、H24</b>。<br>・<b>特別な制限</b>：<b>商業便（注1）、ビジネス便（注2）、軍・税関・警察・消防救助目的を除き飛行不可</b>。<br>・<b>運航要件</b>：<b>有人機は SSR トランスポンダ（または同等の監視装置）を、飛行中ずっと作動</b>。<b>ATC と常時双方向通信</b>を維持し、<b>通信途絶時は直ちに通信途絶のトランスポンダコードにセット</b>し、ATC の確認を得る手段をすべて取る。<br>・<b>進入前の通報（A4646/26）</b>：区域に入る前に、<b>保安状態（security status）を ATC に通報</b>。ルートごとの通報点は下の表。',
  perf: '', nav: '北京周辺を通る経路（欧州線・中国線）が対象。経路ごとに<b>通報点が決まっている</b>。',
  ops: '<b>進入前に保安状態を ATC に通報</b>。トランスポンダは常時 ON。通信途絶時のコードを確認しておく。［要確認：通報の文言・「保安状態」の言い方は ATC の指示・社内資料で確認］',
  rows: [
    { no: '通報点（A4646）', valid: 'ルート → 通報点', text: 'B334→TGO／W31→CHG／G212（TGO 経由）→TGO、G212（BESGI 経由）→BESGI／A575（CHG 経由）→CHG、A575（VANVO 経由）→VANVO／G332→CHG／W35→CHG／<b>W201→ORAVA</b>／W576（W55 に合流）→ORAVA／W200→DOVIV／W4→DYN／W569→YQG／W56→ORODO／W62→ORODO／W277→OMBIM／W69→BAXOD／W64→NUTLO／W65・B458・W86→TMR／B339→ERVEB／W33・W52→NUVPU／W157→DALIM／W160→YQG。<br><b>ZSJN（済南）・ZBYN（太原）・ZBHH（フフホト）から離陸して区域に入る機は、その飛行場の ATC ユニットに通報</b>。<br>会社の注記：<b>会社ルートに影響あり＝W201（ORAVA）と W69（BAXOD）</b>（MXP/FRA→NRT の全会社ルート）。参照 NOTAM A4484/26' }
  ],
  refs: [{ label: 'NCA Tools の RTE タブ：中国 FIR の要点（Area Guide）', main: 'RTE' }, { label: '大連 CTA の飛行指示（A5182/26）', jump: 'A5182/26' }] },

{ no: 'A5182/26', sec: 'ZSHA', pri: 'high', cat: ['中国空域', 'ATC・手順', 'Company'],
  title: '大連 CTA を通過する定期便：UNSEK／MAKNO／EKULI へ直行（会社ルートに影響）',
  issued: '13-OCT-2026', valid: '13-OCT-2026 02:24Z 〜 13-JAN-2027 15:59Z（予定）',
  orig: 'SCHEDULE FLIGHT OVERFLYING DALIAN CTA ADJUSTED AS FOLLOW:\n1. ACFT OVERFLYING DALIAN CTA VIA W100-ORAVA-W201-UNSEK-A326-DONVO: SHALL FLY TO UNSEK FM MUDOT DIRECTLY.\n2. ACFT OVERFLYING DALIAN CTA SOUTHWARD VIA A588-UDETI-W106-MAKNO: SHALL FLY TO MAKNO FM VENOS DIRECTLY.\n3. ACFT FLY TO AD ZSYT VIA A588-VENOS-W573-DALIAN VOR \'DBL\': SHALL FLY TO MAKNO FM VENOS DIRECTLY.\n4. ACFT FLY VIA A588-VENOS-W573-DALIAN VOR \'DBL\'-W5-EKULI-W576-OVTUP: SHALL FLY TO EKULI FM VENOS DIRECTLY.\nEXPLANATION: NOTE: AFFECT FOR CO-RTE\nMXP-NRT...S01,S02,S03,S04,D01,D02 (1. ORAVA-W201-UNSEK)\nFRA-NRT...S01,S02,S03,S04,S05,D01,D02 (1. ORAVA-W201-UNSEK)\nFPL CHANGE NOT REQUIRED, ATC MAY INSTRUCT TO FLY TO UNSEK FM MUDOT DIRECTLY',
  ja: '大連 CTA を通過する定期便の経路を調整。<br>1. <b>W100–ORAVA–W201–UNSEK–A326–DONVO</b> で通過する機は、<b>MUDOT から UNSEK へ直行</b>。<br>2. <b>A588–UDETI–W106–MAKNO</b> で南へ通過する機は、<b>VENOS から MAKNO へ直行</b>。<br>3. ZSYT へ向かう A588–VENOS–W573–DALIAN VOR（DBL）の機は、VENOS から MAKNO へ直行。<br>4. A588–VENOS–W573–DBL–W5–EKULI–W576–OVTUP の機は、VENOS から EKULI へ直行。<br>会社の注記：<b>会社ルートに影響</b>。MXP→NRT（S01〜S04、D01、D02）と FRA→NRT（S01〜S05、D01、D02）の ORAVA–W201–UNSEK 区間。<b>FPL の変更は不要</b>で、ATC が MUDOT から UNSEK への直行を指示することがある。',
  perf: '直行になると距離が短くなり、燃料・到着時刻が少し変わる。', nav: 'FMS の経路は、ATC の直行指示で書き換える（DIRECT TO）。',
  ops: '欧州→日本線（MXP／FRA→NRT）では、MUDOT 付近で UNSEK への直行指示を想定。', refs: [{ label: 'NCA Tools の RTE タブ（欧州線の会社ルート）', main: 'RTE' }] },

{ no: 'A3194/26', sec: 'ZSHA', pri: 'mid', cat: ['中国空域', 'ATC・手順'],
  title: '上海周辺の新しい主経路：PIKAS 以降を PIMOL–V14 へ付け替え（会社ルートに影響なし）',
  issued: '30-JUL-2026（改訂 06-AUG-2026）', valid: '30-JUL-2026 07:43Z 〜 31-DEC-2026 15:59Z（予定）',
  orig: "\"THE NEW FLIGHT ROUTES ARE PRIMARY FLIGHTS ROUTES. SEND FPL ACCORDING TO THE NEW FLIGHTS ROUTES. IF THERE IS ANY TEMPORARY CHANGE, FLW ATC INSTRUCTIONS:\\n1. FLIGHTS ROUTE FROM ZSSS, ZSPD, ZSNB, ZSZS VIA PIKAS-G330-UNTAN-G345-OLRIS-R343-LUOGANG VOR 'HFE'-B208 TO FUYANG VOR 'FYG' AND A POINT BEYOND: ZSSS/ZSPD/ZSNB/ZSZS VIA PIKAS-G330-PIMOL-V14-NOBEM-W73-VEMEX-W163-LUOGANG VOR 'HFE'-B208-FUYANG VOR 'FYG', THEN JOIN THE EXISTING FLIGHTS ROUTE.\\n2. FROM ZSSS, ZSPD VIA PIKAS-G330-UNTAN-G345-OLRIS-R343-MADUK-W51-LEGIV-W164-ADGOL-W50 TO XISHUI VOR 'XSH' AND BEYOND: ZSSS/ZSPD VIA PIKAS-G330-PIMOL-V14-NOBEM-W73-MADUK-W51-LEGIV-W164-ADGOL-W50-XISHUI VOR 'XSH', THEN JOIN THE EXISTING ROUTE.\\n3. FROM ZSNT, ZSCG, ZSYA VIA BENNIU NDB 'ZJ'-G345-OLRIS-R343-MADUK-W51-LEGIV-W164-VILID AND BEYOND: ZSNT/ZSCG/ZSYA-BENNIU NDB 'ZJ'-G345-PIMUS-V11-DOGVI-W545-VEMEX-W73-MADUK-W51-LEGIV-W164-VILID, THEN JOIN THE EXISTING ROUTE.\\n4. FROM ZSNT, ZSCG, ZSYA VIA BENNIU NDB 'ZJ'-G345-OLRIS-R343-LUOGANG VOR 'HFE' AND BEYOND: ZSNT/ZSCG/ZSYA-BENNIU NDB 'ZJ'-G345-PIMUS-V11-DOGVI-W545-VEMEX-W163-LUOGANG VOR 'HFE', THEN JOIN THE EXISTING ROUTE.\\n5. FROM ZSWX (DEPARTURE) VIA SASAN TO LUOGANG VOR 'HFE' AND BEYOND: ZSWX VIA SASAN-W161-WUXI VOR 'VMB'-V11-DOGVI-W545-VEMEX-W163-LUOGANG VOR 'HFE', THEN JOIN THE EXISTING ROUTE.\\n6. FROM ZSWX (DEPARTURE) VIA SASAN TO A POINT BEYOND VILID: ZSWX VIA SASAN-W161-WUXI VOR 'VMB'-V11-DOGVI-W545-VEMEX-W73-MADUK-W51-LEGIV-W164-VILID, THEN JOIN THE EXISTING ROUTE.\\n7. FROM ZSHC TO A POINT BEYOND ALDAP: ZSHC-ANDONG VOR 'AND'-B221-GOVNI-V140-IDNIK-V141-ALDAP AND BEYOND.\\n8. FROM ZSNB TO A POINT BEYOND ALDAP: ZSNB-GOVNI-V140-IDNIK-V141-ALDAP AND BEYOND.\\n9. FROM ZSWZ (DEPARTURE) VIA SHENGZHOU VOR 'SHZ'-B221-ANDONG VOR 'AND'-G204-A POINT BEYOND JIUTING VOR 'JTN' (EXCLUDE LANDING AT ZSSS AND ZSNT): ZSWZ VIA SHZ-B221-GOVNI-V140-JIUTING VOR 'JTN' TO A POINT BEYOND JTN, THEN JOIN THE EXISTING ROUTE.\"\\nEXPLANATION: 30 JUL 26 07:43 UNTIL 31 DEC 26 15:59 ESTIMATED\\nNOTE: NOT AFFECT FOR CO-RTE",
  ja: "<b>新しい飛行経路が主経路</b>。<b>新経路で FPL を提出</b>する。一時的な変更は ATC の指示に従う。上海エリアから内陸方面へ出る経路の、<b>主な変更は G330 の PIKAS 以降を UNTAN–G345–OLRIS–R343 から PIMOL–V14–NOBEM–W73 に付け替える点</b>。下表のとおり 9 区分。<b>会社ルートに影響なし</b>（会社の注記）。",
  perf: '', nav: '上海（ZSPD/ZSSS）から内陸（西・南西）へ出る中国国内線・他社の経路が対象。<b>KZ225 のような ZSPD 着の便には直接関係しない</b>が、同じエリアの管制では上記の新経路が前提になる。', ops: '会社ルートに影響なし。ZSPD から内陸へ出発する場合のみ、新経路で FPL を提出する。', rows: [
    { no: "区分1", valid: "ZSSS/ZSPD/ZSNB/ZSZS → FUYANG VOR（FYG）以遠", text: "旧：PIKAS–G330–UNTAN–G345–OLRIS–R343–LUOGANG VOR（HFE）–B208<br>新：<b>PIKAS–G330–PIMOL–V14–NOBEM–W73–VEMEX–W163–HFE–B208–FYG</b>" },
    { no: "区分2", valid: "ZSSS/ZSPD → XISHUI VOR（XSH）以遠", text: "旧：PIKAS–G330–UNTAN–G345–OLRIS–R343–MADUK–W51–LEGIV–W164–ADGOL–W50<br>新：<b>PIKAS–G330–PIMOL–V14–NOBEM–W73–MADUK–W51–LEGIV–W164–ADGOL–W50–XSH</b>" },
    { no: "区分3", valid: "ZSNT/ZSCG/ZSYA（BENNIU NDB 'ZJ' 経由）→ VILID 以遠", text: "旧：ZJ–G345–OLRIS–R343–MADUK–W51–LEGIV–W164–VILID<br>新：<b>ZJ–G345–PIMUS–V11–DOGVI–W545–VEMEX–W73–MADUK–W51–LEGIV–W164–VILID</b>" },
    { no: "区分4", valid: "ZSNT/ZSCG/ZSYA（ZJ 経由）→ HFE 以遠", text: "旧：ZJ–G345–OLRIS–R343–HFE<br>新：<b>ZJ–G345–PIMUS–V11–DOGVI–W545–VEMEX–W163–HFE</b>" },
    { no: "区分5", valid: "ZSWX（出発）SASAN 経由 → HFE 以遠", text: "<b>SASAN–W161–WUXI VOR（VMB）–V11–DOGVI–W545–VEMEX–W163–HFE</b>" },
    { no: "区分6", valid: "ZSWX（出発）SASAN 経由 → VILID 以遠", text: "<b>SASAN–W161–VMB–V11–DOGVI–W545–VEMEX–W73–MADUK–W51–LEGIV–W164–VILID</b>" },
    { no: "区分7", valid: "ZSHC → ALDAP 以遠", text: "<b>ZSHC–ANDONG VOR（AND）–B221–GOVNI–V140–IDNIK–V141–ALDAP</b>" },
    { no: "区分8", valid: "ZSNB → ALDAP 以遠", text: "<b>ZSNB–GOVNI–V140–IDNIK–V141–ALDAP</b>" },
    { no: "区分9", valid: "ZSWZ（出発）→ JIUTING VOR（JTN）以遠（ZSSS・ZSNT 着陸を除く）", text: "<b>SHENGZHOU VOR（SHZ）–B221–GOVNI–V140–JTN</b>（旧：SHZ–B221–AND–G204）" }
  ],
  refs: [] },

{ no: 'ZSHA 航法援助施設の使用不可', sec: 'ZSHA', pri: 'low', cat: ['灯火・NAVAID', '中国空域'],
  title: 'VOR/DME・NDB の使用不可（ZSHA 管内）',
  issued: '11-MAY 〜 13-OCT-2026', valid: '各 NOTAM 参照',
  orig: 'A5144/26: PANLONG VOR/DME \'PLT\' FREQ 111.6MHZ/CH53X U/S DUE TO MAINT. ／ A4021/26: QINGDAO VOR/DME \'TAO\' 117.5MHZ/CH122X U/S DUE TO MAINT. EXPLANATION: NOTE: NOT AFFECT FOR CO-RTE ／ A2574/26: CHIZHOU VOR \'JHS\' 117.5MHZ LIMITATION CHANGED AS FLW: U/S BTN RADIAL 172DEG-182DEG CLOCKWISE, BTN RADIAL 300DEG-330DEG CLOCKWISE. ／ A1519/26: NANFENG NDB \'NF\' 292KHZ U/S DUE TO MAINT.',
  ja: '管内の航法援助施設の使用不可。RNAV 経路が中心の運航には、影響は限定的（TAO は「会社ルートに影響なし」と注記）。',
  perf: '', nav: '従来型航空路・NDB 進入を使う場合に影響。DME/DME 航法の臨界局として使う局があれば、影響。［要確認］', ops: '',
  rows: [
    { no: 'A5144/26', valid: '15-OCT 0100–1000Z', text: '<b>PANLONG VOR/DME「PLT」111.6MHz／CH53X</b> 使用不可（保守）' },
    { no: 'A4021/26', valid: '28-AUG-2026 〜 28-FEB-2027（予定）', text: '<b>QINGDAO VOR/DME「TAO」117.5MHz／CH122X</b> 使用不可（保守）。<b>会社ルートに影響なし</b>' },
    { no: 'A2574/26', valid: '04-JUL-2026 〜 03-JAN-2027（予定）', text: '<b>CHIZHOU VOR「JHS」117.5MHz</b>：ラジアル 172°〜182°（時計回り）、300°〜330°（時計回り）が使用不可に変更' },
    { no: 'A1519/26', valid: '11-MAY 〜 14-NOV-2026', text: '<b>NANFENG NDB「NF」292kHz</b> 使用不可（保守）' }
  ], refs: [] },

/* ───────────── RKRR（仁川 FIR） ───────────── */
{ no: 'Z0718/26', sec: 'RKRR', pri: 'high', cat: ['GPS・航法', '注意喚起'],
  title: '仁川 FIR：GPS 信号が不安定・断続的に失われる報告 → GPS 使用に最大限の注意',
  issued: '29-SEP-2026', valid: '29-SEP-2026 07:19Z 〜 31-DEC-2026 15:00Z（予定）',
  orig: 'CAUTIONARY INFORMATION FOR AIRCRAFT OPERATING IN INCHEON FIR:\nPILOTS HAVE REPORTED THAT GPS SIGNALS ARE UNRELIABLE OR LOST INTERMITTENTLY IN INCHEON FIR.\nEXERCISE EXTREME CAUTION WHEN USING GPS.',
  ja: '仁川 FIR を飛ぶ航空機への<b>注意情報</b>。<b>GPS 信号が信頼できない、または断続的に失われる</b>との操縦士報告がある。<b>GPS を使うときは最大限の注意</b>を払うこと。',
  perf: '', nav: '<b>GPS 干渉（ジャミング・スプーフィング）の可能性</b>。RNAV/RNP 運航、FMS の位置精度、<b>GPS 異常時の NNC</b> に関わる。',
  ops: '韓国上空（仁川 FIR）では、FMS 位置と IRS・VOR/DME の整合を常に確認。GPS 異常を疑ったら、GPS Data Unreliable の NNC を実施。',
  refs: [{ label: 'QRH：GPS Data Unreliable（NNC／Quick Reference 5）', go: 'qrh' }, { label: 'MEL：GPS', go: 'mel' }, { label: '会社 NOTAM：GPS 衛星状況（NCA 00007/19）', jump: 'NCA 00007/19' }] },

{ no: 'Z0624/26', sec: 'RKRR', pri: 'mid', cat: ['灯火・NAVAID', '航法'],
  title: 'VORTAC「SOT」116.9：置換のため使用不可 → DME/DME 航法に制限',
  issued: '25-AUG-2026', valid: '31-AUG-2026 16:00Z 〜 20-OCT-2026 16:00Z',
  orig: 'VORTAC SOT 116.900MHZ/CH116X U/S DUE TO REPLACEMENT\n1. USE 3705N12701E INSTEAD OF SOT\n2. CAN NOT USE DME/DME NAVIGATION ON AIRWAY USING SOT AS CRITICAL DME\n3. NON-RNAV ACFT REQUEST RADAR VECTOR TO DAEGU/INCHEON ACC BEFORE FLYING ON THE AIRWAYS WITHIN THE SOT COVERAGE',
  ja: '<b>VORTAC「SOT」（116.9MHz／CH116X）は、置換工事のため使用不可</b>。<br>1. <b>SOT の代わりに 37°05\'N 127°01\'E を使う</b>。<br>2. <b>SOT を臨界 DME とする航空路では、DME/DME 航法を使えない</b>。<br>3. <b>RNAV でない機は、SOT の覆域内の航空路を飛ぶ前に、大邱／仁川 ACC にレーダー誘導を要求</b>する。',
  perf: '', nav: '<b>DME/DME の更新に頼る FMS 位置更新（GPS が使えない場合）が制限される</b>。GPS が使える通常時は影響が小さい。',
  ops: '仁川 FIR で GPS 異常（Z0718/26）と重なると、位置の確認手段が減る。経路・位置を念入りに監視。', refs: [{ label: 'GPS 異常の注意（Z0718/26）', jump: 'Z0718/26' }] },

{ no: '仁川FIR 臨時制限空域（8件）', sec: 'RKRR', pri: 'low', cat: ['空域・軍事', '韓国FIR'],
  title: '臨時制限空域（TEMPO RESTRICTED AREA）：韓国・黄海側ほか',
  issued: '31-AUG 〜 14-OCT-2026', valid: '各 NOTAM 参照',
  orig: '各 NOTAM: "TEMPO RESTRICTED AREA ACT AS FLW  AREA BOUNDED BY … F) … G) …"  EXPLANATION: NOTE: NOT AFFECT CO-RTE',
  ja: '時間帯を限った<b>臨時制限空域</b>。いずれも、<b>会社ルートに影響なし</b>の注記（運航管理による）。',
  perf: '', nav: '', ops: '該当空域を通る経路のときのみ確認。ATC は通常、迂回を指示する。',
  rows: [
    { no: 'E4852/26', valid: '14-OCT 0800 〜 17-OCT 2030Z（14日 0800–0930、15日 2240–2320、16日 1200–1330、17日 1950–2030）', text: '韓国南西部（35°N 付近、127〜128°E）。7,000ft AMSL〜FL430。会社ルートに影響なし' },
    { no: 'E4851/26', valid: '同上', text: '韓国南部（34〜35°N、127〜128°E）。7,000ft AMSL〜FL430。会社ルートに影響なし' },
    { no: 'E4768/26', valid: '14-OCT 0500Z 〜 15-OCT 0600Z（0500–0600）', text: '黄海（37°N、125°E 付近）。SFC〜FL400' },
    { no: 'E4795/26', valid: '12-OCT 0500Z 〜 16-OCT 0230Z（0500–0800、2330–0230）', text: '34°36\'N 127°12\'E 付近の線の両側 0.5NM。SFC〜UNL' },
    { no: 'E4794/26', valid: '同上', text: '34°36\'N 127°12\'E を中心とする半径 1NM。SFC〜UNL。会社ルートに影響なし' },
    { no: 'E4046/26', valid: '12-OCT 0100Z 〜 16-OCT 0900Z（0100–0900）', text: '韓国中西部（36°N、126°E 付近）。GND〜FL300。会社ルートに影響なし' },
    { no: 'E4660/26', valid: '30-SEP 〜 18-OCT 1139Z（毎日 0844–1139、1849–2135）', text: '36°48\'N 129°05\'E を中心とする半径 5.5NM。SFC〜FL300。会社ルートに影響なし' },
    { no: 'E4661/26', valid: '同上', text: '同じ中心の半径 10NM。FL300〜FL600。会社ルートに影響なし' }
  ], refs: [] }

];

/* ───────── RJAA チャート上の NOTAM 位置（画像 1472×1998 px の座標）─────────
   出典：EFB の RJAA Airport Chart（North Up）。位置はチャートのラベルから読み取った概略で、縮尺は目安。
   type: closed（閉鎖）/ light（灯火不作動）/ groove（グルービング消失）/ info（その他）
   jump: NOTAM カードの no（notam.html のカードへ移動） */
var NOTAM_MAP = {
  name: 'RJAA', img: 'notam_img/rjaa_chart.webp', w: 1472, h: 1998,
  items: [
    { n: 1, type: 'closed', label: 'RWY 16R/34L 閉鎖（保守）1510–2030Z', ids: 'A1443/26', cards: ['RJAA 滑走路閉鎖（保守）'], shape: { k: 'line', pts: [[165, 645], [880, 1878]], w: 22 }, tag: [420, 1010] },
    { n: 2, type: 'closed', label: 'RWY 16L/34R 閉鎖（保守）1410–2030Z', ids: 'A1442/26', cards: ['RJAA 滑走路閉鎖（保守）'], shape: { k: 'line', pts: [[805, 25], [935, 250]], w: 22 }, tag: [880, 110] },
    { n: 3, type: 'groove', label: '16R THR 付近：Non-Grooved Runway（THR から 229〜296m）', ids: 'A1275・A1205・A1179', cards: ['RJAA グルービング一部消失（6件）', 'NCA 00202/26'], shape: { k: 'ellipse', c: [212, 726], rx: 26, ry: 40, rot: -30 }, tag: [300, 700] },
    { n: 4, type: 'groove', label: '34L THR 付近：Non-Grooved Runway（THR から 14〜49m）', ids: 'A1306・A1388', cards: ['RJAA グルービング一部消失（6件）', 'NCA 00202/26'], shape: { k: 'ellipse', c: [872, 1862], rx: 24, ry: 36, rot: -30 }, tag: [800, 1830] },
    { n: 5, type: 'groove', label: '34L 滑走路中間：Non-Grooved Runway（THR から約 1,665〜1,681m）', ids: 'A1483/26（新規）', cards: ['RJAA グルービング一部消失（6件）', 'NCA 00202/26'], shape: { k: 'ellipse', c: [581, 1363], rx: 24, ry: 36, rot: -30 }, tag: [500, 1400] },
    { n: 6, type: 'info', label: 'RWY 16L PALS 一部不作動（図外・北西側）→ 着陸最低気象 RVR 変更／SFL 不作動', ids: 'A1472/26・A1473/26', cards: ['A1472/26', 'A1473/26'], shape: { k: 'pin', c: [762, 40] }, tag: [610, 60] },
    { n: 7, type: 'closed', label: 'TWY N1（SPOT 603〜610D）・D3（SPOT 600P〜N1）閉鎖（演習）14-OCT 2300Z〜15-OCT 0830Z', ids: 'A1509/26', cards: ['RJAA 誘導路の閉鎖・灯火不作動'], shape: { k: 'ellipse', c: [1022, 1450], rx: 95, ry: 80, rot: 0 }, tag: [1080, 1360] },
    { n: 8, type: 'closed', label: 'TWY B・B1〜B9・F・F1〜F5・K（B〜B6）・C（B〜E1）・L（B9〜U5）閉鎖（保守）毎日 1410–2030Z', ids: 'A1445/26', cards: ['RJAA 誘導路の閉鎖・灯火不作動'], shape: { k: 'poly', pts: [[770, 40], [1000, 40], [1250, 330], [1250, 490], [1050, 510], [800, 330]] }, tag: [1130, 140] },
    { n: 9, type: 'closed', label: 'TWY A2 閉鎖（工事）', ids: 'A1346/26', cards: ['RJAA 誘導路の閉鎖・灯火不作動'], shape: { k: 'ellipse', c: [238, 718], rx: 30, ry: 24, rot: 0 }, tag: [150, 790] },
    { n: 10, type: 'light', label: 'TWY A・A2 センターライン灯 使用不可', ids: 'A1474/26', cards: ['RJAA 誘導路の閉鎖・灯火不作動'], shape: { k: 'polyline', pts: [[205, 652], [238, 720], [365, 845], [430, 953], [487, 1052], [513, 1094], [527, 1258], [603, 1290], [640, 1355], [722, 1453], [803, 1590], [860, 1688], [915, 1785]] }, tag: [330, 960] },
    { n: 11, type: 'light', label: 'TWY Q6・Q7（SPOT 11〜16）センターライン灯 使用不可', ids: 'A1349/26', cards: ['RJAA 誘導路の閉鎖・灯火不作動'], shape: { k: 'ellipse', c: [630, 908], rx: 95, ry: 50, rot: -15 }, tag: [700, 840] },
    { n: 12, type: 'light', label: 'TWY N2・D1・M（D2〜H1）センターライン灯 使用不可', ids: 'A1430/26・A1390/26', cards: ['RJAA 誘導路の閉鎖・灯火不作動'], shape: { k: 'ellipse', c: [915, 1630], rx: 110, ry: 150, rot: 0 }, tag: [1040, 1620] },
    { n: 13, type: 'info', label: 'TWY B1〜B9 ストップバー灯 使用不可（図は B6〜B9 付近のみ）', ids: 'A1475/26', cards: ['RJAA 誘導路の閉鎖・灯火不作動'], shape: { k: 'pin', c: [890, 175] }, tag: [940, 300] }
  ]
};
var NOTAM_CHARTS = [];  /* 下で NOTAM_MAP（RJAA）と ZSPD を登録 */
var NMAP_COL = { closed: '#ef4444', light: '#f59e0b', groove: '#fb923c', info: '#38bdf8' };


/* ZSPD（EFB チャートを西側・東側の2枚に分けて保存。座標は各画像の px） */
var ZSPD_W = { name: 'ZSPD（西側）', img: 'notam_img/zspd_w.jpg', w: 1496, h: 1998, items: [
  { n: 1, type: 'closed', label: 'TWY Q5（L15〜C 間）と TWY L15（スポット 313〜315 間）閉鎖。ジェットブラスト注意', ids: 'F4303/26', cards: ['F4303/26'], shape: { k: 'ellipse', c: [315, 860], rx: 75, ry: 95, rot: 0 }, tag: [215, 760] }
] };
var ZSPD_E = { name: 'ZSPD（東側）', img: 'notam_img/zspd_e.jpg', w: 1493, h: 1998, items: [
  { n: 2, type: 'closed', label: 'TWY R6 閉鎖（TWY F と RWY 16R/34L の間）', ids: 'F3772/26', cards: ['F3772/26'], shape: { k: 'ellipse', c: [455, 290], rx: 55, ry: 38, rot: -20 }, tag: [350, 220] },
  { n: 3, type: 'info', label: 'TWY T5（S1〜S2 間）は翼幅 36m 未満の機のみ使用可（B747-8F は不可）', ids: 'F3286/26', cards: ['F3286/26'], shape: { k: 'ellipse', c: [1300, 1185], rx: 105, ry: 42, rot: -8 }, tag: [1300, 1100] }
] };
NOTAM_MAP.items.forEach(function (it) { it.chart = NOTAM_MAP; });
NOTAM_CHARTS = [NOTAM_MAP, ZSPD_W, ZSPD_E];
NOTAM_CHARTS.forEach(function (c) { c.items.forEach(function (it) { it.chart = c; }); });


/* ZSSS（EFB チャート 1 枚。座標は画像 px） */
var ZSSS_C = { name: 'ZSSS', img: 'notam_img/zsss.jpg', w: 1410, h: 1998, items: [
  { n: 1, type: 'closed', label: '東側：TWY A2・A3・A4、K 系（K2・K4〜K7）、TWY A（A2〜H4 間／H4〜H7 間）閉鎖　毎日 1700–2200Z', ids: 'F4290/26（1）（2）（4）', cards: ['F4290/26'], shapes: [{ k: 'poly', pts: [[850, 750], [1000, 750], [1010, 1680], [900, 1690], [880, 1450], [900, 1000]] }], tag: [1080, 1200] },
  { n: 2, type: 'closed', label: '中央：TWY B1〜B8、TWY B（H1〜H4 間／H4〜H7 間）閉鎖　毎日 1700–2200Z', ids: 'F4290/26（1）（2）（5）', cards: ['F4290/26'], shapes: [{ k: 'polyline', pts: [[770, 444], [780, 613], [788, 765], [737, 847], [750, 1130], [808, 1220], [813, 1366], [822, 1533], [730, 1660]], w: 14 }], tag: [690, 1000] },
  { n: 3, type: 'closed', label: '西側：TWY H2・H3・H5・H6（RWY 18R/36L〜B 間）閉鎖　毎日 1700–2200Z', ids: 'F4290/26（3）', cards: ['F4290/26'], shapes: [{ k: 'ellipse', c: [548, 372], rx: 55, ry: 28, rot: 0 }, { k: 'ellipse', c: [550, 668], rx: 60, ry: 32, rot: 0 }, { k: 'ellipse', c: [585, 1335], rx: 60, ry: 32, rot: 0 }, { k: 'ellipse', c: [607, 1615], rx: 60, ry: 32, rot: 0 }], tag: [470, 520] },
  { n: 4, type: 'closed', label: 'TWY H1（RWY 18L/36R〜18R/36L 間）閉鎖　毎日 1700–2200Z', ids: 'F4290/26（6）', cards: ['F4290/26'], shapes: [{ k: 'polyline', pts: [[560, 271], [790, 265]], w: 14 }], tag: [690, 215] },
  { n: 5, type: 'info', label: '推奨の高速離脱路（RWY 18L：B4 1,850m／A3 1,890m、RWY 36R：B3 1,950m／A2 1,715m。DTHR からの距離）', ids: 'F4301/26', cards: ['F4301/26'], shapes: [{ k: 'pin', c: [808, 1220], r: 30 }, { k: 'pin', c: [940, 1315], r: 30 }, { k: 'pin', c: [788, 765], r: 30 }, { k: 'pin', c: [873, 775], r: 30 }], tag: [1100, 900] },
  { n: 6, type: 'closed', label: 'TWY A 上の交差点 K1 工事（第1期。工事区域 A・B）', ids: 'F3922/26', cards: ['F3922/26'], shapes: [{ k: 'ellipse', c: [935, 692], rx: 55, ry: 42, rot: 0 }], tag: [1080, 640] }
] };
ZSSS_C.items.forEach(function (it) { it.chart = ZSSS_C; });
NOTAM_CHARTS.push(ZSSS_C);

function nmapSvg(items, hiN) {
  var svg = '';
  items.forEach(function (it) {
    var c = NMAP_COL[it.type], g = '';
    var dim = (hiN != null && it.n !== hiN) ? ' opacity=".35"' : '';
    var st = 'fill="' + c + '" fill-opacity=".30" stroke="' + c + '" stroke-width="5"' + (it.type === 'light' ? ' stroke-dasharray="14,8"' : '');
    (it.shapes || [it.shape]).forEach(function (sh) {
      if (sh.k === 'line') g += '<line x1="' + sh.pts[0][0] + '" y1="' + sh.pts[0][1] + '" x2="' + sh.pts[1][0] + '" y2="' + sh.pts[1][1] + '" stroke="' + c + '" stroke-opacity=".55" stroke-width="' + sh.w + '" stroke-linecap="round" stroke-dasharray="26,14"/>';
      else if (sh.k === 'ellipse') g += '<ellipse cx="' + sh.c[0] + '" cy="' + sh.c[1] + '" rx="' + sh.rx + '" ry="' + sh.ry + '" transform="rotate(' + sh.rot + ' ' + sh.c[0] + ' ' + sh.c[1] + ')" ' + st + '/>';
      else if (sh.k === 'poly') g += '<polygon points="' + sh.pts.map(function (p) { return p.join(','); }).join(' ') + '" ' + st + ' stroke-dasharray="14,8"/>';
      else if (sh.k === 'polyline') g += '<polyline points="' + sh.pts.map(function (p) { return p.join(','); }).join(' ') + '" fill="none" stroke="' + c + '" stroke-width="' + (sh.w || 9) + '" stroke-opacity=".7" stroke-dasharray="14,10" stroke-linecap="round" stroke-linejoin="round"/>';
      else if (sh.k === 'pin') g += '<circle cx="' + sh.c[0] + '" cy="' + sh.c[1] + '" r="' + (sh.r || 22) + '" ' + st + '/>';
    });
    var tg = '<circle cx="' + it.tag[0] + '" cy="' + it.tag[1] + '" r="26" fill="' + c + '" stroke="#fff" stroke-width="4"/><text x="' + it.tag[0] + '" y="' + (it.tag[1] + 11) + '" text-anchor="middle" font-size="32" font-weight="700" fill="#111" font-family="sans-serif">' + it.n + '</text>';
    svg += '<g' + dim + '><title>' + it.n + ' ' + ntEsc(it.label) + '（' + ntEsc(it.ids) + '）</title>' + g + tg + '</g>';
  });
  return svg;
}
function nmapItemsFor(no) { return NOTAM_CHARTS.map(function (c) { return { chart: c, items: c.items.filter(function (it) { return it.cards.indexOf(no) >= 0; }) }; }).filter(function (g) { return g.items.length; }); }
function nmapHtml(items, M) {
  var leg = items.map(function (it) {
    return '<li><span class="nm-n" style="background:' + NMAP_COL[it.type] + '">' + it.n + '</span><span><b>' + ntEsc(it.ids) + '</b>　' + ntEsc(it.label) + '</span></li>';
  }).join('');
  return '<div class="nm-wrap"><div class="nm-chart"><img src="' + M.img + '" alt="' + M.name + ' Airport Chart" loading="lazy"><svg viewBox="0 0 ' + M.w + ' ' + M.h + '" preserveAspectRatio="none">' + nmapSvg(items) + '</svg></div>' +
    '<div class="nm-side"><ol class="nm-leg">' + leg + '</ol>' +
    '<div class="nm-note">位置は EFB の Airport Chart（North Up）のラベルから読み取った<b>概略</b>。範囲・縮尺は目安です（Non-Grooved 区間は実際は幅数 m のため強調表示）。</div></div></div>';
}
function nmapRender() {
  var host = document.getElementById('nt-map'); if (!host) return;
  host.innerHTML = '<div class="nm-key"><span style="color:#ef4444">■ 閉鎖</span><span style="color:#f59e0b">■ 灯火不作動</span><span style="color:#fb923c">■ Non-Grooved Runway</span><span style="color:#38bdf8">■ その他</span></div>' +
    NOTAM_CHARTS.map(function (c) { return '<div class="nt-h">' + ntEsc(c.name) + '</div>' + nmapHtml(c.items, c); }).join('') +
    '<div class="nm-note">図に出せないもの：RJAA A1193/26（滑走路誤進入警報の停止）、ZSPD・ZSSS の STAR・VOR・LID・ビジュアルアプローチ関連。各 NOTAM のカードを開くと、その NOTAM の位置だけを表示します。</div>';
}

/* ═════════ 往復（NRT-PVG-NRT）対応：KZ226（ZSPD→RJAA、15/16-OCT 往復の復路）の追加 ═════════
   legs: ['KZ225'] 往路のみ／['KZ226'] 復路のみ／両方
   KZ226：Oct 16 ETD 07:20Z（ZSPD）― ETA 10:12Z（RJAA）、代替 RJTT・ZSSS（EFB 画面 2026-10-16 18:37 取得） */
var NOTAM_FLIGHTS = {
  KZ225: { label: 'KZ225 往路', route: 'RJAA→ZSPD', time: 'Oct 15 ETD 01:30Z（NRT）― ETA 04:46Z（PVG）', altn: 'ZSSS' },
  KZ226: { label: 'KZ226 復路', route: 'ZSPD→RJAA', time: 'Oct 16 ETD 07:20Z（PVG）― ETA 10:12Z（NRT）', altn: 'RJTT・ZSSS' }
};
/* 復路の画面（KZ226）に見当たらなかった ID ＝ 往路のみ（期間切れ・15 日限定・後継 NOTAM に置換） */
var KZ225_ONLY_IDS = ['A1509/26', '00210/23', 'F4303/26', 'F4290/26', 'F4251/26', 'Z1819/26', 'Z1820/26', 'Z1821/26', 'Z1822/26', 'Y1154/26',
  'Q2448/26', 'Q2449/26', 'Q2443/26', 'Q2450/26', 'Q2452/26', 'P5072/26', 'P5067/26', 'P4984/26', 'P4983/26', 'P5052/26', 'P5051/26',
  'P5048/26', 'P5039/26', 'E4768/26', 'E4795/26', 'E4794/26', 'A5144/26', 'Z0624/26'];
(function () {
  var idre = /[A-Z]?\d{3,5}\/\d{2}/g;
  function legsFor(text) {
    var ids = String(text).match(idre) || [];
    if (!ids.length) return ['KZ225', 'KZ226'];
    var only = ids.filter(function (i) { return KZ225_ONLY_IDS.indexOf(i) >= 0; }).length;
    if (only === ids.length) return ['KZ225'];
    return ['KZ225', 'KZ226'];
  }
  NOTAMS.forEach(function (n) {
    if (!n.legs) n.legs = legsFor(n.no);
    (n.rows || []).forEach(function (r) { if (!r.legs) r.legs = legsFor(r.no); });
  });
})();
function ntAddRows(no, rows) { NOTAMS.forEach(function (n) { if (n.no === no) { n.rows = (n.rows || []).concat(rows); } }); }

/* ── 既存カードへ復路分の行を追加 ── */
ntAddRows('Q2448/26・Q2449/26・Q2443/26', [
  { no: 'Q2456/26', legs: ['KZ226'], valid: '15-OCT 2100Z 〜 16-OCT 2100Z', text: '<b>復路用（16 日）</b>Z16・Z101・Z102（16 日 1300–2100Z）、Z17・Z18・Z162（15 日 2100–2200Z と 16 日 1300–2100Z）、Z21・Z171・Z182（15 日 2100–2200Z と 16 日 1200–2100Z）。すべて MEA' },
  { no: 'Q2469/26', legs: ['KZ226'], valid: '16-OCT 0832Z 〜 16-OCT 2200Z', text: '<b>復路用</b>L512・Z13・Z14（1200–2200Z）、Z25・Z26・Z27・Z262（1330–2200Z）、<b>Z40・Z41（0845–2200Z）</b>。すべて MEA' },
  { no: 'Q2453/26', legs: ['KZ226'], valid: '15-OCT 2100Z 〜 16-OCT 2100Z', text: '<b>復路用</b>Z29・Z31・Z32・Z34（16 日 1500–2100Z）。すべて MEA' }
]);
ntAddRows('Q2450/26・Q2452/26', [
  { no: 'Q2461/26', legs: ['KZ226'], valid: '16-OCT 0700Z 〜 2100Z', text: '<b>16 日分（日本⇔北米）</b>Track 1：KALNA→…→ROUKE（KSEA/KPDX は DOLFF TOU、CYVR は 47N150W 48N140W PRETY GOVAD）。Track 2：EMRON→TRYSH（KSFO＝AMAKR BGGLO、KLAX＝ENI OAK BURGL IRNMN）。Track 3：LEPKI→DACEM（KLAX＝PAINT PIRAT BURGL IRNMN、KSFO＝PAINT PIRAT OSI）。ATM センター TEL 81-92-608-8870。<b>東行き（日本発）のため、復路（PVG→NRT）には直接関係なし</b>' }
]);
ntAddRows('P5048/26・P5039/26・P4921/26', [
  { no: 'P5063/26', legs: ['KZ226'], valid: '15-OCT 2200Z 〜 16-OCT 1330Z', text: '<b>岩国 ITRA（臨時の留保空域）</b>ITRA-E（SFC〜FL250）、N1（〜FL180）、N2（〜FL600）、N3（〜FL240）、S10〜S16（〜FL600）、S20〜S25（〜FL450）、S30〜S33（〜FL250）。<b>復路の飛行時間帯（〜1330Z）に重なる</b>。AIP SUP 023/26。経路が交差する場合は ATC の迂回指示。［要確認：会社ルートとの交差の有無］' }
]);
ntAddRows('仁川FIR 臨時制限空域（8件）', [
  { no: 'E4835/26', legs: ['KZ226'], valid: '16-OCT 0600Z 〜 0900Z', text: '<b>黄海の韓国西方（約 34°24\'N〜36°39\'N、124°〜126°E）</b>SFC〜UNL。<b>復路の飛行時間帯（0600–0900Z）に重なる</b>が、<b>会社ルートに影響なし</b>（注記）' },
  { no: 'E4853/26', legs: ['KZ226'], valid: '15-OCT 2320Z 〜 17-OCT 2100Z（15 日 2320–2350、17 日 2030–2100）', text: '韓国南部（34°〜35°N、127°〜128°E）FL200〜FL430。<b>16 日は有効でない</b>。会社ルートに影響なし' },
  { no: 'E4854/26', legs: ['KZ226'], valid: '15-OCT 2320Z 〜 17-OCT 2100Z（15 日 2320–2350、17 日 2030–2100）', text: '韓国南部（35°〜36°N、127°〜128°E）FL200〜FL430。<b>16 日は有効でない</b>。会社ルートに影響なし' }
]);

/* ── Z0624/26 は Z0764/26 に置換（同内容・期限延長）── */
NOTAMS.forEach(function (n) {
  if (n.no === 'Z0624/26') {
    n.no = 'Z0624/26・Z0764/26'; n.legs = ['KZ225', 'KZ226'];
    n.valid = 'Z0624/26：31-AUG 〜 20-OCT-2026／Z0764/26（後継）：15-OCT 0725Z 〜 30-DEC-2026';
    n.title = 'VORTAC「SOT」116.9：置換のため使用不可（Z0624/26 → Z0764/26 に置換）→ DME/DME 航法に制限';
  }
});

/* ── KZ226（復路）で新規に登場した NOTAM ── */
NOTAMS.push(
{ no: 'F4317/26', sec: 'ZSPD', pri: 'mid', cat: ['滑走路・誘導路'], legs: ['KZ226'],
  title: 'TWY Q4・L15 の一部閉鎖（スポット 322／325 付近）— 復路の出発時間帯に有効',
  issued: '14-OCT-2026（改訂 15-OCT-2026 03:08）', valid: '16-OCT-2026 02:00Z 〜 09:00Z',
  orig: '"FLW TWY CLSD:\n1.TWY Q4 BTN TWY L15 AND TWY C, INTERSECTION CLSD BTN TWY L15 AND TWY Q4.\n2.TWY L15 BTN PARKING STAND NR.322 AND NR.325. INTERSECTION CLSD BTN PARKING STAND NR.322 AND TWY L15, BTN PARKING STAND NR.325 AND TWY L15."\nEXPLANATION: NOTE:PLEASE BE AWARE OF JET BLAST WHILE CONSTRUCTION EQUIPMENT AND WORKERS ARE ACTIVE IN THE AREA.\nIF YOU FEEL INSUFFICIENT MARGIN FROM THIS AREA, REQ GND TO PULL FORWARD.',
  ja: '<b>TWY Q4（L15〜C 間）と TWY L15（スポット 322〜325 間）、およびそれらの交差点が閉鎖</b>。往路の F4303/26（Q5・L15、スポット 313〜315）と<b>同種の工事で、場所が隣の区画に移った</b>もの。<b>工事機材・作業員がいるため、ジェットブラストに注意</b>。余裕が足りないと感じたら、<b>地上管制にプルフォワードを要求</b>する。',
  perf: '', nav: '', ops: '<b>復路の出発（ETD 0720Z）は有効時間帯（0200〜0900Z）の中</b>。スポット 322〜325 付近から出る／近くを通る場合は閉鎖範囲と余裕に注意。', refs: [{ label: '往路の同種 NOTAM（F4303/26）', jump: 'F4303/26' }] },

{ no: 'F4252/26', sec: 'ZSSS', pri: 'low', cat: ['灯火・NAVAID'], legs: ['KZ226'],
  title: 'JIUTING VOR/DME「JTN」109.6：試験中・使用しない（16-OCT 0100–1200Z）',
  issued: '10-OCT-2026', valid: '16-OCT-2026 01:00Z 〜 12:00Z',
  orig: "JIUTING VOR/DME 'JTN' 109.6MHZ/CH33X ON TEST DO NOT USE DUE TO MAINT.",
  ja: '<b>JIUTING VOR/DME「JTN」（109.6MHz／CH33X）は、保守のため試験中で、使用しない</b>。',
  perf: '', nav: '<b>JTN を DME/DME の更新局として使う場合は除外</b>。上海周辺の RNAV（出発・到着）で、JTN が Critical DME になる経路では、RNAV 1（DME/DME/IRU）への Revert の余裕が減る。［要確認：ZSPD の SID/STAR での JTN の使用］', ops: '<b>復路の出発（ETD 0720Z）は有効時間帯の中</b>。', refs: [{ label: '上海周辺の経路変更（A3194/26：JTN 以遠の経路を含む）', jump: 'A3194/26' }, { label: 'RTE タブ：RNAV 1 への Revert・Critical DME', main: 'RTE' }] },

{ no: 'A5239/26', sec: 'ZSHA', pri: 'low', cat: ['中国空域', 'ATC・手順'], legs: ['KZ226'],
  title: 'ATS ルート A599（PANLONG〜SHANGRAO）一時閉鎖 → V171 に迂回（16-OCT）',
  issued: '15-OCT-2026', valid: '16-OCT-2026 01:10Z 〜 07:10Z（0110–0340、0440–0710）',
  orig: '0110-0340 0440-0710\n"1.FLW SEGMENT OF ATS RTE TEMPORARY CLSD:\nA599: PANLONG VOR\'PLT\'- SHANGRAO VOR\'SHR\'.\n2.FLIGHT ROUTES TEMPORARY ADJUSTED AS FLW, DIVERSION FLW ATC INSTRUCTION, FPL FOR RELATED SCHEDULE FLIGHT ACCORDING TO ORIGINAL PLAN:\nA599: PANLONG VOR\'PLT\'- SHANGRAO VOR\'SHR\' ADJUST TO PANLONG VOR\'PLT\'-V171- SHANGRAO VOR \'SHR\',AND VICE VERSA."\nEXPLANATION: NOTE:NOT AFFECT CO-RTE',
  ja: '<b>ATS ルート A599 の PANLONG VOR（PLT）〜SHANGRAO VOR（SHR）区間が一時閉鎖</b>。<b>PLT–V171–SHR に迂回</b>し、迂回は ATC の指示に従う。<b>飛行計画（FPL）は元の経路のまま</b>でよい。<b>会社ルートに影響なし</b>（注記）。',
  perf: '', nav: '', ops: '復路の ETD 0720Z は、有効時間（〜0710Z）の<b>直後</b>。会社ルートに影響なし。', refs: [] }
);

/* ── RJTT（復路の代替）。NOTAM は RJAA（成田の NOTAM 事務所）発行、AIP RJTT AD2.23・A/M RJTT 10-8B（11SEP26）参照 ── */
NOTAMS.push(
{ no: 'NCA 00017/21', sec: 'RJTT', pri: 'high', cat: ['Company', '代替空港'], legs: ['KZ226'],
  title: 'RJTT を代替に使う場合：0600–1000UTC は RWY 16L/R 運用が予想されるとき第1代替にしない',
  issued: '27-JAN-2021 07:03（改訂 11-OCT-2022 05:49）', valid: '27-JAN-2021 15:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nUSE AS ALTN APT.\nDO NOT SELECT AS 1st ALTN APO BTN 0600-1000UTC WHEN RJTT RWY16L/R OPS IS EXPECTED.\nNOTE:UNDER INVESTIGATION FOR UTILIZATION OF RJTT RWY16L/R RNP APCH.',
  ja: '<b>RJTT は代替飛行場として使用してよい</b>。ただし<b>0600〜1000UTC の間に、RJTT で RWY 16L/R の運用が予想される場合は、第1代替には選ばない</b>。注：RJTT RWY 16L/R の <b>RNP APCH の利用を検討中</b>。',
  perf: '', nav: '<b>RWY 16L/R 運用時は、RNP APCH が使えない前提</b>（利用を検討中の段階）。ILS が使えない時間帯・滑走路の組合せがあると、代替としての成立が難しくなる（下の ILS 使用不可の NOTAM）。', ops: '<b>復路（KZ226）：RJAA の ETA 10:12Z</b>。代替として RJTT に向かう到着は 1000Z より後になるため、<b>この時間帯の制限（0600–1000Z）の外側だが、境界に近い</b>。［要確認：制限の判定は代替の選定時刻か、代替への到着予定時刻か。運航管理者に確認］',
  refs: [{ label: 'RJTT 滑走路閉鎖・ILS 使用不可（下のカード）', jump: 'RJTT ILS（LOC/GP/DME）使用不可' }, { label: 'RTE タブ：RNP APCH の機器要件（GPS 2 式）', main: 'RTE' }] },

{ no: 'RJTT 滑走路閉鎖（保守）', sec: 'RJTT', pri: 'mid', cat: ['滑走路・誘導路'], legs: ['KZ226'],
  title: 'RJTT：RWY 16R/34L、04/22、05/23、16L/34R の夜間閉鎖（10 月の指定日）',
  issued: '23-SEP 〜 09-OCT-2026', valid: '各 NOTAM 参照（01〜31-OCT）',
  orig: 'J1979/26 RWY 16R/34L CLSD DUE TO MAINT  RMK: 1.AVBL CROSS RWY 16R/34L VIA TWY OTHER THAN CLSD TWY 2.SEE AIP RJTT AD2.23  03-05 07 10-12 14 17-19 21 24-26 28 31 1430-2100\nJ1980/26 RWY 04/22 CLSD DUE TO MAINT ... 01-02 04-06 08-09 11-13 15-16 18-20 22-23 25-27 29-30 1430-2100\nJ1982/26 RWY 05/23 CLSD DUE TO MAINT ... OCT 03 07 10 14 17 21 24 28 31 1430-2100\nJ2108/26 RWY 16L/34R CLSD  RMK: SEE AIP RJTT AD2.23  13 15-16 20 22-23 27 29-30 1530-2130',
  ja: '保守のため、指定日の<b>1430–2100Z（16L/34R は 1530–2130Z）</b>に滑走路が閉鎖。閉鎖滑走路は、閉鎖誘導路以外の経由で横断できる（J1979・J1980）。詳細は AIP RJTT AD2.23。<br><b>16-OCT の状況：</b>04/22（J1980）と 16L/34R（J2108）が閉鎖、16R/34L（J1979）と 05/23（J1982）は開いている。',
  perf: '', nav: '', ops: '復路の ETA 10:12Z は、いずれの閉鎖時間帯（1430Z 以降）より前。ただし<b>代替で遅れて到着する場合、1430Z 以降は 04/22・16L/34R が使えない</b>。',
  rows: [
    { no: 'J1979/26', valid: '03〜31-OCT 1430–2100Z（日：03-05 07 10-12 14 17-19 21 24-26 28 31）', text: 'RWY <b>16R/34L</b> 閉鎖（保守）。閉鎖誘導路以外で横断可。<b>16 日は対象外（開）</b>' },
    { no: 'J1980/26', valid: '01〜30-OCT 1430–2100Z（日：01-02 04-06 08-09 11-13 15-16 18-20 22-23 25-27 29-30）', text: 'RWY <b>04/22</b> 閉鎖（保守）。閉鎖誘導路以外で横断可。<b>16 日は有効</b>' },
    { no: 'J1982/26', valid: '03〜31-OCT 1430–2100Z（日：03 07 10 14 17 21 24 28 31）', text: 'RWY <b>05/23</b> 閉鎖（保守）。<b>16 日は対象外（開）</b>' },
    { no: 'J2108/26', valid: '13〜30-OCT 1530–2130Z（日：13 15-16 20 22-23 27 29-30）', text: 'RWY <b>16L/34R</b> 閉鎖。<b>16 日は有効（1530–2130Z）</b>' }
  ],
  refs: [{ label: 'AIP RJTT AD2.23' }] },

{ no: 'RJTT ILS（LOC/GP/DME）使用不可', sec: 'RJTT', pri: 'mid', cat: ['灯火・NAVAID', '進入'], legs: ['KZ226'],
  title: 'RJTT：各滑走路の TLS（LOC・GP・DME）使用不可（工事）— 閉鎖と同じ日時',
  issued: '21-SEP 〜 09-OCT-2026', valid: '各 NOTAM 参照（01〜31-OCT）',
  orig: 'J1958/26 TLS-LOCALIZER, GP, DME FOR RWY 16R U/S DUE TO CONST. 03-05 07 10-12 14 17-19 21 24-26 28 31 1430-2100\nJ1959/26 ... RWY 34L ... 同上\nJ1960/26 ... RWY 22 ... 01-02 04-06 08-09 11-13 15-16 18-20 22-23 25-27 29-30 1430-2100\nJ1963/26 ... RWY 23 ... 03 07 10 14 17 21 24 28 31 1430-2100\nJ2109/26 TLS-LOC, GP, DME, IM FOR RWY 34R U/S DUE TO CONST  09 1600-2130, 13 15-16 20 22-23 27 29-30 1530-2130\nJ2110/26 TLS-LOC, GP, DME FOR RWY 16L U/S DUE TO CONST  同上',
  ja: '工事のため、<b>ILS（LOC・GP・DME。34R は IM も）が使用不可</b>。使用不可の日時は、<b>同じ滑走路の閉鎖（保守）の日時と同じ</b>。',
  perf: '', nav: '<b>16 日の 1430〜2100Z は 22（J1960）、1530〜2130Z は 16L・34R（J2110・J2109）の ILS が使えない</b>。16R・34L・23 は 16 日は対象外。', ops: '復路の ETA 10:12Z は、いずれの時間帯（1430Z 以降）より前。代替として遅れて到着する場合は、この時間帯の ILS を確認。',
  rows: [
    { no: 'J1958/26', valid: '03〜31-OCT 1430–2100Z（03-05 07 10-12 14 17-19 21 24-26 28 31）', text: 'RWY <b>16R</b> の LOC・GP・DME 使用不可。16 日は対象外' },
    { no: 'J1959/26', valid: '同上', text: 'RWY <b>34L</b> の LOC・GP・DME 使用不可。16 日は対象外' },
    { no: 'J1960/26', valid: '01〜30-OCT 1430–2100Z（01-02 04-06 08-09 11-13 15-16 18-20 22-23 25-27 29-30）', text: 'RWY <b>22</b> の LOC・GP・DME 使用不可。<b>16 日は有効</b>' },
    { no: 'J1963/26', valid: '03〜31-OCT 1430–2100Z（03 07 10 14 17 21 24 28 31）', text: 'RWY <b>23</b> の LOC・GP・DME 使用不可。16 日は対象外' },
    { no: 'J2109/26', valid: '09〜30-OCT 1530–2130Z（09 は 1600–2130。13 15-16 20 22-23 27 29-30）', text: 'RWY <b>34R</b> の LOC・GP・DME・IM 使用不可。<b>16 日は有効</b>' },
    { no: 'J2110/26', valid: '同上', text: 'RWY <b>16L</b> の LOC・GP・DME 使用不可。<b>16 日は有効</b>' }
  ], refs: [{ label: 'AIP RJTT AD2.23' }] },

{ no: 'RJTT 誘導路の閉鎖・制限', sec: 'RJTT', pri: 'mid', cat: ['滑走路・誘導路'], legs: ['KZ226'],
  title: 'RJTT：誘導路の閉鎖（保守・工事）／翼幅制限（W は 65m 超、N は 52m 超で使用不可）',
  issued: '23-SEP 〜 16-OCT-2026', valid: '各 NOTAM 参照',
  orig: 'E5300/26 TWY B3,B4,B6,B8,B13,T3,T4,T6,T8 CLSD DUE TO MAINT … 1430-2100 ／ E5299/26 TWY A1,A2,A5,A7,A8,A10,A12,A13,L5,L10,L12 CLSD ／ E5302/26 TWY D1 THRU D7,D,S,S1,S2,S3,E(BTN A AND D),R(BTN A AND D) CLSD ／ E5305/26 TWY A4,A6,A9,A11,A14,L4,L6,L9,L11,L13,L14 CLSD ／ E5310/26 TWY B5,B9 THRU B11,T5,T9,T11,A16,L16,Q CLSD ／ E5312/26 TWY B1,B2,B5,B(BTN B1 AND B2),B(INT OF B1),T1,T2,T5 CLSD ／ E5311/26 TWY B14,T14 CLSD ／ E5593/26 TWY A3,A6,A9,A11,A14,L3,L6,L9,L11,L13,L14 CLSD ／ E5740/26 TWY C1 THRU C14 CLSD DUE TO CONST ／ E5896/26 TWY B14,T14 CLSD DUE TO CONST ／ E5716/26 TWY J(BTN R AND W),J1,J2 CLSD ／ E5721/26 TWY G(BTN H2 AND W),H1 CLSD ／ E5719/26 TWY W(BTN K AND W13) RESTRICTED: NOT AVBL FOR ACFT WITH WINGSPAN MORE THAN 65.0M ／ E5720/26 TWY N(FM N5 TO N7),N5,N7 RESTRICTED: NOT AVBL FOR ACFT WITH WINGSPAN MORE THAN 52.0M',
  ja: '指定日の夜間（<b>1430〜2100Z</b>。C 系は 1530〜2130Z）に誘導路が閉鎖。<b>16-OCT に有効なのは、E5300（B 系・T 系）、E5740（C1〜C14）、E5896（B14・T14）、E5716（J 系）、E5721（G・H1）、E5719（W の翼幅制限）、E5720（N の翼幅制限）</b>。他は 16 日は対象外。<b>B747-8F（翼幅 68.4m）は、W（K〜W13 間・65m 超不可）と N（N5〜N7・52m 超不可）を使用できない</b>。',
  perf: '', nav: '', ops: '<b>復路の ETA 10:12Z は、いずれの時間帯（1430Z 以降）より前</b>。代替として遅れて到着する場合のみ、スポット・タキシールートに影響する。E5719・E5720 は、<b>16 日 1500〜2100Z</b>。',
  rows: [
    { no: 'E5300/26', valid: '01〜30-OCT 1430–2100Z（01-02 04-06 08-09 11-13 15-16 18-20 22-23 25-27 29-30）', text: 'TWY B3・B4・B6（OCR「B0」）・B8・B13、T3・T4・T6・T8 閉鎖（保守）。［要確認：B6・T8 は OCR］<b>16 日は有効</b>' },
    { no: 'E5299/26', valid: '03〜31-OCT 1430–2100Z（03-05 07 10-12 14 17-19 21 24-26 28 31）', text: 'TWY A1・A2・A5・A7・A8・A10・A12・A13、L5・L10・L12 閉鎖（保守）。16 日は対象外' },
    { no: 'E5302/26', valid: '03〜31-OCT 1430–2100Z（03 07 10 14 17 21 24 28 31）', text: 'TWY D1〜D7、D、S、S1〜S3、E（A〜D 間）、R（A〜D 間）閉鎖（保守）。16 日は対象外' },
    { no: 'E5305/26', valid: '12・21-OCT 1430–2100Z', text: 'TWY A4・A6・A9・A11・A14、L4・L6・L9・L11・L13・L14 閉鎖（保守）。16 日は対象外' },
    { no: 'E5310/26', valid: '04・11・18・25-OCT 1430–2100Z', text: 'TWY B5・B9〜B11、T5・T9・T11、A16、L16、Q 閉鎖（保守）。16 日は対象外' },
    { no: 'E5312/26', valid: '15・22・29-OCT 1430–2100Z', text: 'TWY B1・B2・B5、B（B1〜B2 間）、B（B1 交差）、T1・T2・T5 閉鎖（保守）。16 日は対象外' },
    { no: 'E5311/26', valid: '01・08・27-OCT 1430–2100Z（日付は OCR。［要確認］）', text: 'TWY B14・T14 閉鎖（保守）。16 日は対象外' },
    { no: 'E5593/26', valid: '04〜31-OCT 1430–2100Z（04 10-11 14 17-18 24-25 28 31）', text: 'TWY A3・A6・A9・A11・A14、L3・L6・L9・L11・L13・L14 閉鎖（保守）。16 日は対象外' },
    { no: 'E5740/26', valid: '13〜30-OCT 1530–2130Z（13 15-16 20 22-23 27 29-30）', text: 'TWY <b>C1〜C14 閉鎖</b>（工事）。<b>16 日は有効</b>' },
    { no: 'E5896/26', valid: '16-OCT 1430–2100Z', text: 'TWY <b>B14・T14 閉鎖</b>（工事）' },
    { no: 'E5716/26', valid: '16-OCT 1500–2100Z', text: 'TWY <b>J（R〜W 間）、J1（J〜K 間）、J2（J〜K 間）閉鎖</b>（工事）' },
    { no: 'E5721/26', valid: '16-OCT 1500–2100Z', text: 'TWY <b>G（H2〜W 間）、H1 閉鎖</b>（工事）' },
    { no: 'E5719/26', valid: '16-OCT 1500–2100Z', text: 'TWY <b>W（K〜W13 間）制限：翼幅 65.0m 超の機は使用不可</b>（工事）。<b>B747-8F は使用不可</b>' },
    { no: 'E5720/26', valid: '16-OCT 1500–2100Z', text: 'TWY <b>N（N5〜N7 間）、N5、N7 制限：翼幅 52.0m 超の機は使用不可</b>（工事）。<b>B747-8F は使用不可</b>' }
  ], refs: [{ label: 'A/M RJTT 10-8B／AIP SUP 212/26' }] },

{ no: 'RJTT 灯火・標識の不作動', sec: 'RJTT', pri: 'mid', cat: ['灯火・NAVAID', '着陸最低気象'], legs: ['KZ226'],
  title: 'RJTT：RWY 34R の CAT-2/3 → CAT-1 に格下げ、16L/34R のセンターライン灯 使用不可 ほか（H24 〜 28-OCT）',
  issued: '25-SEP 〜 30-SEP-2026', valid: '30-SEP-2026 1500Z 〜 28-OCT-2026 1500Z（J1678 は 04-AUG 〜 28-OCT）',
  orig: 'J2007/26 RWY-THR-ID-LGT FOR RWY 16L U/S; SEQUENCED-FLG-LGT FOR RWY 34L U/S; REDL FOR RWY 16L/34R PARTLY U/S; APCH-GUIDANCE-LGT FOR RWY 16R/16L(NR.4) U/S; APCH-GUIDANCE-LGT FOR RWY 16R/16L(NR.6,NR.8) PARTLY U/S; LIGHTING SYSTEM CAT-2,3 FOR RWY 34R DOWNGRADED TO CAT-1; SEQUENCED-FLG-LGT FOR RWY 34R U/S\n  RMK: REF AIP SUP 212/26 ITEM RWY:30,49,52,54,55,56,57 ／ 49 SFL for RWY 34L: NOT AFFECT WX MINIMA ／ 52 REDL for RWY 16L/34R: NOT AFFECT WX MINIMA ／ 56 CAT2,3 for RWY 34R: DOWN GRADE TO CAT1 ／ 57 SFL for RWY 34R: NOT AFFECT WX MINIMA\nJ2008/26 RCLL FOR RWY 16L/34R U/S  → RCLL for RWY 16L/34R: APPLY CL OUT\nJ2009/26・J2010/26・J2011/26・J2012/26 TWY-CL-LGT／TAXIING-GUIDANCE-SIGN／RAPID-EXIT-TWY-INDICATOR-LGT／TWY-EDGE-LGT ほか\nJ2023/26 VMS FOR TWY L9 U/S ／ J1988/26 TWY CL MARKING・SURFACE PAINTED DIRECTION SIGN PARTLY ERASED ／ J1678/26 RWY INCURSION WARNING OPERATION SUSPENDED DUE TO MAINT.',
  ja: '<b>着陸の最低気象に関わるもの：</b>RWY <b>34R の照明システムが CAT-2/3 から CAT-1 に格下げ</b>（J2007・項目 56）。<b>RWY 16L/34R のセンターライン灯（RCLL）が使用不可 → 「CL OUT」を適用</b>（J2008）。SFL（34L・34R）と REDL（16L/34R）は<b>最低気象に影響なし</b>。16L のしきい値識別灯（THR-ID）使用不可、16R/16L 側の進入灯の一部使用不可（項目 54・55）は、最低気象への影響の記載なし［要確認］。<br>誘導路・標識：誘導路のセンターライン灯・案内標識・縁灯・VMS・CL 標示の不作動（J2009〜J2012・J2023・J1988）。滑走路誤進入警報は保守のため停止（J1678）。',
  perf: '', nav: '<b>34R は CAT-1 の最低気象まで</b>（CAT-2/3 の進入は不可）。<b>16L/34R は RCLL が使えないため CL OUT の RVR を適用</b>。', ops: '代替として RJTT を選ぶ場合は、<b>使う滑走路（16L/34R ほか）の最低気象に、CAT-1・CL OUT の制限を反映</b>。これらは<b>終日（H24）有効</b>で、復路の到着時間帯にも効く。',
  rows: [
    { no: 'J2007/26', valid: '30-SEP 1500Z 〜 28-OCT 1500Z', text: '16L THR-ID 灯・34L SFL・34R SFL 使用不可、16L/34R の REDL 一部使用不可、16R/16L の進入ガイダンス灯（No.4）使用不可（No.6・8 は一部）、<b>34R は CAT-2/3 → CAT-1 に格下げ</b>。SFL・REDL は最低気象に影響なし' },
    { no: 'J2008/26', valid: '30-SEP 1500Z 〜 28-OCT 1500Z', text: '<b>RCLL（16L/34R）使用不可 → 「CL OUT」を適用</b>' },
    { no: 'J2009/26', valid: '30-SEP 1500Z 〜 28-OCT 1500Z', text: 'TWY センターライン灯 使用不可：R1、W11（W〜R1）、K（C〜R）、E（K 交差）、A16、T12・T14・Q・Q1・Q2、C（C3・C5 交差）、C7・C8・C9、J・J1・J2、M1' },
    { no: 'J2010/26', valid: '30-SEP 1500Z 〜 28-OCT 1500Z', text: '誘導案内標識（T12・T14・O・O1・O2）使用不可、C10 の高速離脱路指示灯 使用不可' },
    { no: 'J2011/26', valid: '30-SEP 1500Z 〜 28-OCT 1500Z', text: 'TWY J（R〜J1 間）の縁灯：一部を臨時設置' },
    { no: 'J2012/26', valid: '30-SEP 1500Z 〜 28-OCT 1500Z', text: 'TWY センターライン灯 使用不可：C（C14 交差）、J1（J〜K）、B（B9〜B10）、W11・W9（W 交差）、A・W（スポット 201 の後方）、E3（E〜R）、E（スポット 808〜809）、R（A〜スポット 709）' },
    { no: 'J2023/26', valid: '30-SEP 1352Z 〜 30-NOV 2100Z', text: 'TWY L9 の可変メッセージ標識（VMS）使用不可' },
    { no: 'J1988/26', valid: '30-SEP 1500Z 〜 28-OCT 1500Z', text: 'TWY の CL 標示（N2、F、T・N の F 交差）と路面標示の方向標識（N5：スポット 941 の後方）が一部消失' },
    { no: 'J1678/26', valid: '04-AUG 〜 28-OCT-2026', text: '<b>滑走路誤進入警報の運用を保守のため停止</b>' }
  ], refs: [{ label: 'A/M RJTT 10-8B・10-8B1（11SEP26）／AIP SUP 212/26' }] },

{ no: 'RJTT RWY 16L/34R グルービング → Non-Grooved を適用', sec: 'RJTT', pri: 'high', cat: ['滑走路・誘導路', '性能'], legs: ['KZ226'],
  title: 'RJTT RWY 16L/34R：グルービングが一部消失・施工中 → Non-Grooved を適用',
  issued: '29-JUL 〜 29-SEP-2026', valid: 'J1623/26：30-JUL 2130Z 〜 28-OCT 2130Z／J1987/26：30-SEP 1500Z 〜 28-OCT 1500Z',
  orig: 'J1623/26 GROOVING FOR RWY 16L/34R PARTLY ERASED DUE TO MAINT\n1.LEN: 98.0M (BTN 1004.8M AND 1102.8M FM RWY 34R THR)  WID: 11.0M (BTN 1.0M AND 12.0M ON THE EAST SIDE OF RCL)\n2.LEN: 98.0M (BTN 1004.8M AND 1102.8M FM RWY 34R THR)  WID: 11.0M (BTN 1.0M AND 12.0M ON THE WEST SIDE OF RCL)\nEXPLANATION: NOTE:APPLY NON-GROOVED\nJ1987/26 GROOVING FOR RWY 16L/34R PARTLY, GRADUALLY ERASED OR INSTALLED\nRMK: (1)REF AIP SUP 212/26 ITEM RWY:53,58 (2) THE EXACT TIME OF NEXT PERIOD WILL BE NOTIFIED BY FURTHER NOTAM\nEXPLANATION: NOTE:REF A/M RJTT 10-8B DATED 11SEP26  APPLY NON-GROOVED',
  ja: 'RJTT の <b>RWY 16L/34R のグルービングが、一部消失（J1623）／一部で段階的に消失・施工中（J1987）</b>。J1623：<b>34R のしきい値から 1,004.8〜1,102.8m（長さ 98.0m）の区間、中心線の東側・西側とも幅 11.0m（1.0〜12.0m）</b>。会社の注記：<b>NON-GROOVED を適用する</b>（APPLY NON-GROOVED）。',
  perf: '<b>離着陸の性能計算では Non-Grooved を使う</b>。WET（濡れた滑走路）では、Grooved より制限が厳しい。', nav: '',
  ops: '<b>RJTT 16L/34R を使う場合は Non-Grooved で計算</b>。RJAA 16R/34L（NCA 00202/26）と同様に、WET 時の扱い（横風・副操縦士の操縦可否）が変わる点を確認。［要確認：RJTT に同じ扱い（WET Non-Grooved は機長のみ・横風 20kt）を適用するか。OPT の RWY 名称・RWY COND は OPT／A/M RJTT 10-8B で確認］',
  refs: [{ label: 'TO タブ：RJAA 16R/34L の Grooved vs Non-Grooved（運用上の判断基準）', main: 'TO' }, { label: 'RJAA の同種：NCA 00202/26', jump: 'NCA 00202/26' }, { label: 'A/M RJTT 10-8B（11SEP26）／AIP SUP 212/26' }] }
);

NOTAMS.push(
{ no: 'Z0765/26', sec: 'RKRR', pri: 'low', cat: ['流量規制・CDR・トラック'], legs: ['KZ226'],
  title: '韓国：条件付き経路（CDR2）の開放（16-OCT 1300–2100Z）',
  issued: '15-OCT-2026 08:14', valid: '16-OCT-2026 13:00Z 〜 21:00Z',
  orig: '"CONDITIONAL ROUTE (CDR2) AVBL AS FLW, NEW\nNR ROUTE TIME FM TIME TO LOWER LVL UPPER LVL\n1 MASTA-UPGOS 10161330 10162100 6,000FT AMSL FL600\n2 RUGMA-ANROD 10161300 10162100 11,000FT AMSL FL600\n3 BOPTA-PONIK 10161300 10162100 FL150 FL600\n4 KARBU-LANAT 10161400 10161845 FL150 FL600"',
  ja: '<b>韓国 FIR の条件付き経路（CDR2）</b>が開放される。<b>MASTA–UPGOS（1330–2100Z、6,000ft AMSL〜FL600）</b>、<b>RUGMA–ANROD（1300–2100Z、11,000ft AMSL〜FL600）</b>、<b>BOPTA–PONIK（1300–2100Z、FL150〜FL600）</b>、<b>KARBU–LANAT（1400–1845Z、FL150〜FL600）</b>。',
  perf: '', nav: '', ops: '復路（ETD 0720Z〜ETA 1012Z）の飛行時間帯（〜1012Z）より<b>後</b>（1300Z〜）に開放されるため、この便には直接関係なし。', refs: [] }
);

/* ── RJTT の位置図（EFB チャート 2 枚：北側／南側。座標は各画像の表示サイズ 2000 px 幅基準）── */
var RJTT_N = { name: 'RJTT（北側）', img: 'notam_img/rjtt_n.jpg', w: 2000, h: 1146, items: [
  { n: 1, type: 'closed', label: 'RWY 04/22 閉鎖（保守）1430–2100Z（16 日は有効）', ids: 'J1980/26', cards: ['RJTT 滑走路閉鎖（保守）'], shapes: [{ k: 'line', pts: [[395, 925], [960, 110]], w: 22 }], tag: [560, 700] },
  { n: 2, type: 'closed', label: 'RWY 16R/34L 閉鎖（保守）1430–2100Z（16 日は対象外）', ids: 'J1979/26', cards: ['RJTT 滑走路閉鎖（保守）'], shapes: [{ k: 'line', pts: [[750, 580], [1065, 1125]], w: 22 }], tag: [950, 940] },
  { n: 3, type: 'closed', label: 'RWY 16L/34R 閉鎖 1530–2130Z（16 日は有効）', ids: 'J2108/26', cards: ['RJTT 滑走路閉鎖（保守）'], shapes: [{ k: 'line', pts: [[1320, 300], [1800, 1120]], w: 22 }], tag: [1560, 700] },
  { n: 4, type: 'info', label: 'ILS（LOC・GP・DME）使用不可（22：J1960 16 日有効／16L：J2110・34R：J2109 16 日有効／16R：J1958・34L：J1959 16 日は対象外）', ids: 'J1958〜J1960・J2109・J2110', cards: ['RJTT ILS（LOC/GP/DME）使用不可'], shapes: [{ k: 'pin', c: [750, 580], r: 26 }, { k: 'pin', c: [960, 110], r: 26 }, { k: 'pin', c: [1320, 300], r: 26 }, { k: 'pin', c: [1065, 1125], r: 26 }, { k: 'pin', c: [1800, 1120], r: 26 }], tag: [1200, 140] },
  { n: 5, type: 'closed', label: 'TWY B14・T14 閉鎖（工事）16-OCT 1430–2100Z', ids: 'E5896/26・E5311/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'ellipse', c: [915, 135], rx: 80, ry: 60, rot: 0 }], tag: [800, 70] },
  { n: 6, type: 'closed', label: 'TWY C1〜C14 閉鎖（工事）1530–2130Z（16 日は有効）', ids: 'E5740/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'polyline', pts: [[1270, 160], [1330, 340], [1440, 548], [1550, 745], [1700, 990]], w: 16 }], tag: [1500, 440] },
  { n: 7, type: 'closed', label: 'TWY J・J1・J2 閉鎖（工事）16-OCT 1500–2100Z', ids: 'E5716/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'polyline', pts: [[1050, 378], [940, 440], [830, 552]], w: 16 }], tag: [1080, 470] },
  { n: 8, type: 'info', label: 'TWY W（K〜W13）翼幅 65m 超は使用不可（B747-8F 不可）16-OCT 1500–2100Z', ids: 'E5719/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'ellipse', c: [930, 690], rx: 120, ry: 70, rot: 0 }], tag: [1040, 760] },
  { n: 9, type: 'info', label: 'TWY N（N5〜N7）・N5・N7 翼幅 52m 超は使用不可（B747-8F 不可）16-OCT 1500–2100Z', ids: 'E5720/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'ellipse', c: [430, 470], rx: 125, ry: 52, rot: 0 }], tag: [300, 380] },
  { n: 10, type: 'closed', label: 'TWY B3・B4・B6・B8・B13・T3・T4・T6・T8 閉鎖（保守）1430–2100Z（16 日は有効）', ids: 'E5300/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'ellipse', c: [490, 805], rx: 85, ry: 75, rot: 0 }, { k: 'ellipse', c: [610, 620], rx: 95, ry: 95, rot: 0 }, { k: 'ellipse', c: [935, 198], rx: 55, ry: 32, rot: 0 }], tag: [420, 920] },
  { n: 11, type: 'closed', label: '西側の A 系・L 系（A1〜A14、L3〜L16）閉鎖（保守）1430–2100Z（16 日は対象外）', ids: 'E5299/26・E5305/26・E5593/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'polyline', pts: [[800, 512], [845, 590], [826, 668], [900, 800], [985, 895], [1060, 1075]], w: 12 }], tag: [740, 960] }
] };
var RJTT_S = { name: 'RJTT（南側）', img: 'notam_img/rjtt_s.jpg', w: 2000, h: 1144, items: [
  { n: 1, type: 'closed', label: 'RWY 16R/34L 閉鎖（保守）1430–2100Z（16 日は対象外）', ids: 'J1979/26', cards: ['RJTT 滑走路閉鎖（保守）'], shapes: [{ k: 'line', pts: [[375, 40], [740, 670]], w: 22 }], tag: [600, 300] },
  { n: 2, type: 'closed', label: 'RWY 16L/34R 閉鎖 1530–2130Z（16 日は有効）', ids: 'J2108/26', cards: ['RJTT 滑走路閉鎖（保守）'], shapes: [{ k: 'line', pts: [[1090, 40], [1310, 430]], w: 22 }], tag: [1220, 190] },
  { n: 3, type: 'closed', label: 'RWY 05/23 閉鎖（保守）1430–2100Z（16 日は対象外）', ids: 'J1982/26', cards: ['RJTT 滑走路閉鎖（保守）'], shapes: [{ k: 'line', pts: [[1330, 1125], [1935, 460]], w: 22 }], tag: [1640, 790] },
  { n: 4, type: 'info', label: 'ILS（LOC・GP・DME）使用不可（23：J1963／34L：J1959／16R：J1958 は 16 日対象外、16L：J2110・34R：J2109 は 16 日有効）', ids: 'J1958・J1959・J1963・J2109・J2110', cards: ['RJTT ILS（LOC/GP/DME）使用不可'], shapes: [{ k: 'pin', c: [375, 40], r: 26 }, { k: 'pin', c: [740, 670], r: 26 }, { k: 'pin', c: [1090, 40], r: 26 }, { k: 'pin', c: [1310, 430], r: 26 }, { k: 'pin', c: [1935, 460], r: 26 }], tag: [900, 330] },
  { n: 5, type: 'closed', label: 'TWY C3〜C7 付近の C 系 閉鎖（工事）1530–2130Z（16 日は有効）', ids: 'E5740/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'polyline', pts: [[1110, 115], [1200, 177], [1215, 298], [1268, 385]], w: 16 }], tag: [1320, 250] },
  { n: 6, type: 'closed', label: 'TWY G（H2〜W）・H1 閉鎖（工事）16-OCT 1500–2100Z', ids: 'E5721/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'ellipse', c: [850, 350], rx: 125, ry: 62, rot: 0 }], tag: [740, 270] },
  { n: 7, type: 'closed', label: '東側の D 系・S 系・E・R（D1〜D7、S1〜S3）閉鎖（保守）1430–2100Z（16 日は対象外）', ids: 'E5302/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'ellipse', c: [1340, 985], rx: 165, ry: 150, rot: 0 }, { k: 'polyline', pts: [[1887, 461], [1757, 577], [1583, 741], [1408, 935]], w: 12 }], tag: [1560, 640] },
  { n: 8, type: 'closed', label: '西側の A 系・L 系（A1〜A10、L5・L10 ほか）閉鎖（保守）1430–2100Z（16 日は対象外）', ids: 'E5299/26・E5305/26・E5593/26', cards: ['RJTT 誘導路の閉鎖・制限'], shapes: [{ k: 'polyline', pts: [[480, 85], [530, 240], [630, 400], [700, 530], [752, 620]], w: 12 }], tag: [330, 300] }
] };
RJTT_N.items.concat(RJTT_S.items).forEach(function (it) { it.chart = null; });
[RJTT_N, RJTT_S].forEach(function (c) { c.items.forEach(function (it) { it.chart = c; }); NOTAM_CHARTS.push(c); });

/* ZSPD 西側チャートに F4317/26（TWY Q4・L15、スポット 322〜325）を追加 */
ZSPD_W.items.push({ n: 2, type: 'closed', label: 'TWY Q4（L15〜C 間）と TWY L15（スポット 322〜325 間）閉鎖（復路・16-OCT 0200–0900Z）。ジェットブラスト注意', ids: 'F4317/26', cards: ['F4317/26'], shape: { k: 'ellipse', c: [410, 1075], rx: 80, ry: 120, rot: 0 }, tag: [310, 960], chart: ZSPD_W });

/* 行の legs が未設定のもの（新規カード）は、カードの legs を引き継ぐ */
NOTAMS.forEach(function (n) { (n.rows || []).forEach(function (r) { if (!r.legs) r.legs = n.legs || ['KZ225', 'KZ226']; }); });


/* ═════════ KZ227（RJAA→ZSPD、16-OCT・今日の担当便）を最新として反映 ═════════
   KZ227：Oct 16 ETD 13:20Z（NRT）― ETA 16:33Z（PVG）、代替 ZSSS（EFB 画面 2026-10-16 19:09） */
NOTAM_FLIGHTS.KZ227 = { label: 'KZ227（最新）', route: 'RJAA→ZSPD', time: 'Oct 16 ETD 13:20Z（NRT）― ETA 16:33Z（PVG）', altn: 'ZSSS' };
var NOTAM_LATEST = 'KZ227';
var KZ227_IDS = ["00007/19", "00011/20", "00020/26", "00022/25", "00078/25", "00091/25", "00115/24", "00155/26", "00195/26", "00202/26", "00204/26", "00210/23", "00219/22", "A1179/26", "A1193/26", "A1205/26", "A1275/26", "A1306/26", "A1346/26", "A1349/26", "A1388/26", "A1390/26", "A1430/26", "A1442/26", "A1443/26", "A1445/26", "A1472/26", "A1473/26", "A1474/26", "A1475/26", "A1483/26", "A1519/26", "A1552/26", "A2574/26", "A3194/26", "A4021/26", "A4484/26", "A4646/26", "A5182/26", "E4660/26", "E4661/26", "E4851/26", "E4852/26", "E4853/26", "E4854/26", "F2442/26", "F2443/26", "F3192/26", "F3193/26", "F3202/26", "F3220/26", "F3286/26", "F3458/26", "F3772/26", "F3922/26", "F4301/26", "F4328/26", "F4329/26", "F4330/26", "F4336/26", "F4338/26", "P3999/26", "P4897/26", "P4898/26", "P4899/26", "P4900/26", "P4901/26", "P4902/26", "P4903/26", "P4907/26", "P4908/26", "P4910/26", "P4911/26", "P4921/26", "P5063/26", "Q1947/26", "Q2453/26", "Q2456/26", "Q2461/26", "Q2465/26", "Q2469/26", "Q2470/26", "Y1162/26", "Z0718/26", "Z0764/26", "Z0765/26", "Z0785/26", "Z0786/26", "Z1827/26", "00008/20"];
(function () {
  var idre = /[A-Z]?\d{3,5}\/\d{2}/g;
  function present(text) { var ids = String(text).match(idre) || []; return ids.some(function (i) { return KZ227_IDS.indexOf(i) >= 0; }); }
  NOTAMS.forEach(function (n) {
    if (!n.legs) n.legs = [];
    var rowsHit = (n.rows || []).some(function (r) { return present(r.no); });
    (n.rows || []).forEach(function (r) { r.legs = r.legs || []; if (present(r.no) && r.legs.indexOf('KZ227') < 0) r.legs.push('KZ227'); });
    if ((present(n.no) || (!/\d{3,5}\/\d{2}/.test(n.no) && rowsHit)) && n.legs.indexOf('KZ227') < 0) n.legs.push('KZ227');
  });
})();

/* ── KZ227 で新規／改訂された内容 ── */
function ntAddRows27(no, rows) {
  NOTAMS.forEach(function (n) {
    if (n.no === no) {
      n.rows = (n.rows || []).concat(rows.map(function (r) { r.legs = ['KZ227']; return r; }));
      if (n.legs.indexOf('KZ227') < 0) n.legs.push('KZ227');
    }
  });
}
ntAddRows27('福岡FIR 流量規制（5件）', [
  { no: 'Z1827/26', valid: '16-OCT 0930Z 〜 17-OCT 1600Z', text: 'ルート B576/Y742。<b>KABAM（N892）経由で VVXX・WMXX・WSXX・VTXX・VDXX 向けの南行き機（SB）</b>：<b>ATOTI・MUGUS で高度に関係なく 12 分間隔</b>。（XX は任意の文字）。本便（PVG 向け）には対象外' },
  { no: 'Y1162/26', valid: '16-OCT 0924Z 〜 17-OCT 1600Z', text: 'ATS ルート A1/G581/Y26/Y52。<b>N892・KABAM 経由の機に、出発予定許可時刻（EDCT）を発行</b>。本便（PVG 向け）には対象外' }
]);
ntAddRows27('Q2448/26・Q2449/26・Q2443/26', [
  { no: 'Q2470/26', valid: '16-OCT 2100Z 〜 17-OCT 2100Z', text: '<b>16 日 2100Z 以降・17 日分</b>Z16・Z17・Z18・Z21・Z162・Z171・Z182（16 日 2100–2200Z と 17 日 1200–2100Z）、Z101・Z102（16 日 2100Z〜17 日 2100Z）。すべて MEA。<b>本便（ETD 1320Z〜ETA 1633Z）の飛行時間帯より後</b>' },
  { no: 'Q2465/26', valid: '16-OCT 2100Z 〜 17-OCT 2100Z', text: 'Z29・Z31・Z32・Z34（17 日 1500–2100Z）。すべて MEA。本便の飛行時間帯とは重ならない' }
]);
ntAddRows27('Z0765/26', []);
NOTAMS.forEach(function (n) { if (n.no === 'Z0765/26' && n.legs.indexOf('KZ227') < 0) n.legs.push('KZ227'); });

/* NCA 00202/26 は 16-OCT 01:54 に改訂（文面が「Non-Grooved Rwy として扱う」に変更、OPT 空港 DB の区分を明記）*/
NOTAMS.forEach(function (n) {
  if (n.no === 'NCA 00202/26') {
    n.issued = '01-OCT-2026 09:53（改訂 16-OCT-2026 01:54）';
    n.orig = '///// COMPANY NOTAM /////\nTAKE FLWG ACTIONS BECAUSE GROOVING OF RWY 16R/34L HAS BEEN PARTIALLY REMOVED, WHICH IS THEREFORE TREATED AS NON-GROOVED RWY.\n///OPT INFO///\n[AIRPORT DATABASE: NCA-AIRPORT-0025 OR EARLIER]\n-TKOF & LDG-\nRWY 16RGRV NOT AVAILABLE\nRWY 34LGRV NOT AVAILABLE\nRWY 16RGRVNTM NOT AVAILABLE\nRWY 34LGRVNTM NOT AVAILABLE\n-TKOF-\nRWY 16RA2GRVNTM NOT AVAILABLE\nRWY 16RA2GRV SEE BELOW\n//RWY 16RA2GRV//\nSINCE RWY 16RA2 IS TREATED AS A NON-GROOVED RWY, USE RWY 16RA2GRV AND SELECT RWY COND "WET NGRV" WHEN CALCULATING WET PERFORMANCE.\n[AIRPORT DATABASE: NCA-AIRPORT-0026 OR LATER]\nTHIS CHG IS REFLECTED IN THE OPT AP DB "NCA-AIRPORT-0026" OR LATER.\nSELECT FLWG RWY.\n-TKOF & LDG-\nRWY 16RGRV NOT AVAILABLE\nRWY 34LGRV NOT AVAILABLE\n-TKOF-\nRWY 16RA2GRV NOT AVAILABLE\nRWY 16RA2 16RA2NTM\n/// i-SKY INFO ///\nSELECT FLWG RWY.\n-TKOF & LDG-\nRWY 16RGRV NOT AVAILABLE\nRWY 34LGRV NOT AVAILABLE\n-TKOF-\nRWY 16RA2GRV NOT AVAILABLE\nRWY 16RA2 16RA2NTM\nEXPLANATION: NOTE:REF A1179/26, A1205/26, A1275/26, A1306/26, A1388/26, A1483/26';
    n.ja = '<b>RWY 16R/34L のグルービングが部分的に消失しており、Non-Grooved Rwy として扱う</b>（16-OCT 01:54 改訂で、この趣旨が冒頭に明記された）。OPT では<b>空港 DB の版で扱いが分かれる</b>：<br>・<b>NCA-AIRPORT-0025 以前（本便の EFB は 0024/0025）</b>：離着陸とも <b>16RGRV／34LGRV／16RGRVNTM／34LGRVNTM は使用不可</b>。離陸の <b>16RA2GRVNTM は使用不可</b>。<b>16RA2 は Non-Grooved 扱いのため、16RA2GRV を選び、WET は滑走路状態「WET NGRV」で計算</b>する。<br>・<b>NCA-AIRPORT-0026 以降</b>：上記の変更が OPT に反映済み。離着陸 16RGRV／34LGRV、離陸 16RA2GRV は使用不可で、16RA2NTM（離陸）を選ぶ。i-SKY も同様。<br>関連 NOTAM：A1179、A1205、A1275、A1306、A1388、A1483（いずれも /26）。';
  }
});

NOTAMS.push(
{ no: 'A1552/26', sec: 'RJAA', pri: 'low', cat: ['灯火・NAVAID', '滑走路・誘導路'], legs: ['KZ227'],
  title: 'TWY A（A1〜A2 間）のセンターライン灯 使用不可（工事）',
  issued: '16-OCT-2026 01:02（改訂 03:59）', valid: '16-OCT-2026 20:00Z 〜 15-JAN-2027 15:00Z',
  orig: 'TWY-CL-LGT FOR TWY A(BTN A1 AND A2) U/S DUE TO CONST',
  ja: '<b>TWY A（A1〜A2 間）のセンターライン灯が使用不可</b>（工事）。16-OCT 2000Z から。既存の A1474/26（TWY A・A2 のセンターライン灯 使用不可）に重なる。',
  perf: '', nav: '', ops: '<b>本便の ETD 1320Z は有効開始（2000Z）の前</b>。夜間・低視程のタキシーで TWY A を使う場合は、センターライン灯がない前提。', refs: [{ label: '同種：A1474/26（TWY A・A2 のセンターライン灯）', jump: 'RJAA 誘導路の閉鎖・灯火不作動' }] },

{ no: 'ZSPD 滑走路・誘導路の閉鎖（16-OCT 夜）', sec: 'ZSPD', pri: 'high', cat: ['滑走路・誘導路'], legs: ['KZ227'],
  title: 'ZSPD：RWY 17L/35R 閉鎖、TWY P1・P4・A（B8〜P1）、L22・L25・L25A・L26・L26A 閉鎖（16-OCT 1730/1800〜2230Z）',
  issued: '15-OCT-2026 09:02〜09:20', valid: '16-OCT-2026 17:30Z（F4330 は 18:00Z）〜 22:30Z',
  orig: 'F4328/26: "RWY17L/35R CLSD.ACFT SHALL CROSS RWY17L/35R VIA TWY P6,P5,P3,P2."\nF4329/26: "FLW TWY CLSD: 1. TWY P1,P4 CLSD BTN TWY D AND TWY B. 2. TWY A BTN TWY B8 AND TWY P1. INTERSECTION CLSD BTN TWY P1 AND TWY A, ACFT SHALL CROSS TWY A VIA TWY P6,P5,P3,P2."\nF4330/26: "FLW TWY CLSD: 1. TWY L22, ACFT SHALL CROSS TWY L22 VIA TWY W1,W6. 2. TWY L25,L25A,L26,L26A."',
  ja: '<b>RWY 17L/35R が閉鎖</b>。閉鎖滑走路を横断する機は <b>TWY P6・P5・P3・P2 経由</b>で横断。<b>TWY P1・P4（D〜B 間）、TWY A（B8〜P1 間）と P1 との交差点が閉鎖</b>（A を横断する場合は P6・P5・P3・P2 経由）。<b>TWY L22（横断は W1・W6 経由）、L25・L25A・L26・L26A が閉鎖</b>。',
  perf: '', nav: '', ops: '<b>本便の ETA 1633Z は、閉鎖の開始（1730Z／1800Z）の前</b>。ただし<b>遅延・ホールディングで到着が 1730Z 以降になると</b>、17L/35R の閉鎖とタキシールート（P 系・L 系）の制約を受ける。スポットと、17L/35R・17R/35L のどちらが使えるかを LID（F3193/26）で確認。',
  rows: [
    { no: 'F4328/26', valid: '16-OCT 1730Z 〜 2230Z', text: '<b>RWY 17L/35R 閉鎖</b>。横断は <b>TWY P6・P5・P3・P2</b> 経由' },
    { no: 'F4329/26', valid: '16-OCT 1730Z 〜 2230Z', text: 'TWY <b>P1・P4（D〜B 間）</b>閉鎖。TWY <b>A（B8〜P1 間）</b>と P1 の交差点閉鎖（A の横断は P6・P5・P3・P2 経由）' },
    { no: 'F4330/26', valid: '16-OCT 1800Z 〜 2230Z', text: 'TWY <b>L22</b>（横断は W1・W6 経由）、<b>L25・L25A・L26・L26A</b> 閉鎖' }
  ], refs: [{ label: 'LID（F3193/26）', jump: 'F3193/26' }, { label: 'ZSPD Diversion Info', main: 'DIVERSION' }] },

{ no: 'ZSSS 滑走路・誘導路の閉鎖（16〜19-OCT 夜）', sec: 'ZSSS', pri: 'high', cat: ['滑走路・誘導路', '代替空港'], legs: ['KZ227'],
  title: 'ZSSS（代替）：RWY 18L/36R 閉鎖＋誘導路の広範囲閉鎖（16〜19-OCT、毎日 1700–2200Z）',
  issued: '15-OCT-2026 15:13', valid: '16-OCT-2026 17:00Z 〜 19-OCT-2026 22:00Z（毎日 1700–2200Z）',
  orig: 'F4338/26: "FLW TWY CLSD:\n1.TWY A2,A3,A4,B1,B2,B3,B4,B5,B6,B7,B8,T6,K2,K4,K5,K6,K7.\n2.TWY A,B CLSD BTN TWY H4 AND TWY H7.\n3.TWY H2,H3,H5,H6 CLSD BTN RWY18R/36L AND TWY B.\n4.TWY A BTN TWY A2 AND TWY H4.\n5.TWY B BTN TWY H1 AND TWY H4.\n6.TWY H1 BTN RWY18L/36R AND RWY18R/36L." 1700-2200\nF4336/26: "RWY18L/36R CLSD,ACFT SHALL CROSS RWY18L/36R VIA TWY H4,H7." 1700-2200',
  ja: '<b>RWY 18L/36R が閉鎖</b>（横断は <b>TWY H4・H7</b> 経由）。あわせて誘導路が広範囲に閉鎖（往路の F4290/26 と同じ範囲が、<b>16〜19-OCT の毎日 1700–2200Z</b> に再度設定された）：A2〜A4、B1〜B8、T6、K2・K4〜K7、A・B（H4〜H7）、H2・H3・H5・H6、A（A2〜H4）、B（H1〜H4）、H1。',
  perf: '', nav: '', ops: '<b>本便の代替（ZSSS）への到着は、ZSPD の ETA 1633Z 以降（約 1700Z 以降）になる見込み＝閉鎖時間帯（1700–2200Z）に入る</b>。<b>使える滑走路は 18R/36L のみ</b>で、着陸後の高速離脱路（B4・A3・B3・A2）などの誘導路も閉鎖。代替の計画では、<b>滑走路・スポットまでのタキシールートの制約</b>を確認。［要確認：18R/36L の ILS・最低気象、スポット］',
  rows: [
    { no: 'F4336/26', valid: '16〜19-OCT 毎日 1700–2200Z', text: '<b>RWY 18L/36R 閉鎖</b>。横断は <b>TWY H4・H7</b> 経由' },
    { no: 'F4338/26', valid: '16〜19-OCT 毎日 1700–2200Z', text: 'TWY A2〜A4、B1〜B8、T6、K2・K4〜K7、A・B（H4〜H7）、H2・H3・H5・H6（18R/36L〜B）、A（A2〜H4）、B（H1〜H4）、H1（18L/36R〜18R/36L）閉鎖' }
  ], refs: [{ label: '着陸後 50 秒以内の離脱・高速離脱路（F4301/26）', jump: 'F4301/26' }, { label: 'ZSSS Diversion Info', main: 'DIVERSION' }] },

{ no: 'Z0786/26', sec: 'RKRR', pri: 'low', cat: ['流量規制・CDR・トラック'], legs: ['KZ227'],
  title: '韓国：条件付き経路（CDR2）の開放（16-OCT 2100Z〜17-OCT）',
  issued: '16-OCT-2026 09:44（改訂 09:56）', valid: '16-OCT-2026 21:00Z 〜 17-OCT-2026 21:00Z',
  orig: '"CONDITIONAL ROUTE(CDR2) AVBL AS FLW, NEW\nNR ROUTE TIME FM TIME TO LOWER LVL UPPER LVL\n1 MASTA-UPGOS 10162100 10162230 6,000FT AMSL FL600 / 10170000 10171200 / 10171330 10171945\n2 RUGMA-ANROD 10162100 10172100 11,000FT AMSL FL600\n3 BOPTA-PONIK 10162100 10170300 FL150 FL600 / 10170700 10172100\n4 KARBU-LANAT 10162145 10170845 FL150 FL600 / 10171145 10171845"',
  ja: '<b>韓国 FIR の条件付き経路（CDR2）</b>。16 日 2100Z 以降・17 日の時間帯が設定された（<b>MASTA–UPGOS、RUGMA–ANROD、BOPTA–PONIK、KARBU–LANAT</b>）。',
  perf: '', nav: '', ops: '本便の飛行時間帯（1320〜1633Z）は、<b>Z0765/26（1300〜2100Z）</b>のほうが該当。この NOTAM（2100Z〜）は後続。', refs: [{ label: '本便の時間帯に該当：Z0765/26', jump: 'Z0765/26' }] },

{ no: 'Z0785/26', sec: 'RKRR', pri: 'mid', cat: ['空域・軍事', '韓国FIR'], legs: ['KZ227'],
  title: '韓国：原子力発電所上空の臨時飛行禁止区域（AIP SUP 72/26）の内容変更',
  issued: '16-OCT-2026 09:44', valid: '16-OCT-2026 09:25Z 〜 11-NOV-2026 15:00Z',
  orig: '"THE CONTENTS CONCERNING THE TEMPORARY PROHIBITED AREAS ESTABLISHED OVER THE NUCLEAR POWER PLANTS IN AIP SUP 72/26 ARE CHANGED AS FLW:\n4. REMARKS\n(1) CONTROL UNIT\n- \'A\' AREA: MCRC\n- \'B\' AREA: MOLIT\n(2) EXCEPTIONS\n-\'A\' AREA: ROKAF OPERATION ACFT\n-\'B\' AREA: SKED AND NON SKED CIVIL AIRLINES, AUTHORIZED BY ATC, OTHER ACFT AUTHORIZED BY MOLIT, LIFE GUARD, POLICE, SAR, MILITARY OPERATION FLIGHT AND FIRE FIGHTING ACFT\n(3) THE TEMPORARY PROHIBITED AREAS ARE SHOWN IN THE BELOW DIAGRAMS.\n(4) ANY CHANGE TO THE CONTENTS OF THESE PAGES WILL BE NOTIFIED BY NOTAM."',
  ja: '<b>原子力発電所上空の臨時飛行禁止区域</b>（AIP SUP 72/26）の内容が変更された。<b>管制部署：A 区域＝MCRC（空軍管制）、B 区域＝MOLIT（国土交通部）</b>。<b>例外：A 区域は ROKAF の運用機のみ。B 区域は、ATC の許可を受けた定期・不定期の民間航空会社機、MOLIT が許可した航空機、救命・警察・SAR・軍用・消防機</b>。区域は添付の図に示される。',
  perf: '', nav: '', ops: '<b>B 区域は、ATC の許可を受けた民間定期便は通過できるが、A 区域は ROKAF の運用機のみ</b>。経路が区域に近い場合は、図で位置を確認し、ATC の指示に従う。［要確認：図（AIP SUP 72/26）の区域と、本便の経路との関係］', refs: [{ label: 'AIP Korea SUP 72/26' }] }
);

/* ── KZ227 の位置図 ── */
(function () {
  var rjaa = NOTAM_MAP;  /* RJAA チャート */
  rjaa.items.push({ n: 14, type: 'light', label: 'TWY A（A1〜A2 間）センターライン灯 使用不可（工事）16-OCT 2000Z〜', ids: 'A1552/26', cards: ['A1552/26'], shapes: [{ k: 'polyline', pts: [[752, 620], [768, 536]], w: 14 }, { k: 'ellipse', c: [760, 578], rx: 36, ry: 60, rot: 0 }], tag: [850, 560], chart: rjaa });
  /* ZSPD 西側チャート：17L/35R、P1・P4・A、L22・L25・L26 */
  ZSPD_W.items.push(
    { n: 3, type: 'closed', label: 'RWY 17L/35R 閉鎖（横断は P6・P5・P3・P2 経由）16-OCT 1730–2230Z', ids: 'F4328/26', cards: ['ZSPD 滑走路・誘導路の閉鎖（16-OCT 夜）'], shapes: [{ k: 'line', pts: [[415, 283], [885, 1720]], w: 24 }], tag: [650, 990], chart: ZSPD_W },
    { n: 4, type: 'closed', label: 'TWY P1・P4（D〜B 間）、TWY A（B8〜P1 間）閉鎖 16-OCT 1730–2230Z', ids: 'F4329/26', cards: ['ZSPD 滑走路・誘導路の閉鎖（16-OCT 夜）'], shapes: [{ k: 'ellipse', c: [520, 893], rx: 140, ry: 55, rot: 0 }, { k: 'ellipse', c: [780, 1652], rx: 80, ry: 45, rot: 0 }], tag: [660, 800], chart: ZSPD_W },
    { n: 5, type: 'closed', label: 'TWY L22（横断は W1・W6 経由）、L25・L25A・L26・L26A 閉鎖 16-OCT 1800–2230Z', ids: 'F4330/26', cards: ['ZSPD 滑走路・誘導路の閉鎖（16-OCT 夜）'], shapes: [{ k: 'ellipse', c: [1150, 1215], rx: 160, ry: 95, rot: 0 }, { k: 'ellipse', c: [985, 1115], rx: 120, ry: 42, rot: 0 }], tag: [1150, 1100], chart: ZSPD_W }
  );
  /* ZSSS：F4338 は F4290 と同範囲 → カードを追加、F4336（RWY 18L/36R）を追加 */
  ZSSS_C.items.forEach(function (it) { if (it.cards.indexOf('F4290/26') >= 0) it.cards.push('ZSSS 滑走路・誘導路の閉鎖（16〜19-OCT 夜）'); });
  ZSSS_C.items.push({ n: 7, type: 'closed', label: 'RWY 18L/36R 閉鎖（横断は TWY H4・H7 経由）16〜19-OCT 毎日 1700–2200Z', ids: 'F4336/26', cards: ['ZSSS 滑走路・誘導路の閉鎖（16〜19-OCT 夜）'], shapes: [{ k: 'line', pts: [[787, 303], [850, 1720]], w: 24 }], tag: [880, 520], chart: ZSSS_C });
})();

/* 位置図の表示対象：選択中の便に有効な NOTAM の項目だけ */
function nmapVisible(it) {
  if (typeof ntLeg === 'undefined' || ntLeg === '全て') return true;
  return it.cards.some(function (c) { return NOTAMS.some(function (n) { return n.no === c && (n.legs || []).indexOf(ntLeg) >= 0; }); });
}
function nmapRender() {
  var host = document.getElementById('nt-map'); if (!host) return;
  var out = NOTAM_CHARTS.map(function (c) {
    var items = c.items.filter(nmapVisible);
    return items.length ? '<div class="nt-h">' + ntEsc(c.name) + '</div>' + nmapHtml(items, c) : '';
  }).join('');
  host.innerHTML = '<div class="nm-key"><span style="color:#ef4444">■ 閉鎖</span><span style="color:#f59e0b">■ 灯火不作動</span><span style="color:#fb923c">■ Non-Grooved Runway</span><span style="color:#38bdf8">■ その他</span></div>' + (out || '<div class="nt-empty">この便に位置図で示せる NOTAM はありません。</div>') +
    '<div class="nm-note">図に出せないもの：場所を持たない NOTAM（STAR・VOR・LID・ビジュアルアプローチ関連など）。各 NOTAM のカードを開くと、その NOTAM の位置だけを表示します。</div>';
}

/* カード名を、複数便の ID を含む名称に整理 */
NOTAMS.forEach(function (n) {
  if (n.no === 'Q2448/26・Q2449/26・Q2443/26') n.no = 'CDR 開放（Q2443・Q2448・Q2449・Q2453・Q2456・Q2465・Q2469・Q2470）';
  else if (n.no === 'Q2450/26・Q2452/26') n.no = 'PACOTS 東行きトラック（Q2450・Q2452・Q2461）';
  else if (n.no === 'P5048/26・P5039/26・P4921/26') n.no = '訓練空域の活動（P4921・P5039・P5048・P5063）';
});

ZSSS_C.items.forEach(function (it) { it.ids = it.ids.replace('F4290/26', 'F4338/26（＝往路の F4290/26 と同範囲）'); });
