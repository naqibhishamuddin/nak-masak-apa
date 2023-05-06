# Nak Masak Apa Contributing Guide 👨🏼‍🍳

Thank you for your interest in contributing to Nak Masak Apa! To ensure a smooth and efficient contribution process, please review the guidelines below before submitting your contributions.

## Repository Setup

Before starting development, it is necessary to fork the Nak Masak Apa repository and clone it to your local machine. Please note that we use [pnpm](https://pnpm.io/) as our package manager for installing and linking dependencies.

To set up the repository, please follow these steps:

1. Run `pnpm i` in the root folder of Nak Masak Apa.
2. Run `pnpm run` dev to launch the project in development mode.
3. Open the [localhost](http://localhost:300) in your browser to access the project.
4. Run `pnpm run build` to build the project.

## Running Tests

1. Run `pnpm run test` to run test for all files
2. Run `pnpm run test [filename]` to run test for specific test file
3. Run `pnpm run coverage` to run the coverage
4. Run `pnpm run open:coverage` to open up coverage report
5. Run `pnpm run test:ui` to open up interactive testing UI

## Pull Request Guidelines

We welcome all contributions that adhere to our guidelines. To submit your contribution, please follow these steps:

- Create a topic branch from the base branch (e.g. main) and merge it back against that branch.

- When adding a new feature:

  - Include an accompanying test case.
  - Provide a clear justification for the feature. It's recommended to open a suggestion issue first and have it approved before working on it.

- When fixing a bug:

  - If you're addressing a specific issue, include (fix #xxxx[,#xxxx]) (#xxxx is the issue ID) in your PR title for better release logs (e.g. fix: update entities encoding/decoding (fix #3899)).

  - Provide a detailed description of the bug in the PR, with a live demo if possible.

- Ensure that your changes pass all tests and meet the quality standards set by SonarQube.

- The PR title must follow the [commit message convention](./.github/commit-convention.md) to generate changelogs automatically.

If you have any questions or concerns, please don't hesitate to reach out to us at [email](mailto:hello@naqibhishamuddin.com). We appreciate your contributions to Nak Masak Apa!
