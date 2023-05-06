## Git Commit Message Guidelines

#### TL;DR:

To easily commit your code using the standard method, simply run the command below in your terminal.

```bash
pnpm run commit
```

#### Examples

```js
/^(feat: )?(feat|fix|docs|style|refactor|perf|test|build|ci|chore)(\(.+\))?!?: .{1,50}/;
```

```
feat(api): add new endpoint for user registration
fix(ui): correct styling issues on login page
refactor(database): optimize queries for faster performance
test(unit): add unit tests for authentication service
docs(readme): update installation instructions
chore(build): upgrade dependencies to latest versions
```

### Feature

If the PR adds a new feature, it should begin with feature: , followed by a clear and concise header describing the new feature.

### Scope

The scope should specify the part of the project where the new feature is being added. For example, dev, build, workflow, cli, etc.

### Subject

The description should provide a detailed explanation of the new feature being added, including any use cases and benefits it provides.

- Use imperative mood in present tense, such as "change" instead of "changed" or "changes"
- Avoid capitalizing the first letter of the message
- Do not add a period (.) at the end of the message
- Make the message simple and easy to understand
