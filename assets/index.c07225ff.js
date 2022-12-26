var me=Object.defineProperty,he=Object.defineProperties;var Ee=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var ue=(t,r,n)=>r in t?me(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,x=(t,r)=>{for(var n in r||(r={}))oe.call(r,n)&&ue(t,n,r[n]);if(U)for(var n of U(r))ie.call(r,n)&&ue(t,n,r[n]);return t},L=(t,r)=>he(t,Ee(r));var O=(t,r)=>{var n={};for(var u in t)oe.call(t,u)&&r.indexOf(u)<0&&(n[u]=t[u]);if(t!=null&&U)for(var u of U(t))r.indexOf(u)<0&&ie.call(t,u)&&(n[u]=t[u]);return n};import{R as _,r as l,j as e,c as ce,M as ge,a as g,B as fe,b as G,d as xe,A as ye,s as C,L as ee,N as ne,e as V,f as W,g as Se,h as be,i as Z,I as Ce,k as ve,l as we,m as De,C as Ae,T as Le,n as F,o as Ne,p as te,q as pe,G as N,t as Te,u as X,v as ke,w as Ie,D as ze,x as Be,y as Oe,z as Fe,E as $e,F as Me,H as Pe,J as _e,K as $,O as Re,P as Je,Q as je,S as Ge,U as ae,V as He,W as qe,X as Ue,Y as Ve,Z as We,_ as Ze}from"./vendor.2b355312.js";const Ke=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const D of o)if(D.type==="childList")for(const c of D.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const D={};return o.integrity&&(D.integrity=o.integrity),o.referrerpolicy&&(D.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?D.credentials="include":o.crossorigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function u(o){if(o.ep)return;o.ep=!0;const D=n(o);fetch(o.href,D)}};Ke();const K=_.createContext(void 0);function Ye(t){const[r,n]=l.exports.useState({}),D={openDrawer:(c,i,E="temporary",s)=>{n({open:c,anchor:i,permanent:E,child:s})},closeDrawer:(c,i,E="temporary",s)=>{n({open:c,anchor:i,permanent:E,child:s})}};return e(K.Provider,{value:x(x({},r),D),children:t.children})}const Y=_.createContext(void 0);function Qe(t){const[r,n]=l.exports.useState({main:{open:!1,color:"inherit"},circular:{open:!1,color:"inherit"}}),c={createLoader:(i,E)=>{r[i]&&n(L(x({},r),{[i]:void 0})),n(L(x({},r),{[i]:{open:!1,color:E||"inherit"}}))},openLoader:i=>{r[i]?n(L(x({},r),{[i]:L(x({},r[i]),{open:!0})})):console.error("Loader does'nt exist. Name: "+i)},closeLoader:i=>{r[i]?n(L(x({},r),{[i]:L(x({},r[i]),{open:!1})})):console.error("Loader does'nt exist. Name: "+i)}};return e(Y.Provider,{value:x(x({},r),c),children:t.children})}const H=_.createContext(void 0);function Xe(t){const[r,n]=l.exports.useState({main:{open:!1,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(i,E,s,m)=>{r[i]&&n(L(x({},r),{[i]:void 0})),n(L(x({},r),{[i]:{open:!0,severity:E||"success",title:s||"",message:m||""}}))},openBanner:i=>{r[i]?n(L(x({},r),{[i]:L(x({},r[i]),{open:!0})})):console.error("Banner does'nt exist. Name: "+i)},closeBanner:i=>{r[i]?n(L(x({},r),{[i]:L(x({},r[i]),{open:!1})})):console.error("Banner does'nt exist. Name: "+i)}};return e(H.Provider,{value:x(x({},r),c),children:t.children})}const de=ce({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}});function et(){const[t]=l.exports.useState(de.palette.primary.main);return e("div",{className:"wrapper",children:e(ge,{children:e("meta",{name:"theme-color",content:t})})})}const tt=t=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const r=JSON.parse(localStorage.getItem("meturgamm_songs"));r.push(t),r.length>=500&&r.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(r))},rt=t=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(n=>n.title.toLowerCase()===t.toLowerCase()):!1,nt=()=>{let t=document.querySelector(".gsst_a");t&&t.dispatchEvent(new Event("click"))},st=()=>{let t=!1;const r=navigator.userAgent;return/android/i.test(r)?t=!1:(/iPad|iPhone|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(t=!0),t};var I={lsSaveSong:tt,lsGetSong:rt,clearGsc:nt,getMobileOS:st};const Q=_.createContext(void 0);function ut(t){const r=JSON.parse(localStorage.getItem("fontsize")),[n,u]=l.exports.useState({fontSize:{sm:Number(r==null?void 0:r.sm)||22,md:Number(r==null?void 0:r.md)||25,lg:Number(r==null?void 0:r.lg)||27},colors:"pink"}),o=()=>{n.fontSize.md<60&&(u(L(x({},n),{fontSize:{sm:n.fontSize.sm+1,md:n.fontSize.md+1,lg:n.fontSize.lg+1}})),c())},D=()=>{n.fontSize.sm>7&&(u(L(x({},n),{fontSize:{sm:n.fontSize.sm-1,md:n.fontSize.md-1,lg:n.fontSize.lg-1}})),c())};function c(){localStorage.setItem("fontsize",JSON.stringify({sm:n.fontSize.sm,md:n.fontSize.md,lg:n.fontSize.lg}))}function i(){localStorage.setItem("colors_mode",n.colors)}function E(m){u(L(x({},n),{colors:m})),i()}const s={reduceFontSize:D,increaseFontSize:o,setColors:E};return e(Q.Provider,{value:x(x({},n),s),children:t.children})}function ot({className:t}){const r=l.exports.useContext(Q);return e("div",{id:"",className:t,children:g(fe,{className:"button-group",children:[e(G,{"aria-label":"reduce",onClick:()=>{r.reduceFontSize()},children:e(xe,{fontSize:"small"})}),e(G,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(G,{"aria-label":"increase",onClick:()=>{r.increaseFontSize()},children:e(ye,{fontSize:"small"})})]})})}const it=C(ot)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: ${t=>t.theme.palette.secondary.light};
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

`,at=[];function lt(){return e(ee,{children:at.map((t,r)=>e(ne,{to:t.url,children:g(V,{button:!0,children:[e(W,{primary:t.name}),e(Se,{children:e(be,{})})]},t.name)},r))})}C(lt)`
  
`;const R=_.createContext(void 0);function ct(t){const r=l.exports.useContext(Y),n=l.exports.useContext(H),[u,o]=l.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[D,c]=l.exports.useState(""),[i,E]=l.exports.useState(sessionStorage.getItem("currLines")||!1),[s,m]=l.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[z,J]=l.exports.useState(0),[B,k]=l.exports.useState(!1);l.exports.useEffect(()=>{S()},[s]);const f="https://musicline-backend.vercel.app",y=(b,a)=>{a=a.replace(/[\])}[{(]/g,"").trim();let p=document.querySelectorAll(".gsc-expansionArea")[0],h=I.lsGetSong(a);if(h){p.style.pointerEvents="all",m(h.lines),o(a),E(h.lines),I.clearGsc(),S(),sessionStorage.setItem("currLines",JSON.stringify(h.lines)),sessionStorage.setItem("currSongTitle",a);return}r.openLoader("main"),fetch(`${f}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(d=>d.json()).then(d=>{if(r.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),p.style.pointerEvents="all",o(a),d==null?void 0:d.combined)c(d.id),m(d.combined),E(d.combined),I.lsSaveSong({title:a,lines:d.combined}),I.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(d.combined)),sessionStorage.setItem("currSongTitle",a),S();else if(d==null?void 0:d.lyrics){let w=d.lyrics,A=[];w.split(/(?:\r\n|\r|\n)/g).map(M=>{M.length>=2&&A.push({src:M.replace(".",""),trans:""})}),m(A),E(w),I.clearGsc(),S()}else n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(d=>{console.log("ERRORR "+d),console.log(d),r.closeLoader("main"),n.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),p.style.pointerEvents="all"})},S=()=>{let b=!1;for(let a=0;a<s.length;a++){let p=s[a];if(b===!0)break;if(p.trans.length<=1||p.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."){b=!0,B?j(p.src,a):T(p.src,a);break}else continue}J(z+1)},v=(b,a)=>{let p="";for(let h=a;h<s.length;h++){const d=s[h];if(p.length>=1600)break;d.trans==="   "&&(p+=d.src+" $. "),d.trans!="   "&&(p+=` ${h} ${d.src} . `)}fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(p)})}).then(h=>h.json()).then(h=>{var d,w;if((h==null?void 0:h.trans.length)>=1){let A=s;h.trans.split(".").map(P=>{try{if(console.log(P),P.includes("$")||P.includes("["))A[a].trans="   ";else{let se=Number(P.match(/\d+/)[0].replaceAll(".",""));A[se].trans=P.replace(se,"")}}catch{P.includes("$")&&(A[a].trans="   ")}a++}),m(A),((d=s[s.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()}else s[a].trans===void 0&&(newLines[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[a]={src:b,trans:"[missing]"}),m(newLines),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()}).catch(h=>{var A;let d=s;s[a].trans===""&&(d[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(d[a]={src:b,trans:"[missing]"}),m(d),((A=s[s.length-1])==null?void 0:A.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",JSON.stringify(u))),S(),console.log(h)})},j=(b,a)=>{fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(b)})}).then(p=>p.json()).then(p=>{var h,d;if(p==null?void 0:p.trans){let w=s;w[a]={src:b,trans:p==null?void 0:p.trans},m(w),((h=s[s.length-1])==null?void 0:h.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()}else s[a].trans===void 0&&(newLines[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[a]={src:b,trans:"[missing]"}),m(newLines),((d=s[s.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()}).catch(p=>{var w;let h=s;s[a].trans===""&&(h[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(h[a]={src:b,trans:"[missing]"}),m(h),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(s)),S(),console.log(p)})},T=(b,a)=>{fetch(`${f}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:s,song_id:D,title:u})}).then(p=>p.json()).then(p=>{var d,w;let h=s;(p==null?void 0:p.trans.length)?(p.trans.map((A,M)=>{h[M]={src:h[M].src,trans:A}}),m(h),I.lsSaveSong({title:u,lines:s}),sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u),S()):(p==null?void 0:p.trans)?(h[a]={src:b,trans:p==null?void 0:p.trans},m(h),((d=s[s.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S()):(s[a].trans===void 0&&(h[a]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),s[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(h[a]={src:b,trans:"[missing]"}),m(h),((w=s[s.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(s)),sessionStorage.setItem("currSongTitle",u)),S())}).catch(p=>{k(!0),console.log(p)})},q={getLines:y,getFullTrans:T,getPartlyTrans:v,getSingleLineTrans:j,checkNextTrans:S};return e(R.Provider,{value:x({title:u,currLyrics:i,lines:s,cou:z},q),children:t.children})}function Dt({className:t}){return l.exports.useContext(R),e(Z,{className:t,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(n=>e(ne,{to:n.url,children:e(G,{sx:{my:2},children:n.name})},n.name))})}C(Dt)`
  
`;function pt({className:t}){return e("div",{id:"",className:t,children:e(Ce,{children:e(ve,{className:"mui-rounded-icon"})})})}C(pt)`
  .mui-rounded-icon{
    background-color: ${t=>"#595959"};
    color: ${t=>"#595959"};
    border-radius: 12px;
  }
`;const dt=n=>{var u=n,{className:t}=u,r=O(u,["className"]);var E,s,m;l.exports.useContext(K);const o=l.exports.useContext(R),D=l.exports.useContext(H),c=l.exports.useContext(Y),i=function(){sessionStorage.removeItem("currLines"),location.reload()};return g(we,{position:"sticky",className:t,children:[c.main.open&&e(De,{color:c.main.color||"primary"}),e(Ae,{maxWidth:"xl",children:g(Le,{disableGutters:!0,children:[e(ne,{to:"/",onClick:()=>{i()},children:g(F,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),o.lines[0]&&e(it,{})]})}),e(Ne,{in:(E=D.error)==null?void 0:E.open,children:g(te,{severity:"error",className:"error-alert",onClose:()=>{D.closeBanner("error")},children:[e(pe,{children:(s=D.error)==null?void 0:s.title}),(m=D.error)==null?void 0:m.message]})})]})},mt=C(dt)`
  background-color: ${t=>t.theme.palette.primary.dark};
  color: ${t=>t.theme.palette.secondary.dark};
  z-index: 2000;

  @media (max-width: 600px) {
    background-color: ${t=>t.theme.palette.primary.main};
  }

  a{
    color: ${t=>t.theme.palette.primary.main};
    &hover{
      color: #8e8b8b;
    }

    #h2-part1, #h2-part2{
      font-weight: 600;
    }

    #h2-part1{
      color:  ${t=>t.theme.palette.secondary.dark};
    }

    #h2-part2{
      color:  ${t=>t.theme.palette.secondary.light};
    }
  }
  
  button{
    color: ${t=>t.theme.palette.secondary.main};
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
`;function ht(n){var u=n,{className:t}=u,r=O(u,["className"]);return e("div",{className:t,children:r.children})}const Et=C(ht)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${t=>t.theme.palette.secondary.light};
`;function gt({className:t}){return e("div",{id:"FOOTER",className:t,children:e(N,{container:!0,rowSpacing:6,columnSpacing:2,children:g(N,{item:!0,xs:12,sm:4,children:[g(ee,{children:[e(Te,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e(V,{component:X,href:"mailto:meturgamusic@gmail.com",children:e(W,{primary:"MeturgaMusic@gmail.com"})}),e(V,{component:X,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(W,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(ee,{children:e(V,{component:X,href:"https://basssites.com",className:"built-by",children:e(W,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]})})})}const ft=C(gt)`
  /* color: ${t=>t.theme.palette.primary.contrastText}; */
  background-color: ${t=>t.theme.palette.primary.main};
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
    color: ${t=>t.theme.palette.secondary.dark};
    color: white;
    margin: unset;
  }

  .built-by{
    color: white;
  }

`;function xt(n){var u=n,{className:t}=u,r=O(u,["className"]);const o=l.exports.useContext(K);return e(ke,{className:t,anchor:o.anchor,open:o.open,variant:o.permanent,onClose:()=>{o.closeDrawer(!1)},children:e(Z,{className:"drawer-layout",sx:{width:o.anchor==="top"||o.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{o.closeDrawer(!1)},children:e(o.child,{})})})}const yt=C(xt)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${t=>t.theme.palette.primary.light};
    color: ${t=>t.theme.palette.secondary.main};
  }

  svg{
    color: ${t=>t.theme.palette.secondary.main};
  }

  a{
    color: ${t=>t.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function St({className:t}){const[r,n]=l.exports.useState(!0),u=()=>{n(!1)};return g(Ie,{id:"main-modal-root",className:t,open:r,onClose:u,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(ze,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(Be,{children:e(Oe,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Fe,{children:e(G,{onClick:u,children:"Close"})})]})}C(St)`
  
`;function bt(n){var u=n,{className:t}=u,r=O(u,["className"]);const[o,D]=l.exports.useState(!0);return e($e,{className:t,open:o,onClose:()=>{D(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:r.children})}C(bt)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Ct({className:t}){return e("div",{id:"",className:t})}const vt=C(Ct)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function wt({className:t}){const[r,n]=l.exports.useState(!1),[u,o]=l.exports.useState(""),[D,c]=l.exports.useState(!1),i=l.exports.useContext(R),E=l.exports.useContext(H);l.exports.useEffect(()=>{o(i.title)},[i.title]),l.exports.useEffect(()=>{s()},[]);const s=()=>{I.getMobileOS()&&c(!0)};function m(){if(I.getMobileOS()){const f=document.querySelectorAll(".gsc-control-cse")[0];f.style.visibility="visible",f.style.marginTop="90px"}}l.exports.useEffect(()=>{window.onload=()=>{if(document.querySelector("#gcse-my-wrapper #___gcse_0"))m(),z();else{let y=function(){z()};const S=document.querySelector("#gcse-my-wrapper"),v={childList:!0,attributes:!0,subtree:!1};new MutationObserver(y).observe(S,v)}}},[]);function z(){n(!0);const f=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],y={childList:!1,attributes:!0,subtree:!1};function S(){B()}new MutationObserver(S).observe(f,y)}function J(f){o(f.target.value),k(f)}const B=()=>{setTimeout(()=>{let f=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");f&&f.forEach((y,S)=>{if(y.innerText.includes("Lyrics")){if(y.innerText.includes("(")){let T=y.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((T==null?void 0:T.includes("live"))||(T==null?void 0:T.includes("mix"))||(T==null?void 0:T.includes("remix"))){y.parentElement.parentElement.parentElement.remove();return}}let v=y.innerText.split("Lyrics")[0];v=v.replaceAll("\u2013","-"),y.innerText=v;const j={artistName:encodeURI(v.split("-")[0]),songName:encodeURI(v.split("-")[1])};y.nodeName!=="A"&&y.parentElement.parentElement.parentElement.addEventListener("click",T=>{var q;((q=E.error)==null?void 0:q.open)&&E.closeBanner("error"),y.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",i.getLines(j,v)}),y.style.display="block"}else y.innerText.includes("Lyrics")||y.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&y.parentElement.parentElement.parentElement.remove()})},50)};function k(f){E.error&&E.closeBanner("error");let y=document.querySelector("#gsc-i-id1"),S=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(y)if(f.target.value.length<=1){let v=document.querySelector(".gsst_a");v&&v.dispatchEvent(new Event("click"))}else if(S.test(f.target.value)){y.value=f.target.value;let v=document.querySelectorAll(".gsc-search-box button")[0];v?setTimeout(()=>{v.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(E.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{E.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else E.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return g("div",{id:"",className:t,children:[!D&&e(Me,{id:"outlined-search",label:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:r?J:null,autoFocus:!1,autoComplete:"off",value:u}),e("div",{id:"gcse-my-wrapper",children:e("div",{className:"gcse-search"})})]})}const At=C(wt)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: ${t=>t.theme.palette.primary.main+"!important"};
   border-color: ${t=>t.theme.palette.secondary.contrastText+"!important"};

   font-weight: 600;
    border-width: medium;
  }

`;function Lt(n){var u=n,{className:t}=u,r=O(u,["className"]);const o=l.exports.useContext(Q),[D,c]=l.exports.useState(!1),[i,E]=l.exports.useState([]),s=()=>{c(!0),i[0]||z()},m=()=>{c(!1)};function z(){const B="https://musicline-backend.vercel.app";let k=r.lyric.trim().toLowerCase();k=k.replaceAll(/[^a-zA-Z0-9']/g,""),k.slice(-1)==="'"&&(k=k.replaceAll("'","g")),fetch(`${B}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(k)})}).then(f=>f.json()).then(f=>{if(f==null?void 0:f.results[0]){E(f.results);return}else{E(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"]);return}}).catch(f=>{console.log(f)})}const J=()=>i[0]?i.map((B,k)=>g($,{children:[k>0&&e("hr",{}),e("p",{className:"tt-p",children:B})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"});return e(Pe,{onClickAway:m,children:e(_e,{className:t,title:g($,{children:[e(F,{color:"inherit",style:{fontSize:o.fontSize.sm>=18?o.fontSize.sm-8:o.fontSize.sm,textAlign:"center"},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD: "}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr",fontSize:o.fontSize.sm>=18?o.fontSize.sm-10:o.fontSize.sm},children:i[0]?e(J,{}):e(De,{sx:{margin:"8px"},color:"inherit"})})]}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:m,open:D,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:g("p",{className:"single-lyric",onClick:s,children:["\xA0 ",r.lyric," "]})})})}const re=C(Lt)`

`;function Nt({className:t}){return g(N,{id:"about_body",className:t,container:!0,children:[g(N,{className:"lyrics-line he-line",item:!0,xs:12,md:6,style:{fontSize:"25px"},children:["\u05DC\u05DE\u05D9 \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E9\u05D9\u05E8\u05D9\u05DD",e("br",{}),"\u05D0\u05D5 \u05E1\u05EA\u05DD \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D3\u05E2\u05EA \u05DE\u05D4 \u05D4\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05E9\u05DC \u05E9\u05D9\u05E8 \u05D0\u05D4\u05D5\u05D1",e("br",{}),e("br",{}),"\u05E9\u05DE\u05E0\u05D5 \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E0\u05D5\u05D7\u05D5\u05EA \u05DE\u05D9\u05E8\u05D1\u05D9\u05EA",e("br",{}),"\u05DE\u05D4\u05D9\u05E8 \u05E0\u05D5\u05D7 \u05E2\u05DD \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9",e("br",{}),"\u05D5\u05DC\u05DC\u05D0 \u05E4\u05D9\u05E6'\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05EA\u05E8\u05D9\u05DD \u05DE\u05E1\u05D1\u05D9\u05D1",e("br",{}),e("br",{}),"\u05DE\u05E4\u05E0\u05D9 \u05E9\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9",e("br",{}),"\u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D0\u05D3\u05DD",e("br",{}),"\u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05EA\u05D9\u05DD \u05DC\u05D0 \u05DE\u05D3\u05D5\u05D9\u05E7",e("br",{}),"\u05D5\u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",e("br",{}),"\u05DC\u05DE\u05D9\u05DC\u05D9\u05DD \u05DE\u05E1\u05D5\u05D9\u05DE\u05D5\u05EA",e("br",{}),e("br",{}),"\u05DC\u05DB\u05DF \u05D1\u05E0\u05D5\u05E1\u05E3",e("br",{}),"\u05D4\u05D1\u05D0\u05E0\u05D5 \u05E4\u05D9\u05E8\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9",e("br",{}),"\u05DB\u05DE\u05E2\u05D8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05E9\u05EA\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC\u05D9\u05D4",e("br",{}),"\u05DB\u05DA \u05D7\u05E1\u05DB\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA",e("br",{}),"\u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA",e("br",{}),e("br",{}),"\u05D4\u05DB\u05EA\u05D1 \u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9?",e("br",{}),"\u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8",e("br",{}),"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05D6\u05DB\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D4\u05E2\u05D3\u05E4\u05D4",e("br",{}),e("br",{}),e("br",{})]}),e(N,{item:!0,xs:12,md:6,children:[{src:"translated song example",trans:"\u05D3\u05D5\u05D2\u05DE\u05D0 \u05DC\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD"},{src:"english line",trans:"\u05E9\u05D5\u05E8\u05D4 \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"},{src:"and hebrew line after",trans:"\u05D5\u05D0\u05D7\u05E8\u05D9\u05D4 \u05E9\u05D5\u05E8\u05D4 \u05D1\u05E2\u05D1\u05E8\u05D9\u05EA"}].map((n,u)=>{var o;return g($,{children:[e(N,{className:"lyrics-line en-line",item:!0,style:{fontSize:"25px"},children:n.src.split(" ").map((D,c)=>e(re,{lyric:D},c+Math.random()))},u),e(N,{item:!0,className:"lyrics-line he-line",style:{fontSize:"22px"},children:e($,{children:((o=n.trans)==null?void 0:o.length)>2?n.trans.split(" ").map((D,c)=>{if(n.trans!=="   ")return g("small",{className:"single-trans",children:[D," \xA0"]},c+Math.random())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]})})})]})}const Tt=C(Nt)`
   margin: 25px 0;
   padding: 15px;
`;function kt(n){var u=n,{className:t}=u,r=O(u,["className"]);const o=l.exports.useContext(R),D=l.exports.useContext(Q);return l.exports.useEffect(()=>{},[o.cou]),e(Z,{children:g(N,{container:!0,spacing:2,children:[r.first&&e(N,{id:"lyrics_body",className:t,container:!0,children:e(Tt,{})}),o.lines&&o.currLyrics&&g("div",{id:"lyrics_body",className:t,children:[e(F,{variant:"h6",noWrap:!0,component:"h3",style:{fontSize:D.fontSize.lg},children:o.title&&o.title.split(" ").map((c,i)=>e(re,{lyric:c},i))}),o.lines.map((c,i)=>{var E;return c.src.includes("[")&&(c.trans="   "),g("div",{children:[i>0&&c.src.includes("[")&&g($,{children:[e("br",{}),e("br",{})]}),e(N,{className:"lyrics-line en-line",item:!0,style:{fontSize:D.fontSize.md},children:c.src.split(" ").map((s,m)=>e(re,{lyric:s},m+Math.random()))}),e(N,{item:!0,className:"lyrics-line he-line",style:{fontSize:D.fontSize.sm},children:e($,{children:((E=c.trans)==null?void 0:E.length)>2?c.trans.split(" ").map((s,m)=>{if(c.trans!=="   ")return g("small",{className:"single-trans",children:[s," \xA0"]},m+Math.random())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},i)})]})]})})}const le=C(kt)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  /* max-width: 90%; */
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding: 15px 50px;
  padding-bottom: 40px;
  padding-inline-start: 50px;
  margin-top: ${t=>t.first?"100px":"55px"};

  background-color: ${t=>t.theme.palette.primary.light};
  color:  ${t=>t.theme.palette.primary.contrastText};
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
`;function It({className:t}){const r=l.exports.useContext(R);function n(u){u.preventDefault()}return g("div",{className:t,children:[e("div",{className:"home-top",children:g(N,{container:!0,className:"home-t-container",children:[!r.currLyrics&&e(N,{item:!0,xs:12,sm:6,children:e(F,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),g(N,{item:!0,xs:12,sm:6,children:[!r.currLyrics&&g(F,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),e(Z,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:n,className:"search-ctr",children:e(At,{})})]})]})}),!r.currLyrics&&e(le,{className:"lyrics-body",first:!0}),r.currLyrics&&e(le,{className:"lyrics-body"})]})}const zt=C(It)`
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

        color: ${t=>t.theme.palette.primary.main};
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
        border-color: ${t=>t.theme.palette.primary.dark};;

        @media (max-width: 600px) {
            width: 95%;
        }
    };

    .MuiTextField-root * { 
        color: ${t=>t.theme.palette.primary.dark};;
        border-color: ${t=>t.theme.palette.primary.dark};;
    }

    .lyrics-body, .MuiGrid-root, .muirtl-mhc70k-MuiGrid-root{
        direction: ltr;
    }
    
`;function Bt({className:t}){return g("div",{id:"NO_MATCH_WRAPPER",className:t,children:[e(F,{variant:"h2",className:"page-h2",children:"404"}),e(F,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Ot=C(Bt)`

`;function Ft({className:t}){var E,s;const r=l.exports.useContext(K),n=l.exports.useContext(Y),u=l.exports.useContext(H);l.exports.useRef(null);const o=Re({key:"muirtl",stylisPlugins:[Ue,Ve]});function D(){c()}const c=()=>{const m=document.createElement("script");m.type="text/javascript",m.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",m.defer=!0,document.body.appendChild(m)};l.exports.useEffect(()=>{D()},[u]);const i=m=>{u.closeBanner(m)};return ce({palette:{mode:"dark"}}),g("div",{className:t,children:[e(Je,{value:o,children:g(je,{children:[e(et,{}),e(mt,{className:"header"}),((E=u.main)==null?void 0:E.open)&&g(te,{severity:"warning",className:"main-alert",children:[e(pe,{children:u.main.title}),u.main.message]}),e(Et,{children:g(Ge,{children:[e(ae,{path:"/",element:e(zt,{className:"page"})}),e(ae,{path:"*",element:e(Ot,{className:"page"})})]})}),r.open&&r.child&&e(yt,{className:"drawer"}),n.circular.open&&e(He,{color:n.main.color||"primary"}),((s=u.iosSnackbar)==null?void 0:s.open)&&e(qe,{open:u.iosSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(te,{onClose:()=>{i("iosSnackbar")},severity:u.iosSnackbar.severity,sx:{width:"100%"},children:u.iosSnackbar.message})}),e(ft,{})]})}),e(vt,{})]})}const $t=C(Ft)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  color: ${t=>t.theme.palette.primary.contrastText};

  .page-h1{
    padding: 30px 0px 0px 0px;
    font-size: 140px; 
    font-weight: 100;
    color: ${t=>t.theme.palette.primary.contrastText};
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
    color: ${t=>t.theme.palette.primary.contrastText};

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
    background-color: ${t=>t.theme.palette.secondary.dark};
    color: ${t=>t.theme.palette.primary.contrastText};
    border-radius: unset;

    @media (min-width: 600px) {
      letter-spacing: 0.5px;
      word-spacing: 0.5px;
    }
  }

  .loader{
      padding: 20px;
  }
`,Mt=[Ye,Xe,Qe,ct,ut];function Pt(t){return e($,{children:Mt.reduceRight((r,n)=>e(n,{children:r}),t.children)})}We.render(e(_.StrictMode,{children:e(Pt,{children:e(Ze,{theme:de,children:e($t,{className:"app"})})})}),document.getElementById("root"));
