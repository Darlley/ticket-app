import clsx from 'clsx';
import React from 'react';

export default function ProgressDisplay() {
  return (
    <div className='w-full h-2 bg-gray-200 rounded-full'>
      <div className={
        clsx(
          true && 'w-[75%]',
          'bg-blue-600 h-2 rounded-full',
        )
      } />
    </div>
  );
}
