# Test Source Maps (Webpack + Raw Node.js / Babel Node.js)

## Usage

```bash
npm i
npm run build
npm test

# output has wrong position in with-babel version
no-babel position:
 { source: 'webpack:///src/no-babel/foo/bar.js',
  line: 2,
  column: 14,
  name: null }
with-babel position:
 { source: 'webpack:///src/with-babel/index.js',
  line: 5,
  column: 6,
  name: 'doSmth' }
```

---
