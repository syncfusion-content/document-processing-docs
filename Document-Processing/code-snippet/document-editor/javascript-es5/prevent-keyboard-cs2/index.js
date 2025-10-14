ej.documenteditor.DocumentEditor.Inject(ej.documenteditor.Selection,ej.documenteditor.Editor,ej.documenteditor.SfdtExport)

var documentEditor = new ej.documenteditor.DocumentEditor({ enableSfdtExport: true, enableSelection: true, enableEditor: true, isReadOnly: false });

documentEditor.appendTo('#DocumentEditor');

documentEditor.keyDown = function (args) {
    var keyCode = args.event.which || args.event.keyCode;
    var isCtrlKey = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);
    //67 is the character code for 'C'
    if (isCtrlKey && keyCode === 67) {
        //To prevent copy operation set isHandled to true
        args.isHandled = true;
    }
}

