---
layout: post
title: Overview of Organize Pages in Blazor PDF Viewer component | Syncfusion
description: Learn here all about Overview of Organize Pages in Syncfusion Blazor PDF Viewer component.
platform: document-processing
control: SfPdfViewer
documentation: ug
---

# Organize Pages in Blazor PDF Viewer component

The PDF Viewer allows you to manage your PDF documents efficiently by organizing pages seamlessly. Whether you need to add new pages, remove unnecessary ones, rotate pages, move pages within the document, and duplicate pages, the PDF Viewer facilitates these tasks effortlessly.

## Getting started

To access the organize pages feature, simply open the PDF document in the PDF Viewer and navigate to the left vertical toolbar. Look for the `Organize Pages` option to begin utilizing these capabilities.

![Alt text](./images/organize-pages.png)

The page organization support enables you to perform various actions such as rotating, rearranging, inserting, duplicating, and deleting pages within a PDF document using organize pages dialog.

### Rotating PDF pages

You can adjust the orientation of PDF pages to ensure proper alignment. The rotate icon offers the following options:

* `Rotate clockwise`: Rotate the selected pages 90 degrees clockwise.

![Organzie Rotate Clockwise](./images/organize-rotate-right.png)

* `Rotate counter-clockwise`: Rotate the selected pages 90 degrees counter-clockwise.

![Organzie Rotate Counter Clockwise](./images/organize-rotate-left.png)

### Rearranging PDF pages

You can easily change the sequence of pages within your document using the drag and drop method:

* `Drag and drop`: Click and drag a page thumbnail to the desired position within the document, then release it to rearrange the page order.

![Drag and Drop Organize](./images/rotate-rearrange.gif)

### Inserting new pages

Effortlessly add new pages to your document with the following options:

* `Insert blank page left`: Insert a blank page to the left of the selected page using the respective icon.

![Organzie Insert Left](./images/organize-insert-left.png)

* `Insert blank page right`: Insert a blank page to the right of the selected page using the corresponding icon.

![Organzie Insert Right](./images/organize-insert-right.png)

### Deleting PDF pages

Removing unwanted pages from your document is straight forward:

* `Select pages to delete`: Click on the page thumbnails you wish to remove. You can select multiple pages at once.
* `Delete selected pages`: Use the delete option in the organize pages pane to remove the selected pages from the document.

![Organzie Select and Delete](./images/organize-select-delete.png)

### Duplicating PDF pages

Duplicate the pages within your PDF document effortlessly:

* `Select pages to Duplicate`: Click on the page thumbnails you wish to duplicate. Use the duplicate option to create duplicates. When a page is copied, the duplicate is automatically added to the right of the selected page. Multiple copies can be made using the toolbar action.

![Organzie Copy Pages](./images/organize-copy-page.png)

### Importing a PDF Document

Seamlessly import a PDF document into your existing document:

* `Import PDF document`: Click the **Import Document** button to import a PDF. If a page is selected, the imported document’s thumbnail will be inserted to the right of the selected page. If multiple or no pages are selected, the thumbnail will be added as the first page. When **Save** or **Save As** is clicked, the imported PDF will be merged with the current document. You can insert a blank page to the left or right of the imported thumbnail, delete it, or drag and drop it to reposition as needed.

![Alt text](./images/import.gif)

### Selecting all pages

Make comprehensive adjustments by selecting all pages simultaneously. This facilitates efficient editing and formatting across the entire document.

![Organzie Select Pages](./images/organize-select-all.jpg)

### Zooming Page Thumbnails

Adjust the size of page thumbnails within the organizer panel for better visibility and precision when editing. The zoom functionality allows you to:

* Increase or decrease the size of page thumbnails using the zoom slider
* See more details on pages when zoomed in
* View more pages simultaneously when zoomed out

This feature is especially useful when working with documents containing complex layouts or small details that need careful examination during organization.

![Organzie Zoom Panel](./images/organize-zoom-panel.jpg)

### Real-time updates

Witness instant changes in page organization reflected within the PDF Viewer. Simply click the **Save** button to preserve your modifications.

### SaveAs functionality

Safeguard your edits by utilizing the **Save As** feature. This enables you to download the modified version of the PDF document for future reference, ensuring that your changes are securely stored.

## API's supported

**EnablePageOrganizer:** This API enables or disables the page organizer feature in the PDF Viewer. By default, it is set to `true`, indicating that the page organizer is enabled.

{% tabs %}
{% highlight razor %}

@page "/"
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" EnablePageOrganizer="true">
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

**PageOrganizerVisibility:** This API determines whether the page organizer dialog will be displayed automatically when a document is loaded into the PDF Viewer. By default, it is set to `false`, meaning the dialog is not displayed initially.

{% tabs %}
{% highlight razor %}

@page "/"
<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
              Height="100%"
              Width="100%" PageOrganizerVisibility="true">
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

**PageOrganizerSettings:** This API allows control over various page management functionalities within the PDF Viewer. It includes options to enable or disable actions such as deleting, inserting, rotating, duplicating, importing and rearranging pages, as well as configuring thumbnail zoom settings. By default, all these actions are enabled and standard zoom settings are applied.

* **CanDelete** : It allow users to enable or disable the delete pages from the document. By default it set as `true`.
* **CanInsert** : It allow users to enable or disable the insert new pages from the document. By default it set as `true`.
* **CanRotate** : It allow users to enable or disable the rotate pages from the document. By default it set as `true`.
* **CanDuplicate** : It allow users to enable or disable the duplicate pages from the document. By default it set as `true`.
* **CanRearrange** : It allow users to enable or disable the order of pages from the document. By default it set as `true`.
* **CanExtractPages** : It allow users to enable or disable extract pages into a separate document. By default it set as `true`.
* **ShowImageZoomingSlider** : It allow users to enable or disable the zoom slider for images. By default it set as `true`.
* **ImageZoom** : It represents the current zoom value of the images in the page organizer view. By default it set as `1`.
* **ImageZoomMin** : It represent minimum value for the image zooming slider in the page organizer view. By default it set as `1` and acceptable values: `1` to `4`.
* **ImageZoomMin** : It represent maximum value for the image zooming slider in the page organizer view. By default it set as `5` and acceptable values: `2` to `5`.
* **FooterButtons** : It specifies which buttons are visible in the Page Organizer dialog footer.
  - `None` - Hide both Save and Save As buttons.
  - `Save` - Show only the "Save" button.
  - `Save As` - Show only the "SaveAs" button.

{% tabs %}
{% highlight razor %}

@page "/"

<SfPdfViewer2 DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" Height="100%" Width="100%">
    <PageOrganizerSettings CanDelete="true" CanInsert="true" CanRotate="true" CanDuplicate="true" CanRearrange="true" CanImport="true" ImageZoom="1" ShowImageZoomingSlider="true" ImageZoomMin="1" ImageZoomMax="5" CanExtractPages="true" FooterButtons="FooterButton.Save | FooterButton.SaveAs"></PageOrganizerSettings>
</SfPdfViewer2>

{% endhighlight %}
{% endtabs %}

## Keyboard shortcuts

The following keyboard shortcuts are available at the organize pages dialog.

* **Ctrl+Z** : Undo the last action performed.
* **Ctrl+Y** : Redo the action that was undone.

#### Conclusion

With the Organize Pages feature in the PDF Viewer, managing your PDF documents has never been easier. Whether you are adding new content, adjusting page orientation, moving the pages, duplicating the pages, or removing unnecessary pages, this feature provides the tools you need to streamline your document management workflow. Explore these capabilities today and take control of your PDF documents with ease!

<!-- [View sample in GitHub](Need to added) -->
