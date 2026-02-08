'use client'

import { Button, toast } from '@payloadcms/ui'
import type React from 'react'
import { Fragment, useCallback, useState } from 'react'

const SuccessMessage: React.FC = () => (
	<div>
		Database seeded! You can now{' '}
		<a target="_blank" href="/" rel="noopener">
			visit your website
		</a>
	</div>
)

export const SeedButton: React.FC = () => {
	const [loading, setLoading] = useState(false)
	const [seeded, setSeeded] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const handleClick = useCallback(async (): Promise<void> => {
		if (loading || seeded) return

		setLoading(true)

		try {
			await fetch('/api/seed')
			setSeeded(true)
			toast.success(<SuccessMessage />, { duration: 5000 })
		} catch (err: unknown) {
			setError(typeof err === 'string' || err instanceof Error ? err.toString() : `Unexpected ${typeof err}`)
		}
	}, [loading, seeded])

	let message = ''
	if (loading) message = ' (seeding...)'
	if (seeded) message = ' (done!)'
	if (error) message = ` (error: ${error})`

	return (
		<Fragment>
			<Button
				onClick={e => {
					e.preventDefault()
					void handleClick()
				}}
			>
				Seed your database
			</Button>
			{message}
		</Fragment>
	)
}
