---
layout: post
title: ASP.NET Core Spreadsheet MCP Server Setup | Syncfusion®
description: Install and configure the Syncfusion® ASP.NET Core Spreadsheet MCP Server to access documentation, API guidance, code examples, and troubleshooting support.
control: Spreadsheet
platform: document-processing
documentation: ug
keywords: ASP.NET Core Agentic UI Builder, MCP Server, search docs, Spreadsheet SDK, Server Packages
---

# ASP.NET Core Spreadsheet MCP Server

The Syncfusion® ASP.NET Core MCP Server accelerates Spreadsheet application development by providing relevant documentation, API references, feature guidance, code examples, and troubleshooting information directly within an AI-powered IDE. The server uses the [Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) to connect an AI assistant with Syncfusion ASP.NET Core documentation.

Use the `search_docs` tool to obtain contextual guidance, code examples, and documentation for ASP.NET Core Spreadsheet applications.

> The previously available Agentic UI Builder (`#sf_aspnetcore_ui_builder`) has been upgraded to an Agent skill-based experience and is no longer part of the MCP Server. To learn more about the new Agentic UI Builder, see the [documentation](https://ej2.syncfusion.com/aspnetcore/documentation/mcp). The AI Coding Assistant (`#sf_aspnetcore_assistant`) has been renamed to `search_docs` (`#search_docs`) to ensure that the tool name follows MCP naming conventions.

## Key benefits

- **Spreadsheet-specific guidance**: Access relevant documentation for data binding, formulas, open and save operations, charts, conditional formatting, sorting, filtering, hyperlinks, scrolling, and other Spreadsheet features.
- **API assistance**: Find ASP.NET Core Spreadsheet properties, methods, and events with contextual usage guidance.
- **Troubleshooting support**: Search for guidance related to rendering, data loading, import and export, and performance issues.
- **IDE integration**: Use Syncfusion documentation from compatible MCP clients such as Visual Studio Code, Syncfusion Code Studio, Cursor, and JetBrains.
- **Privacy-focused operation**: The MCP Server processes requests based on the submitted query without storing prompts or application content.

## Prerequisites

Before configuring the ASP.NET Core MCP Server, ensure that you have:

- **.NET 10 SDK** (for automatic configuration) **or** .NET 8 / .NET 9 SDK (for manual configuration).
- A **compatible MCP client**, such as Visual Studio Code, Syncfusion Code Studio, Cursor, or JetBrains.
- An active [Syncfusion API key](https://www.syncfusion.com/account/api-key).
- An **ASP.NET Core application** (existing or new); see [Quick Start](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/razor-pages)
- An active Syncfusion<sup style="font-size:70%">&reg;</sup> license, such as one of the following:
  - [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)
  - [Free Community License](https://www.syncfusion.com/products/communitylicense)
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)

## Obtain a Syncfusion API key

Generate the Syncfusion® API key from the [API Key page](https://www.syncfusion.com/account/api-key) and store it in a .txt or .key file. The saved file will be referenced in the MCP configuration:

```json
"env": {
  "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
}
```

Alternatively, provide the API key directly:

```json
"env": {
  "Syncfusion_API_Key": "YOUR_SYNCFUSION_API_KEY"
}
```

> Using `Syncfusion_API_Key_Path` is recommended because it helps keep the API key out of source control. Do not commit an API key or key file to a repository.

## Configure the ASP.NET Core MCP Server

Create the MCP configuration file in the root folder of the ASP.NET Core Spreadsheet application. Use the configuration that corresponds to your MCP client and installed .NET SDK version.

### .NET 10 SDK

If you have the .NET 10 SDK installed, you can directly add the following configuration to the `mcp.json` file.

{% tabs %}
{% highlight bash tabtitle="VS Code" %}

// Create a `.vscode/mcp.json` file in your workspace:

{
  "servers": {
    "sf-aspnetcore-mcp": {
      "type": "stdio",
      "command": "dnx",
      "args": ["Syncfusion.AspNetCore.MCP", "--yes"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

{% endhighlight  %}
{% highlight bash tabtitle="Code Studio" %}

// Create a `.codestudio/mcp.json` file in your workspace:

{
  "servers": {
    "sf-aspnetcore-mcp": {
      "type": "stdio",
      "command": "dnx",
      "args": ["Syncfusion.AspNetCore.MCP", "--yes"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

// After creating the file, click Start in the inline action to install the server.

{% endhighlight  %}
{% highlight bash tabtitle="Cursor" %}

// Create a `.cursor/mcp.json` file in your workspace:

{
  "mcpServers": {
    "sf-aspnetcore-mcp": {
      "command": "dnx",
      "args": ["Syncfusion.AspNetCore.MCP", "--yes"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

{% endhighlight  %}
{% highlight bash tabtitle="JetBrains" %}

// Open AI Assistant chat, type /, and select Add Command.
// Click ➕ Add on the MCP settings page.
// Choose STDIO and select JSON configuration:

{
  "mcpServers": {
    "sf-aspnetcore-mcp": {
      "command": "dnx",
      "args": [
        "Syncfusion.AspNetCore.MCP", "--yes"
      ],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}

// Click OK, then click Apply. The server starts and shows Connected status.

{% endhighlight  %}
{% endtabs %}

### .NET 8 or .NET 9 SDK (manual)

If you are using only .NET 8 or .NET 9, install the Syncfusion ASP.NET Core MCP Server as a local tool from your workspace directory:

```bash
dotnet tool install Syncfusion.AspNetCore.MCP --add-source "https://nexus.syncfusioninternal.com/repository/nuget-hosted/"
```

This installs the Syncfusion ASP.NET Core MCP Server locally within your workspace. Then add the following configuration to the `mcp.json` file:

```json
{
  "servers": {
    "sf-aspnetcore-mcp": {
      "type": "stdio",
      "command": "dotnet",
      "args": [
        "tool",
        "run",
        "syncfusion-aspnetcore-mcp"
      ],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}
```

**Verifying Installation** Check your editor's MCP Server list for `sf-aspnetcore-mcp` with a **Connected** status to confirm a successful installation.

## Common use cases

The examples below demonstrate common ASP.NET Core Spreadsheet scenarios and how the MCP tools can provide relevant guidance, code examples, API references, and troubleshooting assistance. Tools can be invoked directly for specific tasks, or an AI assistant can automatically choose the most appropriate tool based on the request.

**Get Started**

Use `search_docs` to get contextual guidance, code snippets, and configuration examples for ASP.NET Core Spreadsheet applications.

{% promptcards %}
{% promptcard Spreadsheet Setup %}
#search_docs How do I configure the ASP.NET Core Spreadsheet component?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard JSON Data Binding %}
#search_docs How can I bind JSON data to an ASP.NET Core Spreadsheet?
{% endpromptcard %}
{% endpromptcards %}

**Implement Features**

Get step-by-step help for adding specific features to Spreadsheet applications that are already in the project.

{% promptcards %}
{% promptcard Open and Save Excel Files %}
#search_docs How do I open and save Excel files programmatically in an ASP.NET Core Spreadsheet?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Spreadsheet Charts %}
#search_docs How do I create a chart from Spreadsheet data in ASP.NET Core?
{% endpromptcard %}
{% endpromptcards %}

**Troubleshooting**

Describe the problem in plain language, and let `search_docs` help resolve it.

{% promptcards %}
{% promptcard Performance Issues %}
#search_docs Why is my ASP.NET Core Spreadsheet slow when opening large datasets?
{% endpromptcard %}
{% endpromptcards %}

## Best practices

To get the most out of the Syncfusion<sup>®</sup> Spreadsheet MCP Server:

- **Be Specific** - Include the platform and Spreadsheet feature in your queries (for example, _"Can you show me how to render a Spreadsheet with default data in an ASP.NET Core application?"_).
- **Provide Context** - Include applicable versions, expected outcomes, and any requirements or limitations that may affect the request.
- **Use Descriptive Queries** - Avoid overly brief or ambiguous requests. Providing sufficient detail helps improve the accuracy and relevance of the response.
- **Stay Consistent** - Keep file organization, naming conventions, and coding standards consistent throughout your project.
- **Start Fresh for New Topics** - Begin a new chat when switching to a different task to maintain clean context.
- **Use Advanced AI Models** - For the best results, use advanced AI models such as the latest-generation **Claude**, **GPT**, or **Gemini** models.
- **For Troubleshooting** - Use AI suggestions for common issues; consult the [official documentation](https://help.syncfusion.com/document-processing/excel/spreadsheet/asp-net-core/getting-started-core) or [support](https://support.syncfusion.com/support/tickets/create) for complex problems.
- **Minimize Active Tools** - Limit the number of active MCP tools in your IDE to prevent tool-selection ambiguity and improve response accuracy.

> Always review AI-generated code before using it in production.

## Troubleshooting

The table below lists frequently encountered issues and suggested resolutions to help diagnose and address common setup or usage challenges.

| Issue | Solution |
| --- | --- |
| Server failed to start | Verify the .NET SDK version and JSON syntax in the config file, then restart your IDE. |
| Invalid API key | Verify your key is active at the [Syncfusion Account Page](https://syncfusion.com/account/api-key). |
| Incorrect API key config | Verify the file location and content for a file path. For an inline key, check that the key is correctly updated. |
| Wrong config file location | VS Code: `.vscode/mcp.json`<br/>Code Studio: `.codestudio/mcp.json`<br/>Cursor: `.cursor/mcp.json` in the workspace root. |
| Manual install (.NET 8/9) | Ensure `dotnet tool install` succeeded and that `mcp.json` references the local tool via `dotnet tool run syncfusion-aspnetcore-mcp`. |
| Check IDE logs | VS Code / Code Studio: Output panel → "MCP"<br/>Cursor: Developer Console for MCP errors. |

## Privacy and security

The Syncfusion MCP Server acts as a knowledge bridge between the selected AI model and Syncfusion documentation.

- The tools process requests according to the user's query without storing any content or prompts.
- User prompts are not stored or used for other purposes.
- Prompts are not used to train Syncfusion models.
- The assistant provides context; the final output is produced by the selected AI model.

The MCP Server acts purely as a knowledge bridge, connecting your AI model with Syncfusion-specific expertise while respecting your privacy and maintaining security.
