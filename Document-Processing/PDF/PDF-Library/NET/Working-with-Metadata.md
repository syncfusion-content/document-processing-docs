---
title: Working with Metadata | Syncfusion
description: This section explains how to add metadata in the PDF document and the metadata is a data that describes the characteristics of properties of a document
platform: document-processing
control: PDF
documentation: UG
---

# Working with Metadata (XMP)

Metadata is a data that describes the characteristics or properties of a document. It includes document information properties such as author, modification date, and copyright status.

## Working with the XMP metadata

In order to work multiple applications effectively with metadata, there must be a common standard that they understand. XMP-the Extensible Metadata Platform is designed to provide such a standard.

XMP standardizes the definition, creation, and processing of metadata.

## Adding XMP metadata in a PDF document

You can add XMP metadata in a PDF document using the [XmpMetadata](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.XmpMetadata.html) class as shown in the following code example.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Adding-XMP-metadata-in-PDF-document/.NET/Adding-XMP-metadata-in-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a PDF document
PdfDocument pdfDoc = new PdfDocument();
//Create a page
PdfPage page = pdfDoc.Pages.Add();

//Get XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Basic Schema
BasicSchema basic = metaData.BasicSchema;
//Set the basic details of the document
basic.Advisory.Add("advisory");
basic.BaseURL = new Uri("http://google.com");
basic.CreateDate = DateTime.Now;
basic.CreatorTool = "creator tool";
basic.Identifier.Add("identifier");
basic.Label = "label";
basic.MetadataDate = DateTime.Now;
basic.ModifyDate = DateTime.Now;
basic.Nickname = "nickname";
basic.Rating.Add(-25);

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a PDF document
PdfDocument pdfDoc = new PdfDocument();
//Create a page
PdfPage page = pdfDoc.Pages.Add();

//Get XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Basic Schema
BasicSchema basic = metaData.BasicSchema;
//set the basic details of the document
basic.Advisory.Add("advisory");
basic.BaseURL = new Uri("http://google.com");
basic.CreateDate = DateTime.Now;
basic.CreatorTool = "creator tool";
basic.Identifier.Add("identifier");
basic.Label = "label";
basic.MetadataDate = DateTime.Now;
basic.ModifyDate = DateTime.Now
basic.Nickname = "nickname";
basic.Rating.Add(-25);

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create a PDF document
Dim pdfDoc As New PdfDocument()
'Create a page
Dim page As PdfPage = pdfDoc.Pages.Add()

'Get XMP object
Dim metaData As XmpMetadata = pdfDoc.DocumentInformation.XmpMetadata

'XMP Basic Schema
Dim basic As BasicSchema = metaData.BasicSchema
'set the basic details of the document
basic.Advisory.Add("advisory")
basic.BaseURL = New Uri("http://google.com")
basic.CreateDate = DateTime.Now
basic.CreatorTool = "creator tool"
basic.Identifier.Add("identifier")
basic.Label = "label"
basic.MetadataDate = DateTime.Now
basic.ModifyDate = DateTime.Now
basic.Nickname = "nickname"
basic.Rating.Add(-25)

'Save and close the document
pdfDoc.Save("DocumentInformation.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Adding-XMP-metadata-in-PDF-document).

## Adding XMP metadata in an existing PDF document

You can add metadata in an existing PDF document using the [XmpMetadata](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.XmpMetadata.html) class, as follows.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Adding-XMP-metadata-to-an-existing-PDF-document/.NET/Adding-XMP-metadata-to-an-existing-PDF-document/Program.cs" %}	

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Xmp;

//Load the PDF document
PdfLoadedDocument pdfDoc = new PdfLoadedDocument("Input.pdf");

//Get XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Basic Schema
BasicSchema basic = metaData.BasicSchema;
//Set the basic details of the document
basic.Advisory.Add("advisory");
basic.BaseURL = new Uri("http://google.com");
basic.CreateDate = DateTime.Now;
basic.CreatorTool = "creator tool";
basic.Identifier.Add("identifier");
basic.Label = "label";
basic.MetadataDate = DateTime.Now;
basic.ModifyDate = DateTime.Now;
basic.Nickname = "nickname";
basic.Rating.Add(-25);

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);


