var documenteditor = new ej.documenteditor.DocumentEditor({
  isReadOnly: false,
  enableSelection: true,
  enableEditor: true,
  enableTableOptionsDialog: true,
  enableTablePropertiesDialog:true,
  enableBordersAndShadingDialog:true,
  enableSfdtExport: true,
  enableEditorHistory: true
});
var button = document.getElementById('dialog');
button.addEventListener('click', function() {
  //To open table properties dialog
  documenteditor.showDialog('TableProperties');
});
documenteditor.appendTo('#DocumentEditor');
documenteditor.editor.insertTable(2,2);

