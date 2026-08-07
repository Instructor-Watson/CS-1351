# Markdown Guide for Your Project Proposal

Markdown is a simple way to add structure and formatting to a plain-text file. You will use it to write your personal project proposal and later your project README.

This guide uses examples that fit the proposal assignment. You do not need to memorize every Markdown feature. Focus on headings, paragraphs, lists, links, and inline code.

Each example has two parts: **Markdown source** shows what you type, and **Rendered result** shows how a Markdown viewer displays it. Rendered results appear inside quoted panels so they are easy to distinguish from the guide itself; the panel border is not part of the example.

## Why Markdown is important

Markdown is worth learning because it is:

- **Readable:** The original file remains understandable even before it is rendered.
- **Portable:** A Markdown file can be opened in IntelliJ IDEA, a basic text editor, GitHub, and many learning platforms.
- **Common in software development:** Developers frequently use Markdown for README files, project plans, technical notes, and documentation.
- **Good for collaboration:** Because Markdown is plain text, changes are easy to review and track.
- **Focused on content:** You can organize your ideas without spending time choosing fonts, margins, or page decorations.

Your proposal is a planning document. Clear Markdown helps your instructor quickly find your project purpose, workflow, Java feature map, examples, timeline, and fallback plans.

## Start with the proposal template

Keep every required section from `ProjectProposal.md`. Replace each `TODO` with your own specific information. Do not delete a heading simply because you are unsure what to write; use the proposal guide and rubric to complete that section.

The template begins with Markdown like this.

**Markdown source:**

```markdown
# Personal Project Proposal

## Project title
Local Study List

## Purpose and intended user
This program helps a student keep and review a short list of study tasks.
```

**Rendered result:**

> # Personal Project Proposal
>
> ## Project title
>
> Local Study List
>
> ## Purpose and intended user
>
> This program helps a student keep and review a short list of study tasks.

The number signs become headings and the regular sentence becomes a paragraph.

## Headings organize the proposal

Use one number sign for the document title and two number signs for each main section:

**Markdown source:**

```markdown
# Personal Project Proposal

## Project title

## Purpose and intended user

## Part 1 workflow
```

**Rendered result:**

> # Personal Project Proposal
>
> ## Project title
>
> ## Purpose and intended user
>
> ## Part 1 workflow

Always put a space after the number signs. Keep headings in a logical order. Do not choose a heading level because of how large it looks; the levels describe the organization of the document.

## Paragraphs explain your ideas

Write normal text without a symbol at the beginning. Leave a blank line between paragraphs:

**Markdown source:**

```markdown
## Purpose and intended user

This console program helps a student organize a small list of study tasks.

The student can add a task, review all saved tasks, or quit the program.
```

**Rendered result:**

> ## Purpose and intended user
>
> This console program helps a student organize a small list of study tasks.
>
> The student can add a task, review all saved tasks, or quit the program.

Use complete sentences for the purpose, intended user, workflow, risks, and fallback plans. A blank line is the clearest way to start a new paragraph.

## Bulleted lists map Java concepts to features

Begin each item with a hyphen and a space. The proposal uses a bulleted list for the Java feature map:

**Markdown source:**

```markdown
## Foundational Java feature map

- Console input/output: display the menu and read the user's choice
- Variables: store the menu choice and current task text
- If/else-if/else: choose which menu action to perform
- Logical operators: check whether a menu choice is within the allowed range
- Loop: repeat the menu until the user chooses Quit
- Methods: separate menu display and task processing into focused actions
- Array: store the task strings for Part 1
```

**Rendered result:**

> ## Foundational Java feature map
>
> - Console input/output: display the menu and read the user's choice
> - Variables: store the menu choice and current task text
> - If/else-if/else: choose which menu action to perform
> - Logical operators: check whether a menu choice is within the allowed range
> - Loop: repeat the menu until the user chooses Quit
> - Methods: separate menu display and task processing into focused actions
> - Array: store the task strings for Part 1

Notice that each item explains what the concept does in the proposed program. Merely listing terms such as “loop” or “array” does not provide enough detail for the proposal rubric.

## Numbered lists show order

Begin each item with a number, a period, and a space. Numbered lists work well for example interactions and ordered workflows:

**Markdown source:**

```markdown
## Three example interactions

1. Input: Add and Read chapter 7; expected result: the task is stored.
2. Input: List; expected result: all stored tasks are displayed.
3. Input: Quit; expected result: a goodbye message appears and the program ends.
```

**Rendered result:**

> ## Three example interactions
>
> 1. Input: Add and Read chapter 7; expected result: the task is stored.
> 2. Input: List; expected result: all stored tasks are displayed.
> 3. Input: Quit; expected result: a goodbye message appears and the program ends.

Use exact input and expected results. At least one example should cover a boundary or invalid-input situation when the assignment requires it.

## Emphasis highlights a small amount of text

Use two asterisks around text to make it bold and one asterisk to make it italic:

**Markdown source:**

