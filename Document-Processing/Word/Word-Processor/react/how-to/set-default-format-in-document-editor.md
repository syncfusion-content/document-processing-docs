---
layout: post
title: Set default format in React Document Editor | Syncfusion
description: Learn here all about Set default format in document editor in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Set default format in document editor 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Set default format in document editor in React Document editor component

You can set the default character format, paragraph format and section format in Document editor.

## Set the default character format

You can use [`setDefaultCharacterFormat`](https://ej2.syncfusion.com/react/documentation/api/document-editor#setdefaultcharacterformat) method to set the default character format. For example, Document editor default font size is 11 and you can change it as any valid value.

The following example code illustrates how to change the default font size in Document editor.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container = DocumentEditorContainerComponent;
  function onCreate() {
    container.documentEditor.setDefaultCharacterFormat({ fontSize: 20 });
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        height={'590px'}
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
        created={onCreate}
      />
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

Similarly, you can change the required [`CharacterFormatProperties`](https://ej2.syncfusion.com/react/documentation/api/document-editor/characterFormatProperties) default value.

The following example code illustrates how to change other character format default value in Document editor.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  CharacterFormatProperties,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container = DocumentEditorContainerComponent;
  function onCreate() {
    let defaultCharacterFormat = {
      bold: false,
      italic: false,
      baselineAlignment: 'Normal',
      underline: 'None',
      fontColor: '#000000',
      fontFamily: 'Algerian',
      fontSize: 12,
    };
    container.documentEditor.setDefaultCharacterFormat(defaultCharacterFormat);
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        height={'590px'}
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
        created={onCreate}
      />
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Set the default paragraph format

You can use [`setDefaultParagraphFormat`](https://ej2.syncfusion.com/react/documentation/api/document-editor#setdefaultparagraphformat) API to set the default paragraph format. You can change the required [`ParagraphFormatProperties`](https://ej2.syncfusion.com/react/documentation/api/document-editor/paragraphFormatProperties/) default value.

The following example code illustrates how to change the paragraph format(before spacing, line spacing etc.,) default value in Document editor.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  ParagraphFormatProperties,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container = DocumentEditorContainerComponent;
  function onCreate() {
    let defaultParagraphFormat = {
      beforeSpacing: 8,
      lineSpacing: 1.5,
      leftIndent: 24,
      textAlignment: 'Center',
    };
    container.documentEditor.setDefaultParagraphFormat(defaultParagraphFormat);
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        height={'590px'}
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
        created={onCreate}
      />
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.

## Set the default section format

You can use [`setDefaultSectionFormat`](https://ej2.syncfusion.com/react/documentation/api/document-editor#setdefaultsectionformat) API to set the default section format. You can change the required [`SectionFormatProperties`](https://ej2.syncfusion.com/react/documentation/api/document-editor/sectionFormatProperties/) default value.

The following example code illustrates how to change the section format(header and footer distance, page width and height, etc.,) default value in Document editor.

```ts
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  SectionFormatProperties,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container = DocumentEditorContainerComponent;
  function onCreate() {
    let defaultSectionFormat = {
      pageWidth: 500,
      pageHeight: 800,
      headerDistance: 56,
      footerDistance: 48,
      leftMargin: 12,
      rightMargin: 12,
      topMargin: 0,
      bottomMargin: 0,
    };
    container.documentEditor.setDefaultSectionFormat(defaultSectionFormat);
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope) => {
          container = scope;
        }}
        height={'590px'}
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
        created={onCreate}
      />
    </div>
  );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);


```

> The Web API hosted link `https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/` utilized in the Document Editor's serviceUrl property is intended solely for demonstration and evaluation purposes. For production deployment, please host your own web service with your required server configurations. You can refer and reuse the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server) for hosting your own web service and use for the serviceUrl property.
