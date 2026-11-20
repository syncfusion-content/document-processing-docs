---
layout: post
title: Print in React PPTX Editor | Syncfusion
description: Print feature in React PPTX Editor prints every slide of a loaded presentation through the browser print dialog using HTML, CSS, and SVG.
control: Print
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Print in React PPTX Editor

To print the loaded presentation, use the `print` method from the PPTX Editor instance. The method opens a print window that contains every slide, one slide per page, and invokes the browser print dialog.

Printing is available only when the `Print` module is injected and `enablePrint` is `true`. By default, `enablePrint` is `true`. If the module is not injected, or `enablePrint` is `false`, `print()` does nothing. `print()` also does nothing when no presentation is loaded.

N> The PPTX Editor prints slide content only. Speaker notes are not included in the print output.

## Print a loaded presentation

The following example injects the `Print` module, loads a presentation from `documentPath`, and prints it.

```tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PptxEditorComponent, Print } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Print);

function App() {
    let editor: PptxEditorComponent;
    function onCreated(): void {
        editor.print();
    }
    return (
       <div>
          <button onClick={onCreated}>Print</button>   
          <PptxEditorComponent
            id="pptx-editor"
            ref={(scope: PptxEditorComponent) => { editor = scope; }}
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
            enablePrint={true}
            created={onCreated}
           />
        </div>
    );
}
export default App;
```

You can also print from the File menu. When the `Print` module is injected and `enablePrint` is `true`, the File menu includes a **Print** item that calls `print()` for the loaded presentation. The item is disabled when print is not available.

## Disable print

Set `enablePrint` to `false` to hide the print workflow. The File menu **Print** item is disabled, and calling `print()` does nothing.

```tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PptxEditorComponent, Print } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Print);
function App() {
  let editor: PptxEditorComponent;
  function printPresentation(): void {
        const printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
        if (printWindow) {
            editor.print(printWindow);
        }
    }
    return (
      <div>
        <button onClick={printPresentation}>Print</button>
         <PptxEditorComponent
            id="pptx-editor"
            ref={(scope: PptxEditorComponent) => { editor = scope; }}
            documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
            enablePrint={false}
        />
      </div>
    );   
}
export default App;
```

## Print using a window object

You can print the presentation by passing a window instance. This is useful in hosts such as Electron, where a window instance is already available. Open the window from a user action so the browser does not treat it as a blocked popup. If the window cannot be opened, `print()` returns without printing.

```tsx
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { PptxEditorComponent, Print } from '@syncfusion/ej2-react-pptxeditor';

PptxEditorComponent.Inject(Print);

function App() {
    let editor: PptxEditorComponent;
    function printPresentation(): void {
        const printWindow = window.open('', 'print', 'height=452,width=1024,tabbar=no');
        if (printWindow) {
            editor.print(printWindow);
        }
    }
    return (
        <div>
            <button id="print" onClick={printPresentation}>Print</button>
            <PptxEditorComponent
                id="pptx-editor"
                ref={(scope: PptxEditorComponent) => { editor = scope; }}
                    documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
                enablePrint={true}
            />
        </div>
    );
}
export default App;
```
