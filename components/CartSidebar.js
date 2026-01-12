'use client'

import Image from 'next/image'

export default function CartSidebar({ showCart, setShowCart, cart, cartTotal }) {
  if (!showCart) return null

  return (
    <>
      {/* Overlay */}
      <div 
        onClick={() => setShowCart(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 99
        }}
      />
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '380px',
        height: '100vh',
        background: '#0F0E0D',
        borderLeft: '2px solid #DC2626',
        padding: '30px',
        zIndex: 100,
        overflowY: 'auto',
        boxShadow: '-20px 0 60px rgba(0,0,0,0.5)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 800,
            letterSpacing: '3px'
          }}>YOUR CART</h3>
          <button
            onClick={() => setShowCart(false)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FAFAF9',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >×</button>
        </div>

        {cart.length === 0 ? (
          <p style={{ color: '#78716C', textAlign: 'center', marginTop: '60px' }}>
            Your cart is empty
          </p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: '15px',
                padding: '15px 0',
                borderBottom: '1px solid #292524'
              }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    background: '#1C1917',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: 'contain', padding: '5px' }}
                      sizes="60px"
                    />
                  </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    marginBottom: '5px'
                  }}>{item.name}</p>
                  <p style={{
                    fontSize: '16px',
                    color: '#DC2626',
                    fontWeight: 800
                  }}>${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}

            <div style={{
              marginTop: '30px',
              padding: '20px 0',
              borderTop: '2px solid #DC2626'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '20px'
              }}>
                <span style={{ fontSize: '14px', letterSpacing: '2px' }}>TOTAL</span>
                <span style={{
                  fontSize: '24px',
                  fontWeight: 900,
                  color: '#DC2626'
                }}>${cartTotal.toFixed(2)}</span>
              </div>
              <button style={{
                width: '100%',
                background: '#DC2626',
                border: 'none',
                padding: '18px',
                color: '#FAFAF9',
                fontSize: '14px',
                fontWeight: 800,
                letterSpacing: '3px',
                cursor: 'pointer'
              }}>
                CHECKOUT →
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
