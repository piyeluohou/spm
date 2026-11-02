import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default defineConfig([
  // 1. Global ignores — always first.
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'node_modules/**',
    'public/**',
    '*.config.js',
    '*.config.cjs',
    '*.config.mjs',
  ]),

  // 2. Next.js recommended rules (core-web-vitals + TypeScript).
  ...nextVitals,
  ...nextTs,

  // 3. Plugin setup for Prettier integration.
  {
    plugins: { prettier: eslintPluginPrettier },
    rules: {
      // Report Prettier style violations as warnings.
      'prettier/prettier': 'warn',
    },
  },

  // 4. Turn off rules that conflict with Prettier — MUST be last.
  eslintConfigPrettier,
]);
