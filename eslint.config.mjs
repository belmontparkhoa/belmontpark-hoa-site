import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import markdown from "@eslint/markdown"


const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    '.open-next/**',
    '.content-collections/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    ]),
    {
		files: ["**/*.md"],
		plugins: {
			markdown,
		},
		extends: ["markdown/recommended"],
	},
])

export default eslintConfig