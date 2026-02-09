import * as addPlugin from '@graphql-codegen/add'
import type { CodegenConfig } from '@graphql-codegen/cli'
import { preset } from '@graphql-codegen/client-preset'
import * as dotenv from 'dotenv'

dotenv.config({
	path: './.env.local',
})

const originalBuildGeneratesSection = preset.buildGeneratesSection
preset.buildGeneratesSection = async (...args: Parameters<typeof originalBuildGeneratesSection>) => {
	const result = originalBuildGeneratesSection(...args)

	if (!Array.isArray(result)) return await result

	result.forEach(({ pluginMap, plugins }) => {
		if ('fragment-masking' in pluginMap) {
			// eslint-disable-next-line no-param-reassign -- modifying existing object
			pluginMap.add = addPlugin
			plugins.push({ add: { content: '/* eslint-disable */' } })
		}
	})

	return result
}
const config: CodegenConfig = {
	overwrite: true,

	generates: {
		'src/app/src/gql/': {
			config: {
				scalars: {
					DateTime: 'string',
				},
				namingConvention: {
					typeNames: 'keep',
					enumValues: 'change-case-all#pascalCase',
				},
			},
			documents: [
				'src/app/**/*.tsx',
				'src/app/**/*.ts',
				'src/**/*.tsx',
				'src/**/*.ts',
				'!src/app/(payload)/**/*',
				'!src/app/src/sea-battle/**/*',
			],
			preset: 'client',
			presetConfig: {
				fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
			},
			schema: [
				{
					'./src/graphql/schema.graphql': {},
				},
			],
			plugins: [
				{
					add: {
						content: '/* eslint-disable */',
					},
				},
			],
			hooks: {
				afterOneFileWrite: ['bunx biome format ./src/app/src/gql --write'],
			},
		},
	},
}

export default config
