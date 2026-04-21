---
layout: post
title: Getting Started | AI Agent Tools | Syncfusion
description: Learn how to integrate the Syncfusion Document SDK Agent Tool library with AI agent frameworks such as Microsoft Agents and Microsoft.Extensions.AI.
platform: document-processing
control: AI Agent Tools
documentation: ug
---

# Getting Started with Syncfusion Document SDK Agent Tool Library

The [Syncfusion Document SDK Agent Tool library](https://gitea.syncfusion.com/essential-studio/Document-SDK-Agent-Library/src/branch/development/AgentLibrary) exposes Word, Excel, PDF, PowerPoint, and Smart Data Extraction operations as AI-callable tools. These tools integrate seamlessly with the [Microsoft Agent Framework](https://learn.microsoft.com/en-us/agent-framework/overview/?pivots=programming-language-csharp), enabling [AI agents](https://learn.microsoft.com/en-us/agent-framework/agents/?pivots=programming-language-csharp) to perform document operations autonomously.

Before you begin, make two key decisions:

1. **Document Manager Mode** - How documents are stored and managed between tool calls
2. **AI Provider** - Which inference service powers your agent

This guide helps you choose the right configuration for your application.

## Document Manager Modes

The library supports two modes for managing document state during agent tool invocations. Both modes expose the same AI tools-the difference is in how and where documents are stored between tool calls.

### In-Memory Mode

**How it works:** Documents are held as live objects in an in-memory dictionary. Each tool accesses and modifies the object directly rather than opening and saving files on each call. Objects are automatically cleaned up after 10 minutes (default) of inactivity. This expiration time is customizable.

**When to use:**  
Choose in-memory Mode for single-instance applications (desktop apps, console tools, or non-scalable environments) where in-memory state won't be lost. It provides the simplest and fastest experience.

For further details, please refer to this [documentation](https://help.syncfusion.com/document-processing/ai-agent-tools/getting-started-in-memory-mode).

### Storage Mode

**How it works:** Documents are read from and written to storage (Azure Blob, S3, local disk, etc.) on each tool invocation. No in-memory objects are maintained, so each tool call opens and saves document instances.

**When to use:**  
Choose Storage Mode for web APIs or applications that need horizontal scaling, work with large documents, or require state persistence across sessions.

For further details, please refer to this [documentation](https://help.syncfusion.com/document-processing/ai-agent-tools/getting-started-storage-mode).

## AI Providers

The library works with Microsoft Agent Framework which supports multiple AI inference providers through the `Microsoft.Extensions.AI` abstraction layer. You can use any supported provider without changing Syncfusion tool code-only the client initialization changes.

### Supported Providers

The Microsoft Agent Framework supports the following providers for .NET:

- **[Azure OpenAI](https://learn.microsoft.com/en-us/agent-framework/agents/providers/azure-openai)**
- **[OpenAI](https://learn.microsoft.com/en-us/agent-framework/agents/providers/openai)**
- **[Anthropic](https://learn.microsoft.com/en-us/agent-framework/agents/providers/anthropic)**
- **[Microsoft Foundry](https://learn.microsoft.com/en-us/agent-framework/agents/providers/microsoft-foundry)**

For more details, see the [Microsoft Agent Framework Providers documentation](https://learn.microsoft.com/en-us/agent-framework/agents/providers/?pivots=programming-language-csharp).

> **Note:** Microsoft AI agents understand prompts in any natural language and invoke Agent library tools accordingly. Agent responses are returned in the same language as the prompt.

## See Also

- In-Memory Mode
- Storage Mode
- [Syncfusion AI Agent Tools Overview](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/overview)
- [Available Tools Reference](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/tools)
- [Customization Guide](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/customization)
- [Example Prompts](https://helpstaging.syncfusion.com/document-processing/ai-agent-tools/example-prompts)
- [Syncfusion Document Processing](https://helpstaging.syncfusion.com/document-processing/)
- [Microsoft Agents Framework](https://github.com/microsoft/agents)
