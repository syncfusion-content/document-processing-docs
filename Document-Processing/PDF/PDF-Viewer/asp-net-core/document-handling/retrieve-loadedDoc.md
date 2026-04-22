---
layout: post
title: Retrieve the Loaded Document in ASP.NET Core PDF Viewer | syncfusion
description: Learn how to access the loaded PDF document instance in the ASP.NET Core PDF Viewer using refs and the documentLoad event.
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the Loaded Document Instance in ASP.NET Core PDF Viewer

This page explains how to access the ASP.NET Core PDF Viewer instance using an ASP.NET Core ref, listen for the [`documentLoad`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DocumentLoad) life-cycle event, and retrieve document information, page details, and metadata—so you can safely invoke viewer APIs after the PDF is loaded.

## Explanation: Why access the loaded document instance?

- The viewer instance (via **ASP.NET Core ref**) gives you a stable handle to call APIs such as [`zoom`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/magnification), [`print`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/print), [`download`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/download), and [`navigation`](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/navigation).
- The **document load event** (fires after the PDF is parsed and pages are ready) is the correct moment to read **document information** (title, author, page count, etc.) and **page metrics**, and to trigger post‑load UI logic.
- Accessing the instance too early (before load completes) may cause null/undefined errors or incomplete information.

## Reference: What you can access/call after load

After the PDF is loaded you can:

- **Read document information**: title, author, subject, keywords (metadata), page count.
- **Read page details**: total pages, current page, page size(s).
- **Call Viewer APIs** (typical examples):
  - **Zoom / Fit**: `zoomTo(125)`; fit to page/width
  - **Navigation**: go to a specific page
  - **Interactions**: enable/disable features (based on injected services)
  - **Export**: `download()`, `print()`

> Always invoke these after the `documentLoad` event fires, or from user actions that occur after load. Guard calls with optional chaining or readiness flags.

## How‑to: Get the instance with a ref and read details on load

Below is a focused snippet showing:
1) Creating a **ref** for the viewer,
2) Wiring the **`documentLoad`** event, and
3) Reading basic **document info** and **page count**, then calling **viewer APIs** safely.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div class="control-section">
    <ejs-pdfviewer id="container"
                   style="height:640px"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   enableLocalStorage="true"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
    let viewer;
    // Equivalent to ASP.NET Core ref + component mount
    window.onload = function () {
        viewer = document.getElementById('container').ej2_instances[0];
    };

    // ASP.NET Core: onDocumentLoad
    window.onDocumentLoad = function (args) {

        if (!viewer) return;

        console.log('documentLoad args:', args);

        // Read document details (same logic as ASP.NET Core)
        const pageCount =
            viewer.pageCount ||
            (args && args.pageCount) ||
            '(unknown)';

        const documentName =
            (args && args.documentName) ||
            '(unnamed)';

        console.log(`Loaded: ${documentName}, pages: ${pageCount}`);

        // Safe API calls after document is ready
        try {
            viewer.magnification.zoomTo(200);
            viewer.navigation.goToPage(5);
        } catch (e) {
            console.warn('Post-load operations failed:', e);
        }
    };
</script>

{% endhighlight %}
{% endtabs %}

**Notes**
- The event name is `documentLoad` (the callback receives load args).
- The exact event args and public methods available on the component may vary with the package version and injected services. Use `console.log(args)` once to see what’s present in your build.
- Always guard calls with optional chaining (e.g., `viewer?.magnification?.zoomTo(125)`).

## Tutorial: End‑to‑End — Read metadata & call APIs after load

This example demonstrates a complete flow:
- Setting up a **viewer ref**
- Subscribing to `documentLoad`
- Extracting **metadata** and **pages**
- Exposing **buttons** to call viewer APIs only after load

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

<div style="margin-bottom:12px">
    <strong>Status:</strong>
    <span id="statusText">Loading…</span>
    <div id="docInfo" style="display:none">
        <div>File: <span id="docName"></span></div>
        <div>Pages: <span id="docPages"></span></div>
        <div>Author: <span id="docAuthor"></span></div>
        <div>Title: <span id="docTitle"></span></div>
    </div>
</div>

<div style="display:flex; gap:8px; margin-bottom:12px; flex-wrap:wrap">
    <button onclick="zoomTo(100)">Zoom 100%</button>
    <button onclick="zoomTo(150)">Zoom 150%</button>
    <button onclick="goToPage(1)">Go to Page 1</button>
    <button onclick="goToPage(5)">Go to Page 5</button>
    <button onclick="printDoc()">Print</button>
    <button onclick="downloadDoc()">Download</button>
</div>

<div style="height:80vh">
    <ejs-pdfviewer id="pdfViewer"
                   style="height:100%; width:100%"
                   documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
                   resourceUrl="https://cdn.syncfusion.com/ej2/31.2.2/dist/ej2-pdfviewer-lib"
                   documentLoad="onDocumentLoad">
    </ejs-pdfviewer>
</div>

<script>
    let viewer;
    let ready = false;
    let docInfo = {
        name: '',
        pageCount: null,
        author: '',
        title: ''
    };

    // Called once viewer is rendered
    window.onload = function () {
        viewer = document.getElementById('pdfViewer').ej2_instances[0];
    };

    // ASP.NET Core: handleDocumentLoad
    window.onDocumentLoad = function (args) {
        if (!viewer) return;
        docInfo.name = args && args.documentName;
        docInfo.pageCount = viewer.pageCount || (args && args.pageCount);
        docInfo.author = args?.documentInformation?.author || '';
        docInfo.title = args?.documentInformation?.title || '';
        // Update UI
        document.getElementById('statusText').innerText = 'Document loaded';
        document.getElementById('docInfo').style.display = 'block';
        document.getElementById('docName').innerText = docInfo.name || '(unknown)';
        document.getElementById('docPages').innerText = docInfo.pageCount ?? '(unknown)';
        document.getElementById('docAuthor').innerText = docInfo.author || '(n/a)';
        document.getElementById('docTitle').innerText = docInfo.title || '(n/a)';
        requestAnimationFrame(() => {
            try {
                viewer.magnification.zoomTo(150);
                if (!docInfo.pageCount || 1 <= docInfo.pageCount) {
                    viewer.navigation.goToPage(1);
                }
            } catch (e) {
                console.warn('Post-load action failed:', e);
            }
            ready = true;
        });
    };

    // ---- UI actions ----
    function zoomTo(percent) {
        if (!ready) return;
        viewer.magnification.zoomTo(percent);
    }

    function goToPage(page) {
        if (!ready) return;
        viewer.navigation.goToPage(page);
    }

    function printDoc() {
        if (!ready) return;
        viewer.print.print();
    }

    function downloadDoc() {
        if (!ready) return;
        viewer.download();
    }
</script>
{% endhighlight %}
{% endtabs %}

## See also
- ASP.NET Core PDF Viewer – [API Reference](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html) ([methods](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#methods), [events](https://ej2.syncfusion.com/javascript/documentation/api/pdfviewer/index-default#events), [properties](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#properties))
- Events: [`documentLoad`](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.pdfviewer.pdfviewer.html#Syncfusion_EJ2_PdfViewer_PdfViewer_DocumentLoad) and related argument shape (check your package version)
- [Modules and Services](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/feature-module) (e.g., Magnification, Navigation, Print) — ensure the features you call are injected
