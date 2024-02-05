"use client"
import { HouseSimple, Ticket } from '@phosphor-icons/react';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav className="flex justify-between bg-nav p-4 text-default-text">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <HouseSimple size={32} weight="duotone" />
        </Link>
        <Link href="/ticket/new">
          <Ticket size={32} weight="duotone" />
        </Link>
      </div>
      <div>
        <p className=" text-default-text">darlleybrito@gmail.com</p>
      </div>
    </nav>
  );
}
