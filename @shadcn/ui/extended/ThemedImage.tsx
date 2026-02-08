import { cn } from '@shadcn/lib/utils'
import Image, { ImageProps, type StaticImageData } from 'next/image'
 
type Props = Omit<ImageProps, 'src' | 'preload' | 'loading'> & {
  srcLight: string| StaticImageData
  srcDark: string|StaticImageData
  variant:"inline-block"
}
 
const ThemedImage = (props: Props) => {
  const { srcLight, srcDark,className,variant, ...rest } = props
 
  return (
    <>
      <Image {...rest} src={srcLight} className={cn('dark:hidden',variant === 'inline-block'?'inline-block':null,className)} />
      <Image {...rest} src={srcDark} className={cn('hidden',variant === 'inline-block'?'dark:inline-block':null,className)} />
    </>
  )
}
export default ThemedImage