'use client'

import { useState } from 'react'
import Link from 'next/link'
// import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { roboto } from '../fonts'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('/')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = (path: string) => {
    setActiveItem(path)
    setIsMenuOpen(false)
  }

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/clientes', label: 'Clientes' },
    { href: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className="bg-black shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex flex-row items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 flex items-center" onClick={() => handleLinkClick('/')}>
              <Image src="https://sfsjdyuwttrcgchbsxim.supabase.co/storage/v1/object/public/ProMedia/favicon_white.svg" alt="ProMedia" width={120} height={40} className="block h-8 w-auto" />
              <h1 className={`ml-2 ${roboto.className}`}>ProMedia</h1>
            </Link>
          </div>

          {/* Menú para pantallas grandes */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex space-x-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeItem === link.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Botón de menú para móviles */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
              <p>x</p>
              ) : (
                <p>Abrir</p>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${activeItem === link.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}