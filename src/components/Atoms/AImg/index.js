import Image from 'next/image'

export default function AImg({ children, alt, priority = true }) {
  return <Image alt={alt} src={children} priority={priority} />
}
