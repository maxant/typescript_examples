async function a(){

    console.log("in a, about to wait for b");

    const result = await b();

    console.log("in a, b finished");

    return result;
}

function b(): Promise<number> {
    console.log("in b");
    return Promise.resolve(1);
}


// //////////////////////
// main entry point:
// //////////////////////

console.log("start");

const n = a();

console.log("finished, result is " + n);


/*
output is:

start
in a, about to wait for b
in b
finished, result is [object Promise]
in a, b finished


not quite what i expected. the reason is that async functions return promises, meaning that the "await" semantics
leak out of the function.  Sure, the caller could also use "await" to wait, although not if it's a non-async function.

Regardless of whether the developer uses "async"/"await" or promises, it results in the developer having to think about
and write boiler plate code to deal with the threading model of the javascript runtime.

Additionally, await doesn't make it possible to execute code in parallel, like you can with Promise.all(...)



*/