---
layout: post
title: AI Assist Integration in React Spreadsheet control | Syncfusion
description: Learn how to set up and configure AI Assist in the Syncfusion React Spreadsheet control for AI-powered features.
platform: document-processing
control: AI Assist
documentation: ug
---

# AI Assist Integration in React Spreadsheet control

## Integration

AI Assist integrates seamlessly into your React Spreadsheet application, enabling AI-powered capabilities with minimal configuration. This section covers the required setup.

### Prerequisites

Ensure the following before integrating AI Assist:

* Syncfusion React Spreadsheet package: The `@syncfusion/ej2-react-spreadsheet` package must be installed in your application.
* Front-end prerequisites: A React project (React 16.8 or later for hooks support) with the base Spreadsheet component already integrated. See the [Spreadsheet getting started](../getting-started) guide if you have not yet set up the Spreadsheet control.
* Backend Server: A running backend AI service (Node.js or Web API) with AI credentials configured on the server.
* For server setup instructions, see the:
    * [ASP.NET Web API Server](./ai-service/using-web-api)
    * [Node.js Server](./ai-service/using-node-js-server)

### Add CSS references

Add the following AI Assist dependent style references to the `src/index.css` file. The base Spreadsheet theme must already be imported; these references are additional styles required by the AI Assist UI.

```css
@import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css';
```

### Inject the AI Assist Module

Inject the `AIAssist` module into the React Spreadsheet. This registers the AI Assist feature and makes it available in your application.

```ts
import * as React from 'react';
import { Spreadsheet, AIAssist } from '@syncfusion/ej2-react-spreadsheet';

Spreadsheet.Inject(AIAssist);
```

### Enable AI Assist

