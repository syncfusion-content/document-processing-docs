---
layout: post
title: Feature module in JavaScript (ES6) Document editor control | Syncfusion
description: Learn here all about Feature module in Syncfusion JavaScript (ES6) Document editor control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: Feature module 
documentation: ug
domainurl: ##DomainURL##
---

# Feature module in JavaScript (ES6) Document editor control

Document Editor features are segregated into individual feature-wise modules to enable selective referencing. By default, the Document Editor displays the document in read-only mode. The required modules should be injected to extend its functionality. The following are the selective modules of Document Editor that can be included as required:
* **Print** - Prints the document.
* **SfdtExport** - Exports the document as Syncfusion Document Text (.SFDT) file.
* **Selection** - Selects a portion of the document and copy it to the clipboard.
* **Search** - Searches specific text and navigate between the results.
* **WordExport** - Exports the document as Word Document (.DOCX) file.
* **TextExport** - Exports the document as Text Document (.TXT) file.
* **Editor** - Performs all kind of editing operations.
* **EditorHistory** - Maintains the history of editing operations so that you can perform undo and redo at any time.
* User interface options such as context menu, options pane, image resizer, and dialog are available as individual modules.

>In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a Document Editor instance.
Refer to the following table.

| Module | Dependent modules to be injected for extending the functionality of Document Editor in your application | Property to enable the functionality for a Document Editor instance |
|---|---|---|
|Print|`DocumentEditor.Inject(Print)`|`let documenteditor: DocumentEditor = new DocumentEditor({ enablePrint: true });`|
|SfdtExport|`DocumentEditor.Inject(SfdtExport)`|`let documenteditor: DocumentEditor = new DocumentEditor({ enableSfdtExport: true });`|
|Selection|`DocumentEditor.Inject(Selection)`|`let documenteditor: DocumentEditor = new DocumentEditor({ enableSelection: true });`|
|Search|`DocumentEditor.Inject(Selection, Search)`|`let documenteditor: DocumentEditor = new DocumentEditor({ enableSearch: true });`|
|WordExport|`DocumentEditor.Inject(SfdtExport, WordExport)`|`let documenteditor: DocumentEditor = new DocumentEditor({ enableWordExport: true });`|
|TextExport|`DocumentEditor.Inject(SfdtExport, TextExport)`|`let documenteditor: DocumentEditor = new DocumentEditor({ enableTextExport: true });`|
|Editor|`DocumentEditor.Inject(Selection, Editor)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true });`|
|EditorHistory|`DocumentEditor.Inject(Selection, Editor, EditorHistory)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableEditorHistory: true });`|
|OptionsPane(Find)|`DocumentEditor.Inject(Selection, Search, OptionsPane)`|`let documenteditor: DocumentEditor = new DocumentEditor({ enableSearch: true, enableOptionsPane: true });`|
|OptionsPane(Find and Replace)|`DocumentEditor.Inject(Selection, Search, Editor, OptionsPane)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableSearch: true, enableOptionsPane: true });`|
|ContextMenu|`DocumentEditor.Inject(Selection, ContextMenu)`|`let documenteditor: DocumentEditor = new DocumentEditor({ enableSelection: true, enableContextMenu: true });`|
|ImageResizer|`DocumentEditor.Inject(Selection, Editor, ImageResizer)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableImageResizer: true });`|
|HyperlinkDialog|`DocumentEditor.Inject(Selection, Editor, HyperlinkDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableHyperlinkDialog: true });`|
|TableDialog|`DocumentEditor.Inject(Selection, Editor, TableDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableTableDialog: true });`|
|FontDialog|`DocumentEditor.Inject(Selection, Editor, FontDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableFontDialog: true });`|
|ParagraphDialog|`DocumentEditor.Inject(Selection, Editor, ParagraphDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableParagraphDialog: true });`|
|BookmarkDialog|`DocumentEditor.Inject(Selection, Editor, BookmarkDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableBookmarkDialog: true });`|
|PageSetupDialog|`DocumentEditor.Inject(Selection, Editor, PageSetupDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enablePageSetupDialog: true });`|
|TableOfContentsDialog|`DocumentEditor.Inject(Selection, Editor, TableOfContentsDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableTableOfContentsDialog: true });`|
|ListDialog|`DocumentEditor.Inject(Selection, Editor, ListDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableListDialog: true });`|
|TablePropertiesDialog|`DocumentEditor.Inject(Selection, Editor, TablePropertiesDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableTablePropertiesDialog: true });`|
|CellOptionsDialog|`DocumentEditor.Inject(Selection, Editor, CellOptionsDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableTablePropertiesDialog: true });`|
|BordersAndShadingDialog|`DocumentEditor.Inject(Selection, Editor, BordersAndShadingDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableBordersAndShadingDialog: true });`|
|TableOptionsDialog|`DocumentEditor.Inject(Selection, Editor, TableOptionsDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableTableOptionsDialog: true });`|
|StylesDialog|`DocumentEditor.Inject(Selection, Editor, StylesDialog,StyleDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableStyleDialog: true ,enableStylesDialog: true });`|
|StyleDialog|`DocumentEditor.Inject(Selection, Editor, StyleDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableStyleDialog: true });`|
|BulletsAndNumberingDialog|`DocumentEditor.Inject(Selection, Editor, BulletsAndNumberingDialog)`|`let documenteditor: DocumentEditor = new DocumentEditor({ isReadOnly: false, enableEditor: true, enableStyleDialog: true });`|