# Syncfusion .NET Document Chunking Skill

Structure-aware document chunking for RAG and vector indexing using Syncfusion Document Chunking.

This skill is a **coding assistant only**: it generates C# for the user's project from validated reference APIs. It does **not** run CSX scripts or produce chunk output files.

See **[SKILL.md](SKILL.md)** for the full guide and rules.

---

## Workflow

1. Detect app type via `references/nuget-packages.md`
2. Tell the user which NuGet package(s) to install
3. Generate code **only** from `references/*.md` APIs and snippets
4. Do **not** create or run `.csx` scripts
5. Do **not** execute chunking or write files for the user

---

## Quick Start

### Prerequisites

- **.NET SDK 8+** (or a target supported by the chosen package)
- **Syncfusion License** — register in the host application  
  Free license: [Syncfusion Community License](https://www.syncfusion.com/products/communitylicense)

### NuGet packages

```bash
dotnet add package Syncfusion.DocumentChunking.Net.Core
# or
dotnet add package Syncfusion.DocumentChunking.NET
```

See `references/nuget-packages.md` for app-type mappings.

### Minimal API sample

```csharp
using Syncfusion.DocumentChunking;

ChunkingService chunkingService = new ChunkingService();

IChunkingResult result = chunkingService.Chunk(
    "manual.docx",
    new ChunkingOptions
    {
        MaxTokens = 512,
        OverlapTokens = 50,
        IncludeMetadata = true,
        IncludeCitation = true
    });

foreach (IChunk chunk in result.Chunks)
{
    Console.WriteLine($"[{chunk.ChunkIndex}] {chunk.ChunkId}");
    Console.WriteLine(chunk.Content);
}
```

---

## Rules

- Generate C# code only — no CSX execution, no agent-produced chunk files
- Do not invent APIs not listed in the reference files
- Never use Python libraries for these tasks — use Syncfusion Document Chunking
- Point users to Syncfusion licensing for shipped apps

---

## Integration with GitHub Copilot

Place the skill folder in `.github/skills/` or `.codestudio/skills/` of your repository.

When working with document chunking, Copilot can:

1. Suggest the correct NuGet package for the project type
2. Generate Syncfusion Document Chunking C# from the reference snippets

### Example prompts

- "Show me how to chunk a PDF by page for RAG"
- "Generate code to chunk uploaded streams with sourceName"
- "How do I set MaxTokens and OverlapTokens for embeddings?"
