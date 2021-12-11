When I'm doing coding interview on CodeSingal with typescript. I really want to use the npm package.
However, CodeSignal doesn't allow us to do that by default. Therefore, if the terminal is provided,
the following steps will make install npm packages work and also run `npm t` will test your code.


1. `npm init # Choose test to be jest`
2. `npm i typescript ts-node`
3. `npm i jest @types/jest ts-jest --save-dev`
4. Create `tsconfig.json`
    ```json
    {
      "compilerOptions": {
        "target": "ESNEXT",
        "module": "ESNext",
        "esModuleInterop": true
      }
    }
    ```
5. Create `jest.config.ts`
    ```typescript
    export default {
      coverageProvider: "v8",
      testMatch: ["**/main.ts"],
      transform: { "^.+\\.ts?$": "ts-jest" },
    };
    ```
6. run `npm t`
