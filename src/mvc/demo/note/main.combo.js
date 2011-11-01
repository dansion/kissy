/**
 combined files : 

D:\code\kissy_git\kissy\src\mvc\demo\note\mods\NoteView.js
D:\code\kissy_git\kissy\src\mvc\demo\note\mods\NotesView.js
D:\code\kissy_git\kissy\src\mvc\demo\note\mods\EditView.js
D:\code\kissy_git\kissy\src\mvc\demo\note\mods\NoteModel.js
D:\code\kissy_git\kissy\src\mvc\demo\note\mods\NotesCollection.js
D:\code\kissy_git\kissy\src\mvc\demo\note\mods\router.js
D:\code\kissy_git\kissy\src\mvc\demo\note\mods\sync.js
D:\code\kissy_git\kissy\src\mvc\demo\note\main.js
**/

KISSY.add("note/mods/NoteView", function(S, Node, mvc, Template) {
  var noteTpl = Template(Node.all("#noteTpl").html());
  function NoteView() {
    var self = this;
    NoteView.superclass.constructor.apply(self, arguments);
    self.get("note").on("*Change", self.render, self);
    self.get("note").on("destroy", self.destroy, self)
  }
  S.extend(NoteView, mvc.View, {render:function() {
    var self = this;
    self.get("el").addClass("note").attr("id", self.get("note").getId());
    self.get("el").html(noteTpl.render({note:self.get("note").toJSON()}));
    return self
  }, destroy:function() {
    this.get("el").remove()
  }});
  return NoteView
}, {requires:["node", "mvc", "template"]});

KISSY.add("note/mods/NotesView", function(S, Node, mvc, Template, NoteView) {
  var $ = Node.all, tmpl = Template($("#listTpl").html());
  function NotesView() {
    NotesView.superclass.constructor.apply(this, arguments);
    var self = this, statistic, dataList, el = self.get("el");
    dataList = self.dataList = el.one(".dataList");
    statistic = self.statistic = el.one(".statistic");
    var notes = self.get("notes");
    notes.on("*Change", function(e) {
      if(e.target != self) {
        statistic.html(e.target.get("title"))
      }
    });
    notes.on("add remove", function(e) {
      statistic.html(e.model.get("title"))
    });
    notes.on("add", function(e) {
      dataList.append((new NoteView({note:e.model})).render().get("el"))
    });
    notes.on("afterModelsChange", function() {
      dataList.html(tmpl.render({list:notes.toJSON()}));
      var list = dataList.all(".note");
      list.each(function(l, i) {
        new NoteView({note:notes.at(i), el:l})
      })
    })
  }
  S.extend(NotesView, mvc.View, {newNote:function() {
    mvc.Router.navigate("/new/")
  }, refreshNote:function() {
    this.get("notes").load()
  }, editNote:function(e) {
    mvc.Router.navigate("/edit/" + $(e.currentTarget).parent("div").attr("id"))
  }, deleteNode:function(e) {
    var notes = this.get("notes");
    notes.getById($(e.currentTarget).parent("div").attr("id")).destroy({"delete":1})
  }}, {ATTRS:{el:{value:"#list"}, events:{value:{".edit":{click:"editNote"}, ".newNote":{click:"newNote"}, ".delete":{click:"deleteNode"}, ".refreshNote":{click:"refreshNote"}}}}});
  return NotesView
}, {requires:["node", "mvc", "template", "./NoteView"]});

KISSY.add("note/mods/EditView", function(S, Node, mvc, Template) {
  var detailTpl = Template(Node.all("#detailTpl").html());
  function EditView() {
    EditView.superclass.constructor.apply(this, arguments)
  }
  S.extend(EditView, mvc.View, {submit:function() {
    var self = this, note = self.get("note"), el = self.get("el");
    note.set({title:el.one(".title").val(), content:el.one(".content").val()});
    self.fire("submit", {note:note})
  }, render:function() {
    var self = this;
    self.get("el").html(detailTpl.render({note:self.get("note").toJSON()}));
    return self
  }}, {ATTRS:{el:{value:"#edit"}, events:{value:{".submit":{click:"submit"}}}}});
  return EditView
}, {requires:["node", "mvc", "template"]});

KISSY.add("note/mods/NoteModel", function(S, mvc) {
  function NoteModel() {
    NoteModel.superclass.constructor.apply(this, arguments)
  }
  S.extend(NoteModel, mvc.Model);
  return NoteModel
}, {requires:["mvc"]});

