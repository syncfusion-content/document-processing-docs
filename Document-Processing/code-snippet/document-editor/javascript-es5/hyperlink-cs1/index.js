var documenteditor = new ej.documenteditor.DocumentEditor({ enableSelection: true, enableEditor: true, isReadOnly: false });

documenteditor.appendTo('#DocumentEditor');

documenteditor.requestNavigate = (args) => {
  if (args.linkType !== 'Bookmark') {
    var link = args.navigationLink;
    if (args.localReference.length > 0) {
      link += '#' + args.localReference;
    }
    window.open(link);
    args.isHandled = true;
  }
};

