---
layout: post
title: Smart Fill in Blazor Smart PDF Viewer | Syncfusion
description: Discover how Smart Fill enhances form filling in Blazor SfSmartPdfViewer by auto-detecting and populating PDF fields.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Smart Fill in Blazor Smart PDF Viewer
This feature streamlines the process of completing PDF forms. The AI analyzes the document and user-provided input to automatically populate relevant fields, reducing manual effort and minimizing errors. Users can review and adjust the filled fields to ensure the final output meets their requirements.



## Smart Fill Settings in Syncfusion Blazor Smart PDF Viewer
- The `SmartFillSettings` class configures settings for the Smart Fill feature in the Smart PDF Viewer. This feature leverages AI to automate the population of PDF form fields based on clipboard or specified data.

- `SmartFillSettings` provides all options and execution hooks for integrating AI-powered, context-aware document filling into a PDF viewer workflow.

## SmartFillSettings Parameter

### Enable
- The `Enable` determines whether the Smart Fill button is shown in the toolbar and whether the feature is accessible. The default value is `true`.
- The button remains inactive unless the loaded PDF document contains form fields.
- Helps maintain a clean and intuitive UI by hiding the feature when it's not applicable.
- Can be dynamically toggled based on user roles, document content, or application logic.

```csharp
<SfSmartPdfViewer>
    <SmartFillSettings Enable="false" />
</SfSmartPdfViewer>
```

## Integration
To integrate Smart Fill into your PDF viewer workflow, include the `SmartFillSettings` component within the `SfSmartPdfViewer` tag. Ensure that your PDF documents contain form fields to utilize the AI-powered filling capabilities.
