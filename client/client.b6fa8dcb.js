function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function l(t,e,n,o,r,s,c){const l=function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(e,o,r,s);if(l){const r=i(e,n,o,c);t.p(r,l)}}function a(t){return null==t?"":t}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),d=u?t=>requestAnimationFrame(t):t;const p=new Set;function h(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&d(h)}function m(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function b(){return v(" ")}function w(){return v("")}function E(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function _(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;const s=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)r.removeAttribute(s[t]);return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):y(e)}function S(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return v(e)}function L(t){return S(t," ")}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e=document.body){return Array.from(e.querySelectorAll(t))}let N;function O(t){N=t}function R(){if(!N)throw new Error("Function called outside component initialization");return N}const k=[],P=[],j=[],q=[],U=Promise.resolve();let C=!1;function z(t){j.push(t)}let D=!1;const I=new Set;function B(){if(!D){D=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];O(e),J(e.$$)}for(O(null),k.length=0;P.length;)P.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];I.has(e)||(I.add(e),e())}j.length=0}while(k.length);for(;q.length;)q.pop()();C=!1,D=!1,I.clear()}}function J(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const M=new Set;let Y;function K(){Y={r:0,c:[],p:Y}}function V(){Y.r||r(Y.c),Y=Y.p}function X(t,e){t&&t.i&&(M.delete(t),t.i(e))}function F(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),Y.c.push((()=>{M.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function H(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function G(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function Q(t,e){t&&t.l(e)}function Z(t,e,o,c){const{fragment:i,on_mount:l,on_destroy:a,after_update:u}=t.$$;i&&i.m(e,o),c||z((()=>{const e=l.map(n).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(z)}function tt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(k.push(t),C||(C=!0,U.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,s,c,i,l,a=[-1]){const u=N;O(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let d=!1;if(f.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&et(e,t)),n})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=x(n.target);f.fragment&&f.fragment.l(t),t.forEach($)}else f.fragment&&f.fragment.c();n.intro&&X(e.$$.fragment),Z(e,n.target,n.anchor,n.customElement),B()}O(u)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const rt=[];function st(e,n=t){let o;const r=[];function s(t){if(c(e,t)&&(e=t,o)){const t=!rt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),rt.push(n,e)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const l=[c,i];return r.push(l),1===r.length&&(o=n(s)||t),c(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const ct={};var it={$:t=>"string"==typeof t?document.querySelector(t):t,extend:(...t)=>Object.assign(...t),cumulativeOffset(t){let e=0,n=0;do{e+=t.offsetTop||0,n+=t.offsetLeft||0,t=t.offsetParent}while(t);return{top:e,left:n}},directScroll:t=>t&&t!==document&&t!==document.body,scrollTop(t,e){let n=void 0!==e;return this.directScroll(t)?n?t.scrollTop=e:t.scrollTop:n?document.documentElement.scrollTop=document.body.scrollTop=e:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},scrollLeft(t,e){let n=void 0!==e;return this.directScroll(t)?n?t.scrollLeft=e:t.scrollLeft:n?document.documentElement.scrollLeft=document.body.scrollLeft=e:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0}};const lt={container:"body",duration:500,delay:0,offset:0,easing:function(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1},onStart:t,onDone:t,onAborting:t,scrollX:!1,scrollY:!0},at=t=>{let{offset:e,duration:n,delay:o,easing:r,x:s=0,y:c=0,scrollX:i,scrollY:l,onStart:a,onDone:u,container:m,onAborting:g,element:$}=t;"function"==typeof e&&(e=e());var y=it.cumulativeOffset(m),v=$?it.cumulativeOffset($):{top:c,left:s},b=it.scrollLeft(m),w=it.scrollTop(m),E=v.left-y.left+e,x=v.top-y.top+e,_=E-b,S=x-w;let L=!0,A=!1,T=f()+o,N=T+n;function O(t){t||(A=!0,a($,{x:s,y:c}))}function R(t){!function(t,e,n){i&&it.scrollLeft(t,n),l&&it.scrollTop(t,e)}(m,w+S*t,b+_*t)}function k(){L=!1}return function(t){let e;0===p.size&&d(h),new Promise((n=>{p.add(e={c:t,f:n})}))}((t=>{if(!A&&t>=T&&O(!1),A&&t>=N&&(R(1),k(),u($,{x:s,y:c})),!L)return g($,{x:s,y:c}),!1;if(A){R(0+1*r((t-T)/n))}return!0})),O(o),R(0),k},ut=(ft=t=>at((t=>{let e=it.extend({},lt,t);return e.container=it.$(e.container),e.element=it.$(e.element),e})(t)),(t,e)=>{let n=e;const o=t=>{t.preventDefault(),ft("string"==typeof n?{element:n}:n)};return t.addEventListener("click",o),t.addEventListener("touchstart",o),{update(t){n=t},destroy(){t.removeEventListener("click",o),t.removeEventListener("touchstart",o)}}});var ft;function dt(e){let n,o,r,c,i,l,u,f,d;return{c(){n=y("nav"),o=y("a"),r=v("sksum"),i=b(),l=y("a"),u=v("portfolio"),this.h()},l(t){n=_(t,"NAV",{class:!0});var e=x(n);o=_(e,"A",{class:!0,href:!0});var s=x(o);r=S(s,"sksum"),s.forEach($),i=L(e),l=_(e,"A",{href:!0,class:!0});var c=x(l);u=S(c,"portfolio"),c.forEach($),e.forEach($),this.h()},h(){E(o,"class",c=a(void 0===e[0]?"selected":"")+" svelte-lz1tr6"),E(o,"href","/"),E(l,"href","/"),E(l,"class","svelte-lz1tr6"),E(n,"class","svelte-lz1tr6")},m(e,c){var a;g(e,n,c),m(n,o),m(o,r),m(n,i),m(n,l),m(l,u),f||(a=ut.call(null,l,"#portfolio"),d=a&&s(a.destroy)?a.destroy:t,f=!0)},p(t,[e]){1&e&&c!==(c=a(void 0===t[0]?"selected":"")+" svelte-lz1tr6")&&E(o,"class",c)},i:t,o:t,d(t){t&&$(n),f=!1,d()}}}function pt(t,e,n){let{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment)},[o]}class ht extends ot{constructor(t){super(),nt(this,t,pt,dt,c,{segment:0})}}function mt(t){let e,n,o,r;e=new ht({props:{segment:t[0]}});const s=t[2].default,c=function(t,e,n,o){if(t){const r=i(t,e,n,o);return t[0](r)}}(s,t,t[1],null);return{c(){W(e.$$.fragment),n=b(),o=y("main"),c&&c.c(),this.h()},l(t){Q(e.$$.fragment,t),n=L(t),o=_(t,"MAIN",{class:!0});var r=x(o);c&&c.l(r),r.forEach($),this.h()},h(){E(o,"class","svelte-1bih5fh")},m(t,s){Z(e,t,s),g(t,n,s),g(t,o,s),c&&c.m(o,null),r=!0},p(t,[n]){const o={};1&n&&(o.segment=t[0]),e.$set(o),c&&c.p&&2&n&&l(c,s,t,t[1],n,null,null)},i(t){r||(X(e.$$.fragment,t),X(c,t),r=!0)},o(t){F(e.$$.fragment,t),F(c,t),r=!1},d(t){tt(e,t),t&&$(n),t&&$(o),c&&c.d(t)}}}function gt(t,e,n){let{$$slots:o={},$$scope:r}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[s,r,o]}class $t extends ot{constructor(t){super(),nt(this,t,gt,mt,c,{segment:0})}}function yt(t){let e,n,o=t[1].stack+"";return{c(){e=y("pre"),n=v(o)},l(t){e=_(t,"PRE",{});var r=x(e);n=S(r,o),r.forEach($)},m(t,o){g(t,e,o),m(e,n)},p(t,e){2&e&&o!==(o=t[1].stack+"")&&A(n,o)},d(t){t&&$(e)}}}function vt(e){let n,o,r,s,c,i,l,a,u,f=e[1].message+"";document.title=n=e[0];let d=e[2]&&e[1].stack&&yt(e);return{c(){o=b(),r=y("h1"),s=v(e[0]),c=b(),i=y("p"),l=v(f),a=b(),d&&d.c(),u=w(),this.h()},l(t){T('[data-svelte="svelte-1o9r2ue"]',document.head).forEach($),o=L(t),r=_(t,"H1",{class:!0});var n=x(r);s=S(n,e[0]),n.forEach($),c=L(t),i=_(t,"P",{class:!0});var p=x(i);l=S(p,f),p.forEach($),a=L(t),d&&d.l(t),u=w(),this.h()},h(){E(r,"class","svelte-8od9u6"),E(i,"class","svelte-8od9u6")},m(t,e){g(t,o,e),g(t,r,e),m(r,s),g(t,c,e),g(t,i,e),m(i,l),g(t,a,e),d&&d.m(t,e),g(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&A(s,t[0]),2&e&&f!==(f=t[1].message+"")&&A(l,f),t[2]&&t[1].stack?d?d.p(t,e):(d=yt(t),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:t,o:t,d(t){t&&$(o),t&&$(r),t&&$(c),t&&$(i),t&&$(a),d&&d.d(t),t&&$(u)}}}function bt(t,e,n){let{status:o}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,o=t.status),"error"in t&&n(1,r=t.error)},[o,r,false]}class wt extends ot{constructor(t){super(),nt(this,t,bt,vt,c,{status:0,error:1})}}function Et(t){let n,o,r;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&W(n.$$.fragment),o=w()},l(t){n&&Q(n.$$.fragment,t),o=w()},m(t,e){n&&Z(n,t,e),g(t,o,e),r=!0},p(t,e){const r=16&e?H(s,[G(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){K();const t=n;F(t.$$.fragment,1,0,(()=>{tt(t,1)})),V()}c?(n=new c(i()),W(n.$$.fragment),X(n.$$.fragment,1),Z(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&X(n.$$.fragment,t),r=!0)},o(t){n&&F(n.$$.fragment,t),r=!1},d(t){t&&$(o),n&&tt(n,t)}}}function xt(t){let e,n;return e=new wt({props:{error:t[0],status:t[1]}}),{c(){W(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,o){Z(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.error=t[0]),2&n&&(o.status=t[1]),e.$set(o)},i(t){n||(X(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function _t(t){let e,n,o,r;const s=[xt,Et],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),o=w()},l(t){n.l(t),o=w()},m(t,n){c[e].m(t,n),g(t,o,n),r=!0},p(t,r){let l=e;e=i(t),e===l?c[e].p(t,r):(K(),F(c[l],1,1,(()=>{c[l]=null})),V(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),X(n,1),n.m(o.parentNode,o))},i(t){r||(X(n),r=!0)},o(t){F(n),r=!1},d(t){c[e].d(t),t&&$(o)}}}function St(t){let n,o;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[_t]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);return n=new $t({props:s}),{c(){W(n.$$.fragment)},l(t){Q(n.$$.fragment,t)},m(t,e){Z(n,t,e),o=!0},p(t,[e]){const o=12&e?H(r,[4&e&&{segment:t[2][0]},8&e&&G(t[3].props)]):{};147&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(X(n.$$.fragment,t),o=!0)},o(t){F(n.$$.fragment,t),o=!1},d(t){tt(n,t)}}}function Lt(t,e,n){let{stores:o}=e,{error:r}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:l=null}=e,{notify:a}=e;var u,f,d;return u=a,R().$$.after_update.push(u),f=ct,d=o,R().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,o=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,a=t.notify)},[r,s,c,i,l,o,a]}class At extends ot{constructor(t){super(),nt(this,t,Lt,St,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Tt=[],Nt=[{js:()=>Promise.all([import("./index.61b222dd.js"),__inject_styles(["client-ed7c53c8.css","index-99b0d2bb.css"])]).then((function(t){return t[0]}))}],Ot=[{pattern:/^\/$/,parts:[{i:0}]}];
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Rt(t,e,n,o){return new(n||(n=Promise))((function(r,s){function c(t){try{l(o.next(t))}catch(t){s(t)}}function i(t){try{l(o.throw(t))}catch(t){s(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}l((o=o.apply(t,e||[])).next())}))}function kt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let Pt,jt=1;const qt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ut={};let Ct,zt;function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,o=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(o):e[n]=o})),e}function It(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ct))return null;let e=t.pathname.slice(Ct.length);if(""===e&&(e="/"),!Tt.some((t=>t.test(e))))for(let n=0;n<Ot.length;n+=1){const o=Ot[n],r=o.pattern.exec(e);if(r){const n=Dt(t.search),s=o.parts[o.parts.length-1],c=s.params?s.params(r):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:o,match:r,page:i}}}}function Bt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=kt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,o=String(n?e.href.baseVal:e.href);if(o===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(o);if(r.pathname===location.pathname&&r.search===location.search)return;const s=It(r);if(s){Yt(s,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),qt.pushState({id:Pt},"",r.href)}}function Jt(){return{x:pageXOffset,y:pageYOffset}}function Mt(t){if(Ut[Pt]=Jt(),t.state){const e=It(new URL(location.href));e?Yt(e,t.state.id):location.href=location.href}else jt=jt+1,function(t){Pt=t}(jt),qt.replaceState({id:Pt},"",location.href)}function Yt(t,e,n,o){return Rt(this,void 0,void 0,(function*(){const r=!!e;if(r)Pt=e;else{const t=Jt();Ut[Pt]=t,Pt=e=++jt,Ut[Pt]=n?t:{x:0,y:0}}if(yield zt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Ut[e];o&&(t=document.getElementById(o.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Ut[Pt]=n,r||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Kt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Vt,Xt=null;function Ft(t){const e=kt(t.target);e&&"prefetch"===e.rel&&function(t){const e=It(new URL(t,Kt(document)));if(e)Xt&&t===Xt.href||(Xt={href:t,promise:fe(e)}),Xt.promise}(e.href)}function Ht(t){clearTimeout(Vt),Vt=setTimeout((()=>{Ft(t)}),20)}function Gt(t,e={noscroll:!1,replaceState:!1}){const n=It(new URL(t,Kt(document)));return n?(qt[e.replaceState?"replaceState":"pushState"]({id:Pt},"",t),Yt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Wt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Qt,Zt,te,ee=!1,ne=[],oe="{}";const re={page:function(t){const e=st(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let o;return e.subscribe((e=>{(void 0===o||n&&e!==o)&&t(o=e)}))}}}({}),preloading:st(null),session:st(Wt&&Wt.session)};let se,ce,ie;function le(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ae(t){return Rt(this,void 0,void 0,(function*(){Qt&&re.preloading.set(!0);const e=function(t){return Xt&&Xt.href===t.href?Xt.promise:fe(t)}(t),n=Zt={},o=yield e,{redirect:r}=o;if(n===Zt)if(r)yield Gt(r.location,{replaceState:!0});else{const{props:e,branch:n}=o;yield ue(n,e,le(e,t.page))}}))}function ue(t,e,n){return Rt(this,void 0,void 0,(function*(){re.page.set(n),re.preloading.set(!1),Qt?Qt.$set(e):(e.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},e.level0={props:yield te},e.notify=re.page.notify,Qt=new At({target:ie,props:e,hydrate:!0})),ne=t,oe=JSON.stringify(n.query),ee=!0,ce=!1}))}function fe(t){return Rt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,o=n.path.split("/").filter(Boolean);let r=null;const s={error:null,status:200,segments:[o[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!te){const t=()=>({});te=Wt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},se)}let i,l=1;try{const r=JSON.stringify(n.query),a=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>Rt(this,void 0,void 0,(function*(){const f=o[i];if(function(t,e,n,o){if(o!==oe)return!0;const r=ne[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,a,r)&&(u=!0),s.segments[l]=o[i+1],!e)return{segment:f};const d=l++;if(!ce&&!u&&ne[i]&&ne[i].part===e.i)return ne[i];u=!1;const{default:p,preload:h}=yield Nt[e.i].js();let m;return m=ee||!Wt.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},se):{}:Wt.preloaded[i+1],s[`level${d}`]={component:p,props:m,segment:f,match:a,part:e.i}})))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:r,props:s,branch:i}}))}var de,pe,he;re.session.subscribe((t=>Rt(void 0,void 0,void 0,(function*(){if(se=t,!ee)return;ce=!0;const e=It(new URL(location.href)),n=Zt={},{redirect:o,props:r,branch:s}=yield fe(e);n===Zt&&(o?yield Gt(o.location,{replaceState:!0}):yield ue(s,r,le(r,e.page)))})))),de={target:document.querySelector("#sapper")},pe=de.target,ie=pe,he=Wt.baseUrl,Ct=he,zt=ae,"scrollRestoration"in qt&&(qt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{qt.scrollRestoration="auto"})),addEventListener("load",(()=>{qt.scrollRestoration="manual"})),addEventListener("click",Bt),addEventListener("popstate",Mt),addEventListener("touchstart",Ft),addEventListener("mousemove",Ht),Wt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:o,preloaded:r,status:s,error:c}=Wt;te||(te=r&&r[0]);const i={error:c,status:s,session:o,level0:{props:te},level1:{props:{status:s,error:c},component:wt},segments:r},l=Dt(n);ue([],i,{host:t,path:e,query:l,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;qt.replaceState({id:jt},"",e);const n=It(new URL(location.href));if(n)return Yt(n,jt,!0,t)}));export{ot as S,b as a,x as b,_ as c,S as d,y as e,$ as f,L as g,E as h,nt as i,g as j,m as k,W as l,Q as m,t as n,Z as o,X as p,T as q,F as r,c as s,v as t,tt as u};

import __inject_styles from './inject_styles.5607aec6.js';