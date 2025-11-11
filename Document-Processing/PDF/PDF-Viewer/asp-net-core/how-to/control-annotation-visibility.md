---
layout: post
title: Control annotation visibility in ASP.NET Core PDF Viewer | Syncfusion
description: Learn how to control the visibility of PDF annotations in the ASP.NET Core PDF Viewer, ensuring annotations appear only in the viewer as needed.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Control annotation visibility in the ASP.NET Core PDF Viewer

A concise guide to controlling annotation visibility so that annotations remain visible in the Syncfusion PDF Viewer while being hidden in the downloaded PDF.

## Steps to control annotation visibility

**Step 1:** Follow the steps provided in the [Syncfusion ASP.NET Core PDF Viewer getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-core/getting-started) to create a simple PDF Viewer sample.

**Step 2:** Add buttons for annotation modification and downloading.

Define the viewer markup and include a button that triggers the download workflow. The following Razor code also wires up helper functions that update annotation flags before saving the document.

{% tabs %}
{% highlight cshtml tabtitle="Standalone" %}

@page "{handler?}"
@model IndexModel
@{
    ViewData["Title"] = "Home page";
}

<button type="button" onclick="save()" style="margin-top : 60px">Download</button>

<div class="text-center">
	<ejs-pdfviewer id="pdfviewer" style="height:600px" documentPath="https://cdn.syncfusion.com/content/pdf/annotations-v1.pdf" documentLoad="documentLoaded" resourceUrl="https://cdn.syncfusion.com/ej2/27.1.48/dist/ej2-pdfviewer-lib">
    </ejs-pdfviewer>
</div>

<script type="text/javascript">
	function documentLoaded() {
		var pdfViewer = document.getElementById('pdfviewer').ej2_instances[0];
		//Code snippet to add basic annotations. You can also include other annotations as needed.
			pdfViewer.annotation.addAnnotation("Highlight", {
				bounds: [{ x: 97, y: 610, width: 350, height: 14 }],
				pageNumber: 1
			});
			pdfViewer.annotation.addAnnotation("Underline", {
				bounds: [{ x: 97, y: 723, width: 353.5, height: 14 }],
				pageNumber: 1
			});
			pdfViewer.annotation.addAnnotation("Strikethrough", {
				bounds: [{ x: 97, y: 836, width: 376.5, height: 14 }],
				pageNumber: 1
			});
		}

    function save() {
	  // Get the PDF viewer instance
	  var viewer = document.getElementById('pdfviewer').ej2_instances[0];
	  // Save the PDF as a Blob
	  viewer.saveAsBlob().then((blob) => {
	    const reader = new FileReader();
	    reader.onload = function () {
	      const base64data = reader.result;

	      // Extract the base64 encoded data
	      const base64EncodedData = base64data.split('base64,')[1];
	      const document1 = new ej.pdf.PdfDocument(base64EncodedData);

	      // Iterate through each page in the PDF
	      for (let i = 0; i < document1.pageCount; i++) {
	        const page = document1.getPage(i);

	        // Iterate through each annotation on the page
	        for (let j = 0; j < page.annotations.count; j++) {
	          const annot = page.annotations.at(j);
	          // Set annotation flag to noView
	          annot.flags |= ej.pdf.PdfAnnotationFlag.noView;
	        }
	      }

	      // Save the modified PDF as a Blob
	      document1.saveAsBlob().then((modifiedBlob) => {
	        const internalReader = new FileReader();
	        internalReader.onload = function () {
	          const modifiedBase64 = internalReader.result;

	          // Create a download link for the modified PDF
	          const downloadLink = document.createElement('a');
	          downloadLink.href = modifiedBase64;
	          downloadLink.download = 'modified.pdf';
	          downloadLink.click();
	        };

	        // Read the modified Blob as a Data URL
	        internalReader.readAsDataURL(modifiedBlob.blobData);
	      });
	    };

	    // Read the original Blob as a Data URL
	    reader.readAsDataURL(blob);
	  });
	}
</script>

{% endhighlight %}
{% endtabs %}

**Step 3:** Add annotations to the PDF document.

The `documentLoaded` function in the script above programmatically inserts highlight, underline, and strikethrough annotations. Extend this logic to include any additional annotations you require.

**Step 4:** Add event listeners for button clicks.

The button defined in the markup triggers the `save` function, allowing you to adjust annotation visibility before downloading the PDF.

**Step 5:** Modify annotation flags.

Inside the `save` function, the script iterates through each annotation and applies the `noView` flag so the annotations remain hidden in the downloaded file while still appearing in the viewer.

Sample: How to control annotation visibility  
[View sample in GitHub](https://github.com/SyncfusionExamples/asp-core-pdf-viewer-examples/tree/master/How%20to)
