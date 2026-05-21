---
layout: post
title: Getting Started | AI Agent Tools | Syncfusion
description: Learn how to integrate the Syncfusion Document SDK Agent Tool library with AI agent frameworks such as Microsoft Agents and Microsoft.Extensions.AI.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Getting Started with Syncfusion Document SDK AI Agent Tool Library

The [Syncfusion Document SDK AI Agent Tool](https://www.nuget.org/packages/Syncfusion.DocumentSDK.AI.AgentTools) library exposes Word, Excel, PDF, PowerPoint, and Smart Data Extractor operations as AI-callable tools. It integrates with the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/?pivots=programming-language-csharp) and works with any [providers](https://learn.microsoft.com/en-us/agent-framework/agents/providers/?pivots=programming-language-csharp) like OpenAI, Claude, Gemini, etc.

## Document Manager Modes

The library supports two modes for managing document state during agent tool invocations. Both modes expose the same AI tools-the difference is in how and where documents are stored between tool calls.

Use the table below to pick the right mode for your application, then follow the linked guide.

<table>
  <thead>
    <tr>
      <th>Use Cases</th>
      <th>Execution Mode</th>
      <th>Guide</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <ul>
          <li>Desktop applications</li>
          <li>Console applications</li>
          <li>Single-instance (non-scalable)</li>
        </ul>
      </td>
      <td>In-Memory</td>
      <td>
        <a href="./getting-started-in-memory-mode">
          Getting Started - In-Memory Mode
        </a>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
          <li>Web APIs</li>
          <li>Scalable applications</li>
          <li>Stateless services</li>
        </ul>
      </td>
      <td>Storage</td>
      <td>
        <a href="./getting-started-storage-mode">
          Getting Started - Storage Mode
        </a>
      </td>
    </tr>
  </tbody>
</table>

Both modes expose the same AI tools. The difference is only in how documents are stored between tool calls.

![Application workflow](application-workflow.png)

## See Also

- [In-Memory Mode](./getting-started-in-memory-mode)
- [Storage Mode](./getting-started-storage-mode)
- [Overview](./overview)
- [Tools Reference](./tools)
- [Customization](./customization)
- [Example Prompts](./example-prompts)
- [Example Use Cases](./example-use-cases)
