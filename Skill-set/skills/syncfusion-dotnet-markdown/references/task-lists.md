# Task Lists

## Overview
Create GitHub-style task lists (checkboxes) using the MdTaskProperties class with MdParagraph.

## MdTaskProperties Class

### Properties
```csharp
public class MdTaskProperties
{
    public bool IsChecked { get; set; }  // Checkbox state (checked/unchecked)
}
```

### MdParagraph Task Property
```csharp
public class MdParagraph : IMdBlock
{
    public MdTaskProperties TaskItemProperties { get; set; }  // Task list properties
    // ... other properties
}
```

## Creating Task Lists

### Simple Unchecked Task
```csharp
MarkdownDocument doc = new MarkdownDocument();

MdParagraph task = doc.AddParagraph();
task.TaskItemProperties = new MdTaskProperties();
task.TaskItemProperties.IsChecked = false;
task.AddTextRange().Text = "Complete documentation";

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output: - [ ] Complete documentation
```

### Simple Checked Task
```csharp
MdParagraph task = markdown.AddParagraph();
task.TaskItemProperties = new MdTaskProperties();
task.TaskItemProperties.IsChecked = true;
task.AddTextRange().Text = "Setup project";

// Output: - [x] Setup project
```

### Multiple Tasks
```csharp
MarkdownDocument doc = new MarkdownDocument();

string[] tasks = {
    "Install dependencies",
    "Configure settings",
    "Write tests",
    "Deploy application"
};

bool[] completed = { true, true, false, false };

for (int i = 0; i < tasks.Length; i++)
{
    MdParagraph task = doc.AddParagraph();
    task.TaskItemProperties = new MdTaskProperties();
    task.TaskItemProperties.IsChecked = completed[i];
    task.AddTextRange().Text = tasks[i];
}

string markdown = doc.GetMarkdownText();
doc.Dispose();

// Output:
// - [x] Install dependencies
// - [x] Configure settings
// - [ ] Write tests
// - [ ] Deploy application
```

## Task Lists with Formatting

### Bold Task Text
```csharp
MdParagraph task = markdown.AddParagraph();
task.TaskItemProperties = new MdTaskProperties();
task.TaskItemProperties.IsChecked = false;
MdTextRange bold = task.AddTextRange();
bold.Text = "Critical task";
bold.TextFormat.Bold = true;

// Output: - [ ] **Critical task**
```

### Task with Code Span
```csharp
MdParagraph task = markdown.AddParagraph();
task.TaskItemProperties = new MdTaskProperties();
task.TaskItemProperties.IsChecked = true;
task.AddTextRange().Text = "Implement ";
MdTextRange code = task.AddTextRange();
code.Text = "AddTask()";
code.TextFormat.CodeSpan = true;
task.AddTextRange().Text = " method";

// Output: - [x] Implement `AddTask()` method
```

### Task with Link
```csharp
MdParagraph task = markdown.AddParagraph();
task.TaskItemProperties = new MdTaskProperties();
task.TaskItemProperties.IsChecked = false;
task.AddTextRange().Text = "Review ";
MdHyperlink link = task.AddHyperlink();
link.DisplayText = "pull request";
link.Url = "https://github.com/repo/pull/123";

// Output: - [ ] Review [pull request](https://github.com/repo/pull/123)
```

## Practical Examples

### Project Tasks Checklist
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Project Tasks";

// Phase 1
MdParagraph phase1 = doc.AddParagraph();
phase1.ApplyParagraphStyle("Heading 2");
phase1.AddTextRange().Text = "Phase 1: Setup";

MdParagraph task1 = doc.AddParagraph();
task1.TaskItemProperties = new MdTaskProperties { IsChecked = true };
task1.AddTextRange().Text = "Initialize repository";

MdParagraph task2 = doc.AddParagraph();
task2.TaskItemProperties = new MdTaskProperties { IsChecked = true };
task2.AddTextRange().Text = "Setup CI/CD pipeline";

MdParagraph task3 = doc.AddParagraph();
task3.TaskItemProperties = new MdTaskProperties { IsChecked = false };
task3.AddTextRange().Text = "Configure environments";

// Phase 2
MdParagraph phase2 = doc.AddParagraph();
phase2.ApplyParagraphStyle("Heading 2");
phase2.AddTextRange().Text = "Phase 2: Development";

MdParagraph task4 = doc.AddParagraph();
task4.TaskItemProperties = new MdTaskProperties { IsChecked = false };
task4.AddTextRange().Text = "Implement core features";

MdParagraph task5 = doc.AddParagraph();
task5.TaskItemProperties = new MdTaskProperties { IsChecked = false };
task5.AddTextRange().Text = "Write unit tests";

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Sprint Planning
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Sprint title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Sprint 12 Tasks";

