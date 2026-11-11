# Animation & Transitions

> Apply, edit, reorder, and remove animation effects and slide transitions in a PowerPoint presentation.

---
## Cross-platform (Required Usings)

```csharp
using Syncfusion.Presentation;
using Syncfusion.Drawing;
```
## Windows-specific (Required Usings)

```csharp
using Syncfusion.Presentation;
using System.Drawing;
```
---

# Animation

## Add Animation Effect to a Shape

### Minimal Code
```csharp

IShape cubeShape = slide.Shapes.AddShape(AutoShapeType.Cube, 50, 200, 300, 300);
// Access the main animation sequence
ISequence sequence = slide.Timeline.MainSequence;
// Add an effect (shape, effectType, subtype, triggerType)
IEffect effect = sequence.AddEffect(cubeShape, EffectType.Bounce, EffectSubtype.None, EffectTriggerType.OnClick);

```

### Placeholders
- `EffectType.Bounce` → Replace with any `EffectType` enum value
- `EffectSubtype.None` → Replace with a valid subtype for the chosen effect
- `EffectTriggerType.OnClick` → Replace with `WithPrevious` or `AfterPrevious` as needed

---

## Add Interactive Animation (Triggered by Another Shape)

### Minimal Code
```csharp

IShape cubeShape = slide.Shapes.AddShape(AutoShapeType.Cube, 50, 200, 300, 300);
IShape buttonShape = slide.Shapes.AddShape(AutoShapeType.Oval, 100, 100, 50, 50);
// Create an interactive sequence triggered by clicking the button shape
ISequence interactiveSequence = slide.Timeline.InteractiveSequences.Add(buttonShape);
IEffect effect = interactiveSequence.AddEffect(cubeShape, EffectType.Fly, EffectSubtype.Top, EffectTriggerType.OnClick);

```

---

## Add Animation to Text

### Minimal Code
```csharp

IShape shape = slide.Shapes[0] as IShape;
ISequence sequence = slide.Timeline.MainSequence;
// BuildType controls paragraph-level animation
IEffect effect = sequence.AddEffect(shape, EffectType.Swivel, EffectSubtype.Vertical, EffectTriggerType.OnClick, BuildType.ByLevelParagraphs1);

```

### Placeholders
- `BuildType.ByLevelParagraphs1` → Replace with any `BuildType` enum value to control animation level

---

## Add Exit Animation Effect

### Minimal Code
```csharp

IShape cubeShape = slide.Shapes.AddShape(AutoShapeType.Cube, 50, 200, 300, 300);
ISequence sequence = slide.Timeline.MainSequence;
IEffect effect = sequence.AddEffect(cubeShape, EffectType.RandomBars, EffectSubtype.None, EffectTriggerType.OnClick);
// Override the default Entrance type to Exit
effect.PresetClassType = EffectPresetClassType.Exit;
```

### Placeholders
- `EffectPresetClassType.Exit` → Use `Entrance`, `Emphasis`, or `Exit`

---

## Edit an Existing Animation Effect

### Minimal Code
```csharp
IShape shape = slide.Shapes[0] as IShape;
ISequence sequence = slide.Timeline.MainSequence;
// Get all effects on the shape and modify the first one
IEffect[] effects = sequence.GetEffectsByShape(shape);
effects[0].Type = EffectType.GrowAndTurn;

```

---

## Modify Animation Subtype and Timing

### Minimal Code
```csharp

ISequence sequence = pptxDoc.Slides[0].Timeline.MainSequence;
IEffect effect = sequence[0] as IEffect;
// Change subtype
effect.Subtype = EffectSubtype.Wheel4;
// Change duration (in seconds)
effect.Behaviors[0].Timing.Duration = 5;

```

---

## Reorder Animation Effects

### Minimal Code
```csharp


IShape shape = slide.Shapes[0] as IShape;
ISequence sequence = slide.Timeline.MainSequence;
IEffect[] effects = sequence.GetEffectsByShape(shape);
// Move second effect to the first position
IEffect effect = effects[1];
sequence.Remove(effect);
sequence.Insert(0, effect);

```

---

## Create a Custom Path Animation

### Minimal Code
```csharp

// Create or Open presentation
IShape cubeShape = slide.Shapes.AddShape(AutoShapeType.Cube, 200, 0, 300, 300);
ISequence sequence = slide.Timeline.MainSequence;
IEffect effect = sequence.AddEffect(cubeShape, EffectType.PathUser, EffectSubtype.None, EffectTriggerType.OnClick);
IMotionEffect motionBehavior = (IMotionEffect)effect.Behaviors[0];
PointF[] points = new PointF[1];
points[0] = new PointF(0, 0);
motionBehavior.Path.Add(MotionCommandPathType.MoveTo, points, MotionPathPointsType.Auto, false);
points[0] = new PointF(0, 0.25f);
motionBehavior.Path.Add(MotionCommandPathType.LineTo, points, MotionPathPointsType.Auto, false);
motionBehavior.Path.Add(MotionCommandPathType.End, null, MotionPathPointsType.Auto, false);

```

### Placeholders
- `MotionCommandPathType.LineTo` + `points` → Define custom movement coordinates (0–1 range, relative to slide)

---

## Remove Animation Effects from a Shape

### Minimal Code
```csharp

IShape shape = slide.Shapes[0] as IShape;
ISequence sequence = slide.Timeline.MainSequence;
foreach (IEffect effect in sequence.GetEffectsByShape(shape))
    sequence.Remove(effect);

```

---

# Transitions

## Set a Transition Effect

### Minimal Code
```csharp

slide.Shapes.AddShape(AutoShapeType.Cube, 100, 100, 300, 300);
// Set transition type and its effect option
slide.SlideTransition.TransitionEffect = TransitionEffect.Checkerboard;
slide.SlideTransition.TransitionEffectOption = TransitionEffectOption.Across;

```

### Placeholders
- `TransitionEffect.Checkerboard` → Replace with any `TransitionEffect` enum value
- `TransitionEffectOption.Across` → Replace with a valid option for the chosen transition (see Supported Transitions below)

---

## Modify an Existing Transition

### Minimal Code
```csharp

slide.SlideTransition.TransitionEffect = TransitionEffect.Cover;
slide.SlideTransition.TransitionEffectOption = TransitionEffectOption.Right;

```

---

## Set Transition Duration, Delay, Trigger, and Speed

### Minimal Code
```csharp

slide.SlideTransition.TransitionEffect = TransitionEffect.Checkerboard;
// Duration (max 59 seconds)
slide.SlideTransition.Duration = 40;
// Time delay before auto-advancing
slide.SlideTransition.TriggerOnTimeDelay = true;
slide.SlideTransition.TimeDelay = 5;
// Trigger on mouse click
slide.SlideTransition.TriggerOnClick = true;
// Speed preset: Fast (0.5s), Medium (0.75s), Slow (1.0s), Default (2s)
slide.SlideTransition.Speed = TransitionSpeed.Medium;

```

### Placeholders
- `slide.SlideTransition.Duration` → Max 59; set alongside `Speed` or independently
- `TransitionSpeed.Medium` → Replace with `Fast`, `Slow`, or `Default`
- `TimeDelay` → Seconds to wait before advancing (used when `TriggerOnTimeDelay = true`)

---