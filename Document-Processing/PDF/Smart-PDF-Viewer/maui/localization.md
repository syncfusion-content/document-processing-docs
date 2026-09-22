---
layout: post
title: Localization in .NET MAUI Smart PDF Viewer | Syncfusion
description: Learn how to localize the static text in the Syncfusion<sup>&reg;</sup> .NET MAUI Smart PDF Viewer (SfSmartPdfViewer) control to other languages.
platform: document-processing
control: SfSmartPdfViewer
documentation: ug
keywords: .net maui smart pdf viewer, localization maui, localize smart pdf viewer, maui resx localization
---

# Localization in .NET MAUI Smart PDF Viewer

Localization is the process of translating the application resources into a different language for specific cultures. [SfSmartPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartPdfViewer.SfSmartPdfViewer.html) is set up by default with the language code `en-US`. However, by including a resource file (.resx) in the application with the language code, the static text used in the [SfSmartPdfViewer](https://help.syncfusion.com/cr/maui/Syncfusion.Maui.SmartPdfViewer.SfSmartPdfViewer.html) can be localized to a different language.

The Smart PDF Viewer uses the `SfSmartPdfViewerResources` accessor, which falls back to the built-in English strings whenever a localized value is not found.

## Change the current user interface culture

Set the [CurrentUICulture](https://learn.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo.currentuiculture?view=net-9.0) property in the `App.xaml.cs` file to the desired user interface culture. Refer to the following code sample to change the current culture to `French`.

{% tabs %}
{% highlight C# tabtitle="App.xaml.cs" hl_lines="10" %}

using System.Globalization;

namespace SmartPdfViewerLocalization;

public partial class App : Application
{
	public App()
	{
		InitializeComponent();
        CultureInfo.CurrentUICulture = new CultureInfo("fr-FR");
        MainPage = new AppShell();
	}
}

{% endhighlight %}
{% endtabs %}

## Create and add the resource file to the application

Follow the given steps to create and add the resource file to the application.

1. Right-click on the `Resources` folder in the application.

2. Click the `Add` option and then select `New Item`.

3. In the `Add New Item` wizard, select the `Resource File` option and name the file in the format `<control name>.<culture name>.resx`. For example, name the file as `SfSmartPdfViewer.fr.resx` for the `French` culture.

4. Click the `Add` option to add the resource file to the Resources folder.

5. Change the `Build Action` of the resource file to `Embedded Resource`.

6. Double-click the resource file to add the name and value details in the Resource Designer. Use the names listed in the [default names and values](#default-names-and-values) section below.

7. Set the `ResourceManager` as shown in the following code example, which looks up the resource file with the specified root name.

{% tabs %}
{% highlight C# tabtitle="App.xaml.cs" hl_lines="13 14" %}

using System.Resources;
using System.Globalization;
using Syncfusion.Maui.SmartPdfViewer;

namespace SmartPdfViewerLocalization;

public partial class App : Application
{
	public App()
	{
		InitializeComponent();
        CultureInfo.CurrentUICulture = new CultureInfo("fr-FR");
        SfSmartPdfViewerResources.ResourceManager = new ResourceManager("SmartPdfViewerLocalization.Resources.SfSmartPdfViewer", 
			Application.Current.GetType().Assembly);
        MainPage = new AppShell();
	}
}

{% endhighlight %}
{% endtabs %}

N> When localizing multiple Syncfusion MAUI controls in a .NET MAUI application, it's important to understand that these controls support only a single [ResourceManager](https://learn.microsoft.com/en-us/dotnet/api/system.resources.resourcemanager?view=net-9.0) instance for localization. If you assign different [ResourceManager](https://learn.microsoft.com/en-us/dotnet/api/system.resources.resourcemanager?view=net-9.0) instances for separate resource (.resx) files, the last-assigned ResourceManager will override the others. This can result in incomplete or incorrect localization across your controls. To ensure consistent and accurate localization, consolidate all localization keys (name-value pairs) into a single resource (.resx) file and assign the [ResourceManager](https://learn.microsoft.com/en-us/dotnet/api/system.resources.resourcemanager?view=net-9.0) using that unified resource file, as shown below:
N>
N>```csharp
N> using Syncfusion.Maui.Core.Localization;
N>
N> // Assign the ResourceManager using the unified .resx file 
N> LocalizationResourceAccessor.ResourceManager = new ResourceManager("Localization.Resources.SyncfusionControls", Application.Current.GetType().Assembly);
N> // Replace the above string with your resource file's actual namespace and name.
N> ```

N> The Smart PDF Viewer inherits the core PDF Viewer features from [SfPdfViewer](https://help.syncfusion.com/cr/document-processing/Syncfusion.Maui.PdfViewer.SfPdfViewer.html). To localize the core PDF Viewer text (toolbars, annotations, forms, and so on), include the `SfPdfViewer` resource keys in the same resource file, as described in the [PDF Viewer localization](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/localization) documentation. The Smart PDF Viewer also reuses some core viewer keys — for example, `Ok` and `Cancel` displayed in the redaction confirmation and AI failure warning dialogs are resolved through the `SfPdfViewer` resources.

## Default names and values

The following table contains the default name and value details used in the `SfSmartPdfViewer` in the `en-US` culture.

N> The default values listed below are the hard-coded fallback strings in the `SfSmartPdfViewerResources` accessor. When a localized value is found in the assigned resource file, it overrides the default value.

<table>
<tr>
<th>Name</th>
<th>Value</th>
</tr>
<tr>
<td>AIAssist</td>
<td>AI Assist</td>
</tr>
<tr>
<td>AssistViewHeaderText</td>
<td>Can I help you?</td>
</tr>
<tr>
<td>AIAssistanceDescription</td>
<td>How can I help you with this document?</td>
</tr>
<tr>
<td>AIAssistanceTitle</td>
<td>AI Assistance</td>
</tr>
<tr>
<td>AIServiceNotAvailableContent</td>
<td>No AI service has been configured for Smart PDF Viewer.</td>
</tr>
<tr>
<td>AIServiceNotAvailableTitle</td>
<td>AI Service Not Available</td>
</tr>
<tr>
<td>AITools</td>
<td>AI Tools</td>
</tr>
<tr>
<td>AIModelNotReadyContent</td>
<td>The AI model is still preparing the document. Please try again in a few moments.</td>
</tr>
<tr>
<td>AIModelNotReadyTitle</td>
<td>AI Not Ready</td>
</tr>
<tr>
<td>AuthenticationFailedContent</td>
<td>The credentials were not provided, incorrect, or invalid. Please verify your AI configuration.</td>
</tr>
<tr>
<td>AuthenticationFailedTitle</td>
<td>Authentication Failed</td>
</tr>
<tr>
<td>ConnectionErrorContent</td>
<td>The connection to the AI service has been lost. Please check your network connection and try again.</td>
</tr>
<tr>
<td>ConnectionErrorTitle</td>
<td>Connection Error</td>
</tr>
<tr>
<td>DisclaimerContent</td>
<td>AI-generated content may contain inaccuracies.</td>
</tr>
<tr>
<td>NoInformationErrorContent</td>
<td>No sensitive information was found in the document.</td>
</tr>
<tr>
<td>NoInformationErrorContentHeader</td>
<td>No Data Found</td>
</tr>
<tr>
<td>NoPatternSelectedContent</td>
<td>Please select at least one pattern.</td>
</tr>
<tr>
<td>NoPatternSelectedTitle</td>
<td>Pattern Required</td>
</tr>
<tr>
<td>ModelNotAvailableContent</td>
<td>The configured AI model is unavailable or does not exist.</td>
</tr>
<tr>
<td>ModelNotAvailableTitle</td>
<td>Model Not Available</td>
</tr>
<tr>
<td>RateLimitExceededContent</td>
<td>The AI service rate limit has been exceeded. Please try again later.</td>
</tr>
<tr>
<td>RateLimitExceededTitle</td>
<td>Rate Limit Exceeded</td>
</tr>
<tr>
<td>Redact</td>
<td>Redact</td>
</tr>
<tr>
<td>RedactDisclaimer</td>
<td>AI-detected information may not be accurate. Please verify results before use.</td>
</tr>
<tr>
<td>RedactOptionsHeader</td>
<td>Select the pattern</td>
</tr>
<tr>
<td>Scan</td>
<td>Scan</td>
</tr>
<tr>
<td>RedactViewHeader</td>
<td>Select the patterns</td>
</tr>
<tr>
<td>SmartFill</td>
<td>Smart Fill</td>
</tr>
<tr>
<td>SmartRedaction</td>
<td>Smart Redaction</td>
</tr>
<tr>
<td>TimeOutErrorContent</td>
<td>Your search request took longer than expected and exceeded the maximum allowed time.</td>
</tr>
<tr>
<td>TimeOutErrorTitle</td>
<td>Request Timeout</td>
</tr>
<tr>
<td>UnsupportedFileErrorContent</td>
<td>This file doesn't support generative AI features because it's blank or doesn't contain enough text. Please try a different file.</td>
</tr>
<tr>
<td>UnSupportedFileErrorTitle</td>
<td>Unsupported File</td>
</tr>
</table>

## Localizing the redaction patterns

The default redaction pattern names (Person Names, Organization Names, Email Addresses, Phone Numbers, Addresses, Dates, Account Numbers, and Credit Card Numbers) shown in the Smart Redaction panel are provided through the [`RedactPatterns`](./smart-redaction#redactpatterns) property. To present these patterns in a different language, assign the localized pattern names to the `SmartRedactSettings.RedactPatterns` property.

{% tabs %}
{% highlight C# tabtitle="MainPage.xaml.cs" %}

using System.Globalization;
using Syncfusion.Maui.SmartPdfViewer;
. . .

SfSmartPdfViewer pdfViewer = new SfSmartPdfViewer
{
    SmartRedactSettings = new SmartRedactSettings
    {
        RedactPatterns = CultureInfo.CurrentUICulture.TwoLetterISOLanguageName == "fr"
            ? new string[] { "Noms de personnes", "Noms d'organisations", "Adresses e-mail", "Numéros de téléphone", "Adresses", "Dates", "Numéros de compte", "Numéros de carte de crédit" }
            : new string[]
            {
                "Person Names",
                "Organization Names",
                "Email Addresses",
                "Phone Numbers",
                "Addresses",
                "Dates",
                "Account Numbers",
                "Credit Card Numbers"
            }
    }
};

{% endhighlight %}
{% endtabs %}

N> Custom redaction patterns supplied via `RedactPatterns` are sent to the AI service as-is for detection. Verify that the configured AI model understands the localized pattern names.

## See also

* [.NET MAUI Smart PDF Viewer Overview](./overview)
* [Getting Started with .NET MAUI Smart PDF Viewer](./getting-started)
* [Document Summaries in .NET MAUI Smart PDF Viewer](./document-summarizer)
* [Smart Redaction in .NET MAUI Smart PDF Viewer](./smart-redaction)
* [Smart Fill in .NET MAUI Smart PDF Viewer](./smart-fill)
* [Localization in .NET MAUI PDF Viewer](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/maui/localization)