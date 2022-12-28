var me=Object.defineProperty,he=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var ue=(e,r,n)=>r in e?me(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,x=(e,r)=>{for(var n in r||(r={}))oe.call(r,n)&&ue(e,n,r[n]);if(U)for(var n of U(r))ie.call(r,n)&&ue(e,n,r[n]);return e},L=(e,r)=>he(e,Ee(r));var O=(e,r)=>{var n={};for(var u in e)oe.call(e,u)&&r.indexOf(u)<0&&(n[u]=e[u]);if(e!=null&&U)for(var u of U(e))r.indexOf(u)<0&&ie.call(e,u)&&(n[u]=e[u]);return n};import{R,r as l,j as t,c as ce,M as ge,a as g,B as fe,b as G,d as xe,A as ye,s as C,L as ee,N as ne,e as V,f as W,g as Se,h as be,i as Z,I as Ce,k as ve,l as we,m as De,C as Ae,T as Le,n as F,o as Ne,p as te,q as pe,G as T,t as Te,u as X,v as ke,w as Ie,D as ze,x as Be,y as Oe,z as Fe,E as $e,F as Me,H as Pe,J as Re,K as $,O as _e,P as Je,Q as je,S as Ge,U as ae,V as He,W as qe,X as Ue,Y as Ve,Z as We,_ as Ze}from"./vendor.2b355312.js";const Ke=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const D of c.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&u(D)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function u(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}};Ke();const K=R.createContext(void 0);function Ye(e){const[r,n]=l.exports.useState({}),c={openDrawer:(D,i,E="temporary",s)=>{n({open:D,anchor:i,permanent:E,child:s})},closeDrawer:(D,i,E="temporary",s)=>{n({open:D,anchor:i,permanent:E,child:s})}};return t(K.Provider,{value:x(x({},r),c),children:e.children})}const Y=R.createContext(void 0);function Qe(e){const[r,n]=l.exports.useState({main:{open:!0,color:"inherit"},circular:{open:!1,color:"inherit"}}),D={createLoader:(i,E)=>{r[i]&&n(L(x({},r),{[i]:void 0})),n(L(x({},r),{[i]:{open:!1,color:E||"inherit"}}))},openLoader:i=>{r[i]?n(L(x({},r),{[i]:L(x({},r[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{r[i]?n(L(x({},r),{[i]:L(x({},r[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return t(Y.Provider,{value:x(x({},r),D),children:e.children})}const H=R.createContext(void 0);function Xe(e){const[r,n]=l.exports.useState({main:{open:!1,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),D={createBanner:(i,E,s,m)=>{r[i]&&n(L(x({},r),{[i]:void 0})),n(L(x({},r),{[i]:{open:!0,severity:E||"success",title:s||"",message:m||""}}))},openBanner:i=>{r[i]?n(L(x({},r),{[i]:L(x({},r[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{r[i]?n(L(x({},r),{[i]:L(x({},r[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return t(H.Provider,{value:x(x({},r),D),children:e.children})}const de=ce({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}});function et(){const[e]=l.exports.useState(de.palette.primary.main);return t("div",{className:"wrapper",children:t(ge,{children:t("meta",{name:"theme-color",content:e})})})}const tt=e=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));r.push(e),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},rt=e=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===e.toLowerCase()):!1,nt=()=>{let e=document.querySelector(".gsst_a");e&&e.dispatchEvent(new Event("click"))},st=()=>{let e=!1;const r=navigator.userAgent;return/android/i.test(r)?e=!1:(/iPad|iPhone|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(e=!0),e};var I={lsSaveSong:tt,lsGetSong:rt,clearGsc:nt,getMobileOS:st};const Q=R.createContext(void 0);function ut(e){const r=JSON.parse(localStorage.getItem("fontsize")),[n,u]=l.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27},colors:"pink"}),o=()=>{n.fontSize.md<60&&(u(L(x({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),D())},c=()=>{n.fontSize.sm>7&&(u(L(x({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),D())};function D(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}function i(){localStorage.setItem("colors_mode",n.colors)}function E(m){u(L(x({},n),{colors:m})),i()}const s={reduceFontSize:c,increaseFontSize:o,setColors:E};return t(Q.Provider,{value:x(x({},n),s),children:e.children})}function ot({className:e}){const r=l.exports.useContext(Q);return t("div",{id:"",className:e,children:g(fe,{className:"button-group",children:[t(G,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:t(xe,{fontSize:"small"})}),t(G,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),t(G,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:t(ye,{fontSize:"small"})})]})})}const it=C(ot)`
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

`,at=[];function lt(){return t(ee,{children:at.map((e,r)=>t(ne,{to:e.url,children:g(V,{button:!0,children:[t(W,{primary:e.name}),t(Se,{children:t(be,{})})]},e.name)},r))})}C(lt)`
  
`;const _=R.createContext(void 0);function ct(e){const r=l.exports.useContext(Y),n=l.exports.useContext(H),[u,o]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[c,D]=l.exports.useState(""),[i,E]=l.exports.useState(sessionStorage.getItem("currLines")||!1),[s,m]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[z,J]=l.exports.useState(0),[B,k]=l.exports.useState(!1);l.exports.useEffect(()=>{S()},[s]);const f="https://musicline-backend.vercel.app",y=(b,a)=>{a=a.replace(/[\])}[{(]/g,"").trim();let p=document.querySelectorAll(".gsc-expansionArea")[0],h=I.lsGetSong(a);if(h){p.style.pointerEvents="all",m(h.lines),o(a),E(h.lines),I.clearGsc(),S(),sessionStorage.setItem("currLines",JSON.stringify(h.lines)),sessionStorage.setItem("currSongTitle",a);return}r.openLoader("main"),fetch(`${f}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(d=>d.json()).then(d=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),p.style.pointerEvents="all",o(a),d==null?void 0:d.combined)D(d.id),m(d.combined),E(d.combined),I.lsSaveSong({title:a,lines:d.combined}),I.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(d.combined)),sessionStorage.setItem("currSongTitle",a),S();else if(d==null?void 0:d.lyrics){let w=d.lyrics,A=[];w.split(/(?:\r\n|\r|\n)/g).map(M=>{M.length>=2&&A.push({src:M.replace(".",""),trans:""})}),m(A),E(w),I.clearGsc(),S()}else n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(d=>{console.log("ERRORR "+d),console.log(d),r.closeLoader("main"),n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),p.style.pointerEvents="all"})},S=()=>{let b=!1;for(let a=0;a<s.length;a++){let p=s[a];if(b===!0)break;if(p.trans.length<=1||p.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."){b=!0,B?j(p.src,a):N(p.src,a);break}else continue}J(z+1)},v=(b,a)=>{let p="";for(let h=a;h<s.length;h++){const d=s[h];if(p.length>=1600)break;d.trans==="   "&&(p+=d.src+" $. "),d.trans!="   "&&(p+=` ${h} ${d.src} . `)}fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(p)})}).then(h=>h.json()).then(h=>{var d,w;if((h==null?void 0:h.trans.length)>=1){let A=s;h.trans.split(".").map(P=>{try{if(console.log(P),P.includes("$")||P.includes("["))A[a].trans="   ";else{let se=Number(P.match(/\d+/)[0].replaceAll(".",""));A[se].trans=P.replace(se,"")}}catch{P.includes("$")&&(A[a].trans="   ")}a++}),m(A),((d=s[s.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()}else s[a].trans===void 0&&(newLines[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[a]={src:b,trans:"[missing]"}),m(newLines),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()}).catch(h=>{var A;let d=s;s[a].trans===""&&(d[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(d[a]={src:b,trans:"[missing]"}),m(d),((A=s[s.length-1])==null?void 0:A.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",JSON.stringify(u))),S(),console.log(h)})},j=(b,a)=>{fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(b)})}).then(p=>p.json()).then(p=>{var h,d;if(p==null?void 0:p.trans){let w=s;w[a]={src:b,trans:p==null?void 0:p.trans},m(w),((h=s[s.length-1])==null?void 0:h.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()}else s[a].trans===void 0&&(newLines[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[a]={src:b,trans:"[missing]"}),m(newLines),((d=s[s.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()}).catch(p=>{var w;let h=s;s[a].trans===""&&(h[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(h[a]={src:b,trans:"[missing]"}),m(h),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(s)),S(),console.log(p)})},N=(b,a)=>{fetch(`${f}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:s,song_id:c,title:u})}).then(p=>p.json()).then(p=>{var d,w;let h=s;(p==null?void 0:p.trans.length)?(p.trans.map((A,M)=>{h[M]={src:h[M].src,trans:A}}),m(h),I.lsSaveSong({title:u,lines:s}),sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u),S()):(p==null?void 0:p.trans)?(h[a]={src:b,trans:p==null?void 0:p.trans},m(h),((d=s[s.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()):(s[a].trans===void 0&&(h[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(h[a]={src:b,trans:"[missing]"}),m(h),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S())}).catch(p=>{k(!0),console.log(p)})},q={getLines:y,getFullTrans:N,getPartlyTrans:v,getSingleLineTrans:j,checkNextTrans:S};return t(_.Provider,{value:x({title:u,currLyrics:i,lines:s,cou:z},q),children:e.children})}function Dt({className:e}){return l.exports.useContext(_),t(Z,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>t(ne,{to:n.url,children:t(G,{sx:{my:2},children:n.name})},n.name))})}C(Dt)`
  
`;function pt({className:e}){return t("div",{id:"",className:e,children:t(Ce,{children:t(ve,{className:"mui-rounded-icon"})})})}C(pt)`
  .mui-rounded-icon{
    background-color: ${e=>"#595959"};
    color: ${e=>"#595959"};
    border-radius: 12px;
  }
`;const dt=n=>{var u=n,{className:e}=u,r=O(u,["className"]);var E,s,m;l.exports.useContext(K);const o=l.exports.useContext(_),c=l.exports.useContext(H),D=l.exports.useContext(Y),i=function(){sessionStorage.removeItem("currLines"),location.reload()};return g(we,{position:"sticky",className:e,children:[D.main.open&&t(De,{color:"info"}),t(Ae,{maxWidth:"xl",children:g(Le,{disableGutters:!0,children:[t(ne,{to:"/",onClick:()=>{i()},children:g(F,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[t("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),t("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),o.lines[0]&&t(it,{})]})}),t(Ne,{in:(E=c.error)==null?void 0:E.open,children:g(te,{severity:"error",className:"error-alert",onClose:()=>{c.closeBanner("error")},children:[t(pe,{children:(s=c.error)==null?void 0:s.title}),(m=c.error)==null?void 0:m.message]})})]})},mt=C(dt)`
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
`;function ht(n){var u=n,{className:e}=u,r=O(u,["className"]);return t("div",{className:e,children:r.children})}const Et=C(ht)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.secondary.light};
`;function gt({className:e}){return t("div",{id:"FOOTER",className:e,children:t(T,{container:!0,rowSpacing:6,columnSpacing:2,children:g(T,{item:!0,xs:12,sm:4,children:[g(ee,{children:[t(Te,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),t(V,{component:X,href:"mailto:meturgamusic@gmail.com",children:t(W,{primary:"MeturgaMusic@gmail.com"})}),t(V,{component:X,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:t(W,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),t(ee,{children:t(V,{component:X,href:"https://basssites.com",className:"built-by",children:t(W,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]})})})}const ft=C(gt)`
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

`;function xt(n){var u=n,{className:e}=u,r=O(u,["className"]);const o=l.exports.useContext(K);return t(ke,{className:e,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.closeDrawer(!1)},children:t(Z,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.closeDrawer(!1)},children:t(o.child,{})})})}const yt=C(xt)`
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
`;function St({className:e}){const[r,n]=l.exports.useState(!0),u=()=>{n(!1)};return g(Ie,{id:"main-modal-root",className:e,open:r,onClose:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[t(ze,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),t(Be,{children:t(Oe,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),t(Fe,{children:t(G,{onClick:u,children:"Close"})})]})}C(St)`
  
`;function bt(n){var u=n,{className:e}=u,r=O(u,["className"]);const[o,c]=l.exports.useState(!0);return t($e,{className:e,open:o,onClose:()=>{c(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}C(bt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Ct({className:e}){return t("div",{id:"",className:e})}const vt=C(Ct)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function wt({className:e}){const[r,n]=l.exports.useState(!1),[u,o]=l.exports.useState(""),[c,D]=l.exports.useState(!1),i=l.exports.useContext(_),E=l.exports.useContext(H);l.exports.useEffect(()=>{o(i.title)},[i.title]),l.exports.useEffect(()=>{s()},[]);const s=()=>{I.getMobileOS()&&D(!0)};function m(){if(I.getMobileOS()){const f=document.querySelectorAll(".gsc-control-cse")[0];f.style.visibility="visible",f.style.marginTop="90px"}}l.exports.useEffect(()=>{window.onload=()=>{if(document.querySelector("#gcse-my-wrapper #___gcse_0"))m(),z();else{let y=function(){z()};const S=document.querySelector("#gcse-my-wrapper"),v={childList:!0,attributes:!0,subtree:!1};new MutationObserver(y).observe(S,v)}}},[]);function z(){n(!0);const f=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],y={childList:!1,attributes:!0,subtree:!1};function S(){B()}new MutationObserver(S).observe(f,y)}function J(f){o(f.target.value),k(f)}const B=()=>{setTimeout(()=>{let f=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");f&&f.forEach((y,S)=>{if(y.innerText.includes("Lyrics")){if(y.innerText.includes("(")){let N=y.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((N==null?void 0:N.includes("live"))||(N==null?void 0:N.includes("mix"))||(N==null?void 0:N.includes("remix"))){y.parentElement.parentElement.parentElement.remove();return}}let v=y.innerText.split("Lyrics")[0];v=v.replaceAll("\u2013","-"),y.innerText=v;const j={artistName:encodeURI(v.split("-")[0]),songName:encodeURI(v.split("-")[1])};y.nodeName!=="A"&&y.parentElement.parentElement.parentElement.addEventListener("click",N=>{var q;((q=E.error)==null?void 0:q.open)&&E.closeBanner("error"),y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",i.getLines(j,v)}),y.style.display="block"}else y.innerText.includes("Lyrics")||y.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&y.parentElement.parentElement.parentElement.remove()})},50)};function k(f){E.error&&E.closeBanner("error");let y=document.querySelector("#gsc-i-id1"),S=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(y)if(f.target.value.length<=1){let v=document.querySelector(".gsst_a");v&&v.dispatchEvent(new Event("click"))}else if(S.test(f.target.value)){y.value=f.target.value;let v=document.querySelectorAll(".gsc-search-box button")[0];v?setTimeout(()=>{v.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(E.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{E.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else E.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return g("div",{id:"",className:e,children:[!c&&t(Me,{id:"outlined-search",label:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:r?J:null,autoFocus:!1,autoComplete:"off",value:u}),t("div",{id:"gcse-my-wrapper",children:t("div",{className:"gcse-search"})})]})}C(wt)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: ${e=>e.theme.palette.primary.main+"!important"};
   border-color: ${e=>e.theme.palette.secondary.contrastText+"!important"};

   font-weight: 600;
    border-width: medium;
  }

`;function At(n){var u=n,{className:e}=u,r=O(u,["className"]);const o=l.exports.useContext(Q),[c,D]=l.exports.useState(!1),[i,E]=l.exports.useState([]),s=()=>{D(!0),i[0]||z()},m=()=>{D(!1)};function z(){const B="https://musicline-backend.vercel.app";let k=r.lyric.trim().toLowerCase();k=k.replaceAll(/[^a-zA-Z0-9']/g,""),k.slice(-1)==="'"&&(k=k.replaceAll("'","g")),fetch(`${B}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(k)})}).then(f=>f.json()).then(f=>{if(f==null?void 0:f.results[0]){E(f.results);return}else{E(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"]);return}}).catch(f=>{console.log(f)})}const J=()=>i[0]?i.map((B,k)=>g($,{children:[k>0&&t("hr",{}),t("p",{className:"tt-p",children:B})]})):t("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"});return t(Pe,{onClickAway:m,children:t(Re,{className:e,title:g($,{children:[t(F,{color:"inherit",style:{fontSize:o.fontSize.sm>=18?o.fontSize.sm-8:o.fontSize.sm,textAlign:"center"},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD: "}),t("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr",fontSize:o.fontSize.sm>=18?o.fontSize.sm-10:o.fontSize.sm},children:i[0]?t(J,{}):t(De,{sx:{margin:"8px"},color:"inherit"})})]}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:m,open:c,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:g("p",{className:"single-lyric",onClick:s,children:["\xA0 ",r.lyric," "]})})})}const re=C(At)`

`;function Lt({className:e}){return g(T,{id:"about_body",className:e,container:!0,children:[g(T,{className:"lyrics-line he-line",item:!0,xs:12,md:6,style:{fontSize:"25px"},children:["\u05DC\u05DE\u05D9 \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E9\u05D9\u05E8\u05D9\u05DD",t("br",{}),"\u05D0\u05D5 \u05E1\u05EA\u05DD \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D3\u05E2\u05EA \u05DE\u05D4 \u05D4\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05E9\u05DC \u05E9\u05D9\u05E8 \u05D0\u05D4\u05D5\u05D1",t("br",{}),t("br",{}),"\u05E9\u05DE\u05E0\u05D5 \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E0\u05D5\u05D7\u05D5\u05EA \u05DE\u05D9\u05E8\u05D1\u05D9\u05EA",t("br",{}),"\u05DE\u05D4\u05D9\u05E8 \u05E0\u05D5\u05D7 \u05E2\u05DD \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9",t("br",{}),"\u05D5\u05DC\u05DC\u05D0 \u05E4\u05D9\u05E6'\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05EA\u05E8\u05D9\u05DD \u05DE\u05E1\u05D1\u05D9\u05D1",t("br",{}),t("br",{}),"\u05DE\u05E4\u05E0\u05D9 \u05E9\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9",t("br",{}),"\u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D0\u05D3\u05DD",t("br",{}),"\u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05EA\u05D9\u05DD \u05DC\u05D0 \u05DE\u05D3\u05D5\u05D9\u05E7",t("br",{}),"\u05D5\u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",t("br",{}),"\u05DC\u05DE\u05D9\u05DC\u05D9\u05DD \u05DE\u05E1\u05D5\u05D9\u05DE\u05D5\u05EA",t("br",{}),t("br",{}),"\u05DC\u05DB\u05DF \u05D1\u05E0\u05D5\u05E1\u05E3",t("br",{}),"\u05D4\u05D1\u05D0\u05E0\u05D5 \u05E4\u05D9\u05E8\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9",t("br",{}),"\u05DB\u05DE\u05E2\u05D8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05E9\u05EA\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC\u05D9\u05D4",t("br",{}),"\u05DB\u05DA \u05D7\u05E1\u05DB\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA",t("br",{}),"\u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA",t("br",{}),t("br",{}),"\u05D4\u05DB\u05EA\u05D1 \u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9?",t("br",{}),"\u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8",t("br",{}),"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05D6\u05DB\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D4\u05E2\u05D3\u05E4\u05D4",t("br",{}),t("br",{}),t("br",{})]}),t(T,{item:!0,xs:12,md:6,children:[{src:"translated song example",trans:"\u05D3\u05D5\u05D2\u05DE\u05D0 \u05DC\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD"},{src:"english line",trans:"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"},{src:"and hebrew line after",trans:"\u05D5\u05D0\u05D7\u05E8\u05D9\u05D4 \u05E9\u05D5\u05E8\u05D4 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA"}].map((n,u)=>{var o;return g($,{children:[t(T,{className:"lyrics-line en-line",item:!0,style:{fontSize:"25px"},children:n.src.split(" ").map((c,D)=>t(re,{lyric:c},D+Math.random()))},u),t(T,{item:!0,className:"lyrics-line he-line",style:{fontSize:"22px"},children:t($,{children:((o=n.trans)==null?void 0:o.length)>2?n.trans.split(" ").map((c,D)=>{if(n.trans!=="   ")return g("small",{className:"single-trans",children:[c," \xA0"]},D+Math.random())}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]})})})]})}C(Lt)`
   margin: 25px 0;
   padding: 15px;
`;function Nt(n){var u=n,{className:e}=u,r=O(u,["className"]);const o=l.exports.useContext(_),c=l.exports.useContext(Q);return l.exports.useEffect(()=>{},[o.cou]),t(Z,{children:t(T,{container:!0,spacing:2,children:o.lines&&o.currLyrics&&g("div",{id:"lyrics_body",className:e,children:[t(F,{variant:"h6",noWrap:!0,component:"h3",style:{fontSize:c.fontSize.lg},children:o.title&&o.title.split(" ").map((D,i)=>t(re,{lyric:D},i))}),o.lines.map((D,i)=>{var E;return D.src.includes("[")&&(D.trans="   "),g("div",{children:[i>0&&D.src.includes("[")&&g($,{children:[t("br",{}),t("br",{})]}),t(T,{className:"lyrics-line en-line",item:!0,style:{fontSize:c.fontSize.md},children:D.src.split(" ").map((s,m)=>t(re,{lyric:s},m+Math.random()))}),t(T,{item:!0,className:"lyrics-line he-line",style:{fontSize:c.fontSize.sm},children:t($,{children:((E=D.trans)==null?void 0:E.length)>2?D.trans.split(" ").map((s,m)=>{if(D.trans!=="   ")return g("small",{className:"single-trans",children:[s," \xA0"]},m+Math.random())}):t("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},i)})]})})})}const le=C(Nt)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* max-width: 90%; */
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
`;function Tt({className:e}){const r=l.exports.useContext(_);function n(u){u.preventDefault()}return g("div",{className:e,children:[t("div",{className:"home-top",children:g(T,{container:!0,className:"home-t-container",children:[!r.currLyrics&&t(T,{item:!0,xs:12,sm:6,children:t(F,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),g(T,{item:!0,xs:12,sm:6,children:[!r.currLyrics&&g(F,{variant:"h3",className:"page-h3",children:[t("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),t("br",{}),t("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),t("br",{}),t("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),t("div",{className:"small-two",children:t("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),t(Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,className:"search-ctr"})]})]})}),!r.currLyrics&&t(le,{className:"lyrics-body",first:!0}),r.currLyrics&&t(le,{className:"lyrics-body"})]})}const kt=C(Tt)`
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
    
`;function It({className:e}){return g("div",{id:"NO_MATCH_WRAPPER",className:e,children:[t(F,{variant:"h2",className:"page-h2",children:"404"}),t(F,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const zt=C(It)`

`;function Bt({className:e}){var E,s;const r=l.exports.useContext(K),n=l.exports.useContext(Y),u=l.exports.useContext(H);l.exports.useRef(null);const o=_e({key:"muirtl",stylisPlugins:[Ue,Ve]});function c(){D()}const D=()=>{const m=document.createElement("script");m.type="text/javascript",m.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",m.defer=!0,document.body.appendChild(m)};l.exports.useEffect(()=>{c()},[u]);const i=m=>{u.closeBanner(m)};return ce({palette:{mode:"dark"}}),g("div",{className:e,children:[t(Je,{value:o,children:g(je,{children:[t(et,{}),t(mt,{className:"header"}),((E=u.main)==null?void 0:E.open)&&g(te,{severity:"warning",className:"main-alert",children:[t(pe,{children:u.main.title}),u.main.message]}),t(Et,{children:g(Ge,{children:[t(ae,{path:"/",element:t(kt,{className:"page"})}),t(ae,{path:"*",element:t(zt,{className:"page"})})]})}),r.open&&r.child&&t(yt,{className:"drawer"}),n.circular.open&&t(He,{color:n.main.color||"primary"}),((s=u.iosSnackbar)==null?void 0:s.open)&&t(qe,{open:u.iosSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:t(te,{onClose:()=>{i("iosSnackbar")},severity:u.iosSnackbar.severity,sx:{width:"100%"},children:u.iosSnackbar.message})}),t(ft,{})]})}),t(vt,{})]})}const Ot=C(Bt)`
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
`,Ft=[Ye,Xe,Qe,ct,ut];function $t(e){return t($,{children:Ft.reduceRight((r,n)=>t(n,{children:r}),e.children)})}We.render(t(R.StrictMode,{children:t($t,{children:t(Ze,{theme:de,children:t(Ot,{className:"app"})})})}),document.getElementById("root"));
