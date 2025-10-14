---
layout: post
title: Dialog in React Document editor component | Syncfusion
description: Learn here all about Dialog in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Dialog 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Dialog in React Document editor component

Document Editor provides dialog support to major operations such as insert or edit hyperlink, formatting text, paragraph, style, list and table properties.

## Font Dialog

Font dialog allows you to modify all text properties for selected contents at once such as bold, italic, underline, font size, font color, strikethrough, subscript and superscript.

>Document Editor features are segregated into individual feature-wise modules. To use font Dialog, inject ‘FontDialog’ module using the ‘DocumentEditor.Inject(Selection, SfdtExport, Editor, FontDialog)’.
>To enable font dialog for a document editor instance, set ‘enableFontDialog’ to true.

Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/dialog-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/dialog-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/dialog-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/dialog-cs1" %}

## Paragraph dialog

This dialog allows modifying the paragraph formatting for selection at once such as text alignment, indentation, and spacing.

To open this dialog, refer to the following example.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor, ParagraphDialog } from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, ParagraphDialog);
function App() {
    let documenteditor: DocumentEditorComponent;
        return (
            <div>
                <button onClick={showParagraphDialog}>Dialog</button>
                <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => {documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableParagraphDialog={true} />
            </div>
        );
        function showParagraphDialog(){
          //Open paragraph dialog.
         documenteditor.showDialog('Paragraph');
      }
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));

```


## Table dialog

This dialog allows creating and inserting a table at cursor position by specifying the required number of rows and columns.

To open this dialog, refer to the following example.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, TableDialog
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, TableDialog);
function App() {
  let documenteditor: DocumentEditorComponent = new DocumentEditorComponent(undefined);
  function ShowTableDialog() {
    //Open table dialog.
    documenteditor.showDialog('Table');
  }
  return (
    <div>
      <button onClick={ShowTableDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableTableDialog={true} />
    </div>
  );
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));

```


## Bookmark dialog

This dialog allows you to perform the following operations:

* View all bookmarks.
* Navigate to a bookmark.
* Create a bookmark at current selection.
* Delete an existing bookmark.
To open this dialog, refer to the following example.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, BookmarkDialog
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, BookmarkDialog);
function App() {
  let documenteditor: DocumentEditorComponent = new DocumentEditorComponent(undefined);
  function ShowBookmarkDialog() {
    //Open bookmark dialog.
    documenteditor.showDialog('Bookmark');
  }
  return (
    <div>
      <button onClick={ShowBookmarkDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableBookmarkDialog={true} />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```


## Hyperlink dialog

This dialog allows editing or inserting a hyperlink at cursor position.

To open this dialog, refer to the following example.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, HyperlinkDialog
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, HyperlinkDialog);
function App() {
  let documenteditor: DocumentEditorComponent = new DocumentEditorComponent(undefined);
  function ShowHyperlinkDialog() {
    //Open hyperlink dialog;
    documenteditor.showDialog('Hyperlink');
  }
  return (
    <div>
      <button onClick={ShowHyperlinkDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableHyperlinkDialog={true} />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## Table of contents dialog

This dialog allows creating and inserting table of contents at cursor position. If the table of contents already exists at cursor position, you can customize its properties.

To open this dialog, refer to the following example.



```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, TableOfContentsDialog, EditorHistory
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, TableOfContentsDialog, EditorHistory);
function App() {
  let documenteditor: DocumentEditorComponent = new DocumentEditorComponent(undefined);
  function ShowTableOfContentsDialog() {
    //Open table of contents dialog.
    documenteditor.showDialog('TableOfContents');
  }
  return (
    <div>
      <button onClick={ShowTableOfContentsDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableTableOfContentsDialog={true} enableEditorHistory={true} />
    </div>
  );
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));

```


## Styles Dialog

This dialog allows managing the styles in a document. It will display all the styles in the document with options to modify the properties of the existing style or create new style with the help of ‘Style dialog’. Refer to the following example.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, StyleDialog, StylesDialog, EditorHistory
} from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, StyleDialog, StylesDialog, EditorHistory);
function App() {
  let documenteditor: DocumentEditorComponent;
  function ShowStylesDialog() {
    //Open styles dialog.
    documenteditor.showDialog('Styles');
  }
  return (
    <div>
      <button onClick={ShowStylesDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableStyleDialog={true} enableEditorHistory={true} />
    </div>
  );
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));

```


## Style dialog

You can directly use this dialog for modifying any existing style or add new style by providing the style name.

To open this dialog, refer to the following example.

```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, StyleDialog, StylesDialog, EditorHistory
} from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, StyleDialog, StylesDialog, EditorHistory);
function App() {
  let documenteditor: DocumentEditorComponent;
  function ShowStyleDialog() {
    //Open style dialog.
    documenteditor.showDialog('Style');
  }
  return (
    <div>
      <button onClick={ShowStyleDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableStyleDialog={true} enableEditorHistory={true} />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## List dialog

This dialog allows creating a new list or modifying existing lists in the document.

To open this dialog, refer to the following example.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, ListDialog
} from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, ListDialog);
function App() {
  let documenteditor: DocumentEditorComponent;
  function showListDialog() {
    //Open list dialog.
    documenteditor.showDialog('List');
  }
  return (
    <div>
      <button onClick={showListDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableListDialog={true} />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Borders and shading dialog

This dialog allows customizing the border style, border width, and background color of the table or selected cells.

To open this dialog, refer to the following example.


```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, BordersAndShadingDialog, EditorHistory
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, BordersAndShadingDialog, EditorHistory);
function App() {
  let documenteditor: DocumentEditorComponent;
  React.useEffect(() => {
  ComponentDidMount();
  }, []);
  function ComponentDidMount() {
    //Insert table
    documenteditor.editor.insertTable(2, 2);
  }

  function ShowBordersAndShadingDialog() {
    //Open borders and shading dialog.
    documenteditor.showDialog('BordersAndShading');
  }
  return (
    <div>
      <button onClick={ShowBordersAndShadingDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableBordersAndShadingDialog={true} enableEditorHistory={true} />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## Table options dialog

This dialog allows customizing the default cell margins and spacing between each cells of the selected table.

To open this dialog, refer to the following example.


```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, TableOptionsDialog, TablePropertiesDialog, EditorHistory
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, TableOptionsDialog, TablePropertiesDialog, EditorHistory);
function App() {
  let documenteditor: DocumentEditorComponent;
  React.useEffect(() => {
  ComponentDidMount();
  }, []);
  function ComponentDidMount() {
    //Insert table.
    documenteditor.editor.insertTable(2, 2);
  }

  function ShowTableOptionsDialog() {
    //Open table options dialog.
    documenteditor.showDialog('TableOptions');
  }
  return (
    <div>
      <button onClick={ShowTableOptionsDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableTableOptionsDialog={true} enableTablePropertiesDialog={true} enableEditorHistory={true} />
    </div>
  );
}
export default App
ReactDOM.render(<App />, document.getElementById('sample'));

```

## Table properties dialog

This dialog allows customizing the table, row, and cell properties of the selected table.

To open this dialog, refer to the following example.


```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, TableOptionsDialog, TablePropertiesDialog, BordersAndShadingDialog, EditorHistory
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, BordersAndShadingDialog, TableOptionsDialog, TablePropertiesDialog, EditorHistory);
function App() {
  let documenteditor: DocumentEditorComponent;
  React.useEffect(() => {
  ComponentDidMount();
  }, []);
  function ComponentDidMount() {
    //Insert table.
    documenteditor.editor.insertTable(2, 2);
  }

  function ShowTablePropertiesDialog() {
    //Open table properties dialog.
    documenteditor.showDialog('TableProperties');
  }
  return (
    <div>
      <button onClick={ShowTablePropertiesDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableBordersAndShadingDialog={true} enableTableOptionsDialog={true} enableTablePropertiesDialog={true} enableEditorHistory={true} />
    </div>
  );

}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## Page setup dialog

This dialog allows customizing margins, size, and layout options for pages of the section.

To open this dialog, refer to the following example.


```ts

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent, SfdtExport, Selection, Editor, PageSetupDialog
} from '@syncfusion/ej2-react-documenteditor';


DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, PageSetupDialog);
function App() {
  let documenteditor: DocumentEditorComponent;
  function ShowPageSetupDialog() {
    //Open page setup dialog.
    documenteditor.showDialog('PageSetup');
  }
  return (
    <div>
      <button onClick={ShowPageSetupDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enablePageSetupDialog={true} />
    </div>
  );

}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

## See Also

* [Feature modules](./feature-module)