KISSY.add("note/mods/NotesCollection", function(S, mvc, NoteModel) {
  function NotesModel() {
    NotesModel.superclass.constructor.apply(this, arguments)
  }
  S.extend(NotesModel, mvc.Collection, {ATTRS:{Model:{value:NoteModel}}});
  return NotesModel
}, {requires:["mvc", "./NoteModel"]});

KISSY.add("note/mods/router", function(S, mvc, NotesView, EditView, NotesCollection, NoteModel) {
  function NoteRouter() {
    var self = this;
    NoteRouter.superclass.constructor.apply(self, arguments);
    self.notesView = new NotesView({notes:new NotesCollection, router:self});
    self.editView = new EditView;
    self.notesView.get("notes").load();
    self.editView.on("submit", self._onEditSubmit, self)
  }
  S.extend(NoteRouter, mvc.Router, {_onEditSubmit:function(e) {
    var note = e.note, self = this, notes = self.notesView.get("notes");
    if(note.isNew()) {
      notes.create(note, {success:function() {
        mvc.Router.navigate("")
      }})
    }else {
      var exits = notes.getById(note.getId());
      exits.set(note.toJSON());
      exits.save({success:function() {
        mvc.Router.navigate("")
      }})
    }
  }, index:function() {
    var self = this;
    self.editView.get("el").hide();
    self.notesView.get("el").show()
  }, editNote:function(paths) {
    var self = this, id = paths.id, note = new NoteModel({id:id}), editView = self.editView;
    note.load({success:function() {
      self.notesView.get("el").hide();
      editView.set("note", note);
      editView.render();
      editView.get("el").show()
    }})
  }, newNote:function() {
    var self = this, editView = self.editView;
    self.notesView.get("el").hide();
    editView.set("note", new NoteModel);
    editView.render().get("el").show()
  }}, {ATTRS:{routes:{value:{"":"index", "/edit/:id":"editNote", "/new/":"newNote"}}}});
  return NoteRouter
}, {requires:["mvc", "./NotesView", "./EditView", "./NotesCollection", "./NoteModel"]});

KISSY.add("note/mods/sync", function(S, mvc) {
  var KEY = "KISSY_Note";
  function isModel(m) {
    return m instanceof mvc.Model
  }
  function findById(store, id) {
    for(var i = 0;i < store.length;i++) {
      if(store[i].id == id) {
        return i
      }
    }
    return-1
  }
  var STORE, sync;
  sync = mvc.sync = function(self, method, options) {
    S.log(method);
    setTimeout(function() {
      var index;
      var store = STORE || (window.localStorage ? window.localStorage.getItem(KEY) || [] : []);
      if(S.isString(store)) {
        store = JSON.parse(store)
      }
      var ret, id, error;
      switch(method) {
        case "read":
          if(isModel(self)) {
            ret = store[findById(store, self.get("id"))];
            if(!ret) {
              error = "not found"
            }
          }else {
            ret = [];
            for(var i in store) {
              ret.push(store[i])
            }
          }
          break;
        case "create":
          ret = self.toJSON();
          ret.id = S.guid("note");
          ret.time = (new Date).toLocaleTimeString();
          store.push(ret);
          break;
        case "delete":
          id = self.get("id");
          index = findById(store, id);
          if(index > -1) {
            store.splice(index, 1)
          }
          break;
        case "update":
          id = self.get("id");
          index = findById(store, id);
          if(index > -1) {
            store[index] = self.toJSON()
          }
          break
      }
      if(method != "read" && window.localStorage) {
        window.localStorage.setItem(KEY, S.JSON.stringify(store))
      }
      STORE = store;
      if(error) {
        if(options.error) {
          options.error(null, error)
        }
      }else {
        if(options.success) {
          options.success(ret)
        }
      }
      if(options.complete) {
        options.complete(ret, error)
      }
    }, 500)
  };
  return sync
}, {requires:["mvc"]});

KISSY.add("note/main", function(S, Node, NoteRouter, Sy, MVC) {
  new NoteRouter;
  MVC.Router.start({triggerRoute:1, success:function() {
    Node.all("#loading").hide()
  }})
}, {requires:["node", "./mods/router", "./mods/sync", "mvc"]});


