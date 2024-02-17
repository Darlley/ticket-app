'use client'

import { X } from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function DeleteBlock({id}) {
  const router = useRouter()
  
  async function onDelete() {
    try {
      const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
        method: "DELETE"
      });
  
      if(response.ok){
        return router.refresh()
      }
    } catch (error) {
      console.log('Failed to get tickets ', error);
    }
  }

  return (
    <button className='hover:bg-gray-900/20 p-1 rounded-full active:scale-95 transition-transform' onClick={onDelete}>
      <X size={16} className='text-red-500' />
    </button>
  )
}
