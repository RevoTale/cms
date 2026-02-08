import niceNextjs from 'eslint-config-nice-nextjs';
import { defineConfig, globalIgnores } from 'eslint/config';




const eslintConfig = defineConfig(
	[
	{
		linterOptions: {
			reportUnusedDisableDirectives: "off",
		},
	},
	globalIgnores(['node_modules/**',
			'.next/**',
			'next-env.d.ts','next.config.ts','imageLoader.js','eslint.config.ts','codegen.ts','global.ts','**/importMap.js','src/payload-generated-schema.ts',
			'src/payload-types.ts',
			'src/app/src/gql/**',
			'src/app/dictionaries/**/*.d.json.ts',
			'src/migrations/**',
      'postcss.config.js',
      "**/@shadcn/ui/**",
		]),
			...niceNextjs,

			{
				rules: {
"@typescript-eslint/no-unsafe-assignment": 'off',
"@typescript-eslint/strict-boolean-expressions": 'off',
"@typescript-eslint/prefer-nullish-coalescing": 'off',
"@typescript-eslint/no-unsafe-member-access": 'off',
"@typescript-eslint/no-unsafe-return": 'off',
"@typescript-eslint/no-unsafe-call": 'off',
"@typescript-eslint/no-unsafe-argument": 'off',
"@typescript-eslint/no-unnecessary-type-conversion": "off",
"@typescript-eslint/prefer-destructuring": "off",
"@typescript-eslint/no-unsafe-type-assertion":"off",
"@typescript-eslint/prefer-optional-chain": "off",
"react/prop-types": "off",
"no-await-in-loop": "off",
"no-plusplus": "off",
"prefer-template": "off",
"arrow-body-style": "off",
"no-new": "off",
"require-unicode-regexp":"off",
"@typescript-eslint/no-magic-numbers": "off",
"complexity": "off",
"import/enforce-node-protocol-usage": "off",
"prefer-named-capture-group": "off",

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
      'eslint-comments/no-unused-disable': 'off',


      'logical-assignment-operators': 'off',

				}
			},
]
)

export default eslintConfig
