---
layout: post
title: SyncfusionDocumentSDKAssistant MCP Server Overview and Setup – Syncfusion
description: Explore the SyncfusionDocumentSDKAssistant MCP server, its key benefits, prerequisites, and integration guidance for enhancing Syncfusion DocumentSDK development workflows.
platform: document-processing
control: AI coding assistant
documentation: ug
---

# SyncfusionDocumentSDKAssistant MCP Server


## Overview  

The SyncfusionDocumentSDKAssistant a specialized [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) server that provides intelligent assistance for developers using Syncfusion’s DocumentSDK libraries. This tool seamlessly integrates with compatible [MCP clients](https://modelcontextprotocol.io/clients) to enhance your development workflow when building .NET applications with Syncfusion<sup>&reg;</sup> Document Processing libraries, such as PDF, Word, Excel, and PowerPoint.

### Key Benefits

  * Intelligent code generation for Syncfusion<sup>&reg;</sup> DocumentSDK components.
  *	Detailed component documentation and usage examples.
  *	Troubleshooting assistance for common integration challenges.

## Prerequisites

Before using SyncfusionDocumentSDKAssistant[SyncfusionDocumentSDKAssistant](https://help.syncfusion.com/document-processing/ai-coding-assistants/mcp-server), ensure you have:

  * Required [node](https://nodejs.org/en/) version >= 18
  *	A [compatible MCP client](https://modelcontextprotocol.io/clients) (VS Code with GitHub Copilot, [Syncfusion<sup>&reg;</sup> CodeStudio](https://www.syncfusion.com/code-studio/), etc.)
  *	An active Syncfusion<sup>&reg;</sup> license (any of the following):
     * [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)
	 * [Free Community License](https://www.syncfusion.com/products/communitylicense)
     * [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)
  *	An active [API KEY](https://syncfusion.com/account/api-key)

## Unlimited Access

Syncfusion<sup>&reg;</sup> offers unlimited access to this MCP server. There are no restrictions on:

  * Number of requests
  *	Components usage
  *	Query types
  *	Usage duration

This ensures users can fully leverage Syncfusion<sup>&reg;</sup> components to enhance their development experience without limitations.

## Installation and setup

Before you can invoke the ```SyncfusionDocumentSDKAssistant``` MCP server, you need to configure your MCP client with these core settings. The **Generic MCP Server Settings** shown below are identical across all clients:

### Generic MCP Server Settings

  *	**npm package name**: ```@syncfusion/documentsdk-assistant```
  *	**Type**: stdio (standard input/output transport)
  *	**Command**: npx
  *	**Arguments**: -y
  *	**Server name**: syncfusionDocumentSDKAssistant

You need to add your [Syncfusion API key](https://syncfusion.com/account/api-key) as an env parameter in the configuration file:

~~~
  "env": {
    "Syncfusion_API_Key": "YOUR_API_KEY"
  }
~~~

[SyncfusionDocumentSDKAssistant](https://help.syncfusion.com/document-processing/ai-coding-assistants/mcp-server) can be configured in various MCP clients. Below are setup instructions for popular environment:

### Syncfusion<sup>&reg;</sup> Code Studio

  *	In [Code Studio](https://www.syncfusion.com/code-studio/), open MCP Marketplace and navigate to the ```Custom Servers``` tab.
  *	Enter the Server Name as ```documentsdk-mcp```, choose Server Type as npm package, and set the NPM Package name to ```@syncfusion/documentsdk-assistant```.
  *	Add an environment variable as ```Syncfusion_API_Key``` and value as your [Syncfusion API key](https://syncfusion.com/account/api-key), then click **Install Server**.
  *	Once installed, the server will appear in the User Installed Server list and will be added to the **config.yaml** file.
  *	The server is now ready for use in Code Studio. For more details, refer to the Code Studio [documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/mcp/customservers).

For additional details, see the Code Studio [documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/mcp/customservers).

### VS Code (GitHub Copilot MCP)
  1. To configure an MCP server for a specific workspace, you can create a ```.vscode/mcp.json``` file in your workspace folder.

~~~json
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
     "Syncfusion_API_Key": "YOUR_API_KEY"
     }
    }
   }
  }
~~~ 

  2. After updating the configuration in settings.json, you’ll notice a “Start” option at the top of the config. This allows you to easily start the [SyncfusionDocumentSDKAssistant](https://help.syncfusion.com/document-processing/ai-coding-assistants/mcp-server) server directly from the settings interface without additional commands.

  3. Confirm that [SyncfusionDocumentSDKAssistant](https://help.syncfusion.com/document-processing/ai-coding-assistants/mcp-server) is being used (this does not happen automatically). Look for a statement in the output, which is similar to:

      * ```SyncfusionDocumentSDKAssistant is running...``` (in VS Code)

### Cursor

To configure an MCP server for a specific workspace, you can create a .cursor/mcp.json file in your workspace folder.

~~~json 
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
      "Syncfusion_API_Key": "YOUR_API_KEY"
     }
    }
   }
  }
~~~ 

### JetBrains IDEs

  1. Go to Settings -> Tools -> AI Assistant -> Model Context Protocol (MCP).
  2. Click + Add to add a new MCP server configuration.
  3. In the New MCP Server dialog, switch the dropdown as ```As JSON``` and add the following config:

~~~json
  {
   "mcpServers": {
    "syncfusion-documentsdk-assistant": {
     "command": "npx",
     "args": [
      "-y",
      "@syncfusion/documentsdk-assistant@latest"
     ],
     "env": {
     "Syncfusion_API_Key": "YOUR_API_KEY"
     }
    }
   }
  }
~~~

  4. Click OK and Apply.

>  For more detailed information about configuring MCP servers in various clients, refer to the official documentations. 
>
> - [VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
> - [Cursor](https://docs.cursor.com/en/context/mcp)
> - [JetBrains](https://www.jetbrains.com/help/ai-assistant/mcp.html)
> - [Windsurf](https://docs.windsurf.com/windsurf/cascade/mcp)

## Usage

To activate the SyncfusionDocumentSDKAssistant MCP server:

  1. Start your prompt with one of the following:
      * ‘SyncfusionDocumentSDKAssistant’
      * ‘/syncfusion-document-assistant’
      *	‘/syncfusion-documentsdk’
      *	‘@syncfusion-documentsdk’
      *	‘@ask_syncfusion_documentsdk’
     In VS Code, you can also use #SyncfusionDocumentSDKAssistant to explicitly invoke the MCP server.
  2. Grant the SyncfusionDocumentSDKAssistant MCP server a permission to run for this session, workspace, or always.
  3. For best results, start a new chat for each new topic to maintain clean context.

### Mode availability

Syncfusion® MCP Servers provide full access to all AI interaction modes — Ask/Chat, Edit, and Agent — across supported MCP clients.

### Best Practices for Effective Usage

  1. ```Be specific```: Mention both platform and component (e.g., "How to digitally sign a PDF document using Syncfusion PDF library in .NET Core app?").
  2. ```Provide context:``` Include details about your use case for more targeted solutions.
  3. ```Use descriptive queries```: Avoid vague questions that lack necessary context.
  4. ```Start fresh for new topics```: Begin a new chat session when switching components or topics

### Example Queries

Here are some effective ways to use SyncfusionDocumentSDKAssistant:

  * "Create an Excel file with formulas, charts, and conditional formatting using Syncfusion in WPF." 
  * "How to perform a mail merge in a Word document using Syncfusion Word library?"
  * "Extract text and images from an existing PDF using Syncfusion."
  * "How do I convert a Word document to PDF using Syncfusion in Blazor app?"
  * "Using Syncfusion, how can I combine multiple PowerPoint presentations into one in a WinUI application?"

## Troubleshooting

If you encounter issues:

  *	Verify your API key is correctly configured.
  *	Ensure the MCP server is enabled in your client’s tools selection.
  *	Check that you’re using a compatible MCP client version.
  *	Try restarting your development environment.

## Support

Product support is available through the following mediums.

  *	[Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
  *	[Community forum](https://www.syncfusion.com/forums/document-sdk)
  *	[Request feature or report bug](https://www.syncfusion.com/feedback/document-sdk)
  *	Live chat

## See also
  
  * [Syncfusion  DocumentSDK Documentation](https://help.syncfusion.com/document-processing/introduction)








