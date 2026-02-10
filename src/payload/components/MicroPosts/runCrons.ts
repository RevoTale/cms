"use server"
import { getPayload } from 'payload';
import config from '@payload-config'

const runCrons = async()=>{
                     (await getPayload({config})).jobs.run()
}
export default runCrons