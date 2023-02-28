var fu=Object.defineProperty,Cu=Object.defineProperties;var Au=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var su=Object.prototype.hasOwnProperty,ou=Object.prototype.propertyIsEnumerable;var nu=(e,D,t)=>D in e?fu(e,D,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[D]=t,C=(e,D)=>{for(var t in D||(D={}))su.call(D,t)&&nu(e,t,D[t]);if(W)for(var t of W(D))ou.call(D,t)&&nu(e,t,D[t]);return e},L=(e,D)=>Cu(e,Au(D));var O=(e,D)=>{var t={};for(var n in e)su.call(e,n)&&D.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&W)for(var n of W(e))D.indexOf(n)<0&&ou.call(e,n)&&(t[n]=e[n]);return t};import{R as _,r as E,j as u,c as au,a as d,M as xu,B as yu,b as G,d as bu,A as Su,s as b,L as Q,N as tu,e as J,f as H,g as vu,h as wu,i as Y,I as Lu,k as Bu,l as Nu,m as lu,C as Tu,T as ku,n as $,o as Iu,p as Du,q as cu,G as F,t as Fu,u as Z,v as zu,w as Ou,D as $u,x as Mu,y as Pu,z as _u,E as Ru,F as ju,H as Ju,J as Hu,K as U,O as Gu,P as Uu,Q as qu,S as Vu,U as Wu,V as K,W as Zu,X as Ku,Y as Qu,Z as Yu,_ as Xu,$ as u0}from"./vendor.d8998b59.js";const e0=function(){const D=document.createElement("link").relList;if(D&&D.supports&&D.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}};e0();const X=_.createContext(void 0);function D0(e){const[D,t]=E.exports.useState({}),i={openDrawer:(c,o,g="temporary",r)=>{t({open:c,anchor:o,permanent:g,child:r})},closeDrawer:(c,o,g="temporary",r)=>{t({open:c,anchor:o,permanent:g,child:r})}};return u(X.Provider,{value:C(C({},D),i),children:e.children})}const uu=_.createContext(void 0);function t0(e){const[D,t]=E.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),c={createLoader:(o,g)=>{D[o]&&t(L(C({},D),{[o]:void 0})),t(L(C({},D),{[o]:{open:!1,color:g||"inherit"}}))},openLoader:o=>{D[o]?t(L(C({},D),{[o]:L(C({},D[o]),{open:!0})})):console.error("Loader does'nt exist. Name: "+o)},closeLoader:o=>{D[o]?t(L(C({},D),{[o]:L(C({},D[o]),{open:!1})})):console.error("Loader does'nt exist. Name: "+o)}};return u(uu.Provider,{value:C(C({},D),c),children:e.children})}const q=_.createContext(void 0);function r0(e){const[D,t]=E.exports.useState({main:{open:!1,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(o,g,r,h)=>{D[o]&&t(L(C({},D),{[o]:void 0})),t(L(C({},D),{[o]:{open:!0,severity:g||"success",title:r||"",message:h||""}}))},openBanner:o=>{D[o]?t(L(C({},D),{[o]:L(C({},D[o]),{open:!0})})):console.error("Banner does'nt exist. Name: "+o)},closeBanner:o=>{D[o]?t(L(C({},D),{[o]:L(C({},D[o]),{open:!1})})):console.error("Banner does'nt exist. Name: "+o)}};return u(q.Provider,{value:C(C({},D),c),children:e.children})}const du=au({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}});function n0(e){const[D]=E.exports.useState(du.palette.primary.main);return u("div",{className:"wrapper",children:d(xu,{children:[u("title",{children:e.currTitle}),u("meta",{name:"theme-color",content:D})]})})}const s0=e=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const D=JSON.parse(localStorage.getItem("meturgamm_songs"));D.push(e),D.length>=500&&D.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(D))},o0=e=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(t=>t.title.toLowerCase()===e.toLowerCase()):!1,i0=()=>{let e=document.querySelector(".gsst_a");e&&e.dispatchEvent(new Event("click"))},E0=()=>{let e=!1;const D=navigator.userAgent;return/android/i.test(D)?e=!1:(/iPad|iPhone|iPod/.test(D)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(e=!0),e};var I={lsSaveSong:s0,lsGetSong:o0,clearGsc:i0,getMobileOS:E0};const eu=_.createContext(void 0);function a0(e){const D=JSON.parse(localStorage.getItem("fontsize")),[t,n]=E.exports.useState({fontSize:{sm:Number(D==null?void 0:D.sm)||22,md:Number(D==null?void 0:D.md)||25,lg:Number(D==null?void 0:D.lg)||27},colors:"pink"}),s=()=>{t.fontSize.md<60&&(n(L(C({},t),{fontSize:{sm:t.fontSize.sm+1,md:t.fontSize.md+1,lg:t.fontSize.lg+1}})),c())},i=()=>{t.fontSize.sm>7&&(n(L(C({},t),{fontSize:{sm:t.fontSize.sm-1,md:t.fontSize.md-1,lg:t.fontSize.lg-1}})),c())};function c(){localStorage.setItem("fontsize",JSON.stringify({sm:t.fontSize.sm,md:t.fontSize.md,lg:t.fontSize.lg}))}function o(){localStorage.setItem("colors_mode",t.colors)}function g(h){n(L(C({},t),{colors:h})),o()}const r={reduceFontSize:i,increaseFontSize:s,setColors:g};return u(eu.Provider,{value:C(C({},t),r),children:e.children})}function l0({className:e}){const D=E.exports.useContext(eu);return u("div",{id:"",className:e,children:d(yu,{className:"button-group",children:[u(G,{"aria-label":"reduce",onClick:()=>{D.reduceFontSize()},children:u(bu,{fontSize:"small"})}),u(G,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),u(G,{"aria-label":"increase",onClick:()=>{D.increaseFontSize()},children:u(Su,{fontSize:"small"})})]})})}const c0=b(l0)`
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

`,d0=[];function p0(){return u(Q,{children:d0.map((e,D)=>u(tu,{to:e.url,children:d(J,{button:!0,children:[u(H,{primary:e.name}),u(vu,{children:u(wu,{})})]},e.name)},D))})}b(p0)`
  
`;const R=_.createContext(void 0);function m0(e){const D=E.exports.useContext(uu),t=E.exports.useContext(q),[n,s]=E.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[i,c]=E.exports.useState(""),[o,g]=E.exports.useState(sessionStorage.getItem("currLines")||!1),[r,h]=E.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[k,N]=E.exports.useState(0),[z,T]=E.exports.useState(!1);E.exports.useEffect(()=>{x()},[r]);const f="https://musicline-backend.vercel.app",A=(y,a)=>{a=a.replace(/[\])}[{(]/g,"").trim();let l=document.querySelectorAll(".gsc-expansionArea")[0];debugger;let m=I.lsGetSong(a);if(m){l&&(l.style.pointerEvents="all"),h(m.lines),s(a),g(m.lines),I.clearGsc(),x(),sessionStorage.setItem("currLines",JSON.stringify(m.lines)),sessionStorage.setItem("currSongTitle",a);return}D.openLoader("main");debugger;fetch(`${f}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:y})}).then(p=>p.json()).then(p=>{if(D.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),l&&(l.style.pointerEvents="all"),s(a),p==null?void 0:p.combined)c(p.id),h(p.combined),g(p.combined),I.lsSaveSong({title:a,lines:p.combined}),I.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(p.combined)),sessionStorage.setItem("currSongTitle",a),x();else if(p==null?void 0:p.lyrics){let v=p.lyrics,w=[];v.split(/(?:\r\n|\r|\n)/g).map(M=>{M.length>=2&&w.push({src:M.replace(".",""),trans:""})}),h(w),g(v),I.clearGsc(),x()}else t.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(p=>{console.log("ERRORR "+p),console.log(p),D.closeLoader("main"),t.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),l&&(l.style.pointerEvents="all")})},x=()=>{let y=!1;for(let a=0;a<r.length;a++){let l=r[a];if(y===!0)break;if(l.trans.length<=1||l.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."){y=!0,z?j(l.src,a):B(l.src,a);break}else continue}N(k+1)},S=(y,a)=>{let l="";for(let m=a;m<r.length;m++){const p=r[m];if(l.length>=1600)break;p.trans==="   "&&(l+=p.src+" $. "),p.trans!="   "&&(l+=` ${m} ${p.src} . `)}fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(l)})}).then(m=>m.json()).then(m=>{var p,v;if((m==null?void 0:m.trans.length)>=1){let w=r;m.trans.split(".").map(P=>{try{if(console.log(P),P.includes("$")||P.includes("["))w[a].trans="   ";else{let ru=Number(P.match(/\d+/)[0].replaceAll(".",""));w[ru].trans=P.replace(ru,"")}}catch{P.includes("$")&&(w[a].trans="   ")}a++}),h(w),((p=r[r.length-1])==null?void 0:p.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()}else r[a].trans===void 0&&(newLines[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[a]={src:y,trans:"[missing]"}),h(newLines),((v=r[r.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()}).catch(m=>{var w;let p=r;r[a].trans===""&&(p[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(p[a]={src:y,trans:"[missing]"}),h(p),((w=r[r.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",JSON.stringify(n))),x(),console.log(m)})},j=(y,a)=>{fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(y)})}).then(l=>l.json()).then(l=>{var m,p;if(l==null?void 0:l.trans){let v=r;v[a]={src:y,trans:l==null?void 0:l.trans},h(v),((m=r[r.length-1])==null?void 0:m.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()}else r[a].trans===void 0&&(newLines[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[a]={src:y,trans:"[missing]"}),h(newLines),((p=r[r.length-1])==null?void 0:p.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()}).catch(l=>{var v;let m=r;r[a].trans===""&&(m[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(m[a]={src:y,trans:"[missing]"}),h(m),((v=r[r.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(r)),x(),console.log(l)})},B=(y,a)=>{fetch(`${f}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:r,song_id:i,title:n})}).then(l=>l.json()).then(l=>{var p,v;let m=r;(l==null?void 0:l.trans.length)?(l.trans.map((w,M)=>{m[M]={src:m[M].src,trans:w}}),h(m),I.lsSaveSong({title:n,lines:r}),sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n),x()):(l==null?void 0:l.trans)?(m[a]={src:y,trans:l==null?void 0:l.trans},h(m),((p=r[r.length-1])==null?void 0:p.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()):(r[a].trans===void 0&&(m[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(m[a]={src:y,trans:"[missing]"}),h(m),((v=r[r.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x())}).catch(l=>{T(!0),console.log(l)})},V={getLines:A,getFullTrans:B,getPartlyTrans:S,getSingleLineTrans:j,checkNextTrans:x};return u(R.Provider,{value:C({title:n,currLyrics:o,lines:r,cou:k},V),children:e.children})}function g0({className:e}){return E.exports.useContext(R),u(Y,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(t=>u(tu,{to:t.url,children:u(G,{sx:{my:2},children:t.name})},t.name))})}b(g0)`
  
`;function h0({className:e}){return u("div",{id:"",className:e,children:u(Lu,{children:u(Bu,{className:"mui-rounded-icon"})})})}b(h0)`
  .mui-rounded-icon{
    background-color: ${e=>"#595959"};
    color: ${e=>"#595959"};
    border-radius: 12px;
  }
`;const f0=t=>{var n=t,{className:e}=n,D=O(n,["className"]);var g,r,h;E.exports.useContext(X);const s=E.exports.useContext(R),i=E.exports.useContext(q),c=E.exports.useContext(uu),o=function(){sessionStorage.removeItem("currLines"),location.reload()};return d(Nu,{position:"sticky",className:e,children:[c.main.open&&u(lu,{color:c.main.color}),u(Tu,{maxWidth:"xl",children:d(ku,{disableGutters:!0,children:[u(tu,{to:"/",onClick:()=>{o()},children:d($,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[u("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),u("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),s.lines[0]&&u(c0,{})]})}),u(Iu,{in:(g=i.error)==null?void 0:g.open,children:d(Du,{severity:"error",className:"error-alert",onClose:()=>{i.closeBanner("error")},children:[u(cu,{children:(r=i.error)==null?void 0:r.title}),(h=i.error)==null?void 0:h.message]})})]})},C0=b(f0)`
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
`;function A0(t){var n=t,{className:e}=n,D=O(n,["className"]);return u("div",{className:e,children:D.children})}const x0=b(A0)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.secondary.light};
`;function y0({className:e}){return u("div",{id:"FOOTER",className:e,children:u(F,{container:!0,rowSpacing:6,columnSpacing:2,children:d(F,{item:!0,xs:12,sm:4,children:[d(Q,{children:[u(Fu,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),u(J,{component:Z,href:"mailto:meturgamusic@gmail.com",children:u(H,{primary:"MeturgaMusic@gmail.com"})}),u(J,{component:Z,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:u(H,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),u(Q,{children:u(J,{component:Z,href:"https://basssites.com",className:"built-by",children:u(H,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})}),u(Q,{children:u(J,{component:Z,href:"/#/about",children:u(H,{primary:"\u05D0\u05D5\u05D3\u05D5\u05EA\u05E0\u05D5"})})})]})})})}const b0=b(y0)`
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

`;function S0(t){var n=t,{className:e}=n,D=O(n,["className"]);const s=E.exports.useContext(X);return u(zu,{className:e,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:u(Y,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:u(s.child,{})})})}const v0=b(S0)`
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
`;function w0({className:e}){const[D,t]=E.exports.useState(!0),n=()=>{t(!1)};return d(Ou,{id:"main-modal-root",className:e,open:D,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[u($u,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),u(Mu,{children:u(Pu,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),u(_u,{children:u(G,{onClick:n,children:"Close"})})]})}b(w0)`
  
`;function L0(t){var n=t,{className:e}=n,D=O(n,["className"]);const[s,i]=E.exports.useState(!0);return u(Ru,{className:e,open:s,onClose:()=>{i(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:D.children})}b(L0)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function B0({className:e}){return u("div",{id:"",className:e})}const N0=b(B0)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function T0({className:e}){const[D,t]=E.exports.useState(!1),[n,s]=E.exports.useState(""),[i,c]=E.exports.useState(!1),o=E.exports.useContext(R),g=E.exports.useContext(q);E.exports.useEffect(()=>{s(o.title)},[o.title]),E.exports.useEffect(()=>{r()},[]);const r=()=>{I.getMobileOS()&&c(!0)};function h(){if(I.getMobileOS()){const f=document.querySelectorAll(".gsc-control-cse")[0];f.style.visibility="visible",f.style.marginTop="90px"}}E.exports.useEffect(()=>{window.onload=()=>{if(document.querySelector("#gcse-my-wrapper #___gcse_0"))h(),k();else{let A=function(){k()};const x=document.querySelector("#gcse-my-wrapper"),S={childList:!0,attributes:!0,subtree:!1};new MutationObserver(A).observe(x,S)}}},[]);function k(){t(!0);const f=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],A={childList:!1,attributes:!0,subtree:!1};function x(){z()}new MutationObserver(x).observe(f,A)}function N(f){s(f.target.value),T(f)}const z=()=>{setTimeout(()=>{let f=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");f&&f.forEach((A,x)=>{if(A.innerText.includes("Lyrics")){if(A.innerText.includes("(")){let B=A.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((B==null?void 0:B.includes("live"))||(B==null?void 0:B.includes("mix"))||(B==null?void 0:B.includes("remix"))){A.parentElement.parentElement.parentElement.remove();return}}let S=A.innerText.split("Lyrics")[0];S=S.replaceAll("\u2013","-"),A.innerText=S;const j={artistName:encodeURI(S.split("-")[0]),songName:encodeURI(S.split("-")[1])};A.nodeName!=="A"&&A.parentElement.parentElement.parentElement.addEventListener("click",B=>{var V;((V=g.error)==null?void 0:V.open)&&g.closeBanner("error"),A.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",o.getLines(j,S)}),A.style.display="block"}else A.innerText.includes("Lyrics")||A.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&A.parentElement.parentElement.parentElement.remove()})},50)};function T(f){g.error&&g.closeBanner("error");let A=document.querySelector("#gsc-i-id1"),x=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(A)if(f.target.value.length<=1){let S=document.querySelector(".gsst_a");S&&S.dispatchEvent(new Event("click"))}else if(x.test(f.target.value)){A.value=f.target.value;let S=document.querySelectorAll(".gsc-search-box button")[0];S?setTimeout(()=>{S.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(g.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{g.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else g.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return d("div",{id:"",className:e,children:[!i&&u(ju,{id:"outlined-search",label:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:D?N:null,autoFocus:!1,autoComplete:"off",value:n}),u("div",{id:"gcse-my-wrapper",children:u("div",{className:"gcse-search"})})]})}const k0=b(T0)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: ${e=>e.theme.palette.primary.main+"!important"};
   border-color: ${e=>e.theme.palette.secondary.contrastText+"!important"};

   font-weight: 600;
    border-width: medium;
  }

`;function I0(t){var n=t,{className:e}=n,D=O(n,["className"]);const s=E.exports.useContext(eu),[i,c]=E.exports.useState(!1),[o,g]=E.exports.useState([]),r=()=>{c(!0),o[0]||k()},h=()=>{c(!1)};function k(){const z="https://musicline-backend.vercel.app";let T=D.lyric.trim().toLowerCase();T=T.replaceAll(/[^a-zA-Z0-9']/g,""),T.slice(-1)==="'"&&(T=T.replaceAll("'","g")),fetch(`${z}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(T)})}).then(f=>f.json()).then(f=>{if(f==null?void 0:f.results[0]){g(f.results);return}else{g(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"]);return}}).catch(f=>{console.log(f)})}const N=()=>o[0]?o.map((z,T)=>d(U,{children:[T>0&&u("hr",{}),u("p",{className:"tt-p",children:z})]})):u("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"});return u(Ju,{onClickAway:h,children:u(Hu,{className:e,title:d(U,{children:[u($,{color:"inherit",style:{fontSize:s.fontSize.sm>=18?s.fontSize.sm-8:s.fontSize.sm,textAlign:"center"},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD: "}),u("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr",fontSize:s.fontSize.sm>=18?s.fontSize.sm-10:s.fontSize.sm},children:o[0]?u(N,{}):u(lu,{sx:{margin:"8px"},color:"inherit"})})]}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:h,open:i,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:d("p",{className:"single-lyric",onClick:r,children:["\xA0 ",D.lyric," "]})})})}const iu=b(I0)`

`;function F0(t){var n=t,{className:e}=n,D=O(n,["className"]);const s=E.exports.useContext(R),i=E.exports.useContext(eu);return E.exports.useEffect(()=>{},[s.cou]),d(Y,{className:e,children:[u("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",crossorigin:"anonymous"}),u("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-8294214228053744","data-ad-slot":"5288837770"}),d("script",{children:["(adsbygoogle = window.adsbygoogle || []).push(",");"]}),d(F,{container:!0,spacing:2,children:[s.lines&&s.currLyrics&&d("div",{id:"lyrics_body",children:[u($,{variant:"h6",noWrap:!0,component:"h3",style:{fontSize:i.fontSize.lg},children:s.title&&s.title.split(" ").map((c,o)=>u(iu,{lyric:c},o))}),s.lines.map((c,o)=>{var g;return c.src.includes("[")&&(c.trans="   "),d("div",{children:[o>0&&c.src.includes("[")&&d(U,{children:[u("br",{}),u("br",{})]}),u(F,{className:"lyrics-line en-line",item:!0,style:{fontSize:i.fontSize.md},children:c.src.split(" ").map((r,h)=>u(iu,{lyric:r},h+Math.random()))}),u(F,{item:!0,className:"lyrics-line he-line",style:{fontSize:i.fontSize.sm},children:u(U,{children:((g=c.trans)==null?void 0:g.length)>2?c.trans.split(" ").map((r,h)=>{if(c.trans!=="   ")return d("small",{className:"single-trans",children:[r," \xA0"]},h+Math.random())}):u("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},o)})]}),u("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",crossorigin:"anonymous"}),u("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-8294214228053744","data-ad-slot":"5288837770"}),d("script",{children:["(adsbygoogle = window.adsbygoogle || []).push(",");"]})]})]})}const z0=b(F0)`
#lyrics_body{
  font-family: 'Assistant','Roboto', 'sans-serif';
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding: 15px 50px;
  padding-bottom: 40px;
  padding-inline-start: 50px;

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
`;var pu="/assets/screenshot-1.fe78e4e5.png",mu="/assets/screenshot-2.600f8a12.png",gu="/assets/screenshot-tt.0f8ab6fe.png",hu="/assets/screenshot-changesize.22fea726.png";function O0({className:e}){return d("div",{id:"about_body",className:e,container:!0,children:[d("b",{children:["\u05D4\u05D0\u05EA\u05E8 \u05E9\u05D9\u05EA\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",u("br",{}),"\u05DB\u05DE\u05E2\u05D8 \u05DB\u05DC \u05E9\u05D9\u05E8 \u05E9\u05EA\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA",u("br",{}),"\u05D5\u05D9\u05E9\u05D0\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05DC\u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9"]}),u("br",{}),u("br",{}),u("br",{}),u("img",{src:mu,alt:"home-2"}),u("br",{}),u("img",{src:pu,alt:"home-1"}),u("br",{}),u("p",{children:"\u05DE\u05D4\u05D9\u05D5\u05DD \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D9\u05DD \u05D4\u05D0\u05D4\u05D5\u05D1\u05D9\u05DD \u05E2\u05DC\u05D9\u05DB\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA\u05DD \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05D5\u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA, \u05E2\u05DD \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05D4\u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC\u05D9\u05DB\u05DD, \u05D1\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9 \u05DC\u05DC\u05D0 \u05D4\u05E1\u05D7\u05D5\u05EA \u05D3\u05E2\u05EA, \u05D5\u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4"}),u("p",{children:"\u05D4\u05D9\u05D5\u05EA \u05D5\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D8\u05D5\u05DE\u05D8\u05D9 \u05D4\u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05DB\u05D5\u05E0\u05D4, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05E9\u05DC\u05DD, \u05D5\u05E2\u05DC \u05DB\u05DF \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05E0\u05E4\u05E8\u05D3, \u05DB\u05DA \u05D0\u05DD \u05D4\u05D4\u05E7\u05E9\u05E8 \u05E9\u05DC \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05EA\u05D0\u05D9\u05DD, \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D4\u05E9\u05D5\u05D5\u05EA \u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"}),u("img",{src:gu,alt:"\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),u("p",{children:"\u05D4\u05DB\u05EA\u05D1 \u05D2\u05D3\u05D5\u05DC/\u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9? \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8, \u05D5\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D9\u05E9\u05DE\u05D5\u05E8 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA\u05DA"}),u("img",{src:hu,alt:"\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E4\u05D5\u05E0\u05D8\u05E1\u05D9\u05D9\u05D6"}),u("h4",{children:"        \u05DE\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05D0\u05EA\u05E8?"}),d("p",{children:["- \u05D1\u05E9\u05D5\u05E0\u05D4 \u05DE\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05EA\u05E8 \u05E8\u05D2\u05D9\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05E6\u05DC\u05E0\u05D5 \u05DE\u05D5\u05E4\u05D9\u05E2 \u05D1\u05D6\u05DE\u05DF \u05E9\u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05E0\u05E9\u05D0\u05E8 \u05DE\u05D5\u05DC \u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9",u("br",{}),"- \u05DB\u05E4\u05EA\u05D5\u05E8 \u05E0\u05D5\u05D7 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1, \u05D4\u05E9\u05D5\u05DE\u05E8 \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9, \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF",u("br",{}),"- \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D4\u05D9\u05E8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA"]}),u("h4",{children:"   \u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5?"}),d("p",{children:["\u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7.",u("br",{}),"\u05E8\u05D0\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05D1\u05D0\u05EA\u05E8 \u05D4\u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05D3\u05D5\u05D1\u05E8\u05D9 \u05E2\u05D1\u05E8\u05D9\u05EA \u05D4\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D7\u05D5\u05D5\u05D9\u05EA\u05D9\u05EA \u05D5\u05E0\u05D5\u05D7\u05D4, \u05D0\u05D5 \u05E1\u05EA\u05DD \u05DC\u05D3\u05E2\u05EA \u05D0\u05EA \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05D4\u05E9\u05D9\u05E8 \u05D4\u05D0\u05D4\u05D5\u05D1 \u05E2\u05DC\u05D9\u05D4\u05DD. \u05E0\u05EA\u05E7\u05DC\u05E0\u05D5 \u05D1\u05E7\u05D5\u05E9\u05D9 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8\u05D9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D4\u05E8\u05D2\u05D9\u05DC\u05D9\u05DD, \u05D1\u05D4\u05DD \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05D3\u05E3 \u05D0\u05D5 \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05D3\u05D5\u05E8\u05E9 \u05DC\u05D7\u05D9\u05E6\u05D5\u05EA \u05DE\u05D9\u05D5\u05EA\u05E8\u05D5\u05EA \u05D5\u05DE\u05E9\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DA \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D1\u05DC\u05D1\u05D3 \u05D5\u05DC\u05DC\u05D0 \u05D4\u05DE\u05E7\u05D5\u05E8, \u05D0\u05D5 \u05DE\u05D5\u05E6\u05D9\u05D0\u05DA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05D5\u05D0\u05D9\u05D8\u05D9\u05EA \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D2\u05D9\u05DC\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D5\u05E1\u05E4\u05EA \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8, \u05D0\u05D9\u05E0\u05D4 \u05DE\u05D5\u05E4\u05D9\u05E2\u05D4 \u05DB\u05DC\u05DC \u05D1\u05D0\u05EA\u05E8\u05D9\u05DD \u05D4\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05D8\u05E7\u05E1\u05D8 \u05D5\u05DE\u05D9\u05D5\u05E2\u05D3\u05D9\u05DD \u05DC\u05E7\u05E8\u05D9\u05D0\u05D4, \u05D5\u05DE\u05E6\u05E8\u05D9\u05DB\u05D4 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05D5 \u05EA\u05D5\u05E1\u05E3 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DE\u05E1\u05D5\u05E8\u05D1\u05DC"]})]})}const $0=b(O0)`
text-align: center;
font-size: 22px;
   margin: 25px 0;
   padding: 15px;

   padding-top: 200px;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  p{
    padding: 10px;
    width: 80vw;
  }

  img{
    margin: 15px;
    border: 1px solid gray;
    width: 25vw;
    @media (max-width: 600px) {
      width: 90%;
    }
  }

  @media (min-width: 600px) {
   width: 40%;
    text-align: start;
    }
`;function M0({className:e}){const D=E.exports.useContext(R),{sname:t}=Gu();E.exports.useEffect(()=>{console.log(t),t&&t.includes("_")&&n()},[]);function n(){let i=t;i=i.replaceAll("-"," ");const c={artistName:encodeURI(` ${i.split("_")[0]} `),songName:encodeURI(` ${i.split("_")[1]} `)};i=i.replaceAll("_"," - "),D.getLines(c,i)}function s(i){i.preventDefault()}return d("div",{className:e,children:[u("div",{className:"home-top",children:d(F,{container:!0,className:"home-t-container",children:[!D.currLyrics&&u(F,{item:!0,xs:12,sm:6,children:u($,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),d(F,{item:!0,xs:12,sm:6,children:[!D.currLyrics&&d($,{variant:"h3",className:"page-h3",children:[u("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),u("br",{}),u("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),u("br",{}),u("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),u("div",{className:"small-two",children:u("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),u(Y,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,className:"search-ctr",children:u(k0,{})})]})]})}),D.currLyrics&&u(z0,{className:"lyrics-body"}),!D.currLyrics&&u($0,{className:"lyrics-body"})]})}const Eu=b(M0)`
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
    
`;var P0="/assets/screenshot-tt-2.533f020d.png";function _0({className:e}){return d("div",{id:"",className:e,children:["\u05DC\u05DE\u05D9 \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E9\u05D9\u05E8\u05D9\u05DD",u("br",{}),"\u05D0\u05D5 \u05E1\u05EA\u05DD \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D3\u05E2\u05EA \u05DE\u05D4 \u05D4\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05E9\u05DC \u05E9\u05D9\u05E8 \u05D0\u05D4\u05D5\u05D1",u("br",{}),u("br",{}),"\u05E9\u05DE\u05E0\u05D5 \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E0\u05D5\u05D7\u05D5\u05EA \u05DE\u05D9\u05E8\u05D1\u05D9\u05EA",u("br",{}),"\u05DE\u05D4\u05D9\u05E8 \u05E0\u05D5\u05D7 \u05E2\u05DD \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9",u("br",{}),"\u05D5\u05DC\u05DC\u05D0 \u05E4\u05D9\u05E6'\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05EA\u05E8\u05D9\u05DD \u05DE\u05E1\u05D1\u05D9\u05D1",u("br",{}),u("br",{}),"\u05DE\u05E4\u05E0\u05D9 \u05E9\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9",u("br",{}),"\u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D0\u05D3\u05DD",u("br",{}),"\u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05EA\u05D9\u05DD \u05DC\u05D0 \u05DE\u05D3\u05D5\u05D9\u05E7",u("br",{}),"\u05D5\u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",u("br",{}),"\u05DC\u05DE\u05D9\u05DC\u05D9\u05DD \u05DE\u05E1\u05D5\u05D9\u05DE\u05D5\u05EA",u("br",{}),u("br",{}),"\u05DC\u05DB\u05DF \u05D1\u05E0\u05D5\u05E1\u05E3",u("br",{}),"\u05D4\u05D1\u05D0\u05E0\u05D5 \u05E4\u05D9\u05E8\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9",u("br",{}),"\u05DB\u05DE\u05E2\u05D8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05E9\u05EA\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC\u05D9\u05D4",u("br",{}),"\u05DB\u05DA \u05D7\u05E1\u05DB\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA",u("br",{}),"\u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA",u("br",{}),u("br",{}),"\u05D4\u05DB\u05EA\u05D1 \u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9?",u("br",{}),"\u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8",u("br",{}),"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05D6\u05DB\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D4\u05E2\u05D3\u05E4\u05D4",u("br",{}),u("br",{}),u("br",{}),u("p",{children:"\u05D4\u05D0\u05EA\u05E8 \u05E9\u05D9\u05EA\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA \u05DB\u05DE\u05E2\u05D8 \u05DB\u05DC \u05E9\u05D9\u05E8 \u05E9\u05EA\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05D9\u05E9\u05D0\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05DC\u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9"}),u("br",{}),u("img",{src:pu,alt:"1\u05E9\u05D9\u05E8"}),u("img",{src:mu,alt:"2\u05E9\u05D9\u05E8"}),u("br",{}),u("p",{children:"\u05DE\u05D4\u05D9\u05D5\u05DD \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D9\u05DD \u05D4\u05D0\u05D4\u05D5\u05D1\u05D9\u05DD \u05E2\u05DC\u05D9\u05DB\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA\u05DD \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05D5\u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA, \u05E2\u05DD \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05D4\u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC\u05D9\u05DB\u05DD, \u05D1\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9 \u05DC\u05DC\u05D0 \u05D4\u05E1\u05D7\u05D5\u05EA \u05D3\u05E2\u05EA, \u05D5\u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4"}),u("p",{children:"\u05D4\u05D9\u05D5\u05EA \u05D5\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D8\u05D5\u05DE\u05D8\u05D9 \u05D4\u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05DB\u05D5\u05E0\u05D4, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05E9\u05DC\u05DD, \u05D5\u05E2\u05DC \u05DB\u05DF \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05E0\u05E4\u05E8\u05D3, \u05DB\u05DA \u05D0\u05DD \u05D4\u05D4\u05E7\u05E9\u05E8 \u05E9\u05DC \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05EA\u05D0\u05D9\u05DD, \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D4\u05E9\u05D5\u05D5\u05EA \u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"}),u("img",{src:gu,alt:"\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),u("img",{src:P0,alt:"2\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),u("p",{children:"\u05D4\u05DB\u05EA\u05D1 \u05D2\u05D3\u05D5\u05DC/\u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9? \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8, \u05D5\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D9\u05E9\u05DE\u05D5\u05E8 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA\u05DA"}),u("img",{src:hu,alt:"\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E4\u05D5\u05E0\u05D8\u05E1\u05D9\u05D9\u05D6"}),u("p",{children:"\u05DE\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05D0\u05EA\u05E8? - \u05D1\u05E9\u05D5\u05E0\u05D4 \u05DE\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05EA\u05E8 \u05E8\u05D2\u05D9\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05E6\u05DC\u05E0\u05D5 \u05DE\u05D5\u05E4\u05D9\u05E2 \u05D1\u05D6\u05DE\u05DF \u05E9\u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05E0\u05E9\u05D0\u05E8 \u05DE\u05D5\u05DC \u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 - \u05DB\u05E4\u05EA\u05D5\u05E8 \u05E0\u05D5\u05D7 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1, \u05D4\u05E9\u05D5\u05DE\u05E8 \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9, \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF - \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D4\u05D9\u05E8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA"}),u("p",{children:"\u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5? \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7. \u05E8\u05D0\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05D1\u05D0\u05EA\u05E8 \u05D4\u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05D3\u05D5\u05D1\u05E8\u05D9 \u05E2\u05D1\u05E8\u05D9\u05EA \u05D4\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D7\u05D5\u05D5\u05D9\u05EA\u05D9\u05EA \u05D5\u05E0\u05D5\u05D7\u05D4, \u05D0\u05D5 \u05E1\u05EA\u05DD \u05DC\u05D3\u05E2\u05EA \u05D0\u05EA \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05D4\u05E9\u05D9\u05E8 \u05D4\u05D0\u05D4\u05D5\u05D1 \u05E2\u05DC\u05D9\u05D4\u05DD. \u05E0\u05EA\u05E7\u05DC\u05E0\u05D5 \u05D1\u05E7\u05D5\u05E9\u05D9 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8\u05D9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D4\u05E8\u05D2\u05D9\u05DC\u05D9\u05DD, \u05D1\u05D4\u05DD \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05D3\u05E3 \u05D0\u05D5 \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05D3\u05D5\u05E8\u05E9 \u05DC\u05D7\u05D9\u05E6\u05D5\u05EA \u05DE\u05D9\u05D5\u05EA\u05E8\u05D5\u05EA \u05D5\u05DE\u05E9\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DA \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D1\u05DC\u05D1\u05D3 \u05D5\u05DC\u05DC\u05D0 \u05D4\u05DE\u05E7\u05D5\u05E8, \u05D0\u05D5 \u05DE\u05D5\u05E6\u05D9\u05D0\u05DA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05D5\u05D0\u05D9\u05D8\u05D9\u05EA \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D2\u05D9\u05DC\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D5\u05E1\u05E4\u05EA \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8, \u05D0\u05D9\u05E0\u05D4 \u05DE\u05D5\u05E4\u05D9\u05E2\u05D4 \u05DB\u05DC\u05DC \u05D1\u05D0\u05EA\u05E8\u05D9\u05DD \u05D4\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05D8\u05E7\u05E1\u05D8 \u05D5\u05DE\u05D9\u05D5\u05E2\u05D3\u05D9\u05DD \u05DC\u05E7\u05E8\u05D9\u05D0\u05D4, \u05D5\u05DE\u05E6\u05E8\u05D9\u05DB\u05D4 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05D5 \u05EA\u05D5\u05E1\u05E3 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DE\u05E1\u05D5\u05E8\u05D1\u05DC"})]})}const R0=b(_0)`
  padding: 60px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  p{
    padding: 10px;
  }

  img{
    margin: 15px;
    border: 1px solid gray;
    width: 25vw;
    @media (max-width: 600px) {
      width: 90%;
    }
  }
`;function j0({className:e}){return d("div",{id:"NO_MATCH_WRAPPER",className:e,children:[u($,{variant:"h2",className:"page-h2",children:"404"}),u($,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const J0=b(j0)`

`;function H0({className:e}){var h,k;const D=E.exports.useContext(X),t=E.exports.useContext(uu),n=E.exports.useContext(q),[s,i]=E.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA");E.exports.useRef(null);const c=Uu({key:"muirtl",stylisPlugins:[Qu,Yu]});function o(){g()}const g=()=>{const N=document.createElement("script");N.type="text/javascript",N.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",N.defer=!0,document.body.appendChild(N)};E.exports.useEffect(()=>{o()},[n]);const r=N=>{n.closeBanner(N)};return au({palette:{mode:"dark"}}),d("div",{className:e,children:[u(qu,{value:c,children:d(Vu,{hashType:"noslash",children:[u(n0,{currTitle:s}),u(C0,{className:"header"}),((h=n.main)==null?void 0:h.open)&&d(Du,{severity:"warning",className:"main-alert",children:[u(cu,{children:n.main.title}),n.main.message]}),u(x0,{children:d(Wu,{children:[u(K,{path:"/",element:u(Eu,{className:"page"})}),u(K,{path:"songs/:sname",element:u(Eu,{className:"page"})}),u(K,{path:"/About",element:u(R0,{className:"page"})}),u(K,{path:"*",element:u(J0,{className:"page"})})]})}),D.open&&D.child&&u(v0,{className:"drawer"}),t.circular.open&&u(Zu,{color:t.main.color||"primary"}),((k=n.iosSnackbar)==null?void 0:k.open)&&u(Ku,{open:n.iosSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:u(Du,{onClose:()=>{r("iosSnackbar")},severity:n.iosSnackbar.severity,sx:{width:"100%"},children:n.iosSnackbar.message})}),u("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8294214228053744",crossOrigin:"anonymous"}),u("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-format":"autorelaxed","data-ad-client":"ca-pub-8294214228053744","data-ad-slot":"2008052409"}),d("script",{children:["(adsbygoogle = window.adsbygoogle || []).push(",");"]}),u(b0,{})]})}),u(N0,{})]})}const G0=b(H0)`
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
`,U0=[D0,r0,t0,m0,a0];function q0(e){return u(U,{children:U0.reduceRight((D,t)=>u(t,{children:D}),e.children)})}Xu.render(u(_.StrictMode,{children:u(q0,{children:u(u0,{theme:du,children:u(G0,{className:"app"})})})}),document.getElementById("root"));
