---
layout: post
title: Read Only mode for Annotations, Forms, and Comments | Syncfusion
description: Set read only mode for annotations, form fields, and comments in the ASP.NET MVC PDF Viewer. Page navigation, search, zoom, print, and download stay available.
platform: document-processing
control: PDF Viewer
documentation: ug
---

# Read Only mode for Annotations, Forms, and Comments

Use the `ReadOnlySettings` property to restrict editing for annotations, form fields, and comments. Set each flag to `true` to make that area read only. Document viewing, page navigation, search, zoom, print, and download stay available.

| Property | When set to `true` |
| --- | --- |
| `annotations` | Makes every annotation interaction read only. Users cannot add, select, move, resize, edit, or delete annotations. Comments are read only as well, because comments belong to annotations. |
| `formFields` | Keeps form fields view only. Users cannot fill or change field values, and they cannot add, move, resize, or delete fields in the form designer. |
| `comments` | Makes comments read only when `annotations` is `false`. Existing comments stay visible. Users cannot add, edit, reply to, or delete comments. Annotation drawing and editing stay available. |

If `annotations` is `true`, comments stay read only even when `comments` is `false`.

**Step 1:** Follow the steps provided in the [link](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/asp-net-mvc/getting-started) to create a simple PDF Viewer sample in ASP.NET MVC.

**Step 2:** Set `ReadOnlySettings` on `PdfViewer`. The sample below makes annotations, form fields, and comments read only together.

{% tabs %}
{% highlight c# tabtitle="Standalone" %}

@Html.EJS().PdfViewer("pdfviewer").DocumentPath("https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf").ResourceUrl("https://cdn.syncfusion.com/ej2/30.1.37/dist/ej2-pdfviewer-lib").ReadOnlySettings(readOnly => { readOnly.Annotations(true).FormFields(true).Comments(true); }).Render()

{% endhighlight %}
{% endtabs %}

## Read only comments

Set `comments` to `true` and leave `annotations` as `false` when users may still add and edit annotations, but must only view existing comments.

```csharp
.ReadOnlySettings(readOnly => { readOnly.Annotations(false).FormFields(false).Comments(true); })
```

## Read only form fields

Set `formFields` to `true` when users may edit annotations and comments, but must only view form fields. Filling a field and designing fields are both restricted.

```csharp
.ReadOnlySettings(readOnly => { readOnly.Annotations(false).FormFields(true).Comments(false); })
```

Each flag defaults to `false`, so editing stays enabled until you set that flag to `true`.

## See also

- [Getting started with ASP.NET MVC PDF Viewer](../getting-started)
