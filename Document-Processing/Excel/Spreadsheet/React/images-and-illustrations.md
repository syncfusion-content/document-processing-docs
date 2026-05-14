---
layout: post
title: Images and illustrations in React Spreadsheet component | Syncfusion
description: Learn here how to insert, position, resize, select, and delete images in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Images and Illustrations

## Overview

Syncfusion React Spreadsheet component allows you to insert images directly into worksheet cells to enhance visual presentation and provide additional context alongside data. Images such as logos, screenshots, diagrams, or illustrations can be placed within a sheet, positioned as needed, resized, selected, or removed.

Images can be controlled using the [allowImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowimage) property, which is enabled by default.

---

## How-To

### Insert and position images

In the Syncfusion React Spreadsheet component, images can be inserted into a worksheet and placed in a specific cell. The target cell determines where the image initially appears, and the image is rendered as an overlay on top of the grid.

Images are inserted programmatically using the [insertImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertimage) method. This method allows you to define the image source along with its initial width and height, and specify the cell address where the image should be placed.

Once an image is inserted, it can be repositioned by selecting and dragging it to another location within the worksheet. The image remains independent of cell values and does not interfere with data editing, sorting, or filtering operations. You can also insert multiple images at once by passing multiple image configurations to the method.

The following code example shows how to insert an image in spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/insert-image-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/insert-image-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/insert-image-cs1" %}

### Resize images

After inserting an image into the spreadsheet, you can resize it to fit the layout or align it with surrounding content.

**Resize via UI:**

1. **Click the image** to select it (selection handles appear around it).
2. **Drag a middle edge handle** to resize horizontally or vertically. Click the image itself to move.
3. **Release** to apply the new size or position.

**Resize programmatically:**

The Spreadsheet provides the [setImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#setimage) method to update image properties, including width and height. Pass the image ID and the new dimensions to resize an image programmatically.

### Select and deselect images

You can select images in the spreadsheet either by clicking them in the UI or programmatically using methods.

**Select an image via UI:**

1. **Click the image** in the worksheet to select it
2. Resize handles and a selection border appear around the image

**Select an image programmatically:**

The [selectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#selectimage) method allows you to programmatically select an image in the active sheet. Pass the image ID to select a specific image, or use the cell address where the image is located.

**Deselect an image programmatically:**

The [deselectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deselectimage) method removes the current image selection. Call this method to deselect any selected image without specifying an image ID.

Selected overlays receive the `.e-ss-overlay-active` class and show eight resize handles; selection can be controlled by `selectImage` (by id or address) and cleared with `deselectImage`.

### Delete images

Images added to a worksheet can be removed either through user interaction or programmatically.

**Delete via UI:**

To remove an image from the worksheet:

1. **Click the image** to select it
2. **Press Delete** or **Backspace** to remove it immediately

**Alternative UI method:**

- **Select the image** and choose **Clear All** or **Clear Contents** from the ribbon to clear the selection and all embedded objects including the image

**Delete programmatically:**

The Spreadsheet component provides the [deleteImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deleteimage) method. This method removes an image based on its unique identifier and the cell address where it is placed.

Pass the image ID to remove a specific image. This approach is useful when you track image IDs at insertion time and want to remove them later without relying on user selection.

Calling `deleteImage()` removes the image from the runtime model and the DOM overlay.

The following code example shows how to delete an image by ID in spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/delete-image-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/delete-image-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/delete-image-cs1" %}

---

### Image Customization

Image feature allows you to view and insert an image in a spreadsheet, and you can change the height and width of the image by resizing and moving it to another position.

#### Height and Width

* You can change the height and width of the image by resizing.
* Use the `height` and `width` property in the `insertImage()` method programmatically.

#### Top and Left

* You can change the position of the image by drag and drop.
* Use the `top` and `left` property in the `insertImage()` method programmatically.

## API Reference

### Methods

#### insertImage()

Inserts one or more images into the specified cell or range.

**Syntax:**
```javascript
insertImage(images, range)
```

**Parameters:**
- `images` — Array of image objects. Each image object contains: `src`, `id`, `width`, `height`, `top`, `left`.
- `range` — Optional target cell address or range (for example, `'D3'`). If omitted, the active selection is used.

**See:** [insertImage API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertimage)

#### selectImage()
Selects an image in the active worksheet.

**Syntax:**
```javascript
selectImage(imageId)
```

**Parameters:**
- `imageId` — The unique identifier of the image to select

**See:** [selectImage API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#selectimage)

#### deselectImage()
Removes selection from the currently selected image.

**Syntax:**
```javascript
deselectImage()
```

**See:** [deselectImage API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deselectimage)

#### deleteImage()
Removes an image from the worksheet by its ID and cell address.

**Syntax:**
```javascript
deleteImage(imageId, address)
```

**Parameters:**
- `imageId` — The unique identifier of the image to delete
- `address` — The cell address where the image is located

**See:** [deleteImage API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deleteimage)

### Properties

#### allowImage
Enables or disables image functionality in the Spreadsheet.

**Type:** `boolean`  
**Default:** `true`

**See:** [allowImage API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowimage)

### Limitations of Image

* Corner resizing option in the image element.

## See Also
* [Overview](./overview.md)
* [Illustrations](./illustrations.md)
* [Formatting](./formatting)
* [Rows and columns](./rows-and-columns)