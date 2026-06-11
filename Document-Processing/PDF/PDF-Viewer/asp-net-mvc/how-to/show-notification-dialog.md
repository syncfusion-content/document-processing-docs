---
layout: post
title: Show Notification Dialog for Empty Form Fields in ASP.NET MVC PDF Viewer
description: Learn how to display a notification dialog when form fields are empty in the Syncfusion ASP.NET MVC PDF Viewer, enhancing user experience during form filling.
platform: document-processing
control: PDF Viewer
publishingplatform: ASP.NET MVC
documentation: ug
---

# Show Notification Dialog for Empty Form Fields

The PDF Viewer component enables displaying a notification dialog in the user interface when form fields in a PDF document are empty or unfilled. Use this feature to improve user experience during form completion by guiding users to complete required fields.

Configure the following properties and handle the following event to implement this:

* **EnableFormFieldsValidation**: Set to `true` to enable validation for form fields.
* **ShowNotificationDialog**: Set to `false` to suppress automatic notification dialogs and handle custom validation.
* **validateFormFields**: This event triggers when form validation occurs, providing access to non-fillable fields for custom logic.

Supported form field types include text fields, checkboxes, radio buttons, drop-down lists, and combo boxes. The event arguments include an array of non-fillable fields for programmatic access.

Follow these steps to show the notification dialog when form fields are empty.

**Step 1:** Follow the steps provided in the [getting started guide](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started/) to create a basic PDF Viewer sample.

**Step 2:** Use the following code snippet to customize notification display on form validation.

```cs

@Html.EJS().PdfViewer("pdfviewer").ServiceUrl(VirtualPathUtility.ToAbsolute("~/PdfViewer/")).DocumentPath("https://cdn.syncfusion.com/content/pdf/form-filling-document.pdf").ValidateFormFields("validateFormFields").EnableFormFieldsValidation(true).ShowNotificationDialog(false).Render()

<script>
    function validateFormFields(args) {
        var nonfilledFormFields = args.nonFillableFields;
        var viewer = document.getElementById('pdfviewer').ej2_instances[0];
        var errorMessage = "Kindly fill all the form fieds";
        viewer.showNotificationPopup(errorMessage);
    }
</script>

```

Download the sample demonstrating [how to show the notification dialog for empty form fields](https://www.syncfusion.com/downloads/support/directtrac/general/ze/MVC_SAMPLE_d50d2de6-1937239856.zip).