import { cn } from '@shadcn/lib/utils'
import {
	ArrowRightIcon,
	ArrowUpRightIcon,
	BookHeartIcon,
	CodeXmlIcon,
	FolderKanbanIcon,
	LibraryBigIcon,
	MapIcon,
	NotebookTextIcon,
	SwordsIcon,
} from 'lucide-react'
import type { Metadata } from 'next'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { CSSProperties, FunctionComponent, ReactNode } from 'react'
import generateAlternatesMeta from '@/i18n/generateAlternatesMeta'
import type PagePropsWithLocale from '@/i18n/PagePropsWithLocale'
import { routing } from '@/i18n/routing'
import getDomain from '../../src/config/getDomain'
import BlogPostsBoard from '../../src/content/Boards/BlogPostsBoard'
import GamesBoard from '../../src/content/Boards/GamesBoard'
import OpenSourceBoard from '../../src/content/Boards/OpenSourceBoard'
import SelfHostingBoard from '../../src/content/Boards/SelfHostingBoard'
import ToolsBoard from '../../src/content/Boards/ToolsBoard'
import WebsiteJSONLD from '../../src/content/LdJson/OrganizationJsonLd'
import getUrl from '../../src/linking/getUrl'
import LabActionLink from '../../src/ui/lab/LabActionLink'
import LabPill from '../../src/ui/lab/LabPill'
import LabSectionNavigator from '../../src/ui/lab/LabSectionNavigator'
import LabSurface from '../../src/ui/lab/LabSurface'
import { labEyebrowClassName, labMonoStyle, labMutedTextClassName } from '../../src/ui/lab/theme'

const decorativeLines = [
	{ top: '11%', left: '20%', width: '28rem', rotate: '8deg' },
	{ top: '32%', right: '10%', width: '18rem', rotate: '-28deg' },
	{ top: '56%', left: '24%', width: '22rem', rotate: '-10deg' },
	{ bottom: '18%', right: '14%', width: '24rem', rotate: '18deg' },
	{ bottom: '10%', left: '12%', width: '30rem', rotate: '-6deg' },
]

const generateMetadata = async ({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> => {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: 'Metadata.Root' })
	return {
		alternates: generateAlternatesMeta('', locale),
		description: t('desc'),
		title: t('title'),
		openGraph: {
			title: t('title'),
			description: t('openGraphDesc'),
			url: getUrl('/', locale).toString(),
		},
	}
}
export { generateMetadata }

interface RailLink {
	href: string
	label: string
}

interface LaneCard {
	accent: 'cyan' | 'orange'
	count: string
	description: string
	href: string
	icon: ReactNode
	title: string
}

const SectionShell: FunctionComponent<{
	accent?: 'cyan' | 'orange'
	children: ReactNode
	eyebrow: string
	id: string
}> = ({ accent = 'cyan', children, eyebrow, id }) => (
	<section id={id} className="scroll-mt-32 lg:scroll-mt-24">
		<p style={labMonoStyle} className={cn('mb-4', labEyebrowClassName)}>
			{eyebrow}
		</p>
		<LabSurface accent={accent} tone="card">
			<div className="p-4 sm:p-6">{children}</div>
		</LabSurface>
	</section>
)

const lineStyle = (line: (typeof decorativeLines)[number]): CSSProperties => {
	const { rotate, ...position } = line
	return {
		...position,
		background: 'linear-gradient(90deg, transparent, rgba(37, 145, 214, 0.45), transparent)',
		boxShadow: '0 0 20px rgba(44, 188, 243, 0.18)',
		transform: `rotate(${rotate})`,
	}
}

