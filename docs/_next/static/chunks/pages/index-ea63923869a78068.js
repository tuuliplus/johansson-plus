(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4186)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},l=n(1003),c=n(880),s=n(9246);function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var p=i.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,p=e.href,h=e.as,y=e.children,v=e.prefetch,b=e.passHref,m=e.replace,j=e.shallow,g=e.scroll,x=e.locale,_=e.onClick,w=e.onMouseEnter,E=u(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=y,a&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var O,k=!1!==v,A=c.useRouter(),C=i.default.useMemo((function(){var e=o(l.resolveHref(A,p,!0),2),t=e[0],n=e[1];return{href:t,as:h?l.resolveHref(A,h):n||t}}),[A,p,h]),S=C.href,L=C.as,M=i.default.useRef(S),I=i.default.useRef(L);a&&(O=i.default.Children.only(n));var N=a?O&&"object"===typeof O&&O.ref:t,P=o(s.useIntersection({rootMargin:"200px"}),3),H=P[0],R=P[1],T=P[2],U=i.default.useCallback((function(e){I.current===L&&M.current===S||(T(),I.current=L,M.current=S),H(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[L,N,S,T,H]);i.default.useEffect((function(){var e=R&&k&&l.isLocalURL(S),t="undefined"!==typeof x?x:A&&A.locale,n=f[S+"%"+L+(t?"%"+t:"")];e&&!n&&d(A,S,L,{locale:t})}),[L,S,R,x,k,A]);var D={ref:U,onClick:function(e){a||"function"!==typeof _||_(e),a&&O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:i}))}(e,A,S,L,m,j,g,x)},onMouseEnter:function(e){a||"function"!==typeof w||w(e),a&&O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l.isLocalURL(S)&&d(A,S,L,{priority:!0})}};if(!a||b||"a"===O.type&&!("href"in O.props)){var J="undefined"!==typeof x?x:A&&A.locale,K=A&&A.isLocaleDomain&&l.getDomainLocale(L,J,A&&A.locales,A&&A.domainLocales);D.href=K||l.addBasePath(l.addLocale(L,J,A&&A.defaultLocale))}return a?i.default.cloneElement(O,D):i.default.createElement("a",Object.assign({},E,D),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,u=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],h=o(a.useState(t?t.current:null),2),y=h[0],v=h[1],b=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),s.push(n));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:o}),t}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:n}))}),[r,y,n,d]),m=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[b,d,m]};var a=n(7294),i=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4186:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(9008),a=n.n(o),i=n(1664),l=n.n(i),c=n(7160),s=n.n(c);t.default=function(){return(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Johansson Plus"}),(0,r.jsx)("meta",{name:"description",content:"Your help with the technical side of Web Analytics and SEO."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"})]}),(0,r.jsxs)("main",{className:s().main,children:[(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:"/icon-384.webp",type:"image/webp"}),(0,r.jsx)("source",{srcSet:"/icon-384.png",type:"image/png"}),(0,r.jsx)("img",{src:"/icon-384.png",alt:"Johansson Plus Logo",width:"192px",height:"192px"})]}),(0,r.jsx)("h1",{className:s().title,children:"Johansson Plus"}),(0,r.jsx)("p",{className:s().description,children:"Your help with the technical side of Web Analytics and SEO."}),(0,r.jsxs)("div",{className:s().grid,children:[(0,r.jsx)(l(),{href:"/#footer",children:(0,r.jsxs)("a",{className:s().card,children:[(0,r.jsx)("h2",{children:"Contact info \u2192"}),(0,r.jsx)("p",{children:"Services? We have services!"})]})}),(0,r.jsxs)("a",{href:"https://github.com/johansson-plus",target:"_blank",className:s().card,rel:"noopener",children:[(0,r.jsx)("h2",{children:"Github \u2192"}),(0,r.jsx)("p",{children:"You Github? We Github!"})]})]})]}),(0,r.jsxs)("footer",{id:"footer",className:s().footer,children:[(0,r.jsxs)("p",{children:["Johansson Plus",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"https://tietopalvelu.ytj.fi/yritystiedot.aspx?yavain=2353885&tarkiste=C9219A323832200A90459D06ACE2A65D20464FA5",children:"FI24374066"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Turku, Finland"]}),(0,r.jsxs)("p",{children:["Aleksi Johansson",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Web Analytics and Technical SEO Consultant",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("a",{href:"mailto:aleksi@johansson.plus",children:"aleksi@johansson.plus"})]})]})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",grid:"Home_grid__GxQ85",card:"Home_card___LpL1"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);