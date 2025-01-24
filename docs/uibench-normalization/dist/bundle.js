!function(){"use strict";function n(){return n=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},n.apply(null,arguments)}var e=Array.isArray;function t(n){var e=typeof n;return"string"===e||"number"===e}function r(n){return void 0===n||null===n}function o(n){return null===n||!1===n||!0===n||void 0===n}function l(n){return"function"===typeof n}function i(n){return"string"===typeof n}function a(n){return null===n}function u(n,e){if(l(e))return{data:n,event:e};return null}function c(n){return!a(n)&&"object"===typeof n}var f={},s=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function d(n){return n.substring(2).toLowerCase()}function p(n,e){n.appendChild(e)}function v(n,e,t){a(t)?p(n,e):n.insertBefore(e,t)}function h(n,e){if(e)return document.createElementNS("http://www.w3.org/2000/svg",n);return document.createElement(n)}function m(n,e,t){n.replaceChild(e,t)}function g(n,e){n.removeChild(e)}function b(n){for(var e=0;e<n.length;e++)n[e]()}function y(n,e,t){var r=n.children;if(0!==(4&t))return r.$LI;if(0!==(8192&t))return 2===n.childFlags?r:r[e?0:r.length-1];return r}function k(n,e){for(var t,o=n;!r(o);){if(0!==(1521&(t=o.flags)))return o.dom;o=y(o,e,t)}return null}function C(n,e){for(var t,r=n.length;void 0!==(t=n.pop());)t((function(){--r<=0&&l(e)&&e()}))}function w(n){for(var e=0;e<n.length;e++)n[e].fn();for(var t=0;t<n.length;t++){var r=n[t];v(r.parent,r.dom,r.next)}n.splice(0,n.length)}function $(n,e,t){for(;!r(n);){var o=n.flags;if(0!==(1521&o))return void(t&&n.dom.parentNode!==e||g(e,n.dom));var l=n.children;if(0!==(4&o)&&(n=l.$LI),0!==(8&o)&&(n=l),0!==(8192&o)){if(2!==n.childFlags){for(var i=0,a=l.length;i<a;++i)$(l[i],e,!1);return}n=l}}}function D(n,e){return function(){$(n,e,!0)}}function F(n,e,t){t.componentWillDisappear.length>0?C(t.componentWillDisappear,D(n,e)):$(n,e,!1)}function A(n,e,t,r,o,l,i,a){n.componentWillMove.push({dom:r,fn:function(){0!==(4&i)?t.componentWillMove(e,o,r):0!==(8&i)&&t.onComponentWillMove(e,o,r,a)},next:l,parent:o})}function x(n,e,t,o,i){for(var a,u,c=e.flags;!r(e);){var f=e.flags;if(0!==(1521&f))return void(r(a)||!l(a.componentWillMove)&&!l(a.onComponentWillMove)?v(t,e.dom,o):A(i,n,a,e.dom,t,o,c,u));var s=e.children;if(0!==(4&f))a=e.children,u=e.props,e=s.$LI;else if(0!==(8&f))a=e.ref,u=e.props,e=s;else if(0!==(8192&f)){if(2!==e.childFlags){for(var d=0,p=s.length;d<p;++d)x(n,s[d],t,o,i);return}e=s}}}function S(e,t,r){if(l(e.constructor.getDerivedStateFromProps))return n({},r,e.constructor.getDerivedStateFromProps(t,r));return r}var W={createVNode:null};function P(n,e){n.textContent=e}function U(n,e){return c(n)&&n.event===e.event&&n.data===e.data}function L(n,e){for(var t in e)void 0===n[t]&&(n[t]=e[t]);return n}function M(n,e){return l(n)&&(n(e),!0)}var V="$";function N(n,e,t,r,o,l,i,a){this.childFlags=n,this.children=e,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function I(n,e,t,r,o,l,i,a){var u=void 0===o?1:o,c=new N(u,r,t,n,i,l,a,e);return 0===u&&q(c,c.children),c}function T(n,e,t){if(4&n)return t;var o=(32768&n?e.render:e).defaultHooks;if(r(o))return t;if(r(t))return o;return L(t,o)}function B(e,t,o){var l=(32768&e?t.render:t).defaultProps;if(r(l))return o;if(r(o))return n({},l);return L(o,l)}function E(n,e){var t;if(12&n)return n;if(null!=(t=e.prototype)&&t.render)return 4;if(e.render)return 32776;return 8}function O(n,e,t,r,o){var i=new N(1,null,null,n=E(n,e),r,B(n,e,t),T(n,e,o),e);return l(W.createVNode)&&W.createVNode(i),i}function j(n,e){return new N(1,r(n)||!0===n||!1===n?"":n,null,16,e,null,null,null)}function R(n,e,t){var r=I(8192,8192,null,n,e,null,t,null);switch(r.childFlags){case 1:r.children=_(),r.childFlags=2;break;case 16:r.children=[j(n)],r.childFlags=4}return r}function H(n){var e=n.children,t=n.childFlags;return R(2===t?X(e):e.map(X),t,n.key)}function X(n){var e=-16385&n.flags,t=n.props;if(14&e&&!a(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&e))return new N(n.childFlags,n.children,n.className,e,n.key,t,n.ref,n.type);return H(n)}function _(){return j("",null)}function K(n,r,l,u){for(var c=n.length;l<c;l++){var f=n[l];if(!o(f)){var s=u+V+l;if(e(f))K(f,r,0,s);else{if(t(f))f=j(f,s);else{var d=f.key,p=i(d)&&d[0]===V;(81920&f.flags||p)&&(f=X(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):a(d)?f.key=s:f.key=u+d}r.push(f)}}}}function q(n,r){var l,u=1;if(o(r))l=r;else if(t(r))u=16,l=r;else if(e(r)){for(var c=r.length,f=0;f<c;++f){var s=r[f];if(o(s)||e(s)){l=l||r.slice(0,f),K(r,l,f,"");break}if(t(s))(l=l||r.slice(0,f)).push(j(s,V+f));else{var d=s.key,p=(81920&s.flags)>0,v=a(d),h=i(d)&&d[0]===V;p||v||h?(l=l||r.slice(0,f),(p||h)&&(s=X(s)),(v||h)&&(s.key=V+f),l.push(s)):l&&l.push(s),s.flags|=65536}}u=0===(l=l||r).length?1:8}else(l=r).flags|=65536,81920&r.flags&&(l=X(r)),u=2;return n.children=l,n.childFlags=u,n}function z(n){if(o(n)||t(n))return j(n,null);if(e(n))return R(n,0,null);return 16384&n.flags?X(n):n}var G="http://www.w3.org/1999/xlink",J="http://www.w3.org/XML/1998/namespace",Q={"xlink:actuate":G,"xlink:arcrole":G,"xlink:href":G,"xlink:role":G,"xlink:show":G,"xlink:title":G,"xlink:type":G,"xml:base":J,"xml:lang":J,"xml:space":J};function Y(n){return{onClick:n,onDblClick:n,onFocusIn:n,onFocusOut:n,onKeyDown:n,onKeyPress:n,onKeyUp:n,onMouseDown:n,onMouseMove:n,onMouseUp:n,onTouchEnd:n,onTouchMove:n,onTouchStart:n}}var Z=Y(0),nn=Y(null),en=Y(!0);function tn(n,e){var t=e.$EV;return t||(t=e.$EV=Y(null)),t[n]||1===++Z[n]&&(nn[n]=pn(n)),t}function rn(n,e){var t=e.$EV;null!=t&&t[n]&&(0===--Z[n]&&(document.removeEventListener(d(n),nn[n]),nn[n]=null),t[n]=null)}function on(n,e,t,r){if(l(t))tn(n,r)[n]=t;else if(c(t)){if(U(e,t))return;tn(n,r)[n]=t}else rn(n,r)}function ln(n){return l(n.composedPath)?n.composedPath()[0]:n.target}function an(n,e,t,o){var l=ln(n);do{if(e&&l.disabled)return;var i=l.$EV;if(!r(i)){var u=i[t];if(u&&(o.dom=l,u.event?u.event(u.data,n):u(n),n.cancelBubble))return}l=l.parentNode}while(!a(l))}function un(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function cn(){return this.defaultPrevented}function fn(){return this.cancelBubble}function sn(n){var e={dom:document};return n.isDefaultPrevented=cn,n.isPropagationStopped=fn,n.stopPropagation=un,Object.defineProperty(n,"currentTarget",{configurable:!0,get:function(){return e.dom}}),e}function dn(n){var e="onClick"===n||"onDblClick"===n;return function(t){an(t,e,n,sn(t))}}function pn(n){var e=dn(n);return document.addEventListener(d(n),e),e}function vn(n,e){var t=document.createElement("i");return t.innerHTML=e,t.innerHTML===n.innerHTML}function hn(n,e,t){var r=n[e];if(r)r.event?r.event(r.data,t):r(t);else{var o=e.toLowerCase();l(n[o])&&n[o](t)}}function mn(n,e){var t=function(t){var o,a=this.$V;if(r(a))return;var u=null!=(o=a.props)?o:f,c=a.dom;if(i(n))hn(u,n,t);else for(var s=0;s<n.length;++s)hn(u,n[s],t);if(l(e)){var d,p=this.$V,v=null!=(d=p.props)?d:f;e(v,c,!1,p)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function gn(n,e,t){var r="$"+e,o=n[r];if(o){if(o[1].wrapped)return;n.removeEventListener(o[0],o[1]),n[r]=null}l(t)&&(n.addEventListener(e,t),n[r]=[e,t])}function bn(n){return"checkbox"===n||"radio"===n}var yn=mn("onInput",$n),kn=mn(["onClick","onChange"],$n);function Cn(n){n.stopPropagation()}function wn(n,e){bn(e.type)?(gn(n,"change",kn),gn(n,"click",Cn)):gn(n,"input",yn)}function $n(n,e){var t=n.type,o=n.value,l=n.checked,i=n.multiple,a=n.defaultValue,u=!r(o);null!=t&&t!==e.type&&e.setAttribute("type",t),r(i)||i===e.multiple||(e.multiple=i),r(a)||u||(e.defaultValue=a+""),bn(t)?(u&&(e.value=o),r(l)||(e.checked=l)):u&&e.value!==o?(e.defaultValue=o,e.value=o):r(l)||(e.checked=l)}function Dn(n,e){if("option"===n.type)Fn(n,e);else{var t=n.children,r=n.flags;if(0!==(4&r))Dn(t.$LI,e);else if(0!==(8&r))Dn(t,e);else if(2===n.childFlags)Dn(t,e);else if(0!==(12&n.childFlags))for(var o=0,l=t.length;o<l;++o)Dn(t[o],e)}}function Fn(n,t){var o,l=null!=(o=n.props)?o:f,i=l.value,a=n.dom;a.value=i,i===t||e(t)&&t.includes(i)?a.selected=!0:r(t)&&r(l.selected)||(a.selected=Boolean(l.selected))}Cn.wrapped=!0;var An=mn("onChange",Sn);function xn(n){gn(n,"change",An)}function Sn(n,e,t,o){var l=Boolean(n.multiple);r(n.multiple)||l===e.multiple||(e.multiple=l);var i=n.selectedIndex;if(-1===i&&(e.selectedIndex=-1),1!==o.childFlags){var a=n.value;"number"===typeof i&&i>-1&&!r(e.options[i])&&(a=e.options[i].value),t&&r(a)&&(a=n.defaultValue),Dn(o,a)}}var Wn,Pn,Un=mn("onInput",Vn),Ln=mn("onChange");function Mn(n,e){gn(n,"input",Un),l(e.onChange)&&gn(n,"change",Ln)}function Vn(n,e,t){var o=n.value,l=e.value;if(r(o)){if(t){var i=n.defaultValue;r(i)||i===l||(e.defaultValue=i,e.value=i)}}else l!==o&&(e.defaultValue=o,e.value=o)}function Nn(n,e,t,r,o,l){0!==(64&n)?$n(r,t):0!==(256&n)?Sn(r,t,o,e):0!==(128&n)&&Vn(r,t,o),l&&(t.$V=e)}function In(n,e,t){0!==(64&n)?wn(e,t):0!==(256&n)?xn(e):0!==(128&n)&&Mn(e,t)}function Tn(n){return bn(n.type)?!r(n.checked):!r(n.value)}function Bn(n){r(n)||!M(n,null)&&n.current&&(n.current=null)}function En(n,e,t){r(n)||!l(n)&&void 0===n.current||t.push((function(){M(n,e)||void 0===n.current||(n.current=e)}))}function On(n,e,t){jn(n,t),F(n,e,t)}function jn(n,e){var t,o=n.flags,i=n.children;if(0!==(481&o)){t=n.ref;var u=n.props;Bn(t);var c=n.childFlags;if(!a(u))for(var d=Object.keys(u),p=0,v=d.length;p<v;p++){var h=d[p];en[h]&&rn(h,n.dom)}12&c?Rn(i,e):2===c&&jn(i,e)}else if(i)if(4&o){l(i.componentWillUnmount)&&i.componentWillUnmount();var m=e;l(i.componentWillDisappear)&&(m=new s,Kn(e,i,i.$LI.dom,o,void 0)),Bn(n.ref),i.$UN=!0,jn(i.$LI,m)}else if(8&o){var g=e;if(!r(t=n.ref)){var b=null;l(t.onComponentWillUnmount)&&(b=k(n,!0),t.onComponentWillUnmount(b,n.props||f)),l(t.onComponentWillDisappear)&&(g=new s,Kn(e,t,b=b||k(n,!0),o,n.props))}jn(i,g)}else 1024&o?On(i,n.ref,e):8192&o&&12&n.childFlags&&Rn(i,e)}function Rn(n,e){for(var t=0,r=n.length;t<r;++t)jn(n[t],e)}function Hn(n,e){return function(){if(e)for(var t=0;t<n.length;t++)$(n[t],e,!1)}}function Xn(n,e,t){t.componentWillDisappear.length>0?C(t.componentWillDisappear,Hn(e,n)):n.textContent=""}function _n(n,e,t,r){Rn(t,r),8192&e.flags?F(e,n,r):Xn(n,t,r)}function Kn(n,e,t,r,o){n.componentWillDisappear.push((function(n){4&r?e.componentWillDisappear(t,n):8&r&&e.onComponentWillDisappear(t,o,n)}))}function qn(n){var e=n.event;return function(t){e(n.data,t)}}function zn(n,e,t,r){if(c(t)){if(U(e,t))return;t=qn(t)}gn(r,d(n),t)}function Gn(n,e,t){if(r(e))return void t.removeAttribute("style");var o,l,a=t.style;if(i(e))return void(a.cssText=e);if(r(n)||i(n))for(o in e)l=e[o],a.setProperty(o,l);else{for(o in e)(l=e[o])!==n[o]&&a.setProperty(o,l);for(o in n)r(e[o])&&a.removeProperty(o)}}function Jn(n,e,t,o,l){var i=(null==n?void 0:n.__html)||"",u=(null==e?void 0:e.__html)||"";i!==u&&(r(u)||vn(o,u)||(a(t)||(12&t.childFlags?Rn(t.children,l):2===t.childFlags&&jn(t.children,l),t.children=null,t.childFlags=1),o.innerHTML=u))}function Qn(n,e,t){var o=r(n)?"":n;e[t]!==o&&(e[t]=o)}function Yn(n,e,t,o,l,i,a,u){switch(n){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":o.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":o[n]=!!t;break;case"defaultChecked":case"value":case"volume":if(i&&"value"===n)break;Qn(t,o,n);break;case"style":Gn(e,t,o);break;case"dangerouslySetInnerHTML":Jn(e,t,a,o,u);break;default:en[n]?on(n,e,t,o):111===n.charCodeAt(0)&&110===n.charCodeAt(1)?zn(n,e,t,o):r(t)?o.removeAttribute(n):l&&Q[n]?o.setAttributeNS(Q[n],n,t):o.setAttribute(n,t)}}function Zn(n,e,t,r,o,l){var i=!1,a=(448&e)>0;for(var u in a&&(i=Tn(t))&&In(e,r,t),t)Yn(u,null,t[u],r,o,i,null,l);a&&Nn(e,n,r,t,!0,i)}function ne(e,t,r){var o=z(e.render(t,e.state,r)),i=r;return l(e.getChildContext)&&(i=n({},r,e.getChildContext())),e.$CX=i,o}function ee(n,e,t,r,o,i){var u=new e(t,r),c=u.$N=Boolean(e.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=o,u.$L=i,n.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=S(u,t,u.state);else if(l(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!a(s)){var d=u.state;if(a(d))u.state=s;else for(var p in s)d[p]=s[p];u.$PS=null}u.$BR=!1}return u.$LI=ne(u,t,r),u}function te(n,e){var t=n.props||f;return 32768&n.flags?n.type.render(t,n.ref,e):n.type(t,e)}function re(n,e,t,r,o,l,i){var a=n.flags|=16384;0!==(481&a)?ae(n,e,t,r,o,l,i):0!==(4&a)?ce(n,e,t,r,o,l,i):8&a?fe(n,e,t,r,o,l,i):16&a?ie(n,e,o):8192&a?le(n,t,e,r,o,l,i):1024&a&&oe(n,t,e,o,l,i)}function oe(n,e,t,r,o,l){re(n.children,n.ref,e,!1,null,o,l);var i=_();ie(i,t,r),n.dom=i.dom}function le(n,e,t,r,o,l,i){var a=n.children,u=n.childFlags;12&u&&0===a.length&&(u=n.childFlags=2,a=n.children=_()),2===u?re(a,t,e,r,o,l,i):ue(a,t,e,r,o,l,i)}function ie(n,e,t){var r=n.dom=document.createTextNode(n.children);a(e)||v(e,r,t)}function ae(n,e,t,o,l,i,u){var c=n.flags,f=n.props,s=n.className,d=n.childFlags,p=n.dom=h(n.type,o=o||(32&c)>0),m=n.children;if(r(s)||""===s||(o?p.setAttribute("class",s):p.className=s),16===d)P(p,m);else if(1!==d){var g=o&&"foreignObject"!==n.type;2===d?(16384&m.flags&&(n.children=m=X(m)),re(m,p,t,g,null,i,u)):8!==d&&4!==d||ue(m,p,t,g,null,i,u)}a(e)||v(e,p,l),a(f)||Zn(n,c,f,p,o,u),En(n.ref,p,i)}function ue(n,e,t,r,o,l,i){for(var a=0;a<n.length;++a){var u=n[a];16384&u.flags&&(n[a]=u=X(u)),re(u,e,t,r,o,l,i)}}function ce(n,e,t,r,o,i,a){var u=ee(n,n.type,n.props||f,t,r,i),c=a;l(u.componentDidAppear)&&(c=new s),re(u.$LI,e,u.$CX,r,o,i,c),ve(n.ref,u,i,a)}function fe(n,e,t,o,i,a,u){var c=n.ref,f=u;!r(c)&&l(c.onComponentDidAppear)&&(f=new s),re(n.children=z(te(n,t)),e,t,o,i,a,f),me(n,a,u)}function se(n){return function(){n.componentDidMount()}}function de(n,e,t){n.componentDidAppear.push((function(){e.componentDidAppear(t)}))}function pe(n,e,t,r){n.componentDidAppear.push((function(){e.onComponentDidAppear(t,r)}))}function ve(n,e,t,r){En(n,e,t),l(e.componentDidMount)&&t.push(se(e)),l(e.componentDidAppear)&&de(r,e,e.$LI.dom)}function he(n,e){return function(){n.onComponentDidMount(k(e,!0),e.props||f)}}function me(n,e,t){var o=n.ref;r(o)||(M(o.onComponentWillMount,n.props||f),l(o.onComponentDidMount)&&e.push(he(o,n)),l(o.onComponentDidAppear)&&pe(t,o,k(n,!0),n.props))}function ge(n,e,t,r,o,l,i){jn(n,i),0!==(e.flags&n.flags&1521)?(re(e,null,r,o,null,l,i),m(t,e.dom,n.dom)):(re(e,t,r,o,k(n,!0),l,i),F(n,t,i))}function be(n,e,t,r,o,l,i,a){var u=e.flags|=16384;n.flags!==u||n.type!==e.type||n.key!==e.key||2048&u?16384&n.flags?ge(n,e,t,r,o,i,a):re(e,t,r,o,l,i,a):481&u?$e(n,e,r,o,i,a):4&u?We(n,e,t,r,o,l,i,a):8&u?Pe(n,e,t,r,o,l,i,a):16&u?Ue(n,e):8192&u?Ce(n,e,t,r,o,i,a):we(n,e,r,i,a)}function ye(n,e,t){n!==e&&(""!==n?t.firstChild.nodeValue=e:P(t,e))}function ke(n,e){n.textContent!==e&&(n.textContent=e)}function Ce(n,e,t,r,o,l,i){var a=n.children,u=e.children,c=n.childFlags,f=e.childFlags,s=null;12&f&&0===u.length&&(f=e.childFlags=2,u=e.children=_());var d=0!==(2&f);if(12&c){var p=a.length;(8&c&&8&f||d||!d&&u.length>p)&&(s=k(a[p-1],!1).nextSibling)}Ae(c,f,a,u,t,r,o,s,n,l,i)}function we(n,e,t,r,l){var i=n.ref,a=e.ref,u=e.children;if(Ae(n.childFlags,e.childFlags,n.children,u,i,t,!1,null,n,r,l),e.dom=n.dom,i!==a&&!o(u)){var c=u.dom;g(i,c),p(a,c)}}function $e(n,e,t,o,l,i){var a,u=e.dom=n.dom,c=n.props,s=e.props,d=e.flags,p=!1,v=!1;if(o=o||(32&d)>0,c!==s){var h=c||f;if((a=s||f)!==f)for(var m in(p=(448&d)>0)&&(v=Tn(a)),a){var g=h[m],b=a[m];g!==b&&Yn(m,g,b,u,o,v,n,i)}if(h!==f)for(var y in h)r(a[y])&&!r(h[y])&&Yn(y,h[y],null,u,o,v,n,i)}var k=e.children,C=e.className;n.className!==C&&(r(C)?u.removeAttribute("class"):o?u.setAttribute("class",C):u.className=C),4096&d?ke(u,k):Ae(n.childFlags,e.childFlags,n.children,k,u,t,o&&"foreignObject"!==e.type,null,n,l,i),p&&Nn(d,e,u,a,!1,v);var w=e.ref,$=n.ref;$!==w&&(Bn($),En(w,u,l))}function De(n,e,t,r,o,l,i){jn(n,i),ue(e,t,r,o,k(n,!0),l,i),F(n,t,i)}function Fe(n,e,t,r,o,l,i,a,u,c,f){var s=0|n.length,d=0|e.length;0===s?d>0&&ue(e,t,r,o,l,i,a):0===d?_n(t,u,n,a):8===c&&8===f?Me(n,e,t,r,o,s,d,l,u,i,a):Le(n,e,t,r,o,s,d,l,i,a)}function Ae(n,e,t,r,o,l,i,a,u,c,f){switch(n){case 2:switch(e){case 2:be(t,r,o,l,i,a,c,f);break;case 1:On(t,o,f);break;case 16:jn(t,f),P(o,r);break;default:De(t,r,o,l,i,c,f)}break;case 1:switch(e){case 2:re(r,o,l,i,a,c,f);break;case 1:break;case 16:P(o,r);break;default:ue(r,o,l,i,a,c,f)}break;case 16:switch(e){case 16:ye(t,r,o);break;case 2:Xn(o,t,f),re(r,o,l,i,a,c,f);break;case 1:Xn(o,t,f);break;default:Xn(o,t,f),ue(r,o,l,i,a,c,f)}break;default:switch(e){case 16:Rn(t,f),P(o,r);break;case 2:_n(o,u,t,f),re(r,o,l,i,a,c,f);break;case 1:_n(o,u,t,f);break;default:Fe(t,r,o,l,i,a,c,f,u,e,n)}}}function xe(n,e,t,r,o){o.push((function(){n.componentDidUpdate(e,t,r)}))}function Se(e,t,r,o,i,a,u,c,f,s){var d=e.state,p=e.props,v=Boolean(e.$N),h=l(e.shouldComponentUpdate);if(v&&(t=S(e,r,t!==d?n({},d,t):t)),!h||h&&e.shouldComponentUpdate(r,t,i)){!v&&l(e.componentWillUpdate)&&e.componentWillUpdate(r,t,i),e.props=r,e.state=t,e.context=i;var m=null,g=ne(e,r,i);v&&l(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(p,d)),be(e.$LI,g,o,e.$CX,a,c,f,s),e.$LI=g,l(e.componentDidUpdate)&&xe(e,p,d,m,f)}else e.props=r,e.state=t,e.context=i}function We(e,t,r,o,i,u,c,s){var d=t.children=e.children;if(a(d))return;d.$L=c;var p=t.props||f,v=t.ref,h=e.ref,m=d.state;if(!d.$N){if(l(d.componentWillReceiveProps)){if(d.$BR=!0,d.componentWillReceiveProps(p,o),d.$UN)return;d.$BR=!1}a(d.$PS)||(m=n({},m,d.$PS),d.$PS=null)}Se(d,m,p,r,o,i,0,u,c,s),h!==v&&(Bn(h),En(v,d,c))}function Pe(n,e,t,o,i,a,u,c){var s=!0,d=e.props||f,p=e.ref,v=n.props,h=!r(p),m=n.children;if(h&&l(p.onComponentShouldUpdate)&&(s=p.onComponentShouldUpdate(v,d)),s){h&&l(p.onComponentWillUpdate)&&p.onComponentWillUpdate(v,d);var g=z(te(e,o));be(m,g,t,o,i,a,u,c),e.children=g,h&&l(p.onComponentDidUpdate)&&p.onComponentDidUpdate(v,d)}else e.children=m}function Ue(n,e){var t=e.children,r=e.dom=n.dom;t!==n.children&&(r.nodeValue=t)}function Le(n,e,t,r,o,l,i,a,u,c){for(var f,s,d=l>i?i:l,p=0;p<d;++p)f=e[p],s=n[p],16384&f.flags&&(f=e[p]=X(f)),be(s,f,t,r,o,a,u,c),n[p]=f;if(l<i)for(p=d;p<i;++p)16384&(f=e[p]).flags&&(f=e[p]=X(f)),re(f,t,r,o,a,u,c);else if(l>i)for(p=d;p<l;++p)On(n[p],t,c)}function Me(n,e,t,r,o,l,i,a,u,c,f){var s,d,p=l-1,v=i-1,h=0,m=n[h],g=e[h];n:{for(;m.key===g.key;){if(16384&g.flags&&(e[h]=g=X(g)),be(m,g,t,r,o,a,c,f),n[h]=g,++h>p||h>v)break n;m=n[h],g=e[h]}for(m=n[p],g=e[v];m.key===g.key;){if(16384&g.flags&&(e[v]=g=X(g)),be(m,g,t,r,o,a,c,f),n[p]=g,v--,h>--p||h>v)break n;m=n[p],g=e[v]}}if(h>p){if(h<=v)for(d=(s=v+1)<i?k(e[s],!0):a;h<=v;)16384&(g=e[h]).flags&&(e[h]=g=X(g)),++h,re(g,t,r,o,d,c,f)}else if(h>v)for(;h<=p;)On(n[h++],t,f);else Ve(n,e,r,l,i,p,v,h,t,o,a,u,c,f)}function Ve(n,e,t,r,o,l,i,a,u,c,f,s,d,p){var v,h,m=0,g=0,b=a,y=a,C=l-a+1,$=i-a+1,D=new Int32Array($+1),F=C===r,A=!1,S=0,W=0;if(o<4||(C|$)<32)for(g=b;g<=l;++g)if(v=n[g],W<$){for(a=y;a<=i;a++)if(h=e[a],v.key===h.key){if(D[a-y]=g+1,F)for(F=!1;b<g;)On(n[b++],u,p);S>a?A=!0:S=a,16384&h.flags&&(e[a]=h=X(h)),be(v,h,u,t,c,f,d,p),++W;break}!F&&a>i&&On(v,u,p)}else F||On(v,u,p);else{var P={};for(g=y;g<=i;++g)P[e[g].key]=g;for(g=b;g<=l;++g)if(v=n[g],W<$)if(void 0!==(a=P[v.key])){if(F)for(F=!1;g>b;)On(n[b++],u,p);D[a-y]=g+1,S>a?A=!0:S=a,16384&(h=e[a]).flags&&(e[a]=h=X(h)),be(v,h,u,t,c,f,d,p),++W}else F||On(v,u,p);else F||On(v,u,p)}if(F)_n(u,s,n,p),ue(e,u,t,c,f,d,p);else if(A){var U=Ie(D);for(a=U.length-1,g=$-1;g>=0;g--)0===D[g]?(16384&(h=e[S=g+y]).flags&&(e[S]=h=X(h)),re(h,u,t,c,(m=S+1)<o?k(e[m],!0):f,d,p)):a<0||g!==U[a]?x(s,h=e[S=g+y],u,(m=S+1)<o?k(e[m],!0):f,p):a--;p.componentWillMove.length>0&&w(p.componentWillMove)}else if(W!==$)for(g=$-1;g>=0;g--)0===D[g]&&(16384&(h=e[S=g+y]).flags&&(e[S]=h=X(h)),re(h,u,t,c,(m=S+1)<o?k(e[m],!0):f,d,p))}var Ne=0;function Ie(n){var e=0,t=0,r=0,o=0,l=0,i=0,a=0,u=n.length;for(u>Ne&&(Ne=u,Wn=new Int32Array(u),Pn=new Int32Array(u));t<u;++t)if(0!==(e=n[t])){if(n[r=Wn[o]]<e){Pn[t]=r,Wn[++o]=t;continue}for(l=0,i=o;l<i;)n[Wn[a=l+i>>1]]<e?l=a+1:i=a;e<n[Wn[l]]&&(l>0&&(Pn[t]=Wn[l-1]),Wn[l]=t)}l=o+1;var c=new Int32Array(l);for(i=Wn[l-1];l-- >0;)c[l]=i,i=Pn[i],Wn[l]=0;return c}function Te(n,e,t,o){var i=[],a=new s,u=e.$V;r(u)?r(n)||(0!==(16384&n.flags)&&(n=X(n)),re(n,e,o,!1,null,i,a),e.$V=n,u=n):r(n)?(On(u,e,a),e.$V=null):(16384&n.flags&&(n=X(n)),be(u,n,e,o,!1,null,i,a),u=e.$V=n),b(i),C(a.componentDidAppear),l(t)&&t()}function Be(n,e,t,r){void 0===t&&(t=null),void 0===r&&(r=f),Te(n,e,t,r)}function Ee(n){return I(1,"li","TreeLeaf",n.children,0,null,null,null)}function Oe(n,e){return n!==e}function je(n){for(var e=n.data,t=e.children.length,r=new Array(t),o=0;o<t;o++){var l=e.children[o],i=l.id;l.container?r[o]=O(2,je,{data:l},i,{onComponentShouldUpdate:Oe}):r[o]=O(2,Ee,{children:i},i,{onComponentShouldUpdate:Oe})}return I(1,"ul","TreeNode",r,0,null,null,null)}function Re(n){return I(1,"div","Tree",O(2,je,{data:n.root},null,{onComponentShouldUpdate:Oe}),2,null,null,null)}function He(n){var e=n.data,t=e.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return I(1,"div","AnimBox",null,1,{"data-id":e.id,style:r},null,null)}function Xe(n){for(var e=n.items,t=e.length,r=new Array(t),o=0;o<t;o++){var l=e[o];r[o]=O(2,He,{data:l},l.id,{onComponentShouldUpdate:Oe})}return I(1,"div","Anim",r,0,null,null,null)}function _e(n,e){console.log("Clicked",n),e.stopPropagation()}function Ke(n){var e=n.children;return I(1,"td","TableCell",[null,!1,[e]],0,{onClick:u(e,_e)},null,null)}function qe(n){var e=n.data,t="TableRow";e.active&&(t="TableRow active");var r=e.props,o=r.length+1,l=new Array(o);l[0]=O(2,Ke,{children:"#"+e.id},null,{onComponentShouldUpdate:Oe});for(var i=1;i<o;i++)l[i]=O(2,Ke,{children:r[i-1]},null,{onComponentShouldUpdate:Oe});return I(1,"tr",t,[null,l,!1],0,{"data-id":e.id},null,null)}function ze(n){for(var e=n.items,t=e.length,r=new Array(t),o=0;o<t;o++){var l=e[o];r[o]=O(2,qe,{data:l,children:l},l.id,{onComponentShouldUpdate:Oe})}return I(1,"table","Table",[[],r,[[]]],0,null,null,null)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),Promise.resolve().then.bind(Promise.resolve()),uibench.init("Inferno (normalization test)","9.0.0"),document.addEventListener("DOMContentLoaded",(function(n){var e=document.querySelector("#App");uibench.run((function(n){var t,r,o;Be(("table"===(o=(t=n).location)?r=ze(t.table):"anim"===o?r=Xe(t.anim):"tree"===o&&(r=Re(t.tree)),I(1,"div","Main",r,0,null,null,null)),e)}),(function(n){Be(I(1,"pre",null,JSON.stringify(n,null," "),0,null,null,null),e)}))}))}();
