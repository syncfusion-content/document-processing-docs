---
layout: post
title: Right to Left in React DOCX Editor | Syncfusion
description: Right-to-left support in React DOCX Editor enables RTL user interfaces, including menus, dialogs, and text direction for RTL languages.
control: Right to Left
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Right to Left in React DOCX Editor

[React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) provides RTL (right-to-left) support. This can be enabled using the `enableRtl` property.

## Enable right-to-left layout

Set the [`enableRtl`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documenteditormodel#enablertl) property to `true` to render the DOCX Editor user interface — including the toolbar or ribbon, menus, dialogs, and property pane - in a right-to-left layout.

```ts
import * as ReactDOM from 'react-dom';
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
      enableRtl={true}
    />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
```

## Localize the DOCX Editor for RTL languages

To fully localize the DOCX Editor for right-to-left languages such as Arabic, set the [`locale`](https://ej2.syncfusion.com/react/documentation/api/document-editor/documenteditormodel#locale) property to a right-to-left culture and load the localized strings. This translates the built-in texts of the toolbar, dialogs, and context menus into the specified language.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/rtl-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/rtl-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/rtl-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/rtl-cs1" %}

## Online Demo

Explore how to enable right-to-left layout in Word documents using the React DOCX Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/right-to-left).
