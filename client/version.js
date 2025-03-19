import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the package.json from parent directory
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
const version = packageJson.version;

// Create the version.ts file
const versionContent = `export const VERSION = '${version}';`;
fs.writeFileSync(path.join(__dirname, 'src', 'version.ts'), versionContent);

console.log(`Created version.ts with version ${version}`);