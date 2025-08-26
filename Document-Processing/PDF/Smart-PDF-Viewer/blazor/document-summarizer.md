---
layout: post
title: Document Summaries in Blazor Smart PDF Viewer | Syncfusion
description: Checkout and learn about Document Summaries in SfSmartPdfViewer.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
---

# Document Summaries in Blazor Smart PDF Viewer

The `SmartPdfViewer` is allows for seamless interaction with PDF documents by incorporating AI-assisted functionalities such as summarization and question answering.

The AI AssistView provides users with the ability to generate a summary of the PDF document and ask questions about its content. Users can activate the AI assistant by clicking the **AI AssistView** button at the bottom-right of the viewer. The assistant can respond to user queries and offer AI-generated suggestions to guide exploration of the document.

![Document Summaries](images/summarizer_pdfviewer.gif)

## Component Usage

```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings/>
</SfSmartPdfViewer>
```

## AssistViewSettings Parameters

### ShowPromptSuggestions
This property determines whether prompt suggestions are displayed to the user in the Assist view. When set to `true`, the interface will show a list of suggested prompts that users can click to initiate AI queries. This helps guide users who may not know what to ask and improves the overall usability of the assistant. The default value is `true`.
```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings ShowPromptSuggestions="true" />
</SfSmartPdfViewer>
```

### Prompt
The `Prompt` property allows developers to set a predefined query that appears in the input field when the Assist view is opened. This can be used to direct the AI assistant to perform a specific task, such as summarizing the document or answering a particular question. It enhances the user experience by providing immediate context and guidance.
```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings Prompt="Explain this document." />
</SfSmartPdfViewer>
```

### PromptChanged
This is a callback that is triggered whenever the user modifies the prompt text. It allows developers to track changes in real time and respond to user input dynamically. For example, the application can log the new prompt or trigger additional actions based on the updated query.
```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings PromptChanged="@OnPromptChanged" />
</SfSmartPdfViewer>

@code {
    private void OnPromptChanged(string newPrompt)
    {
        Console.WriteLine($"Prompt changed: {newPrompt}");
    }
}
```

### Placeholder
The `Placeholder` property sets the placeholder text in the input field of the Assist view. This text appears when the field is empty and serves as a hint to the user about what kind of input is expected. The default value is "Type your prompt for assistance..." and can be customized to suit the application's tone and purpose.
```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings Placeholder="Enter your query..." />
</SfSmartPdfViewer>
```

### MinContentLength
This property specifies the minimum number of characters that must be present in the document for AI processing to be enabled. If the document contains fewer characters than the specified threshold, an error message will be displayed and AI features will be disabled. This ensures that the AI assistant has sufficient content to analyze and prevents unnecessary processing of trivial documents. The default value is `100`.
```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
   <AssistViewSettings MinContentLength="100" />
</SfSmartPdfViewer>
```

### StreamResponse
When enabled, this property allows AI responses to be streamed to the user in real time. Instead of waiting for the entire response to be generated, users see the output as it is being composed. This improves perceived performance and makes the interaction feel more dynamic. The default value is `false`.
```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings StreamResponse="true" />
</SfSmartPdfViewer>
```

### MaxRetryAttempts
This property sets the maximum number of retry attempts for AI processing. If the assistant encounters an error, it will retry the operation up to the specified number of times before showing an error message. This helps improve reliability in cases where transient issues may affect AI response generation. The default value is `3`.
```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
   <AssistViewSettings MaxRetryAttempts="3" />
</SfSmartPdfViewer>
```

### Timeout
The `Timeout` property defines the maximum duration (in seconds) that the AI assistant will wait for a response before timing out. If the response is not received within this period, the operation is aborted and an error is shown. This prevents the application from hanging indefinitely and ensures timely feedback to the user. The default value is `30`.
```cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings Timeout="30" />
</SfSmartPdfViewer>
```

### Enable
This property controls whether the Assist view and its features are available in the PDF viewer. When set to `false`, the AI assistant is completely disabled, and the launch button is hidden from the toolbar. This is useful for scenarios where AI features are not required or need to be restricted. The default value is `true`.
```razor
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings Enable="true" />
</SfSmartPdfViewer>
```

## Customizing Assist View with PdfViewerTemplates – SmartPdfViewer

The `PdfViewerTemplates` class in Syncfusion's `SmartPdfViewer` component allows developers to customize the layout and functionality of the Assist view. This includes defining templates for the prompt input toolbar, AI response toolbar, and banner section, enabling a more personalized and interactive user experience.


## Template Properties

### PromptTemplate
Defines the toolbar layout within the prompt view. Developers can use `PromptToolbar` and `PromptToolbarItem` to add icons and actions that guide user input.

``` cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings>
        <PdfViewerTemplates>
            <PromptTemplate>
                <PromptToolbar>
                    <PromptToolbarItem IconCss="e-icons e-assist-edit"></PromptToolbarItem>
                    <PromptToolbarItem IconCss="e-icons e-assist-copy"></PromptToolbarItem>
                </PromptToolbar>
            </PromptTemplate>
        </PdfViewerTemplates>
    </AssistViewSettings>
</SfSmartPdfViewer>
```

### ResponseTemplate
Customizes the toolbar shown in the response section. Using `ResponseToolbar` and `ResponseToolbarItem`, developers can include feedback options like "like" or "dislike".

``` cshtml
<SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
    <AssistViewSettings>
        <PdfViewerTemplates>
            <ResponseTemplate>
                <ResponseToolbar>
                    <ResponseToolbarItem IconCss="e-icons e-assist-like"></ResponseToolbarItem>
                    <ResponseToolbarItem IconCss="e-icons e-assist-dislike"></ResponseToolbarItem>
                </ResponseToolbar>
            </ResponseTemplate>
        </PdfViewerTemplates>
    </AssistViewSettings>
</SfSmartPdfViewer>
```

### BannerTemplate
Use the `BannerTemplate` to displays a banner at the top of the Assist view. This can be used for branding, instructions, or welcome messages to enhance user engagement. The following code demonstrates BannerTemplate usage in the SfSmartPdfViewer component.

``` cshtml
    <SfSmartPdfViewer DocumentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf">
        <AssistViewSettings>
            <PdfViewerTemplates>
                <BannerTemplate>
                    <div style="font-size: 16px; color:#5D3FD3;">
                       Welcome to Syncfusion’s AI-powered PDF Summarizer!<br />
                       Extract key ideas and save time with smart summaries.
                   </div>
                </BannerTemplate>
            </PdfViewerTemplates>
        </AssistViewSettings>
    </SfSmartPdfViewer>
```

![Summarizer Banner Template](images/summarizer_banner-template.png)
## Integration Notes

To apply these templates, include them within the `AssistViewSettings` of the `SfSmartPdfViewer`. 