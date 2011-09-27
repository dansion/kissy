KISSY.add("htmlparser/writer/basic", function(S) {
    function BasicWriter() {
        this.output = [];
    }

    BasicWriter.prototype = {

        append:function() {
            var o = this.output,
                args = (arguments),
                arg;
            for (var i = 0; i < args.length; i++) {
                arg = args[i];
                if (arg.length > 1) {
                    for (var j = 0; j < arg.length; j++) {
                        o.push(arg[j]);
                    }
                } else {
                    o.push(arg);
                }
            }
            return this;
        },

        openTag:function(el) {
            this.append("<", el.tagName);
        },

        openTagClose:function(el) {
            if (el.isEmptyXmlTag) {
                this.append(" ", "/");
            }
            this.append(">");
        },

        closeTag:function(el) {
            this.append("<\/", el.tagName, ">");
        },

        attribute:function(attr) {
            this.append(" ",
                attr.name,
                "=\"",
                S.escapeHTML(attr.value || attr.name),
                "\"");
        },

        text:function(text) {
            this.append(text);
        },

        cdata:function(cdata) {
            this.append(cdata);
        },

        comment:function(comment) {
            this.append(comment);
        },

        getHtml:function() {
            return this.output.join("");
        }

    };

    return BasicWriter;

});