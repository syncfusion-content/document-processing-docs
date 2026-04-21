---
layout: post
title: Images and illustrations in React Spreadsheet component | Syncfusion
description: Learn here how to insert, position, resize, select, and delete images in the Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Spreadsheet
platform: document-processing
documentation: ug
---

# Images and Illustrations
Syncfusion React Spreadsheet component allows inserting images into worksheet cells to improve presentation and add context. Use images for logos, screenshots, diagrams, or illustrations. Images can be positioned, resized, selected, or removed. Control image support with the [allowImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowimage) property (enabled by default).

## Overview

The React Spreadsheet component allows you to insert images directly into worksheet cells to enhance visual presentation and provide additional context alongside data. Images such as logos, screenshots, diagrams, or illustrations can be placed within a sheet, positioned as needed, resized, selected, or removed.

Images are supported in the Spreadsheet and can be controlled using the [allowImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#allowimage) property, which is enabled by default.

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

1. **Click the image** to select it (selection handles appear around it)
2. **Drag any corner handle** to resize proportionally, or **drag an edge handle** to resize in one direction
3. **Release** to apply the new size

When an image is selected, eight resize handles appear around its border—four at the corners and four at the edges. Dragging a corner handle resizes both dimensions proportionally, while dragging an edge handle resizes only that dimension.

**Resize programmatically:**

The Spreadsheet provides the [setImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#setimage) method to update image properties, including width and height. Pass the image ID and the new dimensions to resize an image programmatically.

The following code example shows how to resize an image in spreadsheet:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/resize-image-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/resize-image-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "/document-processing/code-snippet/spreadsheet/react/resize-image-cs1" %}

### Select and deselect images

You can select images in the spreadsheet either by clicking them in the UI or programmatically using methods.

**Select an image via UI:**

1. **Click the image** in the worksheet to select it
2. Resize handles and a selection border appear around the image

**Select an image programmatically:**

The [selectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#selectimage) method allows you to programmatically select an image in the active sheet. Pass the image ID to select a specific image, or use the cell address where the image is located.

**Deselect an image programmatically:**

The [deselectImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deselectimage) method removes the current image selection. Call this method to deselect any selected image without specifying an image ID.

### Delete images

Images added to a worksheet can be removed either through user interaction or programmatically.

**Delete via UI:**

To remove an image from the worksheet:

1. **Click the image** to select it
2. **Press Delete** or **Backspace** to remove it immediately

**Alternative UI method:**

- **Right-click the image** and select **Delete** from the context menu, or
- **Select the image** and choose **Clear All** from the ribbon to clear the selection and all embedded objects including the image

**Delete programmatically:**

The Spreadsheet component provides the [deleteImage](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#deleteimage) method. This method removes an image based on its unique identifier and the cell address where it is placed.

Pass the image ID to remove a specific image. This approach is useful when you track image IDs at insertion time and want to remove them later without relying on user selection.

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

## API Reference

### Methods

#### insertImage()
Inserts one or more images into the worksheet at specified cell locations.

**Syntax:**
```javascript
insertImage(imageData)
```

**Parameters:**
- `imageData` — An object or array of objects containing:
	- `src` — Image source URL or base64 string
	- `width` — Image width in pixels
	- `height` — Image height in pixels
	- `top` — Top position of the image
	- `left` — Left position of the image
	- `address` — Cell address where the image is placed

**See:** [insertImage API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#insertimage)

#### setImage()
Updates image properties such as width, height, and position.

**Syntax:**
```javascript
setImage(imageId, imageData)
```

**Parameters:**
- `imageId` — The unique identifier of the image to update
- `imageData` — An object containing the new properties (width, height, top, left, etc.)

**See:** [setImage API Documentation](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#setimage)

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