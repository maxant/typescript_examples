module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: [
            { pattern: "src/**/*.ts" },
            { pattern: "test/**/*.ts" }
        ],
        preprocessors: {
            "src/**/*.ts": ["karma-typescript", "coverage"],
            "test/**/*.ts": ["karma-typescript"]
        },
        reporters: ["progress", "coverage", "karma-typescript"],
        coverageReporter: { type: 'in-memory' },
        remapCoverageReporter: { html: './coverage' },
        browsers: ["Chrome"],
        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json",
            threshold: {
                global: {
                    statements: 100,
                    branches: 100,
                    functions: 100,
                    lines: 100
                }
            }
        }
    });
};