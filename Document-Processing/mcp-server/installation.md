---
layout: post
title: Installation | MCP Server | Syncfusion
description: Learn how to install and configure the Syncfusion Document Processing MCP Server for AI-powered document automation and processing.
platform: document-processing
control: MCP Server
documentation: ug
---

# Installing Syncfusion Document Processing MCP Server

Syncfusion<sup>&reg;</sup> Document Processing MCP Server provides AI-powered assistance for building document processing solutions. This guide will help you install and configure the MCP server in your development environment.

- **AI Document Assistant** - Provides contextual document processing APIs, code snippets, and configuration examples to accelerate development and reduce documentation lookups.

## Prerequisites

Before you begin, ensure you have:

- Required [Node.js](https://nodejs.org/en/) version >= 18
- A compatible MCP client (VS Code, Syncfusion® Code Studio, Cursor, etc.)
- Active [Syncfusion® API key](https://syncfusion.com/account/api-key)
- Active Syncfusion® license (any of the following):
  - [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)
  - [Free Community License](https://www.syncfusion.com/products/communitylicense)
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)

### Getting your API Key

Obtain your Syncfusion API key before proceeding:

1. Log in to your [Syncfusion account](https://www.syncfusion.com/account/)
2. Navigate to the [API Key page](https://www.syncfusion.com/account/api-key)
3. Generate your API key
4. Keep this key ready for configuration

**Configuration Options:**

**Option 1: API Key File (Recommended)**

Store your API key in a separate file and reference its path in the `Syncfusion_API_Key_Path` environment parameter. This approach enhances security by keeping the key separate from configuration files.

Supported formats: `.txt` or `.key`

```json
"env": {
  "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH" // "D:\\syncfusion-key.txt" or "D:\\syncfusion-key.key"
}
```

**Option 2: Direct API Key**

Set the key directly in the MCP configuration:

```json
"env": {
  "Syncfusion_API_Key": "YOUR_API_KEY"
}
```

> **Note:** If both the key file and the environment variable are provided, the file path specified in `Syncfusion_API_Key_Path` takes priority.

## Generic MCP Server Settings

All MCP clients require these standard settings for the Syncfusion Document Processing MCP Server:

- npm package name: `@syncfusion/documentsdk-assistant`
- Type: `stdio` (standard input/output transport)
- Command: `npx`
- Arguments: `-y`
- Server name: `syncfusionDocumentSDKAssistant`

## Setting up in MCP Clients

Syncfusion Document Processing MCP Server can be configured at two levels:

- **Global-level** - Server is available across all projects in your IDE
- **Workspace-level** - Server is available only for a specific project or workspace

The following sections provide detailed setup instructions for popular development environments.

### Global Configuration

Configure the Syncfusion Document Processing MCP Server globally to make it available across all workspaces in your IDE.

**VS Code**

1. Click [here](https://insiders.vscode.dev/redirect/mcp/install?name=syncfusionDocumentSDKAssistant&config=%7B%22type%22%3A%22stdio%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40syncfusion%2Ftypescript-assistant%40latest%22%5D%2C%22env%22%3A%7B%22Syncfusion_API_Key%22%3A%22YOUR_API_KEY%22%7D%7D) to open the installation link.
2. Replace `YOUR_API_KEY` with your actual Syncfusion API key.
3. Follow the prompts to complete the installation.

For more information, see the [VS Code MCP documentation](https://code.visualstudio.com/docs/copilot/customization/mcp-servers).

**Cursor**

1. Click [here](https://cursor.com/en-US/install-mcp?name=syncfusionDocumentSDKAssistant&config=eyJ0eXBlIjoic3RkaW8iLCJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIkBzeW5jZnVzaW9uL3R5cGVzY3JpcHQtYXNzaXN0YW50QGxhdGVzdCJdLCJlbnYiOnsiU3luY2Z1c2lvbl9BUElfS2V5IjoiWU9VUl9BUElfS0VZIn19) to open the installation link.
2. Update the `YOUR_API_KEY_FILE_PATH` with the path to your API key file.
3. Follow the prompts to complete the installation.

For more information, see the [Cursor MCP documentation](https://cursor.com/docs/context/mcp).

**Code Studio**

1. Open the [MCP Marketplace](https://www.syncfusion.com/code-studio/) in Code Studio.
2. Search for `Syncfusion Document SDK Assistant` and click Install.
3. Enter your [Syncfusion API key](https://syncfusion.com/account/api-key) when prompted.
4. The server installs and appears in the Installed list.

For more information, see the [Code Studio MCP documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/mcp/marketplace).

### Workspace Configuration

Install the server for a specific project by creating a configuration file in your project folder.

**Important:** Replace `YOUR_API_KEY_FILE_PATH` or `YOUR_API_KEY` with your actual API key.

{% tabs %}

{% highlight json tabtitle="VS Code" %}
// Create a `.vscode/mcp.json` file in your workspace with the MCP server configuration:

{
  "servers": {
   "syncfusion-documentsdk-assistant": {   
    "type": "stdio",
    "command": "npx",
    "args": [
     "-y",
     "@syncfusion/documentsdk-assistant@latest" 
    ],
    "env": {
     "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH",
      // or
     "Syncfusion_API_Key": "YOUR_API_KEY"
     }
    }
   }
  }
{% endhighlight %}

{% highlight json tabtitle="Syncfusion Code Studio" %}
// Create a `.codestudio/mcp.json` file in your workspace with the MCP server configuration:

{
  "servers": {
   "syncfusion-documentsdk-assistant": {   
    "type": "stdio",
    "command": "npx",
    "args": [
     "-y",
     "@syncfusion/documentsdk-assistant@latest" 
    ],
    "env": {
     "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH",
      // or
     "Syncfusion_API_Key": "YOUR_API_KEY"
     }
    }
   }
  }
{% endhighlight %}

{% highlight json tabtitle="Cursor" %}
// Create a `.cursor/mcp.json` file in your workspace with the MCP server configuration:

{
   "mcpServers": {
    "syncfusion-documentsdk-assistant": {
     "type": "stdio",
     "command": "npx",
     "args": [
     "-y",
        "@syncfusion/documentsdk-assistant@latest"
      ],
      "env": {
      "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH",
      // or
      "Syncfusion_API_Key": "YOUR_API_KEY"
     }
    }
   }
  }
{% endhighlight %}

{% highlight json tabtitle="JetBrains IDEs" %}
// Go to Settings -> Tools -> AI Assistant -> Model Context Protocol (MCP).
// Click + Add to add a new MCP server configuration.
// In the New MCP Server dialog, switch the dropdown as `As JSON` and add the following config:

{
   "mcpServers": {
    "syncfusion-documentsdk-assistant": {
     "command": "npx",
     "args": [
      "-y",
      "@syncfusion/documentsdk-assistant@latest"
     ],
     "env": {
     "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH",
     // or
     "Syncfusion_API_Key": "YOUR_API_KEY"
     }
    }
   }
  }
{% endhighlight %}

{% endtabs %}

**Verify Installation:** Check your editor's MCP Server list for `syncfusion-documentsdk-assistant` with "Connected" status to confirm successful installation.

```json
// Create a `.vscode/mcp.json` file in your workspace with the MCP server configuration:

{
  "servers": {
    "sf-document-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@syncfusion/document-processing-assistant@latest"],
      "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH"
        // or
        // "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}
```

**Verify Installation:** Check your editor's MCP Server list for `sf-document-mcp` with "Connected" status to confirm successful installation.

## What's Next

With the MCP server installed, explore the getting started guide for your chosen configuration:

- [AI Coding Assistant - Getting Started](https://help.syncfusion.com/document-processing/mcp-server/ai-coding-assistant/getting-started/documentsdk)

## Troubleshooting

If you encounter issues during installation or while using the MCP server, refer to the solutions below:

| Issue | Solution |
|-------|----------|
| Clear npm cache | Run `npx clear-npx-cache` and restart your IDE to resolve package caching issues |
| Server failed to start | Update to Node.js 18+, verify JSON syntax in config file, and restart your IDE |
| Invalid API key | Verify your key is active at [Syncfusion Account Page](https://syncfusion.com/account/api-key) |
| Incorrect API key config | For the file path: Verify file location and content. For inline key: Check key is properly updated |
| Wrong config file location | VS Code: `.vscode/mcp.json` <br/> Code Studio: `.codestudio/mcp.json` <br/> Cursor: `.cursor/mcp.json` <br/> JetBrains: Settings → Tools → AI Assistant → MCP in the workspace root |
| Check IDE logs | VS Code/Code Studio: Output panel → "MCP" • Cursor: Developer Console for MCP errors • JetBrains: IDE logs |

## Support

Product support is available through the following media.

- [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed response in 24 hours | Unlimited tickets | Holiday support
- [Community forum](https://www.syncfusion.com/forums/document-sdk)
- [Request feature or report bug](https://www.syncfusion.com/feedback/document-sdk)
- [Live chat](https://www.syncfusion.com/support)

## See also

- [MCP Server Overview](https://help.syncfusion.com/document-processing/mcp-server/overview)
- [AI Document Assistant - Getting Started](https://help.syncfusion.com/document-processing/mcp-server/ai-coding-assistant/getting-started/documentsdk)
