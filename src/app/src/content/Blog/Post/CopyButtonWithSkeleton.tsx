'use client'
import type { buttonVariants } from '@shadcn/ui/button'
import type { VariantProps } from 'class-variance-authority'
import { useTranslations } from 'next-intl'
import type { FunctionComponent } from 'react'
import CopyButton from './CopyButton'

type CopyButtonWithSkeletonProps = {
	text: string
	className?: string
	disableText?: boolean
} & VariantProps<typeof buttonVariants>

const CopyButtonWithSkeleton: FunctionComponent<CopyButtonWithSkeletonProps> = ({ ...props }) => {
	const t = useTranslations('copyButton')
	return <CopyButton copyText={t('copy')} copiedText={t('copied')} {...props} />
}
export default CopyButtonWithSkeleton
