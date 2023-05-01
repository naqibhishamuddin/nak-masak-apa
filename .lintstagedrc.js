const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

const buildPrettierCommand = (filenames) =>
  `prettier --write --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{ts,tsx}": [buildEslintCommand],
  "*.{ts,tsx,css,md,html,json}": [buildPrettierCommand],
};
