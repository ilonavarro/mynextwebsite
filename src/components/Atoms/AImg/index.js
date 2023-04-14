import Image from 'next/image'

export default function AImg({ children, alt }) {
  return <Image alt={alt} src={children} />
}