{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Xmp;

//Load the document
PdfLoadedDocument pdfDoc = new PdfLoadedDocument("input.pdf");

//Get XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Basic Schema
BasicSchema basic = metaData.BasicSchema;
//Set the basic details of the document
basic.Advisory.Add("advisory");
basic.BaseURL = new Uri("http://google.com");
basic.CreateDate = DateTime.Now;
basic.CreatorTool = "creator tool";
basic.Identifier.Add("identifier");
basic.Label = "label";
basic.MetadataDate = DateTime.Now;
basic.ModifyDate = DateTime.Now;
basic.Nickname = "nickname";
basic.Rating.Add(-25);

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Load the document
Dim pdfDoc As New PdfLoadedDocument("input.pdf")

'Get metaData object
Dim metaData As XmpMetadata = pdfDoc.DocumentInformation.XmpMetadata

'XMP Basic Schema
Dim basic As BasicSchema = metaData.BasicSchema

'Set the basic details of the document
basic.Advisory.Add("advisory")
basic.BaseURL = New Uri("http://google.com")
basic.CreateDate = DateTime.Now
basic.CreatorTool = "creator tool"
basic.Identifier.Add("identifier")
basic.Label = "label"
basic.MetadataDate = DateTime.Now
basic.ModifyDate = DateTime.Now
basic.Nickname = "nickname"
basic.Rating.Add(-25)

'Save and close the document
pdfDoc.Save("DocumentInformation.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Adding-XMP-metadata-to-an-existing-PDF-document).

## Supported Schema types

XMP is provided with the following schemas:

* Basic Schema 
* Dublin Core Schema 
* Rights Management Schema 
* Basic Job Ticket Schema 
* Paged-Text Schema 
* PDF Schema 

## Basic Schema

Basic Schema contains properties that provide basic descriptive information such as, 

* Base URL
* Creation date
* Creator tool
* Label
* Modified date.
* Meta data date
* Nickname
* Rating

The [BasicSchema](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.BasicSchema.html) class is used to create the basic schema properties. Refer the following code sample to create XMP basic schema in PDF document. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Create-PDF-document-with-XMP-basic-schema/.NET/Create-PDF-document-with-XMP-basic-schema/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a PDF document
PdfDocument pdfDoc = new PdfDocument();
//Create a page
PdfPage page = pdfDoc.Pages.Add();

//Get metaData object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Basic Schema
BasicSchema basic = metaData.BasicSchema;
//Set the basic details of the document
basic.Advisory.Add("advisory");
basic.BaseURL = new Uri("http://google.com");
basic.CreateDate = DateTime.Now;
basic.CreatorTool = "creator tool";
basic.Identifier.Add("identifier");
basic.Label = "label";
basic.MetadataDate = DateTime.Now;
basic.ModifyDate = DateTime.Now;
basic.Nickname = "nickname";
basic.Rating.Add(-25);

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);


{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a PDF document
PdfDocument pdfDoc = new PdfDocument();
//Create a page
PdfPage page = pdfDoc.Pages.Add();

//Get metaData object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Basic Schema
BasicSchema basic = metaData.BasicSchema;
//Set the basic details of the document
basic.Advisory.Add("advisory");
basic.BaseURL = new Uri("http://google.com");
basic.CreateDate = DateTime.Now;
basic.CreatorTool = "creator tool";
basic.Identifier.Add("identifier");
basic.Label = "label";
basic.MetadataDate = DateTime.Now;
basic.ModifyDate = DateTime.Now;
basic.Nickname = "nickname";
basic.Rating.Add(-25);

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create a PDF document
Dim pdfDoc As New PdfDocument()
'Create a page
Dim page As PdfPage = pdfDoc.Pages.Add()

'Get metaData object
Dim metaData As XmpMetadata = pdfDoc.DocumentInformation.XmpMetadata

'XMP Basic Schema
Dim basic As BasicSchema = metaData.BasicSchema
'Set the basic details of the document
basic.Advisory.Add("advisory")
basic.BaseURL = New Uri("http://google.com")
basic.CreateDate = DateTime.Now
basic.CreatorTool = "creator tool"
basic.Identifier.Add("identifier")
basic.Label = "label"
basic.MetadataDate = DateTime.Now
basic.ModifyDate = DateTime.Now
basic.Nickname = "nickname"
basic.Rating.Add(-25)

'Save and close the document
pdfDoc.Save("DocumentInformation.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Create-PDF-document-with-XMP-basic-schema).

### Dublin Core Schema

The Dublin Core schema provides a set of commonly used properties such as,

* Contributor
* Coverage
* Creator
* Date
* Description
* Format
* Language
* Publisher
* Title

The [DublinCoreSchema](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.DublinCoreSchema.html) class is used to create the Dublin core schema properties in PDF document. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Create-PDF-document-with-dubline-core-schema-properties/.NET/Create-PDF-document-with-dubline-core-schema-properties/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create new PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add a new page 
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Dublin core Schema
DublinCoreSchema dublin = metaData.DublinCoreSchema;
//Set the Dublin Core Schema details of the document
dublin.Creator.Add("Syncfusion");
dublin.Description.Add("Title", "Essential PDF creator");
dublin.Title.Add("Resource name", "Documentation");
dublin.Type.Add("PDF");
dublin.Publisher.Add("Essential PDF");

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create new PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add a new page 
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Dublin core Schema
DublinCoreSchema dublin = metaData.DublinCoreSchema;
//Set the Dublin Core Schema details of the document
dublin.Creator.Add("Syncfusion");
dublin.Description.Add("Title", "Essential PDF creator");
dublin.Title.Add("Resource name", "Documentation");
dublin.Type.Add("PDF");
dublin.Publisher.Add("Essential PDF");

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create new PDF document
Dim pdfDoc As New PdfDocument()
'Add a new page
Dim page As PdfPage = pdfDoc.Pages.Add()

'Gets XMP object
Dim metaData As XmpMetadata = pdfDoc.DocumentInformation.XmpMetadata

'XMP Dublin core Schema
Dim dublin As DublinCoreSchema = metaData.DublinCoreSchema
'Set the Dublin Core Schema details of the document
dublin.Creator.Add("Syncfusion")
dublin.Description.Add("Title", "Essential PDF creator")
dublin.Title.Add("Resource name", "Documentation")
dublin.Type.Add("PDF")
dublin.Publisher.Add("Essential PDF")

'Saves and close the document
pdfDoc.Save("DocumentInformation.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Create-PDF-document-with-dubline-core-schema-properties).

### Rights Management Schema

This schema includes properties related to rights management. These properties provide information regarding the legal restrictions associated with a resource.

* Certificate
* Marked
* Owner
* UsageTerm
* WebStatement

The [RightsManagementSchema](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.RightsManagementSchema.html) class is used to create the Rights management schema properties.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Create-PDF-document-with-right-management-schema/.NET/Create-PDF-document-with-right-management-schema/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add a new page 
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Rights Management Schema
RightsManagementSchema rights = metaData.RightsManagementSchema;
//Set the Rights Management Schema details of the document
rights.Certificate = new Uri("http://syncfusion.com");
rights.Owner.Add("Syncfusion");
rights.Marked = true;

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add a new page 
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;
//XMP Rights Management Schema
RightsManagementSchema rights = metaData.RightsManagementSchema;
//Set the Rights Management Schema details of the document
rights.Certificate = new Uri("http://syncfusion.com");
rights.Owner.Add("Syncfusion");
rights.Marked = true;

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create PDF document
Dim pdfDoc As New PdfDocument()
'Add a new page 
Dim page As PdfPage = pdfDoc.Pages.Add()

'Gets XMP object
Dim metaData As XmpMetadata = pdfDoc.DocumentInformation.XmpMetadata

'XMP Rights Management Schema
Dim rights As RightsManagementSchema = metaData.RightsManagementSchema
'Set the Rights Management Schema details of the document
rights.Certificate = New Uri("http://syncfusion.com")
rights.Owner.Add("Syncfusion")
rights.Marked = True

'Save and close the document
pdfDoc.Save("DocumentInformation.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Create-PDF-document-with-right-management-schema).

### Basic Job Ticket Schema

This schema describes very simple workflow or job information and the [BasicJobTicketSchema](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.BasicJobTicketSchema.html) class is used to create the Basic Job Ticket Schema properties in PDF document.

* JobRef

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Create-PDF-document-with-basic-job-ticket-schema/.NET/Create-PDF-document-with-basic-job-ticket-schema/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a document
PdfDocument pdfDoc = new PdfDocument();
//Add a page
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Rights Management Schema
BasicJobTicketSchema basicJob = metaData.BasicJobTicketSchema;
//Set the Rights Management Schema details of the document
basicJob.JobRef.Add("PDF document creation");

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a document
PdfDocument pdfDoc = new PdfDocument();
//Add a page
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Rights Management Schema
BasicJobTicketSchema basicJob = metaData.BasicJobTicketSchema;
//Set the Rights Management Schema details of the document
basicJob.JobRef.Add("PDF document creation");

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create a document
Dim pdfDoc As New PdfDocument()
'Add a page
Dim page As PdfPage = pdfDoc.Pages.Add()

'Gets XMP object
Dim metaData As XmpMetadata = pdfDoc.DocumentInformation.XmpMetadata

'XMP Rights Management Schema
Dim basicJob As BasicJobTicketSchema = metaData.BasicJobTicketSchema
'Set the Rights Management Schema details of the document
basicJob.JobRef.Add("PDF document creation")

'Save and close the document
pdfDoc.Save("DocumentInformation.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Create-PDF-document-with-basic-job-ticket-schema).

### Paged-Text Schema

The Paged-Text schema is used for text appearance on page in a document.

* MaxPageSize
* NPages
* Colorants
* PlateNames

The [PagedTextSchema](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.PagedTextSchema.html) class is used for creating Paged-Text schema properties in PDF document. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Create-PDF-document-with-pages-text-schema/.NET/Create-PDF-document-with-pages-text-schema/Program.cs" %}	

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a PDF document
PdfDocument pdfDoc = new PdfDocument();
//Create a Page
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Page text Schema
PagedTextSchema pagedText = metaData.PagedTextSchema;
//Sets the Page text Schema details of the document
pagedText.MaxPageSize.Width = 500;
pagedText.MaxPageSize.Height = 750;
pagedText.NPages = 1;
pagedText.PlateNames.Add("Sample page");

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a Pdf document
PdfDocument pdfDoc = new PdfDocument();
//Create a Page
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP Page text Schema
PagedTextSchema pagedText = metaData.PagedTextSchema;
//Sets the Page text Schema details of the document
pagedText.MaxPageSize.Width = 500;
pagedText.MaxPageSize.Height = 750;
pagedText.NPages = 1;
pagedText.PlateNames.Add("Sample page");

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create a PDF document
Dim pdfDoc As New PdfDocument()
'Create a Page
Dim page As PdfPage = pdfDoc.Pages.Add()

'Gets XMP object
Dim metaData As XmpMetadata = pdfDoc.DocumentInformation.XmpMetadata

'XMP Page text Schema
Dim pagedText As PagedTextSchema = metaData.PagedTextSchema
'Sets the Page text Schema details of the document
pagedText.MaxPageSize.Width = 500
pagedText.MaxPageSize.Height = 750
pagedText.NPages = 1
pagedText.PlateNames.Add("Sample page")

'Save and close the document
pdfDoc.Save("DocumentInformation.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Create-PDF-document-with-pages-text-schema).

### PDF schema

This schema specifies the properties used with Adobe PDF documents. The [PDFSchema](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.PDFSchema.html) class is used to create the PDF Schema properties in PDF document. It has the following set of properties.

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Create-PDF-document-with-PDF-schema/.NET/Create-PDF-document-with-PDF-schema/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add a page
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP PDF Schema
PDFSchema pdfSchema = metaData.PDFSchema;
//Set the PDF Schema details of the document
pdfSchema.Producer = "Syncfusion";
pdfSchema.PDFVersion = "1.5";
pdfSchema.Keywords = "Essential PDF";

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create a PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add a page
PdfPage page = pdfDoc.Pages.Add();

//Gets XMP object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//XMP PDF Schema
PDFSchema pdfSchema = metaData.PDFSchema;
//Set the PDF Schema details of the document
pdfSchema.Producer = "Syncfusion";
pdfSchema.PDFVersion = "1.5";
pdfSchema.Keywords = "Essential PDF";

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create a PDF document
Dim pdfDoc As New PdfDocument()
'Add a page
Dim page As PdfPage = pdfDoc.Pages.Add()

'Gets XMP object
Dim metaData As XmpMetadata = pdfDoc.DocumentInformation.XmpMetadata

'XMP PDF Schema
Dim pdfSchema As PDFSchema = metaData.PDFSchema
'Set the PDF Schema details of the document
pdfSchema.Producer = "Syncfusion"
pdfSchema.PDFVersion = "1.5"
pdfSchema.Keywords = "Essential PDF"

'Save and close the document
pdfDoc.Save("DocumentInformation.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Create-PDF-document-with-PDF-schema).

### Custom Schema

A custom schema defines the structure of the customized information records. You can use the [CustomSchema](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.CustomSchema.html) class to: 

* Define custom metadata files and, 
* Add them to the PDF document 

Add the following code sample to define the custom schema in a PDF document. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Create-PDF-document-with-custom-schema/.NET/Create-PDF-document-with-custom-schema/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add a new page 
PdfPage page = pdfDoc.Pages.Add();

//Get metaData object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//Create custom schema field
CustomSchema customSchema = new CustomSchema(metaData, "custom", "http://www.syncfusion.com");
customSchema["creationDate"] = DateTime.Now.ToString();
customSchema["DOCID"] = "SYNCSAM001";
customSchema["Encryption"] = "Standard";
customSchema["Project"] = "Data processing";

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create Pdf document
PdfDocument pdfDoc = new PdfDocument();
//Add a new page
PdfPage page = pdfDoc.Pages.Add();

//Get metaData object
XmpMetadata metaData = pdfDoc.DocumentInformation.XmpMetadata;

//Create custom schema field
CustomSchema customSchema = new CustomSchema(metaData, "custom", "http://www.syncfusion.com");
customSchema["Author"] = "Syncfusion";
customSchema["creationDate"] = DateTime.Now.ToString();
customSchema["DOCID"] = "SYNCSAM001";
customSchema["Encryption"] = "Standard";
customSchema["Project"] = "Data processing";

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create PDF document
Dim pdfDoc As New PdfDocument()
'Add a new page 
Dim page As PdfPage = pdfDoc.Pages.Add()

'Get metaData object
Dim metaData As XmpMetadata = pdfDoc.DocumentInformation.XmpMetadata

'Create custom schema field
Dim customSchema As New CustomSchema(metaData, "custom", "http://www.syncfusion.com")
customSchema("Author") = "Syncfusion"
customSchema("creationDate") = DateTime.Now.ToString()
customSchema("DOCID") = "SYNCSAM001"
customSchema("Encryption") = "Standard"
customSchema("Project") = "Data processing"

'Save and close the document
pdfDoc.Save("DocumentInformation.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %}  

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Create-PDF-document-with-custom-schema).

## Adding Custom Schema to the PDF document

Essential<sup>&reg;</sup> PDF allows you to add required metadata (custom schema) to a PDF document using the [CustomSchema](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.CustomSchema.html) class with [XmpMetadata](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.XmpMetadata.html) class. The following code illustrates this.

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Adding-custom-schema-to-the-PDF-document/.NET/Adding-custom-schema-to-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add a new page
PdfPage page = pdfDoc.Pages.Add();

//Create XML Document container
XmpMetadata metaData = new XmpMetadata(pdfDoc.DocumentInformation.XmpMetadata.XmlData);

//Create custom schema
CustomSchema customSchema = new CustomSchema(metaData, "custom", "http://www.syncfusion.com");
customSchema["Author"] = "Syncfusion";
customSchema["creationDate"] = DateTime.Now.ToString();
customSchema["DOCID"] = "SYNCSAM001";

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add a new page
PdfPage page = pdfDoc.Pages.Add();

//Create XML Document container
XmpMetadata metaData = new XmpMetadata(pdfDoc.DocumentInformation.XmpMetadata.XmlData);

//Create custom schema
CustomSchema customSchema = new CustomSchema(metaData, "custom", "http://www.syncfusion.com");
customSchema["Author"] = "Syncfusion";
customSchema["creationDate"] = DateTime.Now.ToString();
customSchema["DOCID"] = "SYNCSAM001";

//Save and close the document
pdfDoc.Save("CustomMetaField.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create PDF document
Dim pdfDoc As New PdfDocument()
'Add a new page
Dim page As PdfPage = pdfDoc.Pages.Add()

'Create XML Document container
Dim metaData As New XmpMetadata(pdfDoc.DocumentInformation.XmpMetadata.XmlData)

'Create custom schema
Dim customSchema As New CustomSchema(metaData, "custom", "http://www.syncfusion.com")
customSchema("Author") = "Syncfusion"
customSchema("creationDate") = DateTime.Now.ToString()
customSchema("DOCID") = "SYNCSAM001"

'Save and close the document
pdfDoc.Save("CustomMetaField.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Adding-custom-schema-to-the-PDF-document).

## Adding Custom Metadata to the PDF document

The custom metadata can be added in PDF document by using the [CustomMetadata](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentInformation.html#Syncfusion_Pdf_PdfDocumentInformation_CustomMetadata) property in [PdfDocumentInformation](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentInformation.html) class. Please refer to the following code. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Adding-custom-metadata-to-the-PDF-document/.NET/Adding-custom-metadata-to-the-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add new PDF page
PdfPage page = pdfDoc.Pages.Add();

//Add Custom MetaData
pdfDoc.DocumentInformation.CustomMetadata["ID"] = "IO1";
pdfDoc.DocumentInformation.CustomMetadata["CompanyName"] = "Syncfusion";
pdfDoc.DocumentInformation.CustomMetadata["Key"] = "DocumentKey";

//Save and close the document
pdfDoc.Save("Output.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;

//Create PDF document
PdfDocument pdfDoc = new PdfDocument();
//Add new PDF page
PdfPage page = pdfDoc.Pages.Add();

//Add Custom MetaData
pdfDoc.DocumentInformation.CustomMetadata["ID"] = "IO1";
pdfDoc.DocumentInformation.CustomMetadata["CompanyName"] = "Syncfusion";
pdfDoc.DocumentInformation.CustomMetadata["Key"] = "DocumentKey";

//Save and close the document
pdfDoc.Save("AddCustomField.pdf");
pdfDoc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Create PDF document
Dim pdfDoc As New PdfDocument()
'Add new PDF page
Dim page As PdfPage = pdfDoc.Pages.Add()

'Add Custom MetaData
pdfDoc.DocumentInformation.CustomMetadata("ID") = "IO1"
pdfDoc.DocumentInformation.CustomMetadata("CompanyName") = "Syncfusion"
pdfDoc.DocumentInformation.CustomMetadata("Key") = "DocumentKey"

'Save and close the document
pdfDoc.Save("AddCustomField.pdf")
pdfDoc.Close(True)

{% endhighlight %}

{% endtabs %}   

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Adding-custom-metadata-to-the-PDF-document).

## Removing Custom Metadata from an existing PDF document

Removing the custom metadata from an existing PDF document using the [Remove](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.CustomMetadata.html#Syncfusion_Pdf_CustomMetadata_Remove_System_String_) method in [CustomMetadata](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfDocumentInformation.html#Syncfusion_Pdf_PdfDocumentInformation_CustomMetadata) class. 

{% tabs %}  

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Remove-custom-metadata-from-an-existing-PDF-document/.NET/Remove-custom-metadata-from-an-existing-PDF-document/Program.cs" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;
using Syncfusion.Pdf.Parsing;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Remove custom metadata using key name
loadedDocument.DocumentInformation.CustomMetadata.Remove("Key");

//Save and close the document
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf;
using Syncfusion.Pdf.Xmp;
using Syncfusion.Pdf.Parsing;

//Load the document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");

//Remove custom metadata using key name
loadedDocument.DocumentInformation.CustomMetadata.Remove("Key");

//Save and close the document
loadedDocument.Save("Output.pdf");
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Load the document
Dim loadedDocument As PdfLoadedDocument = New PdfLoadedDocument("Input.pdf")

'Remove custom metadata using key name
loadedDocument.DocumentInformation.CustomMetadata.Remove("Key")

'Save and close the document
loadedDocument.Save("Output.pdf")
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %} 

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Remove-custom-metadata-from-an-existing-PDF-document).

## Working with image metadata

Image metadata is a data that describes the characteristics or properties of an image which is embedded in the image file.

## Adding XMP metadata along with an image in a PDF document

You can add the XMP metadata along with an image to the PDF document. The [PdfBitmap](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfBitmap.html) class is used to load the image files and draw an images through the [DrawImage](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html#Syncfusion_Pdf_Graphics_PdfGraphics_DrawImage_Syncfusion_Pdf_Graphics_PdfImage_System_Drawing_PointF_) method of the [PdfGraphics](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Graphics.PdfGraphics.html) class. 

{% tabs %} 

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Adding-XMP-metadata-along-with-an-image-in-PDF/.NET/Adding-XMP-metadata-along-with-an-image-in-PDF/Program.cs" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using System.Reflection.Metadata;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Load the image as stream which contains XMP metadata
FileStream imageStream = new FileStream("Autumn Leaves.jpg", FileMode.Open, FileAccess.Read);
PdfBitmap image = new PdfBitmap(imageStream, true);
//Draw the image
graphics.DrawImage(image, 0, 0);

//Save the document
doc.Save("Output.pdf");
//Close the document
doc.Close(true);
{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Graphics;
using Syncfusion.Pdf;
using System.Reflection.Metadata;

//Create a new PDF document
PdfDocument doc = new PdfDocument();
//Add a page to the document
PdfPage page = doc.Pages.Add();
//Create PDF graphics for the page
PdfGraphics graphics = page.Graphics;

//Load the image file from the disk which contains XMP metadata
PdfBitmap image = new PdfBitmap("Autumn Leaves.jpg", true);
//Draw the image
graphics.DrawImage(image, 0, 0);

//Save the document
doc.Save("Output.pdf");
//Close the document
doc.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf
Imports Syncfusion.Pdf.Graphics
Imports System.Reflection.Metadata

'Create a new PDF document
Dim doc As New PdfDocument()
'Add a page to the document
Dim page As PdfPage = doc.Pages.Add()
'Create PDF graphics for the page
Dim graphics As PdfGraphics = page.Graphics

'Load the image file from the disk which contains XMP metadata
Dim image As New PdfBitmap("Autumn Leaves.jpg", True)
'Draw the image
graphics.DrawImage(image, 0, 0)

'Save the document
doc.Save("Output.pdf")
'Close the document
doc.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Adding-XMP-metadata-along-with-an-image-in-PDF).

## Extracting XMP metadata from PDF image

To extract the [XmpMetadata](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.Xmp.XmpMetadata.html) from an image in an existing PDF document, you can use the [ImagesInfo](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html#Syncfusion_Pdf_PdfPageBase_ImagesInfo) property in the [PdfPageBase](https://help.syncfusion.com/cr/document-processing/Syncfusion.Pdf.PdfPageBase.html) class.

Refer to the following code example to extract the image metadata from a PDF image.

{% tabs %}

{% highlight c# tabtitle="C# [Cross-platform]" playgroundButtonLink="https://raw.githubusercontent.com/SyncfusionExamples/PDF-Examples/master/Metadata/Extracting-XMP-metadata-from-PDF-image/.NET/Extracting-XMP-metadata-from-PDF-image/Program.cs" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Xmp;
using Syncfusion.Pdf;

//Load the PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument("Input.pdf");
//Load the first page
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extracts all the images info from first page
PdfImageInfo[] imagesInfo= pageBase.GetImagesInfo();
//Extracts the XMP metadata from PDF image
XmpMetadata metadata = imagesInfo[0].XmpMetadata;

//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight c# tabtitle="C# [Windows-specific]" %}

using Syncfusion.Pdf.Parsing;
using Syncfusion.Pdf.Xmp;
using Syncfusion.Pdf;

//Load an existing PDF document
PdfLoadedDocument loadedDocument = new PdfLoadedDocument(fileName);
//Load the first page
PdfPageBase pageBase = loadedDocument.Pages[0];

//Extracts all the images info from first page
PdfImageInfo[] imagesInfo= pageBase.ImagesInfo;
//Extracts the XMP metadata from PDF image
XmpMetadata metadata = imagesInfo[0].XmpMetadata;

//Close the document
loadedDocument.Close(true);

{% endhighlight %}

{% highlight vb.net tabtitle="VB.NET [Windows-specific]" %}

Imports Syncfusion.Pdf.Parsing
Imports Syncfusion.Pdf.Xmp
Imports Syncfusion.Pdf

'Load an existing PDF
Dim loadedDocument As New PdfLoadedDocument(fileName)
'Load the first page
Dim pageBase As PdfPageBase = loadedDocument.Pages(0)

'Extracts all the images info from first page
Dim imagesInfo As PdfImageInfo[] = pageBase.ImagesInfo
'Extracts the XMP metadata from PDF image
XmpMetadata metadata = imagesInfo[0].XmpMetadata;

'Close the document
loadedDocument.Close(True)

{% endhighlight %}

{% endtabs %}

You can download a complete working sample from [GitHub](https://github.com/SyncfusionExamples/PDF-Examples/tree/master/Metadata/Extracting-XMP-metadata-from-PDF-image).

N> To extract the image information from PDF page in .NET Core, you need to include [Syncfusion.Pdf.Imaging.Portable](https://www.nuget.org/packages/Syncfusion.Pdf.Imaging.Net.Core) assembly reference in .NET Core project.
