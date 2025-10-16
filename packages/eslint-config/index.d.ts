import type { Linter } from 'eslint';

declare module '@repo/eslint-config/base' {
  const config: Linter.Config[];
  export default config;
}

declare module '@repo/eslint-config/library' {
  const config: Linter.Config[];
  export default config;
}

declare module '@repo/eslint-config/next' {
  const config: Linter.Config[];
  export default config;
}

declare module '@repo/eslint-config/drizzle' {
  const config: Linter.Config[];
  export default config;
}
