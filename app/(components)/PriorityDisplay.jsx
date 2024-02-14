import { Fire } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function PriorityDisplay({priority = 1}) {
  return (
    <div className='flex gap-1'>
      <Fire size={16} className='text-red-500' weight={priority >= 1 ? "fill" : "light"} />
      <Fire size={16} className='text-red-500' weight={priority >= 2 ? "fill" : "light"} />
      <Fire size={16} className='text-red-500' weight={priority >= 3 ? "fill" : "light"} />
      <Fire size={16} className='text-red-500' weight={priority >= 4 ? "fill" : "light"} />
      <Fire size={16} className='text-red-500' weight={priority >= 5 ? "fill" : "light"} />
    </div>
  )
}
