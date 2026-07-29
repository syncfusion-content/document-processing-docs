---
layout: post
title: Syncfusion WPF SfSpreadsheet MCP Server | Syncfusion
description: Learn how to configure and use the Syncfusion WPF MCP server for intelligent code generation, documentation, and troubleshooting in WPF SfSpreadsheet applications.
platform: wpf
control: Getting started with Syncfusion WPF SfSpreadsheet MCP Server
documentation: ug
---

# Syncfusion WPF SfSpreadsheet MCP Server

Syncfusion<sup style="font-size:70%">&reg;</sup> MCP Server accelerates WPF SfSpreadsheet application development by providing deep knowledge directly in your AI-powered IDE. [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) (MCP) integration enables quick access to documentation, API references, and code-generation features from within the development environment.

These tools speed up development and reinforce best practices for Syncfusion WPF SfSpreadsheet control integration.

## Key Benefits

- **Expert Component Knowledge** - Deep understanding of WPF SfSpreadsheet features such as workbook loading, editing, formatting, formulas, printing, themes, localization, freeze panes, and Excel content import.
- **Unlimited Usage** - No request limits, time restrictions, or query caps.
- **Privacy-Focused** - The tools operate based on the user's query and do not store any content, data, or prompts.

## Installation

### Prerequisites

Before beginning, ensure the following prerequisites are met:

