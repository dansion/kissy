/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Nov 1 20:44
*/
KISSY.add("dom/attr",function(o,d,u,w){function B(m,g){g=y[g]||g;var h=E[g];return h&&h.get?h.get(m,g):m[g]}u=document.documentElement;var x=!u.hasAttribute,D=u.textContent===w?"innerText":"textContent",p=d._nodeName,n=d._isElementNode,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,r=/^(?:button|input|object|select|textarea)$/i,k=/^a(?:rea)?$/i,q=/:|^on/,l=/\r/g,j={},s={val:1,css:1,html:1,text:1,data:1,width:1,height:1,
offset:1},z={tabindex:{get:function(m){var g=m.getAttributeNode("tabindex");return g&&g.specified?parseInt(g.value,10):r.test(m.nodeName)||k.test(m.nodeName)&&m.href?0:w}},style:{get:function(m){return m.style.cssText},set:function(m,g){m.style.cssText=g}}},y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},
A={get:function(m,g){return d.prop(m,g)?g.toLowerCase():w},set:function(m,g,h){if(g===false)d.removeAttr(m,h);else{g=y[h]||h;if(g in m)m[g]=true;m.setAttribute(h,h.toLowerCase())}return h}},E={},F={},G={option:{get:function(m){var g=m.attributes.value;return!g||g.specified?m.value:m.text}},select:{get:function(m){var g=m.selectedIndex,h=m.options;m=m.type==="select-one";if(g<0)return null;else if(m)return d.val(h[g]);g=[];m=0;for(var c=h.length;m<c;++m)h[m].selected&&g.push(d.val(h[m]));return g},
set:function(m,g){var h=o.makeArray(g);o.each(m.options,function(c){c.selected=o.inArray(d.val(c),h)});if(!h.length)m.selectedIndex=-1;return h}}};if(x){F={get:function(m,g){var h;return(h=m.getAttributeNode(g))&&h.nodeValue!==""?h.nodeValue:w},set:function(m,g,h){var c=m.getAttributeNode(h);if(c)c.nodeValue=g;else try{var e=m.ownerDocument.createAttribute(h);e.value=g;m.setAttributeNode(e)}catch(a){return m.setAttribute(h,g,0)}}};j=y;z.tabIndex=z.tabindex;o.each(["href","src","width","height","colSpan",
"rowSpan"],function(m){z[m]={get:function(g){g=g.getAttribute(m,2);return g===null?w:g}}});G.button=z.value=F}o.each(["radio","checkbox"],function(m){G[m]={get:function(g){return g.getAttribute("value")===null?"on":g.value},set:function(g,h){if(o.isArray(h))return g.checked=o.inArray(d.val(g),h)}}});o.mix(d,{prop:function(m,g,h){if(o.isPlainObject(g))for(var c in g)d.prop(m,c,g[c]);else{m=d.query(m);g=y[g]||g;var e=E[g];if(h!==w)m.each(function(a){if(e&&e.set)e.set(a,h,g);else a[g]=h});else if(m.length)return B(m[0],
g)}},hasProp:function(m,g){for(var h=d.query(m),c=0;c<h.length;c++)if(B(h[c],g)!==w)return true;return false},removeProp:function(m,g){g=y[g]||g;d.query(m).each(function(h){try{h[g]=w;delete h[g]}catch(c){}})},attr:function(m,g,h,c){if(o.isPlainObject(g)){c=h;for(var e in g)d.attr(m,e,g[e],c)}else if(g=o.trim(g)){g=g.toLowerCase();if(c&&s[g])return d[g](m,h);g=j[g]||g;var a;a=t.test(g)?A:q.test(g)?F:z[g];if(h===w){m=d.get(m);if(n(m)){if(p(m,"form"))a=F;if(a&&a.get)return a.get(m,g);m=m.getAttribute(g);
return m===null?w:m}}else d.query(m).each(function(b){if(n(b)){var f=a;if(p(b,"form"))f=F;f&&f.set?f.set(b,h,g):b.setAttribute(g,""+h)}})}},removeAttr:function(m,g){g=g.toLowerCase();g=j[g]||g;d.query(m).each(function(h){if(n(h)){var c;h.removeAttribute(g);if(t.test(g)&&(c=y[g]||g)in h)h[c]=false}})},hasAttr:x?function(m,g){g=g.toLowerCase();for(var h=d.query(m),c=0;c<h.length;c++){var e=h[c].getAttributeNode(g);if(e&&e.specified)return true}return false}:function(m,g){for(var h=d.query(m),c=0;c<
h.length;c++)if(h[c].hasAttribute(g))return true;return false},val:function(m,g){var h,c;if(g===w){var e=d.get(m);if(e){if((h=G[e.nodeName.toLowerCase()]||G[e.type])&&"get"in h&&(c=h.get(e,"value"))!==w)return c;c=e.value;return typeof c==="string"?c.replace(l,""):o.isNullOrUndefined(c)?"":c}}else d.query(m).each(function(a){if(a.nodeType===1){var b=g;if(o.isNullOrUndefined(b))b="";else if(typeof b==="number")b+="";else if(o.isArray(b))b=o.map(b,function(f){return o.isNullOrUndefined(b)?"":f+""});
h=G[a.nodeName.toLowerCase()]||G[a.type];if(!h||!("set"in h)||h.set(a,b,"value")===w)a.value=b}})},text:function(m,g){if(g===w){var h=d.get(m);if(n(h))return h[D]||"";else if(d._nodeTypeIs(h,d.TEXT_NODE))return h.nodeValue;return w}else d.query(m).each(function(c){if(n(c))c[D]=g;else if(d._nodeTypeIs(c,d.TEXT_NODE))c.nodeValue=g})}});return d},{requires:["./base","ua"]});
KISSY.add("dom/base",function(o,d){function u(x,D){return x&&x.nodeType===D}var w={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12},B={_NODE_TYPE:w,_isElementNode:function(x){return u(x,B.ELEMENT_NODE)},_getWin:function(x){return x&&"scrollTo"in x&&x.document?x:u(x,B.DOCUMENT_NODE)?x.defaultView||x.parentWindow:x===d||
x===null?window:false},_nodeTypeIs:u,_isNodeList:function(x){return x&&!x.nodeType&&x.item&&!x.setTimeout},_nodeName:function(x,D){return x&&x.nodeName.toLowerCase()===D.toLowerCase()}};o.mix(B,w);return B});
KISSY.add("dom/class",function(o,d,u){function w(n){return(x+n+x).replace(p,x)}function B(n,t,r,k){if(!(t=o.trim(t)))return k?false:u;n=d.query(n);var q=n.length,l=t.split(D);t=[];for(var j=0;j<l.length;j++){var s=o.trim(l[j]);s&&t.push(s)}for(j=0;j<q;j++){l=n[j];if(d._isElementNode(l)){l=r(l,t,t.length);if(l!==u)return l}}if(k)return false;return u}var x=" ",D=/[\.\s]\s*\.?/,p=/[\n\t]/g;o.mix(d,{__hasClass:function(n,t){var r=n.className;if(r){r=w(r);return r.indexOf(x+t+x)>-1}else return false},
hasClass:function(n,t){return B(n,t,function(r,k,q){if(r=r.className){r=w(r);for(var l=0,j=true;l<q;l++)if(r.indexOf(x+k[l]+x)<0){j=false;break}if(j)return true}},true)},addClass:function(n,t){B(n,t,function(r,k,q){var l=r.className;if(l){var j=w(l);l=l;for(var s=0;s<q;s++)if(j.indexOf(x+k[s]+x)<0)l+=x+k[s];r.className=o.trim(l)}else r.className=t},u)},removeClass:function(n,t){B(n,t,function(r,k,q){var l=r.className;if(l)if(q){l=w(l);for(var j=0,s;j<q;j++)for(s=x+k[j]+x;l.indexOf(s)>=0;)l=l.replace(s,
x);r.className=o.trim(l)}else r.className=""},u)},replaceClass:function(n,t,r){d.removeClass(n,t);d.addClass(n,r)},toggleClass:function(n,t,r){var k=o.isBoolean(r),q;B(n,t,function(l,j,s){for(var z=0,y;z<s;z++){y=j[z];q=k?!r:d.hasClass(l,y);d[q?"removeClass":"addClass"](l,y)}},u)}});return d},{requires:["dom/base"]});
KISSY.add("dom/create",function(o,d,u,w){function B(c){var e=o.require("event");e&&e.detach(c);d.removeData(c)}function x(c,e,a){if(r(e,d.DOCUMENT_FRAGMENT_NODE)){e=e.childNodes;a=a.childNodes;for(var b=0;e[b];){a[b]&&x(c,e[b],a[b]);b++}}else if(k(e)){e=e.getElementsByTagName("*");a=a.getElementsByTagName("*");for(b=0;e[b];){a[b]&&c(e[b],a[b]);b++}}}function D(c,e){var a=o.require("event");if(!(k(e)&&!d.hasData(c))){var b=d.data(c),f;for(f in b)d.data(e,f,b[f]);if(a){a._removeData(e);a._clone(c,e)}}}
function p(c,e){e.clearAttributes&&e.clearAttributes();e.mergeAttributes&&e.mergeAttributes(c);var a=e.nodeName.toLowerCase(),b=c.childNodes;if(a==="object"&&!e.childNodes.length)for(a=0;a<b.length;a++)e.appendChild(b[a].cloneNode(true));else if(a==="input"&&(c.type==="checkbox"||c.type==="radio")){if(c.checked)e.defaultChecked=e.checked=c.checked;if(e.value!==c.value)e.value=c.value}else if(a==="option")e.selected=c.defaultSelected;else if(a==="input"||a==="textarea")e.defaultValue=c.defaultValue;
e.removeAttribute(d.__EXPANDO)}function n(c,e){var a=null,b,f;if(c&&(c.push||c.item)&&c[0]){e=e||c[0].ownerDocument;a=e.createDocumentFragment();c=o.makeArray(c);b=0;for(f=c.length;b<f;b++)a.appendChild(c[b])}return a}var t=document;u=u.ie;var r=d._nodeTypeIs,k=d._isElementNode,q=o.isString,l=t.createElement("div"),j=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,s=/<([\w:]+)/,z=/^\s+/,y=u&&u<9,A=/<|&#?\w+;/,E=/^<(\w+)\s*\/?>(?:<\/\1>)?$/;o.mix(d,{create:function(c,e,a,
b){if(k(c)||r(c,d.TEXT_NODE))return d.clone(c);var f=null;if(!q(c))return f;if(b===w)b=true;if(b)c=o.trim(c);if(!c)return f;b=d._creators;var i,v;a=a||t;var C,H="div";if(A.test(c))if(C=E.exec(c))f=a.createElement(C[1]);else{c=c.replace(j,"<$1></$2>");if((C=s.exec(c))&&(i=C[1]))H=i.toLowerCase();i=(b[H]||b.div)(c,a);if(y&&(v=c.match(z)))i.insertBefore(a.createTextNode(v[0]),i.firstChild);c=i.childNodes;if(c.length===1)f=c[0].parentNode.removeChild(c[0]);else if(c.length)f=n(c,a)}else f=a.createTextNode(c);
f=f;if(o.isPlainObject(e))if(k(f))d.attr(f,e,true);else r(f,d.DOCUMENT_FRAGMENT_NODE)&&d.attr(f.childNodes,e,true);return f},_creators:{div:function(c,e){var a=e&&e!=t?e.createElement("div"):l;a.innerHTML="m<div>"+c+"</div>";return a.lastChild}},html:function(c,e,a,b){c=d.query(c);var f=c[0];if(f)if(e===w)return k(f)?f.innerHTML:null;else{var i=false;if(q(e)&&!e.match(/<(?:script|style)/i)&&(!y||!e.match(z))&&!g[(e.match(s)||["",""])[1].toLowerCase()])try{c.each(function(C){if(k(C)){B(C.getElementsByTagName("*"));
C.innerHTML=e}});i=true}catch(v){}if(!i){if(q(e))e=d.create(e,0,f.ownerDocument,false);c.each(function(C){if(k(C)){d.empty(C);d.append(e,C,a)}})}b&&b()}},remove:function(c,e){d.query(c).each(function(a){if(!e&&k(a)){var b=a.getElementsByTagName("*");B(b);B(a)}a.parentNode&&a.parentNode.removeChild(a)})},clone:function(c,e,a,b){c=d.get(c);if(!c)return null;var f=c.cloneNode(e);if(k(c)||r(c,d.DOCUMENT_FRAGMENT_NODE)){k(c)&&p(c,f);e&&x(p,c,f)}if(a){D(c,f);e&&b&&x(D,c,f)}return f},empty:function(c){d.query(c).each(function(e){d.remove(e.childNodes)})},
_nl2frag:n});var F=d._creators,G=d.create,m=/(?:\/(?:thead|tfoot|caption|col|colgroup)>)+\s*<tbody/,g={option:"select",optgroup:"select",area:"map",thead:"table",td:"tr",th:"tr",tr:"tbody",tbody:"table",tfoot:"table",caption:"table",colgroup:"table",col:"colgroup",legend:"fieldset"},h;for(h in g)(function(c){F[h]=function(e,a){return G("<"+c+">"+e+"</"+c+">",null,a)}})(g[h]);if(u<8)F.tbody=function(c,e){var a=G("<table>"+c+"</table>",null,e),b=a.children.tags("tbody")[0];a.children.length>1&&b&&!m.test(c)&&
b.parentNode.removeChild(b);return a};o.mix(F,{thead:F.tbody,tfoot:F.tbody,caption:F.tbody,colgroup:F.tbody});return d},{requires:["./base","ua"]});
KISSY.add("dom/data",function(o,d,u){var w=window,B="_ks_data_"+o.now(),x={},D={},p={};p.applet=1;p.object=1;p.embed=1;var n={hasData:function(k,q){if(k)if(q!==u){if(q in k)return true}else if(!o.isEmptyObject(k))return true;return false}},t={hasData:function(k,q){if(k==w)return t.hasData(D,q);return n.hasData(k[B],q)},data:function(k,q,l){if(k==w)return t.data(D,q,l);var j=k[B];if(l!==u){j=k[B]=k[B]||{};j[q]=l}else if(q!==u)return j&&j[q];else return j=k[B]=k[B]||{}},removeData:function(k,q){if(k==
w)return t.removeData(D,q);var l=k[B];if(l)if(q!==u){delete l[q];o.isEmptyObject(l)&&t.removeData(k,u)}else try{delete k[B]}catch(j){k[B]=null}}},r={hasData:function(k,q){var l=k[B];if(!l)return false;return n.hasData(x[l],q)},data:function(k,q,l){if(!p[k.nodeName.toLowerCase()]){var j=k[B];j||(j=k[B]=o.guid());k=x[j];if(l!==u){k=x[j]=x[j]||{};k[q]=l}else if(q!==u)return k&&k[q];else return k=x[j]=x[j]||{}}},removeData:function(k,q){var l=k[B];if(l){var j=x[l];if(j)if(q!==u){delete j[q];o.isEmptyObject(j)&&
r.removeData(k,u)}else{delete x[l];try{delete k[B]}catch(s){}k.removeAttribute&&k.removeAttribute(B)}}}};o.mix(d,{__EXPANDO:B,hasData:function(k,q){for(var l=false,j=d.query(k),s=0;s<j.length;s++)if(l=(l=j[s])&&l.nodeType?r.hasData(l,q):t.hasData(l,q))break;return l},data:function(k,q,l){if(o.isPlainObject(q))for(var j in q)d.data(k,j,q[j]);else if(l===u)if((k=d.get(k))&&k.nodeType)return r.data(k,q,l);else{if(k)return t.data(k,q,l)}else d.query(k).each(function(s){s&&s.nodeType?r.data(s,q,l):t.data(s,
q,l)})},removeData:function(k,q){d.query(k).each(function(l){l&&l.nodeType?r.removeData(l,q):t.removeData(l,q)})}});return d},{requires:["./base"]});
KISSY.add("dom/insertion",function(o,d,u){function w(j){for(var s=0;s<j.length;s++){var z=j[s];if(z.nodeType==u.DOCUMENT_FRAGMENT_NODE)w(z.childNodes);else if(n(z,"input")){if(z.type==="checkbox"||z.type==="radio")z.defaultChecked=z.checked}else if(r(z)){z=z.getElementsByTagName("input");for(var y=0;y<z.length;y++)w(z[y])}}}function B(j,s){for(var z=[],y=0;j[y];y++){var A=j[y],E=A.nodeName.toLowerCase();if(A.nodeType==u.DOCUMENT_FRAGMENT_NODE)z.push.apply(z,B(t(A.childNodes),s));else if(E==="script"&&
(!A.type||k.test(A.type))){if(s)s.push(A.parentNode?A.parentNode.removeChild(A):A)}else{if(r(A)&&!p.test(E)){E=[];for(var F=A.getElementsByTagName("script"),G=0;G<F.length;G++)(!F[G].type||k.test(F[G].type))&&E.push(F[G]);j.splice.apply(j,[y+1,0].concat(E))}z.push(A)}}return z}function x(j){if(j.src)o.getScript(j.src);else(j=o.trim(j.text||j.textContent||j.innerHTML||""))&&o.globalEval(j)}function D(j,s,z,y){j=u.query(j);if(y)y=[];j=B(j,y);d.ie<8&&w(j);s=u.query(s);var A=j.length,E=s.length;if(!(!A&&
(!y||!y.length)||!E)){j=u._nl2frag(j);var F;if(E>1)F=u.clone(j,true);for(var G=0;G<E;G++){var m=s[G];if(A){var g=G>0?u.clone(F,true):j;z(g,m)}y&&o.each(y,x)}}}var p=/^(?:button|input|object|select|textarea)$/i,n=u._nodeName,t=o.makeArray,r=u._isElementNode,k=/\/(java|ecma)script/i;o.mix(u,{insertBefore:function(j,s,z){D(j,s,function(y,A){A.parentNode&&A.parentNode.insertBefore(y,A)},z)},insertAfter:function(j,s,z){D(j,s,function(y,A){A.parentNode&&A.parentNode.insertBefore(y,A.nextSibling)},z)},appendTo:function(j,
s,z){D(j,s,function(y,A){A.appendChild(y)},z)},prependTo:function(j,s,z){D(j,s,function(y,A){A.insertBefore(y,A.firstChild)},z)}});var q={prepend:"prependTo",append:"appendTo",before:"insertBefore",after:"insertAfter"},l;for(l in q)u[l]=u[q[l]];return u},{requires:["ua","./create"]});
KISSY.add("dom/offset",function(o,d,u,w){function B(g){var h,c=0;h=0;var e=p.body,a=q(g[z]);if(g[m]){h=g[m]();c=h[y];h=h[A];g=n&&p.documentMode!=9&&(l?t.clientTop:e.clientTop)||0;c-=n&&p.documentMode!=9&&(l?t.clientLeft:e.clientLeft)||0;h-=g;if(u.mobile=="apple"){c-=d[F](a);h-=d[G](a)}}return{left:c,top:h}}function x(g,h){var c={left:0,top:0},e=q(g[z]),a=g;h=h||e;do{var b;if(e==h){var f=a;b=B(f);f=q(f[z]);b.left+=d[F](f);b.top+=d[G](f);b=b}else b=B(a);b=b;c.left+=b.left;c.top+=b.top}while(e&&e!=h&&
(a=e.frameElement)&&(e=e.parent));return c}var D=window,p=document,n=u.ie,t=p.documentElement,r=d._isElementNode,k=d._nodeTypeIs,q=d._getWin,l=p.compatMode==="CSS1Compat",j=Math.max,s=parseInt,z="ownerDocument",y="left",A="top",E=o.isNumber,F="scrollLeft",G="scrollTop",m="getBoundingClientRect";o.mix(d,{offset:function(g,h,c){if(h===w){g=d.get(g);var e;if(g)e=x(g,c);return e}d.query(g).each(function(a){if(d.css(a,"position")==="static")a.style.position="relative";var b=x(a),f={},i,v;for(v in h){i=
s(d.css(a,v),10)||0;f[v]=i+h[v]-b[v]}d.css(a,f)})},scrollIntoView:function(g,h,c,e,a){if(g=d.get(g)){if(h)h=d.get(h);if(!h)h=g.ownerDocument;if(a!==true){e=e===w?true:!!e;c=c===w?true:!!c}if(k(h,d.DOCUMENT_NODE))h=q(h);var b=!!q(h);a=d.offset(g);var f=d.outerHeight(g);g=d.outerWidth(g);var i,v,C,H;if(b){b=h;v=d.height(b);i=d.width(b);H={left:d.scrollLeft(b),top:d.scrollTop(b)};b={left:a[y]-H[y],top:a[A]-H[A]};a={left:a[y]+g-(H[y]+i),top:a[A]+f-(H[A]+v)};H=H}else{i=d.offset(h);v=h.clientHeight;C=h.clientWidth;
H={left:d.scrollLeft(h),top:d.scrollTop(h)};b={left:a[y]-i[y]-(s(d.css(h,"borderLeftWidth"))||0),top:a[A]-i[A]-(s(d.css(h,"borderTopWidth"))||0)};a={left:a[y]+g-(i[y]+C+(s(d.css(h,"borderRightWidth"))||0)),top:a[A]+f-(i[A]+v+(s(d.css(h,"borderBottomWidth"))||0))}}if(b.top<0||a.top>0)if(c===true)d.scrollTop(h,H.top+b.top);else if(c===false)d.scrollTop(h,H.top+a.top);else b.top<0?d.scrollTop(h,H.top+b.top):d.scrollTop(h,H.top+a.top);if(e)if(b.left<0||a.left>0)if(c===true)d.scrollLeft(h,H.left+b.left);
else if(c===false)d.scrollLeft(h,H.left+a.left);else b.left<0?d.scrollLeft(h,H.left+b.left):d.scrollLeft(h,H.left+a.left)}},docWidth:0,docHeight:0,viewportHeight:0,viewportWidth:0});o.each(["Left","Top"],function(g,h){var c="scroll"+g;d[c]=function(e,a){if(E(e))return arguments.callee(D,e);e=d.get(e);var b,f=q(e);if(f)if(a!==w){var i=g=="Left"?a:d.scrollLeft(f),v=g=="Top"?a:d.scrollTop(f);f.scrollTo(i,v)}else{b=f["page"+(h?"Y":"X")+"Offset"];if(!E(b)){f=f.document;b=f.documentElement[c];E(b)||(b=
f.body[c])}}else if(r(e))if(a!==w)e[c]=a;else b=e[c];return b}});o.each(["Width","Height"],function(g){d["doc"+g]=function(h){h=d.get(h);h=q(h).document;return j(h.documentElement["scroll"+g],h.body["scroll"+g],d["viewport"+g](h))};d["viewport"+g]=function(h){h=d.get(h);var c="client"+g;h=q(h).document;var e=h.body,a=h.documentElement[c];return h.compatMode==="CSS1Compat"&&a||e&&e[c]||a}});return d},{requires:["./base","ua"]});
KISSY.add("dom/selector",function(o,d,u){function w(c,e){var a=[],b;b=e===u?[r]:w(e,u);l(b,function(f){A.apply(a,B(c,f))});if(o.isString(c)&&c.indexOf(",")>-1||b.length>1)g(a);a.each=o.bind(l,u,a);return a}function B(c,e){var a=[];q("sizzle");if(F(c))c=o.trim(c);if(F(c)&&c.indexOf(",")>-1)a=x(c,e);else{if(F(c)&&!m.exec(String(c))){a=c;var b=[],f=q("sizzle");f&&f(a,e,b);a=b}else a=D(c,e);a=a}return a=a}function x(c,e){var a=[],b=c.split(",");l(b,function(f){A.apply(a,B(f,e))});return a}function D(c,
e){var a,b,f=[],i;if(F(c))if(G.test(c)){if(b=n(c.slice(1),e))f=[b]}else{if(a=m.exec(c)){b=a[1];i=a[2];a=a[3];if(e=b?n(b,e):e)if(a)if(!b||c.indexOf(E)!=-1)f=[].concat(h(a,i,e));else{if((b=n(b,e))&&d.__hasClass(b,a))f=[b]}else if(i)f=t(i,e)}}else if(c&&(j(c)||z(c)))f=k(c,function(v){return p(v,e)});else if(c)if(p(c,e))f=[c];return f}function p(c,e){if(!c)return false;if(e==r)return true;return d.__contains(e,c)}function n(c,e){if(!e)return null;var a=e;if(e.nodeType!==d.DOCUMENT_NODE)a=e.ownerDocument;
if((a=a.getElementById(c))&&a.parentNode)if(d.attr(a,"id")!==c)a=d.filter("*","#"+c,e)[0]||null;else p(a,e)||(a=null);else a=null;return a}function t(c,e){return e&&s(e.getElementsByTagName(c))||[]}var r=document,k=o.filter,q=o.require,l=o.each,j=o.isArray,s=o.makeArray,z=d._isNodeList,y=d._nodeName,A=Array.prototype.push,E=" ",F=o.isString,G=/^#[\w-]+$/,m=/^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,g;(function(){var c,e,a=true;[0,0].sort(function(){a=false;return 0});g=function(b){if(c){e=a;b.sort(c);
if(e)for(var f=1,i=b.length;f<i;)if(b[f]===b[f-1])b.splice(f,1);else f++}return b};c=r.documentElement.compareDocumentPosition?function(b,f){if(b==f){e=true;return 0}if(!b.compareDocumentPosition||!f.compareDocumentPosition)return b.compareDocumentPosition?-1:1;return b.compareDocumentPosition(f)&4?-1:1}:function(b,f){if(b==f){e=true;return 0}else if(b.sourceIndex&&f.sourceIndex)return b.sourceIndex-f.sourceIndex}})();(function(){var c=r.createElement("div");c.appendChild(r.createComment(""));if(c.getElementsByTagName("*").length>
0)t=function(e,a){var b=s(a.getElementsByTagName(e));if(e==="*"){for(var f=[],i=0,v;v=b[i++];)v.nodeType===1&&f.push(v);b=f}return b}})();var h=r.getElementsByClassName?function(c,e,a){if(!a)return[];c=a.getElementsByClassName(c);var b=0,f=c.length,i;if(e&&e!=="*")for(a=[];b<f;++b){i=c[b];y(i,e)&&a.push(i)}else a=s(c);return a}:r.querySelectorAll?function(c,e,a){return a&&s(a.querySelectorAll((e?e:"")+"."+c))||[]}:function(c,e,a){if(!a)return[];e=a.getElementsByTagName(e||"*");a=[];for(var b=0,f=
e.length,i;b<f;++b){i=e[b];d.__hasClass(i,c)&&a.push(i)}return a};o.mix(d,{query:w,get:function(c,e){return w(c,e)[0]||null},unique:g,filter:function(c,e,a){c=w(c,a);a=q("sizzle");var b,f,i,v,C=[];if(F(e)&&(e=o.trim(e))&&(b=m.exec(e))){i=b[1];f=b[2];v=b[3];if(i){if(i&&!f&&!v)e=function(H){return H.id===i}}else e=function(H){var I=true,J=true;if(f)I=y(H,f);if(v)J=d.__hasClass(H,v);return J&&I}}if(o.isFunction(e))C=o.filter(c,e);else if(e&&a)C=a.matches(e,c);return C},test:function(c,e,a){c=w(c,a);
return c.length&&d.filter(c,e,a).length===c.length}});return d},{requires:["./base"]});
KISSY.add("dom/style-ie",function(o,d,u,w){if(!u.ie)return d;var B=document,x=B.documentElement,D=w._CUSTOM_STYLES,p=/^-?\d+(?:px)?$/i,n=/^-?\d/,t=/opacity=([^)]*)/,r=/alpha\([^)]*\)/i;try{if(o.isNullOrUndefined(x.style.opacity))D.opacity={get:function(l,j){return t.test((j&&l.currentStyle?l.currentStyle.filter:l.style.filter)||"")?parseFloat(RegExp.$1)/100+"":j?"1":""},set:function(l,j){j=parseFloat(j);var s=l.style,z=l.currentStyle,y=isNaN(j)?"":"alpha(opacity="+j*100+")",A=o.trim(z&&z.filter||
s.filter||"");s.zoom=1;if(j>=1&&o.trim(A.replace(r,""))===""){s.removeAttribute("filter");if(z&&!z.filter)return}s.filter=r.test(A)?A.replace(r,y):A+(A?", ":"")+y}}}catch(k){}u=u.ie==8;var q={};q.thin=u?"1px":"2px";q.medium=u?"3px":"4px";q.thick=u?"5px":"6px";o.each(["","Top","Left","Right","Bottom"],function(l){var j="border"+l+"Width",s="border"+l+"Style";D[j]={get:function(z,y){var A=y?z.currentStyle:0,E=A&&String(A[j])||undefined;if(E&&E.indexOf("px")<0)E=q[E]&&A[s]!=="none"?q[E]:0;return E}}});
if(!(B.defaultView||{}).getComputedStyle&&x.currentStyle)d._getComputedStyle=function(l,j){j=d._cssProps[j]||j;var s=l.currentStyle&&l.currentStyle[j];if(!p.test(s)&&n.test(s)){var z=l.style,y=z.left,A=l.runtimeStyle&&l.runtimeStyle.left;if(A)l.runtimeStyle.left=l.currentStyle.left;z.left=j==="fontSize"?"1em":s||0;s=z.pixelLeft+"px";z.left=y;if(A)l.runtimeStyle.left=A}return s===""?"auto":s};return d},{requires:["./base","ua","./style"]});
KISSY.add("dom/style",function(o,d,u,w){function B(a,b,f){var i={},v;for(v in b){i[v]=a[r][v];a[r][v]=b[v]}f.call(a);for(v in b)a[r][v]=i[v]}function x(a,b,f){var i;if(a.nodeType===3||a.nodeType===8||!(i=a[r]))return w;b=b.replace(z,y);var v,C=G[b];b=m[b]||b;if(f!==w){if(f===null||f===E)f=E;else if(!isNaN(Number(f))&&!s[b])f+=F;if(C&&C.set)f=C.set(a,f);if(f!==w)try{a[r][b]=f}catch(H){}return w}else{if(!(C&&"get"in C&&(v=C.get(a,false))!==w))v=i[b];return v===w?"":v}}function D(a,b,f){if(o.isWindow(a))return b==
k?d.viewportWidth(a):d.viewportHeight(a);else if(a.nodeType==9)return b==k?d.docWidth(a):d.docHeight(a);var i=b===k?["Left","Right"]:["Top","Bottom"],v=b===k?a.offsetWidth:a.offsetHeight;if(v>0){f!=="border"&&o.each(i,function(C){f||(v-=parseFloat(d.css(a,"padding"+C))||0);if(f==="margin")v+=parseFloat(d.css(a,f+C))||0;else v-=parseFloat(d.css(a,"border"+C+"Width"))||0});return v}v=d._getComputedStyle(a,b);if(v<0||o.isNullOrUndefined(v))v=a.style[b]||0;v=parseFloat(v)||0;f&&o.each(i,function(C){v+=
parseFloat(d.css(a,"padding"+C))||0;if(f!=="padding")v+=parseFloat(d.css(a,"border"+C+"Width"))||0;if(f==="margin")v+=parseFloat(d.css(a,f+C))||0});return v}var p=document,n=p.documentElement,t=u.ie,r="style",k="width",q="display"+o.now(),l=parseInt,j=/^-?\d+(?:px)?$/i,s={fillOpacity:1,fontWeight:1,lineHeight:1,opacity:1,orphans:1,widows:1,zIndex:1,zoom:1},z=/-([a-z])/ig,y=function(a,b){return b.toUpperCase()},A=/([A-Z]|^ms)/g,E="",F="px",G={},m={},g={};if(n[r].cssFloat!==w)m["float"]="cssFloat";
else if(n[r].styleFloat!==w)m["float"]="styleFloat";var h,c;o.mix(d,{_CUSTOM_STYLES:G,_cssProps:m,_getComputedStyle:function(a,b){var f="",i={},v=a.ownerDocument;b=b.replace(A,"-$1").toLowerCase();if(i=v.defaultView.getComputedStyle(a,null))f=i.getPropertyValue(b)||i[b];if(f==""&&!d.__contains(v.documentElement,a)){b=m[b]||b;f=a[r][b]}return f},style:function(a,b,f){if(o.isPlainObject(b))for(var i in b)d.style(a,i,b[i]);else if(f===w){a=d.get(a);i="";if(a)i=x(a,b,f);return i}else d.query(a).each(function(v){x(v,
b,f)})},css:function(a,b,f){if(o.isPlainObject(b))for(var i in b)d.css(a,i,b[i]);else{b=b.replace(z,y);i=G[b];if(f===w){a=d.get(a);f="";if(a)if(!(i&&"get"in i&&(f=i.get(a,true))!==w))f=d._getComputedStyle(a,b);return f===w?"":f}else d.style(a,b,f)}},show:function(a){d.query(a).each(function(b){b[r].display=d.data(b,q)||E;if(d.css(b,"display")==="none"){var f;f=b.tagName.toLowerCase();var i,v;if(!g[f]){i=p.body||p.documentElement;v=p.createElement(f);d.prepend(v,i);var C=d.css(v,"display");i.removeChild(v);
if(C==="none"||C===""){if(h)d.prepend(h,i);else{h=p.createElement("iframe");h.frameBorder=h.width=h.height=0;d.prepend(h,i);if(u.ie){v=p.domain;C=location.hostname;v=v!=C&&v!="["+C+"]"}else v=false;if(v)h.src="javascript:void(function(){"+encodeURIComponent("document.open();document.domain='"+p.domain+"';document.close();")+"}())"}if(!c||!h.createElement){c=h.contentWindow.document;c.write((p.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>");c.close()}v=c.createElement(f);c.body.appendChild(v);
C=d.css(v,"display");i.removeChild(h)}g[f]=C}f=g[f];d.data(b,q,f);b[r].display=f}})},hide:function(a){d.query(a).each(function(b){var f=b[r],i=f.display;if(i!=="none"){i&&d.data(b,q,i);f.display="none"}})},toggle:function(a){d.query(a).each(function(b){d.css(b,"display")==="none"?d.show(b):d.hide(b)})},addStyleSheet:function(a,b,f){if(o.isString(a)){f=b;b=a;a=window}a=d.get(a);a=d._getWin(a).document;var i;if(f&&(f=f.replace("#",E)))i=d.get("#"+f,a);if(!i){i=d.create("<style>",{id:f},a);d.get("head",
a).appendChild(i);if(i.styleSheet)i.styleSheet.cssText=b;else i.appendChild(a.createTextNode(b))}},unselectable:function(a){d.query(a).each(function(b){if(u.gecko)b[r].MozUserSelect="none";else if(u.webkit)b[r].KhtmlUserSelect="none";else if(u.ie||u.opera){var f=0,i=b.getElementsByTagName("*");for(b.setAttribute("unselectable","on");b=i[f++];)switch(b.tagName.toLowerCase()){case "iframe":case "textarea":case "input":case "select":break;default:b.setAttribute("unselectable","on")}}})},innerWidth:0,
innerHeight:0,outerWidth:0,outerHeight:0,width:0,height:0});o.each([k,"height"],function(a){d["inner"+(a.charAt(0).toUpperCase()+a.substring(1))]=function(b){return(b=d.get(b))?D(b,a,"padding"):null};d["outer"+(a.charAt(0).toUpperCase()+a.substring(1))]=function(b,f){var i=d.get(b);return i?D(i,a,f?"margin":"border"):null};d[a]=function(b,f){var i=d.css(b,a,f);if(i)i=parseFloat(i);return i}});var e={position:"absolute",visibility:"hidden",display:"block"};o.each(["height","width"],function(a){G[a]=
{get:function(b,f){var i;if(f){if(b.offsetWidth!==0)i=D(b,a);else B(b,e,function(){i=D(b,a)});return i+"px"}},set:function(b,f){if(j.test(f)){f=parseFloat(f);if(f>=0)return f+"px"}else return f}}});o.each(["left","top"],function(a){G[a]={get:function(b,f){if(f){var i=d._getComputedStyle(b,a);if(i==="auto"){i=0;if(o.inArray(d.css(b,"position"),["absolute","fixed"])){i=b[a==="left"?"offsetLeft":"offsetTop"];if(t&&document.documentMode!=9||u.opera)i-=b.offsetParent&&b.offsetParent["client"+(a=="left"?
"Left":"Top")]||0;i=i-(l(d.css(b,"margin-"+a))||0)}i+="px"}return i}}}});return d},{requires:["dom/base","ua"]});
KISSY.add("dom/traversal",function(o,d,u){function w(p,n,t,r,k,q){if(!(p=d.get(p)))return null;if(n===0)return p;q||(p=p[t]);if(!p)return null;k=k&&d.get(k)||null;if(n===u)n=1;q=[];var l=o.isArray(n),j,s;if(o.isNumber(n)){j=0;s=n;n=function(){return++j===s}}for(;p&&p!=k;){if(D(p)&&B(p,n)&&(!r||r(p))){q.push(p);if(!l)break}p=p[t]}return l?q:q[0]||null}function B(p,n){if(!n)return true;if(o.isArray(n))for(var t=0;t<n.length;t++){if(d.test(p,n[t]))return true}else if(d.test(p,n))return true;return false}
function x(p,n,t){var r=[];var k=p=d.get(p);if(p&&t)k=p.parentNode;if(k){t=0;for(k=k.firstChild;k;k=k.nextSibling)if(D(k)&&k!==p&&(!n||d.test(k,n)))r[t++]=k}return r}var D=d._isElementNode;o.mix(d,{closest:function(p,n,t){return w(p,n,"parentNode",function(r){return r.nodeType!=d.DOCUMENT_FRAGMENT_NODE},t,true)},parent:function(p,n,t){return w(p,n,"parentNode",function(r){return r.nodeType!=d.DOCUMENT_FRAGMENT_NODE},t)},first:function(p,n){var t=d.get(p);return w(t&&t.firstChild,n,"nextSibling",u,
u,true)},last:function(p,n){var t=d.get(p);return w(t&&t.lastChild,n,"previousSibling",u,u,true)},next:function(p,n){return w(p,n,"nextSibling",u)},prev:function(p,n){return w(p,n,"previousSibling",u)},siblings:function(p,n){return x(p,n,true)},children:function(p,n){return x(p,n,u)},__contains:document.documentElement.contains?function(p,n){if(p.nodeType==d.TEXT_NODE)return false;var t;if(n.nodeType==d.TEXT_NODE){n=n.parentNode;t=true}else if(n.nodeType==d.DOCUMENT_NODE)return false;else t=p!==n;
return t&&(p.contains?p.contains(n):true)}:document.documentElement.compareDocumentPosition?function(p,n){return!!(p.compareDocumentPosition(n)&16)}:0,contains:function(p,n){p=d.get(p);n=d.get(n);if(p&&n)return d.__contains(p,n)},equals:function(p,n){p=d.query(p);n=d.query(n);if(p.length!=n.length)return false;for(var t=p.length;t>=0;t--)if(p[t]!=n[t])return false;return true}});return d},{requires:["./base"]});
KISSY.add("dom",function(o,d){return d},{requires:["dom/attr","dom/class","dom/create","dom/data","dom/insertion","dom/offset","dom/style","dom/selector","dom/style-ie","dom/traversal"]});
