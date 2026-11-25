import { Whatsapp } from '@sofiaflores/ui/components/icon'
import { MapPin, Notebook } from 'lucide-react'
import Link from 'next/link'
import type { JSX } from 'react/jsx-runtime'

export default function MenuLinks(): JSX.Element {
  return (
    <div className='relative z-10 flex flex-col items-center justify-center gap-6'>
      <Link
        href='https://maps.app.goo.gl/UWyYZ5yzarsB85ir8'
        className='flex h-9 w-55 items-center justify-center gap-2 rounded-2xl bg-sidebar-ring px-8 py-2 font-kaftan text-lg text-white capitalize'
      >
        <MapPin className='size-6' />
        <p>Localização</p>
      </Link>

      <Link
        href='https://wa.me/+5588999422780'
        className='flex h-9 w-55 items-center justify-center gap-2 rounded-2xl bg-sidebar-ring px-8 py-2 font-kaftan text-lg text-white capitalize'
      >
        <Whatsapp className='size-6' />
        <p>Whatsapp</p>
      </Link>

      <Link
        href='https://drive.google.com/drive/folders/1xKIyxlJ-zYZBDZzcCcDZMJbicB-78IAf'
        className='flex h-9 w-55 items-center justify-center gap-2 rounded-2xl bg-sidebar-ring px-8 py-2 font-kaftan text-lg text-white capitalize'
      >
        <Notebook className='size-6' />
        <p>Catálogo</p>
      </Link>
    </div>
  )
}