```markdown
The **main workflow** must be complete for Part 1.

The editing feature is a *fallback feature* and may be removed if time is limited.
```

**Rendered result:**

> The **main workflow** must be complete for Part 1.
>
> The editing feature is a *fallback feature* and may be removed if time is limited.

Use emphasis sparingly. Headings and lists should provide most of the document's organization. Do not rely only on bold or italics to communicate an important warning or distinction.

## Inline code identifies technical names

Use one backtick on each side of a programming term, class name, method name, or filename:

**Markdown source:**

```markdown
The `showMenu` method displays the choices.

The program starts in `PersonalProjectPart1.java`.

Part 2 stores tasks in an `ArrayList`.
```

**Rendered result:**

> The `showMenu` method displays the choices.
>
> The program starts in `PersonalProjectPart1.java`.
>
> Part 2 stores tasks in an `ArrayList`.

Inline code makes exact technical names easier to distinguish from the surrounding sentence. It does not replace an explanation of what the item does.

## Code blocks can show an interaction

Use three backticks before and after a multi-line example. For the proposal, code blocks are most useful for showing exact console input and output:

**Markdown source:**

````markdown
```text
Choose an action: Add
Enter a task: Read chapter 7
Task added: Read chapter 7
```
````

**Rendered result:**

> ```text
> Choose an action: Add
> Enter a task: Read chapter 7
> Task added: Read chapter 7
> ```

Do not fill the proposal with Java source code. The proposal should explain your design and expected behavior before you build the complete program.

## Links connect readers to useful resources

Put the link text in square brackets and the address in parentheses:

**Markdown source:**

```markdown
Review [Think Java, Chapter 6](https://chrismayfield.github.io/ThinkJava2/ch06.html) for loops and methods.
```

**Rendered result:**

> Review [Think Java, Chapter 6](https://chrismayfield.github.io/ThinkJava2/ch06.html) for loops and methods.

Use descriptive link text that tells the reader where the link goes. Avoid vague text such as “click here.”

## Tables are optional

The proposal template uses lists, and keeping that structure is usually simplest. A table can be useful when you need to compare short, consistent items such as a project schedule:

**Markdown source:**

```markdown
| Time period | Planned result |
|---|---|
| Weeks 8-9 | Complete the menu and basic task storage |
| Week 10 | Test and present the Part 1 prototype |
| Weeks 11-14 | Add and test one Part 2 improvement at a time |
| Week 15 | Complete integration, documentation, and presentation |
```

**Rendered result:**

> | Time period | Planned result |
> |---|---|
> | Weeks 8-9 | Complete the menu and basic task storage |
> | Week 10 | Test and present the Part 1 prototype |
> | Weeks 11-14 | Add and test one Part 2 improvement at a time |
> | Week 15 | Complete integration, documentation, and presentation |

Keep table cells concise. Use the first row for meaningful column headings. If a table becomes difficult to read, use a list instead.

## Accessibility matters in Markdown too

Clear Markdown helps more readers, including people who navigate with a keyboard, magnify the page, or use a screen reader.

- Use headings in a logical order without skipping levels.
- Use real lists instead of typing hyphens or numbers into a paragraph inconsistently.
- Write descriptive link text.
- Give every table a clear header row.
- If you add an image, provide a short description of its important content in the square brackets.
- Do not use bold, italics, color, or position as the only way to communicate meaning.
- Prefer short paragraphs and direct sentences.

An accessible image would be written like this:

**Markdown source:**

```markdown
![Flowchart showing the Add, List, and Quit menu choices](project-menu-flowchart.png)
```

**Rendered result:**

> When `project-menu-flowchart.png` is available beside the Markdown file, the viewer displays the image. A screen reader announces “Flowchart showing the Add, List, and Quit menu choices” in place of or alongside the visual content, depending on the reader's settings.

Only include images that are permitted and useful to the proposal.

## Common mistakes to avoid

- Leaving `TODO` text in the submitted proposal.
- Removing a required proposal heading.
- Writing the entire proposal as one long paragraph.
- Listing Java concepts without explaining their jobs in the program.
- Forgetting the space after a heading symbol or list marker.
- Using a filename that does not end in `.md`.
- Pasting formatted text from another application without checking the Markdown source and rendered result.
- Using vague links or images without descriptions.
- Submitting examples that do not include exact expected results.

## Proposal Markdown checklist

Before submitting, confirm that:

- The file opens as readable plain text.
- The document has one title and all required section headings.
- Every `TODO` has been replaced.
- The purpose identifies a specific user and problem.
- The Part 1 workflow has a clear beginning, middle, and end.
- Every required Java concept maps to a concrete project feature.
- The three interactions include exact input and expected results.
- The expected files and timeline are complete.
- At least two risks include realistic fallback plans.
- Technical names and filenames use inline code consistently.
- Lists and links render correctly.
- The rendered preview is easy to scan and understand.

Markdown becomes comfortable through use. Start with the proposal template, make one section clear at a time, and check both the plain-text source and rendered result before submitting.
