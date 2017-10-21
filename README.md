# What is this?

A place to play with Typescript

#Initialisation

    # install tsc
    npm install typescript --savedev

    # initialise tsc config file
    node_modules/typescript/bin/tsc --init

    # then change outdir and rootDir in tsconfig.json

    # continuous compilation
    node_modules/typescript/bin/tsc -w

    # run the program
    node dist/index.js

    # continuous test runner (generate coverage report too, see coverage folder)
    node_modules/karma/bin/karma start

#TODO

- Why these problems?

    ERROR [compiler.karma-typescript]: test/greeter.spec.ts(4,1): error TS2304: Cannot find name 'describe'.

Watch out, if we add `import {describe} from 'karma';` then it fails miserably! `karma test` won't even start up and the error message is very cryptic!

- why is coverage shown as entire js file and not ts file? ie it says its a ts file but shows the js version

- 