var he=Object.defineProperty,ge=Object.defineProperties;var De=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var se=(e,r,n)=>r in e?he(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,E=(e,r)=>{for(var n in r||(r={}))oe.call(r,n)&&se(e,n,r[n]);if(U)for(var n of U(r))ie.call(r,n)&&se(e,n,r[n]);return e},N=(e,r)=>ge(e,De(r));var $=(e,r)=>{var n={};for(var o in e)oe.call(e,o)&&r.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&U)for(var o of U(e))r.indexOf(o)<0&&ie.call(e,o)&&(n[o]=e[o]);return n};import{R as P,r as u,j as t,c as ce,M as fe,a as x,B as xe,b as j,d as Ee,A as ye,s as v,L as ee,N as re,e as V,f as W,g as Se,h as be,i as Z,I as Ce,k as ve,l as we,m as pe,C as Le,T as Ne,n as F,o as Te,p as te,q as de,G as I,t as Ae,u as X,v as ke,w as Ie,D as ze,x as Oe,y as $e,z as Fe,E as Be,F as Me,H as Pe,J as Re,K as G,O as _e,P as Je,Q as je,S as Ge,U as ae,V as He,W as qe,X as Ue,Y as Ve,Z as We,_ as Ze}from"./vendor.2b355312.js";const Ke=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const d of i)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function n(i){const d={};return i.integrity&&(d.integrity=i.integrity),i.referrerpolicy&&(d.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?d.credentials="include":i.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function o(i){if(i.ep)return;i.ep=!0;const d=n(i);fetch(i.href,d)}};Ke();const K=P.createContext(void 0);function Ye(e){const[r,n]=u.exports.useState({}),d={openDrawer:(p,a,D="temporary",s)=>{n({open:p,anchor:a,permanent:D,child:s})},closeDrawer:(p,a,D="temporary",s)=>{n({open:p,anchor:a,permanent:D,child:s})}};return t(K.Provider,{value:E(E({},r),d),children:e.children})}const Y=P.createContext(void 0);function Qe(e){const[r,n]=u.exports.useState({main:{open:!0,color:"info"},circular:{open:!1,color:"inherit"}}),p={createLoader:(a,D)=>{r[a]&&n(N(E({},r),{[a]:void 0})),n(N(E({},r),{[a]:{open:!1,color:D||"inherit"}}))},openLoader:a=>{r[a]?n(N(E({},r),{[a]:N(E({},r[a]),{open:!0})})):console.error("Loader does'nt exist. Name: "+a)},closeLoader:a=>{r[a]?n(N(E({},r),{[a]:N(E({},r[a]),{open:!1})})):console.error("Loader does'nt exist. Name: "+a)}};return t(Y.Provider,{value:E(E({},r),p),children:e.children})}const H=P.createContext(void 0);function Xe(e){const[r,n]=u.exports.useState({main:{open:!1,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),p={createBanner:(a,D,s,h)=>{r[a]&&n(N(E({},r),{[a]:void 0})),n(N(E({},r),{[a]:{open:!0,severity:D||"success",title:s||"",message:h||""}}))},openBanner:a=>{r[a]?n(N(E({},r),{[a]:N(E({},r[a]),{open:!0})})):console.error("Banner does'nt exist. Name: "+a)},closeBanner:a=>{r[a]?n(N(E({},r),{[a]:N(E({},r[a]),{open:!1})})):console.error("Banner does'nt exist. Name: "+a)}};return t(H.Provider,{value:E(E({},r),p),children:e.children})}const me=ce({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}});function et(){const[e]=u.exports.useState(me.palette.primary.main);return t("div",{className:"wrapper",children:t(fe,{children:t("meta",{name:"theme-color",content:e})})})}const tt=e=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));r.push(e),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},rt=e=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===e.toLowerCase()):!1,nt=()=>{let e=document.querySelector(".gsst_a");e&&e.dispatchEvent(new Event("click"))},st=()=>{let e=!1;const r=navigator.userAgent;return/android/i.test(r)?e=!1:(/iPad|iPhone|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(e=!0),e};var k={lsSaveSong:tt,lsGetSong:rt,clearGsc:nt,getMobileOS:st};const Q=P.createContext(void 0);function ot(e){const r=JSON.parse(localStorage.getItem("fontsize")),[n,o]=u.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27},colors:"pink"}),i=()=>{n.fontSize.md<60&&(o(N(E({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),p())},d=()=>{n.fontSize.sm>7&&(o(N(E({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),p())};function p(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}function a(){localStorage.setItem("colors_mode",n.colors)}function D(h){o(N(E({},n),{colors:h})),a()}const s={reduceFontSize:d,increaseFontSize:i,setColors:D};return t(Q.Provider,{value:E(E({},n),s),children:e.children})}function it({className:e}){const r=u.exports.useContext(Q);return t("div",{id:"",className:e,children:x(xe,{className:"button-group",children:[t(j,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(Ee,{fontSize:"small"})}),t(j,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),t(j,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(ye,{fontSize:"small"})})]})})}const at=v(it)`
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

`,lt=[];function ut(){return t(ee,{children:lt.map((e,r)=>t(re,{to:e.url,children:x(V,{button:!0,children:[t(W,{primary:e.name}),t(Se,{children:t(be,{})})]},e.name)},r))})}v(ut)`
  
`;const R=P.createContext(void 0);function ct(e){const r=u.exports.useContext(Y),n=u.exports.useContext(H),[o,i]=u.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[d,p]=u.exports.useState(""),[a,D]=u.exports.useState(sessionStorage.getItem("currLines")||!1),[s,h]=u.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[z,_]=u.exports.useState(0),[O,A]=u.exports.useState(!1);u.exports.useEffect(()=>{S()},[s]);const f="https://musicline-backend.vercel.app",y=(b,l)=>{l=l.replace(/[\])}[{(]/g,"").trim();let c=document.querySelectorAll(".gsc-expansionArea")[0],g=k.lsGetSong(l);if(g){c.style.pointerEvents="all",h(g.lines),i(l),D(g.lines),k.clearGsc(),S(),sessionStorage.setItem("currLines",JSON.stringify(g.lines)),sessionStorage.setItem("currSongTitle",l);return}r.openLoader("main"),fetch(`${f}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(m=>m.json()).then(m=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),c.style.pointerEvents="all",i(l),m==null?void 0:m.combined)p(m.id),h(m.combined),D(m.combined),k.lsSaveSong({title:l,lines:m.combined}),k.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(m.combined)),sessionStorage.setItem("currSongTitle",l),S();else if(m==null?void 0:m.lyrics){let w=m.lyrics,L=[];w.split(/(?:\r\n|\r|\n)/g).map(B=>{B.length>=2&&L.push({src:B.replace(".",""),trans:""})}),h(L),D(w),k.clearGsc(),S()}else n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(m=>{console.log("ERRORR "+m),console.log(m),r.closeLoader("main"),n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),c.style.pointerEvents="all"})},S=()=>{let b=!1;for(let l=0;l<s.length;l++){let c=s[l];if(b===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."){b=!0,O?J(c.src,l):T(c.src,l);break}else continue}_(z+1)},C=(b,l)=>{let c="";for(let g=l;g<s.length;g++){const m=s[g];if(c.length>=1600)break;m.trans==="   "&&(c+=m.src+" $. "),m.trans!="   "&&(c+=` ${g} ${m.src} . `)}fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(c)})}).then(g=>g.json()).then(g=>{var m,w;if((g==null?void 0:g.trans.length)>=1){let L=s;g.trans.split(".").map(M=>{try{if(console.log(M),M.includes("$")||M.includes("["))L[l].trans="   ";else{let ne=Number(M.match(/\d+/)[0].replaceAll(".",""));L[ne].trans=M.replace(ne,"")}}catch{M.includes("$")&&(L[l].trans="   ")}l++}),h(L),((m=s[s.length-1])==null?void 0:m.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()}else s[l].trans===void 0&&(newLines[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[l]={src:b,trans:"[missing]"}),h(newLines),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()}).catch(g=>{var L;let m=s;s[l].trans===""&&(m[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(m[l]={src:b,trans:"[missing]"}),h(m),((L=s[s.length-1])==null?void 0:L.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",JSON.stringify(o))),S(),console.log(g)})},J=(b,l)=>{fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(b)})}).then(c=>c.json()).then(c=>{var g,m;if(c==null?void 0:c.trans){let w=s;w[l]={src:b,trans:c==null?void 0:c.trans},h(w),((g=s[s.length-1])==null?void 0:g.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()}else s[l].trans===void 0&&(newLines[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[l]={src:b,trans:"[missing]"}),h(newLines),((m=s[s.length-1])==null?void 0:m.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()}).catch(c=>{var w;let g=s;s[l].trans===""&&(g[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[l]={src:b,trans:"[missing]"}),h(g),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(s)),S(),console.log(c)})},T=(b,l)=>{fetch(`${f}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:s,song_id:d,title:o})}).then(c=>c.json()).then(c=>{var m,w;let g=s;(c==null?void 0:c.trans.length)?(c.trans.map((L,B)=>{g[B]={src:g[B].src,trans:L}}),h(g),k.lsSaveSong({title:o,lines:s}),sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o),S()):(c==null?void 0:c.trans)?(g[l]={src:b,trans:c==null?void 0:c.trans},h(g),((m=s[s.length-1])==null?void 0:m.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S()):(s[l].trans===void 0&&(g[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(g[l]={src:b,trans:"[missing]"}),h(g),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",o)),S())}).catch(c=>{A(!0),console.log(c)})},q={getLines:y,getFullTrans:T,getPartlyTrans:C,getSingleLineTrans:J,checkNextTrans:S};return t(R.Provider,{value:E({title:o,currLyrics:a,lines:s,cou:z},q),children:e.children})}function pt({className:e}){return u.exports.useContext(R),t(Z,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>t(re,{to:n.url,children:t(j,{sx:{my:2},children:n.name})},n.name))})}v(pt)`
  
`;function dt({className:e}){return t("div",{id:"",className:e,children:t(Ce,{children:t(ve,{className:"mui-rounded-icon"})})})}v(dt)`
  .mui-rounded-icon{
    background-color: ${e=>"#595959"};
    color: ${e=>"#595959"};
    border-radius: 12px;
  }
`;const mt=n=>{var o=n,{className:e}=o,r=$(o,["className"]);var D,s,h;u.exports.useContext(K);const i=u.exports.useContext(R),d=u.exports.useContext(H),p=u.exports.useContext(Y),a=function(){sessionStorage.removeItem("currLines"),location.reload()};return x(we,{position:"sticky",className:e,children:[p.main.open&&t(pe,{color:p.main.color}),t(Le,{maxWidth:"xl",children:x(Ne,{disableGutters:!0,children:[t(re,{to:"/",onClick:()=>{a()},children:x(F,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[t("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),t("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),i.lines[0]&&t(at,{})]})}),t(Te,{in:(D=d.error)==null?void 0:D.open,children:x(te,{severity:"error",className:"error-alert",onClose:()=>{d.closeBanner("error")},children:[t(de,{children:(s=d.error)==null?void 0:s.title}),(h=d.error)==null?void 0:h.message]})})]})},ht=v(mt)`
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
`;function gt(n){var o=n,{className:e}=o,r=$(o,["className"]);return t("div",{className:e,children:r.children})}const Dt=v(gt)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.secondary.light};
`;function ft({className:e}){return t("div",{id:"FOOTER",className:e,children:t(I,{container:!0,rowSpacing:6,columnSpacing:2,children:x(I,{item:!0,xs:12,sm:4,children:[x(ee,{children:[t(Ae,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),t(V,{component:X,href:"mailto:meturgamusic@gmail.com",children:t(W,{primary:"MeturgaMusic@gmail.com"})}),t(V,{component:X,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:t(W,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),t(ee,{children:t(V,{component:X,href:"https://basssites.com",className:"built-by",children:t(W,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]})})})}const xt=v(ft)`
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

`;function Et(n){var o=n,{className:e}=o,r=$(o,["className"]);const i=u.exports.useContext(K);return t(ke,{className:e,anchor:i.anchor,open:i.open,variant:i.permanent,onClose:()=>{i.closeDrawer(!1)},children:t(Z,{className:"drawer-layout",sx:{width:i.anchor==="top"||i.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{i.closeDrawer(!1)},children:t(i.child,{})})})}const yt=v(Et)`
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
`;function St({className:e}){const[r,n]=u.exports.useState(!0),o=()=>{n(!1)};return x(Ie,{id:"main-modal-root",className:e,open:r,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ze,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),t(Oe,{children:t($e,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(Fe,{children:t(j,{onClick:o,children:"Close"})})]})}v(St)`
  
`;function bt(n){var o=n,{className:e}=o,r=$(o,["className"]);const[i,d]=u.exports.useState(!0);return t(Be,{className:e,open:i,onClose:()=>{d(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}v(bt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Ct({className:e}){return t("div",{id:"",className:e})}const vt=v(Ct)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function wt({className:e}){const[r,n]=u.exports.useState(!1),[o,i]=u.exports.useState(""),[d,p]=u.exports.useState(!1),a=u.exports.useContext(R),D=u.exports.useContext(H);u.exports.useEffect(()=>{i(a.title)},[a.title]),u.exports.useEffect(()=>{s()},[]);const s=()=>{k.getMobileOS()&&p(!0)};function h(){if(k.getMobileOS()){const f=document.querySelectorAll(".gsc-control-cse")[0];f.style.visibility="visible",f.style.marginTop="90px"}}u.exports.useEffect(()=>{window.onload=()=>{if(document.querySelector("#gcse-my-wrapper #___gcse_0"))h(),z();else{let y=function(){z()};const S=document.querySelector("#gcse-my-wrapper"),C={childList:!0,attributes:!0,subtree:!1};new MutationObserver(y).observe(S,C)}}},[]);function z(){n(!0);const f=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],y={childList:!1,attributes:!0,subtree:!1};function S(){O()}new MutationObserver(S).observe(f,y)}function _(f){i(f.target.value),A(f)}const O=()=>{setTimeout(()=>{let f=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");f&&f.forEach((y,S)=>{if(y.innerText.includes("Lyrics")){if(y.innerText.includes("(")){let T=y.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((T==null?void 0:T.includes("live"))||(T==null?void 0:T.includes("mix"))||(T==null?void 0:T.includes("remix"))){y.parentElement.parentElement.parentElement.remove();return}}let C=y.innerText.split("Lyrics")[0];C=C.replaceAll("\u2013","-"),y.innerText=C;const J={artistName:encodeURI(C.split("-")[0]),songName:encodeURI(C.split("-")[1])};y.nodeName!=="A"&&y.parentElement.parentElement.parentElement.addEventListener("click",T=>{var q;((q=D.error)==null?void 0:q.open)&&D.closeBanner("error"),y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",a.getLines(J,C)}),y.style.display="block"}else y.innerText.includes("Lyrics")||y.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&y.parentElement.parentElement.parentElement.remove()})},50)};function A(f){D.error&&D.closeBanner("error");let y=document.querySelector("#gsc-i-id1"),S=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(y)if(f.target.value.length<=1){let C=document.querySelector(".gsst_a");C&&C.dispatchEvent(new Event("click"))}else if(S.test(f.target.value)){y.value=f.target.value;let C=document.querySelectorAll(".gsc-search-box button")[0];C?setTimeout(()=>{C.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(D.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{D.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else D.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return x("div",{id:"",className:e,children:[!d&&t(Me,{id:"outlined-search",label:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:r?_:null,autoFocus:!1,autoComplete:"off",value:o}),t("div",{id:"gcse-my-wrapper",children:t("div",{className:"gcse-search"})})]})}const Lt=v(wt)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: ${e=>e.theme.palette.primary.main+"!important"};
   border-color: ${e=>e.theme.palette.secondary.contrastText+"!important"};

   font-weight: 600;
    border-width: medium;
  }

`;function Nt(n){var o=n,{className:e}=o,r=$(o,["className"]);const i=u.exports.useContext(Q),[d,p]=u.exports.useState(!1),[a,D]=u.exports.useState([]),s=()=>{p(!0),a[0]||z()},h=()=>{p(!1)};function z(){const O="https://musicline-backend.vercel.app";let A=r.lyric.trim().toLowerCase();A=A.replaceAll(/[^a-zA-Z0-9']/g,""),A.slice(-1)==="'"&&(A=A.replaceAll("'","g")),fetch(`${O}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(A)})}).then(f=>f.json()).then(f=>{if(f==null?void 0:f.results[0]){D(f.results);return}else{D(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"]);return}}).catch(f=>{console.log(f)})}const _=()=>a[0]?a.map((O,A)=>x(G,{children:[A>0&&t("hr",{}),t("p",{className:"tt-p",children:O})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"});return t(Pe,{onClickAway:h,children:t(Re,{className:e,title:x(G,{children:[t(F,{color:"inherit",style:{fontSize:i.fontSize.sm>=18?i.fontSize.sm-8:i.fontSize.sm,textAlign:"center"},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD: "}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr",fontSize:i.fontSize.sm>=18?i.fontSize.sm-10:i.fontSize.sm},children:a[0]?t(_,{}):t(pe,{sx:{margin:"8px"},color:"inherit"})})]}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:h,open:d,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:x("p",{className:"single-lyric",onClick:s,children:["\xA0 ",r.lyric," "]})})})}const le=v(Nt)`

`;function Tt(n){var o=n,{className:e}=o,r=$(o,["className"]);const i=u.exports.useContext(R),d=u.exports.useContext(Q);return u.exports.useEffect(()=>{},[i.cou]),t(Z,{className:e,children:t(I,{container:!0,spacing:2,children:i.lines&&i.currLyrics&&x("div",{id:"lyrics_body",children:[t(F,{variant:"h6",noWrap:!0,component:"h3",style:{fontSize:d.fontSize.lg},children:i.title&&i.title.split(" ").map((p,a)=>t(le,{lyric:p},a))}),i.lines.map((p,a)=>{var D;return p.src.includes("[")&&(p.trans="   "),x("div",{children:[a>0&&p.src.includes("[")&&x(G,{children:[t("br",{}),t("br",{})]}),t(I,{className:"lyrics-line en-line",item:!0,style:{fontSize:d.fontSize.md},children:p.src.split(" ").map((s,h)=>t(le,{lyric:s},h+Math.random()))}),t(I,{item:!0,className:"lyrics-line he-line",style:{fontSize:d.fontSize.sm},children:t(G,{children:((D=p.trans)==null?void 0:D.length)>2?p.trans.split(" ").map((s,h)=>{if(p.trans!=="   ")return x("small",{className:"single-trans",children:[s," \xA0"]},h+Math.random())}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},a)})]})})})}const ue=v(Tt)`
#lyrics_body{
  font-family: 'Assistant','Roboto', 'sans-serif';
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding: 15px 50px;
  padding-bottom: 40px;
  padding-inline-start: 50px;
  margin-top: ${e=>e.first?"100px":"55px"};

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
}
`;function At({className:e}){const r=u.exports.useContext(R);function n(o){o.preventDefault()}return x("div",{className:e,children:[t("div",{className:"home-top",children:x(I,{container:!0,className:"home-t-container",children:[!r.currLyrics&&t(I,{item:!0,xs:12,sm:6,children:t(F,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),x(I,{item:!0,xs:12,sm:6,children:[!r.currLyrics&&x(F,{variant:"h3",className:"page-h3",children:[t("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),t("br",{}),t("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),t("br",{}),t("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),t("div",{className:"small-two",children:t("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),t(Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,className:"search-ctr",children:t(Lt,{})})]})]})}),!r.currLyrics&&t(ue,{className:"lyrics-body",first:!0}),r.currLyrics&&t(ue,{className:"lyrics-body"})]})}const kt=v(At)`
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
    
`;function It({className:e}){return x("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(F,{variant:"h2",className:"page-h2",children:"404"}),t(F,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const zt=v(It)`

`;function Ot({className:e}){var D,s;const r=u.exports.useContext(K),n=u.exports.useContext(Y),o=u.exports.useContext(H);u.exports.useRef(null);const i=_e({key:"muirtl",stylisPlugins:[Ue,Ve]});function d(){p()}const p=()=>{const h=document.createElement("script");h.type="text/javascript",h.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",h.defer=!0,document.body.appendChild(h)};u.exports.useEffect(()=>{d()},[o]);const a=h=>{o.closeBanner(h)};return ce({palette:{mode:"dark"}}),x("div",{className:e,children:[t(Je,{value:i,children:x(je,{children:[t(et,{}),t(ht,{className:"header"}),((D=o.main)==null?void 0:D.open)&&x(te,{severity:"warning",className:"main-alert",children:[t(de,{children:o.main.title}),o.main.message]}),t(Dt,{children:x(Ge,{children:[t(ae,{path:"/",element:t(kt,{className:"page"})}),t(ae,{path:"*",element:t(zt,{className:"page"})})]})}),r.open&&r.child&&t(yt,{className:"drawer"}),n.circular.open&&t(He,{color:n.main.color||"primary"}),((s=o.iosSnackbar)==null?void 0:s.open)&&t(qe,{open:o.iosSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(te,{onClose:()=>{a("iosSnackbar")},severity:o.iosSnackbar.severity,sx:{width:"100%"},children:o.iosSnackbar.message})}),t(xt,{})]})}),t(vt,{})]})}const $t=v(Ot)`
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
`,Ft=[Ye,Xe,Qe,ct,ot];function Bt(e){return t(G,{children:Ft.reduceRight((r,n)=>t(n,{children:r}),e.children)})}We.render(t(P.StrictMode,{children:t(Bt,{children:t(Ze,{theme:me,children:t($t,{className:"app"})})})}),document.getElementById("root"));
