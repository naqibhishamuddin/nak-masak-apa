const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")} --write`;

module.exports = {
  "*.{ts,tsx}": [buildEslintCommand],
  "*.{ts,tsx,css,md,html,json}": [buildPrettierCommand],
};
