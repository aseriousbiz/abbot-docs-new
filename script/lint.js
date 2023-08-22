const path = require("path");
const { globSync } = require("glob");
const markdownlint = require("markdownlint");

const root = path.resolve(__dirname, "..");
const configFile = path.resolve(root, ".markdownlint.json");
const config = markdownlint.readConfigSync(configFile);

// Find markdown files
const files = [
    path.join(root, "README.md"),
    ...(globSync(path.join(root, "src", "**", "*.md"), {
        ignore: "**/node_modules/**",
    })),
]

const results = markdownlint.sync({
    config,
    files,
});

let errors = false;
for (const file in results) {
    const fileResults = results[file];
    for (const result of fileResults) {
        errors = true;
        const rule = result.ruleNames[0];
        const formattedError = `${file}:${result.lineNumber}:${rule}: ${result.ruleDescription} (${result.ruleInformation})`;
        console.error(formattedError);
    }
}

if (errors) {
    console.log("Markdown lint errors found!");
    process.exit(1);
}
else {
    console.log("Markdown lint passed!");
    process.exit(0);
}