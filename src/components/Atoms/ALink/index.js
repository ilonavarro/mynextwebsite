import Link from 'next/link'

export default function ALink({ children, href, className }) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
