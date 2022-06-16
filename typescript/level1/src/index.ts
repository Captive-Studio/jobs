import { fileURLToPath } from 'node:url';
import * as process from 'node:process';

export function main() {
  console.log('Hello World!');
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  // The script was run directly.
  main();
}