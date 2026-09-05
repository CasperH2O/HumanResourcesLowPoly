const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gameStartup-BfQ-Gba0.js","assets/loop-CCaCSFt0.js","assets/three.core-BnugWimV.js","assets/toon-DLatBX7x.js","assets/SkeletonUtils-CHxfGqZJ.js","assets/saveStore-B-t7hrW3.js"])))=>i.map(i=>d[i]);
import{i as e,n as t}from"./loop-CCaCSFt0.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function n(e,t,n){if(!(t>0)||n<=0||e<=0)return 0;if(e>=t)return n;let r=Math.floor(e/t*n);return Math.min(Math.max(r,1),n-1)}function r(e){let t=Math.floor(e/30),n=Math.floor(t/60),r=t%60;return`${n}:${String(r).padStart(2,`0`)}`}function i(t){let{segments:n,pipsPerSegment:r}=e,i=[];for(let e=0;e<n;e++){let n=t-e*r;i.push({pips:r,filled:Math.min(Math.max(Math.floor(n),0),r),accent:e>0})}return i}function a({world:a,selected:o,banner:s}){let c=t[a.playerFaction],{humans:l,humansCap:u,charge:d,chargeCap:f}=a.resources,p=o>0;return{faction:c.id,factionName:c.name,humans:{value:l,cap:u,trough:{pips:e.humansPips,filled:n(l,u,e.humansPips),accent:!1}},meter:{label:c.meterLabel,value:d,cap:f,segmentsReady:a.resources.segmentsReady,troughs:i(d),dividerLit:d>e.pipsPerSegment},clock:r(a.tick),alert:a.army.units.some(e=>e.attackCooldown>0),selected:o,commands:[{id:`primary`,label:c.primaryOrder,enabled:c.id===`machines`&&p},{id:`regroup`,label:`Regroup — unresolved reading`,enabled:!1},{id:`scatter`,label:`Scatter — unresolved reading`,enabled:!1},{id:`cancel`,label:`Stop`,enabled:p}],banner:s}}var o={machines:{line:`#70e3bd`,chrome:`#25ae8a`,plate:`#3e6354`,onPlate:`#70e3bd`,pipOn:`#a2f1ab`,pipGap:`#0a5913`,pipOff:`#9e9da2`,pipOffGap:`#4c4d52`,accent:`#ffb020`,label:`#f2fff6`,warn:`#e6483d`,go:`#7fe3b0`,font:`"Eurostile", "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif`,primaryIcon:{width:24,height:24,inner:`<rect x="9" y="4" width="6" height="11" fill="#ffffff"/>
      <rect x="5" y="17" width="14" height="1.8" fill="#ffffff"/>
      <path d="M2 12 L6 8.5 V15.5 Z" fill="var(--line)"/>
      <path d="M22 12 L18 8.5 V15.5 Z" fill="var(--line)"/>`},band:`rgba(61, 61, 61, 0.86)`,onBand:`#f2fff6`,railPx:2,divider:`rgba(255, 255, 255, 0.45)`,chamferPx:22,radius:`0`,outline:null,cap:{width:92,height:52,inner:`<g fill="none" stroke="var(--line)" stroke-width="1.7" stroke-linejoin="miter">
        <path d="M92 3 H58 L40 21 H16 L6 31"/>
        <path d="M92 10 H55 L38 27 H24"/>
        <path d="M92 38 H64 L54 48 H12"/>
        <rect x="44" y="31" width="9" height="7"/>
      </g>
      <g fill="none" stroke="var(--line)" stroke-width="2">
        <path d="M92 6 L70 30"/>
        <path d="M92 13 L74 33"/>
        <path d="M92 20 L78 36"/>
      </g>`},badge:{width:24,height:24,inner:`<path d="M9 5 L18 12 L9 19 Z" fill="var(--line)"/>`}},ancients:{line:`#e0c583`,chrome:`#c0a468`,plate:`#d7c193`,onPlate:`#5a3e25`,pipOn:`#ecff81`,pipGap:`#485a00`,pipOff:`#9e9da2`,pipOffGap:`#4c4d52`,accent:`#ffa600`,label:`#f6f07a`,warn:`#e2564a`,go:`#dbf25c`,font:`Georgia, "Times New Roman", serif`,primaryIcon:{width:24,height:24,inner:`<path d="M6 4 H16 L18 6 V19 H8 L6 17 Z" fill="#ffffff" stroke="var(--outline)"
        stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M5.5 16.5 L18.5 7.5" stroke="#ffffff" stroke-width="3.4" stroke-linecap="round"/>
      <path d="M5.5 16.5 L18.5 7.5" stroke="var(--outline)" stroke-width="1"
        stroke-linecap="round" opacity="0.55"/>`},band:`rgba(146, 146, 146, 0.88)`,onBand:`#f6f07a`,railPx:5,divider:`rgba(60, 42, 26, 0.7)`,chamferPx:0,radius:`5px`,outline:`#5a3e25`,cap:{width:104,height:56,inner:`<path d="M104 40 H34" stroke="var(--line)" stroke-width="6" stroke-linecap="round"
        fill="none"/>
      <g fill="var(--line)" stroke="var(--outline)" stroke-width="2" stroke-linejoin="round">
        <path d="M104 1 C70 1 46 8 30 21 C17 32 15 43 23 48 C30 53 41 52 46 46
                 C36 49 27 45 28 36 C30 24 55 13 104 21 Z"/>
        <path d="M62 11 C45 20 34 31 38 40 C28 33 33 20 52 8 Z"/>
        <ellipse cx="78" cy="40" rx="8" ry="6"/>
      </g>`},badge:{width:30,height:30,inner:`<g fill="none" stroke="var(--outline)" stroke-width="1.8" stroke-linecap="round">
        <path d="M6 9 C3 6 5 2 8 3 C11 4 10 8 7 8"/>
        <path d="M24 21 C27 24 25 28 22 27 C19 26 20 22 23 22"/>
      </g>
      <path d="M15 6 L23 13 L15 24 L7 13 Z" fill="#f0f070" stroke="var(--outline)"
        stroke-width="1.6"/>`}}},s={machines:[`Humans in, Progress out. We don't do feelings, we do throughput.`,`Collect. Convert. Repeat. It's not cruelty, it's an assembly line.`,`No detours, no snacking. Just humans on a conveyor belt to somewhere worse.`,`Efficiency is a love language.`],ancients:[`Chant a little, eat a lot.`,`Every summoning circle doubles as a dinner table.`,`The stars aligned. So did our appetite.`,`Insanity is a side effect. Also the main course.`]};function c(e){let t=s[e];return t[Math.floor(Math.random()*t.length)]}var l={machines:`ENERGY`,ancients:`INSANITY`},u=class{root;starting=!1;constructor(e,t){_(),this.root=d(`div`,`menu`),this.root.append(h());let n=d(`div`,`menu-panel`),r=document.createElement(`h1`);r.className=`menu-title`,r.innerHTML=`HUMAN<br>RESOURCES`,n.append(r);let i=d(`div`,`menu-tagline`);i.append(d(`span`,`menu-rule`));let a=d(`span`,``);a.textContent=`Choose your apocalypse`,i.append(a),n.append(i);let o=d(`div`,`menu-columns`),s=d(`div`,`menu-cards`);for(let e of[`machines`,`ancients`])s.append(this.buildCard(e,t.onStart,t.onRuntimeIntent));o.append(s),o.append(this.buildActions(t)),n.append(o),this.root.append(n),e.append(this.root)}buildCard(e,n,r){let i=t[e],a=o[e],s=document.createElement(`button`);s.type=`button`,s.className=`menu-card`,s.dataset.faction=e,s.style.setProperty(`--card-line`,a.line),s.style.setProperty(`--card-font`,a.font),s.style.setProperty(`--card-pip-on`,a.pipOn),s.style.setProperty(`--card-pip-gap`,a.pipGap),s.style.setProperty(`--card-pip-off`,a.pipOff),s.style.setProperty(`--card-accent`,a.accent),e===`ancients`?(s.style.setProperty(`--card-fill`,a.plate),s.style.setProperty(`--card-ink`,`#4a3520`),s.style.setProperty(`--card-body`,`#20180e`),s.style.setProperty(`--card-label`,`#2f2214`)):(s.style.setProperty(`--card-fill`,`rgba(20, 26, 24, 0.55)`),s.style.setProperty(`--card-ink`,`#f2fff6`),s.style.setProperty(`--card-body`,`#dff3ea`),s.style.setProperty(`--card-label`,a.line));let u=d(`div`,`menu-card-head`),f=d(`div`,`menu-card-name`);f.textContent=i.name,u.append(f,m(e)),s.append(u);let h=d(`div`,`menu-card-meter`),g=d(`span`,`menu-card-meter-label`);g.textContent=l[e],h.append(g,p(8,e===`ancients`?6:5,e===`ancients`?2:0)),s.append(h);let _=d(`div`,`menu-card-copy`);return _.textContent=c(e),s.append(_),s.addEventListener(`click`,()=>{if(!this.starting){this.starting=!0,this.root.classList.add(`menu--starting`);for(let e of this.root.querySelectorAll(`button`))e.disabled=!0;s.classList.add(`menu-card--launching`),n(e)}}),s.addEventListener(`pointerenter`,()=>r?.(),{once:!0}),s.addEventListener(`focus`,()=>r?.(),{once:!0}),s.addEventListener(`touchstart`,()=>r?.(),{once:!0,passive:!0}),s}buildActions(e){let n=d(`nav`,`menu-actions`);if(e.saved){let r=t[e.saved.faction];n.append(f(`Resume`,`${r.name} · ${e.saved.clock}`,e.onResume))}let r=e.slotCount??0;if(r>0&&n.append(f(`Select save`,r===1?`1 slot`:`${r} slots`,e.onSelectSave)),n.append(f(`Settings`,``,e.onSettings)),e.onExit&&n.append(f(`Exit`,``,e.onExit,`quiet`)),!e.saved&&r===0){let e=d(`div`,`menu-note`);e.textContent=`No saved match`,n.prepend(e)}return n}dispose(){this.root.remove()}resumeAfterStartFailure(){this.starting=!1,this.root.classList.remove(`menu--starting`);for(let e of this.root.querySelectorAll(`button`))e.disabled=!1;this.root.querySelector(`.menu-card--launching`)?.classList.remove(`menu-card--launching`)}};function d(e,t){let n=document.createElement(e);return n.className=t,n}function f(e,t,n,r=``){let i=document.createElement(`button`);i.type=`button`,i.className=r?`menu-action ${r}`:`menu-action`;let a=d(`span`,`menu-action-label`);a.textContent=e;let o=d(`span`,`menu-action-meta`);return o.textContent=t,i.append(a,o),i.addEventListener(`click`,n),i}function p(e,t,n){let r=d(`div`,`menu-trough`);for(let i=0;i<e;i++){let e=d(`i`,`menu-pip`);i<t&&e.classList.add(n>0&&i>=t-n?`accent`:`on`),r.append(e)}return r}function m(e){let t=o[e],n=t.cap,r=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);return r.setAttribute(`viewBox`,`0 0 ${n.width} ${n.height}`),r.setAttribute(`width`,e===`ancients`?`78`:`92`),r.setAttribute(`height`,e===`ancients`?`42`:`52`),r.classList.add(`menu-card-cap`),r.style.setProperty(`--line`,t.line),r.style.setProperty(`--outline`,t.outline??t.line),r.innerHTML=n.inner,r}function h(){let e=[34,52,41,68,47,82,58,39,71,50,88,44,63,36,76,55,42,66,48,80],t=100/e.length,n=e.map((e,n)=>`<rect x="${n*t}" y="${100-e}" width="${t+.3}" height="${e}"/>`).join(``),r=d(`div`,`menu-skyline`);return r.innerHTML=`<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <g fill="#050302">${n}</g>
  </svg>`,r}var g=!1;function _(){if(g)return;g=!0;let e=document.createElement(`style`);e.textContent=v,document.head.append(e)}var v=`
