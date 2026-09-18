# Changesets

Every pull request that changes what users of `@woldui/react` get should add a changeset:

```bash
pnpm changeset
```

Pick the bump (patch for fixes, minor for new components or props, major for breaking
changes — while the version is 0.x, breaking changes go in a minor) and write one line
for the changelog. The release workflow collects them into a "Version Packages" pull
request; merging that publishes to npm.
