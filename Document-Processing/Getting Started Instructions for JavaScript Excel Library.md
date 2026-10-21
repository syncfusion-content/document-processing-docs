Create Getting Started UG pages for the JavaScript Excel Library for the following platforms:

1. JavaScript
2. Angular
3. Vue
4. TypeScript
5. Node.js

## Existing Excel reference

An existing Getting Started page is already available for React:

Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-react.md

Use the React Excel page as the primary reference for:

- Excel document creation workflow
- Excel Library package names
- Installation commands
- Imports and exports
- Excel APIs
- Code examples
- Output file
- Expected behavior
- Excel-specific terminology and writing style

## Existing PDF structure references

Use the following PDF JavaScript Getting Started pages only as references for the corresponding platform-specific documentation structure, prerequisites, project setup, package installation, file organization, commands, headings, formatting, notes, and UG writing style:

- Document-Processing\PDF\PDF-Library\javascript\Create-PDF-document-javascript.md
- Document-Processing\PDF\PDF-Library\javascript\Create-PDF-document-angular.md
- Document-Processing\PDF\PDF-Library\javascript\Create-PDF-document-vue.md
- Document-Processing\PDF\PDF-Library\javascript\Create-PDF-document-typescript.md
- Document-Processing\PDF\PDF-Library\javascript\Create-PDF-document-node-js.md

Use the PDF pages only as structural and formatting references. Do not copy PDF Library packages, imports, classes, methods, APIs, code examples, output formats, or PDF-specific content into the Excel pages.

## Files to create

Create the following new Excel JavaScript Getting Started pages:

- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-javascript.md
- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-angular.md
- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-vue.md
- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-typescript.md
- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-node-js.md

## Initial repository inspection

Before making any changes:

1. Open and inspect the existing React Excel Getting Started page.
2. Open and inspect all five corresponding PDF JavaScript Getting Started pages.
3. Inspect the JavaScript Excel Library source files.
4. Inspect the JavaScript Excel Library package exports and type definitions.
5. Inspect existing JavaScript Excel Library tests and samples, when available.
6. Identify which APIs and output mechanisms are supported in browser environments.
7. Verify whether the JavaScript Excel Library officially supports execution in Node.js.
8. Check the existing documentation conventions used in the same Excel JavaScript documentation folder.

Work directly in the current repository. Do not ask me to provide files that are already available in the repository.

Do not stop after inspecting the files, explaining the required changes, or proposing an implementation. Create and save all five Markdown files at the specified paths.

## Platform-specific mapping

Follow the corresponding PDF JavaScript page for the structure and formatting of each Excel page:

- The JavaScript Excel page must follow the JavaScript PDF page.
- The Angular Excel page must follow the Angular PDF page.
- The Vue Excel page must follow the Vue PDF page.
- The TypeScript Excel page must follow the TypeScript PDF page.
- The Node.js Excel page must follow the Node.js PDF page.

Use the corresponding PDF page only to understand:

- Front matter or metadata
- Page title and description structure
- Heading hierarchy
- Prerequisites
- Project creation steps
- Package installation section
- Project and file organization
- Commands
- Code-block placement
- Notes and warning syntax
- Image placement
- Output section
- UG formatting and writing style

Replace all PDF-specific functionality with verified JavaScript Excel Library functionality.

## Excel API requirements

Use the existing React Excel Getting Started page and the actual JavaScript Excel Library source and API definitions to determine:

- Correct package names
- Correct package installation commands
- Supported imports and exports
- Workbook creation APIs
- Worksheet creation APIs
- Cell value APIs
- Cell formatting APIs
- Excel document saving or exporting APIs
- Supported Excel output formats
- Browser-specific behavior
- Node.js-specific behavior, if supported

Use only APIs that are actually defined and supported in the JavaScript Excel Library.

Do not assume or invent:

- Packages
- Imports
- Exports
- Classes
- Interfaces
- Methods
- Properties
- Enumerations
- Output types
- File-saving mechanisms
- Browser behavior
- Node.js behavior

