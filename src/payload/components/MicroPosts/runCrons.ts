'use server'
import config from '@payload-config'
import { getPayload } from 'payload'

const runCrons = async () => {
	;(await getPayload({ config })).jobs.run()
}
export default runCrons
