/*
Copyright 2010, KISSY UI Library v1.1.5
MIT Licensed
build time: Nov 22 18:22
*/
KISSY.add("flash",function(f){f.Flash={swfs:{},length:0,version:"1.2"}},{requires:["core"]});
KISSY.add("flash-ua",function(f){function l(i){var j=f.isString(i)?i.match(/(\d)+/g):i;i=i;if(f.isArray(j))i=parseFloat(j[0]+"."+n(j[1],3)+n(j[2],5));return i||0}function n(i,j){for(var p=(i+"").length;p++<j;)i="0"+i;return i}var k=f.UA,o,e,q=true;k.fpv=function(i){if(i||q){q=false;var j;if(navigator.plugins&&navigator.mimeTypes.length)j=(navigator.plugins["Shockwave Flash"]||0).description;else if(window.ActiveXObject)try{j=(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version")}catch(p){}o=
j?j.match(/(\d)+/g):void 0;e=l(o)}return o};k.fpvGEQ=function(i,j){q&&k.fpv(j);return!!e&&e>=l(i)}},{host:"flash"});
KISSY.add("flash-embed",function(f){function l(a,b){return i+a+j+p+b+p}function n(a,b){return'<param name="'+a+'" value="'+b+'" />'}var k=f.UA,o=f.DOM,e=f.Flash,q=/^(?:object|embed)/i,i=" ",j="=",p='"',r=Object.prototype,s=encodeURIComponent,t={wmode:"",allowscriptaccess:"",allownetworking:"",allowfullscreen:"",play:"false",loop:"",menu:"",quality:"",scale:"",salign:"",bgcolor:"",devicefont:"",base:"",swliveconnect:"",seamlesstabbing:""},u={params:{},attrs:{width:215,height:138},version:9};f.mix(e,
{fpv:k.fpv,fpvGEQ:k.fpvGEQ,add:function(a,b,c){var g,h,d,m;b=e._normalize(b);b=f.merge(u,b);b.attrs=f.merge(u.attrs,b.attrs);h=a.replace("#","");if(!(a=f.get(a))){a=o.create("<div id="+h+">");document.body.appendChild(a)}m=a.nodeName.toLowerCase();d=!q.test(m);if(!a.id)a.id=f.guid("ks-flash-container-");h=a.id;if(!b.id)b.id=f.guid("ks-flash-");b.attrs.id=b.id;if(k.fpv()){if(!k.fpvGEQ(b.version)){e._callback(c,0,h,a,d);if(!((g=b.xi)&&f.isString(g)))return;b.src=g}if(d)b.src?e._embed(a,b,c):e._callback(c,
-3,h,a,d);else{if(m=="object")if(k.gecko||k.opera)a=f.query("object",a)[0]||a;b.attrs.id=h;e._register(a,b,c,d)}}else e._callback(c,-1,h,a,d)},get:function(a){return e.swfs[a]},remove:function(a){if(a=e.get("#"+a)){o.remove(a);delete e.swfs[a.id];e.length-=1}},contains:function(a){var b=e.swfs,c,g=false;if(f.isString(a))g=a in b;else for(c in b)if(b[c]===a){g=true;break}return g},_register:function(a,b,c,g){b=b.attrs.id;e._addSWF(b,a);e._callback(c,1,b,a,g)},_embed:function(a,b,c){var g=e._stringSWF(b);
a.innerHTML=g;a=f.get("#"+b.id);e._register(a,b,c,true)},_callback:function(a,b,c,g,h){b&&f.isFunction(a)&&a({status:b,id:c,swf:g,dynamic:!!h})},_addSWF:function(a,b){if(a&&b){e.swfs[a]=b;e.length+=1}},_stringSWF:function(a){var b;var c=b="",g=a.src,h=a.attrs;a=a.params;var d,m;if(k.ie){m="object";for(d in h)if(h[d]!=r[d])if(d!="classid"&&d!="data")b+=l(d,h[d]);b+=l("classid","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");for(d in a)if(d in t)c+=n(d,a[d]);c+=n("movie",g);if(a.flashvars)c+=n("flashvars",
e.toFlashVars(a.flashvars));b="<"+m+b+">"+c+"</"+m+">"}else{m="embed";b+=l("src",g);for(d in h)if(h[d]!=r[d])if(d!="classid"&&d!="data")b+=l(d,h[d]);b+=l("type","application/x-shockwave-flash");for(d in a)if(d in t)c+=l(d,a[d]);if(a.flashvars)c+=l("flashvars",e.toFlashVars(a.flashvars));b="<"+m+b+c+"/>"}return b},_normalize:function(a){var b,c,g,h=a||{};if(f.isPlainObject(a)){h={};for(g in a){b=g.toLowerCase();c=a[g];if(b!=="flashvars")c=e._normalize(c);h[b]=c}}return h},toFlashVars:function(a){if(!f.isPlainObject(a))return"";
var b,c,g=[];for(b in a){c=a[b];if(f.isString(c))c=s(c);else{c=f.JSON.stringify(c);if(!c)continue;c=c.replace(/:"([^"]+)/g,function(h,d){return':"'+s(d)})}g.push(b+"="+c)}return g.join("&").replace(/"/g,"'")}})},{host:"flash"});
