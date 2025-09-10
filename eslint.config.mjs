// @ts-check

import prettier from 'eslint-plugin-prettier/recommended'
import { globalIgnores } from 'eslint/config'




const eslintConfig = [
	globalIgnores(['node_modules/**',
			'.next/**',
			'next-env.d.ts','eslint.config.mjs']),
	prettier,
]

export default eslintConfig
