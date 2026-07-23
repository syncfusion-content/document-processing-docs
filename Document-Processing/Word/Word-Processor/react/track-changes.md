---
layout: post
title: Track Changes in React DOCX Editor | Syncfusion
description: Learn how to enable Track Changes in React Document Editor and manage document revisions by accepting or rejecting edits made by multiple reviewers.
control: Track changes 
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Track Changes in React Document Editor

[React Document Editor](https://www.syncfusion.com/docx-editor-sdk/react-docx-editor) (Document Editor) supports Track Changes functionality, which allows you to keep a record of changes or edits made to a document. You can then choose to accept or reject these modifications. It is a useful tool for managing changes made by several reviewers to the same document. When the Track Changes option is enabled, all editing operations are preserved as revisions.

## Enable Track changes

Track Changes can be enabled using the [enableTrackChanges](https://ej2.syncfusion.com/react/documentation/api/document-editor-container/index-default#enabletrackchanges) property. When enabled, all editing operations are recorded and preserved as revisions in the Document Editor.

The following example demonstrates how to enable track changes.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';

import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
let documenteditor;
function App() {
    return (
        <DocumentEditorContainerComponent
            id="container"
            height="590px"
            ref={(scope) => {
                documenteditor = scope;
            }}
            // Use the following service URL only for demo purposes
            serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
            enableToolbar={true}
            enableTrackChanges={true}
        />
    );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

{% endhighlight %}
{% endtabs %}

N> 1. Track changes are document-level settings. When opening a document, if the document does not have track changes enabled, then `enableTrackChanges` will be disabled even if you set `enableTrackChanges: true` in the initial rendering.
N> 2. If you want to enable track changes for all documents, we recommend enabling track changes in the `documentChange` event. 

The following example demonstrates how to enable track changes for the all the document while opening.

{% tabs %}
{% highlight ts tabtitle="TS" %}

container.current.documentChange = () => {
      if (container.current !== null) {
        container.current.documentEditor.enableTrackChanges = true;
      }
    };

{% endhighlight %}
{% endtabs %}

## Show or hide revisions pane

The Show or Hide Revisions Pane option allows users to toggle the visibility of the revisions pane, providing flexibility in managing tracked changes within the document.

The following example code illustrates how to show or hide the revisions pane.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import { createRoot } from 'react-dom/client';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

// Inject the required modules
DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    let container = null;

    React.useEffect(() => {
        if (container != null) {
            container.documentEditor.showRevisions = true; // To show revisions pane
            container.documentEditor.showRevisions = false; // To hide revisions pane
        }
    }, [container]); // Re-run the effect when the container is initialized

    return (
        <div>
            <DocumentEditorContainerComponent
                id="container"
                ref={(scope) => {
                    container = scope; // Assign the container ref
                }}
                height={'590px'}
                // Use the following service URL only for demo purposes
                serviceUrl="https://document.syncfusion.com/web-services/docx-editor/api/documenteditor/"
                enableToolbar={true}
                enableTrackChanges={true}
            />
        </div>
    );
}

export default App;

// Render the App component into the sample div
createRoot(document.getElementById('sample')).render(<App />);

{% endhighlight %}
{% endtabs %}

N> The hosted Web API URL is for demo and evaluation purposes only. For production, host your own web service using the [GitHub Web Service example](https://github.com/SyncfusionExamples/EJ2-Document-Editor-Web-Services) or the [Docker image](https://hub.docker.com/r/syncfusion/word-processor-server).

## Get all tracked revisions

Use the [revisions collection](https://ej2.syncfusion.com/documentation/api/document-editor/revisioncollection) on the Document Editor instance to retrieve all tracked revisions from the current document.

The following example demonstrates how to get all tracked revisions from the current document.

{% tabs %}
{% highlight ts tabtitle="TS" %}

<DocumentEditorComponent id="container" ref={(scope) => { documenteditor = scope; }} enableTrackChanges={true}/>
/**
 * Get revisions from the current document
 */
let revisions : RevisionCollection = documentEditor.revisions;

{% endhighlight %}
{% endtabs %}

## Accept or reject all changes

Use `acceptAll()` or `rejectAll()` to apply or discard every tracked change at once, without reviewing each individually.

The following example demonstrates how to accept or reject all changes.

{% tabs %}
{% highlight ts tabtitle="TS" %}

<DocumentEditorComponent id="container" ref={(scope) => { documenteditor = scope; }} enableTrackChanges={true} />
/**
 * Get revisions from the current document
 */
let revisions: RevisionCollection = documentEditor.revisions;
/**
 * Accept all tracked changes
 */
revisions.acceptAll();
/**
 * Reject all tracked changes
 */
revisions.rejectAll();

{% endhighlight %}
{% endtabs %}

## Accept or reject a specific revision

Use `accept()` or `reject()` on a specific revision to apply or discard that edit individually.

The following example demonstrates how to accept or reject a specific revision in the Document Editor.

{% tabs %}
{% highlight ts tabtitle="TS" %}

/**
 * Get revisions from the current document
 */
let revisions: RevisionCollection = documentEditor.revisions;
/**
 * Accept specific changes
 */
revisions.get(0).accept();
/**
 * Reject specific changes
 */
revisions.get(1).reject();

{% endhighlight %}
{% endtabs %}

## Navigate between the tracked changes

Use `navigateNextRevision()` and `navigatePreviousRevision()` to move the selection to the next or previous tracked change.

The following example demonstrates how to navigate through tracked revisions programmatically.

{% tabs %}
{% highlight ts tabtitle="TS" %}

/**
 * Navigate to next tracked change from the current selection.
 */
this.container.documentEditor.selection.navigateNextRevision();
/**
 * Navigate to previous tracked change from the current selection.
 */
this.container.documentEditor.selection.navigatePreviousRevision();

{% endhighlight %}
{% endtabs %}

## Custom metadata along with author

The Document Editor allows customizing revisions using [revisionSettings](https://ej2.syncfusion.com/react/documentation/api/document-editor/documenteditorsettingsmodel#revisionsettings). The [customData](https://ej2.syncfusion.com/react/documentation/api/document-editor/revisionsettings#customdata) property allows attaching additional metadata to tracked revisions. This metadata can represent roles, tags, or any custom identifier for a revision. To display this metadata along with the author name in the Track Changes pane, the [showCustomDataWithAuthor](https://ej2.syncfusion.com/react/documentation/api/document-editor/revisionsettings#showcustomdatawithauthor) property must be enabled.

The following example illustrates how to enable and update custom metadata for track changes revisions.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar,
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container;
    let settings = { revisionSettings: { customData: 'Developer', showCustomDataWithAuthor: true } };
    return (
        <DocumentEditorContainerComponent
            id="container"
            ref={(scope) => {
                container = scope;
            }}
            height={'590px'}
            serviceUrl="HostUrl"
            enableTrackChanges={true}
            documentEditorSettings={settings}
        />
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

{% endhighlight %}
{% endtabs %}

The Track Changes pane will display the author name along with the custom metadata, as shown in the screenshot below.

![Custom metadata along with author in track changes pane](./images/custom-metadata-author-trackchanges.png)

N> 1. When the document is exported as SFDT, the `customData` value is stored in the revision collection. Upon reopening the SFDT, the custom data is automatically restored and displayed in the Track Changes pane.
N> 2. In formats other than SFDT (such as DOCX and others), the `customData` is not preserved, as it is specific to the Document Editor component.

## Restrict accept or reject by author

Restrict accepting or rejecting changes by author name.

The following example demonstrates how to restrict an author from accepting or rejecting changes.

{% tabs %}
{% highlight ts tabtitle="TS" %}

import { createRoot } from 'react-dom/client';
import * as React from 'react';
import {
    DocumentEditorContainerComponent,
    Toolbar,
} from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container = DocumentEditorContainerComponent;
    // Event gets triggered before accepting/rejecting changes
    const beforeAcceptRejectChanges = (args) => {
        // Check the author of the revision
        if (args.author !== 'Hary') {
            // Cancel the accept/reject action
            args.cancel = true;
        }
    };
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
                enableTrackChanges={true}
                beforeAcceptRejectChanges={beforeAcceptRejectChanges}
            />
        </div>
    );
}
export default App;
createRoot(document.getElementById('sample')).render(<App />);

{% endhighlight %}
{% endtabs %}

## Filter Changes by User

The built-in review panel in the Document Editor supports filtering changes based on the user.

![Filter changes by user in review panel](./images/filter-changes-by-user.png)

## Online Demo

Explore how to track and review changes in Word documents using the React Document Editor in this live demo [here](https://document.syncfusion.com/demos/docx-editor/react/#/tailwind3/document-editor/track-changes).

## Video tutorial 

To learn more about Track Changes in the Document Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=Ke27Mip4bN0" %}