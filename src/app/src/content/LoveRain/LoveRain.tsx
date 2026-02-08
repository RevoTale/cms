'use client'

import type {FC} from 'react'
import {useEffect, useRef} from 'react'
import styles from './LoveRain.module.css'

const HEART_WIDTH = 300
const DROP_INTERVAL_MS = 50
const DROP_LIFETIME_MS = 5000
const MIN_ANIMATION_DURATION = 1
const ANIMATION_VARIANCE = 0.5

const dropClassName = styles.drop ?? 'drop'

const LoveRain: FC = () => {
	const heartRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const heart = heartRef.current
		if (!heart) {
			return
		}

		const timeouts: number[] = []

		const spawnDrop = (): void => {
			if (!heart.isConnected) {
				return
			}

			const drop = document.createElement('div')
			drop.classList.add(dropClassName)

			const left = Math.floor(Math.random() * HEART_WIDTH)
			const duration =
				MIN_ANIMATION_DURATION + Math.random() * ANIMATION_VARIANCE

			drop.style.left = `${left}px`
			drop.style.animationDuration = `${duration}s`

			heart.appendChild(drop)

			const timeout = window.setTimeout(() => {
				drop.remove()
			}, DROP_LIFETIME_MS)
			timeouts.push(timeout)
		}

		const interval = window.setInterval(spawnDrop, DROP_INTERVAL_MS)

		return () => {
			window.clearInterval(interval)
			timeouts.forEach(window.clearTimeout)
			heart.querySelectorAll(`.${dropClassName}`).forEach(drop => {
				drop.remove()
			})
		}
	}, [])

	return (
		<div className={styles.stage}>
			<div className={styles.container}>
				<div className={styles.heart} ref={heartRef}>
					<div className={styles.heartFix} />
				</div>
			</div>
		</div>
	)
}

export default LoveRain
