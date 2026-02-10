---
layout: post
title: Getting started with React Document Editor component | Syncfusion
description: Checkout and learn about Getting started with React Document Editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with React Document Editor component

This section explains the steps to create a Word document editor within your application and demonstrates the basic usage of the Document Editor component.

To get started quickly with DocumentEditor component, you can check the video below.

{% youtube "https://www.youtube.com/watch?v=tgJgvbnxdBA" %}

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> Document Editor](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Dependencies

The following list shows the minimum dependencies required to use the Document Editor component:

```javascript
|-- @syncfusion/ej2-react-documenteditor
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-build
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-documenteditor
    |-- @syncfusion/ej2-charts
```

### Server-side dependencies

The Document Editor component requires server-side interactions for the following operations:

* [Open file formats other than SFDT](./import#convert-word-documents-into-sfdt)
* [Paste with formatting](./clipboard#paste-with-formatting)
* [Restrict editing](./document-management)
* [Spell check](./spell-check)
* [Save as file formats other than SFDT and DOCX](./saving-documents/server-side-export)

>Note: If you don't require the above functionalities, you can deploy the component as a pure client-side solution without any server-side interactions.

For detailed information about server-side dependencies, refer to the [Web Services Overview](./web-services-overview) page.

## Setup for local development

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

### Create a new React application

To create a new React application, run the following command:

```bash
npm create vite@latest my-app
```

### Set up TypeScript environment

To set up a React application in a TypeScript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```

### Set up JavaScript environment

To set up a React application in a JavaScript environment, run the following commands:

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```


## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry.
You can choose the component that you want to install.

To install the Document Editor component, use the following command:

```bash
npm install @syncfusion/ej2-react-documenteditor --save
```

>Note: The `--save` flag instructs npm to include the Document Editor package inside the dependencies section of the `package.json` file.

## Adding CSS reference

Add the Document Editor component and its dependent component styles available in the `node_modules/@syncfusion` package folder. Reference these styles in the `src/App.css` file:

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-documenteditor/styles/material.css";
```

>Note: To learn about individual component CSS files, refer to the [Individual Component theme files](https://ej2.syncfusion.com/react/documentation/appearance/theme#referring-individual-control-theme) section.

## Choosing a component

Syncfusion offers two Document Editor components with different feature sets:

* **DocumentEditorContainer**: A complete solution with a predefined toolbar and properties pane for comprehensive document editing
* **DocumentEditor**: A customizable component where you build the UI according to your specific requirements

>Note: Starting from version `v19.3.0.x`, the text size measurement accuracy has been optimized to match Microsoft Word pagination for most documents. This improvement is enabled by default. You can [disable it to retain the pagination behavior of older versions](./how-to/disable-optimized-text-measuring) if needed.

### DocumentEditorContainer component

The DocumentEditorContainer component provides a complete document editing experience with a predefined toolbar and properties pane, allowing users to create, view, and edit Word documents with minimal configuration.

#### Adding DocumentEditorContainer component

Add the DocumentEditorContainer component to your application. In the `src/App.tsx` file, add the following code to initialize the component:

{% raw %}

```ts
import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    return (
        <DocumentEditorContainerComponent 
            id="container" 
            height={'590px'} 
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
            enableToolbar={true}
        />
    );
}

export default App;
```

{% endraw %}

>Important: The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, host your own web service with the required server configurations. Refer to the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or use the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service.

#### Run the DocumentEditorContainer application

Run the following command in the console to start the development server:

```bash
npm run dev
```

The DocumentEditorContainer output will be displayed as follows:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/document-editor/react/base-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/document-editor/react/base-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="app.html" %}
{% include code-snippet/document-editor/react/base-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs3" %}

### DocumentEditor component

The DocumentEditor component provides a flexible foundation for creating, viewing, and editing Word documents. Unlike DocumentEditorContainer, this component allows you to customize the UI options based on your specific requirements.

#### Adding DocumentEditor component

Add the DocumentEditor component to your application. In the `src/App.tsx` file, add the following code to initialize the component with the required services:

```ts
import * as React from 'react';
import { 
    DocumentEditorComponent, 
    Print, 
    SfdtExport, 
    WordExport, 
    TextExport, 
    Selection, 
    Search, 
    Editor, 
    ImageResizer, 
    EditorHistory, 
    ContextMenu, 
    OptionsPane, 
    HyperlinkDialog, 
    TableDialog, 
    BookmarkDialog, 
    TableOfContentsDialog, 
    PageSetupDialog, 
    StyleDialog, 
    ListDialog, 
    ParagraphDialog, 
    BulletsAndNumberingDialog, 
    FontDialog, 
    TablePropertiesDialog, 
    BordersAndShadingDialog, 
    TableOptionsDialog, 
    CellOptionsDialog, 
    StylesDialog 
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(
    Print, 
    SfdtExport, 
    WordExport, 
    TextExport, 
    Selection, 
    Search, 
    Editor, 
    ImageResizer, 
    EditorHistory, 
    ContextMenu, 
    OptionsPane, 
    HyperlinkDialog, 
    TableDialog, 
    BookmarkDialog, 
    TableOfContentsDialog, 
    PageSetupDialog, 
    StyleDialog, 
    ListDialog, 
    ParagraphDialog, 
    BulletsAndNumberingDialog, 
    FontDialog, 
    TablePropertiesDialog, 
    BordersAndShadingDialog, 
    TableOptionsDialog, 
    CellOptionsDialog, 
    StylesDialog
);

function App() {
    return (
        <DocumentEditorComponent 
            id="container" 
            height={'330px'} 
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/" 
            isReadOnly={false} 
            enablePrint={true} 
            enableSelection={true} 
            enableEditor={true} 
            enableEditorHistory={true} 
            enableContextMenu={true} 
            enableSearch={true} 
            enableOptionsPane={true} 
            enableBookmarkDialog={true} 
            enableBordersAndShadingDialog={true} 
            enableFontDialog={true} 
            enableTableDialog={true} 
            enableParagraphDialog={true} 
            enableHyperlinkDialog={true} 
            enableImageResizer={true} 
            enableListDialog={true} 
            enablePageSetupDialog={true} 
            enableSfdtExport={true} 
            enableStyleDialog={true} 
            enableTableOfContentsDialog={true} 
            enableTableOptionsDialog={true} 
            enableTablePropertiesDialog={true} 
            enableTextExport={true} 
            enableWordExport={true} 
        />
    );
}

export default App;
```

>Important: The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` used in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, host your own web service with the required server configurations. Refer to the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or use the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service.

#### Run the DocumentEditor application

Run the following command to compile and start the application:

```bash
npm run dev
```

The Document Editor output will be displayed as follows:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/document-editor/react/base-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/document-editor/react/base-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="App.html" %}
{% include code-snippet/document-editor/react/base-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs2" %}

## Next steps

After successfully setting up the Document Editor component, explore these resources to enhance your implementation:

* [How to localize the Document Editor container](./global-local)
* [How to load a document by default](./how-to/open-default-document)
* [How to customize the toolbar](./how-to/customize-tool-bar)
* [How to resize the Document Editor component](./how-to/resize-document-editor)
* [How to add a save button to the DocumentEditorContainer toolbar](./how-to/add-save-button-in-toolbar)

## Troubleshooting

If you encounter issues during setup, consider the following:

* Ensure all dependencies are correctly installed by running `npm install`
* Verify that your Node.js version meets the minimum requirements
* Check that the CSS imports are correctly referenced in your project structure
* Clear the npm cache if dependency conflicts occur: `npm cache clean --force`
* For server-side functionality issues, verify your web service is properly configured and accessible
