/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: ${build.time}
*/
KISSY.add("menubutton/menubutton",function(i,f,g,b){var d=f.create(g,{_hideMenu:function(){this.get("view").get("el");this.get("menu").hide();this.get("view").set("collapsed",true)},_showMenu:function(){var a=this.get("view"),c=a.get("el"),e=this.get("menu");if(!e.get("visible")){e.set("align",{node:c,points:["bl","tl"]});e.render();e.show();a.set("collapsed",false)}},bindUI:function(){var a=this,c=a.get("view").get("el"),e=this.get("menu");e.on("afterSelectedItemChange",function(h){a.set("selectedItem",
h.newVal)});e.on("menuItemSelected",function(){a.get("selectedItem")&&a.fire("menuItemSelected")});e.on("afterHighlightedItemChange",function(h){setTimeout(function(){h.newVal?c.attr("aria-activedescendant",h.newVal.get("view").get("el").attr("id")):c.attr("aria-activedescendant"," ")},0)})},_handleKeydown:function(a){var c=this.get("menu");c&&c.get("visible")&&c._handleKeydown(a);if(a.keyCode==27){a.preventDefault();this._hideMenu()}else if(a.keyCode==38||a.keyCode==40)if(!c.get("visible")){a.preventDefault();
this._showMenu()}},_handleBlur:function(){var a=d.superclass._handleBlur.call(this);if(a===false)return a;this._hideMenu()},_handleClick:function(){var a=d.superclass._handleClick.call(this);if(a===false)return a;this.get("menu").get("visible")?this._hideMenu():this._showMenu()}},{ATTRS:{selectedItem:{valueFn:function(){return this.get("menu").get("selectedItem")}},menu:{setter:function(a){a.set("focusable",false)}}}});d.DefaultRender=b;return d},{requires:["uibase","button","./menubuttonrender"]});
KISSY.add("menubutton/menubuttonrender",function(i,f,g){return f.create(g.Render,{renderUI:function(){var b=this.get("el");b.one("div").one("div").html(i.substitute('<div class="goog-inline-block {prefixCls}-caption"></div><div class="goog-inline-block {prefixCls}-dropdown">&nbsp;</div>',{prefixCls:this.get("prefixCls")+"menu-button"}));b.attr("aria-haspopup",true)},_uiSetContent:function(b){b!=undefined&&this.get("el").one("."+this.get("prefixCls")+"menu-button-caption").html(b)},_uiSetCollapsed:function(b){var d=
this.get("el"),a=this.get("prefixCls")+"menu-button";if(b){d.removeClass(a+"menu-button-open");d.attr("aria-expanded",false)}else{d.addClass(a+"menu-button-open");d.attr("aria-expanded",true)}}},{ATTRS:{collapsed:{value:true}}})},{requires:["uibase","button"]});KISSY.add("menubutton",function(i,f,g){f.Render=g;return f},{requires:["menubutton/menubutton","menubutton/menubuttonrender"]});
