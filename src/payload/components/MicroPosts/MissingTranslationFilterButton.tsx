'use client'

import { Button, toast } from '@payloadcms/ui'
import { useActionState, useEffect, useTransition } from 'react'
import {
	type CountsByLocaleResponse,
	getCountsOfNonTranslatedPostsByLocale,
} from 'src/payload/workflows/getCountOfNonTranslatedPosts'
import runCrons, { type RunCronsResult } from './runCrons'

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
	const [runCronsState, runCronsAction, isRunningCrons] = useActionState<RunCronsResult | undefined>(
		runCrons,
		undefined,
	)

	const [isPending, startTransition] = useTransition()

	useEffect(() => {
		startTransition(() => {
			fetchCounts()
		})
	}, [fetchCounts])

	useEffect(() => {
		if (runCronsState === undefined) {
			return
		}

		if (!runCronsState.ok) {
			toast.error(runCronsState.error)
			return
		}

		if (runCronsState.noJobsRemaining === true || runCronsState.remainingJobsFromQueried === 0) {
			toast.success('Cron run finished. No retryable jobs remaining.')
			return
		}

		toast.success(`Cron run finished. ${runCronsState.remainingJobsFromQueried} retryable job(s) still remaining.`)
	}, [runCronsState])

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
			<Button
				type="button"
				disabled={isRunningCrons}
				onClick={() => {
					void runCronsAction()
				}}
			>
				{isRunningCrons ? 'Running CRON…' : 'Enforce CRON now'}
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
