---
layout: post
title: SyncfusionDocumentSDKAssistant MCP Server Setup – Syncfusion
description: Explore the MCP server’s benefits, setup needs, and integration guidance for Syncfusion DocumentSDK.
platform: document-processing
control: AI coding assistant
documentation: ug
---

# SyncfusionDocumentSDKAssistant MCP Server


## Overview  

The <a href ="https://www.npmjs.com/package/@syncfusion/documentsdk-assistant">SyncfusionDocumentSDKAssistant</a> is a specialized [Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) server that provides intelligent assistance for developers using Syncfusion’s DocumentSDK libraries. This tool seamlessly integrates with compatible [MCP clients](https://modelcontextprotocol.io/clients) to enhance your development workflow when building .NET applications with Syncfusion<sup>&reg;</sup> Document Processing libraries, such as PDF, Word, Excel, and PowerPoint.

### Key Benefits

  * Intelligent code generation for Syncfusion<sup>&reg;</sup> DocumentSDK components.
  *	Detailed component documentation and usage examples.
  *	Troubleshooting assistance for common integration challenges.

## Prerequisites

Before using <a href="https://www.npmjs.com/package/@syncfusion/documentsdk-assistant">SyncfusionDocumentSDKAssistant</a>, ensure you have:

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

## API Key Configuration		

Login to your [Syncfusion account](http://syncfusion.com/account/) and generate an API Key from the [API Key page](https://www.syncfusion.com/account/api-key). Replace `YOUR_API_KEY_FILE_PATH` or `YOUR_API_KEY` in the configuration files with your generated key.
    
There are two options:
    
* **Using an API Key File (Recommended)**

  Store your API key in a separate file and reference its path in the `Syncfusion_API_Key_Path` environment parameter. This approach is more secure as you don't expose the key directly in configuration files.

  **Supported file formats:** `.txt` or `.key` file

~~~json
   "env": {
     "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH" // "D:\\syncfusion-key.txt" (or) "D:\\syncfusion-key.key"
    }
~~~
* **Direct API Key**

  Paste your `Syncfusion_API_Key` directly in the configuration file's environment parameter.

~~~json
   "env": {
     "Syncfusion_API_Key": "YOUR_API_KEY"
  }
~~~

<a href="https://www.npmjs.com/package/@syncfusion/documentsdk-assistant">SyncfusionDocumentSDKAssistant</a> can be configured in various MCP clients. Below are setup instructions for popular environments:

## Setting up in MCP Clients

Create a configuration file in your project folder to install the server for your workspace as shown below:

**Important:** Replace `YOUR_API_KEY_FILE_PATH` with the path to your API key file.

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

For global configuration, refer to this [guide](../../installation#global-configuration).

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

Syncfusion® MCP Servers provide full access to all AI interaction modes - Ask/Chat, Edit, and Agent - across supported MCP clients.

### Best Practices for Effective Usage

  1. ```Be specific```: Mention both platform and component (e.g., "How to digitally sign a PDF document using Syncfusion PDF library in .NET Core app?").
  2. ```Provide context:``` Include details about your use case for more targeted solutions.
  3. ```Use descriptive queries```: Avoid vague questions that lack necessary context.
  4. ```Start fresh for new topics```: Begin a new chat session when switching components or topics

### Example Queries

Here are some effective ways to use <a href ="https://www.npmjs.com/package/@syncfusion/documentsdk-assistant">SyncfusionDocumentSDKAssistant</a>:

  * "Create an Excel file with formulas, charts, and conditional formatting using Syncfusion in WPF." 
  * "How to perform a mail merge in a Word document using Syncfusion Word library?"
  * "Extract text and images from an existing PDF using Syncfusion."
  * "How do I convert a Word document to PDF using Syncfusion in Blazor app?"
  * "Using Syncfusion, how can I combine multiple PowerPoint presentations into one in a WinUI application?"

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

Product support is available through the following mediums.

  * [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours \| Unlimited tickets \| Holiday support
  *	[Community forum](https://www.syncfusion.com/forums/document-sdk)
  *	[Request feature or report bug](https://www.syncfusion.com/feedback/document-sdk)
  *	Live chat

## See also
  
  * [Syncfusion  DocumentSDK Documentation](https://help.syncfusion.com/document-processing/introduction)




