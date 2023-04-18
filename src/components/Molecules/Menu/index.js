import ALink from '@/components/Atoms/ALink'
import MLogo from '../MLogo'

const menuLinks = [
  { url: '/', name: 'Principal' },
  { url: 'curriculo', name: 'Currículo' },
  { url: 'contact', name: 'Contact' }
]

console.log(menuLinks[1])

export default function Menu() {
  return (
    <>
      <div className='flex w-screen justify-center items-center pb-3'>
        <MLogo />
      </div>
      <div className='flex justify-between px-4 bg-BlackCoffee'>
        {menuLinks.map((link, index) => (
          <ALink href={link.url} className='menu__item' key={link.name}>
            {link.name}
          </ALink>
        ))}
      </div>
      {/* </div> */}
      <div className='flex justify-between px-4 bg-BlackCoffee'></div>
      {/* <h1 onClick={clicked} className='bg-AuroMetalSaurus'>
        Menu
      </h1> */}
      <ALink href='/portfolio' className='text-red-700 bg-AuroMetalSaurus font-bold'>
        Portfolio
      </ALink>
    </>
  )
}

/*
<ALink href='#' className='menu__item'>
          Principal
        </ALink>
        <a href='#' className='menu__item'>
          Curriculo
        </a>
        <a href='#' className='menu__item'>
          Contact
        </a>
*/
