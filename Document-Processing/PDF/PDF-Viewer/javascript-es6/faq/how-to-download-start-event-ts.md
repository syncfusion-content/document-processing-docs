---
layout: post
title: Controlling File Downloads in Typescript Pdfviewer control | Syncfusion
description: Learn here how to Controlling File Downloads in Syncfusion Typescript Pdfviewer control of Syncfusion Essential JS 2 and more.
platform: document-processing
control: PDF Viewer
publishingplatform: Typescript
documentation: ug
domainurl: ##DomainURL##
---

# Controlling File Downloads in Syncfusion PDF Viewer

In the Syncfusion PDF Viewer, we've introduced a new feature that enables you to manage file downloads more effectively. This feature allows you to intercept and potentially skip the download process of a PDF document, providing enhanced control over user interactions within your application.

### Using the downloadStart Event

The key to this functionality lies in the downloadStart event, which offers a mechanism to intercept the initiation of the download process. Within the event handler, you can set the cancel argument to true to programmatically prevent the download action from proceeding.

```ts
pdfviewer.downloadStart = (args: any) => {
    // Your custom logic here
    args.cancel = true; // Prevent download action
};
```

By default, the cancel argument is set to `false`, indicating that the download action will proceed unless explicitly canceled by your custom logic.

### Enhanced Flexibility

By leveraging the [downloadStart](https://ej2.syncfusion.com/documentation/api/pdfviewer/#downloadstart) event and its cancel argument, you gain the ability to implement custom logic to control and potentially prevent download actions based on your application's specific requirements. This enhancement provides greater flexibility in managing user interactions with PDF documents, empowering you to tailor the experience according to your needs.