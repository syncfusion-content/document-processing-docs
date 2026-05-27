---
layout: post
title: AI Assist in React Spreadsheet control | Syncfusion
description: Learn here all about the AI Assist feature in Syncfusion React Spreadsheet control and how to set it up easily.
platform: document-processing
control: AI Assist
documentation: ug
---

# AI Assist in React Spreadsheet control

The **AI Assist** feature brings the power of AI directly into your spreadsheet. Instead of manually applying formats, writing formulas, or organizing data, you can simply type what you want in plain English — and the AI will do it for you.

![Spreadsheet AI Assist panel](../images/spreadsheet_ai_assist.gif)

---

## Server Connection

For server connection kindly refer this page - [AI-Assist Server Connection](./ai-assist-server-connection.md)

---

## Tutorial — Set Up AI Assist for the First Time

This tutorial walks you through enabling AI Assist in your spreadsheet from scratch. By the end, you will have a working AI panel connected to your server.

### Step 1 — Inject the AI Assist Module

Before using AI Assist, inject the `AIAssist` module into the Spreadsheet. This registers the feature and makes it available in your application.

```tsx
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
```

> **Note:** In the React wrapper, the `AIAssist` module is automatically injected when `enableAIAssist` is set to `true`. There is no need to call `Spreadsheet.Inject(AIAssist)` manually.

---

### Step 2 — Enable AI Assist

Set the `enableAIAssist` property to `true` when creating the Spreadsheet.

```tsx
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    return (
        <SpreadsheetComponent enableAIAssist={true}>
        </SpreadsheetComponent>
    );
}
```

This adds the **AI** button to the ribbon toolbar. Clicking it opens the AI Assist side panel.

---

### Step 3 — Connect to Your AI Server

Use the `aiAssistSettings` property to point the panel to your server and personalize the experience with a placeholder and prompt suggestions.

```tsx
import * as React from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { AIAssistSettingsModel } from '@syncfusion/ej2-spreadsheet';
import { grossPay } from './datasource';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);

    const aiAssistSettings: AIAssistSettingsModel = {
        requestUrl: 'https://localhost:{port}/api/AIAssist/Chat',
        placeholder: 'Ask the AI about this sheet...',
        promptSuggestions: [
            'Generate report',
            'Analyze this dataset and summarize',
            'Sort the data',
            'Format this sheet for better readability'
        ]
    };

    function onCreated(): void {
        const spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Gross Pay!A1:I1');
        }
    }

    return (
        <SpreadsheetComponent ref={spreadsheetRef} enableAIAssist={true} aiAssistSettings={aiAssistSettings}
            openUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/open'
            saveUrl='https://document.syncfusion.com/web-services/spreadsheet-editor/api/spreadsheet/save'
            created={onCreated}>
            <SheetsDirective>
                <SheetDirective name="Gross Pay">
                    <RangesDirective>
                        <RangeDirective dataSource={grossPay}></RangeDirective>
                    </RangesDirective>
                </SheetDirective>
            </SheetsDirective>
        </SpreadsheetComponent>
    );
}
```
{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/react/ai-assist-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/react/ai-assist-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "/document-processing/code-snippet/spreadsheet/react/ai-assist-cs1" %}

You now have a fully working AI Assist panel in your spreadsheet.

---

## How-To Guides

### How to Open and Close the AI Panel

* **Open**: Click the **AI** button in the ribbon toolbar.
* **Close**: Click the **✕** button inside the panel header, or click the **AI** ribbon button again.
* **Clear the conversation**: Click the **↺ (Refresh)** button in the panel header to start fresh.
* **Resize the panel**: Drag the left edge of the panel to make it wider or narrower.

---

### How to Attach Extra Data Before a Request is Sent

Use the `promptRequest` event to add custom data — such as a user ID or session token — to the request before it reaches your server.

```tsx
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { PromptRequestEventArgs } from '@syncfusion/ej2-spreadsheet';

function App() {
    const aiAssistSettings = { requestUrl: 'https://localhost:{port}/api/AIAssist/Chat' };

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

---

### How to React When the AI Finishes an Action

Use the `promptResponse` event to run custom logic after the AI completes its task — for example, logging results or showing a notification.

```tsx
import * as React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
import { PromptResponseEventArgs } from '@syncfusion/ej2-spreadsheet';

function App() {
    const aiAssistSettings = { requestUrl: 'https://localhost:{port}/api/AIAssist/Chat' };

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

---

### How to Undo an AI Action

All actions performed by AI Assist are recorded in the spreadsheet's undo/redo history. Press **Ctrl+Z** to revert any change made by the AI, just like a manual edit.

---

## Reference

### AI Assist Settings

| Property | Type | Description |
|---|---|---|
| `requestUrl` | `string` | The URL of your AI server endpoint. All prompts are sent here. |
| `placeholder` | `string` | The hint text shown inside the prompt input box. |
| `promptSuggestions` | `string[]` | A list of quick-start prompts shown to the user as clickable suggestions. |

---

### Events

| Event | When it fires | Common use |
|---|---|---|
| `promptRequest` | Before the prompt is sent to the server | Attach extra data or cancel the request |
| `promptResponse` | After the AI completes and responds | Log results or trigger custom UI updates |

---

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

---

## Explanation — How AI Assist Works

Understanding how AI Assist processes your request helps you write better prompts and get more reliable results.

### The Three-Step Process

When you submit a prompt in the AI Assist panel, the following happens behind the scenes:

**1. Intent Recognition**
Your prompt is sent to the AI server, which reads it and determines what type of action you want — for example, formatting, editing, generating a report, or creating a chart. This step figures out the *what*.

**2. Command Generation**
Once the intent is known, the spreadsheet's current data and the identified action are sent back to the AI. The AI then generates a precise set of instructions — such as which cells to update, what styles to apply, or what chart data to use. This step figures out the *how*.

**3. Execution**
The generated instructions are applied directly to the spreadsheet. The result appears instantly in the grid, and a confirmation message is shown in the AI panel. Every change is also added to the undo history, so nothing is permanent.

### Why Prompts Sometimes Miss

AI responses are only as good as the prompt you provide. Vague requests like *"fix this"* give the AI very little context. More specific prompts like *"highlight all values in column B that are greater than 500 in red"* produce reliable, accurate results.

### Scope

AI Assist only operates on the **currently active sheet**. It cannot read from or apply changes across multiple sheets in a single prompt.

---

## Limitations

* A valid `requestUrl` is required. Without a running AI server, prompts cannot be processed.
* AI Assist operates on the **active sheet only** — cross-sheet operations in a single prompt are not supported.
* Very broad or ambiguous prompts may produce unexpected results. Use specific language for best outcomes.

---

## See Also
* [Charts](../charts-and-visualizations.md)
* [Data Binding](../data-binding)