# Magic Kitchen

Magic Kitchen is a Web App that gives the user a list of different recipe ideas given what the user has input for
ingredients along with any dietary and/or time constraints.

## Getting Started with Development

**Important:**

- Run all the commands from the top level directory.
- Use `npm`, not `yarn`.
- Use `zsh`, not `bash`

### Install Dependencies

You can install the dependencies (including `node 20`) by running:

```zsh
brew bundle
```

Install the `node`-dependencies and the workspaces:

```zsh
npm install
```

### Develop Site in Workspace

To run the site in develop mode:

```zsh
npm run start
```

You make then view Magic Kitchen in the web browser: http://localhost:3000

To test the site with the firebase emulator:

```zsh
npm run build
```

```zsh
firebase emulators:start
```