To enable `AIAssist` in the Spreadsheet component, set the [`enableAIAssist`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#enableaiassist) property to `true`.

```ts
import * as React from 'react';
import { Spreadsheet, SpreadsheetComponent, AIAssist } from '@syncfusion/ej2-react-spreadsheet';

Spreadsheet.Inject(AIAssist);

function App() {
    return (<SpreadsheetComponent enableAIAssist={true}></SpreadsheetComponent> );
}
```

This enables AI Assist in the Spreadsheet.

### Configure AI Assist Settings

Use the [`aiAssistSettings`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#aiassistsettings) property to connect the Spreadsheet to the backend server and customize the AI Assist.

```ts
import * as React from 'react';
import { Spreadsheet, SpreadsheetComponent, AIAssist, AIAssistSettingsModel } from '@syncfusion/ej2-react-spreadsheet';

Spreadsheet.Inject(AIAssist);

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    // Replace {port} with your server's actual port, e.g. 3000 (Node.js) or 5001 (Web API).
    const aiAssistSettings: AIAssistSettingsModel = {
        requestUrl: 'https://localhost:{port}/api/AIAssist/Chat',
        placeholder: 'Ask the AI about this sheet...',
        promptSuggestions: [ 'Your suggestions',... ]
    };

    return (
        <SpreadsheetComponent ref={spreadsheetRef} enableAIAssist={true} aiAssistSettings={aiAssistSettings}></SpreadsheetComponent>
    );
}
```

Your Spreadsheet is now integrated with AI Assist and ready to use. To verify, run the application, open the Spreadsheet, click the **AI Assist** button in the ribbon toolbar, and send a test prompt — a response should appear in the panel.

## How-To Guides

### Open and Close the AI Panel

* **Open**: Click the **AI Assist** button in the ribbon toolbar.
* **Close**: Click the **✕** button inside the panel header, or click the **AI Assist** ribbon button again.
* **Start a new conversation**: Click the **↺ (Refresh)** button in the panel header.
* **Resize the panel**: Drag the left edge of the panel to make it wider or narrower.

### Undo an AI Action

All actions performed by AI Assist are recorded in the spreadsheet's undo/redo history. Press Ctrl+Z to revert any change made by the AI, just like a manual edit.

### How to Customize the Request Before Sending

Use the [`promptRequest`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#promptrequest) event to add custom data — such as a user ID or session token — to the request before it reaches your server.

```ts
import * as React from 'react';
import { Spreadsheet, SpreadsheetComponent, AIAssist, AIAssistSettingsModel, PromptRequestEventArgs } from '@syncfusion/ej2-react-spreadsheet';

Spreadsheet.Inject(AIAssist);

function App() {
    // Replace {port} with your server's actual port, e.g. 3000 (Node.js) or 5001 (Web API).
    const aiAssistSettings: AIAssistSettingsModel = { requestUrl: 'https://localhost:{port}/api/AIAssist/Chat' };

    function onPromptRequest(args: PromptRequestEventArgs): void {
        if (args.requestData) {
            (args.requestData as any).body.userId = 'your-user-id';
        }
    }

    return (
        <SpreadsheetComponent enableAIAssist={true} aiAssistSettings={aiAssistSettings}
            promptRequest={onPromptRequest}>
        </SpreadsheetComponent>
    );
}
```

You can also prevent the request entirely by setting `args.cancel = true`.

### How to Handle AI Responses

Use the [`promptResponse`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#promptresponse) event to run custom logic after the AI completes its task — for example, logging results or showing a notification.

```ts
import * as React from 'react';
import { Spreadsheet, SpreadsheetComponent, AIAssist, AIAssistSettingsModel, PromptResponseEventArgs } from '@syncfusion/ej2-react-spreadsheet';

Spreadsheet.Inject(AIAssist);

function App() {
    // Replace {port} with your server's actual port, e.g. 3000 (Node.js) or 5001 (Web API).
    const aiAssistSettings: AIAssistSettingsModel = { requestUrl: 'https://localhost:{port}/api/AIAssist/Chat' };

    function onPromptResponse(args: PromptResponseEventArgs): void {
        console.log('AI Response received:', args.response);
    }

    return (
        <SpreadsheetComponent enableAIAssist={true} aiAssistSettings={aiAssistSettings}
            promptResponse={onPromptResponse}>
        </SpreadsheetComponent>
    );
}
```

### Troubleshoot Server Connection Issues

If the AI panel displays an error message:

1. Verify the server is running
    * Confirm your Node.js or Web API server is active
    * Check the console for startup messages
2. Check the requestUrl
    * Ensure the URL matches your server's exact address and port
    * For local development:
        * Node.js: http://localhost:3000/api/AIAssist/Chat
        * Web API (.NET): https://localhost:5001/api/AIAssist/Chat
    * If your server runs Create React App on port 3000, change the Node.js server or the React dev server to a different port to avoid a conflict.
3. Verify CORS is enabled
    * Your React app origin must be allowed in the server's CORS policy
    * Default React dev server: http://localhost:5173 (Vite) or http://localhost:3000 (Create React App)
4. Use browser DevTools
    * Open the Network tab to inspect failed requests
    * Check for 404, 500, or CORS errors
    * Look at the response body for error details
5. Check server logs
    * Review the terminal/console where your server is running
    * Look for connection or authentication errors

## API References

### AI Assist Settings

| Property | Type | Description |
|---|---|---|
| `requestUrl` | `string` | The URL of your AI server endpoint. All prompts are sent here. |
| `placeholder` | `string` | The hint text shown inside the prompt input box. |
| `promptSuggestions` | `string[]` | A list of quick-start prompts shown to the user as clickable suggestions. |

### Events

| Event | When it fires | Common use |
|---|---|---|
| [`promptRequest`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#promptrequest) | Before the prompt is sent to the server | Attach extra data or cancel the request |
| [`promptResponse`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/index-default#promptresponse) | After the AI completes and responds | Log results or trigger custom UI updates |

### What Can You Ask the AI?

Type your request in plain English — no formulas or technical knowledge needed.

#### Data Analysis

| What to say | What it does |
|---|---|
| *"Can you give me a summary of this sheet?"* | Reviews your data and highlights key trends and totals |
| *"What are the top 5 rows by sales?"* | Picks out the highest-performing records from your data |
| *"Generate a full report for this sheet"* | Creates a structured report with KPIs, top records, and chart suggestions |

#### Data Operations

| What to say | What it does |
|---|---|
| *"Change the value in A1 to 500"* | Updates cell A1 with the new value |
| *"Fill in the dates for the rest of the column"* | Continues a date or number pattern using AutoFill |
| *"Swap 'Shoes' with 'Footwear' everywhere in this sheet"* | Finds and replaces the text throughout the entire sheet |

#### Formatting

| What to say | What it does |
|---|---|
| *"Make the header row bold with a blue background"* | Applies bold text and blue fill to your header cells |
| *"Show the prices in currency format"* | Formats the selected cells to display as currency |
| *"Make the text italic and red in column C"* | Applies italic style and red font color to the column |
| *"Make the text fit inside the cells in column D"* | Turns on text wrapping so long text does not overflow |

#### Rules & Validation

| What to say | What it does |
|---|---|
| *"Highlight any values above 1000 in green"* | Applies a conditional formatting rule to flag high values |
| *"Mark duplicate values in column A with a red background"* | Colors cells that appear more than once |
| *"Only allow values between 1 and 100 in column B"* | Adds a data validation rule to restrict input |
| *"Add a dropdown list with Yes and No options to column C"* | Creates a dropdown for easy, consistent data entry |

#### Structure Management

| What to say | What it does |
|---|---|
| *"Add two blank rows above row 5"* | Inserts two new rows at that position |
| *"Remove column C"* | Deletes the entire column from the sheet |
| *"Combine cells A1 to C1 into one"* | Merges the range into a single cell |
| *"Keep the first two rows visible when I scroll down"* | Freezes the top rows so they stay in place |

#### Navigation

| What to say | What it does |
|---|---|
| *"Sort the data by sales from highest to lowest"* | Reorders rows based on the sales column, descending |
| *"Show me only the rows where the region is India"* | Applies a filter so only matching rows are visible |
| *"Find all cells that say 'Pending' and change them to 'Done'"* | Runs a find and replace across the sheet |

#### Clipboard Actions

| What to say | What it does |
|---|---|
| *"Copy the data from A1 to B5 and put it at D1"* | Copies the range and pastes it at the new location |
| *"Move the content from A1:B3 to E1"* | Cuts the range and pastes it to the destination |

#### Visualization

| What to say | What it does |
|---|---|
| *"Create a bar chart from my sales data"* | Inserts a bar chart based on the selected data range |
| *"Add a line chart showing the monthly trend"* | Creates a line chart to visualize changes over time |
| *"Insert a pie chart with a title called 'Revenue Split'"* | Creates a pie chart with a custom title |

## See also

* [Node.js server setup](./ai-service/using-node-js-server)
* [Web API (.NET) server setup](./ai-service/using-web-api)
