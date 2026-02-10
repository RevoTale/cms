'use client'

import { Button } from '@payloadcms/ui'
import { useActionState, useEffect, useTransition } from 'react'
import {
	type CountsByLocaleResponse,
	getCountsOfNonTranslatedPostsByLocale,
} from 'src/payload/workflows/getCountOfNonTranslatedPosts'
import runCrons from './runCrons'

// Note: Payload v3 exposes programmatic list filtering via useListQuery().handleWhereChange.
// Some setups may also provide useListFilters().setFilter; if present, we call it as well.
// We avoid importing useListFilters directly to prevent type errors when it's not exported.

export default function MissingTranslationFilterButton() {
	const [actionState, fetchCounts] = useActionState<
		| CountsByLocaleResponse
		| {
				error: undefined
				counts: undefined
		  }
	>(getCountsOfNonTranslatedPostsByLocale, {
		error: undefined,
		counts: undefined,
	})

	const [isPending, startTransition] = useTransition()
	useEffect(() => {
		startTransition(() => {
			fetchCounts()
		})
	}, [fetchCounts])

	return (
		<div>
			<Button
				type="button"
				onClick={() => {
					startTransition(() => {
						fetchCounts()
					})
				}}
			>
				{isPending ? 'Loading…' : 'Refresh Missing Translations'}
			</Button>
			<Button type="button" onClick={runCrons}>
				Enforce CRON now
			</Button>

			{actionState?.counts && (
				<div
					style={{
						marginTop: 8,
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
						gap: 8,
					}}
				>
					{actionState.counts.map(({ locale, count }) => (
						<div
							key={locale}
							style={{
								padding: '6px 10px',
								border: '1px solid var(--theme-elevation-150)',
								borderRadius: 6,
								background: 'var(--theme-elevation-50)',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								fontSize: 12,
							}}
							title={count === 0 ? 'All translated' : `${count} missing`}
						>
							<span>{locale}</span>
							<span>{count === 0 ? '✅' : count}</span>
						</div>
					))}
				</div>
			)}

			<div style={{ color: 'red' }}>{actionState.error}</div>
		</div>
	)
}
