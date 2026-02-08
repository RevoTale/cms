import Image, { type StaticImageData } from 'next/image'
import type { FunctionComponent } from 'react'
import logoImage from './logo.svg'

const Logo: FunctionComponent = () => <Image src={logoImage as StaticImageData} alt="RevoTale Logo" priority />
export default Logo
