ej.base.enableRipple(true);

ej.documenteditor.DocumentEditor.Inject(ej.documenteditor.Editor, ej.documenteditor.Selection,ej.documenteditor.EditorHistory);
var documenteditor = new ej.documenteditor.DocumentEditor({ enableEditor: true, isReadOnly: false, enableSelection: true,enableEditorHistory:true,height: '370px'});

function toolbarAction (args){
  switch (args.item.id) {
    case 'Bullets':
      //To create bullet list
      documenteditor.editor.applyBullet('\uf0b7', 'Symbol');
      break;
    case 'Numbering':
      //To create numbering list
      documenteditor.editor.applyNumbering('%1)', 'UpRoman');
      break;
    case 'clearlist':
      //To clear list
      documenteditor.editor.clearList();
      break;
  }
};

var toolbar = new ej.navigations.Toolbar({
  clicked: toolbarAction,
  items: [
    {
      prefixIcon: 'e-de-ctnr-bullets e-icons',
      tooltipText: 'Bullets',
      id: 'Bullets',
    },
    {
      prefixIcon: 'e-de-ctnr-numbering e-icons',
      tooltipText: 'Numbering',
      id: 'Numbering',
    },
    {
      text: 'Clear',
      id: 'clearlist',
      tooltipText: 'Clear List',
    },
  ],
});
toolbar.appendTo('#toolbar');

documenteditor.appendTo('#DocumentEditor');


