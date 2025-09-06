---
layout: post
title: Import export annotation in React Pdfviewer component | Syncfusion
description: Learn here all about Import export annotation in Syncfusion React Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Import export annotation object
platform: document-processing
documentation: ug
domainurl: ##DomainURL##
---

# Import export annotation in React Pdfviewer component

The PDF Viewer library allows you to import annotations from objects or streams instead of loading it as a file. To import such annotation objects, the PDF Viewer control must export the PDF annotations as objects using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/react/documentation/api/pdfviewer/#exportannotationsasobject) method. Only the annotations objects that are exported from the PDF Viewer can be imported.

The following steps are used to import and export annotations in various formats such as objects, JSON, and XFDF.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/react/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

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