'use server'
import config from '@payload-config'
import { getPayload } from 'payload'

export type RunCronsResult =
	| {
			ok: true
			noJobsRemaining?: boolean
			remainingJobsFromQueried: number
	  }
	| {
			error: string
			ok: false
	  }

const runCrons = async (_previousState?: RunCronsResult): Promise<RunCronsResult> => {
	try {
		const payload = await getPayload({ config })
		const result = await payload.jobs.run()

		return {
			ok: true,
			noJobsRemaining: result.noJobsRemaining,
			remainingJobsFromQueried: result.remainingJobsFromQueried,
		}
	} catch (error: unknown) {
		return {
			ok: false,
			error: error instanceof Error ? error.message : 'Failed to run cron jobs.',
		}
	}
}
export default runCrons
