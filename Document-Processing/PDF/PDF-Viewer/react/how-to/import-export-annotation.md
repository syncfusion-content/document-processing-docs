---
layout: post
title: Import and export annotations in React PDF Viewer | Syncfusion
description: Learn how to import and export annotations as objects, JSON, or XFDF in the Syncfusion React PDF Viewer.
control: PDF Viewer
platform: document-processing
documentation: ug
---

# Import and export annotations in React PDF Viewer

The PDF Viewer control supports exporting and importing annotations in multiple formats: JSON, XFDF, or as native annotation objects. Use `exportAnnotation('Json')` or `exportAnnotation('Xfdf')` for serialized formats, and `exportAnnotationsAsObject()` to obtain the in-memory annotation objects that can be re-imported with `importAnnotation()`.

The following steps show how to export annotations in different formats and import annotation objects back into the viewer.

**Step 1:** Follow the steps provided in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Use the following code to perform import and export operations.

```
    <button onClick={ExportXfdf}>Export XFDF</button>
    <button onClick={ExportJSON}>Export JSON</button>
    <button onClick={ExportAsObject}>Export as Object</button>
    <button onClick={Import}>Import from Object</button>
```

```
<script>
    // export the annotation in XFDF format.
  function ExportXfdf(){
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.exportAnnotation('Xfdf');
    }
    // export the annotation in JSON format.
    function ExportJSON(){
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.exportAnnotation('Json');
    }
    let exportAsObject;
    //Export annotation as object.
    function ExportAsObject(){
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.exportAnnotationsAsObject().then(function(value) {
            exportAsObject = value;
        });
    }
    //Import annotation that are exported as object.
    function Import (){
        var viewer = document.getElementById('container').ej2_instances[0];
        viewer.importAnnotation(JSON.parse(exportAsObject));
    }
```

[View sample in GitHub](https://github.com/SyncfusionExamples/react-pdf-viewer-examples/tree/master/Annotations/Import%20and%20export%20annotations).