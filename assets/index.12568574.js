var me=Object.defineProperty,he=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var se=(e,r,n)=>r in e?me(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,E=(e,r)=>{for(var n in r||(r={}))oe.call(r,n)&&se(e,n,r[n]);if(V)for(var n of V(r))ie.call(r,n)&&se(e,n,r[n]);return e},N=(e,r)=>he(e,ge(r));var F=(e,r)=>{var n={};for(var o in e)oe.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&V)for(var o of V(e))r.indexOf(o)<0&&ie.call(e,o)&&(n[o]=e[o]);return n};import{R as P,r as l,j as t,c as ue,M as De,a as x,B as fe,b as G,d as xe,A as Ee,s as v,L as ee,N as re,e as W,f as Z,g as ye,h as Se,i as K,I as be,k as Ce,l as ve,m as ce,C as we,T as Le,n as $,o as Ne,p as te,q as pe,G as I,t as Te,u as X,v as ke,w as Ae,D as Ie,x as ze,y as Oe,z as Fe,E as $e,F as Be,H as Me,J as Pe,K as H,O as Re,P as _e,Q as Je,S as je,U as ae,V as Ge,W as He,X as qe,Y as Ue,Z as Ve,_ as We}from"./vendor.2b355312.js";const Ze=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerpolicy&&(d.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?d.credentials="include":i.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(i){if(i.ep)return;i.ep=!0;const d=n(i);fetch(i.href,d)}};Ze();const Y=P.createContext(void 0);function Ke(e){const[r,n]=l.exports.useState({}),d={openDrawer:(p,a,D="temporary",s)=>{n({open:p,anchor:a,permanent:D,child:s})},closeDrawer:(p,a,D="temporary",s)=>{n({open:p,anchor:a,permanent:D,child:s})}};return t(Y.Provider,{value:E(E({},r),d),children:e.children})}const q=P.createContext(void 0);function Ye(e){const[r,n]=l.exports.useState({main:{open:!1,color:"inherit"},circular:{open:!1,color:"inherit"}}),p={createLoader:(a,D)=>{r[a]&&n(N(E({},r),{[a]:void 0})),n(N(E({},r),{[a]:{open:!1,color:D||"inherit"}}))},openLoader:a=>{r[a]?n(N(E({},r),{[a]:N(E({},r[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{r[a]?n(N(E({},r),{[a]:N(E({},r[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return t(q.Provider,{value:E(E({},r),p),children:e.children})}const R=P.createContext(void 0);function Qe(e){const[r,n]=l.exports.useState({main:{open:!1,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),p={createBanner:(a,D,s,h)=>{r[a]&&n(N(E({},r),{[a]:void 0})),n(N(E({},r),{[a]:{open:!0,severity:D||"success",title:s||"",message:h||""}}))},openBanner:a=>{r[a]?n(N(E({},r),{[a]:N(E({},r[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{r[a]?n(N(E({},r),{[a]:N(E({},r[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return t(R.Provider,{value:E(E({},r),p),children:e.children})}const de=ue({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}});function Xe(){const[e]=l.exports.useState(de.palette.primary.main);return t("div",{className:"wrapper",children:t(De,{children:t("meta",{name:"theme-color",content:e})})})}const et=e=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));r.push(e),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},tt=e=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===e.toLowerCase()):!1,rt=()=>{let e=document.querySelector(".gsst_a");e&&e.dispatchEvent(new Event("click"))},nt=()=>{let e=!1;const r=navigator.userAgent;return/android/i.test(r)?e=!1:(/iPad|iPhone|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(e=!0),e};var A={lsSaveSong:et,lsGetSong:tt,clearGsc:rt,getMobileOS:nt};const Q=P.createContext(void 0);function st(e){const r=JSON.parse(localStorage.getItem("fontsize")),[n,o]=l.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27},colors:"pink"}),i=()=>{n.fontSize.md<60&&(o(N(E({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),p())},d=()=>{n.fontSize.sm>7&&(o(N(E({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),p())};function p(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}function a(){localStorage.setItem("colors_mode",n.colors)}function D(h){o(N(E({},n),{colors:h})),a()}const s={reduceFontSize:d,increaseFontSize:i,setColors:D};return t(Q.Provider,{value:E(E({},n),s),children:e.children})}function ot({className:e}){const r=l.exports.useContext(Q);return t("div",{id:"",className:e,children:x(fe,{className:"button-group",children:[t(G,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(xe,{fontSize:"small"})}),t(G,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),t(G,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(Ee,{fontSize:"small"})})]})})}const it=v(ot)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: ${e=>e.theme.palette.secondary.light};
    color: #686F82;
    padding: unset;
  }

  .font-size-disabled{
    color: #fff !important;
    font-size: 12px;
    padding: 0 10px;
    background: #ffffff47;
  }

  .Mui-disabled {
    border: unset !important;
}

`,at=[];function lt(){return t(ee,{children:at.map((e,r)=>t(re,{to:e.url,children:x(W,{button:!0,children:[t(Z,{primary:e.name}),t(ye,{children:t(Se,{})})]},e.name)},r))})}v(lt)`
  
`;const _=P.createContext(void 0);function ut(e){const r=l.exports.useContext(q),n=l.exports.useContext(R),[o,i]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[d,p]=l.exports.useState(""),[a,D]=l.exports.useState(sessionStorage.getItem("currLines")||!1),[s,h]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[z,J]=l.exports.useState(0),[O,k]=l.exports.useState(!1);l.exports.useEffect(()=>{S()},[s]);const f="https://musicline-backend.vercel.app",y=(b,u)=>{u=u.replace(/[\])}[{(]/g,"").trim();let c=document.querySelectorAll(".gsc-expansionArea")[0],g=A.lsGetSong(u);if(g){c.style.pointerEvents="all",h(g.lines),i(u),D(g.lines),A.clearGsc(),S(),sessionStorage.setItem("currLines",JSON.stringify(g.lines)),sessionStorage.setItem("currSongTitle",u);return}r.openLoader("main"),fetch(`${f}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(m=>m.json()).then(m=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),c.style.pointerEvents="all",i(u),m==null?void 0:m.combined)p(m.id),h(m.combined),D(m.combined),A.lsSaveSong({title:u,lines:m.combined}),A.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(m.combined)),sessionStorage.setItem("currSongTitle",u),S();else if(m==null?void 0:m.lyrics){let w=m.lyrics,L=[];w.split(/(?:\r\n|\r|\n)/g).map(B=>{B.length>=2&&L.push({src:B.replace(".",""),trans:""})}),h(L),D(w),A.clearGsc(),S()}else n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(m=>{console.log("ERRORR "+m),console.log(m),r.closeLoader("main"),n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),c.style.pointerEvents="all"})},S=()=>{let b=!1;for(let u=0;u<s.length;u++){let c=s[u];if(b===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."){b=!0,O?j(c.src,u):T(c.src,u);break}else continue}J(z+1)},C=(b,u)=>{let c="";for(let g=u;g<s.length;g++){const m=s[g];if(c.length>=1600)break;m.trans==="   "&&(c+=m.src+" $. "),m.trans!="   "&&(c+=` ${g} ${m.src} . `)}fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(c)})}).then(g=>g.json()).then(g=>{var m,w;if((g==null?void 0:g.trans.length)>=1){let L=s;g.trans.split(".").map(M=>{try{if(console.log(M),M.includes("$")||M.includes("["))L[u].trans="   ";else{let ne=Number(M.match(/\d+/)[0].replaceAll(".",""));L[ne].trans=M.replace(ne,"")}}catch{M.includes("$")&&(L[u].trans="   ")}u++}),h(L),((m=s[s.length-1])==null?void 0:m.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()}else s[u].trans===void 0&&(newLines[u]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[u].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[u]={src:b,trans:"[missing]"}),h(newLines),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()}).catch(g=>{var L;let m=s;s[u].trans===""&&(m[u]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[u].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(m[u]={src:b,trans:"[missing]"}),h(m),((L=s[s.length-1])==null?void 0:L.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",JSON.stringify(o))),S(),console.log(g)})},j=(b,u)=>{fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(b)})}).then(c=>c.json()).then(c=>{var g,m;if(c==null?void 0:c.trans){let w=s;w[u]={src:b,trans:c==null?void 0:c.trans},h(w),((g=s[s.length-1])==null?void 0:g.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()}else s[u].trans===void 0&&(newLines[u]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[u].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[u]={src:b,trans:"[missing]"}),h(newLines),((m=s[s.length-1])==null?void 0:m.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()}).catch(c=>{var w;let g=s;s[u].trans===""&&(g[u]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[u].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[u]={src:b,trans:"[missing]"}),h(g),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(s)),S(),console.log(c)})},T=(b,u)=>{fetch(`${f}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:s,song_id:d,title:o})}).then(c=>c.json()).then(c=>{var m,w;let g=s;(c==null?void 0:c.trans.length)?(c.trans.map((L,B)=>{g[B]={src:g[B].src,trans:L}}),h(g),A.lsSaveSong({title:o,lines:s}),sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o),S()):(c==null?void 0:c.trans)?(g[u]={src:b,trans:c==null?void 0:c.trans},h(g),((m=s[s.length-1])==null?void 0:m.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()):(s[u].trans===void 0&&(g[u]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[u].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[u]={src:b,trans:"[missing]"}),h(g),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S())}).catch(c=>{k(!0),console.log(c)})},U={getLines:y,getFullTrans:T,getPartlyTrans:C,getSingleLineTrans:j,checkNextTrans:S};return t(_.Provider,{value:E({title:o,currLyrics:a,lines:s,cou:z},U),children:e.children})}function ct({className:e}){return l.exports.useContext(_),t(K,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>t(re,{to:n.url,children:t(G,{sx:{my:2},children:n.name})},n.name))})}v(ct)`
  
`;function pt({className:e}){return t("div",{id:"",className:e,children:t(be,{children:t(Ce,{className:"mui-rounded-icon"})})})}v(pt)`
  .mui-rounded-icon{
    background-color: ${e=>"#595959"};
    color: ${e=>"#595959"};
    border-radius: 12px;
  }
`;const dt=n=>{var o=n,{className:e}=o,r=F(o,["className"]);var D,s,h;l.exports.useContext(Y);const i=l.exports.useContext(_),d=l.exports.useContext(R),p=l.exports.useContext(q),a=function(){sessionStorage.removeItem("currLines"),location.reload()};return x(ve,{position:"sticky",className:e,children:[p.main.open&&t(ce,{color:p.main.color||"primary"}),t(we,{maxWidth:"xl",children:x(Le,{disableGutters:!0,children:[t(re,{to:"/",onClick:()=>{a()},children:x($,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[t("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),t("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),i.lines[0]&&t(it,{})]})}),t(Ne,{in:(D=d.error)==null?void 0:D.open,children:x(te,{severity:"error",className:"error-alert",onClose:()=>{d.closeBanner("error")},children:[t(pe,{children:(s=d.error)==null?void 0:s.title}),(h=d.error)==null?void 0:h.message]})})]})},mt=v(dt)`
  background-color: ${e=>e.theme.palette.primary.dark};
  color: ${e=>e.theme.palette.secondary.dark};
  z-index: 2000;

  @media (max-width: 600px) {
    background-color: ${e=>e.theme.palette.primary.main};
  }

  a{
    color: ${e=>e.theme.palette.primary.main};
    &hover{
      color: #8e8b8b;
    }

    #h2-part1, #h2-part2{
      font-weight: 600;
    }

    #h2-part1{
      color:  ${e=>e.theme.palette.secondary.dark};
    }

    #h2-part2{
      color:  ${e=>e.theme.palette.secondary.light};
    }
  }
  
  button{
    color: ${e=>e.theme.palette.secondary.main};
  }

  .MuiBox-root{
    justify-content: flex-end;
  }

  .MuiButtonBase-root{
    padding-inline-start: 0;
  }

  .error-alert{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    border-radius: unset;

    button{
      color: rgb(95, 33, 32);
    }
  }
`;function ht(n){var o=n,{className:e}=o,r=F(o,["className"]);return t("div",{className:e,children:r.children})}const gt=v(ht)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.secondary.light};
`;function Dt({className:e}){return t("div",{id:"FOOTER",className:e,children:t(I,{container:!0,rowSpacing:6,columnSpacing:2,children:x(I,{item:!0,xs:12,sm:4,children:[x(ee,{children:[t(Te,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),t(W,{component:X,href:"mailto:meturgamusic@gmail.com",children:t(Z,{primary:"MeturgaMusic@gmail.com"})}),t(W,{component:X,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:t(Z,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),t(ee,{children:t(W,{component:X,href:"https://basssites.com",className:"built-by",children:t(Z,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]})})})}const ft=v(Dt)`
  /* color: ${e=>e.theme.palette.primary.contrastText}; */
  background-color: ${e=>e.theme.palette.primary.main};
  padding: 25px 30px 30px 25px;
  text-align: start;
  
  a{
    color: unset;
  }

  li span{
    color: white;
    font-size: 15px;
  }

  h5{
    background-color: unset;
    font-weight: 500;
    font-size: 17px;
    color: ${e=>e.theme.palette.secondary.dark};
    color: white;
    margin: unset;
  }

  .built-by{
    color: white;
  }

`;function xt(n){var o=n,{className:e}=o,r=F(o,["className"]);const i=l.exports.useContext(Y);return t(ke,{className:e,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer(!1)},children:t(K,{className:"drawer-layout",sx:{width:i.anchor==="top"||i.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{i.closeDrawer(!1)},children:t(i.child,{})})})}const Et=v(xt)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${e=>e.theme.palette.primary.light};
    color: ${e=>e.theme.palette.secondary.main};
  }

  svg{
    color: ${e=>e.theme.palette.secondary.main};
  }

  a{
    color: ${e=>e.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function yt({className:e}){const[r,n]=l.exports.useState(!0),o=()=>{n(!1)};return x(Ae,{id:"main-modal-root",className:e,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(Ie,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 \u05DC\u05D9\u05D9\u05DF"}),t(ze,{children:t(Oe,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(Fe,{children:t(G,{onClick:o,children:"Close"})})]})}v(yt)`
  
`;function St(n){var o=n,{className:e}=o,r=F(o,["className"]);const[i,d]=l.exports.useState(!0);return t($e,{className:e,open:i,onClose:()=>{d(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}v(St)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function bt({className:e}){return t("div",{id:"",className:e})}const Ct=v(bt)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function vt({className:e}){const[r,n]=l.exports.useState(!1),[o,i]=l.exports.useState(""),[d,p]=l.exports.useState(!1),a=l.exports.useContext(_),D=l.exports.useContext(R);l.exports.useEffect(()=>{i(a.title)},[a.title]),l.exports.useEffect(()=>{s()},[]);const s=()=>{A.getMobileOS()&&p(!0)};function h(){if(A.getMobileOS()){const f=document.querySelectorAll(".gsc-control-cse")[0];f.style.visibility="visible",f.style.marginTop="90px"}}l.exports.useEffect(()=>{window.onload=()=>{if(document.querySelector("#gcse-my-wrapper #___gcse_0"))h(),z();else{let y=function(){z()};const S=document.querySelector("#gcse-my-wrapper"),C={childList:!0,attributes:!0,subtree:!1};new MutationObserver(y).observe(S,C)}}},[]);function z(){n(!0);const f=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],y={childList:!1,attributes:!0,subtree:!1};function S(){O()}new MutationObserver(S).observe(f,y)}function J(f){i(f.target.value),k(f)}const O=()=>{setTimeout(()=>{let f=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");f&&f.forEach((y,S)=>{if(y.innerText.includes("Lyrics")){if(y.innerText.includes("(")){let T=y.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((T==null?void 0:T.includes("live"))||(T==null?void 0:T.includes("mix"))||(T==null?void 0:T.includes("remix"))){y.parentElement.parentElement.parentElement.remove();return}}let C=y.innerText.split("Lyrics")[0];C=C.replaceAll("\u2013","-"),y.innerText=C;const j={artistName:encodeURI(C.split("-")[0]),songName:encodeURI(C.split("-")[1])};y.nodeName!=="A"&&y.parentElement.parentElement.parentElement.addEventListener("click",T=>{var U;((U=D.error)==null?void 0:U.open)&&D.closeBanner("error"),y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",a.getLines(j,C)}),y.style.display="block"}else y.innerText.includes("Lyrics")||y.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&y.parentElement.parentElement.parentElement.remove()})},50)};function k(f){D.error&&D.closeBanner("error");let y=document.querySelector("#gsc-i-id1"),S=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(y)if(f.target.value.length<=1){let C=document.querySelector(".gsst_a");C&&C.dispatchEvent(new Event("click"))}else if(S.test(f.target.value)){y.value=f.target.value;let C=document.querySelectorAll(".gsc-search-box button")[0];C?setTimeout(()=>{C.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(D.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{D.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else D.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return x("div",{id:"",className:e,children:[!d&&t(Be,{id:"outlined-search",label:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:r?J:null,autoFocus:!1,autoComplete:"off",value:o}),t("div",{id:"gcse-my-wrapper",children:t("div",{className:"gcse-search"})})]})}const wt=v(vt)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: ${e=>e.theme.palette.primary.main+"!important"};
   border-color: ${e=>e.theme.palette.secondary.contrastText+"!important"};

   font-weight: 600;
    border-width: medium;
  }

`;function Lt(n){var o=n,{className:e}=o,r=F(o,["className"]);const i=l.exports.useContext(Q),[d,p]=l.exports.useState(!1),[a,D]=l.exports.useState([]),s=()=>{p(!0),a[0]||z()},h=()=>{p(!1)};function z(){const O="https://musicline-backend.vercel.app";let k=r.lyric.trim().toLowerCase();k=k.replaceAll(/[^a-zA-Z0-9']/g,""),k.slice(-1)==="'"&&(k=k.replaceAll("'","g")),fetch(`${O}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(k)})}).then(f=>f.json()).then(f=>{if(f==null?void 0:f.results[0]){D(f.results);return}else{D(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"]);return}}).catch(f=>{console.log(f)})}const J=()=>a[0]?a.map((O,k)=>x(H,{children:[k>0&&t("hr",{}),t("p",{className:"tt-p",children:O})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"});return t(Me,{onClickAway:h,children:t(Pe,{className:e,title:x(H,{children:[t($,{color:"inherit",style:{fontSize:i.fontSize.sm>=18?i.fontSize.sm-8:i.fontSize.sm,textAlign:"center"},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD: "}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr",fontSize:i.fontSize.sm>=18?i.fontSize.sm-10:i.fontSize.sm},children:a[0]?t(J,{}):t(ce,{sx:{margin:"8px"},color:"inherit"})})]}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:h,open:d,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:x("p",{className:"single-lyric",onClick:s,children:["\xA0 ",r.lyric," "]})})})}const le=v(Lt)`

`;function Nt(n){var o=n,{className:e}=o,r=F(o,["className"]);const i=l.exports.useContext(_);l.exports.useContext(R),l.exports.useContext(q);const d=l.exports.useContext(Q);return l.exports.useEffect(()=>{},[i.cou]),t(K,{children:t(I,{container:!0,spacing:2,children:i.lines&&x("div",{id:"lyrics_body",className:e,children:[t($,{variant:"h6",noWrap:!0,component:"h3",style:{fontSize:d.fontSize.lg},children:i.title&&i.title.split(" ").map((p,a)=>t(le,{lyric:p},a))}),i.lines.map((p,a)=>{var D;return p.src.includes("[")&&(p.trans="   "),x("div",{children:[a>0&&p.src.includes("[")&&x(H,{children:[t("br",{}),t("br",{})]}),t(I,{className:"lyrics-line en-line",item:!0,style:{fontSize:d.fontSize.md},children:p.src.split(" ").map((s,h)=>t(le,{lyric:s},h+Math.random()))}),t(I,{item:!0,className:"lyrics-line he-line",style:{fontSize:d.fontSize.sm},children:t(H,{children:((D=p.trans)==null?void 0:D.length)>2?p.trans.split(" ").map((s,h)=>{if(p.trans!=="   ")return x("small",{className:"single-trans",children:[s," \xA0"]},h+Math.random())}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},a)})]})})})}const Tt=v(Nt)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* max-width: 90%; */
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding: 15px 50px;
  padding-bottom: 40px;
  padding-inline-start: 50px;
  margin-top: 55px;

  background-color: ${e=>e.theme.palette.primary.light};
  color:  ${e=>e.theme.palette.primary.contrastText};
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 #7c7c7c;

  @media (max-width: 600px) {
    padding-inline-start: 15px;
    padding-inline-end: 15px;
  }
  
  h3{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 40px;
    white-space: break-spaces;

    @media (max-width: 600px) {
      font-size: 19px;
    }
  }

  .en-line p, .he-line small{
    margin: unset;
    display: inline-block;
  }

  .lyrics-line{
    padding: 6px 0px;
    max-width: 98%;
  }

  .single-lyric, .single-trans{
    display: inline;
    min-width:unset;
    padding: 0px 2px;
    text-transform: none;
  }

  .single-lyric{
    cursor: pointer;
  }

  .en-line{
      margin-top: 8px;
      direction: rtl;
      text-align: left;
  }
`;function kt({className:e}){const r=l.exports.useContext(_);function n(o){o.preventDefault()}return x("div",{className:e,children:[t("div",{className:"home-top",children:x(I,{container:!0,className:"home-t-container",children:[!r.currLyrics&&t(I,{item:!0,xs:12,sm:6,children:t($,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),x(I,{item:!0,xs:12,sm:6,children:[!r.currLyrics&&x($,{variant:"h3",className:"page-h3",children:[t("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),t("br",{}),t("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),t("br",{}),t("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),t("div",{className:"small-two",children:t("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),t(K,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,className:"search-ctr",children:t(wt,{})})]})]})}),r.currLyrics&&t(Tt,{className:"lyrics-body"})]})}const At=v(kt)`
    .home-top{
       padding: 0 35px;

       @media (max-width: 600px) {
        padding: 0 25px;
       }
    }

    .home-t-container{
        padding-top: 30px;
    }
    
    .h3-s-one{
        @media (min-width: 600px) {
            word-spacing: 9px;
            letter-spacing: 0.5px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
            word-spacing: 1px;
        }
   
    }

    .h3-s-two{
        @media (min-width: 600px) {
            word-spacing: 9px;
            letter-spacing: 0.3px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
        }
   
    }

    .small-one{
        @media (max-width: 600px) {
            font-size: 16px;
        }

        color: ${e=>e.theme.palette.primary.main};
        font-size: 25px;
        margin-bottom: 15px;
    }

    .small-two{
        word-spacing: -0.5px;
    }

    .MuiTextField-root { 
        margin-top: 35px;
        /* margin-inline-start: 10px; */
        width: 450px;
        border-color: ${e=>e.theme.palette.primary.dark};;

        @media (max-width: 600px) {
            width: 95%;
        }
    };

    .MuiTextField-root * { 
        color: ${e=>e.theme.palette.primary.dark};;
        border-color: ${e=>e.theme.palette.primary.dark};;
    }

    .lyrics-body, .MuiGrid-root, .muirtl-mhc70k-MuiGrid-root{
        direction: ltr;
    }
    
`;function It({className:e}){return x("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t($,{variant:"h2",className:"page-h2",children:"404"}),t($,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const zt=v(It)`

`;function Ot({className:e}){var D,s;const r=l.exports.useContext(Y),n=l.exports.useContext(q),o=l.exports.useContext(R);l.exports.useRef(null);const i=Re({key:"muirtl",stylisPlugins:[qe,Ue]});function d(){p()}const p=()=>{const h=document.createElement("script");h.type="text/javascript",h.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",h.defer=!0,document.body.appendChild(h)};l.exports.useEffect(()=>{d()},[o]);const a=h=>{o.closeBanner(h)};return ue({palette:{mode:"dark"}}),x("div",{className:e,children:[t(_e,{value:i,children:x(Je,{children:[t(Xe,{}),t(mt,{className:"header"}),((D=o.main)==null?void 0:D.open)&&x(te,{severity:"warning",className:"main-alert",children:[t(pe,{children:o.main.title}),o.main.message]}),t(gt,{children:x(je,{children:[t(ae,{path:"/",element:t(At,{className:"page"})}),t(ae,{path:"*",element:t(zt,{className:"page"})})]})}),r.open&&r.child&&t(Et,{className:"drawer"}),n.circular.open&&t(Ge,{color:n.main.color||"primary"}),((s=o.iosSnackbar)==null?void 0:s.open)&&t(He,{open:o.iosSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(te,{onClose:()=>{a("iosSnackbar")},severity:o.iosSnackbar.severity,sx:{width:"100%"},children:o.iosSnackbar.message})}),t(ft,{})]})}),t(Ct,{})]})}const Ft=v(Ot)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  color: ${e=>e.theme.palette.primary.contrastText};

  .page-h1{
    padding: 30px 0px 0px 0px;
    font-size: 140px; 
    font-weight: 100;
    color: ${e=>e.theme.palette.primary.contrastText};
    @media (max-width: 600px) {
      margin-top: 0px;
      font-size: 46px;
      font-weight: 300;
    }
  }

  .page-h3{
    margin: 40px 0px 0px  0px;
    font-size: 38px; // 29
    font-weight: 400;
    color: ${e=>e.theme.palette.primary.contrastText};

    small{
      letter-spacing: 1.4px;
    }

    @media (max-width: 600px) {
      margin: 15px 0px 0px  0px;
      font-size: 22px;

      small{
      letter-spacing: 0.7px;
      }

      .small-one{
        font-weight: 600;
      }
    }
  }

  a {
    text-decoration: none;
  }

  .MuiLinearProgress-root{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999;
  }

  .main-alert{
    background-color: ${e=>e.theme.palette.secondary.dark};
    color: ${e=>e.theme.palette.primary.contrastText};
    border-radius: unset;

    @media (min-width: 600px) {
      letter-spacing: 0.5px;
      word-spacing: 0.5px;
    }
  }

  .loader{
      padding: 20px;
  }
`,$t=[Ke,Qe,Ye,ut,st];function Bt(e){return t(H,{children:$t.reduceRight((r,n)=>t(n,{children:r}),e.children)})}Ve.render(t(P.StrictMode,{children:t(Bt,{children:t(We,{theme:de,children:t(Ft,{className:"app"})})})}),document.getElementById("root"));
