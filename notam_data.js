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

{ no: 'NCA 00007/19', sec: 'General', pri: 'mid', cat: ['Company', 'GPS・航法'],
  title: 'GPS 衛星の運用状況（24 機以上が利用可能）',
  issued: '05-MAY-2019 06:10（改訂 15-OCT-2026 04:36）', valid: '20-JUN-2019 15:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nGPS CONSTELLATION AS FLW\n24 OR MORE GPS SATELLITES ARE AVBL\nEXPLANATION: RVSD AT 0435Z 15OCT2026',
  ja: '会社 NOTAM。GPS 衛星の配置状況は、<b>24 機以上の衛星が利用可能</b>（通常どおり）。15OCT2026 0435Z に改訂された。',
  perf: '',
  nav: '衛星数が 24 機以上ある通常状態の通知で、GPS を使う RNAV/RNP 運航の制限を示すものではない。衛星数が減った場合は同じ番号で文面が改訂される。［要確認：減ったときの運用上の扱いは AOR/AOM で確認］',
  ops: '毎フライトで改訂時刻を確認。GPS の異常（衛星不足・妨害）は、GPS Data Unreliable の NNC と MEL の GPS 項目を参照。',
  refs: [{ label: 'QRH：GPS Data Unreliable（Quick Reference 5）', go: 'qrh' }, { label: 'MEL：GPS', go: 'mel' }, { label: 'RAIM 予測（NCA 00078/25）', jump: 'NCA 00078/25' }] },

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
  ja: '工事のため RWY 16R/34L の<b>グルービングが部分的に消失</b>。OPT では次のとおり。<br>・離着陸とも <b>16RGRV／34LGRV／16RGRVNTM／34LGRVNTM は使用不可</b>。<br>・離陸の <b>16RA2GRVNTM は使用不可</b>。<b>16RA2 は非グルーブド扱いのため、16RA2GRV を選び、WET 性能は滑走路状態「WET NGRV」で計算</b>する。<br>・OPT 空港DB は NCA-AIRPORT-0026 以降に反映済み。i-SKY の選択可能な滑走路は 16R／34L（離着陸）と 16RA2NTM（離陸）。関連 NOTAM：A1179、A1205、A1275、A1306、A1388、A1483（いずれも /26）。',
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
  title: 'RAIM 欠測予測（IAP 用）：RNP 0.3／1.0、改訂から 48 時間有効',
  issued: '11-JUN-2025 08:13（改訂 15-OCT-2026 04:39）', valid: '12-JUN-2025 00:00Z 〜 UFN',
  orig: '///// COMPANY NOTAM /////\nRAIM OUTAGE PREDICTION FOR IAP AS FLW\n(RNP VALUE 0.3, 1.0, VALID 48H FM RVSD TIME)\n0.3 FOR FINAL APPROACH SEGMENT IN RNAV/RNP APCH\n1.0 OTHER THAN FINAL APPROACH SEGMENT IN IAP\nJAPAN KOREA THAILAND VIETNAM: REF GOVERMENT NOTAM\nVHHH: 0.3/15-10-2026 15:46:30 UTC - 15-10-2026 15:53:30 UTC   1.0/NIL\nRCKH: 0.3/NIL 1.0/NIL\nRCTP: 0.3/NIL 1.0/NIL\nWSSS: 0.3/NIL 1.0/NIL\nWSAP: 0.3/NIL 1.0/NIL\nWMKK: 0.3/NIL 1.0/NIL\nWMKP: 0.3/NIL 1.0/NIL\nZSPD: 0.3/NIL 1.0/NIL\nZSSS: 0.3/NIL 1.0/NIL\nZSHC: 0.3/NIL 1.0/NIL\nZGSZ: 0.3/15-10-2026 15:46:30 UTC - 15-10-2026 15:54:30 UTC   1.0/NIL\nZGGG: NOT SUITABLE AS ALTN\nRPLL: 0.3/NIL 1.0/NIL',
  ja: '計器進入方式（IAP）の<b>RAIM（GPS の完全性監視）が成立しない時間帯の予測</b>。改訂時刻から <b>48 時間有効</b>。<b>RNP 0.3</b>は RNAV/RNP 進入の最終進入区間、<b>RNP 1.0</b>は最終進入区間以外。<br>今回：<b>VHHH の RNP 0.3 が 15-OCT 15:46:30〜15:53:30Z</b>、<b>ZGSZ の RNP 0.3 が 15:46:30〜15:54:30Z</b> に欠測。他空港（RCKH、RCTP、WSSS、WSAP、WMKK、WMKP、ZSPD、ZSSS、ZSHC、RPLL）は NIL（欠測なし）。日本・韓国・タイ・ベトナムは各国政府の NOTAM を参照。<b>ZGGG は代替に不適</b>。',
  perf: '', nav: '<b>RNAV(GNSS)／RNP 進入の使用可否</b>に直結。到着時刻が欠測の時間帯と重なる空港では、<b>その進入方式は使えない</b>ため、別の進入方式（ILS 等）の準備が必要。',
  ops: '目的地・代替の ETA が欠測時間帯に入っていないか確認。この便（ZSPD ETA 04:46Z、ZSSS 代替）は両方 NIL で影響なし。',
  refs: [{ label: 'QRH：GPS Data Unreliable', go: 'qrh' }, { label: '会社 NOTAM：GPS 衛星状況（NCA 00007/19）', jump: 'NCA 00007/19' }, { label: 'AOM：RAIM 予測［要確認：該当章は未特定］' }] },

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
    { n: 3, type: 'groove', label: '16R THR 付近：グルービング消失（229〜296m）', ids: 'A1275・A1205・A1179', cards: ['RJAA グルービング一部消失（6件）', 'NCA 00202/26'], shape: { k: 'ellipse', c: [212, 726], rx: 26, ry: 40, rot: -30 }, tag: [300, 700] },
    { n: 4, type: 'groove', label: '34L THR 付近：グルービング消失（14〜49m）', ids: 'A1306・A1388', cards: ['RJAA グルービング一部消失（6件）', 'NCA 00202/26'], shape: { k: 'ellipse', c: [872, 1862], rx: 24, ry: 36, rot: -30 }, tag: [800, 1830] },
    { n: 5, type: 'groove', label: '34L 滑走路中間：グルービング消失（THRから約1,665〜1,681m）', ids: 'A1483/26（新規）', cards: ['RJAA グルービング一部消失（6件）', 'NCA 00202/26'], shape: { k: 'ellipse', c: [581, 1363], rx: 24, ry: 36, rot: -30 }, tag: [500, 1400] },
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
    '<div class="nm-note">位置は EFB の Airport Chart（North Up）のラベルから読み取った<b>概略</b>。範囲・縮尺は目安です（グルービング消失は実際は幅数 m のため強調表示）。</div></div></div>';
}
function nmapRender() {
  var host = document.getElementById('nt-map'); if (!host) return;
  host.innerHTML = '<div class="nm-key"><span style="color:#ef4444">■ 閉鎖</span><span style="color:#f59e0b">■ 灯火不作動</span><span style="color:#fb923c">■ グルービング消失</span><span style="color:#38bdf8">■ その他</span></div>' +
    NOTAM_CHARTS.map(function (c) { return '<div class="nt-h">' + ntEsc(c.name) + '</div>' + nmapHtml(c.items, c); }).join('') +
    '<div class="nm-note">図に出せないもの：RJAA A1193/26（滑走路誤進入警報の停止）、ZSPD・ZSSS の STAR・VOR・LID・ビジュアルアプローチ関連。各 NOTAM のカードを開くと、その NOTAM の位置だけを表示します。</div>';
}
