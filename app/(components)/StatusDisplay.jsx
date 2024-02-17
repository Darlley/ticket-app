import clsx from 'clsx'
import React from 'react'

export default function StatusDisplay({status}) {
  return (
    <span 
      className={
        clsx(
          "inline-block rounded-full px-1.5 py-1 text-xs font-semibold shadow-xl",
          status === 'not started' && 'text-yellow-400 bg-yellow-900', 
          status === 'started' && 'text-blue-400 bg-blue-900', 
          status === 'done' && 'text-green-400 bg-green-900'
        )
      }
    >
      {status}
    </span>
  )
}
