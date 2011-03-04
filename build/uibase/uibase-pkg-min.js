/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("uibase/align",function(d,c){function a(){}function e(h,b){var i=d.require("node/node"),l=b.charAt(0),o=b.charAt(1),g,f,j;if(h){h=i.one(h);g=h.offset();i=h[0].offsetWidth;f=h[0].offsetHeight}else{g={left:c.scrollLeft(),top:c.scrollTop()};i=c.viewportWidth();f=c.viewportHeight()}j=g.left;g=g.top;if(l==="c")g+=f/2;else if(l==="b")g+=f;if(o==="c")j+=i/2;else if(o==="r")j+=i;return{left:j,top:g}}d.mix(a,{TL:"tl",TC:"tc",TR:"tr",CL:"cl",CC:"cc",CR:"cr",BL:"bl",BC:"bc",BR:"br"});a.ATTRS={align:{}};
a.prototype={_uiSetAlign:function(h){d.isPlainObject(h)&&this.align(h.node,h.points,h.offset)},align:function(h,b,i){var l,o=(this.get("view")||this).get("el");i=i||[0,0];l=o.offset();h=e(h,b[0]);b=e(o,b[1]);b=[b.left-h.left,b.top-h.top];l=[l.left-b[0]+ +i[0],l.top-b[1]+ +i[1]];this.set("x",l[0]);this.set("y",l[1])},center:function(h){this.set("align",{node:h,points:[a.CC,a.CC],offset:[0,0]})}};return a},{requires:["dom"]});
KISSY.add("uibase/base",function(d,c){function a(g){c.apply(this,arguments);for(var f=this.constructor;f;){if(g&&g[b]&&f.HTML_PARSER)if(g[b]=i.one(g[b])){var j=g[b],k=f.HTML_PARSER,m=void 0,n=void 0;for(m in k)if(k.hasOwnProperty(m)){n=k[m];if(d.isFunction(n))this.__set(m,n.call(this,j));else if(d.isString(n))this.__set(m,j.one(n));else d.isArray(n)&&n[0]&&this.__set(m,j.all(n[0]))}}f=f.superclass&&f.superclass.constructor}e(this,"initializer","constructor");g&&g.autoRender&&this.render()}function e(g,
f,j){for(var k=g.constructor,m=[],n,p,s,r;k;){r=[];if(s=k.__ks_exts)for(var q=0;q<s.length;q++)if(n=s[q]){if(j!="constructor")n=n.prototype.hasOwnProperty(j)?n.prototype[j]:null;n&&r.push(n)}if(k.prototype.hasOwnProperty(f)&&(p=k.prototype[f]))r.push(p);r.length&&m.push.apply(m,r.reverse());k=k.superclass&&k.superclass.constructor}for(q=m.length-1;q>=0;q--)m[q]&&m[q].call(g)}function h(g,f){if(!f)return g;for(var j in f)if(d.isObject(f[j])&&d.isObject(g[j]))h(g[j],f[j]);else j in g||(g[j]=f[j])}var b=
"srcNode",i=d.require("node/node"),l=d.require("base/attribute").__capitalFirst,o=function(){};a.HTML_PARSER={};a.ATTRS={render:{valueFn:function(){return document.body},setter:function(g){if(d.isString(g))return i.one(g)}},rendered:{value:false}};d.extend(a,c,{render:function(){if(!this.get("rendered")){this._renderUI();this.fire("renderUI");e(this,"renderUI","__renderUI");this.fire("afterRenderUI");this._bindUI();this.fire("bindUI");e(this,"bindUI","__bindUI");this.fire("afterBindUI");this._syncUI();
this.fire("syncUI");e(this,"syncUI","__syncUI");this.fire("afterSyncUI");this.set("rendered",true)}},_renderUI:o,renderUI:o,_bindUI:function(){var g=this,f=g.__getDefAttrs(),j,k;for(j in f)if(f.hasOwnProperty(j)){k="_uiSet"+l(j);g[k]&&function(m,n){g.on("after"+l(m)+"Change",function(p){g[n](p.newVal,p)})}(j,k)}},bindUI:o,_syncUI:function(){var g=this.__getDefAttrs(),f;for(f in g)if(g.hasOwnProperty(f)){var j="_uiSet"+l(f);this[j]&&this.get(f)!==undefined&&this[j](this.get(f))}},syncUI:o,destroy:function(){for(var g=
this.constructor,f,j,k;g;){(j=g.prototype.destructor)&&j.apply(this);if(f=g.__ks_exts)for(k=f.length-1;k>=0;k--)(j=f[k]&&f[k].prototype.__destructor)&&j.apply(this);g=g.superclass&&g.superclass.constructor}this.fire("destroy");this.detach()}});a.create=function(g,f,j,k){function m(){a.apply(this,arguments)}if(d.isArray(g)){k=j;j=f;f=g;g=a}g=g||a;if(d.isObject(f)){k=j;j=f;f=[]}d.extend(m,g,j,k);if(f){m.__ks_exts=f;d.each(f,function(n){if(n){d.each(["ATTRS","HTML_PARSER"],function(p){if(n[p]){m[p]=
m[p]||{};h(m[p],n[p])}});d.augment(m,n,false)}})}return m};return a},{requires:["base","dom","node"]});
KISSY.add("uibase/box",function(){function d(){}d.ATTRS={html:{},width:{},height:{},elCls:{},elStyle:{},el:{getter:function(){return this.get("view").get("el")}}};d.prototype={_uiSetElStyle:function(c){this._forwordStateToView("elStyle",c)},_uiSetHtml:function(c){this._forwordStateToView("html",c)},_uiSetWidth:function(c){this._forwordStateToView("width",c)},_uiSetHeight:function(c){this._forwordStateToView("height",c)},_uiSetElCls:function(c){this._forwordStateToView("elCls",c)}};return d});
KISSY.add("uibase/boxrender",function(d){function c(){}d.mix(c,{APPEND:1,INSERT:0});c.ATTRS={el:{setter:function(a){var e=d.require("node/node");if(d.isString(a))return e.one(a)}},elCls:{},elStyle:{},width:{},height:{},elTagName:{value:"div"},elAttrs:{},elOrder:{value:1},html:{}};c.HTML_PARSER={el:function(a){return a}};c.prototype={__renderUI:function(){var a=d.require("node/node"),e=this.get("render"),h=this.get("el");e=new a(e);if(!h){h=new a("<"+this.get("elTagName")+">");this.get("elOrder")?
e.append(h):e.prepend(h);this.set("el",h)}},_uiSetElAttrs:function(a){this.get("el").attr(a)},_uiSetElCls:function(a){this.get("el").addClass(a)},_uiSetElStyle:function(a){this.get("el").css(a)},_uiSetWidth:function(a){this.get("el").width(a)},_uiSetHeight:function(a){this.get("el").height(a)},_uiSetHtml:function(a){this.get("el").html(a)},__destructor:function(){var a=this.get("el");if(a){a.detach();a.remove()}}};return c});
KISSY.add("uibase/close",function(){function d(){}d.ATTRS={closable:{value:true}};d.prototype={_uiSetClosable:function(c){this._forwordStateToView("closable",c)},__bindUI:function(){var c=this,a=c.get("view").get("closeBtn");a&&a.on("click",function(e){c.hide();e.halt()})}};return d});
KISSY.add("uibase/closerender",function(d){function c(){}c.ATTRS={closable:{value:true},closeBtn:{}};c.HTML_PARSER={closeBtn:function(a){return a.one("."+this.get("prefixCls")+"ext-close")}};c.prototype={_uiSetClosable:function(a){var e=this.get("closeBtn");if(e)a?e.css("display",""):e.css("display","none")},__renderUI:function(){var a=d.require("node/node"),e=this.get("closeBtn"),h=this.get("contentEl");if(!e&&h){e=(new a("<a href='#' class='"+this.get("prefixCls")+"ext-close'><span class='"+this.get("prefixCls")+
"ext-close-x'>X</span></a>")).appendTo(h);this.set("closeBtn",e)}},__destructor:function(){var a=this.get("closeBtn");a&&a.detach()}};return c});
KISSY.add("uibase/constrain",function(d,c){function a(){}function e(b){var i;if(!b)return i;var l=this.get("view").get("el");if(b!==true){b=h.one(b);i=b.offset();d.mix(i,{maxLeft:i.left+b[0].offsetWidth-l[0].offsetWidth,maxTop:i.top+b[0].offsetHeight-l[0].offsetHeight})}else{b=document.documentElement.clientWidth;i={left:c.scrollLeft(),top:c.scrollTop()};d.mix(i,{maxLeft:i.left+b-l[0].offsetWidth,maxTop:i.top+c.viewportHeight()-l[0].offsetHeight})}return i}var h=d.require("node/node");a.ATTRS={constrain:{value:false}};
a.prototype={__renderUI:function(){var b=this,i=b.__getDefAttrs(),l=i.x;i=i.y;var o=l.setter,g=i.setter;l.setter=function(f){var j=o&&o(f);if(j===undefined)j=f;if(!b.get("constrain"))return j;f=e.call(b,b.get("constrain"));return Math.min(Math.max(j,f.left),f.maxLeft)};i.setter=function(f){var j=g&&g(f);if(j===undefined)j=f;if(!b.get("constrain"))return j;f=e.call(b,b.get("constrain"));return Math.min(Math.max(j,f.top),f.maxTop)};b.addAttr("x",l);b.addAttr("y",i)}};return a},{requires:["dom","node"]});
KISSY.add("uibase/contentbox",function(){function d(){}d.ATTRS={content:{},contentEl:{getter:function(){return this.get("view").get("contentEl")}}};d.prototype={_uiSetContent:function(c){this._forwordStateToView("content",c)}};return d});
KISSY.add("uibase/contentboxrender",function(d,c){function a(){}a.ATTRS={contentEl:{},contentElAttrs:{},contentElStyle:{},contentTagName:{value:"div"},content:{}};a.HTML_PARSER={contentEl:function(e){return e.one("."+this.get("prefixCls")+"contentbox")}};a.prototype={__renderUI:function(){var e=this.get("contentEl"),h=this.get("el");if(!e){var b=d.makeArray(h[0].childNodes);e=(new c("<"+this.get("contentTagName")+" class='"+this.get("prefixCls")+"contentbox'>")).appendTo(h);for(h=0;h<b.length;h++)e.append(b[h]);
this.set("contentEl",e)}},_uiSetContentElAttrs:function(e){e&&this.get("contentEl").attr(e)},_uiSetContentElStyle:function(e){e&&this.get("contentEl").css(e)},_uiSetContent:function(e){if(d.isString(e))this.get("contentEl").html(e);else if(e!==undefined){this.get("contentEl").html("");this.get("contentEl").append(e)}}};return a},{requires:["node"]});
KISSY.add("uibase/drag",function(d){function c(){}c.ATTRS={handlers:{value:[]},draggable:{value:true}};c.prototype={_uiSetHandlers:function(a){a&&a.length>0&&this.__drag&&this.__drag.set("handlers",a)},__bindUI:function(){var a=d.require("dd/draggable"),e=this.get("view").get("el");if(this.get("draggable")&&a)this.__drag=new a({node:e,handlers:this.get("handlers")})},_uiSetDraggable:function(a){var e=this.__drag;if(e)if(a){e.detach("drag");e.on("drag",this._dragExtAction,this)}else e.detach("drag")},
_dragExtAction:function(a){this.set("xy",[a.left,a.top])},__destructor:function(){var a=this.__drag;a&&a.destroy()}};return c});KISSY.add("uibase/loading",function(){function d(){}d.prototype={loading:function(){this.get("view").loading()},unloading:function(){this.get("view").unloading()}};return d});
KISSY.add("uibase/loadingrender",function(d){function c(){}c.prototype={loading:function(){if(!this._loadingExtEl)this._loadingExtEl=(new (d.require("node/node"))("<div class='ks-ext-loading' style='position: absolute;border: none;width: 100%;top: 0;left: 0;z-index: 99999;height:100%;*height: expression(this.parentNode.offsetHeight);'>")).appendTo(this.get("el"));this._loadingExtEl.show()},unloading:function(){var a=this._loadingExtEl;a&&a.hide()}};return c});
KISSY.add("uibase/mask",function(){function d(){}d.ATTRS={mask:{value:false}};d.prototype={_uiSetMask:function(c){if(c){this.on("show",this.get("view")._maskExtShow);this.on("hide",this.get("view")._maskExtHide)}else{this.detach("show",this.get("view")._maskExtShow);this.detach("hide",this.get("view")._maskExtHide)}}};return d},{requires:["ua"]});
KISSY.add("uibase/maskrender",function(d){function c(){}var a,e=0;c.prototype={_maskExtShow:function(){if(!a){var h=d.require("ua"),b=d.require("node/node"),i=d.require("dom");a=(new b("<div class='ks-ext-mask'>")).prependTo(document.body);a.css({position:"absolute",left:0,top:0,width:h.ie==6?i.docWidth():"100%",height:i.docHeight()});h.ie==6&&a.append("<iframe style='width:100%;height:expression(this.parentNode.offsetHeight);filter:alpha(opacity=0);z-index:-1;'>")}a.css({"z-index":this.get("zIndex")-
1});e++;a.css("display","")},_maskExtHide:function(){e--;if(e<=0)e=0;e||a&&a.css("display","none")}};return c},{requires:["ua"]});
KISSY.add("uibase/position",function(d,c,a){function e(){}var h=document;e.ATTRS={x:{},y:{},xy:{setter:function(b){var i=d.makeArray(b);if(i.length){i[0]&&this.set("x",i[0]);i[1]&&this.set("y",i[1])}return b}},zIndex:{value:9999},visible:{value:undefined}};e.prototype={_uiSetZIndex:function(b){this._forwordStateToView("zIndex",b)},_uiSetX:function(b){this._forwordStateToView("x",b)},_uiSetY:function(b){this._forwordStateToView("y",b)},_uiSetVisible:function(b){this._forwordStateToView("visible",b);
this[b?"_bindKey":"_unbindKey"]();this.fire(b?"show":"hide")},_bindKey:function(){a.on(h,"keydown",this._esc,this)},_unbindKey:function(){a.remove(h,"keydown",this._esc,this)},_esc:function(b){b.keyCode===27&&this.hide()},move:function(b,i){if(d.isArray(b)){i=b[1];b=b[0]}this.set("xy",[b,i])},show:function(){this.render();this.set("visible",true);this.fire("show")},hide:function(){this.set("visible",false);this.fire("hide")}};return e},{requires:["dom","event"]});
KISSY.add("uibase/positionrender",function(){function d(){}d.ATTRS={x:{},y:{},zIndex:{value:9999},visible:{}};d.prototype={__renderUI:function(){var c=this.get("el");c.addClass("ks-ext-position");c.css("display","")},_uiSetZIndex:function(c){this.get("el").css("z-index",c)},_uiSetX:function(c){this.get("el").offset({left:c})},_uiSetY:function(c){this.get("el").offset({top:c})},_uiSetVisible:function(c){this.get("el").css("visibility",c?"visible":"hidden")},show:function(){this.render();this.set("visible",
true)},hide:function(){this.set("visible",false)}};return d});KISSY.add("uibase/resize",function(d){function c(){}c.ATTRS={resize:{value:{}}};c.prototype={__destructor:function(){self.resizer&&self.resizer.destroy()},_uiSetResize:function(a){var e=d.require("resizable");if(e){this.resizer&&this.resizer.destroy();a.node=this.get("view").get("el");a.autoRender=true;if(a.handlers)this.resizer=new e(a)}}};return c});
KISSY.add("uibase/shimrender",function(d){function c(){}c.ATTRS={shim:{value:true}};c.prototype={_uiSetShim:function(a){var e=d.require("node/node"),h=this.get("el");if(a&&!this.__shimEl){this.__shimEl=new e("<iframe style='position: absolute;border: none;width: expression(this.parentNode.offsetWidth);top: 0;opacity: 0;filter: alpha(opacity=0);left: 0;z-index: -1;height: expression(this.parentNode.offsetHeight);'>");h.prepend(this.__shimEl)}else if(!a&&this.__shimEl){this.__shimEl.remove();delete this.__shimEl}}};
return c});
KISSY.add("uibase/stdmod",function(){function d(){}d.ATTRS={header:{getter:function(){return this.get("view").get("header")}},body:{getter:function(){return this.get("view").get("body")}},footer:{getter:function(){return this.get("view").get("footer")}},bodyStyle:{},footerStyle:{},headerStyle:{},headerContent:{},bodyContent:{},footerContent:{}};d.prototype={_uiSetBodyStyle:function(c){this._forwordStateToView("bodyStyle",c)},_uiSetHeaderStyle:function(c){this._forwordStateToView("headerStyle",c)},
_uiSetFooterStyle:function(c){this._forwordStateToView("footerStyle",c)},_uiSetBodyContent:function(c){this._forwordStateToView("bodyContent",c)},_uiSetHeaderContent:function(c){this._forwordStateToView("headerContent",c)},_uiSetFooterContent:function(c){this._forwordStateToView("footerContent",c)}};return d});
KISSY.add("uibase/stdmodrender",function(d,c){function a(){}function e(b,i){var l=b.get("contentEl"),o=b.get(i);if(!o){o=(new c("<div class='"+b.get("prefixCls")+h+i+"'>")).appendTo(l);b.set(i,o)}}var h="stdmod-";a.ATTRS={header:{},body:{},footer:{},bodyStyle:{},footerStyle:{},headerStyle:{},headerContent:{},bodyContent:{},footerContent:{}};a.HTML_PARSER={header:function(b){return b.one("."+this.get("prefixCls")+h+"header")},body:function(b){return b.one("."+this.get("prefixCls")+h+"body")},footer:function(b){return b.one("."+
this.get("prefixCls")+h+"footer")}};a.prototype={_setStdModContent:function(b,i){if(d.isString(i))this.get(b).html(i);else{this.get(b).html("");this.get(b).append(i)}},_uiSetBodyStyle:function(b){this.get("body").css(b)},_uiSetHeaderStyle:function(b){this.get("header").css(b)},_uiSetFooterStyle:function(b){this.get("footer").css(b)},_uiSetBodyContent:function(b){this._setStdModContent("body",b)},_uiSetHeaderContent:function(b){this._setStdModContent("header",b)},_uiSetFooterContent:function(b){this._setStdModContent("footer",
b)},__renderUI:function(){e(this,"header");e(this,"body");e(this,"footer")}};return a},{requires:["node"]});
KISSY.add("uibase",function(d,c,a,e,h,b,i,l,o,g,f,j,k,m,n,p,s,r,q,t,u){b.Render=i;j.Render=k;m.Render=n;p.Render=s;t.Render=u;e.Render=h;o.Render=g;d.mix(c,{Align:a,Box:e,Close:b,Contrain:l,Contentbox:o,Drag:f,Loading:j,Mask:m,Position:p,Shim:{Render:r},Resize:q,StdMod:t});return d.UIBase=c},{requires:["uibase/base","uibase/align","uibase/box","uibase/boxrender","uibase/close","uibase/closerender","uibase/constrain","uibase/contentbox","uibase/contentboxrender","uibase/drag","uibase/loading","uibase/loadingrender",
"uibase/mask","uibase/maskrender","uibase/position","uibase/positionrender","uibase/shimrender","uibase/resize","uibase/stdmod","uibase/stdmodrender"]});