const RootPage: FunctionComponent<PagePropsWithLocale> = async ({ params }) => {
	const { locale } = await params
	const [tLanding, tFooter, tBlog, tBlogBoard, tGames, tMeta, tOpenSource, tSelfHost, tTools] = await Promise.all([
		getTranslations({ locale, namespace: 'LandingPage' }),
		getTranslations({ locale, namespace: 'Footer' }),
		getTranslations({ locale, namespace: 'Blog' }),
		getTranslations({ locale, namespace: 'BlogBoard' }),
		getTranslations({ locale, namespace: 'GamesBoard' }),
		getTranslations({ locale, namespace: 'Metadata.Root' }),
		getTranslations({ locale, namespace: 'OpenSource' }),
		getTranslations({ locale, namespace: 'SelfHostList' }),
		getTranslations({ locale, namespace: 'ToolsBoard' }),
	])

	const railLinks: RailLink[] = [
		{ href: '#dock', label: tLanding('nav.dock') },
		{ href: '#departments', label: tLanding('nav.departments') },
		{ href: '#games', label: tLanding('nav.games') },
		{ href: '#utilities', label: tLanding('nav.utilities') },
		{ href: '#systems', label: tLanding('nav.systems') },
		{ href: '#journal', label: tLanding('nav.journal') },
		{ href: '#contact', label: tLanding('nav.contact') },
	]

	const laneCards: LaneCard[] = [
		{
			accent: 'cyan',
			count: '01',
			description: tGames('desc'),
			href: '/browser-games',
			icon: <SwordsIcon className="size-5" />,
			title: tGames('title'),
		},
		{
			accent: 'orange',
			count: '04',
			description: tTools('UtilitiesDesc'),
			href: '/utilities',
			icon: <FolderKanbanIcon className="size-5" />,
			title: tTools('Utilities'),
		},
		{
			accent: 'cyan',
			count: '04',
			description: tOpenSource('desc'),
			href: 'https://github.com/RevoTale',
			icon: <CodeXmlIcon className="size-5" />,
			title: tOpenSource('title'),
		},
		{
			accent: 'orange',
			count: '03',
			description: tSelfHost('desc'),
			href: '/homelab',
			icon: <BookHeartIcon className="size-5" />,
			title: tSelfHost('title'),
		},
		{
			accent: 'cyan',
			count: '01',
			description: tBlogBoard('desc'),
			href: '/blog',
			icon: <LibraryBigIcon className="size-5" />,
			title: tBlogBoard('title'),
		},
	]

	const heroEyebrow = laneCards.map(({ title }) => title).join(' / ')
	const signalText = laneCards.map(({ title }) => title).join(' / ')
	const navAriaLabel = tLanding('departments.title')

	return (
		<>
			<WebsiteJSONLD rootUrl={getDomain()} />
			<LabSurface accent="none" tone="panel" className="isolate overflow-hidden rounded-[2.5rem] py-2">
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0"
					style={{
						backgroundImage:
							'linear-gradient(135deg, rgba(255,255,255,0.82), transparent 34%), linear-gradient(180deg, rgba(44,188,243,0.08), transparent 24%), linear-gradient(180deg, transparent 74%, rgba(22,35,44,0.04))',
					}}
				/>
				<div
					aria-hidden
					className="pointer-events-none absolute inset-0 hidden dark:block"
					style={{
						backgroundImage:
							'linear-gradient(135deg, rgba(255,255,255,0.05), transparent 34%), linear-gradient(180deg, rgba(44,188,243,0.12), transparent 24%), linear-gradient(180deg, transparent 74%, rgba(255,255,255,0.05))',
					}}
				/>
				<div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
					{decorativeLines.map(line => (
						<span
							key={`${line.top ?? line.bottom}-${line.left ?? line.right}-${line.rotate}`}
							className="absolute block h-[2px] rounded-full"
							style={lineStyle(line)}
						>
							<span className="absolute left-0 top-1/2 size-[10px] -translate-y-1/2 rounded-full border-2 border-cyan-400/45 bg-white shadow-[0_0_18px_rgba(44,188,243,0.2)] dark:bg-slate-950" />
							<span className="absolute right-0 top-1/2 size-[10px] -translate-y-1/2 rounded-full border-2 border-cyan-400/45 bg-white shadow-[0_0_18px_rgba(44,188,243,0.2)] dark:bg-slate-950" />
						</span>
					))}
				</div>

				<div className="relative w-full px-2 lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-4 lg:px-3">
					<aside className="hidden self-start lg:sticky lg:top-6 lg:block">
						<div className="space-y-4 px-2 py-3 lg:px-1">
							<LabSurface accent="cyan" tone="card">
								<div className="p-5">
									<p style={labMonoStyle} className={labEyebrowClassName}>
										{tMeta('classification')}
									</p>
									<h2 className="mt-3 text-[2rem] font-semibold tracking-[0.08em]">RevoTale</h2>
									<p className={cn('mt-3 text-sm leading-6', labMutedTextClassName)}>{tLanding('hero.description')}</p>
								</div>
							</LabSurface>

							<LabSectionNavigator ariaLabel={navAriaLabel} links={railLinks} variant="desktop" />

							<LabSurface accent="orange" tone="card">
								<div className="p-5">
									<p style={labMonoStyle} className={labEyebrowClassName}>
										{tLanding('status.signalLabel')}
									</p>
									<p className={cn('mt-3 text-sm leading-6', labMutedTextClassName)}>{signalText}</p>
								</div>
							</LabSurface>
						</div>
					</aside>

					<div className="space-y-4 px-2 py-3 lg:px-1">
						<LabSectionNavigator ariaLabel={navAriaLabel} links={railLinks} variant="mobile" />

						<section id="dock" className="scroll-mt-32 lg:scroll-mt-24">
							<div className="grid gap-4 xl:grid-cols-[minmax(0,1.5fr)_minmax(20rem,0.95fr)]">
								<LabSurface accent="cyan" tone="panel">
									<div
										aria-hidden
										className="absolute bottom-8 right-8 size-36 rounded-full border-[18px] border-slate-900/6 shadow-[inset_0_0_0_8px_rgba(44,188,243,0.14),inset_0_0_30px_rgba(44,188,243,0.08)] dark:border-white/10 sm:size-44 sm:border-[22px]"
									/>
									<div className="relative p-6 sm:p-8 lg:p-10">
										<p style={labMonoStyle} className={labEyebrowClassName}>
											{heroEyebrow}
										</p>
										<h1 className="mt-5 max-w-[10ch] text-5xl font-semibold leading-none tracking-[-0.05em] sm:text-6xl xl:text-[6.5rem]">
											{tLanding('hero.title')}
										</h1>
										<p className={cn('mt-5 max-w-3xl text-base leading-8 sm:text-lg', labMutedTextClassName)}>
											{tLanding('hero.description')}
										</p>
										<LabSurface
											accent="orange"
											tone="soft"
											className="mt-5 max-w-2xl border-cyan-300/35 bg-cyan-50/70 dark:border-cyan-400/20 dark:bg-cyan-400/10"
										>
											<p className="px-4 py-4 text-sm leading-7 text-slate-700 dark:text-slate-200">
												{tLanding('hero.note')}
											</p>
										</LabSurface>
										<div className="mt-6 flex flex-wrap gap-3">
											<LabActionLink locale={locale} href="/navigation-map" size="lg" variant="solid">
												{tFooter('OpenNavMapButton')}
												<ArrowRightIcon />
											</LabActionLink>
											<LabActionLink locale={locale} href="/blog/notes" size="lg" variant="outline">
												{tBlog('go_to_notes')}
												<ArrowUpRightIcon />
											</LabActionLink>
										</div>
										<div className="mt-6 flex flex-wrap gap-2">
											{laneCards.map(card => (
												<LabPill key={card.title}>
													{card.count} {card.title}
												</LabPill>
											))}
										</div>
									</div>
								</LabSurface>

								<LabSurface accent="orange" tone="panel">
									<div
										aria-hidden
										className="absolute -right-8 -top-8 size-40 rounded-full bg-[radial-gradient(circle,rgba(255,154,49,0.18),transparent_70%)]"
									/>
									<div className="relative p-6 sm:p-7">
										<p style={labMonoStyle} className={labEyebrowClassName}>
											{tLanding('status.eyebrow')}
										</p>
										<h2 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-none tracking-[-0.04em]">
											{tLanding('status.title')}
										</h2>
										<p className={cn('mt-4 text-sm leading-7', labMutedTextClassName)}>{tMeta('desc')}</p>
										<div className="mt-6 grid grid-cols-2 gap-3">
											{laneCards.slice(0, 4).map(card => (
												<LabSurface key={card.title} accent={card.accent} tone="soft">
													<div className="p-4">
														<p
															style={labMonoStyle}
															className="text-[0.62rem] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
														>
															{card.title}
														</p>
														<p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{card.count}</p>
													</div>
												</LabSurface>
											))}
										</div>
										<LabSurface accent="cyan" tone="soft" className="mt-3">
											<div className="p-4">
												<p
													style={labMonoStyle}
													className="text-[0.62rem] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
												>
													{tLanding('status.signalLabel')}
												</p>
												<p className={cn('mt-3 text-sm leading-7', labMutedTextClassName)}>{signalText}</p>
											</div>
										</LabSurface>
									</div>
								</LabSurface>
							</div>
						</section>

						<section id="departments" className="scroll-mt-32 lg:scroll-mt-24">
							<div className="mb-5">
								<p style={labMonoStyle} className={labEyebrowClassName}>
									{tLanding('departments.eyebrow')}
								</p>
								<h2 className="mt-3 max-w-[14ch] text-4xl font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
									{tLanding('departments.title')}
								</h2>
								<p className={cn('mt-4 max-w-3xl text-sm leading-7 sm:text-base', labMutedTextClassName)}>
									{tLanding('departments.description')}
								</p>
							</div>
							<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
								{laneCards.map(card => (
									<LabSurface
										key={card.title}
										accent={card.accent}
										tone="card"
										className={cn(
											card.accent === 'orange'
												? 'bg-[linear-gradient(180deg,rgba(255,154,49,0.1),rgba(255,255,255,0.78))] dark:bg-[linear-gradient(180deg,rgba(255,154,49,0.12),rgba(15,23,42,0.86))]'
												: 'bg-[linear-gradient(180deg,rgba(44,188,243,0.08),rgba(255,255,255,0.78))] dark:bg-[linear-gradient(180deg,rgba(44,188,243,0.12),rgba(15,23,42,0.86))]',
										)}
									>
										<div className="p-5">
											<div className="flex items-center justify-between gap-3">
												<span className="grid size-11 place-items-center rounded-full border border-slate-200/80 bg-white/85 text-slate-900 shadow-[0_6px_18px_rgba(41,72,91,0.14)] dark:border-white/12 dark:bg-slate-900/80 dark:text-white">
													{card.icon}
												</span>
												<span
													style={labMonoStyle}
													className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
												>
													{card.count}
												</span>
											</div>
											<h3 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em]">{card.title}</h3>
											<p className={cn('mt-3 text-sm leading-7', labMutedTextClassName)}>{card.description}</p>
											<LabActionLink
												locale={locale}
												href={card.href}
												size="sm"
												variant="text"
												className="mt-6 min-h-0 px-0 py-0 text-sm tracking-[0.04em]"
												external={card.href.startsWith('http')}
												newTab={card.href.startsWith('http')}
											>
												{tLanding('departments.openLane')}
												<ArrowRightIcon />
											</LabActionLink>
										</div>
									</LabSurface>
								))}
							</div>
						</section>

						<SectionShell id="games" eyebrow={tLanding('sectionEyebrows.games')} accent="cyan">
							<GamesBoard priority locale={locale} />
						</SectionShell>

						<SectionShell id="utilities" eyebrow={tLanding('sectionEyebrows.utilities')} accent="orange">
							<ToolsBoard locale={locale} />
						</SectionShell>

						<section id="systems" className="scroll-mt-32 lg:scroll-mt-24">
							<p style={labMonoStyle} className={cn('mb-4', labEyebrowClassName)}>
								{tLanding('sectionEyebrows.systems')}
							</p>
							<div className="grid gap-4 xl:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.95fr)]">
								<LabSurface accent="cyan" tone="card">
									<div className="p-4 sm:p-6">
										<OpenSourceBoard locale={locale} />
									</div>
								</LabSurface>
								<LabSurface accent="orange" tone="card">
									<div className="p-4 sm:p-6">
										<SelfHostingBoard locale={locale} />
									</div>
								</LabSurface>
							</div>
						</section>

						<SectionShell id="journal" eyebrow={tLanding('sectionEyebrows.journal')} accent="cyan">
							<BlogPostsBoard locale={locale} />
						</SectionShell>

						<section id="contact" className="scroll-mt-32 lg:scroll-mt-24">
							<LabSurface accent="orange" tone="panel">
								<div className="grid gap-4 p-6 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(17rem,0.9fr)]">
									<div>
										<p style={labMonoStyle} className={labEyebrowClassName}>
											{tLanding('contact.eyebrow')}
										</p>
										<h2 className="mt-3 max-w-[14ch] text-4xl font-semibold leading-none tracking-[-0.04em] sm:text-5xl">
											{tLanding('contact.title')}
										</h2>
										<p className={cn('mt-4 max-w-2xl text-sm leading-7 sm:text-base', labMutedTextClassName)}>
											{tLanding('contact.description')}
										</p>
										<div className="mt-6 flex flex-wrap gap-3">
											<LabActionLink locale={locale} href="/navigation-map" size="lg" variant="solid">
												<MapIcon />
												{tFooter('OpenNavMapButton')}
											</LabActionLink>
											<LabActionLink locale={locale} href="/utilities" size="lg" variant="outline">
												<FolderKanbanIcon />
												{tTools('Utilities')}
											</LabActionLink>
											<LabActionLink locale={locale} href="/blog/notes" size="lg" variant="outline">
												<NotebookTextIcon />
												{tBlog('go_to_notes')}
											</LabActionLink>
										</div>
									</div>

									<div className="grid gap-3">
										<LabSurface accent="cyan" tone="soft">
											<div className="p-4">
												<p
													style={labMonoStyle}
													className="text-[0.62rem] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
												>
													{tTools('Utilities')}
												</p>
												<p className={cn('mt-3 text-sm leading-7', labMutedTextClassName)}>{tTools('UtilitiesDesc')}</p>
											</div>
										</LabSurface>
										<LabSurface accent="orange" tone="soft">
											<div className="p-4">
												<p
													style={labMonoStyle}
													className="text-[0.62rem] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
												>
													{tBlogBoard('title')}
												</p>
												<p className={cn('mt-3 text-sm leading-7', labMutedTextClassName)}>{tBlogBoard('desc')}</p>
											</div>
										</LabSurface>
										<LabSurface accent="cyan" tone="soft">
											<div className="p-4">
												<p
													style={labMonoStyle}
													className="text-[0.62rem] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400"
												>
													{tOpenSource('title')}
												</p>
												<p className={cn('mt-3 text-sm leading-7', labMutedTextClassName)}>{tOpenSource('desc')}</p>
											</div>
										</LabSurface>
									</div>
								</div>
							</LabSurface>
						</section>
					</div>
				</div>
			</LabSurface>
		</>
	)
}

export async function generateStaticParams(): Promise<Array<{ locale: Locale }>> {
	return routing.locales.map(locale => ({ locale }))
}

// noinspection JSUnusedGlobalSymbols
export default RootPage
