module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [(message) => message.length > 100],
};
