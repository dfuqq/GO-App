import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import next from '@next/eslint-plugin-next';

export default [
	{
		ignores: ['node_modules', 'dist', 'build'],
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
			react: react,
			'react-hooks': reactHooks,
			'@next/next': next,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'warn',
			'react/react-in-jsx-scope': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'@next/next/no-html-link-for-pages': 'error',
			// FIXME: go to next/image
			'@next/next/no-img-element': 'off',
			'@next/next/no-document-import-in-page': 'error',
			'@next/next/no-head-import-in-document': 'error',
			'@next/next/no-sync-scripts': 'error',
			'@next/next/no-css-tags': 'error',
			'@next/next/no-page-custom-font': 'error',
			'@next/next/no-styled-jsx-in-document': 'error',
			'@next/next/no-title-in-document-head': 'error',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];
