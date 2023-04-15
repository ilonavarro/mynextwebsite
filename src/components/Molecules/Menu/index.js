'use client'

import ALink from '@/components/Atoms/ALink'
import MLogo from '../MLogo'

export default function Menu() {
  function clicked() {
    alert('clicado')
  }
  return (
    <>
      <div className='flex w-screen justify-center items-center pb-3'>
        <MLogo />
      </div>
      <div className='flex justify-between px-4 bg-BlackCoffee'>
        <a href='#' className='menu__item'>
          Principal
        </a>
        <a href='#' className='menu__item'>
          Curriculo
        </a>
        <a href='#' className='menu__item'>
          Contact
        </a>
      </div>
      <h1 onClick={clicked} className='bg-AuroMetalSaurus'>
        Menu
      </h1>
      <ALink href='/portfolio' className='text-red-700 bg-AuroMetalSaurus font-bold'>
        Portfolio
      </ALink>
    </>
  )
}
