var he=Object.defineProperty,ge=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var se=(u,t,r)=>t in u?he(u,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):u[t]=r,x=(u,t)=>{for(var r in t||(t={}))oe.call(t,r)&&se(u,r,t[r]);if(U)for(var r of U(t))ie.call(t,r)&&se(u,r,t[r]);return u},I=(u,t)=>ge(u,fe(t));var $=(u,t)=>{var r={};for(var n in u)oe.call(u,n)&&t.indexOf(n)<0&&(r[n]=u[n]);if(u!=null&&U)for(var n of U(u))t.indexOf(n)<0&&ie.call(u,n)&&(r[n]=u[n]);return r};import{R as j,r as a,j as e,c as ce,M as xe,a as h,B as ye,b as H,d as Ce,A as be,s as S,L as ee,N as te,e as V,f as Y,g as Se,h as Ae,i as q,I as we,k as ve,l as Le,m as Ee,C as ke,T as Ie,n as P,o as Ne,p as ue,q as de,G as z,t as Te,u as X,v as Be,w as ze,D as Fe,x as Oe,y as $e,z as Pe,E as Me,F as _e,H as Re,J as je,K as R,O as Je,P as Ge,Q as He,S as qe,U as De,V as We,W as Ue,X as Ve,Y as Ye,Z as Ze,_ as Ke}from"./vendor.2b355312.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const D of s)if(D.type==="childList")for(const E of D.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&n(E)}).observe(document,{childList:!0,subtree:!0});function r(s){const D={};return s.integrity&&(D.integrity=s.integrity),s.referrerpolicy&&(D.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?D.credentials="include":s.crossorigin==="anonymous"?D.credentials="omit":D.credentials="same-origin",D}function n(s){if(s.ep)return;s.ep=!0;const D=r(s);fetch(s.href,D)}};Qe();const Z=j.createContext(void 0);function Xe(u){const[t,r]=a.exports.useState({}),D={openDrawer:(E,o,m="temporary",y)=>{r({open:E,anchor:o,permanent:m,child:y})},closeDrawer:(E,o,m="temporary",y)=>{r({open:E,anchor:o,permanent:m,child:y})}};return e(Z.Provider,{value:x(x({},t),D),children:u.children})}const K=j.createContext(void 0);function eu(u){const[t,r]=a.exports.useState({main:{open:!1,color:"inherit"},circular:{open:!1,color:"inherit"}}),E={createLoader:(o,m)=>{t[o]&&r(I(x({},t),{[o]:void 0})),r(I(x({},t),{[o]:{open:!1,color:m||"inherit"}}))},openLoader:o=>{t[o]?r(I(x({},t),{[o]:I(x({},t[o]),{open:!0})})):console.error("Loader does'nt exist. Name: "+o)},closeLoader:o=>{t[o]?r(I(x({},t),{[o]:I(x({},t[o]),{open:!1})})):console.error("Loader does'nt exist. Name: "+o)}};return e(K.Provider,{value:x(x({},t),E),children:u.children})}const W=j.createContext(void 0);function uu(u){const[t,r]=a.exports.useState({main:{open:!1,severity:"warning",title:"\u05D4\u05D0\u05EA\u05E8 \u05D1\u05D1\u05E0\u05D9\u05D4",message:""},snackbar:{open:!1,severity:"success",title:"",message:"This is a Snackbar!"}}),E={createBanner:(o,m,y,g)=>{t[o]&&r(I(x({},t),{[o]:void 0})),r(I(x({},t),{[o]:{open:!0,severity:m||"success",title:y||"",message:g||""}}))},openBanner:o=>{t[o]?r(I(x({},t),{[o]:I(x({},t[o]),{open:!0})})):console.error("Banner does'nt exist. Name: "+o)},closeBanner:o=>{t[o]?r(I(x({},t),{[o]:I(x({},t[o]),{open:!1})})):console.error("Banner does'nt exist. Name: "+o)}};return e(W.Provider,{value:x(x({},t),E),children:u.children})}const pe=ce({direction:"rtl",typography:{fontFamily:["Assistant","Roboto","sans-serif"].join(",")},palette:{primary:{main:"#DF808E",light:"#fff",dark:"#F43C6A",contrastText:"#555555"},secondary:{main:"#42B983",dark:"#262626",light:"#fcfcfc",contrastText:"#C0A8E6"}}});function tu(){const[u]=a.exports.useState(pe.palette.primary.main);return e("div",{className:"wrapper",children:e(xe,{children:e("meta",{name:"theme-color",content:u})})})}const ru=u=>{localStorage.getItem("meturgamm_songs")||localStorage.setItem("meturgamm_songs",JSON.stringify([]));const t=JSON.parse(localStorage.getItem("meturgamm_songs"));t.push(u),t.length>=500&&t.shift(),localStorage.setItem("meturgamm_songs",JSON.stringify(t))},nu=u=>localStorage.getItem("meturgamm_songs")?JSON.parse(localStorage.getItem("meturgamm_songs")).find(r=>r.title.toLowerCase()===u.toLowerCase()):!1,su=()=>{let u=document.querySelector(".gsst_a");u&&u.dispatchEvent(new Event("click"))},ou=()=>{let u=!1;const t=navigator.userAgent;return/android/i.test(t)?u=!1:(/iPad|iPhone|iPod/.test(t)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&(u=!0),u};var O={lsSaveSong:ru,lsGetSong:nu,clearGsc:su,getMobileOS:ou};const Q=j.createContext(void 0);function iu(u){const t=JSON.parse(localStorage.getItem("fontsize")),[r,n]=a.exports.useState({fontSize:{sm:Number(t==null?void 0:t.sm)||22,md:Number(t==null?void 0:t.md)||25,lg:Number(t==null?void 0:t.lg)||27},colors:"pink"}),s=()=>{r.fontSize.md<60&&(n(I(x({},r),{fontSize:{sm:r.fontSize.sm+1,md:r.fontSize.md+1,lg:r.fontSize.lg+1}})),E())},D=()=>{r.fontSize.sm>7&&(n(I(x({},r),{fontSize:{sm:r.fontSize.sm-1,md:r.fontSize.md-1,lg:r.fontSize.lg-1}})),E())};function E(){localStorage.setItem("fontsize",JSON.stringify({sm:r.fontSize.sm,md:r.fontSize.md,lg:r.fontSize.lg}))}function o(){localStorage.setItem("colors_mode",r.colors)}function m(g){n(I(x({},r),{colors:g})),o()}const y={reduceFontSize:D,increaseFontSize:s,setColors:m};return e(Q.Provider,{value:x(x({},r),y),children:u.children})}function Du({className:u}){const t=a.exports.useContext(Q);return e("div",{id:"",className:u,children:h(ye,{className:"button-group",children:[e(H,{"aria-label":"reduce",onClick:()=>{t.reduceFontSize()},children:e(Ce,{fontSize:"small"})}),e(H,{className:"font-size-disabled",disabled:!0,children:"\u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8"}),e(H,{"aria-label":"increase",onClick:()=>{t.increaseFontSize()},children:e(be,{fontSize:"small"})})]})})}const au=S(Du)`
  text-align: end;
  margin-inline-end: 25px;
  height: 30px;
  flex-grow: 2;

  .MuiButtonGroup-root{
    height: 30px;
  }

  button{
    background-color: ${u=>u.theme.palette.secondary.light};
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

`,lu=[];function cu(){return e(ee,{children:lu.map((u,t)=>e(te,{to:u.url,children:h(V,{button:!0,children:[e(Y,{primary:u.name}),e(Se,{children:e(Ae,{})})]},u.name)},t))})}S(cu)`
  
`;const J=j.createContext(void 0),Eu="\u05E9\u05D9\u05E8 \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0 - Example",ae=[{src:"\u05E9\u05D9\u05E8\u05DF \u05D0\u05D3",trans:"Perfect - \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA "},{src:"[Verse 1]",trans:"   "},{src:"I found a love for me",trans:"\u05DE\u05E6\u05D0\u05EA\u05D9 \u05D0\u05D4\u05D1\u05D4 \u05D1\u05E9\u05D1\u05D9\u05DC\u05D9"},{src:"Oh, darling, just dive right in and follow my lead",trans:"\u05D0\u05D4, \u05D9\u05E7\u05D9\u05E8\u05EA\u05D9, \u05E4\u05E9\u05D5\u05D8 \u05DC\u05E6\u05DC\u05D5\u05DC \u05D9\u05E9\u05E8 \u05E4\u05E0\u05D9\u05DE\u05D4 \u05D5\u05DC\u05E2\u05E7\u05D5\u05D1 \u05D0\u05D7\u05E8\u05D9 \u05D4\u05D4\u05D5\u05D1\u05DC\u05D4 \u05E9\u05DC\u05D9"},{src:"Well, I found a girl, beautiful and sweet",trans:"\u05D5\u05D1\u05DB\u05DF, \u05DE\u05E6\u05D0\u05EA\u05D9 \u05D1\u05D7\u05D5\u05E8\u05D4, \u05D9\u05E4\u05D4 \u05D5\u05DE\u05EA\u05D5\u05E7\u05D4"},{src:"Oh, I never knew you were the someone waiting for me",trans:"\u05DC\u05D0 \u05D9\u05D3\u05E2\u05EA\u05D9 \u05E9\u05D0\u05EA \u05D6\u05D5 \u05E9\u05DE\u05D7\u05DB\u05D4 \u05DC\u05D9"},{src:"[Pre-Chorus]",trans:"   "},{src:"'Cause we were just kids when we fell in love",trans:"\u05DB\u05D9 \u05D4\u05D9\u05D9\u05E0\u05D5 \u05E8\u05E7 \u05D9\u05DC\u05D3\u05D9\u05DD \u05DB\u05E9\u05D4\u05EA\u05D0\u05D4\u05D1\u05E0\u05D5"},{src:"Not knowing what it was",trans:"\u05DC\u05D0 \u05D9\u05D5\u05D3\u05E2 \u05DE\u05D4 \u05D6\u05D4 \u05D4\u05D9\u05D4"},{src:"I will not give you up this time",trans:"\u05D0\u05E0\u05D9 \u05DC\u05D0 \u05D0\u05D5\u05D5\u05EA\u05E8 \u05E2\u05DC\u05D9\u05D9\u05DA \u05D4\u05E4\u05E2\u05DD"},{src:"But darling, just kiss me slow, your heart is all I own",trans:"\u05D0\u05D1\u05DC \u05D9\u05E7\u05D9\u05E8\u05EA\u05D9, \u05E8\u05E7 \u05EA\u05E0\u05E9\u05E7\u05D9 \u05D0\u05D5\u05EA\u05D9 \u05DC\u05D0\u05D8, \u05D4\u05DC\u05D1 \u05E9\u05DC\u05DA \u05D4\u05D5\u05D0 \u05DB\u05DC \u05DE\u05D4 \u05E9\u05D9\u05E9 \u05DC\u05D9"},{src:"And in your eyes, you're holding mine",trans:"\u05D5\u05D1\u05E2\u05D9\u05E0\u05D9\u05DA \u05D0\u05EA \u05DE\u05D7\u05D6\u05D9\u05E7\u05D4 \u05D0\u05EA \u05E9\u05DC\u05D9"},{src:"[Chorus]",trans:"   "},{src:"Baby, I'm dancing in the dark with you between my arms",trans:"\u05DE\u05D5\u05EA\u05E7, \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E7\u05D3 \u05D0\u05D9\u05EA\u05DA \u05D1\u05D7\u05D5\u05E9\u05DA \u05D1\u05D9\u05DF \u05D6\u05E8\u05D5\u05E2\u05D5\u05EA\u05D9\u05D9"},{src:"Barefoot on the grass, listening to our favourite song",trans:"\u05D9\u05D7\u05E4\u05D9\u05DD \u05E2\u05DC \u05D4\u05D3\u05E9\u05D0, \u05DE\u05E7\u05E9\u05D9\u05D1\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D0\u05D4\u05D5\u05D1 \u05E2\u05DC\u05D9\u05E0\u05D5"},{src:"When you said you looked a mess, I whispered underneath my breath",trans:"\u05DB\u05E9\u05D0\u05DE\u05E8\u05EA \u05E9\u05D0\u05EA \u05E0\u05E8\u05D0\u05D9\u05EA \u05DE\u05D1\u05D5\u05DC\u05D2\u05E0\u05EA, \u05DC\u05D7\u05E9\u05EA\u05D9 \u05DE\u05EA\u05D7\u05EA \u05DC\u05E0\u05E9\u05D9\u05DE\u05D4 \u05E9\u05DC\u05D9"},{src:"But you heard it, darling, you look perfect tonight",trans:"\u05D0\u05D1\u05DC \u05E9\u05DE\u05E2\u05EA \u05D0\u05EA \u05D6\u05D4, \u05D9\u05E7\u05D9\u05E8\u05EA\u05D9, \u05D0\u05EA \u05E0\u05E8\u05D0\u05D9\u05EA \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA \u05D4\u05DC\u05D9\u05DC\u05D4"},{src:"[Verse 2]",trans:"   "},{src:"Well I found a woman, stronger than anyone I know",trans:"\u05D5\u05D1\u05DB\u05DF \u05DE\u05E6\u05D0\u05EA\u05D9 \u05D0\u05D9\u05E9\u05D4, \u05D7\u05D6\u05E7\u05D4 \u05D9\u05D5\u05EA\u05E8 \u05DE\u05DB\u05DC \u05DE\u05D9 \u05E9\u05D0\u05E0\u05D9 \u05DE\u05DB\u05D9\u05E8"},{src:"She shares my dreams, I hope that someday I'll share her home",trans:"\u05D4\u05D9\u05D0 \u05D7\u05D5\u05DC\u05E7\u05EA \u05D0\u05EA \u05D4\u05D7\u05DC\u05D5\u05DE\u05D5\u05EA \u05E9\u05DC\u05D9, \u05D0\u05E0\u05D9 \u05DE\u05E7\u05D5\u05D5\u05D4 \u05E9\u05D9\u05D5\u05DD \u05D0\u05D7\u05D3 \u05D0\u05D7\u05DC\u05D5\u05E7 \u05D0\u05EA \u05D4\u05D1\u05D9\u05EA \u05E9\u05DC\u05D4"},{src:"I found a love, to carry more than just my secrets",trans:"\u05DE\u05E6\u05D0\u05EA\u05D9 \u05D0\u05D4\u05D1\u05D4, \u05DC\u05E9\u05D0\u05EA \u05D9\u05D5\u05EA\u05E8 \u05DE\u05D0\u05E9\u05E8 \u05E8\u05E7 \u05D0\u05EA \u05D4\u05E1\u05D5\u05D3\u05D5\u05EA \u05E9\u05DC\u05D9"},{src:"To carry love, to carry children of our own",trans:"\u05DC\u05E9\u05D0\u05EA \u05D0\u05D4\u05D1\u05D4, \u05DC\u05E9\u05D0\u05EA \u05D9\u05DC\u05D3\u05D9\u05DD \u05DE\u05E9\u05DC\u05E0\u05D5"},{src:"[Pre-Chorus]",trans:"   "},{src:"We are still kids, but we're so in love",trans:"\u05D0\u05E0\u05D7\u05E0\u05D5 \u05E2\u05D3\u05D9\u05D9\u05DF \u05D9\u05DC\u05D3\u05D9\u05DD, \u05D0\u05D1\u05DC \u05D0\u05E0\u05D7\u05E0\u05D5 \u05DB\u05DC \u05DB\u05DA \u05DE\u05D0\u05D5\u05D4\u05D1\u05D9\u05DD"},{src:"Fighting against all odds",trans:"\u05E0\u05DC\u05D7\u05DE\u05D9\u05DD \u05DB\u05E0\u05D2\u05D3 \u05DB\u05DC \u05D4\u05E1\u05D9\u05DB\u05D5\u05D9\u05D9\u05DD"},{src:"I know we'll be alright this time",trans:"\u05D0\u05E0\u05D9 \u05D9\u05D5\u05D3\u05E2 \u05E9\u05E0\u05D4\u05D9\u05D4 \u05D1\u05E1\u05D3\u05E8 \u05D4\u05E4\u05E2\u05DD"},{src:"Darling, just hold my hand",trans:"\u05D9\u05E7\u05D9\u05E8\u05EA\u05D9, \u05E8\u05E7 \u05EA\u05D7\u05D6\u05D9\u05E7\u05D9 \u05DC\u05D9 \u05D0\u05EA \u05D4\u05D9\u05D3"},{src:"Be my girl, I'll be your man",trans:"\u05EA\u05D4\u05D9\u05D9 \u05D4\u05D9\u05DC\u05D3\u05D4 \u05E9\u05DC\u05D9, \u05D0\u05E0\u05D9 \u05D0\u05D4\u05D9\u05D4 \u05D4\u05D2\u05D1\u05E8 \u05E9\u05DC\u05DA"},{src:"I see my future in your eyes",trans:"\u05D0\u05E0\u05D9 \u05E8\u05D5\u05D0\u05D4 \u05D0\u05EA \u05D4\u05E2\u05EA\u05D9\u05D3 \u05E9\u05DC\u05D9 \u05D1\u05E2\u05D9\u05E0\u05D9\u05DA"},{src:"[Chorus 2]",trans:"   "},{src:"Baby, I'm dancing in the dark, with you between my arms",trans:"\u05DE\u05D5\u05EA\u05E7, \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E7\u05D3 \u05D1\u05D7\u05D5\u05E9\u05DA, \u05D0\u05D9\u05EA\u05DA \u05D1\u05D9\u05DF \u05D6\u05E8\u05D5\u05E2\u05D5\u05EA\u05D9\u05D9"},{src:"Barefoot on the grass, listening to our favourite song",trans:"\u05D9\u05D7\u05E4\u05D9\u05DD \u05E2\u05DC \u05D4\u05D3\u05E9\u05D0, \u05DE\u05E7\u05E9\u05D9\u05D1\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D0\u05D4\u05D5\u05D1 \u05E2\u05DC\u05D9\u05E0\u05D5"},{src:"When I saw you in that dress, looking so beautiful",trans:"\u05DB\u05E9\u05E8\u05D0\u05D9\u05EA\u05D9 \u05D0\u05D5\u05EA\u05DA \u05D1\u05E9\u05DE\u05DC\u05D4 \u05D4\u05D4\u05D9\u05D0, \u05E0\u05E8\u05D0\u05D9\u05EA \u05DB\u05DC \u05DB\u05DA \u05D9\u05E4\u05D4"},{src:"I don't deserve this, darling, you look perfect tonight",trans:"\u05D6\u05D4 \u05DC\u05D0 \u05DE\u05D2\u05D9\u05E2 \u05DC\u05D9, \u05D9\u05E7\u05D9\u05E8\u05EA\u05D9, \u05D0\u05EA \u05E0\u05E8\u05D0\u05D9\u05EA \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA \u05D4\u05DC\u05D9\u05DC\u05D4"},{src:"[Instrumental]",trans:"   "},{src:"[Chorus 3]",trans:"   "},{src:"Baby, I'm dancing in the dark, with you between my arms",trans:"\u05DE\u05D5\u05EA\u05E7, \u05D0\u05E0\u05D9 \u05E8\u05D5\u05E7\u05D3 \u05D1\u05D7\u05D5\u05E9\u05DA, \u05D0\u05D9\u05EA\u05DA \u05D1\u05D9\u05DF \u05D6\u05E8\u05D5\u05E2\u05D5\u05EA\u05D9\u05D9"},{src:"Barefoot on the grass, listening to our favourite song",trans:"\u05D9\u05D7\u05E4\u05D9\u05DD \u05E2\u05DC \u05D4\u05D3\u05E9\u05D0, \u05DE\u05E7\u05E9\u05D9\u05D1\u05D9\u05DD \u05DC\u05E9\u05D9\u05E8 \u05D4\u05D0\u05D4\u05D5\u05D1 \u05E2\u05DC\u05D9\u05E0\u05D5"},{src:"I have faith in what I see",trans:"\u05D9\u05E9 \u05DC\u05D9 \u05D0\u05DE\u05D5\u05E0\u05D4 \u05D1\u05DE\u05D4 \u05E9\u05D0\u05E0\u05D9 \u05E8\u05D5\u05D0\u05D4"},{src:"Now I know I have met an angel in person",trans:"\u05E2\u05DB\u05E9\u05D9\u05D5 \u05D0\u05E0\u05D9 \u05D9\u05D5\u05D3\u05E2 \u05E9\u05E4\u05D2\u05E9\u05EA\u05D9 \u05DE\u05DC\u05D0\u05DA \u05D1\u05D0\u05D5\u05E4\u05DF \u05D0\u05D9\u05E9\u05D9"},{src:"And she looks perfect",trans:"\u05D5\u05D4\u05D9\u05D0 \u05E0\u05E8\u05D0\u05D9\u05EA \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA"},{src:"[Outro]",trans:"   "},{src:"I don't deserve this",trans:"\u05D6\u05D4 \u05DC\u05D0 \u05DE\u05D2\u05D9\u05E2 \u05DC\u05D9"},{src:"You look perfect tonight",trans:"\u05D0\u05EA \u05E0\u05E8\u05D0\u05D9\u05EA \u05DE\u05D5\u05E9\u05DC\u05DD \u05D4\u05DC\u05D9\u05DC\u05D4"}];function du(u){const t=a.exports.useContext(K),r=a.exports.useContext(W),[n,s]=a.exports.useState(!sessionStorage.getItem("currSongTitle")),[D,E]=a.exports.useState(sessionStorage.getItem("currLines")&&sessionStorage.getItem("currSongTitle")||Eu||""),[o,m]=a.exports.useState(""),[y,g]=a.exports.useState(sessionStorage.getItem("currLines")||ae||!1),[i,v]=a.exports.useState(JSON.parse(sessionStorage.getItem("currLines"))||ae||[]),[F,N]=a.exports.useState(0),[f,C]=a.exports.useState(!1);a.exports.useEffect(()=>{w()},[i]);const B="https://musicline-backend.vercel.app",A=(b,l)=>{s(!1),l=l.replace(/[\])}[{(]/g,"").trim();let c=document.querySelectorAll(".gsc-expansionArea")[0],p=O.lsGetSong(l);if(p){c.style.pointerEvents="all",v(p.lines),E(l),g(p.lines),O.clearGsc(),w(),sessionStorage.setItem("currLines",JSON.stringify(p.lines)),sessionStorage.setItem("currSongTitle",l);return}t.openLoader("main"),fetch(`${B}/lyrics`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({currSong:b})}).then(d=>d.json()).then(d=>{if(t.closeLoader("main"),sessionStorage.removeItem("currLines"),sessionStorage.removeItem("currSongTitle"),c.style.pointerEvents="all",E(l),d==null?void 0:d.combined)m(d.id),v(d.combined),g(d.combined),O.lsSaveSong({title:l,lines:d.combined}),O.clearGsc(),sessionStorage.setItem("currLines",JSON.stringify(d.combined)),sessionStorage.setItem("currSongTitle",l),w();else if(d==null?void 0:d.lyrics){let L=d.lyrics,k=[];L.split(/(?:\r\n|\r|\n)/g).map(M=>{M.length>=2&&k.push({src:M.replace(".",""),trans:""})}),v(k),g(L),O.clearGsc(),w()}else r.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8","")}).catch(d=>{console.log("ERRORR "+d),console.log(d),t.closeLoader("main"),r.createBanner("error","error","\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0, \u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1 \u05D0\u05D5 \u05D7\u05E4\u05E9\u05D5 \u05E9\u05D9\u05E8 \u05D0\u05D7\u05E8",""),c.style.pointerEvents="all"})},w=()=>{let b=!1;for(let l=0;l<i.length;l++){let c=i[l];if(b===!0)break;if(c.trans.length<=1||c.trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."){b=!0,f?G(c.src,l):re(c.src,l);break}else continue}N(F+1)},T=(b,l)=>{let c="";for(let p=l;p<i.length;p++){const d=i[p];if(c.length>=1600)break;d.trans==="   "&&(c+=d.src+" $. "),d.trans!="   "&&(c+=` ${p} ${d.src} . `)}fetch(`${B}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(c)})}).then(p=>p.json()).then(p=>{var d,L;if((p==null?void 0:p.trans.length)>=1){let k=i;p.trans.split(".").map(_=>{try{if(console.log(_),_.includes("$")||_.includes("["))k[l].trans="   ";else{let ne=Number(_.match(/\d+/)[0].replaceAll(".",""));k[ne].trans=_.replace(ne,"")}}catch{_.includes("$")&&(k[l].trans="   ")}l++}),v(k),((d=i[i.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("currSongTitle",D)),w()}else i[l].trans===void 0&&(newLines[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[l]={src:b,trans:"[missing]"}),v(newLines),((L=i[i.length-1])==null?void 0:L.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("currSongTitle",D)),w()}).catch(p=>{var k;let d=i;i[l].trans===""&&(d[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(d[l]={src:b,trans:"[missing]"}),v(d),((k=i[i.length-1])==null?void 0:k.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("currSongTitle",JSON.stringify(D))),w(),console.log(p)})},G=(b,l)=>{fetch(`${B}/trans/single-line`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({line:encodeURI(b)})}).then(c=>c.json()).then(c=>{var p,d;if(c==null?void 0:c.trans){let L=i;L[l]={src:b,trans:c==null?void 0:c.trans},v(L),((p=i[i.length-1])==null?void 0:p.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("currSongTitle",D)),w()}else i[l].trans===void 0&&(newLines[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(newLines[l]={src:b,trans:"[missing]"}),v(newLines),((d=i[i.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("currSongTitle",D)),w()}).catch(c=>{var L;let p=i;i[l].trans===""&&(p[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(p[l]={src:b,trans:"[missing]"}),v(p),((L=i[i.length-1])==null?void 0:L.trans).length>=1&&sessionStorage.setItem("currLines",JSON.stringify(i)),w(),console.log(c)})},re=(b,l)=>{fetch(`${B}/trans/lines`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({lines:i,song_id:o,title:D})}).then(c=>c.json()).then(c=>{var d,L;let p=i;(c==null?void 0:c.trans.length)?(c.trans.map((k,M)=>{p[M]={src:p[M].src,trans:k}}),v(p),O.lsSaveSong({title:D,lines:i}),sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("currSongTitle",D),w()):(c==null?void 0:c.trans)?(p[l]={src:b,trans:c==null?void 0:c.trans},v(p),((d=i[i.length-1])==null?void 0:d.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("currSongTitle",D)),w()):(i[l].trans===void 0&&(p[l]={src:b,trans:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."}),i[l].trans==="\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD.."&&(p[l]={src:b,trans:"[missing]"}),v(p),((L=i[i.length-1])==null?void 0:L.trans).length>=1&&(sessionStorage.setItem("currLines",JSON.stringify(i)),sessionStorage.setItem("currSongTitle",D)),w())}).catch(c=>{C(!0),console.log(c)})},me={getLines:A,getFullTrans:re,getPartlyTrans:T,getSingleLineTrans:G,checkNextTrans:w};return e(J.Provider,{value:x({first:n,title:D,currLyrics:y,lines:i,cou:F},me),children:u.children})}function pu({className:u}){return a.exports.useContext(J),e(q,{className:u,sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[].map(r=>e(te,{to:r.url,children:e(H,{sx:{my:2},children:r.name})},r.name))})}S(pu)`
  
`;function mu({className:u}){return e("div",{id:"",className:u,children:e(we,{children:e(ve,{className:"mui-rounded-icon"})})})}S(mu)`
  .mui-rounded-icon{
    background-color: ${u=>"#595959"};
    color: ${u=>"#595959"};
    border-radius: 12px;
  }
`;const hu=r=>{var n=r,{className:u}=n,t=$(n,["className"]);var m,y,g;a.exports.useContext(Z);const s=a.exports.useContext(J),D=a.exports.useContext(W),E=a.exports.useContext(K),o=function(){sessionStorage.removeItem("currLines"),location.reload()};return h(Le,{position:"sticky",className:u,children:[E.main.open&&e(Ee,{color:"info"}),e(ke,{maxWidth:"xl",children:h(Ie,{disableGutters:!0,children:[e(te,{to:"/",onClick:()=>{o()},children:h(P,{variant:"h6",noWrap:!0,component:"h2",sx:{mr:2,display:"flex"},children:[e("span",{id:"h2-part1",children:"\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE"}),e("span",{id:"h2-part2",children:"\u05D9\u05D5\u05D6\u05D9\u05E7"})]})}),s.lines[0]&&e(au,{})]})}),e(Ne,{in:(m=D.error)==null?void 0:m.open,children:h(ue,{severity:"error",className:"error-alert",onClose:()=>{D.closeBanner("error")},children:[e(de,{children:(y=D.error)==null?void 0:y.title}),(g=D.error)==null?void 0:g.message]})})]})},gu=S(hu)`
  background-color: ${u=>u.theme.palette.primary.dark};
  color: ${u=>u.theme.palette.secondary.dark};
  z-index: 2000;

  @media (max-width: 600px) {
    background-color: ${u=>u.theme.palette.primary.main};
  }

  a{
    color: ${u=>u.theme.palette.primary.main};
    &hover{
      color: #8e8b8b;
    }

    #h2-part1, #h2-part2{
      font-weight: 600;
    }

    #h2-part1{
      color:  ${u=>u.theme.palette.secondary.dark};
    }

    #h2-part2{
      color:  ${u=>u.theme.palette.secondary.light};
    }
  }
  
  button{
    color: ${u=>u.theme.palette.secondary.main};
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
`;function fu(r){var n=r,{className:u}=n,t=$(n,["className"]);return e("div",{className:u,children:t.children})}const xu=S(fu)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  background-color: ${u=>u.theme.palette.secondary.light};
`;function yu({className:u}){return e("div",{id:"FOOTER",className:u,children:e(z,{container:!0,rowSpacing:6,columnSpacing:2,children:h(z,{item:!0,xs:12,sm:4,children:[h(ee,{children:[e(Te,{variant:"h5",component:"h5",children:"\u05DC\u05D3\u05D9\u05D5\u05D5\u05D7 \u05E2\u05DC \u05EA\u05E7\u05DC\u05D5\u05EA"}),e(V,{component:X,href:"mailto:meturgamusic@gmail.com",children:e(Y,{primary:"MeturgaMusic@gmail.com"})}),e(V,{component:X,href:"https://www.facebook.com/people/MeturgaMusic/100088145167989",children:e(Y,{primary:"\u05D0\u05D5 \u05E9\u05DC\u05D7\u05D5 \u05D4\u05D5\u05D3\u05E2\u05D4 \u05D1\u05E2\u05DE\u05D5\u05D3 \u05D4\u05E4\u05D9\u05D9\u05E1\u05D1\u05D5\u05E7 \u05E9\u05DC\u05E0\u05D5"})})]}),e(ee,{children:e(V,{component:X,href:"https://basssites.com",className:"built-by",children:e(Y,{primary:" \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 BassSites"})})})]})})})}const Cu=S(yu)`
  /* color: ${u=>u.theme.palette.primary.contrastText}; */
  background-color: ${u=>u.theme.palette.primary.main};
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
    color: ${u=>u.theme.palette.secondary.dark};
    color: white;
    margin: unset;
  }

  .built-by{
    color: white;
  }

`;function bu(r){var n=r,{className:u}=n,t=$(n,["className"]);const s=a.exports.useContext(Z);return e(Be,{className:u,anchor:s.anchor,open:s.open,variant:s.permanent,onClose:()=>{s.closeDrawer(!1)},children:e(q,{className:"drawer-layout",sx:{width:s.anchor==="top"||s.anchor==="bottom"?"auto":250},role:"presentation",onClick:()=>{s.closeDrawer(!1)},children:e(s.child,{})})})}const Su=S(bu)`
  color: #F4F5F7;
  
  .MuiDrawer-paper {
    background-color: ${u=>u.theme.palette.primary.light};
    color: ${u=>u.theme.palette.secondary.main};
  }

  svg{
    color: ${u=>u.theme.palette.secondary.main};
  }

  a{
    color: ${u=>u.theme.palette.secondary.main};
    text-decoration: none;
  }
`;function Au({className:u}){const[t,r]=a.exports.useState(!0),n=()=>{r(!1)};return h(ze,{id:"main-modal-root",className:u,open:t,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",sx:{zIndex:1500},children:[e(Fe,{id:"alert-dialog-title",children:"\u05D1\u05E8\u05D5\u05DA \u05D4\u05D1\u05D0 \u05DC\u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05D5\u05D6\u05D9\u05E7"}),e(Oe,{children:e($e,{id:"alert-dialog-description",children:"Built with love using Vite build tool, React and Mui UI library."})}),e(Pe,{children:e(H,{onClick:n,children:"Close"})})]})}S(Au)`
  
`;function wu(r){var n=r,{className:u}=n,t=$(n,["className"]);const[s,D]=a.exports.useState(!0);return e(Me,{className:u,open:s,onClose:()=>{D(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:t.children})}S(wu)`
  #main-modal-root{
    z-index: 1500;
    background-color: #ffe607;
  }
`;function vu({className:u}){return e("div",{id:"",className:u})}const Lu=S(vu)`
  visibility: hidden;
  height: 0px !important;
  width: 0px !important;
`;function ku({className:u}){const[t,r]=a.exports.useState(!1),[n,s]=a.exports.useState(""),[D,E]=a.exports.useState(!1),o=a.exports.useContext(J),m=a.exports.useContext(W);a.exports.useEffect(()=>{s(o.title)},[o.title]),a.exports.useEffect(()=>{y()},[]);const y=()=>{O.getMobileOS()&&E(!0)};function g(){if(O.getMobileOS()){const f=document.querySelectorAll(".gsc-control-cse")[0];f.style.visibility="visible",f.style.marginTop="90px"}}a.exports.useEffect(()=>{window.onload=()=>{if(document.querySelector("#gcse-my-wrapper #___gcse_0"))g(),i();else{let C=function(){i()};const B=document.querySelector("#gcse-my-wrapper"),A={childList:!0,attributes:!0,subtree:!1};new MutationObserver(C).observe(B,A)}}},[]);function i(){r(!0);const f=document.querySelectorAll("#___gcse_0 .gsc-results-wrapper-nooverlay")[0],C={childList:!1,attributes:!0,subtree:!1};function B(){F()}new MutationObserver(B).observe(f,C)}function v(f){s(f.target.value),N(f)}const F=()=>{setTimeout(()=>{let f=document.querySelectorAll(".gs-title:not(.gsc-table-cell-thumbnail)");f&&f.forEach((C,B)=>{if(C.innerText.includes("Lyrics")){if(C.innerText.includes("(")){let T=C.innerText.match(/\(([^)]+)\)/)[1].toLowerCase();if((T==null?void 0:T.includes("live"))||(T==null?void 0:T.includes("mix"))||(T==null?void 0:T.includes("remix"))){C.parentElement.parentElement.parentElement.remove();return}}let A=C.innerText.split("Lyrics")[0];A=A.replaceAll("\u2013","-"),C.innerText=A;const w={artistName:encodeURI(A.split("-")[0]),songName:encodeURI(A.split("-")[1])};C.nodeName!=="A"&&C.parentElement.parentElement.parentElement.addEventListener("click",T=>{var G;((G=m.error)==null?void 0:G.open)&&m.closeBanner("error"),C.parentElement.parentElement.parentElement.parentElement.style.pointerEvents="none",o.getLines(w,A)}),C.style.display="block"}else C.innerText.includes("Lyrics")||C.parentElement.parentElement.parentElement.className.includes("gsc-webResult")&&C.parentElement.parentElement.parentElement.remove()})},50)};function N(f){m.error&&m.closeBanner("error");let C=document.querySelector("#gsc-i-id1"),B=/^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9- ]+$/;if(C)if(f.target.value.length<=1){let A=document.querySelector(".gsst_a");A&&A.dispatchEvent(new Event("click"))}else if(B.test(f.target.value)){C.value=f.target.value;let A=document.querySelectorAll(".gsc-search-box button")[0];A?setTimeout(()=>{A.dispatchEvent(new Event("click"))},50*Math.floor(Math.random()*4)):(m.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page"))}else{m.createBanner("error","error","\u05D4\u05D6\u05DF \u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05D1\u05DC\u05D1\u05D3","");return}else m.createBanner("error","error","\u05DE\u05E9\u05D4\u05D5 \u05D4\u05E9\u05EA\u05D1\u05E9, \u05E0\u05E1\u05D4 \u05DC\u05E8\u05E2\u05E0\u05DF \u05D0\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3","(no gsc loaded)"),console.error("no gsc loaded, try reload the page")}return h("div",{id:"",className:u,children:[!D&&e(_e,{id:"outlined-search",label:"\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E9\u05D9\u05E8",type:"search",className:"main-input",onChange:t?v:null,autoFocus:!1,autoComplete:"off",value:n}),e("div",{id:"gcse-my-wrapper",children:e("div",{className:"gcse-search"})})]})}const Iu=S(ku)`

  *,::before,::after{
      background-color: '#ffffff0';
  }

  input, fieldset, label{
   color: ${u=>u.theme.palette.primary.main+"!important"};
   border-color: ${u=>u.theme.palette.secondary.contrastText+"!important"};

   font-weight: 600;
    border-width: medium;
  }

`;function Nu(r){var n=r,{className:u}=n,t=$(n,["className"]);const s=a.exports.useContext(Q),[D,E]=a.exports.useState(!1),[o,m]=a.exports.useState([]),y=()=>{E(!0),o[0]||i()},g=()=>{E(!1)};function i(){const F="https://musicline-backend.vercel.app";let N=t.lyric.trim().toLowerCase();N=N.replaceAll(/[^a-zA-Z0-9']/g,""),N.slice(-1)==="'"&&(N=N.replaceAll("'","g")),fetch(`${F}/trans/single`,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({single:encodeURI(N)})}).then(f=>f.json()).then(f=>{if(f==null?void 0:f.results[0]){m(f.results);return}else{m(["\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0"]);return}}).catch(f=>{console.log(f)})}const v=()=>o[0]?o.map((F,N)=>h(R,{children:[N>0&&e("hr",{}),e("p",{className:"tt-p",children:F})]})):e("p",{className:"tt-p",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E2\u05D5\u05D3"});return e(Re,{onClickAway:g,children:e(je,{className:u,title:h(R,{children:[e(P,{color:"inherit",style:{fontSize:s.fontSize.sm>=18?s.fontSize.sm-8:s.fontSize.sm,textAlign:"center"},children:" \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD: "}),e("div",{className:"tt-body",style:{textAlign:"center",maxHeight:"110px",overflowY:"auto",direction:"ltr",fontSize:s.fontSize.sm>=18?s.fontSize.sm-10:s.fontSize.sm},children:o[0]?e(v,{}):e(Ee,{sx:{margin:"8px"},color:"inherit"})})]}),arrow:!0,leaveTouchDelay:60*1e3,leaveDelay:0,PopperProps:{disablePortal:!1},onClose:g,open:D,disableFocusListener:!0,disableTouchListener:!0,disableHoverListener:!0,children:h("p",{className:"single-lyric",onClick:y,children:["\xA0 ",t.lyric," "]})})})}const le=S(Nu)`

`;function Tu({className:u}){return e(z,{id:"about_body",className:u,container:!0,children:h(z,{className:"lyrics-line he-line",item:!0,style:{fontSize:"22px"},children:["\u05DE\u05D4 \u05DE\u05D8\u05E8\u05EA \u05D4\u05D0\u05EA\u05E8?",e("br",{}),"\u05DC\u05D4\u05E6\u05D9\u05D2 \u05DB\u05DE\u05D4 \u05E9\u05D9\u05D5\u05EA\u05E8 \u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD",e("br",{}),"\u05DE\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05D3,",e("br",{}),"\u05DC\u05DC\u05D0 \u05E6\u05D5\u05E8\u05DA \u05DC\u05D1\u05E7\u05E9 \u05EA\u05E8\u05D2\u05D5\u05DD \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3,",e("br",{}),"\u05D5\u05D1\u05E2\u05D9\u05E6\u05D5\u05D1 \u05E0\u05D5\u05D7 \u05D5\u05E0\u05E7\u05D9",e("br",{}),e("br",{}),"\u05DE\u05D4 \u05D4\u05D9\u05D7\u05D5\u05D3\u05D9\u05D5\u05EA?",e("br",{}),"\u05EA\u05E8\u05D2\u05D5\u05DD \u05E9\u05D5\u05E8\u05D4 \u05D0\u05D7\u05E8 \u05E9\u05D5\u05E8\u05D4,",e("br",{}),"\u05DB\u05DA \u05D2\u05DD \u05D4\u05DE\u05E7\u05D5\u05E8 \u05D5\u05D2\u05DD \u05D4\u05EA\u05E8\u05D2\u05D5\u05DD \u05E0\u05E9\u05D0\u05E8\u05D9\u05DD \u05DE\u05D5\u05DC \u05D4\u05DE\u05E9\u05EA\u05DE\u05E9.",e("br",{}),"\u05D1\u05E0\u05D5\u05E1\u05E3 \u05D9\u05E9\u05E0\u05D4 \u05D0\u05D5\u05E4\u05E6\u05D9\u05D4 \u05DC\u05D1\u05D3\u05D5\u05E7 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD",e("br",{}),"\u05E0\u05D5\u05E1\u05E4\u05D9\u05DD \u05DC\u05DB\u05DC \u05DE\u05D9\u05DC\u05D4 \u05D1\u05E4\u05E0\u05D9 \u05E2\u05E6\u05DE\u05D4",e("br",{}),e("br",{}),"\u05D4\u05DB\u05EA\u05D1 \u05E7\u05D8\u05DF \u05DE\u05D9\u05D3\u05D9?",e("br",{}),"\u05E1\u05D9\u05D3\u05E8\u05E0\u05D5 \u05DB\u05E4\u05EA\u05D5\u05E8 \u05DC\u05E9\u05D9\u05E0\u05D5\u05D9 \u05D2\u05D5\u05D3\u05DC \u05D4\u05D8\u05E7\u05E1\u05D8",e("br",{}),"\u05D5\u05D4\u05D0\u05EA\u05E8 \u05D9\u05D6\u05DB\u05D5\u05E8 \u05D0\u05EA \u05D4\u05D4\u05E2\u05D3\u05E4\u05D4",e("br",{}),e("br",{}),e("br",{}),h("div",{style:{direction:"ltr"},children:[e("br",{}),"What is this site?",e("br",{}),"Translated songs from english to hebrew",e("br",{}),"The biggest site for hebrew translated songs",e("br",{}),"Search for english song,",e("br",{}),"and this site will translate it for you",e("br",{}),"line after line,",e("br",{}),"line englihs - and line hebrew What else?",e("br",{}),"- clean and easy design",e("br",{}),"- the source and the translation staying for the user",e("br",{}),"- in addition",e("br",{}),"there's option to get more translations",e("br",{}),"for each word,",e("br",{}),"if the context doesnt clear",e("br",{}),"the text too small?",e("br",{}),'we made "change size" button',e("br",{}),"and the site will save the preference",e("br",{})]})]})})}const Bu=S(Tu)`
   padding: 15px;
`;function zu(r){var n=r,{className:u}=n,t=$(n,["className"]);const s=a.exports.useContext(J),D=a.exports.useContext(Q);return a.exports.useEffect(()=>{},[s.cou]),h(R,{children:[e(q,{className:u,children:e(z,{container:!0,spacing:2,children:s.lines&&s.currLyrics&&h("div",{id:"lyrics_body",children:[e(P,{variant:"h6",noWrap:!0,component:"h3",style:{fontSize:D.fontSize.lg},children:s.title&&s.title.split(" ").map((E,o)=>e(le,{lyric:E},o))}),s.lines.map((E,o)=>{var m;return E.src.includes("[")&&(E.trans="   "),h("div",{children:[o>0&&E.src.includes("[")&&h(R,{children:[e("br",{}),e("br",{})]}),e(z,{className:"lyrics-line en-line",item:!0,style:{fontSize:D.fontSize.md},children:E.src.split(" ").map((y,g)=>e(le,{lyric:y},g+Math.random()))}),e(z,{item:!0,className:"lyrics-line he-line",style:{fontSize:D.fontSize.sm},children:e(R,{children:((m=E.trans)==null?void 0:m.length)>2?E.trans.split(" ").map((y,g)=>{if(E.trans!=="   ")return h("small",{className:"single-trans",children:[y," \xA0"]},g+Math.random())}):e("small",{className:"single-trans",children:"\u05D8\u05D5\u05E2\u05DF \u05EA\u05E8\u05D2\u05D5\u05DD..."})})})]},o)})]})})}),s.first&&e(q,{className:u,children:e(z,{id:"container_about_body",container:!0,children:e(Bu,{})})})]})}const Fu=S(zu)`
  font-family: 'Assistant','Roboto', 'sans-serif';
  max-width: 90%;
  font-size: 20px;
  margin: 25px;
  margin-inline-end: 10px;
  padding-bottom: 40px;
  padding-inline-start: 50px;
  margin-top: ${u=>u.first?"100px":"55px"};

  background-color: ${u=>u.theme.palette.primary.light};
  color:  ${u=>u.theme.palette.primary.contrastText};
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 #7c7c7c;

  #lyrics_body{
    padding: 15px 50px;
  }

  @media (max-width: 600px) {
    
  #lyrics_body{
    padding: 0px 15px;
  }
    max-width: 100%;
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
`;function Ou({className:u}){const t=a.exports.useContext(J);function r(n){n.preventDefault()}return h("div",{className:u,children:[e("div",{className:"home-top",children:h(z,{container:!0,className:"home-t-container",children:[t.first&&e(z,{item:!0,xs:12,sm:6,children:e(P,{variant:"h1",className:"page-h1",children:"\u05E9\u05D9\u05E8\u05D9\u05DD \u05DE\u05EA\u05D5\u05E8\u05D2\u05DE\u05D9\u05DD"})}),h(z,{item:!0,xs:12,sm:6,children:[t.first&&h(P,{variant:"h3",className:"page-h3",children:[e("span",{className:"h3-start h3-s-one",children:"\u05D7\u05E4\u05E9\u05D5 \u05D1\u05D9\u05DF \u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05E9\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA"}),e("br",{}),e("span",{className:"h3-start h3-s-two",children:"\u05D5\u05E7\u05D1\u05DC\u05D5 \u05D0\u05EA \u05D4\u05E9\u05D9\u05E8 \u05DE\u05EA\u05D5\u05E8\u05D2\u05DD \u05DC\u05E2\u05D1\u05E8\u05D9\u05EA"}),e("br",{}),e("p",{className:"small-one",children:"\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0? \u05E0\u05E1\u05D5 \u05DC\u05D7\u05E4\u05E9 \u05E2\u05DD \u05E9\u05DD \u05D4\u05D0\u05DE\u05DF"}),e("div",{className:"small-two",children:e("small",{children:"\u05DC\u05D7\u05D9\u05E6\u05D4 \u05E2\u05DC \u05DE\u05D9\u05DC\u05D4 \u05EA\u05E6\u05D9\u05D2 \u05EA\u05E8\u05D2\u05D5\u05DE\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD"})})]}),e(q,{component:"form",noValidate:!0,autoComplete:"off",onSubmit:r,className:"search-ctr",children:e(Iu,{})})]})]})}),t.currLyrics&&e(Fu,{className:"lyrics-body"})]})}const $u=S(Ou)`
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

        color: ${u=>u.theme.palette.primary.main};
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
        border-color: ${u=>u.theme.palette.primary.dark};;

        @media (max-width: 600px) {
            width: 95%;
        }
    };

    .MuiTextField-root * { 
        color: ${u=>u.theme.palette.primary.dark};;
        border-color: ${u=>u.theme.palette.primary.dark};;
    }

    .lyrics-body, .MuiGrid-root, .muirtl-mhc70k-MuiGrid-root{
        direction: ltr;
    }
    
`;function Pu({className:u}){return h("div",{id:"NO_MATCH_WRAPPER",className:u,children:[e(P,{variant:"h2",className:"page-h2",children:"404"}),e(P,{variant:"h3",className:"page-h3",children:"Nothing Here"})]})}const Mu=S(Pu)`

`;function _u({className:u}){var m,y;const t=a.exports.useContext(Z),r=a.exports.useContext(K),n=a.exports.useContext(W);a.exports.useRef(null);const s=Je({key:"muirtl",stylisPlugins:[Ve,Ye]});function D(){E()}const E=()=>{const g=document.createElement("script");g.type="text/javascript",g.src="https://cse.google.com/cse.js?cx=a85c2374ffc8b8898",g.defer=!0,document.body.appendChild(g)};a.exports.useEffect(()=>{D()},[n]);const o=g=>{n.closeBanner(g)};return ce({palette:{mode:"dark"}}),h("div",{className:u,children:[e(Ge,{value:s,children:h(He,{children:[e(tu,{}),e(gu,{className:"header"}),((m=n.main)==null?void 0:m.open)&&h(ue,{severity:"warning",className:"main-alert",children:[e(de,{children:n.main.title}),n.main.message]}),e(xu,{children:h(qe,{children:[e(De,{path:"/",element:e($u,{className:"page"})}),e(De,{path:"*",element:e(Mu,{className:"page"})})]})}),t.open&&t.child&&e(Su,{className:"drawer"}),r.circular.open&&e(We,{color:r.main.color||"primary"}),((y=n.iosSnackbar)==null?void 0:y.open)&&e(Ue,{open:n.iosSnackbar.open,autoHideDuration:6e3,onClose:()=>{},children:e(ue,{onClose:()=>{o("iosSnackbar")},severity:n.iosSnackbar.severity,sx:{width:"100%"},children:n.iosSnackbar.message})}),e(Cu,{})]})}),e(Lu,{})]})}const Ru=S(_u)`
  height: 100vh;
  height: fit-content;
  min-height: 700px;
  color: ${u=>u.theme.palette.primary.contrastText};

  .page-h1{
    padding: 30px 0px 0px 0px;
    font-size: 140px; 
    font-weight: 100;
    color: ${u=>u.theme.palette.primary.contrastText};
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
    color: ${u=>u.theme.palette.primary.contrastText};

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
    background-color: ${u=>u.theme.palette.secondary.dark};
    color: ${u=>u.theme.palette.primary.contrastText};
    border-radius: unset;

    @media (min-width: 600px) {
      letter-spacing: 0.5px;
      word-spacing: 0.5px;
    }
  }

  .loader{
      padding: 20px;
  }
`,ju=[Xe,uu,eu,du,iu];function Ju(u){return e(R,{children:ju.reduceRight((t,r)=>e(r,{children:t}),u.children)})}Ze.render(e(j.StrictMode,{children:e(Ju,{children:e(Ke,{theme:pe,children:e(Ru,{className:"app"})})})}),document.getElementById("root"));
