'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'
import { products, categories } from '@/lib/products'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = selectedCategory === "ALL" 
    ? products 
    : products.filter(p => p.category.toUpperCase() === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

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
        padding: '80px 40px',
        textAlign: 'center',
        position: 'relative',
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 50%, rgba(30, 64, 175, 0.15) 0%, transparent 50%)
        `
      }}>
        {/* Decorative Stars */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '10%',
          fontSize: '60px',
          opacity: 0.1,
          transform: 'rotate(-15deg)'
        }}>★</div>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '10%',
          fontSize: '80px',
          opacity: 0.1,
          transform: 'rotate(15deg)'
        }}>★</div>

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
          🇺🇸 STAND WITH AMERICA 🇺🇸
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 10vw, 120px)',
          fontWeight: 900,
          letterSpacing: '8px',
          lineHeight: 0.9,
          margin: '0 0 20px 0',
          textShadow: '4px 4px 0 #DC2626, 8px 8px 0 #1E40AF'
        }}>
          GEAR UP,<br/>
          <span style={{ color: '#DC2626' }}>PATRIOT</span>
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#A8A29E',
          maxWidth: '600px',
          margin: '0 auto 40px',
          lineHeight: 1.6,
          letterSpacing: '1px'
        }}>
          Premium apparel and merchandise for Americans who love their country, 
          support law enforcement, and stand for secure borders.
        </p>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/shop">
            <button style={{
              background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
              border: '2px solid #DC2626',
              padding: '18px 48px',
              color: '#FAFAF9',
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '3px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
            }}>
              SHOP NOW →
            </button>
          </Link>
          <Link href="/shop?category=APPAREL">
            <button style={{
              background: 'transparent',
              border: '2px solid #1E40AF',
              padding: '18px 48px',
              color: '#FAFAF9',
              fontSize: '16px',
              fontWeight: 800,
              letterSpacing: '3px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
            }}>
              NEW ARRIVALS
            </button>
          </Link>
        </div>

        {/* Stats Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '60px',
          marginTop: '60px',
          padding: '30px',
          background: 'rgba(255,255,255,0.03)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          flexWrap: 'wrap'
        }}>
          {[
            { num: '50K+', label: 'PATRIOTS SERVED' },
            { num: '100%', label: 'MADE IN USA' },
            { num: '4.9★', label: 'CUSTOMER RATING' },
            { num: '24HR', label: 'FAST SHIPPING' }
          ].map(stat => (
            <div key={stat.label}>
              <div style={{
                fontSize: '36px',
                fontWeight: 900,
                color: '#DC2626'
              }}>{stat.num}</div>
              <div style={{
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#A8A29E'
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '0 40px 40px' }}>
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? '#DC2626' : 'transparent',
                border: `2px solid ${selectedCategory === cat ? '#DC2626' : '#44403C'}`,
                padding: '12px 28px',
                color: selectedCategory === cat ? '#FAFAF9' : '#A8A29E',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '2px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section style={{
        padding: '0 40px 80px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '25px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            style={{
              background: 'linear-gradient(145deg, #1C1917 0%, #0F0E0D 100%)',
              border: '1px solid #292524',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s',
              animation: `fadeIn 0.5s ease ${index * 0.05}s both`
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.borderColor = '#DC2626';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#292524';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {product.badge && (
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                background: product.badge === 'NEW' ? '#1E40AF' : product.badge === 'PREMIUM' ? '#7C2D12' : '#DC2626',
                padding: '5px 12px',
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '1px',
                zIndex: 2
              }}>
                {product.badge}
              </div>
            )}

            <div style={{
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: `linear-gradient(135deg, ${product.color}22 0%, transparent 100%)`,
              borderBottom: '1px solid #292524',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'contain', padding: '20px' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div style={{ padding: '25px' }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 800,
                letterSpacing: '1px',
                margin: '0 0 10px',
                color: '#FAFAF9'
              }}>
                {product.name}
              </h3>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '24px',
                  fontWeight: 900,
                  color: '#DC2626'
                }}>
                  ${product.price.toFixed(2)}
                </span>

                <button
                  onClick={() => addToCart(product)}
                  style={{
                    background: '#FAFAF9',
                    border: 'none',
                    padding: '10px 20px',
                    color: '#0A0A0A',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = '#DC2626';
                    e.target.style.color = '#FAFAF9';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = '#FAFAF9';
                    e.target.style.color = '#0A0A0A';
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Banner */}
      <section style={{
        margin: '0 40px 80px',
        padding: '60px',
        background: `
          linear-gradient(135deg, rgba(220, 38, 38, 0.9) 0%, rgba(30, 64, 175, 0.9) 100%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="80">🇺🇸</text></svg>')
        `,
        textAlign: 'center',
        position: 'relative',
        clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 30px 100%, 0 calc(100% - 30px))'
      }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 900,
          letterSpacing: '6px',
          margin: '0 0 15px',
          textTransform: 'uppercase'
        }}>
          Join 50,000+ Patriots
        </h2>
        <p style={{
          fontSize: '16px',
          opacity: 0.9,
          marginBottom: '30px',
          letterSpacing: '2px'
        }}>
          Get 15% off your first order when you sign up for our newsletter
        </p>
        <div style={{
          display: 'flex',
          gap: '0',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            style={{
              flex: 1,
              padding: '18px 24px',
              border: 'none',
              fontSize: '13px',
              letterSpacing: '2px',
              fontWeight: 600,
              background: '#FAFAF9',
              color: '#0A0A0A'
            }}
          />
          <button style={{
            background: '#0A0A0A',
            border: 'none',
            padding: '18px 32px',
            color: '#FAFAF9',
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '2px',
            cursor: 'pointer'
          }}>
            SUBSCRIBE
          </button>
        </div>
      </section>

      <Footer />
      <CartSidebar showCart={showCart} setShowCart={setShowCart} cart={cart} cartTotal={cartTotal} />
    </div>
  );
}
