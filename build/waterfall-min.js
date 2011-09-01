/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Sep 1 12:22
*/
KISSY.add("waterfall/async",function(f,l,n,m,p){function i(){i.superclass.constructor.apply(this,arguments)}function q(){if(!this.__loading){var a=this.get("container").offset().top,b=this.get("diff"),c=this.get("curColHeights");if(c.length)a+=Math.min.apply(Math,c);b+g(window).scrollTop()+g(window).height()>a&&o.call(this)}}function o(){var a=this;this.get("container");a.__loading=true;var b=a.get("remote");if(f.isFunction(b))b=b();n(f.mix({success:function(c){c.end&&g(window).detach("scroll",onScroll,
a);a.__loading=false;c=c.data;var d=m(a.get("itemTpl")),e=[];f.each(c,function(j){j=d.render(j);e.push(g(j))});a.addItems(e)}},b))}var g=l.all;i.ATTRS={remote:{},diff:{getter:function(a){return a||0}},itemTpl:{}};f.extend(i,p,{_init:function(){i.superclass._init.apply(this,arguments);this.__onScroll=f.buffer(q,50,this).fn;g(window).on("scroll",this.__onScroll);o.call(this)},destroy:function(){i.superclass.destroy.apply(this,arguments);g(window).detach("scroll",this.__onScroll)}});return i},{requires:["node",
"ajax","template","./base"]});
KISSY.add("waterfall/base",function(f,l,n){function m(){m.superclass.constructor.apply(this,arguments);this._init()}function p(a,b,c,d){var e=f.makeArray(a),j={},h;if(e.length>0)h=setTimeout(function(){var k=+new Date;do{var r=e.shift();b.call(c,r)}while(e.length>0&&+new Date-k<50);if(e.length>0)h=setTimeout(arguments.callee,25);else d&&d.call(c,a)},25);else d&&d.call(c,a);j.stop=function(){if(h){clearTimeout(h);e=[]}};return j}function i(){var a=this,b=a.get("container"),c=a._containerRegion;if(b.width()!==
c.width){if(a._resizer){a._resizer.stop();a._resizer=0}q.call(a);a._resizer=a.adjust(function(){a._resizer=0})}}function q(){var a=this.get("container").width(),b=this.get("curColHeights");b.length=Math.max(parseInt(a/this.get("colWidth")),this.get("minColCount"));this._containerRegion={width:a};f.each(b,function(c,d){b[d]=0})}function o(a){a=g(a);for(var b=this.get("curColHeights"),c=this.get("container"),d=b.length,e=0,j=this._containerRegion,h=Number.MAX_VALUE,k=0;k<d;k++)if(b[k]<h){h=b[k];e=k}d||
(h=0);d=(j.width-d*this.get("colWidth"))/2;a.css({position:"absolute",left:e*this.get("colWidth")+d,top:h});c.contains(a)||c.append(a);b[e]+=a.height();return a}var g=l.all;m.ATTRS={container:{setter:function(a){return g(a)}},curColHeights:{value:[]},minColCount:{value:1},effect:{value:{effect:"fadeIn",duration:1}},colWidth:{}};f.extend(m,n,{_init:function(){q.call(this);this.__onResize=f.buffer(i,50,this).fn;g(window).on("resize",this.__onResize)},adjust:function(a){var b=this,c=b.get("container").all(".ks-waterfall");
return p(c,o,b,function(){b.get("container").height(Math.max.apply(Math,b.get("curColHeights")));a&&a.call(b)})},addItems:function(a,b){var c=this;if(!c._resizer)return p(a,c.addItem,c,function(){c.get("container").height(Math.max.apply(Math,c.get("curColHeights")));b&&b.call(c)})},addItem:function(a){this.get("curColHeights");this.get("container");a=o.call(this,a);var b=this.get("effect");b.effect&&a[b.effect](b.duration,undefined,b.easing)},destroy:function(){g(window).detach("resize",this.__onResize)}});
return m},{requires:["node","base"]});KISSY.add("waterfall",function(f,l,n){l.Async=n;return l},{requires:["waterfall/base","waterfall/async"]});
