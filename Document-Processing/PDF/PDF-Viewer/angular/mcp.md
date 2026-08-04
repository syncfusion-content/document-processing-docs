---
title: Syncfusion Angular PDF Viewer MCP Server Setup | Syncfusion
description: Discover the MCP server's advantages, installation requirements, and integration guidance for Angular PDF Viewer.
platform: document-processing
control: PDF Viewer
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion Angular PDF Viewer MCP Server

Syncfusion<sup style="font-size:70%">&reg;</sup> Angular PDF Viewer MCP Server accelerates Angular PDF Viewer application development by providing deep knowledge directly in your AI-powered IDE. [Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) (MCP) integration enables quick access to documentation, API references, and code-generation features from within the development environment.

These tools speed up development and reinforce best practices for Angular PDF Viewer integration.
> The previously available **Agentic UI Builder** (`#sf_angular_ui_builder`) has been upgraded to an **Agent skill-based experience** and is no longer part of the MCP Server. To learn more about the new **Agentic UI Builder**, see the [documentation](./ui-builder-skill). The **AI Coding Assistant** (#sf_angular_assistant) has been **renamed** to **search_docs** (`#search_docs`) to ensure the tool name follows MCP naming conventions.

## Key Benefits

- **Expert PDF Viewer Knowledge** - Deep understanding of the Angular PDF Viewer component and its implementation patterns.
- **Unlimited Usage** - No request limits, time restrictions, or query caps.
- **Privacy-Focused** - The tools operate based on the user's query and do not store any content, data, or prompts.

## Installation

### Prerequisites

Before beginning, ensure the following prerequisites are met:

- [Node.js 18+](https://nodejs.org/en/download) with **npm** or **yarn**
- A **compatible MCP client** (VS Code, Syncfusion<sup style="font-size:70%">&reg;</sup> Code Studio, Cursor, JetBrains, etc.)
- An active [Syncfusion<sup style="font-size:70%">&reg;</sup> API key](https://syncfusion.com/account/api-key)
- An **Angular application** (existing or new); see [Angular PDF Viewer documentation](./getting-started)
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

Create a configuration file in your project folder to install the server for your workspace. **Replace `YOUR_API_KEY_FILE_PATH` with the path to your API key file.**

{% tabs %}
{% highlight bash tabtitle="VS Code" %}

// Create a `.vscode/mcp.json` file in your workspace:

{
  "servers": {
    "sf-angular-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@syncfusion/angular-mcp@latest"],
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
    "sf-angular-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@syncfusion/angular-mcp@latest"],
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
    "sf-angular-mcp": {
      "command": "npx",
      "args": ["-y", "@syncfusion/angular-mcp@latest"],
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
    "sf-angular-mcp": {
      "command": "npx.cmd",
      "args": [
        "-y",
        "@syncfusion/angular-mcp@latest"
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

{% endhighlight %}
{% endtabs %}

**Verifying Installation** Check your editor's MCP Server list for `sf-angular-mcp` with a **Connected** status to confirm a successful installation.

## Common use cases

The examples below showcase how the `search_docs` tool handles real-world Angular PDF Viewer development scenarios. The tool can be invoked directly, as shown in the examples below, for specific needs. Alternatively, an AI assistant can automatically invoke it based on the request.

**Get Started**

Use `search_docs` to get contextual guidance, code snippets, and configuration examples for the Angular PDF Viewer component.

{% promptcards %}
{% promptcard Standalone Component Configuration %}
#search_docs How do I configure the Syncfusion Angular Standalone PDF Viewer Component?
{% endpromptcard %}
{% endpromptcards %}

**Implement Features**

Get step-by-step help for adding specific features to the Angular PDF Viewer.

{% promptcards %}
{% promptcard Form Designer %}
#search_docs How can I enable Form Designer in Angular PDF Viewer?
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Fit to Viewport %}
#search_docs Provide API for Fit the entire page to the viewport in Angular PDF viewer
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Programmatic Printing %}
#search_docs how to programmatically trigger printing in the Angular PDF Viewer?
{% endpromptcard %}
{% endpromptcards %}

**Configuration & Troubleshooting**

Get help configuring network behavior and resolving loading issues in the Angular PDF Viewer.

{% promptcards %}
{% promptcard Retry Timeout %}
#search_docs How to Configure Retry Timeout for Angular PDF Viewer Requests.
{% endpromptcard %}
{% endpromptcards %}

{% promptcards %}
{% promptcard Document Loading Issue %}
#search_docs Document not Loading Newer version in Angular PDF Viewer.
{% endpromptcard %}
{% endpromptcards %}

## Best Practices

To get the most out of the Syncfusion<sup style="font-size:70%">&reg;</sup> Angular PDF Viewer MCP Server:

- **Be Specific** - Include the component and use case in your queries (for example, *"Load a PDF from a remote URL into the Angular PDF Viewer and enable annotation export"*).
- **Provide Context** - Include applicable versions, expected outcomes, and any requirements or limitations that may affect the request.
- **Use Descriptive Queries** - Avoid overly brief or ambiguous requests. Providing sufficient detail helps improve the accuracy and relevance of the response.
- **Stay Consistent** - Keep file organization, naming conventions, and coding standards consistent throughout your Angular project.
- **Start Fresh for New Topics** - Begin a new chat when switching to a different feature or task to maintain clean context.
- **Use Advanced AI Models** - For the best results, use advanced AI models such as the latest-generation **Claude**, **GPT**, or **Gemini** models.
- **For Troubleshooting** - Use AI suggestions for common issues; consult the [official documentation](./getting-started) or [support](https://support.syncfusion.com/support/tickets/create) for complex problems.
- **Minimize Active Tools** - Limit the number of active MCP tools in your IDE to prevent tool-selection ambiguity and improve response accuracy.

> Always review AI-generated code before using it in production.

## Troubleshooting

The table below lists frequently encountered issues and suggested resolutions to help diagnose and address common setup or usage challenges.

| Issue | Solution |
|-------|----------|
| **Server failed to start** | Verify Node.js 18+ is installed, check JSON syntax in the config file, and restart your IDE. |
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

- [Model Context Protocol](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro)
