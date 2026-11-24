import { Skeleton } from '@sofiaflores/ui/components/skeleton'
import type { JSX } from 'react'

export default function LoadingClients(): JSX.Element {
  return (
    <section className='flex flex-1 flex-col gap-16 overflow-hidden px-10 py-16'>
      <div className='flex items-center justify-between'>
        <Skeleton className='h-10 w-40' />
        <Skeleton className='h-10 w-32 rounded-md' />
      </div>

      {/* Table */}
      <div className='flex flex-col'>
        {/* Table header */}
        <div className='flex items-center gap-6 border-b px-4 py-4'>
          <Skeleton className='h-4 w-4' />
          <Skeleton className='h-4 w-32' />
          <Skeleton className='h-4 w-28' />
          <Skeleton className='h-4 w-36' />
          <Skeleton className='ml-auto h-4 w-4' />
        </div>

        {/* Table rows */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className='flex items-center gap-6 border-b px-4 py-5'
          >
            <Skeleton className='h-4 w-4' />
            <Skeleton className='h-4 w-32' />
            <Skeleton className='h-4 w-28' />
            <Skeleton className='h-4 w-36' />
            <Skeleton className='ml-auto h-8 w-8 rounded-md' />
          </div>
        ))}
      </div>
    </section>
  )
}
