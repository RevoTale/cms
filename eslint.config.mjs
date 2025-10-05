// @ts-check

import niceNextjs from 'eslint-config-nice-nextjs'
import prettier from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'




const eslintConfig = defineConfig(
	[
	globalIgnores(['node_modules/**',
			'.next/**',
			'next-env.d.ts','eslint.config.mjs']),
			niceNextjs,
	prettier,
]
)

export default eslintConfig
