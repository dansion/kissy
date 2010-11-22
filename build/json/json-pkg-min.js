/*
Copyright 2010, KISSY UI Library v1.1.5
MIT Licensed
build time: Nov 22 18:23
*/
KISSY.add("json",function(l){function m(b){return b<10?"0"+b:b}function p(b){q.lastIndex=0;return q.test(b)?'"'+b.replace(q,function(f){var c=s[f];return typeof c==="string"?c:"\\u"+("0000"+f.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+b+'"'}function n(b,f){var c,d,g,j,i=h,e,a=f[b];if(a&&typeof a==="object"&&typeof a.toJSON==="function")a=a.toJSON(b);if(typeof k==="function")a=k.call(f,b,a);switch(typeof a){case "string":return p(a);case "number":return isFinite(a)?String(a):"null";case "boolean":case "null":return String(a);
case "object":if(!a)return"null";h+=o;e=[];if(Object.prototype.toString.apply(a)==="[object Array]"){j=a.length;for(c=0;c<j;c+=1)e[c]=n(c,a)||"null";g=e.length===0?"[]":h?"[\n"+h+e.join(",\n"+h)+"\n"+i+"]":"["+e.join(",")+"]";h=i;return g}if(k&&typeof k==="object"){j=k.length;for(c=0;c<j;c+=1){d=k[c];if(typeof d==="string")if(g=n(d,a))e.push(p(d)+(h?": ":":")+g)}}else for(d in a)if(Object.hasOwnProperty.call(a,d))if(g=n(d,a))e.push(p(d)+(h?": ":":")+g);g=e.length===0?"{}":h?"{\n"+h+e.join(",\n"+h)+
"\n"+i+"}":"{"+e.join(",")+"}";h=i;return g}}l=l.JSON=window.JSON||{};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+m(this.getUTCMonth()+1)+"-"+m(this.getUTCDate())+"T"+m(this.getUTCHours())+":"+m(this.getUTCMinutes())+":"+m(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var r=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
q=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,h,o,s={"":"\\b","\t":"\\t","\n":"\\n","":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;if(typeof l.stringify!=="function")l.stringify=function(b,f,c){var d;o=h="";if(typeof c==="number")for(d=0;d<c;d+=1)o+=" ";else if(typeof c==="string")o=c;if((k=f)&&typeof f!=="function"&&(typeof f!=="object"||typeof f.length!=="number"))throw Error("JSON.stringify");return n("",{"":b})};if(typeof l.parse!==
"function")l.parse=function(b,f){function c(g,j){var i,e,a=g[j];if(a&&typeof a==="object")for(i in a)if(Object.hasOwnProperty.call(a,i)){e=c(a,i);if(e!==undefined)a[i]=e;else delete a[i]}return f.call(g,j,a)}var d;b=String(b);r.lastIndex=0;if(r.test(b))b=b.replace(r,function(g){return"\\u"+("0000"+g.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,
""))){d=eval("("+b+")");return typeof f==="function"?c({"":d},""):d}throw new SyntaxError("JSON.parse");}});
