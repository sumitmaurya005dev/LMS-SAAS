'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Label } from 'radix-ui'
import React from 'react'
const navItems =[
    {label:'Home', href:'/'},
    {label:'Companion', href:'/companion'},
    {label:'My Journey', href:'/my-journey'},
   
]
const NavItems = () => {

    const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
       {navItems.map(({label,href})=>(
        <Link href={href} key={label}  className={`${pathname === href ? 'text-primary font-semibold' : ''}`}>{label}</Link>
       ))} 
    </nav>
  )
}

export default NavItems
