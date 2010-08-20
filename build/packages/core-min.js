/*
Copyright 2010, KISSY UI Library v1.1.2
MIT Licensed
build time: Aug 20 15:36
*/
KISSY.add("ua",function(b){var j=navigator.userAgent,l="",n="",f,h={webkit:0,trident:0,gecko:0,presto:0,chrome:0,safari:0,firefox:0,ie:0,opera:0},g=function(c){var o=0;return parseFloat(c.replace(/\./g,function(){return o++===0?".":""}))};if((f=j.match(/AppleWebKit\/([\d.]*)/))&&f[1]){h[l="webkit"]=g(f[1]);if((f=j.match(/Chrome\/([\d.]*)/))&&f[1])h[n="chrome"]=g(f[1]);else if((f=j.match(/\/([\d.]*) Safari/))&&f[1])h[n="safari"]=g(f[1]);if(/ Mobile\//.test(j))h.mobile="apple";else if(f=j.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))h.mobile=
f[0].toLowerCase()}else if((f=j.match(/Presto\/([\d.]*)/))&&f[1]){h[l="presto"]=g(f[1]);if((f=j.match(/Opera\/([\d.]*)/))&&f[1]){h[n="opera"]=g(f[1]);if((f=j.match(/Opera\/.* Version\/([\d.]*)/))&&f[1])h[n]=g(f[1]);if((f=j.match(/Opera Mini[^;]*/))&&f)h.mobile=f[0].toLowerCase();else if((f=j.match(/Opera Mobi[^;]*/))&&f)h.mobile=f[0]}}else if((f=j.match(/MSIE\s([^;]*)/))&&f[1]){h[l="trident"]=0.1;h[n="ie"]=g(f[1]);if((f=j.match(/Trident\/([\d.]*)/))&&f[1])h[l]=g(f[1])}else if(f=j.match(/Gecko/)){h[l=
"gecko"]=0.1;if((f=j.match(/rv:([\d.]*)/))&&f[1])h[l]=g(f[1]);if((f=j.match(/Firefox\/([\d.]*)/))&&f[1])h[n="firefox"]=g(f[1])}h.core=l;h.shell=n;h._numberify=g;b.UA=h});
KISSY.add("ua-extra",function(b){var j=b.UA,l=navigator.userAgent,n,f,h={},g=j._numberify;if(l.match(/360SE/))h[f="se360"]=3;else if(l.match(/Maxthon/)&&(n=window.external)){f="maxthon";try{h[f]=g(n.max_version)}catch(c){h[f]=0.1}}else if(n=l.match(/TencentTraveler\s([\d.]*)/))h[f="tt"]=n[1]?g(n[1]):0.1;else if(l.match(/TheWorld/))h[f="theworld"]=3;else if(n=l.match(/SE\s([\d.]*)/))h[f="sougou"]=n[1]?g(n[1]):0.1;f&&(h.shell=f);b.mix(j,h)});
KISSY.add("dom",function(b,j){function l(n,f){return n&&n.nodeType===f}b.DOM={_isElementNode:function(n){return l(n,1)},_isKSNode:function(n){return b.Node&&l(n,b.Node.TYPE)},_getWin:function(n){return n&&"scrollTo"in n&&n.document?n:l(n,9)?n.defaultView||n.parentWindow:n===j?window:false},_nodeTypeIs:l}});
KISSY.add("selector",function(b,j){function l(a,d){var i,k=[],q,z;d=n(d);if(b.isString(a)){a=b.trim(a);if(y.test(a)){if(a=f(a.slice(1),d))k=[a]}else if(i=e.exec(a)){q=i[1];z=i[2];i=i[3];if(d=q?f(q,d):d)if(i)if(!q||a.indexOf(m)!==-1)k=g(i,z,d);else{if((a=f(q,d))&&w.hasClass(a,i))k=[a]}else if(z)k=h(z,d)}else if(b.ExternalSelector)return b.ExternalSelector(a,d);else c(a)}else if(a&&(a[v]||a[x]))k=a[v]?[a[v]()]:a[x]();else if(a&&(b.isArray(a)||a.item&&!a.nodeType))k=a;else if(a)k=[a];if(k.item)k=b.makeArray(k);
k.each=function(t,u){return b.each(k,t,u)};return k}function n(a){if(a===j)a=o;else if(b.isString(a)&&y.test(a))a=f(a.slice(1),o);else if(a&&a.nodeType!==1&&a.nodeType!==9)a=null;return a}function f(a,d){if(d.nodeType!==9)d=d.ownerDocument;return d.getElementById(a)}function h(a,d){return d.getElementsByTagName(a)}function g(a,d,i){i=a=i.getElementsByClassName(a);var k=0,q=0,z=a.length,t;if(d&&d!==r){i=[];for(d=d.toUpperCase();k<z;++k){t=a[k];if(t.tagName===d)i[q++]=t}}return i}function c(a){b.error("Unsupported selector: "+
a)}var o=document,w=b.DOM,m=" ",r="*",v="getDOMNode",x=v+"s",y=/^#[\w-]+$/,e=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/;(function(){var a=o.createElement("div");a.appendChild(o.createComment(""));if(a.getElementsByTagName(r).length>0)h=function(d,i){i=i.getElementsByTagName(d);if(d===r){d=[];for(var k=0,q=0,z;z=i[k++];)if(z.nodeType===1)d[q++]=z;i=d}return i}})();o.getElementsByClassName||(g=o.querySelectorAll?function(a,d,i){return i.querySelectorAll((d?d:"")+"."+a)}:function(a,d,i){d=i.getElementsByTagName(d||
r);i=[];var k=0,q=0,z=d.length,t,u;for(a=m+a+m;k<z;++k){t=d[k];if((u=t.className)&&(m+u+m).indexOf(a)>-1)i[q++]=t}return i});b.query=l;b.get=function(a,d){return l(a,d)[0]||null};b.mix(w,{query:l,get:b.get,filter:function(a,d){var i=l(a),k,q,z,t=[];if(b.isString(d)&&(k=e.exec(d))&&!k[1]){q=k[2];z=k[3];d=function(u){return!(q&&u.tagName!==q.toUpperCase()||z&&!w.hasClass(u,z))}}if(b.isFunction(d))t=b.filter(i,d);else if(d&&b.ExternalSelector)t=b.ExternalSelector._filter(a,d);else c(d);return t},test:function(a,
d){a=l(a);return w.filter(a,d).length===a.length}})});
KISSY.add("dom-class",function(b,j){function l(g,c,o,w){if(!(c=b.trim(c)))return w?false:j;g=b.query(g);var m=0,r=g.length;c=c.split(f);for(var v;m<r;m++){v=g[m];if(n._isElementNode(v)){v=o(v,c,c.length);if(v!==j)return v}}if(w)return false}var n=b.DOM,f=/[\.\s]\s*\.?/,h=/[\n\t]/g;b.mix(n,{hasClass:function(g,c){return l(g,c,function(o,w,m){if(o=o.className){o=" "+o+" ";for(var r=0,v=true;r<m;r++)if(o.indexOf(" "+w[r]+" ")<0){v=false;break}if(v)return true}},true)},addClass:function(g,c){l(g,c,function(o,
w,m){var r=o.className;if(r){var v=" "+r+" ";r=r;for(var x=0;x<m;x++)if(v.indexOf(" "+w[x]+" ")<0)r+=" "+w[x];o.className=b.trim(r)}else o.className=c})},removeClass:function(g,c){l(g,c,function(o,w,m){var r=o.className;if(r)if(m){r=(" "+r+" ").replace(h," ");for(var v=0,x;v<m;v++)for(x=" "+w[v]+" ";r.indexOf(x)>=0;)r=r.replace(x," ");o.className=b.trim(r)}else o.className=""})},replaceClass:function(g,c,o){n.removeClass(g,c);n.addClass(g,o)},toggleClass:function(g,c,o){var w=b.isBoolean(o),m;l(g,
c,function(r,v,x){for(var y=0,e;y<x;y++){e=v[y];m=w?!o:n.hasClass(r,e);n[m?"removeClass":"addClass"](r,e)}})}})});
KISSY.add("dom-attr",function(b,j){function l(e,a){return a&&a.nodeName.toUpperCase()===e.toUpperCase()}var n=b.UA,f=n.ie,h=f&&f<8,g=document.documentElement.textContent!==j?"textContent":"innerText",c=b.DOM,o=c._isElementNode,w=function(e){return c._nodeTypeIs(e,3)},m=/href|src|style/,r=/href|src|colspan|rowspan/,v=/\r/g,x=/radio|checkbox/,y={readonly:"readOnly"};h&&b.mix(y,{"for":"htmlFor","class":"className"});b.mix(c,{attr:function(e,a,d){if(b.isPlainObject(a))for(var i in a)c.attr(e,i,a[i]);
else if(a=b.trim(a)){a=a.toLowerCase();a=y[a]||a;if(d===j){e=b.get(e);if(!o(e))return j;var k;m.test(a)||(k=e[a]);if(k===j)k=e.getAttribute(a);if(h)if(r.test(a))k=e.getAttribute(a,2);else if(a==="style")k=e.style.cssText;return k===null?j:k}b.each(b.query(e),function(q){if(o(q))if(a==="style")q.style.cssText=d;else{if(a==="checked")q[a]=!!d;q.setAttribute(a,""+d)}})}},removeAttr:function(e,a){b.each(b.query(e),function(d){if(o(d)){c.attr(d,a,"");d.removeAttribute(a)}})},val:function(e,a){if(a===j){var d=
b.get(e);if(!o(d))return j;if(l("option",d))return(d.attributes.value||{}).specified?d.value:d.text;if(l("select",d)){var i=d.selectedIndex;e=d.options;if(i<0)return null;else if(d.type==="select-one")return c.val(e[i]);d=[];for(var k=0,q=e.length;k<q;++k)e[k].selected&&d.push(c.val(e[k]));return d}if(n.webkit&&x.test(d.type))return d.getAttribute("value")===null?"on":d.value;return(d.value||"").replace(v,"")}b.each(b.query(e),function(z){if(l("select",z)){if(b.isNumber(a))a+="";var t=b.makeArray(a),
u=z.options,A;k=0;for(q=u.length;k<q;++k){A=u[k];A.selected=b.inArray(c.val(A),t)}if(!t.length)z.selectedIndex=-1}else if(o(z))z.value=a})},text:function(e,a){if(a===j){e=b.get(e);if(o(e))return e[g]||"";else if(w(e))return e.nodeValue}else b.each(b.query(e),function(d){if(o(d))d[g]=a;else if(w(d))d.nodeValue=a})}})});
KISSY.add("dom-style",function(b,j){function l(a,d){var i=b.get(a),k=d===o?i.offsetWidth:i.offsetHeight;b.each(d===o?["Left","Right"]:["Top","Bottom"],function(q){k-=parseFloat(f._getComputedStyle(i,"padding"+q))||0;k-=parseFloat(f._getComputedStyle(i,"border"+q+"Width"))||0});return k}function n(a,d,i){var k=i;if(i===w&&r.test(d)){k=0;if(f.css(a,"position")==="absolute"){i=a[d==="left"?"offsetLeft":"offsetTop"];if(h.ie===8||h.opera)i-=m(f.css(a.offsetParent,"border-"+d+"-width"))||0;k=i-(m(f.css(a,
"margin-"+d))||0)}}return k}var f=b.DOM,h=b.UA,g=document,c=g.documentElement,o="width",w="auto",m=parseInt,r=/^left|top$/,v=/width|height|top|left|right|bottom|margin|padding/i,x=/-([a-z])/ig,y=function(a,d){return d.toUpperCase()},e={};b.mix(f,{_CUSTOM_STYLES:e,_getComputedStyle:function(a,d){var i="",k=a.ownerDocument;if(a.style)i=k.defaultView.getComputedStyle(a,null)[d];return i},css:function(a,d,i){if(b.isPlainObject(d))for(var k in d)f.css(a,k,d[k]);else{if(d.indexOf("-")>0)d=d.replace(x,y);
d=e[d]||d;if(i===j){a=b.get(a);k="";if(a&&a.style){k=d.get?d.get(a):a.style[d];if(k===""&&!d.get)k=n(a,d,f._getComputedStyle(a,d))}return k===j?"":k}else{if(i===null||i==="")i="";else if(!isNaN(new Number(i))&&v.test(d))i+="px";(d===o||d==="height")&&parseFloat(i)<0||b.each(b.query(a),function(q){if(q&&q.style){d.set?d.set(q,i):(q.style[d]=i);if(i==="")q.style.cssText||q.removeAttribute("style")}})}}},width:function(a,d){if(d===j)return l(a,o);else f.css(a,o,d)},height:function(a,d){if(d===j)return l(a,
"height");else f.css(a,"height",d)},addStyleSheet:function(a,d){var i;if(d)i=b.get(d);i||(i=f.create("<style>",{id:d}));b.get("head").appendChild(i);if(i.styleSheet)i.styleSheet.cssText=a;else i.appendChild(g.createTextNode(a))}});if(c.style.cssFloat!==j)e["float"]="cssFloat";else if(c.style.styleFloat!==j)e["float"]="styleFloat"});
KISSY.add("dom-style-ie",function(b,j){if(b.UA.ie){var l=b.DOM;b=document;var n=b.documentElement,f=l._CUSTOM_STYLES,h=/^-?\d+(?:px)?$/i,g=/^-?\d/,c=/^width|height$/;try{if(n.style.opacity===j&&n.filters)f.opacity={get:function(w){var m=100;try{m=w.filters["DXImageTransform.Microsoft.Alpha"].opacity}catch(r){try{m=w.filters("alpha").opacity}catch(v){}}return m/100+""},set:function(w,m){w=w.style;w.zoom=1;w.filter="alpha(opacity="+m*100+")"}}}catch(o){}if(!(b.defaultView||{}).getComputedStyle&&n.currentStyle)l._getComputedStyle=
function(w,m){var r=w.style,v=w.currentStyle[m];if(c.test(m))v=l[m](w)+"px";else if(!h.test(v)&&g.test(v)){var x=r.left,y=w.runtimeStyle.left;w.runtimeStyle.left=w.currentStyle.left;r.left=m==="fontSize"?"1em":v||0;v=r.pixelLeft+"px";r.left=x;w.runtimeStyle.left=y}return v}}});
KISSY.add("dom-offset",function(b,j){function l(t){var u=0,A=0,p=m(t[a]);if(t[z]){t=t[z]();u=t[d];A=t[i];if(h.mobile!=="apple"){u+=f[k](p);A+=f[q](p)}}return{left:u,top:A}}function n(t,u){if(f.css(t,y)==="static")t.style[y]=e;var A=l(t),p={},s,B;for(B in u){s=x(f.css(t,B),10)||0;p[B]=s+u[B]-A[B]}f.css(t,p)}var f=b.DOM,h=b.UA,g=window,c=document,o=f._isElementNode,w=f._nodeTypeIs,m=f._getWin,r=c.compatMode==="CSS1Compat",v=Math.max,x=parseInt,y="position",e="relative",a="ownerDocument",d="left",i=
"top",k="scrollLeft",q="scrollTop",z="getBoundingClientRect";b.mix(f,{offset:function(t,u){if(!(t=b.get(t))||!t[a])return null;if(u===j)return l(t);n(t,u)},scrollIntoView:function(t,u,A,p){if((t=b.get(t))&&t[a]){p=p===j?true:!!p;A=A===j?true:!!A;if(!u||u===g)return t.scrollIntoView(A);u=b.get(u);if(w(u,9))u=m(u);var s=u&&"scrollTo"in u&&u.document,B=f.offset(t),C=s?{left:f.scrollLeft(u),top:f.scrollTop(u)}:f.offset(u),D={left:B[d]-C[d],top:B[i]-C[i]};B=s?f.viewportHeight(u):u.clientHeight;C=s?f.viewportWidth(u):
u.clientWidth;var G=f[k](u),E=f[q](u),F=G+C,M=E+B,I=t.offsetHeight;t=t.offsetWidth;var H=D.left+G-(x(f.css(u,"borderLeftWidth"))||0);D=D.top+E-(x(f.css(u,"borderTopWidth"))||0);var N=H+t,J=D+I,K,L;if(I>B||D<E||A)K=D;else if(J>M)K=J-B;if(p)if(t>C||H<G||A)L=H;else if(N>F)L=N-C;if(s){if(K!==j||L!==j)u.scrollTo(L,K)}else{if(K!==j)u[q]=K;if(L!==j)u[k]=L}}}});b.each(["Left","Top"],function(t,u){var A="scroll"+t;f[A]=function(p){var s=0,B=m(p),C;if(B&&(C=B.document))s=B[u?"pageYOffset":"pageXOffset"]||C.documentElement[A]||
C.body[A];else if(o(p=b.get(p)))s=p[A];return s}});b.each(["Width","Height"],function(t){f["doc"+t]=function(u){u=u||c;return v(r?u.documentElement["scroll"+t]:u.body["scroll"+t],f["viewport"+t](u))};f["viewport"+t]=function(u){var A="inner"+t;u=m(u);var p=u.document;return A in u?u[A]:r?p.documentElement["client"+t]:p.body["client"+t]}})});
KISSY.add("dom-traversal",function(b,j){function l(g,c,o,w){if(!(g=b.get(g)))return null;if(c===j)c=1;var m=null,r,v;if(b.isNumber(c)&&c>=0){if(c===0)return g;r=0;v=c;c=function(){return++r===v}}for(;g=g[o];)if(h(g)&&(!c||f.test(g,c))&&(!w||w(g))){m=g;break}return m}function n(g,c,o){var w=[];var m=g=b.get(g);if(g&&o)m=g.parentNode;if(m){o=0;for(m=m.firstChild;m;m=m.nextSibling)if(h(m)&&m!==g&&(!c||f.test(m,c)))w[o++]=m}return w}var f=b.DOM,h=f._isElementNode;b.mix(f,{parent:function(g,c){return l(g,
c,"parentNode",function(o){return o.nodeType!=11})},next:function(g,c){return l(g,c,"nextSibling")},prev:function(g,c){return l(g,c,"previousSibling")},siblings:function(g,c){return n(g,c,true)},children:function(g,c){return n(g,c)},contains:function(g,c){var o=false;if((g=b.get(g))&&(c=b.get(c)))if(g.contains)return g.contains(c);else if(g.compareDocumentPosition)return!!(g.compareDocumentPosition(c)&16);else for(;!o&&(c=c.parentNode);)o=c==g;return o}})});
KISSY.add("dom-create",function(b,j){function l(p,s){v(p)&&b.isPlainObject(s)&&o.attr(p,s);return p}function n(p,s){var B=null,C;if(p&&(p.push||p.item)&&p[0]){s=s||p[0].ownerDocument;B=s.createDocumentFragment();if(p.item)p=b.makeArray(p);s=0;for(C=p.length;s<C;s++)B.appendChild(p[s])}return B}function f(p){var s=p.cloneNode(true);if(w.ie<8)s.innerHTML=p.innerHTML;return s}function h(p,s,B,C){if(B){var D=b.guid("ks-tmp-"),G=new RegExp(a);s+='<span id="'+D+'"></span>';b.available(D,function(){var E=
b.get("head"),F,M,I,H,N,J;for(G.lastIndex=0;F=G.exec(s);)if((I=(M=F[1])?M.match(i):false)&&I[2]){F=c.createElement("script");F.src=I[2];if((H=M.match(k))&&H[2])F.charset=H[2];F.async=true;E.appendChild(F)}else if((J=F[2])&&J.length>0)b.globalEval(J);(N=c.getElementById(D))&&o.remove(N);b.isFunction(C)&&C()});g(p,s)}else{g(p,s);b.isFunction(C)&&C()}}function g(p,s){s=(s+"").replace(a,"");try{p.innerHTML=s}catch(B){for(;p.firstChild;)p.removeChild(p.firstChild);s&&p.appendChild(o.create(s))}}var c=
document,o=b.DOM,w=b.UA,m=w.ie,r=o._nodeTypeIs,v=o._isElementNode,x=o._isKSNode,y=c.createElement("div"),e=/<(\w+)/,a=/<script([^>]*)>([\s\S]*?)<\/script>/ig,d=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,i=/\ssrc=(['"])(.*?)\1/i,k=/\scharset=(['"])(.*?)\1/i;b.mix(o,{create:function(p,s,B){if(r(p,1)||r(p,3))return f(p);if(x(p))return f(p[0]);if(!(p=b.trim(p)))return null;var C=null;C=o._creators;var D,G="div",E;if(D=d.exec(p))C=(B||c).createElement(D[1]);else{if((D=e.exec(p))&&(E=D[1])&&b.isFunction(C[E=E.toLowerCase()]))G=
E;p=C[G](p,B).childNodes;C=p.length===1?p[0].parentNode.removeChild(p[0]):n(p,B||c)}return l(C,s)},_creators:{div:function(p,s){s=s?s.createElement("div"):y;s.innerHTML=p;return s}},html:function(p,s,B,C){if(s===j){p=b.get(p);if(v(p))return p.innerHTML}else b.each(b.query(p),function(D){v(D)&&h(D,s,B,C)})},remove:function(p){b.each(b.query(p),function(s){v(s)&&s.parentNode&&s.parentNode.removeChild(s)})}});if(w.gecko||m){var q=o._creators,z=o.create,t=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,
u={option:"select",td:"tr",tr:"tbody",tbody:"table",col:"colgroup",legend:"fieldset"};for(var A in u)(function(p){q[A]=function(s,B){return z("<"+p+">"+s+"</"+p+">",null,B)}})(u[A]);if(m){q.script=function(p,s){s=s?s.createElement("div"):y;s.innerHTML="-"+p;s.removeChild(s.firstChild);return s};if(m<8)q.tbody=function(p,s){s=z("<table>"+p+"</table>",null,s);var B=s.children.tags("tbody")[0];s.children.length>1&&B&&!t.test(p)&&B.parentNode.removeChild(B);return s}}b.mix(q,{optgroup:q.option,th:q.td,
thead:q.tbody,tfoot:q.tbody,caption:q.tbody,colgroup:q.tbody})}});KISSY.add("dom-insertion",function(b){b.mix(b.DOM,{insertBefore:function(j,l){if((j=b.get(j))&&(l=b.get(l))&&l.parentNode)l.parentNode.insertBefore(j,l);return j},insertAfter:function(j,l){if((j=b.get(j))&&(l=b.get(l))&&l.parentNode)l.nextSibling?l.parentNode.insertBefore(j,l.nextSibling):l.parentNode.appendChild(j);return j}})});
KISSY.add("event",function(b,j){function l(e,a,d,i,k){if(b.isString(a))a=b.query(a);if(b.isArray(a)){b.each(a,function(q){y[e](q,d,i,k)});return true}if((d=b.trim(d))&&d.indexOf(r)>0){b.each(d.split(r),function(q){y[e](a,q,i,k)});return true}}function n(e){return g(e)?e[m]:-1}function f(e,a){if(!g(e))return b.error("Text or comment node is not valid event target.");try{e[m]=a}catch(d){b.error(d)}}function h(e){try{e[m]=j;delete e[m]}catch(a){}}function g(e){return e&&e.nodeType!==3&&e.nodeType!==
8}var c=document,o=c.addEventListener?function(e,a,d,i){e.addEventListener&&e.addEventListener(a,d,!!i)}:function(e,a,d){e.attachEvent&&e.attachEvent("on"+a,d)},w=c.removeEventListener?function(e,a,d,i){e.removeEventListener&&e.removeEventListener(a,d,!!i)}:function(e,a,d){e.detachEvent&&e.detachEvent("on"+a,d)},m="ksEventTargetId",r=" ",v=b.now(),x={},y={EVENT_GUID:m,special:{},add:function(e,a,d,i){if(!l("add",e,a,d,i)){var k=n(e),q,z,t,u,A;if(!(k===-1||!a||!b.isFunction(d))){if(!k){f(e,k=v++);
x[k]={target:e,events:{}}}z=x[k].events;if(!z[a]){q=((k=!e.isCustomEventTarget)||e._supportSpecialEvent)&&y.special[a]||{};t=function(p,s){if(!p||!p.fixed){p=new b.EventObject(e,p,a);b.isPlainObject(s)&&b.mix(p,s)}q.setup&&q.setup(p);return(q.handle||y._handle)(e,p,z[a].listeners)};z[a]={handle:t,listeners:[]};u=q.fix||a;A=q.capture;if(k)o(e,u,t,A);else e._addEvent&&e._addEvent(u,t,A)}z[a].listeners.push({fn:d,scope:i||e})}}},remove:function(e,a,d,i){if(!l("remove",e,a,d,i)){var k=n(e),q,z,t,u,A,
p,s;if(k!==-1)if(k&&(q=x[k]))if(q.target===e){i=i||e;q=q.events||{};if(z=q[a]){t=z.listeners;p=t.length;if(b.isFunction(d)&&p){A=u=0;for(s=[];u<p;++u)if(d!==t[u].fn||i!==t[u].scope)s[A++]=t[u];z.listeners=s;p=s.length}if(d===j||p===0){if(e.isCustomEventTarget)e._addEvent&&e._removeEvent(a,z.handle);else w(e,a,z.handle);delete q[a]}}if(a===j||b.isEmptyObject(q)){for(a in q)y.remove(e,a);delete x[k];h(e)}}}},_handle:function(e,a,d){d=d.slice(0);for(var i,k=0,q=d.length;k<q;++k){i=d[k];i=i.fn.call(i.scope||
e,a);if(i===false&&e.isCustomEventTarget||a.isImmediatePropagationStopped)break}return i},_getCache:function(e){return x[e]},_simpleAdd:o,_simpleRemove:w};y.on=y.add;b.Event=y});
KISSY.add("event-object",function(b,j){function l(h,g,c){this.currentTarget=h;this.originalEvent=g||{};if(g){this.type=g.type;this._fix()}else{this.type=c;this.target=h}this.currentTarget=h;this.fixed=true}var n=document,f="altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" ");b.augment(l,
{_fix:function(){var h=this.originalEvent,g=f.length,c,o=this.currentTarget;for(o=o.nodeType===9?o:o.ownerDocument||n;g;){c=f[--g];this[c]=h[c]}if(!this.target)this.target=this.srcElement||n;if(this.target.nodeType===3)this.target=this.target.parentNode;if(!this.relatedTarget&&this.fromElement)this.relatedTarget=this.fromElement===this.target?this.toElement:this.fromElement;if(this.pageX===j&&this.clientX!==j){h=o.documentElement;g=o.body;this.pageX=this.clientX+(h&&h.scrollLeft||g&&g.scrollLeft||
0)-(h&&h.clientLeft||g&&g.clientLeft||0);this.pageY=this.clientY+(h&&h.scrollTop||g&&g.scrollTop||0)-(h&&h.clientTop||g&&g.clientTop||0)}if(this.which===j)this.which=this.charCode!==j?this.charCode:this.keyCode;if(this.metaKey===j)this.metaKey=this.ctrlKey;if(!this.which&&this.button!==j)this.which=this.button&1?1:this.button&2?3:this.button&4?2:0},preventDefault:function(){var h=this.originalEvent;if(h.preventDefault)h.preventDefault();else h.returnValue=false;this.isDefaultPrevented=true},stopPropagation:function(){var h=
this.originalEvent;if(h.stopPropagation)h.stopPropagation();else h.cancelBubble=true;this.isPropagationStopped=true},stopImmediatePropagation:function(){var h=this.originalEvent;h.stopImmediatePropagation?h.stopImmediatePropagation():this.stopPropagation();this.isImmediatePropagationStopped=true},halt:function(h){h?this.stopImmediatePropagation():this.stopPropagation();this.preventDefault()}});b.EventObject=l});
KISSY.add("event-target",function(b,j){var l=b.Event,n=l.EVENT_GUID;b.EventTarget={isCustomEventTarget:true,fire:function(f,h){if((f=((l._getCache(this[n]||-1)||{}).events||{})[f])&&b.isFunction(f.handle))return f.handle(j,h);return this},on:function(f,h,g){l.add(this,f,h,g);return this},detach:function(f,h,g){l.remove(this,f,h,g);return this}}});
KISSY.add("event-mouseenter",function(b){var j=b.Event;b.UA.ie||b.each([{name:"mouseenter",fix:"mouseover"},{name:"mouseleave",fix:"mouseout"}],function(l){j.special[l.name]={fix:l.fix,setup:function(n){n.type=l.name},handle:function(n,f,h){var g=f.relatedTarget;try{for(;g&&g!==n;)g=g.parentNode;g!==n&&j._handle(n,f,h)}catch(c){}}}})});
KISSY.add("event-focusin",function(b){var j=b.Event;document.addEventListener&&b.each([{name:"focusin",fix:"focus"},{name:"focusout",fix:"blur"}],function(l){j.special[l.name]={fix:l.fix,capture:true,setup:function(n){n.type=l.name}}})});
KISSY.add("node",function(b){function j(f,h,g){var c;if(!(this instanceof j))return new j(f,h,g);if(f){if(n(f,1)||n(f,3))c=f;else if(b.isString(f))c=l.create(f,h,g);this[0]=c}else this.length=0}var l=b.DOM,n=l._nodeTypeIs;j.TYPE="-ks-Node";b.augment(j,{length:1,getDOMNode:function(){return this[0]},nodeType:j.TYPE});b.one=function(f,h){return(f=b.get(f,h))?new j(f):null};b.Node=j});
KISSY.add("nodelist",function(b){function j(f){if(!(this instanceof j))return new j(f);n.push.apply(this,f||[])}var l=b.DOM,n=Array.prototype;b.mix(j.prototype,{length:0,item:function(f){var h=null;if(l._isElementNode(this[f]))h=new b.Node(this[f]);return h},getDOMNodes:function(){return n.slice.call(this)},each:function(f,h){var g=this.length,c=0,o;for(o=new b.Node(this[0]);c<g&&f.call(h||o,o,c,this)!==false;o=new b.Node(this[++c]));return this}});b.all=function(f,h){return new j(b.query(f,h,true))};
b.NodeList=j});
KISSY.add("node-attach",function(b,j){function l(x,arguments,y,e){var a=[this[x?w:o]()].concat(b.makeArray(arguments));if(arguments[y]===j)return e.apply(f,a);else{e.apply(f,a);return this}}function n(x,y){b.each(x,function(e){b.each([g,c],function(a,d){a[e]=function(i){switch(y){case m:return function(){return l.call(this,d,arguments,1,i)};case r:return function(){return l.call(this,d,arguments,0,i)};case v:return function(){var k=this[d?w:o]();return(k=i.apply(f,[k].concat(b.makeArray(arguments))))?new (b[b.isArray(k)?
"NodeList":"Node"])(k):null};default:return function(){var k=this[d?w:o]();k=i.apply(f,[k].concat(b.makeArray(arguments)));return k===j?this:k}}}(f[e])})})}var f=b.DOM,h=b.Event,g=b.Node.prototype,c=b.NodeList.prototype,o="getDOMNode",w=o+"s",m=1,r=2,v=4;b.mix(g,{one:function(x){return b.one(x,this[0])},all:function(x){return b.all(x,this[0])}});n(["hasClass","addClass","removeClass","replaceClass","toggleClass"]);n(["attr","removeAttr"],m);n(["val","text"],r);n(["css"],m);n(["width","height"],r);
n(["offset"],r);n(["scrollIntoView"]);n(["parent","next","prev","siblings","children"],v);n(["contains"]);n(["html"],r);n(["remove"]);b.each(["insertBefore","insertAfter"],function(x){g[x]=function(y){f[x].call(f,this[0],y);return this}});b.each([g,c],function(x){b.mix(x,{append:function(y){y&&b.each(this,function(e){e.appendChild(f.create(y))});return this},appendTo:function(y){if((y=b.get(y))&&y.appendChild)b.each(this,function(e){y.appendChild(e)});return this}})});b.each([g,c],function(x){b.mix(x,
b.EventTarget,{_supportSpecialEvent:true});x._addEvent=function(y,e,a){for(var d=0,i=this.length;d<i;d++)h._simpleAdd(this[d],y,e,a)};x._removeEvent=function(y,e,a){for(var d=0,i=this.length;d<i;d++)h._simpleRemove(this[d],y,e,a)};delete x.fire})});
KISSY.add("cookie",function(b){function j(h){return b.isString(h)&&h!==""}var l=document,n=encodeURIComponent,f=decodeURIComponent;b.Cookie={get:function(h){var g;if(j(h))if(h=l.cookie.match("(?:^| )"+h+"(?:(?:=([^;]*))|;|$)"))g=h[1]?f(h[1]):"";return g},set:function(h,g,c,o,w,m){g=n(g);var r=c;if(typeof r==="number"){r=new Date;r.setTime(r.getTime()+c*864E5)}if(r instanceof Date)g+="; expires="+r.toUTCString();if(j(o))g+="; domain="+o;if(j(w))g+="; path="+w;if(m)g+="; secure";l.cookie=h+"="+g},remove:function(h,
g,c,o){this.set(h,"",0,g,c,o)}}});
KISSY.add("json",function(b){function j(m){return m<10?"0"+m:m}function l(m){h.lastIndex=0;return h.test(m)?'"'+m.replace(h,function(r){var v=o[r];return typeof v==="string"?v:"\\u"+("0000"+r.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+m+'"'}function n(m,r){var v,x,y=g,e,a=r[m];if(a&&typeof a==="object"&&typeof a.toJSON==="function")a=a.toJSON(m);if(typeof w==="function")a=w.call(r,m,a);switch(typeof a){case "string":return l(a);case "number":return isFinite(a)?String(a):"null";case "boolean":case "null":return String(a);
case "object":if(!a)return"null";g+=c;e=[];if(Object.prototype.toString.apply(a)==="[object Array]"){x=a.length;for(m=0;m<x;m+=1)e[m]=n(m,a)||"null";r=e.length===0?"[]":g?"[\n"+g+e.join(",\n"+g)+"\n"+y+"]":"["+e.join(",")+"]";g=y;return r}if(w&&typeof w==="object"){x=w.length;for(m=0;m<x;m+=1){v=w[m];if(typeof v==="string")if(r=n(v,a))e.push(l(v)+(g?": ":":")+r)}}else for(v in a)if(Object.hasOwnProperty.call(a,v))if(r=n(v,a))e.push(l(v)+(g?": ":":")+r);r=e.length===0?"{}":g?"{\n"+g+e.join(",\n"+g)+
"\n"+y+"}":"{"+e.join(",")+"}";g=y;return r}}b=b.JSON=window.JSON||{};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+j(this.getUTCMonth()+1)+"-"+j(this.getUTCDate())+"T"+j(this.getUTCHours())+":"+j(this.getUTCMinutes())+":"+j(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var f=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
h=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,g,c,o={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},w;if(typeof b.stringify!=="function")b.stringify=function(m,r,v){var x;c=g="";if(typeof v==="number")for(x=0;x<v;x+=1)c+=" ";else if(typeof v==="string")c=v;if((w=r)&&typeof r!=="function"&&(typeof r!=="object"||typeof r.length!=="number"))throw new Error("JSON.stringify");return n("",
{"":m})};if(typeof b.parse!=="function")b.parse=function(m,r){function v(x,y){var e,a,d=x[y];if(d&&typeof d==="object")for(e in d)if(Object.hasOwnProperty.call(d,e)){a=v(d,e);if(a!==undefined)d[e]=a;else delete d[e]}return r.call(x,y,d)}m=String(m);f.lastIndex=0;if(f.test(m))m=m.replace(f,function(x){return"\\u"+("0000"+x.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(m.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){m=eval("("+m+")");return typeof r==="function"?v({"":m},""):m}throw new SyntaxError("JSON.parse");}});
KISSY.add("anim-easing",function(b){var j=Math,l=j.PI,n=j.pow,f=j.sin,h=1.70158,g={easeNone:function(c){return c},easeIn:function(c){return c*c},easeOut:function(c){return(2-c)*c},easeBoth:function(c){return(c*=2)<1?0.5*c*c:0.5*(1- --c*(c-2))},easeInStrong:function(c){return c*c*c*c},easeOutStrong:function(c){return 1- --c*c*c*c},easeBothStrong:function(c){return(c*=2)<1?0.5*c*c*c*c:0.5*(2-(c-=2)*c*c*c)},elasticIn:function(c){if(c===0||c===1)return c;return-(n(2,10*(c-=1))*f((c-0.075)*2*l/0.3))},
elasticOut:function(c){if(c===0||c===1)return c;return n(2,-10*c)*f((c-0.075)*2*l/0.3)+1},elasticBoth:function(c){if(c===0||(c*=2)===2)return c;if(c<1)return-0.5*n(2,10*(c-=1))*f((c-0.1125)*2*l/0.45);return n(2,-10*(c-=1))*f((c-0.1125)*2*l/0.45)*0.5+1},backIn:function(c){if(c===1)c-=0.0010;return c*c*((h+1)*c-h)},backOut:function(c){return(c-=1)*c*((h+1)*c+h)+1},backBoth:function(c){if((c*=2)<1)return 0.5*c*c*(((h*=1.525)+1)*c-h);return 0.5*((c-=2)*c*(((h*=1.525)+1)*c+h)+2)},bounceIn:function(c){return 1-
g.bounceOut(1-c)},bounceOut:function(c){return c<1/2.75?7.5625*c*c:c<2/2.75?7.5625*(c-=1.5/2.75)*c+0.75:c<2.5/2.75?7.5625*(c-=2.25/2.75)*c+0.9375:7.5625*(c-=2.625/2.75)*c+0.984375},bounceBoth:function(c){if(c<0.5)return g.bounceIn(c*2)*0.5;return g.bounceOut(c*2-1)*0.5+0.5}};b.Easing=g});
KISSY.add("anim",function(b,j){function l(e,a,d,i,k){if(e=b.get(e)){if(!(this instanceof l))return new l(e,a,d,i,k);var q=b.isPlainObject(d);a=a;this.domEl=e;if(b.isPlainObject(a))a=b.param(a,";").replace(/=/g,":");this.props=n(a);this.targetStyle=a;if(q)e=b.merge(y,d);else{e=b.clone(y);d&&(e.duration=m(d,10)||1);b.isString(i)&&(i=w[i]);b.isFunction(i)&&(e.easing=i);b.isFunction(k)&&(e.complete=k)}this.config=e;b.isFunction(k)&&this.on(x,k)}}function n(e){var a={},d=v.length,i;r.innerHTML='<div style="'+
e+'"></div>';for(e=r.firstChild.style;d--;)if(i=e[v[d]])a[v[d]]=f(i);return a}function f(e){var a=m(e);e=(e+"").replace(/^[-\d\.]+/,"");return isNaN(a)?{v:e,u:"",f:g}:{v:a,u:e,f:h}}function h(e,a,d){return(e+(a-e)*d).toFixed(3)}function g(e,a,d){for(var i=2,k,q,z=[],t=[];k=3,q=arguments[i-1],i--;)if(c(q,0,4)==="rgb(")for(q=q.match(/\d+/g);k--;)z.push(~~q[k]);else if(c(q,0)==="#"){if(q.length===4)q="#"+c(q,1)+c(q,1)+c(q,2)+c(q,2)+c(q,3)+c(q,3);for(;k--;)z.push(parseInt(c(q,1+k*2,2),16))}else return a;
for(;k--;){i=~~(z[k+3]+(z[k]-z[k+3])*d);t.push(i<0?0:i>255?255:i)}return"rgb("+t.join(",")+")"}function c(e,a,d){return e.substr(a,d||1)}var o=b.DOM,w=b.Easing,m=parseFloat,r=o.create("<div>"),v="backgroundColor borderBottomColor borderBottomWidth borderBottomStyle borderLeftColor borderLeftWidth borderLeftStyle borderRightColor borderRightWidth borderRightStyle borderSpacing borderTopColor borderTopWidth borderTopStyle bottom color font fontFamily fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" "),
x="complete",y={duration:1,easing:w.easeNone};b.augment(l,b.EventTarget,{run:function(){var e=this,a=e.config,d=e.domEl,i=a.duration*1E3,k=a.easing,q=b.now(),z=q+i,t=e.props,u={},A;for(A in t)u[A]=f(o.css(d,A));if(e.fire("start")!==false){e.stop();e.timer=b.later(a=function(){var p=b.now(),s=p>z?1:(p-q)/i,B,C,D;for(A in t){B=u[A];C=t[A];if(C.v==0)C.u=B.u;if(B.u!==C.u)B.v=0;o.css(d,A,C.f(B.v,C.v,k(s))+C.u)}if(e.fire("step")===false||(D=p>z)){e.stop();D&&e.fire(x)}},13,true);a();return e}},stop:function(e){var a=
this.domEl,d=this.targetStyle;if(this.timer){this.timer.cancel();this.timer=j}if(e){b.UA.ie&&d.indexOf("opacity")>-1&&o.css(a,"opacity",this.props.opacity.v);a.style.cssText+=";"+d;this.fire(x)}return this}});b.Anim=l});KISSY.add("anim-node-plugin",function(b,j){var l=b.Anim;b.each([b.Node.prototype,b.NodeList.prototype],function(n){n.animate=function(){var f=b.makeArray(arguments);b.each(this,function(h){l.apply(j,[h].concat(f)).run()});return this}})});KISSY.add("core");
