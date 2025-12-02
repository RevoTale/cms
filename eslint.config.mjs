// @ts-check

import niceNextjs from 'eslint-config-nice-nextjs';
import prettier from 'eslint-plugin-prettier/recommended';
import { defineConfig, globalIgnores } from 'eslint/config';




const eslintConfig = defineConfig(
	[
	globalIgnores(['node_modules/**',
			'.next/**',
			'next-env.d.ts','eslint.config.mjs','**/importMap.js','src/payload-generated-schema.ts',
			'src/payload-types.ts',
			'src/migrations/**',
      'postcss.config.js',
      "**/@shadcn/ui/**",
		]),
			niceNextjs,

			{
				rules: {
"@typescript-eslint/no-unsafe-assignment": 'off',
"@typescript-eslint/strict-boolean-expressions": 'off',
"@typescript-eslint/prefer-nullish-coalescing": 'off',
"@typescript-eslint/no-unsafe-member-access": 'off',
"@typescript-eslint/no-unsafe-return": 'off',
"@typescript-eslint/no-unsafe-type-assertion":"off",
"@typescript-eslint/prefer-destructuring": "off",
"@typescript-eslint/prefer-optional-chain": "off",
"react/prop-types": "off",
"no-await-in-loop": "off",

      // New global relaxations
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/init-declarations': 'off',
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/no-unnecessary-type-constraint': 'off',
      'eslint-comments/require-description': 'off',
      'eslint-comments/disable-enable-pair': 'off',


      'logical-assignment-operators': 'off',

				}
			},
	prettier,
]
)

export default eslintConfig
