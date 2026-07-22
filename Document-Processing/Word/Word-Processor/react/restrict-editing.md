---
layout: post
title: Restrict Editing in React DOCX Editor | Syncfusion
description: Learn how to enable Restrict Editing in the React DOCX Editor to securely manage document access and control user modifications.
control: Restrict editing 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---


# Restrict Editing in React DOCX Editor

[React DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) provides support for restricting editing within a document. It enables control over how and where content can be modified. This helps limit editing so only specific sections of the document can be changed.

## Configure on client side

The Document Editor provides options to protect and unprotect a document using the [enforceProtection](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#enforceprotection) and [stopProtection](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#stopprotection) APIs, enabling various restrict-editing operations.


### Read-only mode

The Document Editor supports protecting a document in read-only mode, where users can only view the content without making changes.

The following example code illustrates how to enforce or remove read-only protection in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar, } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  React.useEffect(() => {
    let sfdt = {"sfdt":"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"};
    container.documentEditor.open(JSON.stringify(sfdt));
  }, []);
  function enforceProtection() {
    //enforce protection
    container.documentEditor.editor.enforceProtection('123', 'ReadOnly');
  }
  function stopProtection() {
    //stop the document protection
    container.documentEditor.editor.stopProtection('123');
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope: DocumentEditorContainerComponent) => { container = scope; }}
        height="590px"
        // Use the following service URL only for demo purposes
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
      />
      <button onClick={enforceProtection}>EnforceProtection</button>
      <button onClick={stopProtection}>StopProtection</button>
    </div>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}



### Form filling mode

The Document Editor supports protecting a document with form-filling restrictions, allowing users to edit only form fields.

The following example code illustrates how to enforce or remove form-filling restrictions in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  React.useEffect(() => {
    let sfdt = { "sfdt": "UEsDBAoAAAAIAGlfyVyMVz+kgAMAAL0ZAAAEAAAAc2ZkdM1YW2+bMBT+K5H3GlUBEgi8Vd2iPexSbXmYVOXBgB2smsvAbdpGkab91P2S+QYJzaW0TQhRpM/BHJ/P5/t8gliCNGMkJk/oJw4Z8Fh+h/oARj7wMKQF6oMCBcC7WQrMcuAtQbYAnm2YfZBFwHNcPqAxH3DMNTKNvsYoBJ5l9wHWGOIMeAOOKVIDnyjgmcA3tLiGcwT6ACUYeDwcC+TTOSkRSSQ4AZ7BESnM5knBF7jMoU8CHp8EKS3kDPq9kEh9FshQNXMzW/GkcncZFlvzw7wQyDitJZ+jTGE+V+jr35GCewEcC5YI4mkeQ8rzUsFTTgRqVaKLya8QmW37OqOZWALGyOuBVX/XLZhJ6hFGpUxYFHQJRPIpemCGqJncJ+cHgOClkBG5KRkeU1X6ezUlKrpa7U7o36qQ9frVfRXjyfcfX6effk1rU4KpuXtNFfXvz9/N74ENGweoGTVqM3FnmzKeOuGLbrkMwxwVxdsNY57YMGZ3DWMKw8xEcWTJZ5XIVd8j1QgXTzzWEOXj0VeQEj8nvBR3crOF2rMPVbFVf+EhIrsKEqONMBisV8awNoV5q0MbVzjxdxmMkkR3TIVYI1Nk/UICVKB7JdUbSmnVmjXbW5G1HC+SarwISn+tHYwLzYhhqgYhW6jur1sw0l090sYqSoPFKn+mIIyYdiDGimCQxpmu/CPzNUtRByD+Pj5M5AfI4/Uoz0/tkOnF31fV5+c0eVinEP4TGT8jGJJk3jOOlfRFKcV/8qaWFwPHNWzbHg0cxxy4Q6currHd4pTT7brTe1/IPGJCGVlfczIaujZ4Zt71TXUL6+vqf3aj1W0WqHcVwRy8UMXyJnWM26H7EWF4R1nvGuZwnsMs6k3ShFXc9kzXOK6eb8RszQ6vc4O5zw1Wu24wm7jB3O8G61xuKLlZHRXY2iewebBixsRybOuIAltNBLb2C3w6ug0FHnZU4OG2wGT94NfeCR42EXi4S+BT020o8KijAo92nOAWdR010XW08+CeVU67o3Lar5Lz6H3YbiKn/Uo5W2i/TkfldN7Wfo+uq9NEV+et7bcFgccdFXi87wFqcDE6WDNLfo4o8biJxOP9j1CnJNxQZLejIruHTvF51HabqO0ePtBdkB3lx9F89+uq7ZcytYLK2mkWJalJmrLzk9IsxCtIKl8r88WowiBWmOufDwpJPC/ksv8BUEsBAhQACgAAAAgAaV/JXIxXP6SAAwAAvRkAAAQAAAAAAAAAAAAAAAAAAAAAAHNmZHRQSwUGAAAAAAEAAQAyAAAAogMAAAAA" };
    container.documentEditor.open(JSON.stringify(sfdt));
  }, []);
  function enforceProtection() {
    //enforce protection
    container.documentEditor.editor.enforceProtection('123', 'FormFieldsOnly');
  }
  function stopProtection() {
    //stop the document protection
    container.documentEditor.editor.stopProtection('123');
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope: DocumentEditorContainerComponent) => { container = scope; }}
        height="590px"
      // Use the following service URL only for demo purposes 
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
      />
      <button onClick={enforceProtection}>EnforceProtection</button>
      <button onClick={stopProtection}>StopProtection</button>
    </div>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

### Comments only mode

The Document Editor supports protecting a document in comments-only mode, allowing users to add or edit comments only.

