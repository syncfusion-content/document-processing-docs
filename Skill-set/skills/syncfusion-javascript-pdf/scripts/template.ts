// Mode 2 execution template (TypeScript, run with `tsx`).
// Copy to scripts/temp-<timestamp>.ts, replace the buildDocument() body, run, then delete the copy.
//
// Usage: tsx temp-<timestamp>.ts --output <file.pdf> [--input <file.pdf>] [--force]
import * as fs from 'node:fs';
import * as path from 'node:path';
import { registerLicense } from '@syncfusion/ej2-base';
import { PdfDocument } from '@syncfusion/ej2-pdf';

interface CliOptions { input?: string; output: string; force: boolean; }

function parseArgs(argv: string[]): CliOptions {
  let input: string | undefined;
  let output: string | undefined;
  let force = false;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--input') { input = argv[++i]; }
    else if (arg === '--output') { output = argv[++i]; }
    else if (arg === '--force') { force = true; }
    else { throw new Error(`Unknown argument: ${arg}`); }
  }
  if (!output) { throw new Error('Missing required --output <file.pdf>'); }
  return { input, output, force };
}

// Resolve against the current working directory and keep the path inside it.
function resolveSafePath(p: string, label: string): string {
  if (p.includes('\0')) { throw new Error(`${label}: invalid path`); }
  const cwd = process.cwd();
  const resolved = path.resolve(cwd, p);
  const rel = path.relative(cwd, resolved);
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    throw new Error(`${label}: path must be inside the working directory`);
  }
  if (path.extname(resolved).toLowerCase() !== '.pdf') {
    throw new Error(`${label}: must end with .pdf`);
  }
  return resolved;
}

function registerSyncfusionLicense(): void {
  let key = process.env.SYNCFUSION_LICENSE_KEY?.trim();
  const licenseFile = path.join(process.cwd(), 'SyncfusionLicense.txt');
  if (!key && fs.existsSync(licenseFile)) { key = fs.readFileSync(licenseFile, 'utf8').trim(); }
  if (key) { registerLicense(key); }
}

// *** REPLACE THIS BODY WITH THE REQUESTED OPERATION ***
// Host-neutral: takes the input bytes (only when the user supplied a PDF) and returns the document.
// Use only @syncfusion/ej2-pdf APIs here so the same body also works in a browser (see
// references/browser-and-node-io.md). Only main() below touches `fs`.
function buildDocument(inputBytes?: Uint8Array): PdfDocument {
  const document = inputBytes ? new PdfDocument(inputBytes) : new PdfDocument();
  if (!inputBytes) { document.addPage(); }
  return document;
}

async function main(): Promise<void> {
  const opts = parseArgs(process.argv.slice(2));
  const output = resolveSafePath(opts.output, 'output');
  const userInput = opts.input ? resolveSafePath(opts.input, 'input') : undefined;
  if (userInput && !fs.existsSync(userInput)) { throw new Error('input: file not found'); }
  if (userInput && path.resolve(userInput) === output) {
    throw new Error('output must differ from input; the input PDF is never overwritten');
  }
  if (fs.existsSync(output) && !opts.force) {
    throw new Error('output already exists; pass --force only if overwriting was requested');
  }

  registerSyncfusionLicense();
  // An input PDF is read only when the user supplied one; creating a new document needs none.
  const document = buildDocument(userInput ? new Uint8Array(fs.readFileSync(userInput)) : undefined);
  const bytes = document.save();
  document.destroy();
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, bytes);

  if (!fs.existsSync(output) || fs.statSync(output).size === 0) {
    throw new Error('output file was not created or is empty');
  }
  console.log(`SUCCESS: ${path.relative(process.cwd(), output)}`);
}

// @syncfusion/ej2-pdf keeps the event loop alive after save(); exit explicitly.
main().then(() => process.exit(0)).catch((err: unknown) => {
  console.error(`ERROR: ${err instanceof Error ? err.message : String(err)}`);
  process.exit(1);
});