.menu, .fe {
  position: fixed;
  inset: 0;
  z-index: 40;
  overflow-x: hidden;
  /* Near-black. The ember wash is contained at the horizon; see the class comment in menu.ts. */
  background: #080604;
  font-family: "Bahnschrift", "DIN Alternate", "Arial Narrow", system-ui, sans-serif;
  color: #fffdf7;
}
.menu::after, .fe::after {
  content: "";
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 32%;
  pointer-events: none;
  background: linear-gradient(to top, rgba(209, 76, 9, 0.4), rgba(138, 44, 4, 0.16) 42%, transparent);
}

.menu-skyline { position: absolute; left: -2%; right: -2%; bottom: 0; height: 19%; opacity: 0.95; }
.menu-skyline svg { display: block; width: 100%; height: 100%; }

.menu-panel {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 26px;
  min-height: 100%;
  padding: clamp(40px, 8vh, 96px) clamp(32px, 7.8vw, 150px);
  box-sizing: border-box;
}

/*
 * The extrude, faked with stacked shadows.
 *
 * frame_0350 offsets the orange body down and to the LEFT of each white face and takes it a long
 * way — the depth is about a third of the cap height, not a drop shadow. Twelve steps rather than
 * eight, because at this size the shorter stack banded visibly.
 */