// User stories
string[][] stories = {
    new[] { "User authentication", "true" },
    new[] { "Password reset functionality", "true" },
    new[] { "User profile page", "false" },
    new[] { "Admin dashboard", "false" }
};

foreach (string[] story in stories)
{
    MdParagraph task = doc.AddParagraph();
    task.TaskItemProperties = new MdTaskProperties();
    task.TaskItemProperties.IsChecked = bool.Parse(story[1]);
    task.AddTextRange().Text = story[0];
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Daily Checklist
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Date
MdParagraph date = doc.AddParagraph();
date.ApplyParagraphStyle("Heading 1");
date.AddTextRange().Text = "Daily Tasks - January 15, 2024";

// Morning
MdParagraph morning = doc.AddParagraph();
morning.ApplyParagraphStyle("Heading 2");
morning.AddTextRange().Text = "Morning";

string[] morningTasks = {
    "Check emails",
    "Review code changes",
    "Stand-up meeting"
};

foreach (string taskText in morningTasks)
{
    MdParagraph task = doc.AddParagraph();
    task.TaskItemProperties = new MdTaskProperties { IsChecked = true };
    task.AddTextRange().Text = taskText;
}

// Afternoon
MdParagraph afternoon = doc.AddParagraph();
afternoon.ApplyParagraphStyle("Heading 2");
afternoon.AddTextRange().Text = "Afternoon";

string[] afternoonTasks = {
    "Implement feature X",
    "Write documentation",
    "Deploy to staging"
};

foreach (string taskText in afternoonTasks)
{
    MdParagraph task = doc.AddParagraph();
    task.TaskItemProperties = new MdTaskProperties { IsChecked = false };
    task.AddTextRange().Text = taskText;
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Bug Tracking
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Bug Fixes - v1.2";

// Critical bugs
MdParagraph critical = doc.AddParagraph();
critical.ApplyParagraphStyle("Heading 2");
critical.AddTextRange().Text = "Critical";

string[][] criticalBugs = {
    new[] { "Login fails for admin users", "true", "#501" },
    new[] { "Data loss on save", "false", "#502" }
};

foreach (string[] bug in criticalBugs)
{
    MdParagraph task = doc.AddParagraph();
    task.TaskItemProperties = new MdTaskProperties();
    task.TaskItemProperties.IsChecked = bool.Parse(bug[1]);
    task.AddTextRange().Text = bug[0] + " ";
    MdTextRange issue = task.AddTextRange();
    issue.Text = bug[2];
    issue.TextFormat.CodeSpan = true;
}

// Minor bugs
MdParagraph minor = doc.AddParagraph();
minor.ApplyParagraphStyle("Heading 2");
minor.AddTextRange().Text = "Minor";

string[][] minorBugs = {
    new[] { "UI alignment issue", "true", "#503" },
    new[] { "Typo in error message", "true", "#504" }
};

foreach (string[] bug in minorBugs)
{
    MdParagraph task = doc.AddParagraph();
    task.TaskItemProperties = new MdTaskProperties();
    task.TaskItemProperties.IsChecked = bool.Parse(bug[1]);
    task.AddTextRange().Text = bug[0] + " ";
    MdTextRange issue = task.AddTextRange();
    issue.Text = bug[2];
    issue.TextFormat.CodeSpan = true;
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

### Meeting Action Items
```csharp
MarkdownDocument doc = new MarkdownDocument();

// Meeting title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Team Meeting - Action Items";

// Date
MdParagraph date = doc.AddParagraph();
date.AddTextRange().Text = "Date: January 15, 2024";

// Action items
MdParagraph actionHeading = doc.AddParagraph();
actionHeading.ApplyParagraphStyle("Heading 2");
actionHeading.AddTextRange().Text = "Action Items";

string[][] actions = {
    new[] { "John", "Update documentation", "false" },
    new[] { "Jane", "Review PR #45", "true" },
    new[] { "Mike", "Schedule follow-up meeting", "false" }
};

foreach (string[] action in actions)
{
    MdParagraph task = doc.AddParagraph();
    task.TaskItemProperties = new MdTaskProperties();
    task.TaskItemProperties.IsChecked = bool.Parse(action[2]);
    MdTextRange owner = task.AddTextRange();
    owner.Text = action[0];
    owner.TextFormat.Bold = true;
    task.AddTextRange().Text = ": " + action[1];
}

string markdown = doc.GetMarkdownText();
doc.Dispose();
```

## Parsing Task Lists

### Extract All Tasks
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

List<(bool isChecked, string text)> tasks = new List<(bool, string)>();

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.TaskItemProperties != null)
    {
        StringBuilder text = new StringBuilder();
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdTextRange tr)
                text.Append(tr.Text);
        }
        tasks.Add((para.TaskItemProperties.IsChecked, text.ToString()));
    }
}

