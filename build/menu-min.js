/*
Copyright 2011, KISSY UI Library v1.20dev
MIT Licensed
build time: Aug 18 13:03
*/
KISSY.add("menu/delmenuitem",function(j,f,g,k,e,a){function h(d){var i=d.get("parent");if(i.fire("beforeDelete",{target:d})!==false){i.removeChild(d,true);i.set("highlightedItem",null);i.fire("delete",{target:d})}}var b=f.all;j=a.CLS;var c=a.DEL_CLS;g=g.create(e,{_performInternal:function(d){if(b(d.target).hasClass(this.getCls(c))){h(this);return true}return e.prototype._performInternal.call(this,d)},_handleKeydown:function(d){if(d.keyCode===f.KeyCodes.D){h(this);return true}}},{ATTRS:{delTooltip:{view:true}},
DefaultRender:a});k.UIStore.setUIByClass(j,{priority:k.UIStore.PRIORITY.LEVEL4,ui:g});return g},{requires:["node","uibase","component","./menuitem","./delmenuitemrender"]});
KISSY.add("menu/delmenuitemrender",function(j,f,g,k,e){function a(b){b.get("contentEl").append(j.substitute(h,{prefixCls:b.get("prefixCls"),tooltip:b.get("delTooltip")}))}var h='<span class="{prefixCls}menuitem-delete" title="{tooltip}">X</span>';return g.create(e,{createDom:function(){a(this)},_uiSetContent:function(b){e.prototype._uiSetContent.call(this,b);a(this)},_uiSetDelTooltip:function(){this._uiSetContent(this.get("content"))}},{ATTRS:{delTooltip:{}},HTML_PARSER:{delEl:function(b){return b.one(this.getCls("menuitem-delete"))}},
CLS:"menuitem-deletable",DEL_CLS:"menuitem-delete"})},{requires:["node","uibase","component","./menuitemrender"]});
KISSY.add("menu/filtermenu",function(j,f,g,k,e){f=f.create(k,{bindUI:function(){this.get("view").get("filterInput").on("keyup",this.handleFilterEvent,this)},handleFilterEvent:function(){var a=this.get("view").get("filterInput"),h=this.get("highlightedItem");this.set("filterStr",a.val());if(!h||!h.get("visible"))this.set("highlightedItem",this._getNextEnabledHighlighted(0,1))},_uiSetFilterStr:function(a){this.filterItems(a)},filterItems:function(a){var h=this.get("view"),b=h.get("labelEl");h=h.get("filterInput");
b[a?"hide":"show"]();if(this.get("allowMultiple")){b=[];var c;c=a.match(/(.+)[,\uff0c]\s*([^\uff0c,]*)/);var d=[];if(c)d=c[1].split(/[,\uff0c]/);if(/[,\uff0c]$/.test(a)){b=[];if(c){b=d;c=d[d.length-1];if((d=(d=this.get("highlightedItem"))&&d.get("content"))&&d.indexOf(c)>-1&&c)b[b.length-1]=d;h.val(b.join(",")+",")}a=""}else{if(c)a=c[2]||"";b=d}this.get("enteredItems").length!=b.length&&this.set("enteredItems",b)}h=this.get("children");var i=a&&RegExp(a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08"),"ig"),l=this.getCls("menuitem-hit");j.each(h,function(m){var n=m.get("content");if(a)if(n.indexOf(a)>-1){m.set("visible",true);m.get("contentEl").html(n.replace(i,function(o){return"<span class='"+l+"'>"+o+"</span>"}))}else m.set("visible",false);else{m.get("contentEl").html(n);m.set("visible",true)}})},decorateInternal:function(a){this.set("el",a);this.decorateChildren(a.one("."+this.getCls("menu-content")))},reset:function(){var a=this.get("view");this.set("filterStr","");this.set("enteredItems",
[]);(a=a&&a.get("filterInput"))&&a.val("")},destructor:function(){var a=this.get("view");(a=a&&a.get("filterInput"))&&a.detach()}},{ATTRS:{label:{view:true},filterStr:{},enteredItems:{value:[]},allowMultiple:{value:false}},DefaultRender:e});g.UIStore.setUIByClass("filtermenu",{priority:g.UIStore.PRIORITY.LEVEL2,ui:f});return f},{requires:["uibase","component","./menu","./filtermenurender"]});
KISSY.add("menu/filtermenurender",function(j,f,g,k){var e=f.all;return g.create(k,{getContentElement:function(){return this.get("menuContent")},getKeyEventTarget:function(){return this.get("filterInput")},createDom:function(){var a=k.prototype.getContentElement.call(this),h=this.get("filterWrap");h||this.set("filterWrap",h=e("<div class='"+this.getCls("menu-filter")+"'/>").appendTo(a));this.get("labelEl")||this.set("labelEl",e("<div class='"+this.getCls("menu-filter-label")+"'/>").appendTo(h));this.get("filterInput")||
this.set("filterInput",e("<input autocomplete='off'/>").appendTo(h));this.get("menuContent")||this.set("menuContent",e("<div class='"+this.getCls("menu-content")+"'/>").appendTo(a))},_uiSetLabel:function(a){this.get("labelEl").html(a)}},{ATTRS:{label:{}},HTML_PARSER:{labelEl:function(a){return a.one("."+this.getCls("menu-filter")).one("."+this.getCls("menu-filter-label"))},filterWrap:function(a){return a.one("."+this.getCls("menu-filter"))},menuContent:function(a){return a.one("."+this.getCls("menu-content"))},
filterInput:function(a){return a.one("."+this.getCls("menu-filter")).one("input")}}})},{requires:["node","uibase","./menurender"]});
KISSY.add("menu/menu",function(j,f,g,k,e){var a=f.KeyCodes,h=g.create(k.Container,{_uiSetHighlightedItem:function(b,c){var d=c&&c.prevVal;d&&d.set("highlighted",false);b&&b.set("highlighted",true);this.set("activeItem",b)},_handleBlur:function(b){h.superclass._handleBlur.call(this,b);this.set("highlightedItem",undefined)},_getNextEnabledHighlighted:function(b,c){var d=this.get("children"),i=d.length,l=b;do{var m=d[b];if(!m.get("disabled")&&m.get("visible")!==false)return d[b];b=(b+c+i)%i}while(b!=
l)},_handleKeydown:function(b){if(this._handleKeyEventInternal(b)){b.halt();return true}},_handleKeyEventInternal:function(b){var c=this.get("highlightedItem");if(c&&c._handleKeydown(b))return true;var d=this.get("children"),i=d.length;if(i!==0){switch(b.keyCode){case a.ESC:return;case a.HOME:this.set("highlightedItem",this._getNextEnabledHighlighted(0,1));break;case a.END:this.set("highlightedItem",this._getNextEnabledHighlighted(i-1,-1));break;case a.UP:if(c){b=j.indexOf(c,d);i=(b-1+i)%i}else i=
i-1;this.set("highlightedItem",this._getNextEnabledHighlighted(i,-1));break;case a.DOWN:if(c){b=j.indexOf(c,d);i=(b+1+i)%i}else i=0;this.set("highlightedItem",this._getNextEnabledHighlighted(i,1));break;default:return}return true}},bindUI:function(){var b=this;b.on("hide",function(){b.set("highlightedItem",undefined)})},containsElement:function(b){if(this.get("view").containsElement(b))return true;for(var c=this.get("children"),d=0,i=c.length;d<i;d++){var l=c[d];if(typeof l.containsElement=="function"&&
l.containsElement(b))return true}return false}},{ATTRS:{focusable:{value:true},visibleMode:{value:"display"},highlightedItem:{},activeItem:{view:true}},DefaultRender:e});k.UIStore.setUIByClass("menu",{priority:k.UIStore.PRIORITY.LEVEL1,ui:h});return h},{requires:["event","uibase","component","./menurender","./submenu"]});
KISSY.add("menu/menuitem",function(j,f,g,k){var e=f.create(g.ModelControl,[f.Contentbox],{_handleMouseEnter:function(a){if(e.superclass._handleMouseEnter.call(this,a))return true;this.get("parent").set("highlightedItem",this)},_handleMouseLeave:function(a){if(e.superclass._handleMouseLeave.call(this,a))return true;this.get("parent").set("highlightedItem",undefined)},_performInternal:function(){this.get("selectable")&&this.set("selected",true);this.get("checkable")&&this.set("checked",!this.get("checked"));
this.get("parent").fire("click",{target:this});return true},_uiSetChecked:function(a){this._forwardSetAttrToView("checked",a)},_uiSetSelected:function(a){this._forwardSetAttrToView("selected",a)},_uiSetHighlighted:function(a){e.superclass._uiSetHighlighted.apply(this,arguments);if(a){var h=this.get("el"),b=this.get("parent").get("el"),c=h.offset().top;h=h[0].offsetHeight;var d=b.offset().top,i=b[0].offsetHeight;if(c-d>=i)b[0].scrollTop+=c-d+h-i;else if(c-d<0)b[0].scrollTop+=c-d}},containsElement:function(a){return this.get("view").containsElement(a)}},
{ATTRS:{focusable:{value:false},visibleMode:{value:"display"},handleMouseEvents:{value:false},selectable:{view:true},checkable:{view:true},value:{},checked:{},selected:{}}});e.DefaultRender=k;g.UIStore.setUIByClass("menuitem",{priority:g.UIStore.PRIORITY.LEVEL1,ui:e});return e},{requires:["uibase","component","./menuitemrender"]});
KISSY.add("menu/menuitemrender",function(j,f,g,k){return g.create(k.Render,[g.Contentbox.Render],{renderUI:function(){var e=this.get("el");e.attr("role","menuitem");this.get("contentEl").addClass(this.getCls("menuitem-content"));e.attr("id")||e.attr("id",j.guid("ks-menuitem"))},_setHighlighted:function(e,a){var h=this.get("el"),b=this._completeClasses(a,"-highlight");h[e?"addClass":"removeClass"](b)},_setSelected:function(e,a){var h=this.get("el"),b=this._completeClasses(a,"-selected");h[e?"addClass":
"removeClass"](b)},_setChecked:function(e,a){var h=this.get("el"),b=this._completeClasses(a,"-checked");h[e?"addClass":"removeClass"](b)},_uiSetSelectable:function(e){this.get("el").attr("role",e?"menuitemradio":"menuitem")},_uiSetCheckable:function(e){if(e){var a=this.get("el"),h=this.getCls("menuitem-checkbox"),b=a.one("."+h);if(!b){b=(new f("<div class='"+h+"'/>")).prependTo(a);b.unselectable()}}this.get("el").attr("role",e?"menuitemcheckbox":"menuitem")},containsElement:function(e){var a=this.get("el");
return a[0]==e||a.contains(e)}},{ATTRS:{selected:{},checked:{}}})},{requires:["node","uibase","component"]});
KISSY.add("menu/menurender",function(j,f,g,k){return g.create(k.Render,[g.Contentbox.Render],{renderUI:function(){var e=this.get("el");e.attr("role","menu").attr("aria-haspopup",true);e.attr("id")||e.attr("id",j.guid("ks-menu"))},_uiSetActiveItem:function(e){var a=this.get("el");if(e){e=e.get("el").attr("id");a.attr("aria-activedescendant",e)}else a.attr("aria-activedescendant","")},containsElement:function(e){var a=this.get("el");return a[0]===e||a.contains(e)}},{ATTRS:{activeItem:{}}})},{requires:["ua",
"uibase","component"]});KISSY.add("menu/popupmenu",function(j,f,g,k,e){j=f.create(k,[f.Position,f.Align],{},{ATTRS:{focusable:{value:false},visibleMode:{value:"visibility"}},DefaultRender:e});g.UIStore.setUIByClass("popupmenu",{priority:g.UIStore.PRIORITY.LEVEL2,ui:j});return j},{requires:["uibase","component","./menu","./popupmenurender"]});KISSY.add("menu/popupmenurender",function(j,f,g,k){return g.create(k,[g.Position.Render,f.ie===6?g.Shim.Render:null])},{requires:["ua","uibase","./menurender"]});
KISSY.add("menu/separator",function(j,f,g,k){j=f.create(g.ModelControl,{},{ATTRS:{focusable:{value:false},disabled:{value:true},handleMouseEvents:{value:false}},DefaultRender:k});g.UIStore.setUIByClass("menuseparator",{priority:g.UIStore.PRIORITY.LEVEL2,ui:j});return j},{requires:["uibase","component","./separatorrender"]});KISSY.add("menu/separatorrender",function(j,f,g){return f.create(g.Render,{createDom:function(){this.get("el").attr("role","separator")}})},{requires:["uibase","component"]});
KISSY.add("menu/submenu",function(j,f,g,k,e,a){var h=f.KeyCodes,b=g.create(e,[k.DecorateChild],{_onParentHide:function(){this.get("menu")&&this.get("menu").hide()},bindUI:function(){var c=this.get("parent"),d=this.get("menu");if(c){c.on("hide",this._onParentHide,this);d.on("click",function(i){c.fire("click",{target:i.target})});d.on("afterActiveItemChange",function(i){c.set("activeItem",i.newVal)})}d.on("beforeHighlightedItemChange",this.onChildHighlight_,this)},_handleMouseEnter:function(c){if(b.superclass._handleMouseEnter.call(this,
c))return true;this.clearTimers();this.showTimer_=j.later(this.showMenu,this.get("menuDelay"),false,this)},showMenu:function(){var c=this.get("menu");c.set("align",j.mix({node:this.get("el"),points:["tr","tl"]},this.get("menuAlign")));c.render();this.get("el").attr("aria-haspopup",c.get("el").attr("id"));c.show()},clearTimers:function(){if(this.dismissTimer_){this.dismissTimer_.cancel();this.dismissTimer_=null}if(this.showTimer_){this.showTimer_.cancel();this.showTimer_=null}},onChildHighlight_:function(c){if(c.newVal)if(this.get("menu").get("parent")==
this){this.clearTimers();this.get("parent").set("highlightedItem",this)}},hideMenu:function(){var c=this.get("menu");c&&c.hide()},_performInternal:function(){this.clearTimers();this.showMenu()},_handleKeydown:function(c){var d=this.get("menu"),i=d&&d.get("visible"),l=c.keyCode;if(i){if(!d._handleKeydown(c))if(l==h.LEFT){this.hideMenu();this.get("parent").set("activeItem",this)}else return}else if(l==h.RIGHT){this.showMenu();c=d.get("children");c[0]&&d.set("highlightedItem",c[0])}else return;return true},
_uiSetHighlighted:function(c,d){b.superclass._uiSetHighlighted.call(this,c,d);if(!c){this.dismissTimer_&&this.dismissTimer_.cancel();this.dismissTimer_=j.later(this.hideMenu,this.get("menuDelay"),false,this)}},containsElement:function(c){var d=this.get("menu");return d&&d.containsElement(c)},decorateChildrenInternal:function(c,d,i){d.hide();j.one(d[0].ownerDocument.body).prepend(d);this.set("menu",new c({srcNode:d,prefixCls:i}))},destructor:function(){var c=this.get("parent"),d=this.get("menu");this.clearTimers();
c&&c.detach("hide",this._onParentHide,this);!this.get("externalSubMenu")&&d&&d.destroy()}},{ATTRS:{menuDelay:{value:300},externalSubMenu:{value:false},menuAlign:{},menu:{setter:function(c){c.set("parent",this)}},decorateChildCls:{value:"popupmenu"}},DefaultRender:a});k.UIStore.setUIByClass("submenu",{priority:k.UIStore.PRIORITY.LEVEL2,ui:b});return b},{requires:["event","uibase","component","./menuitem","./submenurender"]});
KISSY.add("menu/submenurender",function(j,f,g){var k;return k=f.create(g,{renderUI:function(){var e=this.get("el"),a=this.get("contentEl");e.attr("aria-haspopup","true");a.append(j.substitute('<span class="{prefixCls}submenu-arrow">\u25ba</span>',{prefixCls:this.get("prefixCls")}))},_uiSetContent:function(e){k.superclass._uiSetContent.call(this,e);this.get("contentEl").append(j.substitute('<span class="{prefixCls}submenu-arrow">\u25ba</span>',{prefixCls:this.get("prefixCls")}))}})},{requires:["uibase","./menuitemrender"]});
KISSY.add("menu",function(j,f,g,k,e,a,h,b,c,d,i,l){f.Render=g;f.Item=k;f.Item.Render=e;f.SubMenu=a;a.Render=h;f.Separator=b;f.PopupMenu=d;f.FilterMenu=i;f.DelMenuItem=l;return f},{requires:["menu/menu","menu/menurender","menu/menuitem","menu/menuitemrender","menu/submenu","menu/submenurender","menu/separator","menu/separatorrender","menu/popupmenu","menu/filtermenu","menu/delmenuitem","menu/delmenuitemrender"]});
