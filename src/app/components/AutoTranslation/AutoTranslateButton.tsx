'use client'
import { Button, useDocumentInfo } from '@payloadcms/ui'
import type { TypedLocale } from 'payload'
import { type FunctionComponent, useState } from 'react'
import { defaultLocale, locales } from 'src/i18n-config'
import autoTranslateTask, { type Context } from './autoTranslate'

const AutoTranslateButton: FunctionComponent = () => {
	const { id, collectionSlug } = useDocumentInfo()

	const [pendingLocale, setPendingLocale] = useState<string | null>(null)
	const [results, setResults] = useState<
		Array<{
			locale: string
			error: string | null
			context?: Context
		}>
	>([])
	// id will be undefined on the create form
	if (!id || !collectionSlug) {
		return null
	}
	const sourceLocale = defaultLocale
	const allLocales = locales.filter(locale => locale !== sourceLocale)
	const handleSubmit = async (locales: TypedLocale[]) => {
		for (const targetLocale of locales) {
			try {
				setPendingLocale(targetLocale)
				const result = await autoTranslateTask({
					docId: id.toString(),
					collection: collectionSlug,
					targetLocale,
					sourceLocale,
				})
				setPendingLocale(null)
				if (result.ok) {
					setResults(prev => [...prev, { locale: targetLocale, error: null }])
				} else {
					setResults(prev => [...prev, { locale: targetLocale, error: result.error, context: result.context }])
				}
			} catch (error: unknown) {
				setPendingLocale(null)
				setResults(prev => [
					...prev,
					{ locale: targetLocale, error: error instanceof Error ? error.message : 'Unknown error' },
				])
			}
		}
	}
	return (
		<div className="flex flex-col gap-2 max-w-full">
			<Button
				className="my-1"
				onClick={() => {
					void handleSubmit(allLocales)
				}}
				disabled={pendingLocale !== null}
				type="button"
			>
				{pendingLocale === null ? `Auto Translate All from ${sourceLocale}` : `Translating to ${pendingLocale}...`}
			</Button>
			<div className="flex  gap-2 max-w-full flex-wrap ">
				{allLocales.map(locale => (
					<Button
						className="my-1 flex"
						key={locale}
						disabled={pendingLocale === locale}
						onClick={() => {
							void handleSubmit([locale])
						}} type='button'
					>
						To {locale}
					</Button>
				))}
			</div>
			<div>
				{results.map(result => (
					<div key={result.locale} className="flex gap-2">
						<div>{result.locale}: </div>
						{result.error ? (
							<div style={{ color: 'red' }}>
								{result.error} {JSON.stringify(result.context?.data)}
							</div>
						) : (
							<div style={{ color: 'green' }}>translated</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
export default AutoTranslateButton