foreach (var (isChecked, text) in tasks)
{
    string status = isChecked ? "[x]" : "[ ]";
    Console.WriteLine($"{status} {text}");
}
```

### Count Completed Tasks
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

int totalTasks = 0;
int completedTasks = 0;

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.TaskItemProperties != null)
    {
        totalTasks++;
        if (para.TaskItemProperties.IsChecked)
            completedTasks++;
    }
}

double percentage = totalTasks > 0 ? (completedTasks * 100.0 / totalTasks) : 0;
Console.WriteLine($"Progress: {completedTasks}/{totalTasks} ({percentage:F1}%)");
```

### Find Incomplete Tasks
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

List<string> incompleteTasks = new List<string>();

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.TaskItemProperties != null && !para.TaskItemProperties.IsChecked)
    {
        StringBuilder text = new StringBuilder();
        foreach (IMdInline inline in para.Inlines)
        {
            if (inline is MdTextRange tr)
                text.Append(tr.Text);
        }
        incompleteTasks.Add(text.ToString());
    }
}

Console.WriteLine("Incomplete tasks:");
foreach (string task in incompleteTasks)
{
    Console.WriteLine($"- {task}");
}
```

## Modifying Task Lists

### Mark Task as Complete
```csharp
MarkdownDocument doc = new MarkdownDocument(markdownStream, settings);

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.TaskItemProperties != null)
    {
        // Find specific task
        string taskText = GetParagraphText(para);
        if (taskText.Contains("Deploy application"))
        {
            para.TaskItemProperties.IsChecked = true;
        }
    }
}

string modified = doc.GetMarkdownText();

string GetParagraphText(MdParagraph para)
{
    StringBuilder text = new StringBuilder();
    foreach (IMdInline inline in para.Inlines)
    {
        if (inline is MdTextRange tr)
            text.Append(tr.Text);
    }
    return text.ToString();
}
```

### Mark All Tasks as Complete
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.TaskItemProperties != null)
    {
        para.TaskItemProperties.IsChecked = true;
    }
}
```

### Reset All Tasks
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.TaskItemProperties != null)
    {
        para.TaskItemProperties.IsChecked = false;
    }
}
```

### Convert Regular List to Task List
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    // Detect existing list formatting by checking ListValue, ListLevel or IsNumbered
    if (block is MdParagraph para && (!string.IsNullOrEmpty(para.ListFormat.ListValue) || para.ListFormat.IsNumbered || para.ListFormat.ListLevel > 0))
    {
        // Convert to task list
        para.TaskItemProperties = new MdTaskProperties();
        para.TaskItemProperties.IsChecked = false;
        // Remove list formatting (task lists don't need it)
        para.ListFormat.IsNumbered = false;
        para.ListFormat.ListValue = string.Empty;
        para.ListFormat.ListLevel = 0;
    }
}
```

### Remove Task Properties
```csharp
foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.TaskItemProperties != null)
    {
        para.TaskItemProperties = null;
    }
}
```

## Complete Example: Release Checklist

```csharp
MarkdownDocument doc = new MarkdownDocument();

// Title
MdParagraph title = doc.AddParagraph();
title.ApplyParagraphStyle("Heading 1");
title.AddTextRange().Text = "Release v2.0 Checklist";

// Pre-release
MdParagraph preRelease = doc.AddParagraph();
preRelease.ApplyParagraphStyle("Heading 2");
preRelease.AddTextRange().Text = "Pre-release";

string[][] preReleaseTasks = {
    new[] { "Complete all features", "true" },
    new[] { "Fix critical bugs", "true" },
    new[] { "Update documentation", "true" },
    new[] { "Run all tests", "false" }
};

foreach (string[] task in preReleaseTasks)
{
    MdParagraph para = doc.AddParagraph();
    para.TaskItemProperties = new MdTaskProperties();
    para.TaskItemProperties.IsChecked = bool.Parse(task[1]);
    para.AddTextRange().Text = task[0];
}

// Release
MdParagraph release = doc.AddParagraph();
release.ApplyParagraphStyle("Heading 2");
release.AddTextRange().Text = "Release";

string[][] releaseTasks = {
    new[] { "Create release branch", "false" },
    new[] { "Build production package", "false" },
    new[] { "Deploy to production", "false" },
    new[] { "Announce release", "false" }
};

foreach (string[] task in releaseTasks)
{
    MdParagraph para = doc.AddParagraph();
    para.TaskItemProperties = new MdTaskProperties();
    para.TaskItemProperties.IsChecked = bool.Parse(task[1]);
    para.AddTextRange().Text = task[0];
}

// Post-release
MdParagraph postRelease = doc.AddParagraph();
postRelease.ApplyParagraphStyle("Heading 2");
postRelease.AddTextRange().Text = "Post-release";

string[][] postReleaseTasks = {
    new[] { "Monitor logs", "false" },
    new[] { "Collect user feedback", "false" },
    new[] { "Update changelog", "false" }
};

foreach (string[] task in postReleaseTasks)
{
    MdParagraph para = doc.AddParagraph();
    para.TaskItemProperties = new MdTaskProperties();
    para.TaskItemProperties.IsChecked = bool.Parse(task[1]);
    para.AddTextRange().Text = task[0];
}

string markdown = doc.GetMarkdownText();
File.WriteAllText("release-checklist.md", markdown);
doc.Dispose();
```

