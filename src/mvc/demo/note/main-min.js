KISSY.add("note/mods/NoteView",function(g,h,f,j){function c(){c.superclass.constructor.apply(this,arguments);this.get("note").on("*Change",this.render,this);this.get("note").on("destroy",this.destroy,this)}var i=j(h.all("#noteTpl").html());g.extend(c,f.View,{render:function(){this.get("el").addClass("note").attr("id",this.get("note").getId());this.get("el").html(i.render({note:this.get("note").toJSON()}));return this},destroy:function(){this.get("el").remove()}});return c},{requires:["node","mvc",
"template"]});
KISSY.add("note/mods/NotesView",function(g,h,f,j,c){function i(){i.superclass.constructor.apply(this,arguments);var a=this,d,k,n=a.get("el");k=a.dataList=n.one(".dataList");d=a.statistic=n.one(".statistic");var m=a.get("notes");m.on("*Change",function(l){l.target!=a&&d.html(l.target.get("title"))});m.on("add remove",function(l){d.html(l.model.get("title"))});m.on("add",function(l){k.append((new c({note:l.model})).render().get("el"))});m.on("afterModelsChange",function(){k.html(b.render({list:m.toJSON()}));k.all(".note").each(function(l,
o){new c({note:m.at(o),el:l})})})}var e=h.all,b=j(e("#listTpl").html());g.extend(i,f.View,{newNote:function(){this.get("router").navigate("/new/")},refreshNote:function(){this.get("notes").load()},editNote:function(a){this.get("router").navigate("/edit/"+e(a.currentTarget).parent("div").attr("id"))},deleteNode:function(a){this.get("notes").getById(e(a.currentTarget).parent("div").attr("id")).destroy({"delete":1})}},{ATTRS:{el:{value:"#list"},events:{value:{".edit":{click:"editNote"},".newNote":{click:"newNote"},
".delete":{click:"deleteNode"},".refreshNote":{click:"refreshNote"}}}}});return i},{requires:["node","mvc","template","./NoteView"]});
KISSY.add("note/mods/EditView",function(g,h,f,j){function c(){c.superclass.constructor.apply(this,arguments)}var i=j(h.all("#detailTpl").html());g.extend(c,f.View,{submit:function(){var e=this.get("note"),b=this.get("el");e.set({title:b.one(".title").val(),content:b.one(".content").val()});this.fire("submit",{note:e})},render:function(){this.get("el").html(i.render({note:this.get("note").toJSON()}));return this}},{ATTRS:{el:{value:"#edit"},events:{value:{".submit":{click:"submit"}}}}});return c},
{requires:["node","mvc","template"]});KISSY.add("note/mods/NoteModel",function(g,h){function f(){f.superclass.constructor.apply(this,arguments)}g.extend(f,h.Model);return f},{requires:["mvc"]});KISSY.add("note/mods/NotesCollection",function(g,h,f){function j(){j.superclass.constructor.apply(this,arguments)}g.extend(j,h.Collection,{ATTRS:{Model:{value:f}}});return j},{requires:["mvc","./NoteModel"]});
KISSY.add("note/mods/router",function(g,h,f,j,c,i){function e(){e.superclass.constructor.apply(this,arguments);this.notesView=new f({notes:new c,router:this});this.editView=new j;this.notesView.get("notes").load();this.editView.on("submit",this._onEditSubmit,this)}g.extend(e,h.Router,{_onEditSubmit:function(b){b=b.note;var a=this,d=a.notesView.get("notes");if(b.isNew())d.create(b,{success:function(){a.navigate("")}});else{d=d.getById(b.getId());d.set(b.toJSON());d.save({success:function(){a.navigate("")}})}},
index:function(){this.editView.get("el").hide();this.notesView.get("el").show()},editNote:function(b){var a=this,d=new i({id:b.id}),k=a.editView;d.load({success:function(){a.notesView.get("el").hide();k.set("note",d);k.render();k.get("el").show()}})},newNote:function(){var b=this.editView;this.notesView.get("el").hide();b.set("note",new i);b.render().get("el").show()}},{ATTRS:{routes:{value:{"":"index","/edit/:id":"editNote","/new/":"newNote"}}}});return e},{requires:["mvc","./NotesView","./EditView",
"./NotesCollection","./NoteModel"]});
KISSY.add("note/mods/sync",function(g,h){function f(c,i){for(var e=0;e<c.length;e++)if(c[e].id==i)return e;return-1}var j;return h.sync=function(c,i,e){g.log(i);setTimeout(function(){var b,a=j||(window.localStorage?window.localStorage.getItem("KISSY_Note")||[]:[]);if(g.isString(a))a=JSON.parse(a);var d,k;switch(i){case "read":if(c instanceof h.Model)(d=a[f(a,c.get("id"))])||(k="not found");else{d=[];for(b in a)d.push(a[b])}break;case "create":d=c.toJSON();d.id=g.guid("note");d.time=(new Date).toLocaleTimeString();
a.push(d);break;case "delete":b=c.get("id");b=f(a,b);b>-1&&a.splice(b,1);break;case "update":b=c.get("id");b=f(a,b);if(b>-1)a[b]=c.toJSON()}i!="read"&&window.localStorage&&window.localStorage.setItem("KISSY_Note",g.JSON.stringify(a));j=a;if(k)e.error&&e.error(null,k);else e.success&&e.success(d);e.complete&&e.complete(d,k)},500)}},{requires:["mvc"]});
KISSY.add("note/main",function(g,h,f){(new f).start({triggerRoute:1,success:function(){h.all("#loading").hide()}})},{requires:["node","./mods/router","./mods/sync"]});