.menu-title {
  margin: 0;
  font-size: clamp(52px, 8.8vw, 168px);
  font-weight: 900;
  line-height: 0.84;
  letter-spacing: -0.005em;
  color: #fffdf7;
  text-shadow:
    -3px 3px 0 #f2600f, -6px 6px 0 #ee5d0e, -9px 9px 0 #e9590d, -12px 12px 0 #e2550c,
    -15px 15px 0 #d94f0b, -18px 18px 0 #cd4909, -21px 21px 0 #c04208, -24px 24px 0 #b13b07,
    -27px 27px 0 #a03406, -30px 30px 0 #8f2d05, -33px 33px 0 #7c2504, -36px 36px 0 #691e03,
    -40px 44px 40px rgba(0, 0, 0, 0.85);
}
.menu-tagline { display: flex; align-items: center; gap: 16px; font-size: clamp(13px, 1.3vw, 24px); letter-spacing: 0.42em; text-transform: uppercase; color: #ffcf9a; }
.menu-rule { width: 52px; height: 2px; background: #f2600f; }

.menu-columns { display: flex; gap: 40px; align-items: flex-start; justify-content: space-between; flex-wrap: wrap; margin-top: auto; }
.menu-cards { display: flex; gap: 26px; flex-wrap: wrap; }

.menu-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 520px;
  max-width: 100%;
  padding: 26px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: left;
  font-family: var(--card-font);
  color: var(--card-body);
  background: var(--card-fill);
  border: 2px solid var(--card-line);
  transition: transform 110ms ease, background 110ms ease;
}
.menu-card[data-faction="machines"] {
  /* Chamfered opposite corners — straight lines and 45° steps, as the Machine ornament is. */
  clip-path: polygon(0 0, calc(100% - 26px) 0, 100% 26px, 100% 100%, 26px 100%, 0 calc(100% - 26px));
}
.menu-card[data-faction="ancients"] { border-width: 5px; border-radius: 20px; }
.menu-card:hover, .menu-card:focus-visible { transform: translateY(-3px); outline: none; }
.menu--starting .menu-card { cursor: progress; }
.menu-card--launching { transform: translateY(-3px) scale(0.985); box-shadow: 0 0 0 4px rgba(255, 189, 82, 0.35), 0 0 36px rgba(242, 96, 15, 0.55); }
.menu-card:disabled, .menu-action:disabled { opacity: .72; }
.menu-card[data-faction="machines"]:hover { background: rgba(37, 174, 138, 0.22); }
.menu-card[data-faction="ancients"]:hover { background: #e6d3a8; }

.menu-card-head { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.menu-card-name {
  font-size: 52px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.06em;
  color: var(--card-ink);
  /* Nowrap because "Ancient Ones" is a two-word serif name and breaking it mid-name next to a
     one-word MACHINES made the pair read as different sizes. */
  white-space: nowrap;
}
.menu-card[data-faction="ancients"] .menu-card-name { font-weight: 700; letter-spacing: 0.02em; }
.menu-card-cap { flex: none; display: block; }
.menu-card[data-faction="ancients"] .menu-card-cap { transform: scaleX(-1); }

.menu-card-meter { display: flex; align-items: center; gap: 12px; }
.menu-card-meter-label { font-size: 17px; letter-spacing: 0.18em; color: var(--card-label); }
.menu-trough { display: flex; gap: 4px; padding: 2px 3px; background: var(--card-pip-gap); border: 1px solid rgba(255, 255, 255, 0.42); }
.menu-pip { width: 5px; height: 15px; background: var(--card-pip-off); }
.menu-pip.on { background: var(--card-pip-on); }
.menu-pip.accent { background: var(--card-accent); }

.menu-card-copy { font-size: 19px; line-height: 1.5; text-wrap: pretty; }

.menu-actions { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; min-width: 360px; }
.menu-action {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 14px;
  width: 100%;
  padding: 11px 0;
  cursor: pointer;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 189, 82, 0.28);
  font-family: inherit;
  font-size: clamp(18px, 1.6vw, 30px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fffdf7;
}
.menu-action:hover, .menu-action:focus-visible { color: #ffbd52; outline: none; }
.menu-action.quiet { border-bottom: none; color: rgba(255, 253, 247, 0.5); }
.menu-action.quiet:hover { color: #e6483d; }
.menu-action-meta { min-width: 150px; text-align: left; font-size: 15px; letter-spacing: 0.06em; color: rgba(255, 207, 154, 0.6); }
.menu-note { font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255, 226, 195, 0.6); }

/*
 * The page document cannot scroll while a game is mounted, so the title screen must be its own
 * scroll container.  This also keeps keyboard focus reachable when a short viewport puts the
 * actions below the faction cards.
 */
.menu { overflow-y: auto; overscroll-behavior: contain; }

@media (max-width: 1180px) {
  .menu-panel { padding-inline: clamp(24px, 5vw, 64px); }
  .menu-columns { gap: 28px; }
  .menu-card { width: min(460px, calc(50vw - 52px)); }
  .menu-actions { min-width: min(360px, 100%); }
}

@media (max-width: 760px) {
  .menu-panel { gap: 20px; padding: 28px 20px 36px; }
  .menu-title { font-size: clamp(42px, 15vw, 82px); }
  .menu-tagline { gap: 10px; font-size: 12px; letter-spacing: 0.22em; }
  .menu-rule { width: 32px; }
  .menu-columns, .menu-cards { width: 100%; }
  .menu-columns { gap: 24px; margin-top: 12px; }
  .menu-cards { gap: 16px; }
  .menu-card { width: 100%; padding: 20px; gap: 11px; }
  .menu-card-name { font-size: clamp(28px, 8vw, 42px); }
  .menu-card-cap { width: 58px; height: auto; }
  .menu-card[data-faction="ancients"] .menu-card-cap { width: 52px; }
  .menu-card-copy { font-size: 16px; }
  .menu-card-meter-label { font-size: 14px; }
  .menu-actions { align-items: stretch; min-width: 0; }
  .menu-action { justify-content: space-between; font-size: 18px; }
  .menu-action-meta { min-width: 0; text-align: right; font-size: 13px; }
}
`,y=class{root;cover;detail;failure;currentState=`covering`;harbingerState;onRecover;constructor(e,t){x(),this.onRecover=t.onRecover,this.root=document.createElement(`section`),this.root.className=`game-start-transition`,this.root.dataset.state=this.currentState,this.root.setAttribute(`aria-live`,`polite`),this.cover=document.createElement(`div`),this.cover.className=`game-start-transition-cover`,this.cover.setAttribute(`role`,`status`),this.cover.setAttribute(`aria-busy`,`true`);let n=document.createElement(`p`);n.className=`game-start-transition-eyebrow`,n.textContent=t.faction===`ancients`?`THE RITUAL BEGINS`:t.faction===`machines`?`ASSEMBLY LINE ENGAGED`:`RESTORING OPERATION`;let r=document.createElement(`h2`);r.textContent=t.faction===`ancients`?`SUMMONING THE ANCIENTS`:t.faction===`machines`?`DEPLOYING THE MACHINES`:`PREPARING BATTLEFIELD`,this.cover.append(n,r),this.detail=document.createElement(`aside`),this.detail.className=`game-start-transition-detail`,this.detail.textContent=`COMMANDER DETAIL LOADING`,this.detail.hidden=!0,this.failure=document.createElement(`div`),this.failure.className=`game-start-transition-failure`,this.failure.hidden=!0,this.failure.setAttribute(`role`,`alertdialog`),this.failure.setAttribute(`aria-label`,`Unable to start match`);let i=document.createElement(`strong`);i.textContent=`UNABLE TO START BATTLE`;let a=document.createElement(`p`);a.textContent=`The renderer became unavailable. You can safely return to the title screen and try again.`;let o=document.createElement(`button`);o.type=`button`,o.textContent=`Return to title`,o.addEventListener(`click`,()=>this.onRecover()),this.failure.append(i,a,o),this.root.append(this.cover,this.detail,this.failure),e.append(this.root)}get state(){return this.currentState}setOnRecover(e){this.onRecover=e}firstFrameSubmitted(){this.currentState===`covering`&&(this.cover.remove(),this.currentState=`awaitingHarbinger`,this.root.dataset.state=this.currentState,this.applyHarbingerState())}harbingerSettled(e){this.currentState!==`disposed`&&this.currentState!==`failed`&&(this.harbingerState=e,this.applyHarbingerState())}fail(){this.currentState!==`disposed`&&this.currentState!==`failed`&&(this.cover.remove(),this.detail.hidden=!0,this.failure.hidden=!1,this.currentState=`failed`,this.root.dataset.state=this.currentState,this.failure.querySelector(`button`)?.focus())}dispose(){this.currentState!==`disposed`&&(this.currentState=`disposed`,this.root.remove())}applyHarbingerState(){if(this.currentState===`awaitingHarbinger`){if(this.harbingerState===`ready`){this.dispose();return}if(this.harbingerState===`failed`||this.harbingerState===`disposed`||this.harbingerState===void 0){this.detail.hidden=!1,this.detail.textContent=`COMMANDER DETAIL UNAVAILABLE · TACTICAL MARKER IN USE`;return}this.detail.hidden=!1}}},b=!1;function x(){if(b)return;b=!0;let e=document.createElement(`style`);e.textContent=`
.game-start-transition { position: fixed; inset: 0; z-index: 60; pointer-events: none; font-family: "Bahnschrift", "DIN Alternate", system-ui, sans-serif; }
.game-start-transition-cover { position: absolute; inset: 0; display: grid; align-content: center; justify-items: center; gap: 12px; padding: 32px; text-align: center; color: #fff8ed; background: radial-gradient(circle at 50% 115%, #8c2d08 0, #200d06 35%, #080604 72%); }
.game-start-transition-cover::after { content: ""; width: min(300px, 72vw); height: 3px; background: linear-gradient(90deg, transparent, #ffbd52, transparent); box-shadow: 0 0 22px #f2600f; }
.game-start-transition-eyebrow { margin: 0; color: #ffbd52; font-size: 12px; font-weight: 700; letter-spacing: .32em; }
.game-start-transition h2 { margin: 0; font-size: clamp(28px, 5vw, 64px); letter-spacing: .08em; }
.game-start-transition-detail { position: absolute; top: 18px; left: 50%; transform: translateX(-50%); padding: 8px 14px; color: #fff2d7; background: rgba(12, 8, 4, .9); border: 1px solid rgba(255, 189, 82, .65); font-size: 12px; font-weight: 700; letter-spacing: .12em; white-space: nowrap; }
.game-start-transition-failure { pointer-events: auto; position: absolute; inset: 0; display: grid; align-content: center; justify-items: center; gap: 14px; padding: 32px; text-align: center; color: #fff8ed; background: #160807; }
.game-start-transition-failure[hidden] { display: none; }
.game-start-transition-failure strong { color: #ffbd52; font-size: clamp(24px, 4vw, 46px); letter-spacing: .1em; }
.game-start-transition-failure p { max-width: 520px; margin: 0; color: #ffcf9a; }
.game-start-transition-failure button { padding: 10px 16px; cursor: pointer; color: #fff8ed; background: #72210c; border: 1px solid #ffbd52; font: inherit; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.game-start-transition-failure button:focus-visible { outline: 3px solid #fff8ed; outline-offset: 3px; }
`,document.head.append(e)}function S(e,t=1500){if(`requestIdleCallback`in window){let n=window.requestIdleCallback(e,{timeout:t});return()=>window.cancelIdleCallback(n)}let n=globalThis.setTimeout(e,0);return()=>globalThis.clearTimeout(n)}function C(){let e=document.getElementById(`overlay`),t=document.getElementById(`overlay-content`),n=document.getElementById(`overlay-toggle`),r=document.getElementById(`selectbox`);if(!e||!t||!(n instanceof HTMLButtonElement)||!r)throw Error(`overlay controls or #selectbox missing from the page shell`);return{overlayPanelEl:e,overlayEl:t,overlayToggleEl:n,boxEl:r}}function w(e){e.overlayToggleEl.addEventListener(`click`,()=>{let t=e.overlayPanelEl.classList.toggle(`minimized`);e.overlayToggleEl.textContent=t?`+`:`−`,e.overlayToggleEl.title=t?`Restore developer panel`:`Minimize developer panel`,e.overlayToggleEl.setAttribute(`aria-expanded`,String(!t))})}var T=`modulepreload`,E=function(e){return`/HumanResourcesLowPoly/`+e},D={},O=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=E(t,n),t=s(t),t in D)return;D[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:T,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};function k(){let e=new URLSearchParams(window.location.search).get(`faction`);return window.location.pathname.endsWith(`/battle.html`)||e===`machines`||e===`ancients`?`direct`:void 0}function A(){w(C());let e=k();if(e){O(async()=>{let{startGame:e}=await import(`./gameStartup-BfQ-Gba0.js`);return{startGame:e}},__vite__mapDeps([0,1,2,3,4,5])).then(({startGame:t})=>t(e)).catch(j);return}let t,n=()=>t??=O(()=>import(`./gameStartup-BfQ-Gba0.js`),__vite__mapDeps([0,1,2,3,4,5])),i=!1,a=()=>{i||(i=!0,n().then(({warmOpeningMatch:e})=>e()).catch(j))},o,s=!1,c=[],l=e=>{if(s)return;s=!0;for(let e of c)e();c=[];let t=e===`machines`||e===`ancients`?e:void 0,r=t?new y(document.body,{faction:t,onRecover:()=>{s=!1,r?.dispose(),o.resumeAfterStartFailure()}}):void 0;n().then(({startGame:t})=>{t(e,r),o.dispose()}).catch(e=>{s=!1,r?.dispose(),o.resumeAfterStartFailure(),j(e)})},d=(e,t=0)=>{o?.dispose(),o=new u(document.body,{...e?{saved:e}:{},slotCount:t,onStart:e=>l(e),onResume:()=>l(`resume`),onSelectSave:()=>l(`save-list`),onSettings:()=>l(`settings`),onRuntimeIntent:()=>a()})};d(),c.push(S(a)),c.push(S(()=>{O(async()=>{let{SaveStore:e}=await import(`./saveStore-B-t7hrW3.js`);return{SaveStore:e}},__vite__mapDeps([5,1])).then(async({SaveStore:e})=>{if(!e.available||s)return;let t=new e,[n,i]=await Promise.all([t.get(),t.list()]);s||d(n?{faction:n.envelope.playerFaction,tick:n.envelope.tick,clock:r(n.envelope.tick)}:void 0,i.length)}).catch(e=>console.error(`title save summary failed`,e))}))}function j(e){console.error(`application startup failed`,e)}A();export{u as a,r as c,v as i,C as n,o,y as r,a as s,O as t};