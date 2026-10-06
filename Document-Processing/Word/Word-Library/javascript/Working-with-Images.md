---
title: Working with Images in JavaScript Word | Syncfusion
description: Learn how to insert, replace, remove, format, find, and caption images in a Word document using the Syncfusion JavaScript Word library.
platform: document-processing
control: Word Library
documentation: UG
---

# Working with Images in JavaScript Word Library

The Word library supports both inline and absolute-positioned images.

* **Inline images**: The image position is constrained to the lines of text on the page.
* **Absolute-positioned images**: The image can be placed independently of the text flow using wrapping, origin, and position settings.

The following code example shows how to add an image to a paragraph.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync } from 'node:fs';
import { WordDocument } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();
// Access the first section
let section = document.sections[0];
// Add a new paragraph to the section
let firstParagraph = section.body.appendParagraph();

// Add an image to the paragraph and set height and width
let response = await fetch('Image.png');
let imageBytes = new Uint8Array(await response.arrayBuffer());
let picture = firstParagraph.appendImage(imageBytes, {
    width: 200,
    height: 100,
});

// Save the Word document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Replace image

You can replace an image in the document by iterating paragraph items and loading new image bytes into a matching picture.

N> To identify images by `title`, the `title` property must already be set on the picture in the source document (for example, through Microsoft Word Alt Text, or by setting `picture.title` when the picture was created).

The following code example shows how to replace an existing image.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync } from 'node:fs';
import { EntityType, WordDocument, Picture } from '@syncfusion/ej2-docx';

// Load an existing Word document
let response = await fetch('Template.docx');
let arrayBuffer = await response.arrayBuffer();
let document = await WordDocument.openAsync(arrayBuffer);

// Get the body of the first section
let textBody = document.sections[0].body;

// Iterate through all paragraphs in the text body
for (let paragraph of textBody.paragraphs) {
    // Iterate through all paragraph items
    for (let paraItem of paragraph.items) {
        // Check whether the current paragraph item is a picture
        if (paraItem.type === EntityType.Picture) {
            let picture = paraItem as Picture;

            // Find the picture whose title matches the specified value
            if (picture.title === 'Bookmark') {
                // Set the picture width and height in points
                picture.width = 150;
                picture.height = 100;

                // Load image data and replace the existing image
                let response = await fetch('Image.png');
                let imageBytes = new Uint8Array(await response.arrayBuffer());
                picture.loadImage(imageBytes);
            }
        }
    }
}

// Save the modified document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Remove image

You can remove images by deleting them from the paragraph items collection.

The following code example shows how to remove images from paragraph items.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { EntityType, WordDocument } from '@syncfusion/ej2-docx';

// Open a Word document
let response = await fetch('Template.docx');
let arrayBuffer = await response.arrayBuffer();
let document = await WordDocument.openAsync(arrayBuffer);

// Get the body of the first section
let textBody = document.sections[0].body;

// Iterate through all paragraphs in the section body
for (let paragraph of textBody.paragraphs) {
   // Iterates through all paragraphs in the section body. 
   for (let paragraph of textBody.paragraphs) { 
       // Iterates through all items in the paragraph. 
       for (let paraItem of paragraph.items) { 
            // Checks whether the current item is an image. 
            if (paraItem.type === EntityType.Picture) { 
                // Removes the image from the paragraph. 
                paragraph.items.remove(paraItem); 
            } 
        } 
    } 
}

// Save the modified document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Format and rotate images

Absolute-positioned images support properties such as position, wrap format, and alignment. These layout properties do not apply when the text wrapping style is inline. You can also rotate an image and apply horizontal or vertical flipping.

The following code example shows how to apply picture formatting.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync } from 'node:fs';
import { WordDocument, 
 HorizontalAlignment,
    HorizontalOrigin,
    TextWrappingStyle,
    VerticalAlignment,
    VerticalOrigin } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();
// WordDocument.create() already seeds section 0
let section = document.sections[0];
// Add a new paragraph to the section
let paragraph = section.body.appendParagraph();
paragraph.appendText('This paragraph has picture. ');
// Append a new picture
let response = await fetch('Image.png');
let imageBytes = new Uint8Array(await response.arrayBuffer());
let picture = paragraph.appendImage(imageBytes);
// Set text wrapping style – when the wrapping style is inline, the image is not absolutely positioned
picture.textWrappingStyle = TextWrappingStyle.Square;
// Set horizontal and vertical origin
picture.horizontalOrigin = HorizontalOrigin.Page;
picture.verticalOrigin = VerticalOrigin.Paragraph;
// Set width and height
picture.width = 150;
picture.height = 100;
// Set horizontal and vertical position
picture.horizontalPosition = 200;
picture.verticalPosition = 150;

// Set lock aspect ratio and name
picture.lockAspectRatio = true;
picture.name = 'PictureName';

// Set horizontal and vertical alignments
picture.horizontalAlignment = HorizontalAlignment.Center;
picture.verticalAlignment = VerticalAlignment.Bottom;

// Set 90 degree rotation
picture.rotation = 90;

// Set horizontal flip
picture.flipHorizontal = true;

// Save the Word document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Find an image by title

You can find an image with a specific title by iterating paragraphs and paragraph items, then use that picture for further updates.

The following code example shows how to find an image by title.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { EntityType, WordDocument, Picture } from '@syncfusion/ej2-docx';

// Load an existing Word document
let response = await fetch('Template.docx');
let arrayBuffer = await response.arrayBuffer();
let document = await WordDocument.openAsync(arrayBuffer);

let textBody = document.sections[0].body;

// Iterate paragraphs in the body
for (let paragraph of textBody.paragraphs) {
    // Iterate paragraph items
    for (let paraItem of paragraph.items) {
        if (paraItem.type === EntityType.Picture) {
            let picture = paraItem as Picture;
            // Match the picture title
            if (picture.title === 'Bookmark') {
                picture.width = 150;
                picture.height = 100;
            }
        }
    }
}

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}

## Add image caption

You can add a caption to an image by using the `addCaption` method. The method accepts the following parameters:

* `captionName`: The caption label name (for example, `"Figure"` or `"Table"`).
* `numberingFormat`: A `CaptionNumberingFormat` value that controls how the caption number is formatted (for example, `Arabic` or `UpperCaseRoman`).
* `position`: A `CaptionPosition` value that places the caption above or below the image (`Above` or `Below`).

The following code example shows how to add a caption to an image.

{% tabs %}
{% highlight typescript tabtitle="TypeScript" %}
import { readFileSync } from 'node:fs';
import { WordDocument, CaptionNumberingFormat,
    CaptionPosition } from '@syncfusion/ej2-docx';

// Create a new Word document
let document = WordDocument.create();

// Get the first section in the document
let section = document.sections[0];

// Append a new paragraph to the section body
let firstParagraph = section.body.appendParagraph();

// Load image data from the specified file
let response = await fetch('Image.png');
let imageBytes = new Uint8Array(await response.arrayBuffer());

// Insert an image into the paragraph with the specified dimensions
let picture = firstParagraph.appendImage(imageBytes, {
    width: 200,
    height: 100,
});

// Add a caption above the image using Arabic numbering
picture.addCaption(
    'Figure',
    CaptionNumberingFormat.Arabic,
    CaptionPosition.Above,
);

// Save the document
document.save('Output.docx');
{% endhighlight %}
{% endtabs %}