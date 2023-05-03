import ALink from '@/components/Atoms/ALink'

const menuLinks = [
  { url: '/', name: 'Principal' },
  { url: 'curriculo', name: 'Currículo' },
  { url: 'contact', name: 'Contact' }
]

export default function Menu() {
  return (
    <>
      {menuLinks.map((link, index) => (
        <ALink href={link.url} className='menu__item' key={link.name}>
          {link.name}
        </ALink>
      ))}
    </>
  )
}
