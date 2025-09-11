ej.documenteditor.DocumentEditor.Inject(ej.documenteditor.Selection,ej.documenteditor.Editor,ej.documenteditor.SfdtExport,ej.documenteditor.WordExport)

var documentEditor = new ej.documenteditor.DocumentEditor({ enableSfdtExport : true, enableWordExport: true, enableSelection: true, enableEditor: true, isReadOnly: false });

documentEditor.appendTo('#DocumentEditor');

documentEditor.keyDown = function (args) {
    var keyCode = args.event.which || args.event.keyCode;

    var isCtrlKey = (args.event.ctrlKey || args.event.metaKey) ? true : ((keyCode === 17) ? true : false);

    var isAltKey = args.event.altKey ? args.event.altKey : ((keyCode === 18) ? true : false);

   // 83 is the character code for 'S'
    if (isCtrlKey && !isAltKey && keyCode === 83) {
        //To prevent default save operation, set the isHandled property to true
        args.isHandled = true;
       documentEditor.save('sample', 'Docx');
       args.event.preventDefault();
    } else if (isCtrlKey && isAltKey && keyCode === 83) {
       documentEditor.save('sample', 'Sfdt');
    }
}

