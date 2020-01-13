const fs = require('fs');
const path = require('path');
const sourceMap = require('source-map');

// file output by Webpack, Uglify, etc.
const GENERATED_FILE_NO_BABEL = path.join('./dist-no-babel', 'index.js.map');
const GENERATED_FILE_WITH_BABEL = path.join('./dist-with-babel', 'index.js.map');

// line and column located in your generated file (for example, the source of your error from your minified file)
const GENERATED_LINE_AND_COLUMN = { line: 1, column: 4955 };

const rawSourceMapNoBabel = fs.readFileSync(GENERATED_FILE_NO_BABEL).toString();
const rawSourceMapWithBabel = fs.readFileSync(GENERATED_FILE_WITH_BABEL).toString();

  // should see something like:
  // { source: 'original.js', line: 57, column: 9, name: 'myfunc' }
new sourceMap.SourceMapConsumer(rawSourceMapNoBabel).then(smc => {
  const pos = smc.originalPositionFor(GENERATED_LINE_AND_COLUMN);
  console.log('no-babel position:\n', pos);
});

new sourceMap.SourceMapConsumer(rawSourceMapWithBabel).then(smc => {
  const pos = smc.originalPositionFor(GENERATED_LINE_AND_COLUMN);
  console.log('with-babel position:\n', pos);
});
