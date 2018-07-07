'use strict';
function TextBox() {
    var defaultClassName = "DefaultTextBox",
        defaultHolder = "Write some thing";
    this.ParentName;
    this.Value;
    this.ClassName=defaultClassName;
    this.Holder=defaultHolder;
    this.create=function () {
        var textBox=document.createElement("textbox"),
            parent=document.querySelector(this.ParentName),
            linkStylesheet=document.createElement('link');
        linkStylesheet.rel="stylesheet";
        linkStylesheet.href="WebCompoJS/TextBox/TextBox.css";
        document.head.appendChild(linkStylesheet);
        textBox.className=this.ClassName;
        parent.appendChild(textBox);
    };
}