import BoardList from '@revotale/ui/Board/BoardList'
import BoardListItem from '@revotale/ui/Board/BoardListItem'
import Image from 'next/image'
import type { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { FunctionComponent } from 'react'
import LovelyEyeImage from '../images/lovely-eye.png'
import ObsidianTagImage from '../images/obsidian-tag-plugin.png'
import RecaptchaV3Image from '../images/recaptch-v3.png'
import ScrollRestorationImage from '../images/scroll-restoration.png'

const sizes = '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px'

interface Props {
	locale: Locale
}

const OpenSourceList: FunctionComponent<Props> = async ({ locale }) => {
	const [t, tDesc, tSelfHost] = await Promise.all([
		getTranslations({
			locale,
			namespace: 'OpenSource.items.title',
		}),
		getTranslations({
			locale,
			namespace: 'OpenSource.items.desc',
		}),
		getTranslations({
			locale,
			namespace: 'SelfHostList',
		}),
	])

	return (
		<BoardList>
			<BoardListItem
				actionLabel={tSelfHost('githubLink')}
				locale={locale}
				description={tDesc('obsidian_folder_by_tag_dist')}
				external={true}
				href="https://github.com/RevoTale/obsidian-folder-by-tags-distributor"
				image={
					<Image
						alt={t('obsidian_folder_by_tag_dist')}
						sizes={sizes}
						className="h-full w-full object-cover"
						src={ObsidianTagImage}
					/>
				}
				newTab={true}
				title={t('obsidian_folder_by_tag_dist')}
			/>
			<BoardListItem
				actionLabel={tSelfHost('githubLink')}
				locale={locale}
				description={tDesc('lovely_eye')}
				external={true}
				href="https://github.com/RevoTale/lovely-eye"
				image={
					<Image alt={t('lovely_eye')} sizes={sizes} className="h-full w-full object-cover" src={LovelyEyeImage} />
				}
				newTab={true}
				title={t('lovely_eye')}
			/>
			<BoardListItem
				actionLabel={tSelfHost('githubLink')}
				locale={locale}
				description={tDesc.rich('google_recaptcha', {
					important: chunks => <span className="font-semibold text-slate-900 dark:text-white">{chunks}</span>,
				})}
				external={true}
				href="https://github.com/RevoTale/react-grecaptcha-v3"
				image={
					<Image
						alt={t('google_recaptcha')}
						sizes={sizes}
						className="h-full w-full object-cover"
						src={RecaptchaV3Image}
					/>
				}
				newTab={true}
				title={t('google_recaptcha')}
			/>

			<BoardListItem
				actionLabel={tSelfHost('githubLink')}
				locale={locale}
				description={tDesc('nextjs_scroll_restorer')}
				external={true}
				href="https://github.com/RevoTale/next-scroll-restorer"
				image={
					<Image
						alt={t('nextjs_scroll_restorer')}
						sizes={sizes}
						className="h-full w-full object-cover"
						src={ScrollRestorationImage}
					/>
				}
				newTab
				title={t('nextjs_scroll_restorer')}
			/>
		</BoardList>
	)
}

export default OpenSourceList