The following example code illustrates how to enforce and remove comments-only protection in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  React.useEffect(() => {
    let sfdt = {"sfdt":"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"};
    container.documentEditor.open(JSON.stringify(sfdt));
  }, []);
  function enforceProtection() {
    //enforce protection
    container.documentEditor.editor.enforceProtection('123', 'CommentsOnly');
  }
  function stopProtection() {
    //stop the document protection
    container.documentEditor.editor.stopProtection('123');
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope: DocumentEditorContainerComponent) => { container = scope; }}
        height="590px"
      // Use the following service URL only for demo purposes
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
      />
      <button onClick={enforceProtection}>EnforceProtection</button>
      <button onClick={stopProtection}>StopProtection</button>
    </div>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

### Track changes only mode

The Document Editor supports protecting a document in revisions-only mode, allowing users to view the document and make corrections while tracking all changes. Users cannot accept or reject tracked changes; only the author can review and finalize them later.

The following example code illustrates how to enforce and remove revisions-only protection in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import * as React from 'react';
import {
  DocumentEditorContainerComponent,
  Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
  let container: DocumentEditorContainerComponent;
  React.useEffect(() => {
    let sfdt = {"sfdt":"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"};
    container.documentEditor.open(JSON.stringify(sfdt));
  }, []);
  function enforceProtection() {
    //enforce protection
    container.documentEditor.editor.enforceProtection('123', 'RevisionsOnly');
  }
  function stopProtection() {
    //stop the document protection
    container.documentEditor.editor.stopProtection('123');
  }
  return (
    <div>
      <DocumentEditorContainerComponent
        id="container"
        ref={(scope: DocumentEditorContainerComponent) => { container = scope; }}
        height="590px"
      // Use the following service URL only for demo purposes 
        serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
        enableToolbar={true}
      />
      <button onClick={enforceProtection}>EnforceProtection</button>
      <button onClick={stopProtection}>StopProtection</button>
    </div>
  );
};
export default App;

{% endhighlight %}
{% endtabs %}

### Format restrictions

The Document Editor enforces document protection using the specified credentials. In the [enforceProtection](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#enforceprotection-1) method, the second parameter represents `limitToFormatting`, and the third parameter represents `isReadOnly`.

{% tabs %}
{% highlight ts tabtitle="TS" %}

container.documentEditor.editor.enforceProtection('password', true, true);

{% endhighlight %}
{% endtabs %}

## Configure on server side

The above-mentioned hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service as shown below. 

The Document Editor client requires a server-side API to generate a hash from the specified password and salt values, which is necessary for the restrict editing functionality.  

For more information on configuring restrict editing on the server side, refer to the following:

- [Web Service for Restrict editing in ASP.NET Core ](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/core#restrict-editing)

- [Web Service for Restrict editing in ASP.NET MVC ](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/mvc#restrict-editing)

- [Web Service for Restrict editing in Java ](https://help.syncfusion.com/document-processing/word/word-processor/react/web-services/java#restrict-editing)

## Set current user

The [currentUser](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documenteditor#currentuser) property can be used to authorize the current document user by name, email, or user group.

The following code example demonstrates how to set the `currentUser`.

{% tabs %}
{% highlight ts tabtitle="TS" %}

container.documentEditor.currentUser = 'engineer@mycompany.com';

{% endhighlight %}
{% endtabs %}

## Protect document with editable region

Users can select a specific section and mark it as an editable region, allowing modification only in that part. The rest of the document remains protected from any changes.

### Insert editable region

Use the [insertEditingRegion](https://ej2.syncfusion.com/react/documentation/api/document-editor/editor#inserteditingregion) method to mark specific paragraphs as editable. This allows you to control editing by giving access to all users or only selected users.

The following example shows how to insert an editable region.
{% tabs %}
{% highlight ts tabtitle="TS" %}
 
// Allow editing for all users
container.documentEditor.editor.insertEditingRegion();
 
// pass a username to restrict access
container.documentEditor.editor.insertEditingRegion("User Name");
 
{% endhighlight %}
{% endtabs %}
 
### Highlight color for editable region
 
The [userColor](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/index-default#usercolor) property can be used to highlight the editable region of the current user.
 
The following code example demonstrates how to set the userColor.
 
{% tabs %}
{% highlight ts tabtitle="TS" %}
 
container.documentEditor.userColor = '#fff000';
 
{% endhighlight %}
{% endtabs %}
 
### Enable or disable editable region highlighting
 
The [highlightEditableRanges](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/documenteditorsettingsmodel#highlighteditableranges) property can be used to toggle the highlighting of editable regions.
 
The following code example demonstrates how to enable or disable editable region highlighting.
 
{% tabs %}
{% highlight ts tabtitle="TS" %}
 
container.documentEditor.documentEditorSettings.highlightEditableRanges = true;
 
{% endhighlight %}
{% endtabs %}
 

## Restrict Editing Pane

Restrict Editing Pane provides the following options to manage the document:
* To apply formatting restrictions to the current document, select the allow formatting check box.
* To apply editing restrictions to the current document, select the read only check box.
* To add users to the current document, select more users option and add user from the popup dialog.
* To include range permission to the current document, select parts of the document and choose users who are allowed to freely edit them from the listed check box.
* To apply the chosen editing restrictions, click the **YES, START ENFORCING PROTECTION** button. A dialog box displays asking for a password to protect.
* To stop protection, select **STOP PROTECTION** button. A dialog box displays asking for a password to stop protection.

The following code shows Restrict Editing Pane. To unprotect the document, use password '123'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/react/base-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/react/base-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/react/base-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/document-editor/react/base-cs6" %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

## Online Demo

Explore how to restrict editing and protect Word documents using the React Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/document-protection).