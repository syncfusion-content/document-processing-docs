---
layout: post
title: Headers and Footers in Blazor DOCX Editor | Syncfusion
description: Headers and footers in Blazor DOCX Editor enable adding and customizing content at the top and bottom of document pages.
platform: document-processing
control: DOCX Editor
documentation: ug
---

# Headers and Footers in Blazor DOCX Editor

Headers and footers are the areas in the top and bottom margins of each page in a document. They are typically used to display content that repeats across multiple pages, such as document titles, company logos, page numbers, and dates.

The [Blazor DOCX Editor](https://www.syncfusion.com/docx-editor-sdk/blazor-docx-editor) (Document Editor) supports headers and footers in its document. Each section in the document can have the following types of headers and footers:

*   **First Page**: A unique header and footer that appears only on the first page of the section.
*   **Even Pages**: A header and footer that appear on all even-numbered pages in the section.
*   **Default**: A header and footer that appear on all pages of the section, where first or even pages are not applicable or not specified.

This can be defined by setting the format properties of the corresponding section.

```csharp
//Defines whether different header and footer is required for first page of the section
await container.DocumentEditor.Selection.SectionFormat.SetDifferentFirstPageAsync(true);
//Defines whether different header and footer is required for odd and even pages in the section
await container.DocumentEditor.Selection.SectionFormat.SetDifferentOddAndEvenPagesAsync(true);
```

## Go to header and footer region

Double-click in the header or footer region to move the selection there. This can also be done using the following code.

```csharp
await container.DocumentEditor.Selection.GoToHeaderAsync();

await container.DocumentEditor.Selection.GoToFooterAsync();
```

## Header and footer distance

Define the distance of the header region content from the top of the page. Refer to the following sample code.

```csharp
await container.DocumentEditor.Selection.SectionFormat.SetHeaderDistanceAsync(36);
```

Similarly, you can define the distance of footer region content from the bottom of the page. Refer to the following sample code.

```csharp
await container.DocumentEditor.Selection.SectionFormat.SetFooterDistanceAsync(36);
```

## Close header and footer region

Move the selection to the document body from the header or footer region by double-clicking the document area. You can also perform this using the following code.

```csharp
await container.DocumentEditor.Selection.CloseHeaderFooterAsync();
```

## Online demo

Explore how to add and customize headers and footers in Word documents using the Blazor DOCX Editor in this [live demo](https://document.syncfusion.com/demos/docx-editor/blazor-server/document-editor/headers-and-footers?theme=fluent2).
