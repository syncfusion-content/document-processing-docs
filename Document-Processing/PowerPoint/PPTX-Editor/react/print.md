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
            height={'590px'}
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
            height={'590px'}
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
                height={'590px'}
                documentPath="https://document.syncfusion.com/content/pptxeditor-resources/Sample.pptx"
                enablePrint={true}
            />
        </div>
    );
}
export default App;
```

## Page setup

Some print options cannot be configured from JavaScript. Use the browser's print dialog to choose the printer, copies, and related options:

* [Chrome](https://support.google.com/chrome/answer/1069693)
* [Firefox](https://support.mozilla.org/en-US/kb/how-print-web-pages-firefox)

The PPTX Editor sizes each printed page to the rendered slide. Slide size, margins, and layout come from the presentation. There is no page-setup dialog, and print does not change the loaded presentation.

N> The editor renders slides as HTML, CSS, and SVG, then prints that markup. It does not use a canvas or a device-pixel-ratio setting to control print quality. Colors are printed with `print-color-adjust: exact` so backgrounds and theme colors are preserved where the browser allows it.
