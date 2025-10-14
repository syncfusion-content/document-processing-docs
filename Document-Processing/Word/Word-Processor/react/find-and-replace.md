---
layout: post
title: Find and replace in React Document editor component | Syncfusion
description: Learn here all about Find and replace in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Find and replace 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Find and replace in React Document editor component

The document editor component searches a portion of text in the document through a built-in interface called `OptionsPane` or rich APIs. When used in combination with selection performs various operations on the search results like replacing it with some other text, highlighting it, making it bolder, and more.

## Options pane

This provides the options to search for a portion of text in the document. After search operation is completed, the search results will be displayed in a list and options to navigate between them. The current occurrence of matched text or all occurrences with another text can be replaced by switching to `Replace` tab. This pane is opened using the keyboard shortcut `CTRL+F`. You can also open it programmatically using the following sample code.

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  SfdtExport,
  Selection,
  Editor,
  OptionsPane,
} from '@syncfusion/ej2-react-documenteditor';

//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, OptionsPane);
function App() {
  let documenteditor;
  React.useEffect(() => {
    ComponentDidMount();
  }, []);
  function ComponentDidMount() {
    let sfdt = `{
            "sections": [
                {
                    "blocks": [
                        {
                            "inlines": [
                                {
                                    "characterFormat": {
                                        "bold": true,
                                        "italic": true
                                    },
                                    "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                                }
                            ]
                        }
                    ]
                }
            ]
        }`;
    //Open the document in Document Editor.
    documenteditor.open(sfdt);
  }

  function ShowHideOptionsPane() {
    //Open options pane.
    documenteditor.showOptionsPane();
  }
  return (
    <div>
      <button onClick={ShowHideOptionsPane}>OptionsPane</button>
      <DocumentEditorComponent
        id="container"
        height={'330px'}
        ref={(scope) => {
          documenteditor = scope;
        }}
        isReadOnly={false}
        enableSelection={true}
        enableEditor={true}
        enableSearch={true}
        enableOptionsPane={true}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

You can close the options pane by pressing `Esc` key.

## Search

The [`Search`](https://ej2.syncfusion.com/react/documentation/api/document-editor/search/) module of Document Editor exposes the following APIs:

|API Name|Type |Description|
|---|---|---|
|[`findAll()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/search#findall)| Method |Searches for specified text in the whole document and highlights it with yellow.|
|[`searchResults`](https://ej2.syncfusion.com/react/documentation/api/document-editor/search#searchresults) |Property |This is an instance of [`SearchResults`](https://ej2.syncfusion.com/react/documentation/api/document-editor/searchresults/).|
|[`find()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/search#find) | Method |Find immediate occurrence of specified text from cursor position in the document and highlights it with yellow.|

### Find the immediate occurrence in the document

Using [`find()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/search#find) method, you can find the immediate occurrence of specified text from current cursor position in the document.

The following example code illustrates how to use find in Document editor.

```ts
documenteditor.search.find('Some text', 'None');
```

>Note: Second parameter is optional parameter and it denotes find Options. Possible values of find options are `'None' |'WholeWord' |'CaseSensitive'| 'CaseSensitiveWholeWord'`.

### Find all the occurrences in the document

Using [`findAll()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/search#findall) method, you can find all the occurrences of specified text in the whole document and highlight it with yellow.

The following example code illustrates how to find All the text in the document.

```ts
documenteditor.search.findAll('Some text', 'None');
```

>Note: Second parameter is optional parameter and it denotes find Options. Possible values of find options are `'None' |'WholeWord' |'CaseSensitive'| 'CaseSensitiveWholeWord'`.

## Search results

The [`SearchResults`](https://ej2.syncfusion.com/react/documentation/api/document-editor/searchResults/) class provides information about the search results after a search operation is completed that can be identified using the [`searchResultsChange`](https://ej2.syncfusion.com/react/documentation/api/document-editor#searchresultschange) event. This will expose the following APIs:

|API Name|Type |Description|
|---|---|---|
|[`length`](https://ej2.syncfusion.com/react/documentation/api/document-editor/searchResults#length)|Property|Returns the total number of results found on the search.|
|[`index`](https://ej2.syncfusion.com/react/documentation/api/document-editor/searchResults#index)|Property|Returns the index of selected search result. You can change the value for this property to move the selection.|
|[`replaceAll()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/searchResults#replaceall)|Method|Replaces all the occurrences with specified text.|
|[`clear()`](https://ej2.syncfusion.com/react/documentation/api/document-editor/searchresults#clear)|Method|Clears the search result.|

### Replace all the occurrences

Using [`replaceAll`](https://ej2.syncfusion.com/react/documentation/api/document-editor/searchResults#replaceall), you can replace all the occurrences with specified text.

The following example code illustrates how to use replace All in Document editor.

```ts
documentEditor.search.findAll ('Some text');
// Replace all the searched text with word 'Mike'
documentEditor.search.searchResults.replaceAll("Mike");  
```

### Replace

Using [`insertText`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#inserttext), you can replace the current searched text with specified text and it replace single occurrence.

>Note: This [`insertText`](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#inserttext) API accepts following control characters
>* New line characters ("\r", "\r\n", "\n") - Inserts a new paragraph and appends the remaining text to the new paragraph.
>* Line break character ("\v") - Moves the remaining text to start in new line.
>* Tab character ("\t") - Allocates a tab space and continue the next character.

The following example code illustrates how to find a text in the document and replace each occurrence of the text one by one programmatically.

```ts
documentEditor.search.findAll('works');

let searchLength: number = documentEditor.search.searchResults.length;

for (let i = searchLength - 1; i >= 0; i--) {
  // It will move selection to specific searched index,move to each occurrence one by one
  documentEditor.search.searchResults.index = i;
  // Replace it with some text
  documentEditor.editor.insertText('Hello');
}

container.documentEditor.search.searchResults.clear();
```

## Customize find and replace

Using the exposed APIs, you can customize the find and replace functionality in your application. Refer to the following sample code.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  SfdtExport,
  Selection,
  Editor,
  Search,
} from '@syncfusion/ej2-react-documenteditor';

//Inject require module.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, Search);
function App() {
  let documenteditor;
  React.useEffect(() => {
    ComponentDidMount();
  }, []);
  function ComponentDidMount() {
    let sfdt = `{
            "sections": [
                {
                    "blocks": [
                        {
                            "inlines": [
                                {
                                    "characterFormat": {
                                        "bold": true,
                                        "italic": true
                                    },
                                    "text": "Adventure Works Cycles, the fictitious company on which the AdventureWorks sample databases are based, is a large, multinational manufacturing company. The company manufactures and sells metal and composite bicycles to North American, European and Asian commercial markets. While its base operation is located in Bothell, Washington with 290 employees, several regional sales teams are located throughout their market base."
                                }
                            ]
                        }
                    ]
                }
            ]
        }`;
    //Open the document in Document Editor.
    documenteditor.open(sfdt);
  }

  function replaceAll() {
    let textToFind = document.getElementById('find_text').value;
    let textToReplace = document.getElementById('replace_text').value;
    if (textToFind !== '') {
      // Find all the occurences of given text
      documenteditor.searchModule.findAll(textToFind);
      if (documenteditor.searchModule.searchResults.length > 0) {
        // Replace all the occurences of given text
        documenteditor.searchModule.searchResults.replaceAll(textToReplace);
      }
    }
  }

  return (
    <div>
      <div>
        <table>
          <tr>
            <td>
              <label>Text to find:</label>
            </td>
            <td>
              <input type="text" id="find_text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Text to replace:</label>
            </td>
            <td>
              <input type="text" id="replace_text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <button onClick={replaceAll}>Replace All</button>
            </td>
          </tr>
        </table>
      </div>

      <DocumentEditorComponent
        id="container"
        height={'590px'}
        ref={(scope) => {
          documenteditor = scope;
        }}
        isReadOnly={false}
        enableSelection={true}
        enableEditor={true}
        enableSearch={true}
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));


```

## See Also

* [Options pane](./dialog#options-pane)
* [Feature modules](./feature-module)
