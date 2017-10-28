// compile using "./node_modules/.bin/tsc read_xml_out_csv.ts"
// run using node read_xml_out_csv.js
//
// reads XML files (see input1.xml and input2.xml)
// and outputs a file containing csv with the following columns:
//  - file name
//  - servlet name
//  - params...
//
// For a comparison to python, see https://gist.github.com/maxant/88811ccf2d3a31c7687b2fc19d64592f
//
// This program uses `await`, but shows an example of a problem with it, in that the program does not
// appear to actually wait until all files are parsed, before calling `output`. That is why I've introduced
// a promise into the program so that we can call `Promise.all(...)` to force the program to only call `output`
// once all files are actually parsed.  Remove the call to `Promise.all` and see it fail.
// In my opinion this should not happen, because the await on line 48 should cause the `handleFile` function
// to only return once the XML is parsed. What actually happens is that the code after the `await` is executed
// once the `parseXml` function returns. But the code outside of the async funtion executes immediately. To understand
// this better, check the generated Javascript.

const parseString: any = require('xml2js').parseString;
import * as fs from "fs";

const model = {}; // dictionary of dictionaries with filename -> servlet -> parameter key -> parameter value
const params = {}; // all params that are found (mapped to undefined)
const start = Date.now();

// parse files and collect all data
fs.readdir('.', function(err: any, files: any) {
    files = files.filter((file) => {return file.endsWith(".xml"); });
    const allResults = [];
    files.forEach((file) => {
        const p = handleFile(file);
        allResults.push(p);
    });

    //this was NOT waiting until everything was done. "await" is a little crap it appears.
    //so lets work with promises as well
    Promise.all(allResults).then((res) => {
        output(files);
    });
});

async function handleFile(file){
    console.log("parsing file " + file);
    model[file] = {};
    const xml = fs.readFileSync(file);
    const result = await parseXml(xml);

    const servlets = result.config.servlet;
    servlets.forEach((servlet) => {
        let servletName = servlet.name[0];
        model[file][servletName] = {};
        servlet["param-key"].forEach((key, i) => {
            params[key] = undefined;
            model[file][servletName][key] = servlet["param-value"][i];
        });
    });
    return Promise.resolve(); //return a promise so that the caller can wait for all files to be handled
}

function parseXml(xml): Promise<any> {
    return new Promise((resolve, reject) => {
        parseString(xml, (err, result) => {
            if(err) reject(err);
            else resolve(result);
        });
    });
}

function output(files){
    // build header
    let lines = "filename,servlet name,";

    for(let param in params){
        lines += param + ",";
    }
    lines += "\n";

    // build rows
    files.forEach((file) => {
        for(let servlet in model[file]) {
            lines += file + "," + servlet + ",";
            for(let param in params){
                if(model[file][servlet][param]){
                    lines += model[file][servlet][param];
                }
                lines += ","
            }
            lines += "\n"
        }
    });

    // write output
    fs.writeFileSync('output.csv', lines);
    console.log("output written to output.csv in " + (Date.now()-start) + "ms");
}
