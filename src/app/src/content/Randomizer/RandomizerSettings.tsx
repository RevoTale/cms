'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import type { CheckedState } from '@radix-ui/react-checkbox'
import { cn } from '@shadcn/lib/utils'
import { Button } from '@shadcn/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@shadcn/ui/form'
import { Input } from '@shadcn/ui/input'
import { Switch } from '@shadcn/ui/switch'
import { useSearchParams } from 'next/navigation'
import type { FunctionComponent } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { RandomRecordSelector } from '../../linking/map/tools'
export const defaultDuration = 7000
export const RandomizerFormSettings = z.object({
	wheelDuration: z.number().optional(),
	disableWinnerDialog: z.boolean().optional(),
})
interface Props {
	className?: string
	label: string
	description: string
	disableDialogTitle: string
	disableDialogDesc: string
	settingsSave: string
	settingTitle: string
}
const RandomizerSettings: FunctionComponent<Props> = ({
	className,
	label,
	description,
	disableDialogDesc,
	disableDialogTitle,
	settingsSave,
	settingTitle,
}) => {
	const searchParams = useSearchParams()

	const form = useForm({
		resolver: zodResolver(RandomizerFormSettings),
		defaultValues: RandomizerFormSettings.parse(Object.fromEntries(searchParams.entries())),
	})
	return (
		<Form {...form}>
			<form
				action={RandomRecordSelector.href}
				className={cn('max-w-3xl space-y-3 flex flex-col gap-2 rounded-lg border p-5', className)}
				method="GET"
			>
				<h6 className="text-lg font-semibold">{settingTitle}</h6>
				<FormField
					control={form.control}
					name="wheelDuration"
					render={({ field }) => (
						<FormItem>
							<FormLabel>{label}</FormLabel>
							<FormControl>
								<Input type="number" {...field} />
							</FormControl>
							<FormDescription>{description}</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="disableWinnerDialog"
					render={({ field }) => (
						<FormItem className="flex-col flex">
							<FormLabel>{disableDialogTitle}</FormLabel>
							<FormControl className="flex gap-2 flex-row">
								<Switch
									checked={field.value}
									disabled={field.disabled}
									name={field.name}
									onBlur={field.onBlur}
									onCheckedChange={field.onChange as (checked: CheckedState) => void}
									ref={field.ref}
									value={field.value ? '1' : '0'}
								/>
							</FormControl>
							<FormDescription>{disableDialogDesc}</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">{settingsSave}</Button>
			</form>
		</Form>
	)
}
export default RandomizerSettings
