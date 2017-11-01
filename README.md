# What is this?

A place to play with Typescript

## read_xml_out_csv.ts

Special case: currently, we're running tests with karma which runs tests in the browser. this file requires the
file system which doesn't work in the browser. So... the file lies outside of the src folder. See its header for
instructions.

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
    rm -rf node_modules && rm -rf coverage && rm -rf dist && rm -f npm-debug.log
    npm install

    # using npm
    npm run clean
    npm install
    npm run test
    npm run dist
    npm run run

## TODO

- change over to mocha so we can test stuff that doesn't exist in browser, like file system
- add more ts stuff

## Watch out...

- Watch out, if we add `import {describe} from 'karma';` then it fails miserably! `karma test` won't even start up and the error message is very cryptic!

## Issues

- None at this time

## Fixed Issues

- https://github.com/monounity/karma-typescript/issues/202

----

# Blog about read_xml_out_csv

Python: ~20ms
Typescript: 40ms
Scala: > 900ms

Scala:
- The XML processing API which allows you to write nice readable code which has standard collection style functions, for
  example the following line which builds a tuple of file model and the servlet node, for each servlet node found in the
  file:

    return XML.loadFile(file) \\ "servlet" map((fileModel, _))

- pattern matching for giving tuples named parameters and dealing with parameter nodes in the XML
- powerful collections library for writing functional code for transforming data
-