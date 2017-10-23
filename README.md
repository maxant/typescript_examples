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

- maybe just use jasmine-core instead of jasmine, in package.json? need to fully uninstall jasmine first!

## Watch out...

- Watch out, if we add `import {describe} from 'karma';` then it fails miserably! `karma test` won't even start up and the error message is very cryptic!

## Issues

- None at this time

## Fixed Issues

- https://github.com/monounity/karma-typescript/issues/202
