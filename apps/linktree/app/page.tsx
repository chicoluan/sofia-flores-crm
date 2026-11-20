import Image from 'next/image'
import MenuLinks from '../components/MenuLinks'
import { AnimatedLogo } from '@sofiaflores/ui/motion/AnimatedLogo'

export default function Page() {
  return (
    <section className='relative isolate flex min-h-screen flex-col overflow-hidden'>
      {/* Noise Texture */}
      <div className='pointer-events-none absolute inset-0 z-0 bg-noise opacity-10' />

      {/* Image Background */}
      <div className='pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center'>
        <Image
          className='h-100 w-[85%] object-contain'
          width={250}
          height={420}
          priority
          alt=''
          src='/assets/hands-flowers.svg'
        />
      </div>

      {/* Logo */}
      <div className='flex items-center justify-center pt-24'>
        <div className='flex-items-center justify-center px-20 py-10'>
          <AnimatedLogo className='w-64' />
        </div>
      </div>

      {/* Menu Links */}
      <MenuLinks />
    </section>
  )
}
