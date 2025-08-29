---
layout: post
title: Feature module in React Document editor component | Syncfusion
description: Learn here all about Feature module in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Feature module 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Feature module in React Document editor component

Document Editor features are segregated into individual feature-wise modules to enable selective referencing. By default, the document editor displays the document in read-only mode. The required modules should be injected to extend its functionality. The following are the selective modules of document editor that can be included as required:
* **Print** - Prints the document.
* **SfdtExport** - Exports the document as Syncfusion Document Text (.SFDT) file.
* **Selection** - Selects a portion of the document and copy it to the clipboard.
* **Search** - Searches specific text and navigate between the results.
* **WordExport** - Exports the document as Word Document (.DOCX) file.
* **TextExport** - Exports the document as Text Document (.TXT) file.
* **Editor** - Performs all kind of editing operations.
* **EditorHistory** - Maintains the history of editing operations so that you can perform undo and redo at any time.
* User interface options such as context menu, options pane, image resizer, and dialog are available as individual modules.

>In addition to injecting the required modules in your application, enable corresponding properties to extend the functionality for a document editor instance.
Refer to the following table.

| Module | Dependent modules to be injected for extending the functionality of document editor in your application | Property to enable the functionality for a document editor instance |
|---|---|---|
|Print|`DocumentEditor.Inject(Print)`|`<DocumentEditorComponent enablePrint= {true} \>`|
|SfdtExport|`DocumentEditor.Inject(SfdtExport)`|`<DocumentEditorComponent enableSfdtExport= {true} \>`|
|Selection|`DocumentEditor.Inject(Selection)`|`<DocumentEditorComponent enableSelection= {true} \>`|
|Search|`DocumentEditor.Inject(Selection, Search)`|`<DocumentEditorComponent enableSearch= {true }\>`|
|WordExport|`DocumentEditor.Inject(SfdtExport, WordExport)`|`<DocumentEditorComponent enableWordExport= {true} \>`|
|TextExport|`DocumentEditor.Inject(SfdtExport, TextExport)`|`<DocumentEditorComponent enableTextExport= {true} \>`|
|Editor|`DocumentEditor.Inject(Selection, Editor)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true }\>`|
|EditorHistory|`DocumentEditor.Inject(Selection, Editor, EditorHistory)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableEditorHistory= {true }\>`|
|OptionsPane(Find)|`DocumentEditor.Inject(Selection, Search, OptionsPane)`|`<DocumentEditorComponent enableSearch= {true} enableOptionsPane= {true }\>`|
|OptionsPane(Find and Replace)|`DocumentEditor.Inject(Selection, Search, Editor, OptionsPane)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableSearch= {true} enableOptionsPane= {true }\>`|
|ContextMenu|`DocumentEditor.Inject(Selection, ContextMenu)`|`<DocumentEditorComponent enableSelection= {true} enableContextMenu= {true }\>`|
|ImageResizer|`DocumentEditor.Inject(Selection, Editor, ImageResizer)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableImageResizer= {true }\>`|
|HyperlinkDialog|`DocumentEditor.Inject(Selection, Editor, HyperlinkDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableHyperlinkDialog= {true }\>`|
|TableDialog|`DocumentEditor.Inject(Selection, Editor, TableDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableTableDialog= {true }\>`|
|FontDialog|`DocumentEditor.Inject(Selection, Editor, FontDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableFontDialog= {true }\>`|
|ParagraphDialog|`DocumentEditor.Inject(Selection, Editor, ParagraphDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableParagraphDialog= {true }\>`|
|BookmarkDialog|`DocumentEditor.Inject(Selection, Editor, BookmarkDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableBookmarkDialog= {true }\>`|
|PageSetupDialog|`DocumentEditor.Inject(Selection, Editor, PageSetupDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enablePageSetupDialog= {true }\>`|
|TableOfContentsDialog|`DocumentEditor.Inject(Selection, Editor, TableOfContentsDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableTableOfContentsDialog= {true }\>`|
|ListDialog|`DocumentEditor.Inject(Selection, Editor, ListDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableListDialog= {true }\>`|
|TablePropertiesDialog|`DocumentEditor.Inject(Selection, Editor, TablePropertiesDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableTablePropertiesDialog= {true }\>`|
|BordersAndShadingDialog|`DocumentEditor.Inject(Selection, Editor, BordersAndShadingDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableBordersAndShadingDialog= {true }\>`|
|TableOptionsDialog|`DocumentEditor.Inject(Selection, Editor, TableOptionsDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableTableOptionsDialog= {true }\>`|
|StylesDialog|`DocumentEditor.Inject(Selection, Editor, StylesDialog,StyleDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableStyleDialog= {true ,enableStylesDialog= {true }\>`|
|StyleDialog|`DocumentEditor.Inject(Selection, Editor, StyleDialog)`|`<DocumentEditorComponent isReadOnly= {false} enableEditor= {true} enableStyleDialog= {true }\>`|

These modules should be injected into the documenteditor using the `Inject` directive.