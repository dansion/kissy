/*
Copyright 2010, KISSY UI Library v1.1.7dev
MIT Licensed
build time: ${build.time}
*/
(function(f,n,u){var w={mix:function(j,l,o,q){if(!l||!j)return j;if(o===u)o=true;var c,g,k;if(q&&(k=q.length))for(c=0;c<k;c++){g=q[c];if(g in l)if(o||!(g in j))j[g]=l[g]}else for(g in l)if(o||!(g in j))j[g]=l[g];return j}},s=f&&f[n]||{},t=0;f=s.__HOST||(s.__HOST=f||{});n=f[n]=w.mix(s,w,false);n.mix(n,{__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],version:"1.1.7dev",merge:function(){var j={},l,o=arguments.length;for(l=0;l<o;l++)n.mix(j,arguments[l]);return j},augment:function(){var j=arguments,
l=j.length-2,o=j[0],q=j[l],c=j[l+1],g=1;if(!n.isArray(c)){q=c;c=u;l++}if(!n.isBoolean(q)){q=u;l++}for(;g<l;g++)n.mix(o.prototype,j[g].prototype||j[g],q,c);return o},extend:function(j,l,o,q){if(!l||!j)return j;var c=Object.create?function(a,h){return Object.create(a,{constructor:{value:h}})}:function(a,h){function b(){}b.prototype=a;var d=new b;d.constructor=h;return d},g=l.prototype,k;j.prototype=k=c(g,j);j.superclass=c(g,l);o&&n.mix(k,o);q&&n.mix(j,q);return j},__init:function(){this.Config=this.Config||
{};this.Env=this.Env||{};this.Config.debug=""},namespace:function(){var j=arguments,l=j.length,o=null,q,c,g,k=j[l-1]===true&&l--;for(q=0;q<l;q++){g=(""+j[q]).split(".");o=k?f:this;for(c=f[g[0]]===o?1:0;c<g.length;++c)o=o[g[c]]=o[g[c]]||{}}return o},app:function(j,l){var o=n.isString(j),q=o?f[j]||{}:j,c=0,g=n.__APP_INIT_METHODS.length;for(n.mix(q,this,true,n.__APP_MEMBERS);c<g;c++)n[n.__APP_INIT_METHODS[c]].call(q);n.mix(q,n.isFunction(l)?l():l);o&&(f[j]=q);return q},log:function(j,l,o){if(n.Config.debug){if(o)j=
o+": "+j;if(f.console!==u&&console.log)console[l&&console[l]?l:"log"](j)}},error:function(j){if(n.Config.debug)throw j;},guid:function(j){return(j||"")+t++}});n.__init();return n})(this,"KISSY");
(function(f,n){var u=f.__HOST,w=Object.prototype.toString,s=Array.prototype.indexOf,t=Array.prototype.lastIndexOf,j=Array.prototype.filter,l=String.prototype.trim,o=/^\s+|\s+$/g,q={};f.mix(f,{type:function(c){return c==null?String(c):q[w.call(c)]||"object"},isNull:function(c){return c===null},isUndefined:function(c){return c===n},isEmptyObject:function(c){for(var g in c)return false;return true},isPlainObject:function(c){return c&&w.call(c)==="[object Object]"&&"isPrototypeOf"in c},clone:function(c){var g=
c,k,a;if(c&&((k=f.isArray(c))||f.isPlainObject(c))){g=k?[]:{};for(a in c)if(c.hasOwnProperty(a))g[a]=f.clone(c[a])}return g},trim:l?function(c){return c==n?"":l.call(c)}:function(c){return c==n?"":c.toString().replace(o,"")},substitute:function(c,g,k){if(!f.isString(c)||!f.isPlainObject(g))return c;return c.replace(k||/\\?\{([^{}]+)\}/g,function(a,h){if(a.charAt(0)==="\\")return a.slice(1);return g[h]!==n?g[h]:""})},each:function(c,g,k){var a,h=0,b=c.length,d=b===n||f.type(c)==="function";k=k||u;
if(d)for(a in c){if(g.call(k,c[a],a,c)===false)break}else for(a=c[0];h<b&&g.call(k,a,h,c)!==false;a=c[++h]);return c},indexOf:s?function(c,g){return s.call(g,c)}:function(c,g){for(var k=0,a=g.length;k<a;++k)if(g[k]===c)return k;return-1},lastIndexOf:t?function(c,g){return t.call(g,c)}:function(c,g){for(var k=g.length-1;k>=0;k--)if(g[k]===c)break;return k},unique:function(c,g){g&&c.reverse();for(var k=c.slice(),a=0,h,b;a<k.length;){for(b=k[a];(h=f.lastIndexOf(b,k))!==a;)k.splice(h,1);a+=1}g&&k.reverse();
return k},inArray:function(c,g){return f.indexOf(c,g)>-1},filter:j?function(c,g,k){return j.call(c,g,k)}:function(c,g,k){var a=[];f.each(c,function(h,b,d){g.call(k,h,b,d)&&a.push(h)});return a},now:function(){return(new Date).getTime()}});f.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(c,g){q["[object "+c+"]"]=g=c.toLowerCase();f["is"+c]=function(k){return f.type(k)==g}})})(KISSY);
(function(f,n){function u(b){var d=typeof b;return b===null||d!=="object"&&d!=="function"}function w(b){return Array.prototype.slice.call(b)}var s=f.__HOST,t=s.document,j=t.documentElement,l=encodeURIComponent("[]"),o=false,q=[],c=false,g=/^#?([\w-]+)$/,k=/^(\w+)\[\]$/,a=/\S/;f.mix(f,{isWindow:function(b){return f.type(b)==="object"&&"setInterval"in b},makeArray:function(b){if(b===null||b===n)return[];if(f.isArray(b))return b;if(typeof b.length!=="number"||f.isString(b)||f.isFunction(b))return[b];
return w(b)},param:function(b,d){if(!f.isPlainObject(b))return"";d=d||"&";var e=[],i,m;for(i in b){m=b[i];i=encodeURIComponent(i);if(u(m))e.push(i,"=",encodeURIComponent(m+""),d);else if(f.isArray(m)&&m.length)for(var r=0,p=m.length;r<p;++r)u(m[r])&&e.push(i,l+"=",encodeURIComponent(m[r]+""),d)}e.pop();return e.join("")},unparam:function(b,d){if(typeof b!=="string"||(b=f.trim(b)).length===0)return{};for(var e={},i=b.split(d||"&"),m,r,p,v,x=0,y=i.length;x<y;++x){m=i[x].split("=");r=decodeURIComponent(m[0]);
try{p=decodeURIComponent(m[1]||"")}catch(z){p=m[1]||""}if((v=r.match(k))&&v[1]){e[v[1]]=e[v[1]]||[];e[v[1]].push(p)}else e[r]=p}return e},globalEval:function(b){if(b&&a.test(b)){var d=t.getElementsByTagName("head")[0]||j,e=t.createElement("script");e.text=b;d.insertBefore(e,d.firstChild);d.removeChild(e)}},later:function(b,d,e,i,m){d=d||0;i=i||{};var r=b,p=f.makeArray(m),v;if(f.isString(b))r=i[b];r||f.error("method undefined");b=function(){r.apply(i,p)};v=e?setInterval(b,d):setTimeout(b,d);return{id:v,
interval:e,cancel:function(){this.interval?clearInterval(v):clearTimeout(v)}}},ready:function(b){c||this._bindReady();o?b.call(s,this):q.push(b);return this},_bindReady:function(){var b=this,d=t.documentElement.doScroll,e=d?"onreadystatechange":"DOMContentLoaded",i=function(){b._fireReady()};c=true;if(t.readyState==="complete")return i();if(t.addEventListener){var m=function(){t.removeEventListener(e,m,false);i()};t.addEventListener(e,m,false);s.addEventListener("load",i,false)}else{var r=function(){if(t.readyState===
"complete"){t.detachEvent(e,r);i()}};t.attachEvent(e,r);s.attachEvent("onload",i);var p=false;try{p=s.frameElement==null}catch(v){}if(d&&p){var x=function(){try{d("left");i()}catch(y){setTimeout(x,1)}};x()}}},_fireReady:function(){if(!o){o=true;if(q){for(var b,d=0;b=q[d++];)b.call(s,this);q=null}}},available:function(b,d){if((b=(b+"").match(g)[1])&&f.isFunction(d))var e=1,i=f.later(function(){if(t.getElementById(b)&&(d()||1)||++e>500)i.cancel()},40,true)}});try{w(j.childNodes)}catch(h){w=function(b){for(var d=
[],e=b.length-1;e>=0;e--)d[e]=b[e];return d}}if(location&&(location.search||"").indexOf("ks-debug")!==-1)f.Config.debug=true})(KISSY);
(function(f,n){var u=f.__HOST.document,w=u.getElementsByTagName("head")[0]||u.documentElement,s=2,t=3,j=4,l=f.mix,o=u.createElement("script").readyState?function(a,h){var b=a.onreadystatechange;a.onreadystatechange=function(){var d=a.readyState;if(d==="loaded"||d==="complete"){a.onreadystatechange=null;b&&b();h.call(this)}}}:function(a,h){a.addEventListener("load",h,false)},q=/\.css(?:\?|$)/i,c;c={add:function(a,h,b){var d=this.Env.mods,e;if(f.isString(a)&&!b&&f.isPlainObject(h)){e={};e[a]=h;a=e}if(f.isPlainObject(a)){f.each(a,
function(i,m){i.name=m;d[m]&&l(i,d[m],false)});l(d,a)}else{b=b||{};e=d[a]||{};a=b.host||e.host||a;e=d[a]||{};l(e,{name:a,status:s});if(!e.fns)e.fns=[];h&&e.fns.push(h);h=e.requires;l(d[a]=e,b);d[a].requires=h;e.attach!==false&&this.__isAttached(e.requires)&&this.__attachMod(e)}return this},use:function(a,h,b){a=a.replace(/\s+/g,"").split(",");b=b||{};var d=this,e=d.Env.mods,i=(b||0).global,m,r=a.length,p,v,x;i&&d.__mixMods(i);if(d.__isAttached(a))h&&h(d);else{for(m=0;m<r&&(p=e[a[m]]);m++)if(p.status!==
j){if(b.order&&m>0){if(!p.requires)p.requires=[];p._requires=p.requires.concat();v=a[m-1];if(!f.inArray(v,p.requires)&&!f.inArray(p.name,e[v].requires||[]))p.requires.push(v)}d.__attach(p,function(){if(p._requires){p.requires=p._requires;delete p._requires}if(!x&&d.__isAttached(a)){x=true;h&&h(d)}},i)}return d}},__attach:function(a,h,b){function d(){var x=a.requires||[];if(!v&&e.__isAttached(x)){a.status===s&&e.__attachMod(a);if(a.status===j){v=true;h()}}}for(var e=this,i=a.requires||[],m=0,r=i.length;m<
r;m++){var p=e.Env.mods[i[m]];a.status!==j&&e.__attach(p,d,b)}e.__buildPath(a);e.__load(a,d,b);var v=false},__mixMods:function(a){var h=this.Env.mods,b=a.Env.mods,d;for(d in b)this.__mixMod(h,b,d,a)},__mixMod:function(a,h,b,d){var e=a[b]||{},i=e.status;f.mix(e,f.clone(h[b]));if(i)e.status=i;d&&this.__buildPath(e,d.Config.base);a[b]=e},__attachMod:function(a){var h=this;if(a.fns){f.each(a.fns,function(b){b&&b(h)});a.fns=n}a.status=j},__isAttached:function(a){for(var h=this.Env.mods,b,d=(a=f.makeArray(a)).length-
1;d>=0&&(b=h[a[d]]);d--)if(b.status!==j)return false;return true},__load:function(a,h,b){function d(){m[i]=s;if(a.status!==t){b&&e.__mixMod(e.Env.mods,b.Env.mods,a.name,b);if(a.status!==j)a.status=s;h()}}var e=this,i=a.fullpath,m=f.Env._loadQueue,r=m[i];a.status=a.status||0;if(a.status<1&&r)a.status=r.nodeName?1:s;if(f.isString(a.cssfullpath)){e.getScript(a.cssfullpath);a.cssfullpath=s}if(a.status<1&&i){a.status=1;r=e.getScript(i,{success:function(){KISSY.log(a.name+" is loaded.","info");d()},error:function(){a.status=
t;m[i]=s},charset:a.charset});q.test(i)||(m[i]=r)}else a.status===1?o(r,d):h()},__buildPath:function(a,h){function b(e,i){if(!a[i]&&a[e])a[i]=(h||d.base)+a[e];if(a[i]&&d.debug)a[i]=a[i].replace(/-min/g,"")}var d=this.Config;b("path","fullpath");a.cssfullpath!==s&&b("csspath","cssfullpath")},getScript:function(a,h,b){var d=q.test(a),e=u.createElement(d?"link":"script"),i=h,m,r,p;if(f.isPlainObject(i)){h=i.success;m=i.error;r=i.timeout;b=i.charset}if(d){e.href=a;e.rel="stylesheet"}else{e.src=a;e.async=
true}if(b)e.charset=b;if(d)f.isFunction(h)&&h.call(e);else o(e,function(){if(p){p.cancel();p=n}f.isFunction(h)&&h.call(e);w&&e.parentNode&&w.removeChild(e)});if(f.isFunction(m))p=f.later(function(){p=n;m()},(r||this.Config.timeout)*1E3);w.insertBefore(e,w.firstChild);return e}};l(f,c);var g=/^(.*)(seed|kissy)(-min)?\.js[^/]*/i,k=/(seed|kissy)(-min)?\.js/;f.__initLoader=function(){var a=u.getElementsByTagName("script");a=a[a.length-1];var h=a.src,b=a.getAttribute("data-combo-prefix")||"??";a=a.getAttribute("data-combo-sep")||
",";a=h.split(a);var d=a[0];b=d.indexOf(b);if(b==-1)h=h.replace(g,"$1");else{h=d.substring(0,b);b=d.substring(b+2,d.length);if(b.match(k))h+=b.replace(g,"$1");else for(b=1;b<a.length;b++){d=a[b];if(d.match(k)){h+=d.replace(g,"$1");break}}}a=h;this.Env.mods={};this.Env._loadQueue={};if(!this.Config.base)this.Config.base=a;if(!this.Config.timeout)this.Config.timeout=10};f.__initLoader();f.each(c,function(a,h){f.__APP_MEMBERS.push(h)});f.__APP_INIT_METHODS.push("__initLoader")})(KISSY);
(function(f){var n={core:{path:"packages/core-min.js",charset:"utf-8"}};f.each(["sizzle","dd","datalazyload","flash","switchable","suggest","calendar","uibase","overlay","imagezoom"],function(u){n[u]={path:u+"/"+u+"-pkg-min.js",requires:["core"],charset:"utf-8"}});n.calendar.csspath="calendar/default-min.css";n.overlay.requires=["uibase"];f.add(n)})(KISSY);