- Microsoft [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0) or later
- A **compatible MCP client** (VS Code, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, Cursor, JetBrains, etc.)
- An active [Syncfusion<sup style="font-size:70%">&reg;</sup> API key](https://syncfusion.com/account/api-key)
- A **WPF SfSpreadsheet application** (existing or new); see [Getting Started with WPF Spreadsheet (SfSpreadsheet)](https://help.syncfusion.com/document-processing/excel/spreadsheet/wpf/getting-started)
- Required WPF Spreadsheet NuGet package: `Syncfusion.SfSpreadsheet.WPF`. For theme support, install the required Syncfusion WPF theme package such as `Syncfusion.Themes.Windows11Light.WPF`.
- An active Syncfusion<sup style="font-size:70%">&reg;</sup> license (any of the following):
  - [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)
  - [Free Community License](https://www.syncfusion.com/products/communitylicense)
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)

### Getting Your API Key

Generate the Syncfusion<sup style="font-size:70%">&reg;</sup> API key from the [API Key page](https://www.syncfusion.com/account/api-key) and store it in a `.txt` or `.key` file. The saved file will be referenced in the MCP configuration:

````json
"env": {
  "Syncfusion_API_Key_Path": "D:\\syncfusion-key.txt"
}
````

> Alternatively, the API key can also be set directly using `"Syncfusion_API_Key": "YOUR_API_KEY"` in the env configuration. Using a file path is recommended to keep the key out of source control.

### Setting Up in MCP Clients

Create a configuration file in your project folder to install the server for your workspace. **Replace `YOUR_API_KEY_FILE_PATH` with the path to your API key file.** The tabs below show a working configuration for each supported MCP client.

**For .NET 10** :

{% tabs %}
{% highlight bash tabtitle="VS Code" %}

// Create a `.vscode/mcp.json` file in your workspace:

{
  "servers": {
    "sf-wpf-mcp": {
      "type": "stdio",
      "command": "dnx",
      "args": ["Syncfusion.WPF.MCP", "--source", "https://nexus.syncfusioninternal.com/repository/nuget-hosted/", "--yes"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

{% endhighlight %}
{% highlight bash tabtitle="Code Studio" %}

// Create a `.codestudio/mcp.json` file in your workspace:

{
  "servers": {
    "sf-wpf-mcp": {
      "type": "stdio",
      "command": "dnx",
      "args": ["Syncfusion.WPF.MCP", "--source", "https://nexus.syncfusioninternal.com/repository/nuget-hosted/", "--yes"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

// After creating the file, click Start in the inline action to install the server.

{% endhighlight %}
{% highlight bash tabtitle="Cursor" %}

// Create a `.cursor/mcp.json` file in your workspace:

{
  "mcpServers": {
    "sf-wpf-mcp": {
      "command": "dnx",
      "args": ["Syncfusion.WPF.MCP", "--source", "https://nexus.syncfusioninternal.com/repository/nuget-hosted/", "--yes"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

{% endhighlight %}
{% highlight bash tabtitle="JetBrains" %}

// Open AI Assistant chat, type /, and select Add Command.
// Click ➕ Add on the MCP settings page.
// Choose STDIO and select JSON configuration:

{
  "mcpServers": {
    "sf-wpf-mcp": {
      "command": "dnx",
      "args": ["Syncfusion.WPF.MCP", "--source", "https://nexus.syncfusioninternal.com/repository/nuget-hosted/", "--yes"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

// Click OK, then click Apply. The server starts and shows Connected status.

{% endhighlight %}
{% endtabs %}

**For .NET 8 / .NET 9 (using a local tool):**

You can install the Syncfusion WPF MCP server as a local tool without a global installation. For guidance on installing and managing local .NET tools, refer to the [documentation](https://learn.microsoft.com/en-us/dotnet/core/tools/local-tools-how-to-use).

1. Install the Syncfusion WPF MCP tool locally:

    ````bash
    dotnet tool install Syncfusion.WPF.MCP --add-source "https://nexus.syncfusioninternal.com/repository/nuget-hosted/"
    ````

> If your Syncfusion WPF MCP package is published in an internal NuGet feed, include the `--add-source` option as shown above.

2. In your MCP client config (for example, `.vscode/mcp.json`), replace the server entry with:

    ````json
    {
      "servers": {
        "sf-wpf-mcp": {
          "type": "stdio",
          "command": "dotnet",
          "args": ["tool", "run", "syncfusion-wpf-mcp"],
          "env": {
            "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
            // or
            // "Syncfusion_API_Key": "YOUR_API_KEY"
          }
        }
      }
    }
    ````

**Verifying Installation** Check your editor's MCP Server list for `sf-wpf-mcp` with a **Connected** status to confirm a successful installation.

> **Note:** The MCP server configuration remains `Syncfusion.WPF.MCP` because SfSpreadsheet is a WPF control. The internal package source is configured through `--source https://nexus.syncfusioninternal.com/repository/nuget-hosted/` for .NET 10 and through `--add-source` during local tool installation for .NET 8 / .NET 9. Use WPF SfSpreadsheet-specific prompts to retrieve SpreadsheetEditor guidance and code snippets.

## Common use cases

The examples below showcase how the `search_docs` tool handles real-world WPF SfSpreadsheet application development scenarios. The tool can be invoked directly, as shown in the examples below, for specific needs. Alternatively, an AI assistant can automatically invoke it based on the request.

**Create a WPF SfSpreadsheet Application**

Use `search_docs` to get contextual guidance, required NuGet packages, XAML namespace references, and starter code for creating a WPF SfSpreadsheet application.

{% promptcards %}
{% promptcard Create WPF SfSpreadsheet Application %}
#search_docs Create a Syncfusion WPF SfSpreadsheet application with required NuGet packages, XAML namespace, SpreadsheetRibbon, and SfSpreadsheet control.
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Open Excel File %}
#search_docs How to open and load an Excel file in WPF SfSpreadsheet control?
{% endpromptcard %}
{% endpromptcards %}

**Implement SpreadsheetEditor Features**

Get step-by-step help for adding specific SpreadsheetEditor features to an existing WPF SfSpreadsheet application.

{% promptcards %}
{% promptcard Print Spreadsheet %}
#search_docs Print in WPF Spreadsheet control
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Non-editable Cells Rows Columns %}
#search_docs How to make a cell/row/column non-editable without protecting the worksheet in WPF spreadsheet control?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Import Charts Sparklines Pictures Textboxes %}
#search_docs how to import charts, sparklines, pictures and textboxes in WPF SfSpreadsheet control?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Set Current UI Culture %}
#search_docs How to Set Current UI Culture to the Application in the WPF SfSpreadsheet Control?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Apply Theme %}
#search_docs How do I apply a theme to the WPF SfSpreadsheet control?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Freeze Rows and Columns %}
#search_docs How to freeze and unfreeze rows and columns in WPF SfSpreadsheet Control?
{% endpromptcard %}
{% endpromptcards %}

**Troubleshooting**

Describe the problem in plain language, and let `search_docs` help resolve WPF SfSpreadsheet integration or runtime issues.

{% promptcards %}
{% promptcard Spreadsheet Loading Issues %}
#search_docs Why is my WPF SfSpreadsheet control not loading or displaying the Excel workbook correctly?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Spreadsheet Editing Issues %}
#search_docs Why are cell editing, formulas, or formatting not working correctly in WPF SfSpreadsheet control?
{% endpromptcard %}
{% endpromptcards %}

## Best Practices

To get the most out of the Syncfusion<sup style="font-size:70%">&reg;</sup> WPF MCP Servers:

- **Be Specific** - Include the platform and component in your queries (for example, *"Create a Syncfusion WPF SfSpreadsheet application with SpreadsheetRibbon and Excel file loading"*).
- **Provide Context** - Include applicable versions, expected outcomes, and any requirements or limitations that may affect the request.
- **Use Descriptive Queries** - Avoid overly brief or ambiguous requests. Providing sufficient detail helps improve the accuracy and relevance of the response.
- **Stay Consistent** - Keep file organization, naming conventions, XAML naming, and coding standards consistent throughout your WPF SfSpreadsheet project.
- **Start Fresh for New Topics** - Begin a new chat when switching to a different control or task to maintain clean context.
- **Use Advanced AI Models** - For the best results, use advanced AI models such as the latest-generation **Claude**, **GPT**, or **Gemini** models.
- **For Troubleshooting** - Use AI suggestions for common issues; consult the [WPF SfSpreadsheet documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/wpf/getting-started) or [support](https://support.syncfusion.com/support/tickets/create) for complex problems.
- **Minimize Active Tools** - Limit the number of active MCP tools in your IDE to prevent tool-selection ambiguity and improve response accuracy.

> Always review AI-generated code before using it in production.

## Troubleshooting

The table below lists frequently encountered issues and suggested resolutions to help diagnose and address common setup or usage challenges.

| Issue | Solution |
|-------|----------|
| **Server failed to start** | Update to .NET 8 SDK or higher, verify JSON syntax in the config file, and restart your IDE. |
| **Invalid API key** | Verify your key is active at the [Syncfusion Account Page](https://syncfusion.com/account/api-key). |
| **Incorrect API key config** | For the file path: verify file location and content. For inline key: check the key is correctly updated. |
| **Wrong config file location** | VS Code: `.vscode/mcp.json` • Code Studio: `.codestudio/mcp.json` • Cursor: `.cursor/mcp.json` in the workspace root. |
| **Check IDE logs** | VS Code / Code Studio: Output panel → "MCP" • Cursor: Developer Console for MCP errors. |

## Privacy & Security

The Syncfusion<sup style="font-size:70%">&reg;</sup> MCP Servers are designed with privacy considerations:

* The tools process requests according to the user's query without storing any content or prompts.
* User prompts are not stored or used for other purposes.
* Prompts are not used to train Syncfusion models.
* The assistant provides context; the final output is produced by the selected AI model.

The MCP Server acts purely as a knowledge bridge, connecting your AI model with Syncfusion-specific expertise while respecting your privacy and maintaining security.

## See also

- [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro)