import type { Linter } from "eslint";

declare module "@packages/eslint-config/base" {
  const config: Linter.Config[];
  export default config;
}

declare module "@packages/eslint-config/library" {
  const config: Linter.Config[];
  export default config;
}

declare module "@packages/eslint-config/next" {
  const config: Linter.Config[];
  export default config;
}

declare module "@packages/eslint-config/drizzle" {
  const config: Linter.Config[];
  export default config;
}
