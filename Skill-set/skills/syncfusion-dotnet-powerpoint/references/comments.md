# Comments

> Add, reply to, modify, and delete comments on PowerPoint slides.

---
## Required Usings

```csharp
using Syncfusion.Presentation;
```
---
## Add a Comment

### Minimal Code
```csharp

// Add(x, y, authorName, authorInitials, text, dateTime)
slide.Comments.Add(10, 10, "Author1", "A1", "Can we change the font size to 20?", DateTime.Now);

```

### Placeholders
- `(10, 10)` → Replace with `({x}, {y})` position on the slide
- `"Author1"`, `"A1"` → Replace with author name and initials
- `"Can we change the font size to 20?"` → Replace with comment text

---

## Reply to a Comment

### Minimal Code
```csharp

// Get the parent comment to reply to
IComment comment = slide.Comments[0] as IComment;
// Add(authorName, initials, replyText, dateTime, parentComment)
slide.Comments.Add("Author2", "A2", "Yes, we can change the font size to 20", DateTime.Now, comment);

```

### Placeholders
- `slide.Comments[0]` → Replace `0` with the index of the parent comment to reply to

---

## Modify Comment Text

### Minimal Code
```csharp

IComment comment = slide.Comments[0] as IComment;
comment.Text = "The comment text content is changed";

```

### Placeholders
- `slide.Comments[0]` → Replace `0` with the target comment index
- `comment.Text` → Replace with new comment text

---

## Modify Comment Author

### Minimal Code
```csharp

IComment comment = slide.Comments[0] as IComment;
comment.AuthorName = "NewAuthor";

```

### Placeholders
- `"NewAuthor"` → Replace with the desired author name

---

## Delete a Comment by Reference

### Minimal Code
```csharp

IComment comment = slide.Comments[0];
// Removes the comment and all its replies
slide.Comments.Remove(comment);

```

### Placeholders
- `slide.Comments[0]` → Replace `0` with the index of the comment to delete

---

## Delete a Comment by Index

### Minimal Code
```csharp

// Remove by position (index 0 = top-level comment, index 1+ = replies)
slide.Comments.RemoveAt(1);

```

### Placeholders
- `RemoveAt(1)` → Replace `1` with the index of the comment or reply to remove

> **Note:** Comments and replies share a single flat collection per slide. Index 0 is the top-level comment; subsequent indices are replies in order.
