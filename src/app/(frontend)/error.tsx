'use client'
import NotFoundPage from '@revotale/ui/NotFoundPage'
import type { FunctionComponent } from 'react'

const ErrorPage: FunctionComponent<{ error: Error }> = ({ error }) => {
	return <NotFoundPage p1="Unexpected error" p2={error.message} />
}

// noinspection JSUnusedGlobalSymbols
export default ErrorPage
