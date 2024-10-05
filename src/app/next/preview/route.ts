import jwt from 'jsonwebtoken'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

const payloadToken = 'payload-token'

export async function GET(
  req: Request & {
    cookies: {
      get: (name: string) => {
        value: string
      }
    }
  },
): Promise<Response> {
  const token = req.cookies.get(payloadToken)?.value
  const { searchParams } = new URL(req.url)
  const path = searchParams.get('path')

  if (!path) {
    return new Response('No path provided', { status: 404 })
  }

  if (!token) {
    new Response('You are not allowed to preview this page', { status: 403 })
  }
  const user = jwt.decode(token )

  if (!user) {
   ( await draftMode()).disable()
    return new Response('You are not allowed to preview this page', { status: 403 })
  }
  jwt.verify(token,process.env.PAYLOAD_SECRET??'');

  (await draftMode()).enable()
  redirect(path)
}
