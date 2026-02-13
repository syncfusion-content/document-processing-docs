---
layout: post
title: SyncfusionPDFViewerSDKAssistant MCP Server Setup – Syncfusion
description: Explore the MCP server’s benefits, setup needs, and integration guidance for Syncfusion PDFViewerSDK.
platform: document-processing
control: AI coding assistant
documentation: ug
---

# SyncfusionPDFViewerSDKAssistant MCP Server

## Overview

The <a href ="https://www.npmjs.com/package/@syncfusion/pdfviewersdk-assistant">SyncfusionPDFViewerSDKAssistant</a> is a specialized [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that provides intelligent, context-aware coding assistance for Syncfusion **PDFViewerSDK** across all supported platforms are Windows Forms, WPF, JavaScript, Angular, React, Vue, ASP.NET MVC, ASP.NET Core, Blazor, MAUI and Flutter.
It integrates seamlessly with [MCP clients](https://modelcontextprotocol.io/clients) to provide intelligent assistance for building applications with Syncfusion<sup style="font-size:70%">&reg;</sup> components.

### Key Benefits

- Instant code generation & explanations for Syncfusion<sup style="font-size:70%">&reg;</sup> PDFViewerSDK component.
- Detailed component documentation and usage examples.
- Troubleshooting assistance for common integration challenges.

## Prerequisites

Before using <a href="https://www.npmjs.com/package/@syncfusion/pdfviewersdk-assistant">SyncfusionPDFViewerSDKAssistant</a>, ensure you have:

* Required [node](https://nodejs.org/en/) version >= 18
* A [compatible MCP client](https://modelcontextprotocol.io/clients) (VS Code with GitHub Copilot, [Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio](https://www.syncfusion.com/code-studio/), etc.)
* An active Syncfusion<sup style="font-size:70%">&reg;</sup> license (any of the following):
  - [Commercial License](https://www.syncfusion.com/sales/unlimitedlicense)
  - [Free Community License](https://www.syncfusion.com/products/communitylicense)
  - [Free Trial](https://www.syncfusion.com/account/manage-trials/start-trials)
* An active [API KEY](https://syncfusion.com/account/api-key)

## Unlimited Access

Syncfusion<sup style="font-size:70%">&reg;</sup> offers unlimited access to this MCP server. There are no restrictions on:

* Number of requests
* Components usage
* Query types
* Usage duration

This ensures users can fully leverage Syncfusion<sup style="font-size:70%">&reg;</sup> components to enhance their development experience without limitations.

## Installation and setup

Before you can invoke the ```SyncfusionPDFViewerSDKAssistant``` MCP server, you need to configure your MCP client with these core settings. The **Generic MCP Server Settings** shown below are identical across all clients:

### Generic MCP Server Settings

- **npm package name**: ```@syncfusion/pdfviewersdk-assistant```
- **Type**: stdio (standard input/output transport)
- **Command**: npx
- **Arguments**: -y
- **Server name**: syncfusionPDFViewerSDKAssistant

#### API Key Configuration		

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

[SyncfusionPDFViewerSDKAssistant](https://www.npmjs.com/package/@syncfusion/pdfviewersdk-assistant) can be configured in various MCP clients. Below are setup instructions for popular environment:

### Syncfusion<sup>&reg;</sup> Code Studio

  *	In [Code Studio](https://www.syncfusion.com/code-studio/), open MCP Marketplace
  ![Code Studio Marketplace](../../PDF/PDF-Viewer/blazor/images/code-studio-marketplace.png)
  * Go to the ```Custom Servers``` tab and click **Add MCP Servers**
  ![Custom Server Tab](../../PDF/PDF-Viewer/blazor/images/mcp-custom-server.png)
  * In the dialog that appears, select **Accept and Continue** to launch the runtime window for configuring the PDF Viewer SDK MCP.
  ![Run Time Window](../../PDF/PDF-Viewer/blazor/images/mcp-runtime-window.png)
  * Choose the NPM package installation mode. Enter the command **@syncfusion/pdfviewersdk-assistant** in the runtime window and press **Enter**
  ![NPM package](../../PDF/PDF-Viewer/blazor/images/mcp-npm-package.png)
  * When prompted, click allow in the opened options and select **Direct API key**. Enter the API key generated from the [Syncfusion API key](https://www.syncfusion.com/account/api-key), then press **Enter**.
  ![Syncfusion API key](../../PDF/PDF-Viewer/blazor/images/mcp-syncfusion-api-key.png)
  *	Provide server name such as ```syncfusion-pdfviewersdk-assistant```, then press **Enter**. The PDF Viewer SDK MCP server will get installed.
  *	Once installed, the server will appear in the User Installed Server list and will be added to the **config.yaml** file.
  ![PDF Viewer MCP server](../../PDF/PDF-Viewer/blazor/images/mcp-server-installed.png)
  *	The server is now ready for use in Code Studio. For more details, refer to the Code Studio [documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/mcp/customservers).

For additional details, see the Code Studio [documentation](https://help.syncfusion.com/code-studio/reference/configure-properties/mcp/customservers).

### VS Code (GitHub Copilot MCP)

* To configure an MCP server for a specific workspace, you can create a `.vscode/mcp.json` file in your workspace folder.

  ```json
  {
    "servers": {
      "syncfusion-pdfviewersdk-assistant": {
        "type": "stdio",
        "command": "npx",
        "args": [
          "-y",
          "@syncfusion/pdfviewersdk-assistant@latest"
        ],
        "env": {
        "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH",
          // or
        "Syncfusion_API_Key": "YOUR_API_KEY"
        }
      }
    }
  }
  ```

* After updating the configuration in mcp.json, you’ll notice a “Start” option at the top of the config. This allows you to easily start the <a href ="https://www.npmjs.com/package/@syncfusion/pdfviewersdk-assistant">SyncfusionPDFViewerSDKAssistant</a> server directly from the settings interface without additional commands.
![Start PDF Viewer AI Assistant](../../PDF/PDF-Viewer/blazor/images/mcp-start-pdfviewer.png)
* Confirm that [SyncfusionPDFViewerSDKAssistant](https://www.npmjs.com/package/@syncfusion/pdfviewersdk-assistant) is being used (this does not happen automatically). Look for a statement in the output, which is similar to:
    * ```SyncfusionPDFViewerSDKAssistant is running...``` (in VS Code)

* For more details, refer to the official <a href = "https://learn.microsoft.com/en-us/visualstudio/ide/mcp-servers?view=vs-2022"> Visual Studio documentation</a>.

### Cursor

To configure an MCP server for a specific workspace, you can create a .cursor/mcp.json file in your workspace folder.

```json
{
  "mcpServers": {
    "syncfusion-pdfviewersdk-assistant": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "@syncfusion/pdfviewersdk-assistant@latest"
      ],
      "env": {
      "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH",
      // or
      "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}
```
For more details, refer to the <a href = "https://docs.cursor.com/en/context/mcp#using-mcp-json">Cursor documentation</a>.

### JetBrains IDEs

* Go to Settings -> Tools -> AI Assistant -> Model Context Protocol (MCP).
* Click + Add to add a new MCP server configuration.
* In the New MCP Server dialog, switch the dropdown as `As JSON` and add the following config:

```json
{
  "mcpServers": {
    "syncfusion-pdfviewersdk-assistant": {
      "command": "npx",
      "args": [
        "-y",
        "@syncfusion/pdfviewersdk-assistant@latest"
      ],
      "env": {
      "Syncfusion_API_Key_Path": "YOUR_API_KEY_FILE_PATH",
      // or
      "Syncfusion_API_Key": "YOUR_API_KEY"
      }
    }
  }
}
```

* Click OK and Apply.

For further assistance, see the <a href ="https://www.jetbrains.com/help/ai-assistant/mcp.html#connect-to-an-mcp-server">JetBrains documentation</a>.

> For more detailed information about configuring MCP servers in various clients, refer to the official documentations, e.g., [Windsurf](https://docs.windsurf.com/windsurf/cascade/mcp#mcp-config-json)

## Usage

To activate the SyncfusionPDFViewerSDKAssistant MCP server:

1. Start your prompt with one of the following:
    * 'SyncfusionPDFViewerSDKAssistant'
    * '/syncfusion-pdfviewersdk-assistant'
    * '/syncfusion-pdfviewersdk'
    * '@syncfusion-pdfviewersdk'
    * '@ask_syncfusion_pdfviewersdk'

   In VS Code, you can also use #SyncfusionPDFViewerSDKAssistant to explicitly invoke the MCP server.

2. Grant the SyncfusionPDFViewerSDKAssistant MCP server a permission to run for this session, workspace, or always.
3. For best results, start a new chat for each new topic to maintain clean context.

### Mode availability

Syncfusion<sup style="font-size:70%">&reg;</sup> MCP Servers provide full access to all AI interaction modes — Ask/Chat, Edit, and Agent — across supported MCP clients.

### Best Practices for Effective Usage

1. ```Be specific```: Mention both platform and component (e.g., "How do I apply conditional formatting to highlight duplicate values in a React Syncfusion Spreadsheet?").
2. ```Provide context```: Include details about your use case for more targeted solutions.
3. ```Use descriptive queries```: Avoid vague questions that lack necessary context.
4. ```Start fresh for new topics```: Begin a new chat session when switching components or topics.

### Example Queries

Here are some effective ways to use [SyncfusionPDFViewerSDKAssistant](https://www.npmjs.com/package/@syncfusion/pdfviewersdk-assistant):

 * "Provide code for viewing PDF files using the PDF Viewer in a Blazor Web App."
 * "Show me a code snippet to load a PDF from Google Drive into Syncfusion PDF Viewer using React"
 * "How do I toggle the annotation toolbar using Angular PDF Viewer"
 * "Explain how to open the thumbnail panel programmatically in Syncfusion PDF Viewer using Vue."
 * "Provide code to restrict zoom levels between 150% and 300% in Javascript PDF Viewer."

## Troubleshooting

If you encounter issues:

 * Verify your API key is correctly configured.
 * Ensure the MCP server is enabled in your client's tools selection.
 * Check that you're using a compatible MCP client version.
 * Try restarting your development environment.

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/pdf-viewer-sdk)
* [Request feature or report bug](https://www.syncfusion.com/feedback/pdf-viewer-sdk)
* Live chat

## See also

 * [Syncfusion PDFViewerSDK Documentation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/overview)
