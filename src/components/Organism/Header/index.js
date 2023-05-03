import MLogo from '@/components/Molecules/MLogo'
import Menu from '@/components/Molecules/Menu'

export default function Header() {
  return (
    <header className='header'>
      <div className='flex w-screen justify-center items-center pb-3'>
        <MLogo />
      </div>
      <div className='flex justify-between px-4 bg-BlackCoffee'>
        <Menu />
      </div>
    </header>
  )
}