Verify every Excel API used in the code examples against at least one of the following:

- JavaScript Excel Library source
- Package export definitions
- TypeScript declaration files
- Existing valid React Excel Getting Started page

Do not assume that an API used in the React Excel page works without modification in JavaScript, Angular, Vue, TypeScript, or Node.js. Verify compatibility for each target environment.

If an API or implementation detail cannot be verified, do not include it in the UG page. Report the unverified item separately instead of adding assumed code.

## Content requirements

Adapt the Excel document creation example appropriately for each platform while keeping the final behavior consistent across all five pages.

Each page must contain complete and executable instructions for:

1. Prerequisites
2. Creating the project
3. Installing the JavaScript Excel Library package
4. Adding the required imports
5. Creating a workbook
6. Creating or accessing a worksheet
7. Adding content to worksheet cells
8. Applying formatting only when the required formatting APIs are verified
9. Saving, downloading, or exporting the Excel document
10. Running the application
11. Verifying the generated Excel document
12. Expected output

Ensure that every command, code block, file name, import, and configuration step is appropriate for the target platform.

## JavaScript requirements

For the JavaScript page:

- Follow the structure of the JavaScript PDF Getting Started page.
- Use valid browser-based JavaScript.
- Use only verified JavaScript Excel Library packages and APIs.
- Use the supported browser-based output and download mechanism.
- Do not use TypeScript-only syntax.
- Do not use Angular, React, or Vue-specific code.
- Ensure the package loading and imports match the project setup documented on the page.

## Angular requirements

For the Angular page:

- Follow the structure of the Angular PDF Getting Started page.
- Use a valid Angular project structure.
- Use the appropriate Angular component files.
- Use valid Angular and TypeScript syntax.
- Use only verified JavaScript Excel Library packages and APIs.
- Place the Excel creation code in the correct Angular component or service location.
- Ensure the template event binding and component method names match.
- Ensure all imports and installation commands are valid for the Angular project.

## Vue requirements

For the Vue page:

- Follow the structure of the Vue PDF Getting Started page.
- Use a valid Vue project structure.
- Follow the same Vue version and component style used by the PDF Vue reference page, unless the repository has a newer established convention.
- Use valid Vue and JavaScript or TypeScript syntax, depending on the referenced project setup.
- Use only verified JavaScript Excel Library packages and APIs.
- Ensure the template event binding and component method names match.
- Ensure all imports and installation commands are valid for the Vue project.

## TypeScript requirements

For the TypeScript page:

- Follow the structure of the TypeScript PDF Getting Started page.
- Use valid TypeScript project configuration.
- Use valid TypeScript syntax.
- Use only exported and verified JavaScript Excel Library types and APIs.
- Do not add type names, interfaces, or enumerations that are not present in the library type definitions.
- Ensure the compilation and run commands match the documented project setup.

## Node.js requirements

For the Node.js page, first verify whether the JavaScript Excel Library officially supports execution in a Node.js environment.

Use only Node.js APIs and Excel export mechanisms that are verified through:

- JavaScript Excel Library source
- Package exports
- TypeScript declaration files
- Tests
- Existing Node.js samples
- Existing official repository documentation

Do not use browser objects in Node.js code, including:

- window
- document
- Blob
- URL.createObjectURL
- Browser download helpers
- DOM events or DOM elements

Do not introduce Node.js file-system saving with `fs` unless all the following are verified:

1. The JavaScript Excel Library supports Node.js execution.
2. The Excel Library returns an output type that can be safely written in Node.js.
3. The required output conversion is supported by the library.
4. An existing test, sample, API definition, or source implementation confirms the approach.

Do not add browser polyfills, DOM emulators, or third-party workarounds unless they are already officially used by the JavaScript Excel Library.

If Node.js execution or saving is not supported or cannot be verified:

- Do not invent an implementation.
- Do not create misleading or non-executable sample code.
- Clearly report the limitation.
- Create only content that can be technically verified.
- Explain which required Node.js operation could not be documented.

## Documentation conventions

Preserve the existing repository documentation conventions, including:

- Front matter or metadata
- Page title
- Page description
- Heading hierarchy
- Markdown formatting
- Ordered and unordered lists
- Code-block language identifiers
- Note and warning syntax
- Image and resource path conventions
- Internal links
- External link formatting
- File naming
- Product naming
- Capitalization
- UG tone and writing style

Reuse the structural pattern from the corresponding PDF page, but rewrite all content for the JavaScript Excel Library.

Do not leave copied PDF text that describes PDF creation, PDF pages, PDF graphics, PDF saving, or PDF output.

## Restrictions

Do not modify:

- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-react.md
- Any file under the PDF JavaScript Getting Started pages
- Any unrelated documentation page
- JavaScript Excel Library source code
- Package configuration files unless required for validation and explicitly part of the requested documentation work

Only the following five Markdown files should be created or changed:

- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-javascript.md
- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-angular.md
- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-vue.md
- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-typescript.md
- Document-Processing\Excel\Excel-Library\JavaScript\Create-Excel-document-node-js.md

## Validation

After creating the pages, perform the following validation:

1. Compare each new page with its corresponding PDF JavaScript page and verify structural consistency.
2. Verify that each page contains Excel-specific content rather than copied PDF content.
3. Search all five new Excel pages for PDF-specific package names, imports, classes, APIs, and terminology.
4. Search for PDF-specific terms, including:
   - PDFDocument
   - PdfDocument
   - PdfPage
   - PdfGraphics
   - drawString
   - PDF page
   - Save PDF
   - Create PDF
5. Remove any PDF-specific term unless the term is required for a link or a clearly identified reference.
6. Search the Node.js page for browser-only APIs.
7. Verify every imported Excel symbol against the JavaScript Excel Library exports or type definitions.
8. Verify every method and property used in the examples against the library source, definitions, tests, or samples.
9. Verify that every package installation command uses an existing JavaScript Excel Library package.
10. Verify that all project creation and run commands are valid for the respective platforms.
11. Verify that code blocks use the correct language identifiers.
12. Verify that referenced file names, image paths, output names, and internal links are valid.
13. Verify that the generated output is an Excel document.
14. Check the repository status and confirm that only the five intended files were created or changed.
15. Do not claim that a code sample was built, run, or tested unless the corresponding command was actually executed successfully.
16. If execution is possible in the repository, run the applicable validation, build, or sample commands and report their exact results.
17. If execution is not possible, perform static validation and clearly state that runtime validation was not performed.

## Final review

Before completing the task, confirm that:

- No PDF-specific package remains.
- No PDF-specific import remains.
- No PDF-specific class or method remains.
- No unsupported or assumed Excel API is used.
- All code examples are complete and syntactically valid.
- Each page follows the structure of its corresponding PDF reference page.
- Browser pages use a verified browser-compatible output mechanism.
- The Node.js page does not use browser-only objects.
- The Node.js implementation is included only if Node.js support is verified.
- Package names and installation commands are correct.
- Imports match the actual library exports.
- Output file names use an appropriate Excel extension.
- Only the five intended files were created or changed.

## Completion report

After completing the work, provide:

1. The list of files created.
2. A brief summary of the content added to each file.
3. The JavaScript Excel Library APIs used in each file.
4. The source file, type definition, test, sample, or existing Excel page used to verify each API.
5. The package names and exports used.
6. Any browser-specific limitations identified.
7. Any Node.js-specific limitations identified.
8. Any APIs or implementation details that could not be verified.
9. The validation or build commands executed and their results.
10. Confirmation that no PDF-specific APIs remain.
11. Confirmation that no unsupported or assumed Excel APIs remain.
12. Confirmation that the existing React Excel page and PDF pages were not modified.
13. The final repository status showing the five created or changed files.

Create and save all five UG Markdown pages directly at the specified paths in the current repository. Do not only provide drafts, proposed content, code snippets, analysis, or an implementation plan in the response.

Inspect the existing files, verify the actual JavaScript Excel Library APIs, implement the pages, validate the completed content, and then provide the completion report.