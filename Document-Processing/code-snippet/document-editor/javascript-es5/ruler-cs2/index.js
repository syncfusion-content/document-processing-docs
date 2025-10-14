//Initialize Document Editor Container component.
var documenteditorcontainer = new ej.documenteditor.DocumentEditorContainer({
  height: '590px', documentEditorSettings: { showRuler: true }
});

//Inject require modules.
ej.documenteditor.DocumentEditorContainer.Inject(
  ej.documenteditor.Toolbar
);

document.getElementById('container_ruler_button').addEventListener('click',
  function () {
    documenteditorcontainer.documentEditorSettings.showRuler = !documenteditorcontainer.documentEditorSettings.showRuler;
  });

//Render Document Editor Container component.
documenteditorcontainer.appendTo("#DocumentEditor");
