---
layout: post
title: WebMCP tool integration for JavaScript (ES5) controls | Syncfusion
description: Learn how to integrate WebMCP with Syncfusion JavaScript (ES5) controls to enable AI interaction, configure tools, manage access, and monitor execution.
control: WebMCP
platform: ej2-javascript
documentation: ug
domainurl: ##DomainURL##
---
 
# WebMCP Tools Integration for Syncfusion® JavaScript (ES5) Controls
 
WebMCP enables AI agents to discover and interact with Syncfusion® JavaScript (ES5) controls through a standardized tool interface. By enabling WebMCP, AI-powered applications can securely discover control capabilities, read data, perform actions, and automate workflows through a standardized interface.

This section demonstrates how to integrate WebMCP with the Syncfusion® JavaScript (ES5) Spreadsheet control. The same approach can be used with other supported controls such as Grid, Scheduler, Chart, and more.
 
## WebMCP Overview
 
WebMCP allows AI assistants running in the browser to interact directly with Syncfusion® controls through natural language prompts.
 
Instead of relying on DOM inspection or simulating user interactions, AI assistants can interact directly with control APIs through WebMCP tools. This approach provides more reliable and accurate results.
 
Once connected, an AI assistant can perform tasks such as:
 
- Sort or filter Grid data.
- Update Spreadsheet cells.
- Create Scheduler events.
- Perform control-specific actions through natural language prompts.
 
> WebMCP is currently an experimental browser capability and requires a Chromium-based browser with WebMCP support enabled. Availability and required browser flags may change as the specification evolves.
 
## Prerequisites
 
- Syncfusion® JavaScript (ES5) controls
- Chromium-based Browser (like Chrome, Edge, or Brave)
- [Node.js 24+](https://nodejs.org/en) (LTS recommended).
- WebMCP browser extension installed
- AI API key configured in the extension
 
## WebMCP setup
 
Before you can use WebMCP locally, enable the feature flag and install the browser extension:
 
1. Enable `WebMCP for testing` flag via `chrome://flags/`. Click **"Relaunch"** to restart Chrome.
 
2. Search for **"WebMCP - Model Context Tool Inspector"** in [Chrome Web Store](https://chromewebstore.google.com/detail/webmcp-model-context-tool/gbpdfapgefenggkahomfgkhfehlcenpd). Click **"Add to Chrome"**.
 
3. Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create or copy an API key. Open the WebMCP extension → paste your API key.
 
The WebMCP extension is now configured and ready to interact with WebMCP-enabled Syncfusion® controls.

## Integrating WebMCP tools

Follow these steps to integrate WebMCP support into Syncfusion® JavaScript (ES5) controls. The following example uses the Spreadsheet control.

### Step 1: Create an application

Create an application and integrate the Syncfusion® JavaScript (ES5) Spreadsheet control by following the [Getting Started with JavaScript (ES5) Spreadsheet](https://help.syncfusion.com/document-processing/excel/spreadsheet/javascript-es5/getting-started) guide. After completing the setup, follow the steps below to enable WebMCP integration.

### Step 2: Enable WebMCP support

Import the WebMCP module and inject it into the control to make WebMCP functionality available.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>

<body>
    <div>
        <div id="spreadsheet"></div>
    </div>
<script>
ej.spreadsheet.Spreadsheet.Inject(ej.spreadsheet.WebMcpSpreadsheet);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
});

spreadsheet.appendTo('#spreadsheet');
</script>
</body>
</html>
```

### Step 3: Register control tools

Set the `enableWebMcp` property to `true` to register the control's available tools with the WebMCP runtime.

When `enableWebMcp` is enabled, supported control tools are automatically registered with the WebMCP runtime and become discoverable by authorized WebMCP clients.

For example, a Spreadsheet control may expose tools such as:

- getCellData
- editCell
- addSheet

An AI assistant can discover these tools and invoke them based on user prompts.

```html
<script>
ej.spreadsheet.Spreadsheet.Inject(ej.spreadsheet.WebMcpSpreadsheet);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: {
        name: 'sales',
        tools: ['getCellData', 'editCell', 'addSheet'],
        exposeTo: ['https://www.syncfusion.com/']
    },
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
});

spreadsheet.appendTo('#spreadsheet');
</script>
```

### Step 4: Customize tool registration

Use the `webMcpSettings` property to customize how WebMCP tools are exposed to AI agents. The available settings are listed below.

| Property | Description |
|-----------|-------------|
| `name` | Prefix applied to registered tool names. If name: `sales` is specified, a tool such as `getCellData` may be registered as `sales_getCellData`, allowing multiple control instances to coexist without tool name conflicts. |
| `tools` | List of tool names to expose. Any supported tools not included in this list will not be registered. |
| `exposeTo` | List of trusted domains that are allowed to interact with the control through WebMCP. |

```html
<script>
ej.spreadsheet.Spreadsheet.Inject(ej.spreadsheet.WebMcpSpreadsheet);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: {
        name: 'sales',
        tools: ['getCellData', 'editCell', 'addSheet'],
        exposeTo: ['https://www.syncfusion.com/']
    },
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
});

spreadsheet.appendTo('#spreadsheet');
</script>
```

> Use the `exposeTo` property to restrict WebMCP access to trusted domains. This helps prevent unauthorized WebMCP clients from interacting with your control tools.

### Step 5: Monitor and control tool execution

The `beforeWebMcpToolExecute` event is triggered before a tool is executed. This event allows you to:

- Audit tool usage.
- Validate incoming requests.
- Cancel tool execution when necessary.
- Apply custom business rules and security policies.

> AI-generated requests should always be validated before executing write operations. Restrict access using `exposeTo` and perform additional authorization checks within `beforeWebMcpToolExecute` when modifying application data.

```html
<script>
ej.spreadsheet.Spreadsheet.Inject(ej.spreadsheet.WebMcpSpreadsheet);

var spreadsheet = new ej.spreadsheet.Spreadsheet({
    enableWebMcp: true,
    webMcpSettings: {
        name: 'sales',
        tools: ['getCellData', 'editCell', 'addSheet'],
        exposeTo: ['https://www.syncfusion.com/']
    },
    beforeWebMcpToolExecute: function (args) {
        // Example business rule
        if (args.toolName.indexOf('editCell') !== -1) {
            var hour = new Date().getHours();

            if (hour < 9 || hour > 17) {
                args.cancel = true;
                console.log(
                    'Cell editing is allowed only between 9:00 AM and 5:00 PM.'
                );
            }
        }
    },
    openUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open',
    saveUrl: 'https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
});

spreadsheet.appendTo('#spreadsheet');
</script>
```

## Best practices

- Expose only the tools required by your application.
- Use the `name` property when multiple control instances exist on the same page.
- Configure `exposeTo` to limit access to trusted domains.
- Monitor tool activity through the `beforeWebMcpToolExecute` event.
- Apply application-specific validation before executing tool operations.

## Explore the demo

Explore the Syncfusion® JavaScript (ES5) Spreadsheet control with WebMCP integration through this [demo](https://demos.syncfusion.com/spreadsheet-editor-sdk/webmcp/index.html).

## Next steps

After successfully enabling WebMCP, you can:

- Integrate WebMCP with other Syncfusion® JavaScript (ES5) controls such as Grid, Scheduler, Chart, and Rich Text Editor.
- Build AI-powered workflows that interact directly with application data and UI elements.
- Create secure and controlled tool execution pipelines using custom validation logic.

## See also

- [WebMCP Supported Syncfusion JavaScript (ES5) Controls](./controls)