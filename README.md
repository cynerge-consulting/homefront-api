# node template API

## installation

    1. perform: `npm install` in root directory of the node project. 

    2. perform: `npm install -g mocha chai gulp-cli eslint prettier`

## npm run commands

    - `npm run test`: Run mocha tests on `test/mocha.js`

    - `npm run build`: Runs gulp-babel, gulp-minify and gulp-concat. It bundles and minifies all java script files into one 
    javascript file with javascript files `main-min.js` and `main.js` along with the sourcemap files in the `publish` folder.

    - `npm run startDev`: run node with the `src/app.js` javascript file.

    - `npm run startProd`: run the node with the `publish/main-min.js` javascript file.

## Husky hooks

    Husky adds git hooks for things like pre-commit and pre-push, here are the hooks set for this project:

        - **pre-commit**: `lint-staged && npm run test && npm run build`

        - **pre-push**: `npm run test`
