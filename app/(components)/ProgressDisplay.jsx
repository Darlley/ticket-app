import clsx from 'clsx';
import React from 'react';

export default function ProgressDisplay({progress}) {
  return (
    <div className="flex w-full gap-2">
      <label id="p04e-label" htmlFor="p04e" className="order-2 mb-0 text-xs text-center text-gray-400 "><span className="sr-only">uploading</span> {progress}%</label>
      <progress aria-labelledby="p04e-label" id="p04e" max="100" value={progress} className="block w-full overflow-hidden rounded bg-gray-800 [&::-webkit-progress-bar]:bg-gray-800/90 [&::-webkit-progress-value]:bg-gradient-to-l from-blue-400 to-cyan-400 [&::-moz-progress-bar]:bg-blue-500"> 100%</progress>
    </div>
  );
}
