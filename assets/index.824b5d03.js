var f0=Object.defineProperty,C0=Object.defineProperties;var A0=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var s0=Object.prototype.hasOwnProperty,o0=Object.prototype.propertyIsEnumerable;var n0=(e,D,t)=>D in e?f0(e,D,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[D]=t,C=(e,D)=>{for(var t in D||(D={}))s0.call(D,t)&&n0(e,t,D[t]);if(q)for(var t of q(D))o0.call(D,t)&&n0(e,t,D[t]);return e},L=(e,D)=>C0(e,A0(D));var O=(e,D)=>{var t={};for(var n in e)s0.call(e,n)&&D.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&q)for(var n of q(e))D.indexOf(n)<0&&o0.call(e,n)&&(t[n]=e[n]);return t};import{R as _,r as i,j as u,c as a0,a as h,M as x0,B as y0,b as j,d as b0,A as S0,s as b,L as e0,N as t0,e as W,f as Z,g as v0,h as w0,i as K,I as L0,k as B0,l as N0,m as l0,C as T0,T as k0,n as $,o as I0,p as D0,q as c0,G as F,t as F0,u as u0,v as z0,w as O0,D as $0,x as M0,y as P0,z as _0,E as R0,F as J0,H as j0,J as H0,K as H,O as G0,P as U0,Q as q0,S as V0,U as W0,V,W as Z0,X as K0,Y as Q0,Z as Y0,_ as X0,$ as uu}from"./vendor.d8998b59.js";const eu=function(){const D=document.createElement("link").relList;if(D&&D.supports&&D.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const E of s)if(E.type==="childList")for(const c of E.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const E={};return s.integrity&&(E.integrity=s.integrity),s.referrerpolicy&&(E.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?E.credentials="include":s.crossorigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function n(s){if(s.ep)return;s.ep=!0;const E=t(s);fetch(s.href,E)}};eu();const Q=_.createContext(void 0);function Du(e){const[D,t]=i.exports.useState({}),E={openDrawer:(c,o,m="temporary",r)=>{t({open:c,anchor:o,permanent:m,child:r})},closeDrawer:(c,o,m="temporary",r)=>{t({open:c,anchor:o,permanent:m,child:r})}};return u(Q.Provider,{value:C(C({},D),E),children:e.children})}const Y=_.createContext(void 0);function tu(e){const[D,t]=i.exports.useState({main:{open:!1,color:"info"},circular:{open:!1,color:"inherit"}}),c={createLoader:(o,m)=>{D[o]&&t(L(C({},D),{[o]:void 0})),t(L(C({},D),{[o]:{open:!1,color:m||"inherit"}}))},openLoader:o=>{D[o]?t(L(C({},D),{[o]:L(C({},D[o]),{open:!0})})):console.error("Loader does'nt exist. Name: "+o)},closeLoader:o=>{D[o]?t(L(C({},D),{[o]:L(C({},D[o]),{open:!1})})):console.error("Loader does'nt exist. Name: "+o)}};return u(Y.Provider,{value:C(C({},D),c),children:e.children})}const G=_.createContext(void 0);function ru(e){const[D,t]=i.exports.useState({main:{open:!1,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),c={createBanner:(o,m,r,g)=>{D[o]&&t(L(C({},D),{[o]:void 0})),t(L(C({},D),{[o]:{open:!0,severity:m||"success",title:r||"",message:g||""}}))},openBanner:o=>{D[o]?t(L(C({},D),{[o]:L(C({},D[o]),{open:!0})})):console.error("Banner does'nt exist. Name: "+o)},closeBanner:o=>{D[o]?t(L(C({},D),{[o]:L(C({},D[o]),{open:!1})})):console.error("Banner does'nt exist. Name: "+o)}};return u(G.Provider,{value:C(C({},D),c),children:e.children})}const p0=a0({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}});function nu(e){const[D]=i.exports.useState(p0.palette.primary.main);return u("div",{className:"wrapper",children:h(x0,{children:[u("title",{children:e.currTitle}),u("meta",{name:"theme-color",content:D})]})})}const su=e=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const D=JSON.parse(localStorage.getItem("meturgamm_songs"));D.push(e),D.length>=500&&D.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(D))},ou=e=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(t=>t.title.toLowerCase()===e.toLowerCase()):!1,Eu=()=>{let e=document.querySelector(".gsst_a");e&&e.dispatchEvent(new Event("click"))},iu=()=>{let e=!1;const D=navigator.userAgent;return/android/i.test(D)?e=!1:(/iPad|iPhone|iPod/.test(D)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(e=!0),e};var I={lsSaveSong:su,lsGetSong:ou,clearGsc:Eu,getMobileOS:iu};const X=_.createContext(void 0);function au(e){const D=JSON.parse(localStorage.getItem("fontsize")),[t,n]=i.exports.useState({fontSize:{sm:Number(D==null?void 0:D.sm)||22,md:Number(D==null?void 0:D.md)||25,lg:Number(D==null?void 0:D.lg)||27},colors:"pink"}),s=()=>{t.fontSize.md<60&&(n(L(C({},t),{fontSize:{sm:t.fontSize.sm+1,md:t.fontSize.md+1,lg:t.fontSize.lg+1}})),c())},E=()=>{t.fontSize.sm>7&&(n(L(C({},t),{fontSize:{sm:t.fontSize.sm-1,md:t.fontSize.md-1,lg:t.fontSize.lg-1}})),c())};function c(){localStorage.setItem("fontsize",JSON.stringify({sm:t.fontSize.sm,md:t.fontSize.md,lg:t.fontSize.lg}))}function o(){localStorage.setItem("colors_mode",t.colors)}function m(g){n(L(C({},t),{colors:g})),o()}const r={reduceFontSize:E,increaseFontSize:s,setColors:m};return u(X.Provider,{value:C(C({},t),r),children:e.children})}function lu({className:e}){const D=i.exports.useContext(X);return u("div",{id:"",className:e,children:h(y0,{className:"button-group",children:[u(j,{"aria-label":"reduce",onClick:()=>{D.reduceFontSize()},children:u(b0,{fontSize:"small"})}),u(j,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),u(j,{"aria-label":"increase",onClick:()=>{D.increaseFontSize()},children:u(S0,{fontSize:"small"})})]})})}const cu=b(lu)`
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

`,pu=[];function du(){return u(e0,{children:pu.map((e,D)=>u(t0,{to:e.url,children:h(W,{button:!0,children:[u(Z,{primary:e.name}),u(v0,{children:u(w0,{})})]},e.name)},D))})}b(du)`
  
`;const R=_.createContext(void 0);function mu(e){const D=i.exports.useContext(Y),t=i.exports.useContext(G),[n,s]=i.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||""),[E,c]=i.exports.useState(""),[o,m]=i.exports.useState(sessionStorage.getItem("currLines")||!1),[r,g]=i.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||[]),[k,N]=i.exports.useState(0),[z,T]=i.exports.useState(!1);i.exports.useEffect(()=>{x()},[r]);const f="https://musicline-backend.vercel.app",A=(y,a)=>{a=a.replace(/[\])}[{(]/g,"").trim();let l=document.querySelectorAll(".gsc-expansionArea")[0],d=I.lsGetSong(a);if(d){l&&(l.style.pointerEvents="all"),g(d.lines),s(a),m(d.lines),I.clearGsc(),x(),sessionStorage.setItem("currLines",JSON.stringify(d.lines)),sessionStorage.setItem("currSongTitle",a);return}D.openLoader("main"),fetch(`${f}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:y})}).then(p=>p.json()).then(p=>{if(D.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),l&&(l.style.pointerEvents="all"),s(a),p==null?void 0:p.combined)c(p.id),g(p.combined),m(p.combined),I.lsSaveSong({title:a,lines:p.combined}),I.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(p.combined)),sessionStorage.setItem("currSongTitle",a),x();else if(p==null?void 0:p.lyrics){let v=p.lyrics,w=[];v.split(/(?:\r\n|\r|\n)/g).map(M=>{M.length>=2&&w.push({src:M.replace(".",""),trans:""})}),g(w),m(v),I.clearGsc(),x()}else t.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(p=>{console.log("ERRORR "+p),console.log(p),D.closeLoader("main"),t.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),l&&(l.style.pointerEvents="all")})},x=()=>{let y=!1;for(let a=0;a<r.length;a++){let l=r[a];if(y===!0)break;if(l.trans.length<=1||l.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."){y=!0,z?J(l.src,a):B(l.src,a);break}else continue}N(k+1)},S=(y,a)=>{let l="";for(let d=a;d<r.length;d++){const p=r[d];if(l.length>=1600)break;p.trans==="   "&&(l+=p.src+" $. "),p.trans!="   "&&(l+=` ${d} ${p.src} . `)}fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(l)})}).then(d=>d.json()).then(d=>{var p,v;if((d==null?void 0:d.trans.length)>=1){let w=r;d.trans.split(".").map(P=>{try{if(console.log(P),P.includes("$")||P.includes("["))w[a].trans="   ";else{let r0=Number(P.match(/\d+/)[0].replaceAll(".",""));w[r0].trans=P.replace(r0,"")}}catch{P.includes("$")&&(w[a].trans="   ")}a++}),g(w),((p=r[r.length-1])==null?void 0:p.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()}else r[a].trans===void 0&&(newLines[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[a]={src:y,trans:"[missing]"}),g(newLines),((v=r[r.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()}).catch(d=>{var w;let p=r;r[a].trans===""&&(p[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(p[a]={src:y,trans:"[missing]"}),g(p),((w=r[r.length-1])==null?void 0:w.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",JSON.stringify(n))),x(),console.log(d)})},J=(y,a)=>{fetch(`${f}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(y)})}).then(l=>l.json()).then(l=>{var d,p;if(l==null?void 0:l.trans){let v=r;v[a]={src:y,trans:l==null?void 0:l.trans},g(v),((d=r[r.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()}else r[a].trans===void 0&&(newLines[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[a]={src:y,trans:"[missing]"}),g(newLines),((p=r[r.length-1])==null?void 0:p.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()}).catch(l=>{var v;let d=r;r[a].trans===""&&(d[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(d[a]={src:y,trans:"[missing]"}),g(d),((v=r[r.length-1])==null?void 0:v.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(r)),x(),console.log(l)})},B=(y,a)=>{fetch(`${f}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:r,song_id:E,title:n})}).then(l=>l.json()).then(l=>{var p,v;let d=r;(l==null?void 0:l.trans.length)?(l.trans.map((w,M)=>{d[M]={src:d[M].src,trans:w}}),g(d),I.lsSaveSong({title:n,lines:r}),sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n),x()):(l==null?void 0:l.trans)?(d[a]={src:y,trans:l==null?void 0:l.trans},g(d),((p=r[r.length-1])==null?void 0:p.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x()):(r[a].trans===void 0&&(d[a]={src:y,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),r[a].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(d[a]={src:y,trans:"[missing]"}),g(d),((v=r[r.length-1])==null?void 0:v.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(r)),sessionStorage.setItem("currSongTitle",n)),x())}).catch(l=>{T(!0),console.log(l)})},U={getLines:A,getFullTrans:B,getPartlyTrans:S,getSingleLineTrans:J,checkNextTrans:x};return u(R.Provider,{value:C({title:n,currLyrics:o,lines:r,cou:k},U),children:e.children})}function hu({className:e}){return i.exports.useContext(R),u(K,{className:e,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(t=>u(t0,{to:t.url,children:u(j,{sx:{my:2},children:t.name})},t.name))})}b(hu)`
  
`;function gu({className:e}){return u("div",{id:"",className:e,children:u(L0,{children:u(B0,{className:"mui-rounded-icon"})})})}b(gu)`
  .mui-rounded-icon{
    background-color: ${e=>"#595959"};
    color: ${e=>"#595959"};
    border-radius: 12px;
  }
`;const fu=t=>{var n=t,{className:e}=n,D=O(n,["className"]);var m,r,g;i.exports.useContext(Q);const s=i.exports.useContext(R),E=i.exports.useContext(G),c=i.exports.useContext(Y),o=function(){sessionStorage.removeItem("currLines"),location.reload()};return h(N0,{position:"sticky",className:e,children:[c.main.open&&u(l0,{color:c.main.color}),u(T0,{maxWidth:"xl",children:h(k0,{disableGutters:!0,children:[u(t0,{to:"/",onClick:()=>{o()},children:h($,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[u("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),u("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),s.lines[0]&&u(cu,{})]})}),u(I0,{in:(m=E.error)==null?void 0:m.open,children:h(D0,{severity:"error",className:"error-alert",onClose:()=>{E.closeBanner("error")},children:[u(c0,{children:(r=E.error)==null?void 0:r.title}),(g=E.error)==null?void 0:g.message]})})]})},Cu=b(fu)`
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
`;function Au(t){var n=t,{className:e}=n,D=O(n,["className"]);return u("div",{className:e,children:D.children})}const xu=b(Au)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${e=>e.theme.palette.secondary.light};
`;function yu({className:e}){return i.exports.useEffect(()=>{window.adsbygoogle=window.adsbygoogle||[]},[]),u("div",{id:"FOOTER",className:e,children:u(F,{container:!0,rowSpacing:6,columnSpacing:2,children:h(F,{item:!0,xs:12,sm:4,children:[h(e0,{children:[u(F0,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),u(W,{component:u0,href:"mailto:meturgamusic@gmail.com",children:u(Z,{primary:"MeturgaMusic@gmail.com"})}),u(W,{component:u0,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:u(Z,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),u(e0,{children:u(W,{component:u0,href:"https://basssites.com",className:"built-by",children:u(Z,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]})})})}const bu=b(yu)`
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

`;function Su(t){var n=t,{className:e}=n,D=O(n,["className"]);const s=i.exports.useContext(Q);return u(z0,{className:e,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:u(K,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:u(s.child,{})})})}const vu=b(Su)`
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
`;function wu({className:e}){const[D,t]=i.exports.useState(!0),n=()=>{t(!1)};return h(O0,{id:"main-modal-root",className:e,open:D,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[u($0,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),u(M0,{children:u(P0,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),u(_0,{children:u(j,{onClick:n,children:"Close"})})]})}b(wu)`
  
`;function Lu(t){var n=t,{className:e}=n,D=O(n,["className"]);const[s,E]=i.exports.useState(!0);return u(R0,{className:e,open:s,onClose:()=>{E(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:D.children})}b(Lu)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function Bu({className:e}){return u("div",{id:"",className:e})}const Nu=b(Bu)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function Tu({className:e}){const[D,t]=i.exports.useState(!1),[n,s]=i.exports.useState(""),[E,c]=i.exports.useState(!1),o=i.exports.useContext(R),m=i.exports.useContext(G);i.exports.useEffect(()=>{s(o.title)},[o.title]),i.exports.useEffect(()=>{r()},[]);const r=()=>{I.getMobileOS()&&c(!0)};function g(){if(I.getMobileOS()){const f=document.querySelectorAll(".gsc-control-cse")[0];f.style.visibility="visible",f.style.marginTop="90px"}}i.exports.useEffect(()=>{window.onload=()=>{if(document.querySelector("#gcse-my-wrapper #___gcse_0"))g(),k();else{let A=function(){k()};const x=document.querySelector("#gcse-my-wrapper"),S={childList:!0,attributes:!0,subtree:!1};new MutationObserver(A).observe(x,S)}}},[]);function k(){t(!0);const f=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],A={childList:!1,attributes:!0,subtree:!1};function x(){z()}new MutationObserver(x).observe(f,A)}function N(f){s(f.target.value),T(f)}const z=()=>{setTimeout(()=>{let f=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");f&&f.forEach((A,x)=>{if(A.innerText.includes("Lyrics")){if(A.innerText.includes("(")){let B=A.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((B==null?void 0:B.includes("live"))||(B==null?void 0:B.includes("mix"))||(B==null?void 0:B.includes("remix"))){A.parentElement.parentElement.parentElement.remove();return}}let S=A.innerText.split("Lyrics")[0];S=S.replaceAll("\u2013","-"),A.innerHTML=`<strong>${S.split("-")[0]}</strong> - <span>${S.split("-")[1]}</span>`;const J={artistName:encodeURI(S.split("-")[0]),songName:encodeURI(S.split("-")[1])};A.nodeName!=="A"&&A.parentElement.parentElement.parentElement.addEventListener("click",B=>{var U;((U=m.error)==null?void 0:U.open)&&m.closeBanner("error"),A.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",o.getLines(J,S)}),A.style.display="block"}else A.innerText.includes("Lyrics")||A.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&A.parentElement.parentElement.parentElement.remove()})},50)};function T(f){m.error&&m.closeBanner("error");let A=document.querySelector("#gsc-i-id1"),x=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(A)if(f.target.value.length<=1){let S=document.querySelector(".gsst_a");S&&S.dispatchEvent(new Event("click"))}else if(x.test(f.target.value)){A.value=f.target.value;let S=document.querySelectorAll(".gsc-search-box button")[0];S?setTimeout(()=>{S.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(m.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{m.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else m.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return h("div",{id:"",className:e,children:[!E&&u(J0,{id:"outlined-search",label:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:D?N:null,autoFocus:!1,autoComplete:"off",value:n}),u("div",{id:"gcse-my-wrapper",children:u("div",{className:"gcse-search"})})]})}const ku=b(Tu)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: ${e=>e.theme.palette.primary.main+"!important"};
   border-color: ${e=>e.theme.palette.secondary.contrastText+"!important"};

   font-weight: 600;
    border-width: medium;
  }

`;function Iu(t){var n=t,{className:e}=n,D=O(n,["className"]);const s=i.exports.useContext(X),[E,c]=i.exports.useState(!1),[o,m]=i.exports.useState([]),r=()=>{c(!0),o[0]||k()},g=()=>{c(!1)};function k(){const z="https://musicline-backend.vercel.app";let T=D.lyric.trim().toLowerCase();T=T.replaceAll(/[^a-zA-Z0-9']/g,""),T.slice(-1)==="'"&&(T=T.replaceAll("'","g")),fetch(`${z}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(T)})}).then(f=>f.json()).then(f=>{if(f==null?void 0:f.results[0]){m(f.results);return}else{m(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"]);return}}).catch(f=>{console.log(f)})}const N=()=>o[0]?o.map((z,T)=>h(H,{children:[T>0&&u("hr",{}),u("p",{className:"tt-p",children:z})]})):u("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"});return u(j0,{onClickAway:g,children:u(H0,{className:e,title:h(H,{children:[u($,{color:"inherit",style:{fontSize:s.fontSize.sm>=18?s.fontSize.sm-8:s.fontSize.sm,textAlign:"center"},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD: "}),u("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr",fontSize:s.fontSize.sm>=18?s.fontSize.sm-10:s.fontSize.sm,padding:"3%"},children:o[0]?u(N,{}):u(l0,{sx:{margin:"8px"},color:"inherit"})})]}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:g,open:E,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:h("p",{className:"single-lyric",onClick:r,children:["\xA0 ",D.lyric," "]})})})}const E0=b(Iu)`

`;function Fu(t){var n=t,{className:e}=n,D=O(n,["className"]);const s=i.exports.useContext(R),E=i.exports.useContext(X);return u(K,{className:e,children:u(F,{container:!0,spacing:2,children:s.lines&&s.currLyrics&&h("div",{id:"lyrics_body",children:[u($,{variant:"h6",noWrap:!0,component:"h3",style:{fontSize:E.fontSize.lg},children:s.title&&s.title.split(" ").map((c,o)=>u(E0,{lyric:c},o))}),s.lines.map((c,o)=>{var m;return c.src.includes("[")&&(c.trans="   "),h("div",{children:[o>0&&c.src.includes("[")&&h(H,{children:[u("br",{}),u("br",{})]}),u(F,{className:"lyrics-line en-line",item:!0,style:{fontSize:E.fontSize.md},children:c.src.split(" ").map((r,g)=>u(E0,{lyric:r},g+Math.random()))}),u(F,{item:!0,className:"lyrics-line he-line",style:{fontSize:E.fontSize.sm},children:u(H,{children:((m=c.trans)==null?void 0:m.length)>2?c.trans.split(" ").map((r,g)=>{if(c.trans!=="   ")return h("small",{className:"single-trans",children:[r," \xA0"]},g+Math.random())}):u("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},o)})]})})})}const zu=b(Fu)`
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
`;var d0="/assets/screenshot-1.fe78e4e5.png",m0="/assets/screenshot-2.600f8a12.png",h0="/assets/screenshot-tt.0f8ab6fe.png",g0="/assets/screenshot-changesize.22fea726.png";function Ou({className:e}){return h("div",{id:"about_body",className:e,container:!0,children:[h("b",{children:["\u05D4\u05D0\u05EA\u05E8 \u05E9\u05D9\u05EA\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA",u("br",{}),"\u05DB\u05DE\u05E2\u05D8 \u05DB\u05DC \u05E9\u05D9\u05E8 \u05E9\u05EA\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA",u("br",{}),"\u05D5\u05D9\u05E9\u05D0\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05DC\u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9"]}),u("br",{}),u("br",{}),u("br",{}),u("img",{src:m0,alt:"home-2"}),u("br",{}),u("img",{src:d0,alt:"home-1"}),u("br",{}),u("p",{children:"\u05DE\u05D4\u05D9\u05D5\u05DD \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D9\u05DD \u05D4\u05D0\u05D4\u05D5\u05D1\u05D9\u05DD \u05E2\u05DC\u05D9\u05DB\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA\u05DD \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05D5\u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA, \u05E2\u05DD \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05D4\u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC\u05D9\u05DB\u05DD, \u05D1\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9 \u05DC\u05DC\u05D0 \u05D4\u05E1\u05D7\u05D5\u05EA \u05D3\u05E2\u05EA, \u05D5\u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4"}),u("p",{children:"\u05D4\u05D9\u05D5\u05EA \u05D5\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D8\u05D5\u05DE\u05D8\u05D9 \u05D4\u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05DB\u05D5\u05E0\u05D4, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05E9\u05DC\u05DD, \u05D5\u05E2\u05DC \u05DB\u05DF \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05E0\u05E4\u05E8\u05D3, \u05DB\u05DA \u05D0\u05DD \u05D4\u05D4\u05E7\u05E9\u05E8 \u05E9\u05DC \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05EA\u05D0\u05D9\u05DD, \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D4\u05E9\u05D5\u05D5\u05EA \u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"}),u("img",{src:h0,alt:"\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),u("p",{children:"\u05D4\u05DB\u05EA\u05D1 \u05D2\u05D3\u05D5\u05DC/\u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9? \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8, \u05D5\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D9\u05E9\u05DE\u05D5\u05E8 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA\u05DA"}),u("img",{src:g0,alt:"\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E4\u05D5\u05E0\u05D8\u05E1\u05D9\u05D9\u05D6"}),u("h4",{children:"        \u05DE\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05D0\u05EA\u05E8?"}),h("p",{children:["- \u05D1\u05E9\u05D5\u05E0\u05D4 \u05DE\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05EA\u05E8 \u05E8\u05D2\u05D9\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05E6\u05DC\u05E0\u05D5 \u05DE\u05D5\u05E4\u05D9\u05E2 \u05D1\u05D6\u05DE\u05DF \u05E9\u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05E0\u05E9\u05D0\u05E8 \u05DE\u05D5\u05DC \u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9",u("br",{}),"- \u05DB\u05E4\u05EA\u05D5\u05E8 \u05E0\u05D5\u05D7 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1, \u05D4\u05E9\u05D5\u05DE\u05E8 \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9, \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF",u("br",{}),"- \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D4\u05D9\u05E8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA"]}),u("h4",{children:"   \u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5?"}),h("p",{children:["\u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7.",u("br",{}),"\u05E8\u05D0\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05D1\u05D0\u05EA\u05E8 \u05D4\u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05D3\u05D5\u05D1\u05E8\u05D9 \u05E2\u05D1\u05E8\u05D9\u05EA \u05D4\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D7\u05D5\u05D5\u05D9\u05EA\u05D9\u05EA \u05D5\u05E0\u05D5\u05D7\u05D4, \u05D0\u05D5 \u05E1\u05EA\u05DD \u05DC\u05D3\u05E2\u05EA \u05D0\u05EA \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05D4\u05E9\u05D9\u05E8 \u05D4\u05D0\u05D4\u05D5\u05D1 \u05E2\u05DC\u05D9\u05D4\u05DD. \u05E0\u05EA\u05E7\u05DC\u05E0\u05D5 \u05D1\u05E7\u05D5\u05E9\u05D9 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8\u05D9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D4\u05E8\u05D2\u05D9\u05DC\u05D9\u05DD, \u05D1\u05D4\u05DD \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05D3\u05E3 \u05D0\u05D5 \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05D3\u05D5\u05E8\u05E9 \u05DC\u05D7\u05D9\u05E6\u05D5\u05EA \u05DE\u05D9\u05D5\u05EA\u05E8\u05D5\u05EA \u05D5\u05DE\u05E9\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DA \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D1\u05DC\u05D1\u05D3 \u05D5\u05DC\u05DC\u05D0 \u05D4\u05DE\u05E7\u05D5\u05E8, \u05D0\u05D5 \u05DE\u05D5\u05E6\u05D9\u05D0\u05DA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05D5\u05D0\u05D9\u05D8\u05D9\u05EA \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D2\u05D9\u05DC\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D5\u05E1\u05E4\u05EA \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8, \u05D0\u05D9\u05E0\u05D4 \u05DE\u05D5\u05E4\u05D9\u05E2\u05D4 \u05DB\u05DC\u05DC \u05D1\u05D0\u05EA\u05E8\u05D9\u05DD \u05D4\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05D8\u05E7\u05E1\u05D8 \u05D5\u05DE\u05D9\u05D5\u05E2\u05D3\u05D9\u05DD \u05DC\u05E7\u05E8\u05D9\u05D0\u05D4, \u05D5\u05DE\u05E6\u05E8\u05D9\u05DB\u05D4 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05D5 \u05EA\u05D5\u05E1\u05E3 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DE\u05E1\u05D5\u05E8\u05D1\u05DC"]})]})}b(Ou)`
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
`;function $u({className:e}){const D=i.exports.useContext(R),{sname:t}=G0();i.exports.useEffect(()=>{t&&t.includes("_")&&n()},[]);function n(){let E=t;E=E.replaceAll("-"," ");const c={artistName:encodeURI(` ${E.split("_")[0]} `),songName:encodeURI(` ${E.split("_")[1]} `)};E=E.replaceAll("_"," - "),D.getLines(c,E)}function s(E){E.preventDefault()}return h("div",{className:e,children:[u("div",{className:"home-top",children:h(F,{container:!0,className:"home-t-container",children:[!D.currLyrics&&u(F,{item:!0,xs:12,sm:6,children:u($,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),h(F,{item:!0,xs:12,sm:6,children:[!D.currLyrics&&h($,{variant:"h3",className:"page-h3",children:[u("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),u("br",{}),u("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),u("br",{}),u("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),u("div",{className:"small-two",children:u("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),u(K,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:s,className:"search-ctr",children:u(ku,{})})]})]})}),D.currLyrics&&u(zu,{className:"lyrics-body"})]})}const i0=b($u)`
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
    
`;var Mu="/assets/screenshot-tt-2.533f020d.png";function Pu({className:e}){return h("div",{id:"",className:e,children:["\u05DC\u05DE\u05D9 \u05E9\u05E8\u05D5\u05E6\u05D4 \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E9\u05D9\u05E8\u05D9\u05DD",u("br",{}),"\u05D0\u05D5 \u05E1\u05EA\u05DD \u05E8\u05D5\u05E6\u05D4 \u05DC\u05D3\u05E2\u05EA \u05DE\u05D4 \u05D4\u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05E9\u05DC \u05E9\u05D9\u05E8 \u05D0\u05D4\u05D5\u05D1",u("br",{}),u("br",{}),"\u05E9\u05DE\u05E0\u05D5 \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E0\u05D5\u05D7\u05D5\u05EA \u05DE\u05D9\u05E8\u05D1\u05D9\u05EA",u("br",{}),"\u05DE\u05D4\u05D9\u05E8 \u05E0\u05D5\u05D7 \u05E2\u05DD \u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9",u("br",{}),"\u05D5\u05DC\u05DC\u05D0 \u05E4\u05D9\u05E6'\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05EA\u05E8\u05D9\u05DD \u05DE\u05E1\u05D1\u05D9\u05D1",u("br",{}),u("br",{}),"\u05DE\u05E4\u05E0\u05D9 \u05E9\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9",u("br",{}),"\u05E9\u05D0\u05D9\u05E0\u05D5 \u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D0\u05D3\u05DD",u("br",{}),"\u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05DC\u05E2\u05EA\u05D9\u05DD \u05DC\u05D0 \u05DE\u05D3\u05D5\u05D9\u05E7",u("br",{}),"\u05D5\u05DE\u05D5\u05DE\u05DC\u05E5 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD",u("br",{}),"\u05DC\u05DE\u05D9\u05DC\u05D9\u05DD \u05DE\u05E1\u05D5\u05D9\u05DE\u05D5\u05EA",u("br",{}),u("br",{}),"\u05DC\u05DB\u05DF \u05D1\u05E0\u05D5\u05E1\u05E3",u("br",{}),"\u05D4\u05D1\u05D0\u05E0\u05D5 \u05E4\u05D9\u05E8\u05D5\u05E9 \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9",u("br",{}),"\u05DB\u05DE\u05E2\u05D8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05E9\u05EA\u05DC\u05D7\u05E6\u05D5 \u05E2\u05DC\u05D9\u05D4",u("br",{}),"\u05DB\u05DA \u05D7\u05E1\u05DB\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA",u("br",{}),"\u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA",u("br",{}),u("br",{}),"\u05D4\u05DB\u05EA\u05D1 \u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9?",u("br",{}),"\u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8",u("br",{}),"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05D6\u05DB\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D4\u05E2\u05D3\u05E4\u05D4",u("br",{}),u("br",{}),u("br",{}),u("p",{children:"\u05D4\u05D0\u05EA\u05E8 \u05E9\u05D9\u05EA\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA \u05DB\u05DE\u05E2\u05D8 \u05DB\u05DC \u05E9\u05D9\u05E8 \u05E9\u05EA\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05D9\u05E9\u05D0\u05D9\u05E8 \u05D0\u05EA \u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05DC\u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9"}),u("br",{}),u("img",{src:d0,alt:"1\u05E9\u05D9\u05E8"}),u("img",{src:m0,alt:"2\u05E9\u05D9\u05E8"}),u("br",{}),u("p",{children:"\u05DE\u05D4\u05D9\u05D5\u05DD \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8\u05D9\u05DD \u05D4\u05D0\u05D4\u05D5\u05D1\u05D9\u05DD \u05E2\u05DC\u05D9\u05DB\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA, \u05D5\u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA\u05DD \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E0\u05D5\u05D7\u05D4 \u05D5\u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA, \u05E2\u05DD \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05D4\u05DE\u05D5\u05E2\u05D3\u05E3 \u05E2\u05DC\u05D9\u05DB\u05DD, \u05D1\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05E7\u05D9 \u05DC\u05DC\u05D0 \u05D4\u05E1\u05D7\u05D5\u05EA \u05D3\u05E2\u05EA, \u05D5\u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4"}),u("p",{children:"\u05D4\u05D9\u05D5\u05EA \u05D5\u05D0\u05E0\u05D5 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD \u05D1\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D8\u05D5\u05DE\u05D8\u05D9 \u05D4\u05DE\u05D1\u05D5\u05E6\u05E2 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05DE\u05DB\u05D5\u05E0\u05D4, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05D9\u05E0\u05D5 \u05DE\u05D5\u05E9\u05DC\u05DD, \u05D5\u05E2\u05DC \u05DB\u05DF \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D9\u05DC\u05D5\u05E0\u05D9 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05E0\u05E4\u05E8\u05D3, \u05DB\u05DA \u05D0\u05DD \u05D4\u05D4\u05E7\u05E9\u05E8 \u05E9\u05DC \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05DE\u05E9\u05E4\u05D8 \u05D0\u05D9\u05E0\u05D5 \u05DE\u05EA\u05D0\u05D9\u05DD, \u05EA\u05D5\u05DB\u05DC\u05D5 \u05DC\u05D4\u05E9\u05D5\u05D5\u05EA \u05E2\u05DD \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"}),u("img",{src:h0,alt:"\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),u("img",{src:Mu,alt:"2\u05E7\u05DC\u05D5\u05E1 \u05D0\u05E4 \u05E2\u05DD \u05D4\u05D8\u05D5\u05DC\u05D8\u05D9\u05E4"}),u("p",{children:"\u05D4\u05DB\u05EA\u05D1 \u05D2\u05D3\u05D5\u05DC/\u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9? \u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8, \u05D5\u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D9\u05E9\u05DE\u05D5\u05E8 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA\u05DA"}),u("img",{src:g0,alt:"\u05DB\u05E4\u05EA\u05D5\u05E8 \u05E4\u05D5\u05E0\u05D8\u05E1\u05D9\u05D9\u05D6"}),u("p",{children:"\u05DE\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05D0\u05EA\u05E8? - \u05D1\u05E9\u05D5\u05E0\u05D4 \u05DE\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05EA\u05E8 \u05E8\u05D2\u05D9\u05DC \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF, \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D0\u05E6\u05DC\u05E0\u05D5 \u05DE\u05D5\u05E4\u05D9\u05E2 \u05D1\u05D6\u05DE\u05DF \u05E9\u05D4\u05D8\u05E7\u05E1\u05D8 \u05D4\u05DE\u05E7\u05D5\u05E8\u05D9 \u05E0\u05E9\u05D0\u05E8 \u05DE\u05D5\u05DC \u05E2\u05D9\u05E0\u05D9 \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9 - \u05DB\u05E4\u05EA\u05D5\u05E8 \u05E0\u05D5\u05D7 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1, \u05D4\u05E9\u05D5\u05DE\u05E8 \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D0\u05EA \u05D4\u05E2\u05D3\u05E4\u05EA \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9, \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF - \u05EA\u05E8\u05D2\u05D5\u05DD \u05DE\u05D4\u05D9\u05E8 \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05E6\u05D0\u05EA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05D5\u05EA"}),u("p",{children:"\u05DE\u05D9 \u05D0\u05E0\u05D7\u05E0\u05D5? \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7. \u05E8\u05D0\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E6\u05D5\u05E8\u05DA \u05D1\u05D0\u05EA\u05E8 \u05D4\u05DE\u05D9\u05D5\u05E2\u05D3 \u05DC\u05D3\u05D5\u05D1\u05E8\u05D9 \u05E2\u05D1\u05E8\u05D9\u05EA \u05D4\u05E8\u05D5\u05E6\u05D9\u05DD \u05DC\u05DC\u05DE\u05D5\u05D3 \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D7\u05D5\u05D5\u05D9\u05EA\u05D9\u05EA \u05D5\u05E0\u05D5\u05D7\u05D4, \u05D0\u05D5 \u05E1\u05EA\u05DD \u05DC\u05D3\u05E2\u05EA \u05D0\u05EA \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA \u05D4\u05E9\u05D9\u05E8 \u05D4\u05D0\u05D4\u05D5\u05D1 \u05E2\u05DC\u05D9\u05D4\u05DD. \u05E0\u05EA\u05E7\u05DC\u05E0\u05D5 \u05D1\u05E7\u05D5\u05E9\u05D9 \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05EA\u05E8\u05D9 \u05DE\u05D9\u05DC\u05D9\u05DD \u05D4\u05E8\u05D2\u05D9\u05DC\u05D9\u05DD, \u05D1\u05D4\u05DD \u05EA\u05E8\u05D2\u05D5\u05DD \u05D4\u05D3\u05E3 \u05D0\u05D5 \u05DE\u05D9\u05DC\u05D4 \u05D1\u05D5\u05D3\u05D3\u05EA \u05D3\u05D5\u05E8\u05E9 \u05DC\u05D7\u05D9\u05E6\u05D5\u05EA \u05DE\u05D9\u05D5\u05EA\u05E8\u05D5\u05EA \u05D5\u05DE\u05E9\u05D0\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DA \u05E2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05D1\u05DC\u05D1\u05D3 \u05D5\u05DC\u05DC\u05D0 \u05D4\u05DE\u05E7\u05D5\u05E8, \u05D0\u05D5 \u05DE\u05D5\u05E6\u05D9\u05D0\u05DA \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D7\u05D9\u05E6\u05D5\u05E0\u05D9\u05EA \u05D5\u05D0\u05D9\u05D8\u05D9\u05EA \u05D1\u05D3\u05E8\u05DA \u05DB\u05DC\u05DC \u05D1\u05E0\u05D5\u05E1\u05E3 \u05D2\u05D9\u05DC\u05D9\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D5\u05E1\u05E4\u05EA \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05DB\u05EA\u05D1 \u05E9\u05D9\u05DE\u05D5\u05E9\u05D9\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8, \u05D0\u05D9\u05E0\u05D4 \u05DE\u05D5\u05E4\u05D9\u05E2\u05D4 \u05DB\u05DC\u05DC \u05D1\u05D0\u05EA\u05E8\u05D9\u05DD \u05D4\u05DE\u05E6\u05D9\u05D2\u05D9\u05DD \u05D8\u05E7\u05E1\u05D8 \u05D5\u05DE\u05D9\u05D5\u05E2\u05D3\u05D9\u05DD \u05DC\u05E7\u05E8\u05D9\u05D0\u05D4, \u05D5\u05DE\u05E6\u05E8\u05D9\u05DB\u05D4 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D0\u05D5 \u05EA\u05D5\u05E1\u05E3 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DE\u05E1\u05D5\u05E8\u05D1\u05DC"})]})}const _u=b(Pu)`
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
`;function Ru({className:e}){return h("div",{id:"NO_MATCH_WRAPPER",className:e,children:[u($,{variant:"h2",className:"page-h2",children:"404"}),u($,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Ju=b(Ru)`

`;function ju({className:e}){var g,k;const D=i.exports.useContext(Q),t=i.exports.useContext(Y),n=i.exports.useContext(G),[s,E]=i.exports.useState("\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7 - \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD \u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA");i.exports.useRef(null);const c=U0({key:"muirtl",stylisPlugins:[Q0,Y0]});function o(){m()}const m=()=>{const N=document.createElement("script");N.type="text/javascript",N.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",N.defer=!0,document.body.appendChild(N)};i.exports.useEffect(()=>{o()},[n]);const r=N=>{n.closeBanner(N)};return a0({palette:{mode:"dark"}}),h("div",{className:e,children:[u(q0,{value:c,children:h(V0,{hashType:"noslash",children:[u(nu,{currTitle:s}),u(Cu,{className:"header"}),((g=n.main)==null?void 0:g.open)&&h(D0,{severity:"warning",className:"main-alert",children:[u(c0,{children:n.main.title}),n.main.message]}),u(xu,{children:h(W0,{children:[u(V,{path:"/",element:u(i0,{className:"page"})}),u(V,{path:"songs/:sname",element:u(i0,{className:"page"})}),u(V,{path:"/About",element:u(_u,{className:"page"})}),u(V,{path:"*",element:u(Ju,{className:"page"})})]})}),D.open&&D.child&&u(vu,{className:"drawer"}),t.circular.open&&u(Z0,{color:t.main.color||"primary"}),((k=n.iosSnackbar)==null?void 0:k.open)&&u(K0,{open:n.iosSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:u(D0,{onClose:()=>{r("iosSnackbar")},severity:n.iosSnackbar.severity,sx:{width:"100%"},children:n.iosSnackbar.message})}),u("br",{}),u("br",{}),u("ins",{className:"adsbygoogle",style:{display:"block",margin:"10px"},"data-ad-format":"autorelaxed","data-ad-client":"ca-pub-8294214228053744","data-ad-slot":"2008052409"}),u(bu,{})]})}),u(Nu,{})]})}const Hu=b(ju)`
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
`,Gu=[Du,ru,tu,mu,au];function Uu(e){return u(H,{children:Gu.reduceRight((D,t)=>u(t,{children:D}),e.children)})}X0.render(u(_.StrictMode,{children:u(Uu,{children:u(uu,{theme:p0,children:u(Hu,{className:"app"})})})}),document.getElementById("root"));
