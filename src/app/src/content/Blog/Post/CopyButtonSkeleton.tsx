import {cn} from '@shadcn/lib/utils'
import {Button, type buttonVariants} from '@shadcn/ui/button'
import type {VariantProps} from 'class-variance-authority'
import {CopyIcon} from 'lucide-react'
import type {FunctionComponent} from 'react'
interface Props {
	className?: string
	disableText?: boolean
	copyText: string
}
const CopyButtonSkeleton: FunctionComponent<
	Props & VariantProps<typeof buttonVariants>
> = ({className, disableText = false, variant, copyText}) => {
	return (
		<Button
			aria-label="Copy"
			className={cn(
				'items-center justify-center cursor-pointer has-[>svg]:px-0',
				disableText ? 'has-[>svg]:px-2' : null,
				className
			)}
			size="sm"
			type="button"
			variant={variant}>
			<CopyIcon />
			{disableText ? null : (
				<span className="text-xs text-muted-foreground">
					{copyText}
				</span>
			)}
		</Button>
	)
}
export default CopyButtonSkeleton
