'use client'
import {usePathname} from "next/navigation";
import React from 'react'


export default function NotFound() {
  const pathname = usePathname()
  return (
    <div className="container py-28">
      <div className="prose max-w-none">
        <h1 style={{ marginBottom: 0 }}>404</h1>
        <p className="mb-4">This page could not be found. ${pathname}</p>
      </div>
    </div>
  )
}
