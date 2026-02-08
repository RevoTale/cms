import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import type { FunctionComponent } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import { routing } from '@/i18n/routing'
import AboutMeContent from './AboutMeContent'

const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	return {
		alternates: generateAlternatesMeta('/about-me', locale),
		description:
			'Full-Stack Developer since 2018. Specializing in TypeScript, Next.js, React, Go, and PHP. Open for collaboration and communication.',
		title: 'About Me | l-you - Full-Stack Developer',
		openGraph: {
			title: 'l-you - Full-Stack Developer',
			description:
				'Passionate full-stack developer increasing business revenue since 2018. Crafting simple, eye-friendly UI and delivering smooth UX.',
		},
		keywords: [
			'full-stack developer',
			'TypeScript',
			'Next.js',
			'React',
			'Go',
			'PHP',
			'web developer',
			'l-you',
			'RevoTale',
		],
	}
}
export { generateMetadata }

const AboutMePage: FunctionComponent<PagePropsWithLocale> = () => {
	return <AboutMeContent />
}

export async function generateStaticParams(): Promise<Array<{ locale: Locale }>> {
	return routing.locales.map(locale => ({ locale }))
}

export default AboutMePage
