import esbuild from 'esbuild';
import { sync } from 'glob';

// Define the patterns to ignore
const ignorePatterns = [
  'stories/**/*.stories.js',
  'stories/**/*.data.js',
  'stories/assets/**/*'
];

// Get all JavaScript (and optionally JSX/TS if needed) files except those matching the ignore patterns
const entryFiles = sync('stories/Components/**/*.{js,css}', { ignore: ignorePatterns });

esbuild.build({
  entryPoints: entryFiles,
  outdir: 'lib/stories',
  bundle: false,         // preserve module boundaries like Babel does
  minify: true,          // minify output
  target: 'es2015',      // set your desired ECMAScript target
  loader: { '.js': 'js', '.jsx': 'jsx' },
}).catch(() => process.exit(1));
