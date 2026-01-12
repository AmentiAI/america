'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'

export default function AboutPage() {
  const [cart] = useState([])
  const [showCart, setShowCart] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0A0A0A 0%, #1C1917 100%)',
      fontFamily: "'Oswald', 'Impact', sans-serif",
      color: '#FAFAF9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 40px,
          rgba(220, 38, 38, 0.03) 40px,
          rgba(220, 38, 38, 0.03) 80px
        )`,
        pointerEvents: 'none'
      }} />

      <Navigation cart={cart} setShowCart={setShowCart} />

      {/* Hero Section */}
      <section style={{
        padding: '100px 40px 80px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          display: 'inline-block',
          background: '#DC2626',
          padding: '6px 20px',
          fontSize: '11px',
          letterSpacing: '4px',
          fontWeight: 700,
          marginBottom: '20px',
          clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)'
        }}>
          🇺🇸 OUR STORY 🇺🇸
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 10vw, 100px)',
          fontWeight: 900,
          letterSpacing: '8px',
          lineHeight: 0.9,
          margin: '0 0 30px 0',
          textShadow: '4px 4px 0 #DC2626, 8px 8px 0 #1E40AF'
        }}>
          ABOUT US
        </h1>
      </section>

      {/* Mission Section */}
      <section style={{
        padding: '0 40px 80px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'linear-gradient(145deg, #1C1917 0%, #0F0E0D 100%)',
          border: '2px solid #DC2626',
          padding: '60px',
          position: 'relative',
          clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            fontSize: '80px',
            opacity: 0.1
          }}>★</div>

          <h2 style={{
            fontSize: '48px',
            fontWeight: 900,
            letterSpacing: '4px',
            marginBottom: '30px',
            color: '#DC2626'
          }}>
            OUR MISSION
          </h2>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.8,
            color: '#A8A29E',
            letterSpacing: '1px',
            marginBottom: '30px'
          }}>
            Patriot Supply Co. was founded in 2016 with a simple mission: to provide premium, 
            American-made merchandise for patriots who love their country, support law enforcement, 
            and believe in secure borders. We stand for the values that made America great.
          </p>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.8,
            color: '#A8A29E',
            letterSpacing: '1px'
          }}>
            Every product we sell is proudly made in the USA, supporting American workers and 
            American families. When you shop with us, you're not just buying merchandise—you're 
            making a statement about what you stand for.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: '0 40px 80px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: 900,
          letterSpacing: '4px',
          textAlign: 'center',
          marginBottom: '60px',
          color: '#FAFAF9'
        }}>
          WHAT WE STAND FOR
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {[
            {
              icon: '🇺🇸',
              title: 'AMERICA FIRST',
              description: 'We believe in putting American interests first, supporting American businesses, and keeping jobs in America.'
            },
            {
              icon: '👮',
              title: 'BACK THE BLUE',
              description: 'We proudly support law enforcement officers who risk their lives every day to keep our communities safe.'
            },
            {
              icon: '🛡️',
              title: 'SECURE BORDERS',
              description: 'We advocate for strong border security to protect our nation and ensure the safety of all Americans.'
            },
            {
              icon: '⭐',
              title: 'MADE IN USA',
              description: '100% of our products are manufactured in the United States, supporting American workers and families.'
            },
            {
              icon: '💪',
              title: 'FREEDOM',
              description: 'We celebrate the freedoms that make America great: freedom of speech, freedom of religion, and the right to bear arms.'
            },
            {
              icon: '🏛️',
              title: 'TRADITION',
              description: 'We honor the traditions, values, and principles that have guided America for over 200 years.'
            }
          ].map((value, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(145deg, #1C1917 0%, #0F0E0D 100%)',
                border: '1px solid #292524',
                padding: '40px',
                textAlign: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#DC2626'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#292524'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>{value.icon}</div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 800,
                letterSpacing: '2px',
                marginBottom: '15px',
                color: '#DC2626'
              }}>
                {value.title}
              </h3>
              <p style={{
                fontSize: '14px',
                lineHeight: 1.6,
                color: '#A8A29E',
                letterSpacing: '0.5px'
              }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '80px 40px',
        background: 'rgba(220, 38, 38, 0.1)',
        borderTop: '2px solid #DC2626',
        borderBottom: '2px solid #DC2626'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {[
            { num: '50K+', label: 'PATRIOTS SERVED' },
            { num: '100%', label: 'MADE IN USA' },
            { num: '4.9★', label: 'CUSTOMER RATING' },
            { num: '8', label: 'YEARS SERVING' }
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontSize: '48px',
                fontWeight: 900,
                color: '#DC2626',
                marginBottom: '10px'
              }}>{stat.num}</div>
              <div style={{
                fontSize: '12px',
                letterSpacing: '2px',
                color: '#A8A29E'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <CartSidebar showCart={showCart} setShowCart={setShowCart} cart={cart} cartTotal={0} />
    </div>
  )
}
