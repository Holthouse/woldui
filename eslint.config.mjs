import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

/*
 * This package is not a Next app and must not become one, so it lints with the
 * framework-free subset: typescript-eslint and the React hooks rules.
 */
const eslintConfig = defineConfig([
	...tseslint.configs.recommended,
	reactHooks.configs.flat.recommended,

	globalIgnores([
		'dist/**',
		'storybook-static/**',
		// shadcn vendor code: analysed by Knip, but not held to our lint rules.
		'src/components/ui/**',
		// Written by `shadcn add sidebar` and consumed only by src/components/ui/sidebar.tsx.
		'src/hooks/use-mobile.ts'
	])
]);

export default eslintConfig;
