import { Fire } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export default function PriorityDisplay() {
  return (
    <div className='flex gap-1'>
      <Fire size={16} className='text-red-500' />
      <Fire size={16} className='text-red-500' />
      <Fire size={16} className='text-red-500' />
      <Fire size={16} className='text-red-500' />
      <Fire size={16} className='text-red-500' />
    </div>
  )
}
