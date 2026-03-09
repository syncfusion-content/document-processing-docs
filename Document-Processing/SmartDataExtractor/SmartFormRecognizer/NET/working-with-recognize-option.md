---
title: Using FormRecognizeOptions in SmartFormRecognizer| Syncfusion&reg;
description: Discover how to configure and apply FormRecognizeOptions in the Syncfusion&reg; SmartFormRecognizer library to enhance form processing workflows.
platform: document-processing
control: SmartFormRecognizer
documentation: UG
---

# Working with FormRecognizeOptions

`FormRecognizeOptions` provides configurable settings that control how the SmartFormRecognizer detects elements from a document. It allows you to enable or disable the detection of specific form controls such as checkboxes, radio buttons, textboxes, and signatures—while also letting you fine tune the recognition results using a confidence threshold. 
Additionally, it supports restricting processing to specific pages through an optional 1‑based inclusive PageRange. By adjusting these options, developers can optimize performance, reduce noise in results, and tailor form extraction precisely to the needs of their application

## Properties

### DetectTextboxes
`DetectTextboxes` is a boolean property in FormRecognizeOptions that determines whether the form recognizer should detect textbox fields from the document layout. When enabled (default: true), it identifies rectangular input areas such as printed boxes,Rounded boxes, lines, boxes and line inside the table cell, or bordered regions intended for user written text and includes them in the recognition output. 

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable textbox detection
recognizer.FormRecognizeOptions.DetectTextboxes = false;

{% endhighlight %}
{% endtabs %}

### DetectCheckboxes
`DetectCheckboxes` is a boolean option in FormRecognizeOptions that controls whether the form recognizer should identify checkbox elements during document processing. When enabled (default: true), the recognizer scans the page layout for checkbox shapes,Rounded square and determines their positions. 

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable checkbox detection
recognizer.FormRecognizeOptions.DetectCheckboxes = false;

{% endhighlight %}
{% endtabs %}

### DetectRadioButtons
`DetectRadioButtons` is a boolean property in FormRecognizeOptions that specifies whether the form recognizer should detect radio button elements in the document. When enabled (default: true), the recognizer identifies circular and oval objects in images or in the PDF documents then add radio buttons in that identified locations.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable radio button detection
recognizer.FormRecognizeOptions.DetectRadioButtons = false;

{% endhighlight %}
{% endtabs %}

### DetectSignatures
`DetectSignatures` is a boolean property in FormRecognizeOptions that controls whether the form recognizer should identify signature fields within a document. When enabled (default: true), the recognizer scans for handwritten style areas, signature lines, or regions typically used for signing, and includes these detected signature bounds in the output. 

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Disable signature detection
recognizer.FormRecognizeOptions.DetectSignatures = false;

{% endhighlight %}
{% endtabs %}

### ConfidenceThreshold
`ConfidenceThreshold` is a double value in FormRecognizeOptions that defines the minimum confidence score (ranging from 0.0 to 1.0) required for any detected form element to be included in the final recognition output. A higher threshold (e.g., 0.9) filters out lower‑certainty detections and ensures only highly reliable results are returned, while a lower threshold increases sensitivity by allowing more detections at the cost of potentially reduced accuracy.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Set a ConfidenceThreshold
recognizer.FormRecognizeOptions.ConfidenceThreshold = 0.9;

{% endhighlight %}
{% endtabs %}

### PageRange
`PageRange` is an optional int[,]? property in FormRecognizeOptions that allows you to control exactly which pages of a document the form recognizer should process. Each row in this 2‑dimensional array represents a 1‑based inclusive range in the form [start, end], the recognizer processes all pages in the document. Defining page ranges helps improve performance, reduce unnecessary processing, and target only the sections of the document relevant to your extraction workflow.We can also provide values in single page.Also If we provide values in descending order it will consider as ascending order and perform detection.

{% tabs %}
{% highlight c# tabtitle="C#" %}

FormRecognizer recognizer = new FormRecognizer();
// Set a single page range – detects only the specified page
recognizer.FormRecognizeOptions.PageRange = new int[,]{{ 3 }{ 8 }};

// Set a page range – detects content between the specified start and end page
recognizer.FormRecognizeOptions.PageRange = new int[,]{{ 3, 8 }};

{% endhighlight %}
{% endtabs %}

