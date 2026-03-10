---
layout: post
title: React Spreadsheet getting started with Agentic UI Builder | Syncfusion
description:  Checkout and learn about how to use React Spreadsheet component of Syncfusion Essential JS 2 with Agentic UI Builder.
control: Getting started with Agent
platform: document-processing
documentation: ug
---

# Creating a Spreadsheet Application with Agentic UI Builder

This guide shows how to use **Agentic UI Builder** (powered by MCP Server in Syncfusion Code Studio) to generate the exact Syncfusion React Spreadsheet component — the spreadsheet matching the official getting-started documentation.

**Prerequisite**  
Make sure Agentic UI Builder is installed and running in Code Studio. Refer to the official installation guide:  
[Agentic UI Builder Getting Started](https://ej2.syncfusion.com/react/documentation/mcp-server/agentic-ui-builder/getting-started)

### Step 1: Primary Prompt

Paste the following prompt into the Code Studio AI chat panel in Agent mode:

```
#sf_react_ui_builder Create a minimal React application that renders the Syncfusion Spreadsheet Component exactly like the official getting-started example.

Include in your response or as comments:
- The project creation command: npm create vite@latest my-app -- --template react-ts
- The install command: npm install @syncfusion/ej2-react-spreadsheet --save
- The full list of required Material theme CSS imports for Spreadsheet to add src/App.css (use node_modules relative paths like @import '@syncfusion/ej2-base/styles/material.css'; etc.)
- The exact minimal code for App.tsx: import SpreadsheetComponent, render it functional component, default export, no extra props or data

Do not add any sample data, events, created handlers, or customizations — keep it 100% default and minimal like the docs.
```

### Step 2: Follow-up Prompt  
After the first response appears, send this follow-up prompt in the same chat:

```
Execute the listed steps and run
```


### Expected Outcome

When both prompts are executed in sequence, the Agentic UI Builder should:

- Created the Vite project creation command  
- Excuted the Syncfusion package installation  
- Modified the full list of Material theme CSS `@import` statements  
- Edited the minimal `src/App.tsx` code with `<SpreadsheetComponent />`  
- Suggested accept/skip buttons for key actions (npm installation, npm run dev)

The final running application will display an interactive spreadsheet UI identical to the result shown in the official documentation:  
[Syncfusion React Spreadsheet Getting Started](https://help.syncfusion.com/document-processing/excel/spreadsheet/react/getting-started)

### Tips & Best Practices

- Always use **Agent mode** in Code Studio for better multi-step execution and confirmation prompts.
- Recommended model: **Claude Sonnet** or a comparable high-capability model for maximum code accuracy.
- If any step times out or hangs, then stop and retry the current step.
- Always review the generated code and commands before accepting or applying them in production.

### See Also

- To explore customization options for layouts, components, styles, and more examples of effective prompts, refer to the [Prompt Library](https://ej2.syncfusion.com/react/documentation/mcp-server/agentic-ui-builder/prompt-library).