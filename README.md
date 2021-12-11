When I'm doing coding interview on CodeSingal with typescript. I really want to use the npm package.
However, CodeSignal doesn't allow us to do that by default. Therefore, if the terminal is provided,
the following steps will make install npm packages work and also run `npm t` will test your code.

npm init # Choose test to be jest
npm i typescript ts-node
npm i jest @types/jest ts-jest --save-dev

Create `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ESNEXT",
    "module": "ESNext",
    "esModuleInterop": true
  }
}
```

Create `jest.config.ts`

```typescript
export default {
  coverageProvider: "v8",
  testMatch: ["**/main.ts"],
  transform: { "^.+\\.ts?$": "ts-jest" },
};
```

run `npm t`
