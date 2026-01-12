'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navigation({ cart, setShowCart }) {
  const pathname = usePathname()

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ]

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      borderBottom: '2px solid #DC2626',
      position: 'relative',
      zIndex: 10,
      background: 'rgba(10, 10, 10, 0.95)',
      backdropFilter: 'blur(10px)'
    }}>
      <Link href="/" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textDecoration: 'none'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          fontWeight: 900,
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}>
          ★
        </div>
        <div>
          <div style={{
            fontSize: '24px',
            fontWeight: 900,
            letterSpacing: '4px',
            background: 'linear-gradient(90deg, #FAFAF9 0%, #DC2626 50%, #1E40AF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            PATRIOT SUPPLY CO.
          </div>
          <div style={{
            fontSize: '10px',
            letterSpacing: '6px',
            color: '#A8A29E',
            marginTop: '-2px'
          }}>
            AMERICA FIRST • ALWAYS
          </div>
        </div>
      </Link>

      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        {navItems.map(item => (
          <Link 
            key={item.name} 
            href={item.path}
            style={{
              color: pathname === item.path ? '#DC2626' : '#A8A29E',
              textDecoration: 'none',
              fontSize: '13px',
              letterSpacing: '2px',
              fontWeight: 600,
              transition: 'color 0.3s',
              borderBottom: pathname === item.path ? '2px solid #DC2626' : '2px solid transparent',
              paddingBottom: '4px'
            }}
            onMouseEnter={e => e.target.style.color = '#DC2626'}
            onMouseLeave={e => e.target.style.color = pathname === item.path ? '#DC2626' : '#A8A29E'}
          >
            {item.name}
          </Link>
        ))}
        <button 
          onClick={() => setShowCart(true)}
          style={{
            background: '#DC2626',
            border: 'none',
            padding: '12px 24px',
            color: '#FAFAF9',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '2px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.3s',
            clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)'
          }}
        >
          🛒 CART ({cart?.length || 0})
        </button>
      </div>
    </nav>
  )
}
