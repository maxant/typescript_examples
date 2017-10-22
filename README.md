# What is this?

A place to play with Typescript

## Initialisation

    # install tsc
    npm install typescript --save-dev

    # initialise tsc config file
    node_modules/typescript/bin/tsc --init

    # then change outdir and rootDir in tsconfig.json

    # continuous compilation
    node_modules/typescript/bin/tsc -w

    # run the program
    node dist/src/index.js

    # continuous test runner (generate coverage report too, see coverage folder)
    node_modules/karma/bin/karma start

    # clean all
    rm -rf node_modules && rm -rf coverage && rm -rf dist
    npm install

    # using npm
    npm run clean
    npm install
    npm run test
    npm run dist
    npm run run

## TODO

- why is coverage throwing errors, even though it actually works?
- maybe just use jasmine-core instead of jasmine, in package.json? need to fully uninstall jasmine first!

## Watch out...

- Even after successful tests, we get errors related to coverage, which can safely be ignored (coverage files are good):

    Error: Could not find source map for: "/w/tullia/typescript_examples/src/data.ts"
        at CoverageTransformer.addFileCoverage (/w/tullia/typescript_examples/node_modules/remap-istanbul/lib/CoverageTransformer.js:148:17)
        at /w/tullia/typescript_examples/node_modules/remap-istanbul/lib/CoverageTransformer.js:268:14


- Why these problems?

    ERROR [compiler.karma-typescript]: test/greeter.spec.ts(4,1): error TS2304: Cannot find name 'describe'.

Watch out, if we add `import {describe} from 'karma';` then it fails miserably! `karma test` won't even start up and the error message is very cryptic!

## Issues

- https://github.com/monounity/karma-typescript/issues/202
- 