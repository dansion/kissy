/*
Copyright 2011, KISSY UI Library v1.1.8dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("waterfall",function(e,n){function i(){i.superclass.constructor.apply(this,arguments);this._init()}function k(b,a,c,d){var f=e.makeArray(b),j={},g;if(f.length>0)g=setTimeout(function(){var h=+new Date;do{var o=f.shift();a.call(c,o)}while(f.length>0&&+new Date-h<50);if(f.length>0)g=setTimeout(arguments.callee,25);else d&&d.call(c,b)},25);else d&&e.later(d,0,false,c,[b]);j.stop=function(){if(g){clearTimeout(g);f=[]}};return j}function l(){var b=this._containerRegion;b&&this.get("container").width()===
b.width||this.adjust()}function p(){var b=this.get("container").width(),a=this.get("curColHeights");a.length=Math.max(parseInt(b/this.get("colWidth")),this.get("minColCount"));this._containerRegion={width:b};e.each(a,function(c,d){a[d]=0})}function m(b){b=new e.Node(b);for(var a=this.get("curColHeights"),c=this.get("container"),d=a.length,f=0,j=this._containerRegion,g=Number.MAX_VALUE,h=0;h<d;h++)if(a[h]<g){g=a[h];f=h}d||(g=0);d=Math.max(j.width-d*this.get("colWidth"),0)/2;b.css({left:f*this.get("colWidth")+
d,top:g});c.contains(b)||c.append(b);a[f]+=b.height();return b}var q=e.Base;e.mix(e,{buffer:function(b,a,c){function d(){d.stop();f=e.later(b,a,false,c||this)}a=a||150;if(a===-1)return function(){b.apply(c||this,arguments)};var f=0;d.stop=function(){if(f){f.cancel();f=0}};return d}});i.ATTRS={container:{setter:function(b){return e.one(b)}},curColHeights:{value:[]},minColCount:{value:1},effect:{value:{effect:"fadeIn",duration:1}},colWidth:{}};e.extend(i,q,{isAdjusting:function(){return!!this._adjuster},
_init:function(){l.call(this);this.__onResize=e.buffer(l,50,this);e.Event.on(window,"resize",this.__onResize)},adjust:function(b){var a=this,c=a.get("container").all(".ks-waterfall");a.isAdjusting()&&a._adjuster.stop();p.call(a);return a._adjuster=k(c,m,a,function(){a.get("container").height(Math.max.apply(Math,a.get("curColHeights")));a._adjuster=0;b&&b.call(a)})},addItems:function(b,a){var c=this;c._adder=k(b,c._addItem,c,function(){c.get("container").height(Math.max.apply(Math,c.get("curColHeights")));
c._adder=0;a&&a.call(c)});return c._adder},_addItem:function(b){this.get("curColHeights");this.get("container");b=m.call(this,b);var a=this.get("effect");a.effect&&b[a.effect](a.duration,n,a.easing)},destroy:function(){e.Event.remove(window,"resize",this.__onResize)}});e.Waterfall={};e.Waterfall.Intervein=i});
