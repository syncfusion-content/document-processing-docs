---
layout: post
title: Importing and exporting data in Xamarin.Android Pdf Viewer| Syncfusion
description: Learn about importing and exporting data support in Syncfusion<sup>®</sup> Xamarin.Android Pdf Viewer (SfPdfViewer) control and more details. 
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Importing and exporting data

PDF Viewer provides options to import and export data like form fields and annotations in the PDF document.

## Importing and exporting form data

The import and export of form data supports the following extensions.

* fdf
* xfdf
* json
* xml

The required file type can be chosen from the `DataFormat` enumeration. In the following sections only the fdf file type is explained for brevity.

### Exporting form data 

The `ExportFormData` method exports the current data filled in the form fields into a stream in the specified file format. The name of the PDF (with extension) from which the data are exported should be given as the second argument to the method.

{% tabs %}
{% highlight c# %}

//Export form data to "fdf" data format
Stream fdfStreamToSave = pdfViewerControl.ExportFormData(DataFormat.Fdf, "PdfFileName.fdf");

{% endhighlight %}
{% endtabs %}

N>While saving the stream returned by the `ExportFormData` method, the file name must have the same extension as the file type that was given as the first argument. For example, in the above case the file type provided is `fdf`, so the saved file extension should be `.fdf`.

### Importing form data

The `ImportFormData` method imports the data from a file of specified type and fills the saved data into the form fields.

{% tabs %}
{% highlight c# %}

//Import form data from "fdf" data format
Stream fdfStreamToImport = typeof(App).GetTypeInfo().Assembly.GetManifestResourceStream("SampleDefaultNamespace.Assets.PdfFileName.fdf");
pdfViewerControl.ImportFormData(fdfStreamToImport, DataFormat.Fdf);

{% endhighlight %}
{% endtabs %}

## Importing and exporting annotations

The import and export of annotations support following extensions.

* fdf
* xfdf

The required file type can be chosen from the `DataFormat` enumeration. In the following sections only the fdf file type is explained for brevity.

### Exporting annotations

The `ExportAnnotations` method exports the current annotations added to the document into a stream in the specified file format.

{% tabs %}
{% highlight c# %}

//Export annotations to "FDF" data format
Stream fdfStreamToSave = pdfViewerControl.ExportAnnotations(AnnotationDataFormat.Fdf);

{% endhighlight %}
{% endtabs %}

A selective list of annotations can also be exported in the specified file format using the `ExportAnnotations` overload method . The annotations list needs to be exported, and the data format should be passed as method arguments. The following code example explains exporting the list of annotations present only on the first page.

{% tabs %}
{% highlight c# %}

//Get the list of annotations present on the first page
List<IAnnotation> firstPageAnnotations = pdfViewerControl.Annotations.Where(annotation => annotation.PageNumber == 1).ToList();

//Export annotations to "FDF" data format
Stream fdfStreamToSave = pdfViewerControl.ExportAnnotations(firstPageAnnotations, AnnotationDataFormat.Fdf);

{% endhighlight %}
{% endtabs %}

### Importing annotations

The `ImportAnnotations` method imports the annotations from the file of specified type and fills the saved annotations into the loaded PDF document.

{% tabs %}
{% highlight c# %}

//Import annotations from "fdf" data format
Stream fdfStreamToImport = typeof(App).GetTypeInfo().Assembly.GetManifestResourceStream("SampleDefaultNamespace.Assets.PdfFileName.fdf");
pdfViewerControl.ImportAnnotations(fdfStreamToImport, AnnotationDataFormat.Fdf);

{% endhighlight %}
{% endtabs %}