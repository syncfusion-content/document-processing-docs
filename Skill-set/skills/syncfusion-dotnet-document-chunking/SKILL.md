---
name: syncfusion-dotnet-document-chunking
description: Structure-aware document chunking for RAG and vector indexing using Syncfusion Document Chunking. Supports Word, PDF, PowerPoint, Excel, and Markdown via ChunkingService with path/stream/async APIs, ChunkingOptions, format modes, metadata/citations. Generate C# code for the user's project from reference APIs only. Use when the user mentions document chunking, RAG chunks, embeddings, vector indexing, ChunkingService, Syncfusion DocumentChunking, or splitting docs/pdf/docx/pptx/xlsx/md for semantic search.
metadata:
  author: Syncfusion Inc
  version: "34.1.29"
---

# Document Chunking (RAG / Vector Indexing)

## Overview

Split Word, PDF, PowerPoint, Excel, and Markdown documents into token-bounded, structure-aware chunks using the Syncfusion Document Chunking Library.

This skill generates C# code for the user's project. It does **not** execute CSX scripts or produce chunk output files on behalf of the user.

**Namespace:** `Syncfusion.DocumentChunking`  
**Entry point:** `ChunkingService` implementing `IChunkingService`

## Key Capabilities

- **Multi-format chunking:** Word (`.doc`/`.docx`), PDF (`.pdf`), PowerPoint (`.ppt`/`.pptx`/`.pptm`/`.potx`), Excel (`.xlsx`/`.xls`/`.xlsm`/`.xlsb`), Markdown (`.md`/`.markdown`)
- **APIs:** Path and stream input, sync and async (`Chunk` / `ChunkAsync`) with cancellation
- **Options:** `MaxTokens`, `OverlapTokens`, `IncludeMetadata`, `IncludeCitation`, custom `ITokenCounter`, format-specific `SourceOptions`
- **Format modes:** Auto plus format grains (page, paragraph, heading, worksheet, slide, notes, table, section)
- **RAG grounding:** Deterministic `ChunkId` / `SourceDocumentId`, citation `DisplayText` and `LocationDetails`
- **Validation:** Clear exceptions for invalid options, unsupported extensions, missing stream `sourceName` extension

## Prerequisites

- .NET SDK 8+ (or a supported target for the chosen NuGet package)
- Syncfusion License: https://www.syncfusion.com/products/communitylicense

## Quick Start Example

**User:** "Show me how to chunk a PDF for RAG with page mode"

**Result:** C# code snippet for the user's project (no files created, no script execution)

```csharp
using Syncfusion.DocumentChunking;

ChunkingService service = new ChunkingService();

IChunkingResult result = service.Chunk(
    "report.pdf",
    new ChunkingOptions
    {
        MaxTokens = 512,
        OverlapTokens = 50,
        IncludeMetadata = true,
        IncludeCitation = true,
        SourceOptions = new PdfChunkingOptions
        {
            ChunkingMode = PdfChunkingMode.Page
        }
    });
```

## Mode of Operation — Generate C# Code Only

Use this skill whenever the user wants to view, write, review, refactor, integrate, or learn C# code related to document chunking.

**Typical triggers:** "code", "snippet", "how to", "Program.cs", "show me", "sample", "example", "NuGet", "add to project", "integrate", "implementation", "API example", "ChunkingService", "ChunkingOptions", "IChunk", "RAG indexing code", ASP.NET, Blazor, WPF, WinForms, MAUI, console app.

### Workflow

#### Step 1 — Detect the Application Type and Suggest the Correct NuGet Package(s)

- Inspect the workspace project files (`.csproj`, `web.config`, `App.config`, `Startup.cs`, `Program.cs`, etc.) and use the detection signals table in `references/nuget-packages.md` to identify the application type.
- Look up the correct package(s) from `references/nuget-packages.md` based on the detected app type and tell the user to install them **before** generating any code.

#### Step 2 — Generate Code from Reference Files Only

Do NOT invent, guess, or suggest any API, method, property, class, or namespace not explicitly present in the reference files.

- Read the relevant `references/*.md` file(s) for the requested feature
- Build C# code **strictly** from the APIs and snippets found in those files
- Select the correct package guidance based on the app type detected in Step 1:
  - **Windows-specific / .NET Framework apps** → use packages and notes from `nuget-packages.md` for Framework targets when documented
  - **Cross-platform apps** (ASP.NET Core, .NET Core/.NET 5+ Console, Blazor, MAUI) → use `Syncfusion.DocumentChunking.Net.Core` snippets
- Do **not** create, run, or suggest `.csx` scripts
- Do **not** execute chunking or write output files for the user

---

## Code References

All templates and snippets are in the `references/` folder:

| File | Contents |
|---|---|
| **nuget-packages.md** | NuGet package mappings by application type |
| **getting-started.md** | Install, minimal path/stream/async samples, defaults |
| **api-reference.md** | `IChunkingService`, result/chunk/metadata/citation, token counter |
| **chunking-options.md** | `MaxTokens`, overlap, flags, validation, `SourceOptions` |
| **format-modes.md** | Markdown/Word/PDF/Excel/PowerPoint mode enums and guidance |
| **supported-formats.md** | Extension tables, path vs stream routing, `sourceName` rules |
| **metadata-and-citations.md** | Flags matrix, location keys, `DisplayText`, deterministic IDs |
| **examples.md** | Copy-paste patterns per format and indexing loop |
| **troubleshooting.md** | Exception catalog, common mistakes, RAG checklist |

---

## Critical Gotchas

| Mistake | Result | Fix |
|---------|--------|-----|
| Stream `sourceName` without extension (`"report"`) | `NotSupportedException` / failed routing | Use `"report.pdf"` or `Path.GetFileName(path)` |
| `IncludeCitation = true` and `IncludeMetadata = false` | `ArgumentException` | Enable metadata whenever citation is enabled |
| `OverlapTokens >= MaxTokens` | `ArgumentException` | Keep overlap strictly less than max (`MaxTokens - 1` max) |
| `MaxTokens <= 0` or negative overlap | `ArgumentOutOfRangeException` | `MaxTokens > 0`, `OverlapTokens >= 0` |
| Unsupported extension (`.txt`, `.html`, …) | `NotSupportedException` | Use supported Word/PDF/PPT/Excel/Markdown extensions |
| Wrong `SourceOptions` type for file | Mode ignored; Auto used | Match options type to format |
| Default counter vs model tokenizer | Chunks wrong size for LLM | Implement `ITokenCounter` for target tokenizer |

---

## Rules

- **Code generation only** — never create or run CSX/temp scripts; never execute chunking on behalf of the user
- Do **not** invent APIs not present in `references/*.md`
- Prefer project-appropriate NuGet packages from `references/nuget-packages.md`
- Never use Python libraries (e.g., langchain text splitters, pypdf) for these tasks — use Syncfusion Document Chunking
- Remind the user to register a Syncfusion license in their host app when shipping