## Progress Tracking Example

```csharp
MarkdownDocument doc = new MarkdownDocument(File.OpenRead("tasks.md"), new MdImportSettings());

// Calculate progress
int total = 0, completed = 0;

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.TaskItemProperties != null)
    {
        total++;
        if (para.TaskItemProperties.IsChecked)
            completed++;
    }
}

double percentage = total > 0 ? (completed * 100.0 / total) : 0;

// Add progress to document
MdParagraph progress = new MdParagraph();
progress.AddTextRange().Text = $"Progress: {completed}/{total} tasks completed ({percentage:F0}%)";

// Insert at beginning
doc.Blocks.Insert(0, progress);

string output = doc.GetMarkdownText();
File.WriteAllText("tasks-with-progress.md", output);
doc.Dispose();
```

## HTML Conversion

Task lists are converted to HTML:
```html
<!-- Unchecked task -->
<ul>
  <li><input type="checkbox" disabled> Complete documentation</li>
</ul>

<!-- Checked task -->
<ul>
  <li><input type="checkbox" checked disabled> Setup project</li>
</ul>
```

## Best Practices

1. **Clear Text**: Use concise, actionable task descriptions
2. **Grouping**: Organize tasks by category or priority
3. **Progress Tracking**: Add completion percentage summaries
4. **Ownership**: Include assignee names for clarity
5. **Links**: Add issue/PR references for context
6. **Status Updates**: Regularly update task states
7. **Archiving**: Move completed tasks to archive section

## GitHub-Style Task Lists

GitHub and other platforms render task lists as interactive checkboxes. The markdown syntax is:
```markdown
- [ ] Unchecked task
- [x] Checked task
```

## Troubleshooting

- **Checkboxes not rendering**: Verify TaskItemProperties is not null
- **Wrong checkbox state**: Check IsChecked property value
- **Not recognized as task**: Ensure TaskItemProperties object is created
- **Formatting issues**: Task lists don't require list formatting (ListFormat)

## Common Mistakes

```csharp
// ❌ Wrong: Forgetting to initialize TaskItemProperties
MdParagraph task = markdown.AddParagraph();
task.TaskItemProperties.IsChecked = true; // NullReferenceException

// ✅ Correct: Initialize TaskItemProperties first
MdParagraph task = markdown.AddParagraph();
task.TaskItemProperties = new MdTaskProperties();
task.TaskItemProperties.IsChecked = true;

// ❌ Wrong: Using list format with task properties
task.ListFormat.ListValue = "* "; // Not needed
task.TaskItemProperties = new MdTaskProperties();

// ✅ Correct: Only use TaskItemProperties (no list format needed)
task.TaskItemProperties = new MdTaskProperties();

// ❌ Wrong: Using string for IsChecked
task.TaskItemProperties.IsChecked = "true"; // Type error

// ✅ Correct: Use boolean
task.TaskItemProperties.IsChecked = true;
```

## Integration Patterns

### Export to CSV
```csharp
List<string> csvLines = new List<string>();
csvLines.Add("Status,Task");

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para && para.TaskItemProperties != null)
    {
        string status = para.TaskItemProperties.IsChecked ? "Complete" : "Incomplete";
        string text = GetParagraphText(para);
        csvLines.Add($"{status},\"{text}\"");
    }
}

File.WriteAllLines("tasks.csv", csvLines);
```

### Generate Summary Report
```csharp
var summary = new StringBuilder();
summary.AppendLine("## Task Summary Report");
summary.AppendLine();

var sections = new Dictionary<string, List<(bool, string)>>();
string currentSection = "General";

foreach (IMdBlock block in doc.Blocks)
{
    if (block is MdParagraph para)
    {
        if (para.StyleName != MdParagraphStyle.None)
        {
            currentSection = GetParagraphText(para);
        }
        else if (para.TaskItemProperties != null)
        {
            if (!sections.ContainsKey(currentSection))
                sections[currentSection] = new List<(bool, string)>();
            
            sections[currentSection].Add((para.TaskItemProperties.IsChecked, GetParagraphText(para)));
        }
    }
}

foreach (var (section, tasks) in sections)
{
    int completed = tasks.Count(t => t.Item1);
    int total = tasks.Count;
    summary.AppendLine($"### {section}: {completed}/{total}");
}

File.WriteAllText("summary.md", summary.ToString());
```
