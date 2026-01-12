'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'
import { products, categories } from '@/lib/products'

function ShopContent() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState("ALL")
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setSelectedCategory(categoryParam.toUpperCase())
    }
  }, [searchParams])

  const filteredProducts = selectedCategory === "ALL" 
    ? products 
    : products.filter(p => p.category.toUpperCase() === selectedCategory)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0)

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
        padding: '80px 40px 60px',
        textAlign: 'center',
        position: 'relative',
        background: `
          radial-gradient(ellipse at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 50%, rgba(30, 64, 175, 0.15) 0%, transparent 50%)
        `
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
          🇺🇸 SHOP PATRIOT GEAR 🇺🇸
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 10vw, 100px)',
          fontWeight: 900,
          letterSpacing: '8px',
          lineHeight: 0.9,
          margin: '0 0 20px 0',
          textShadow: '4px 4px 0 #DC2626, 8px 8px 0 #1E40AF'
        }}>
          ALL PRODUCTS
        </h1>

        <p style={{
          fontSize: '18px',
          color: '#A8A29E',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6,
          letterSpacing: '1px'
        }}>
          Browse our complete collection of premium American-made merchandise
        </p>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '40px 40px' }}>
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
        <p style={{
          textAlign: 'center',
          marginTop: '20px',
          color: '#78716C',
          fontSize: '13px',
          letterSpacing: '1px'
        }}>
          Showing {filteredProducts.length} {selectedCategory === 'ALL' ? 'products' : selectedCategory.toLowerCase()}
        </p>
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
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.borderColor = '#DC2626'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(220, 38, 38, 0.2)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.borderColor = '#292524'
              e.currentTarget.style.boxShadow = 'none'
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
              fontSize: '80px',
              background: `linear-gradient(135deg, ${product.color}22 0%, transparent 100%)`,
              borderBottom: '1px solid #292524'
            }}>
              {product.image}
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
                    e.target.style.background = '#DC2626'
                    e.target.style.color = '#FAFAF9'
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = '#FAFAF9'
                    e.target.style.color = '#0A0A0A'
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
      <CartSidebar showCart={showCart} setShowCart={setShowCart} cart={cart} cartTotal={cartTotal} />
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #1C1917 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FAFAF9',
        fontFamily: "'Oswald', 'Impact', sans-serif"
      }}>
        <div style={{ fontSize: '24px', letterSpacing: '4px' }}>LOADING...</div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  )
}
