import AImg from '@/components/Atoms/AImg'
import Logo from '../../../../public/img/Logo.svg'
import Link from 'next/link'

export default function MLogo() {
  return (
    <Link href='/'>
      <AImg alt='Logotipo Ilo Navarro'>{Logo}</AImg>
    </Link>
  )
}
