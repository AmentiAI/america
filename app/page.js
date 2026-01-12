'use client'

import { useState } from 'react';

const products = [
  { id: 1, name: "TRUMP 2024 RALLY TEE", price: 34.99, category: "apparel", badge: "BESTSELLER", image: "👕", color: "#DC2626" },
  { id: 2, name: "BACK THE BLUE CAP", price: 29.99, category: "headwear", badge: null, image: "🧢", color: "#1E3A8A" },
  { id: 3, name: "ICE ENFORCEMENT HOODIE", price: 59.99, category: "apparel", badge: "NEW", image: "🧥", color: "#0F172A" },
  { id: 4, name: "AMERICAN EAGLE FLAG", price: 44.99, category: "flags", badge: null, image: "🦅", color: "#7F1D1D" },
  { id: 5, name: "MAGA EMBROIDERED HAT", price: 32.99, category: "headwear", badge: "BESTSELLER", image: "🎩", color: "#DC2626" },
  { id: 6, name: "SECURE THE BORDER TEE", price: 29.99, category: "apparel", badge: null, image: "👕", color: "#047857" },
  { id: 7, name: "USA STRONG TANK TOP", price: 24.99, category: "apparel", badge: null, image: "🎽", color: "#1E40AF" },
  { id: 8, name: "PATRIOT COFFEE MUG", price: 19.99, category: "accessories", badge: null, image: "☕", color: "#78350F" },
  { id: 9, name: "TRUMP 47 BOMBER JACKET", price: 129.99, category: "apparel", badge: "PREMIUM", image: "🧥", color: "#0C0A09" },
  { id: 10, name: "THIN BLUE LINE FLAG", price: 39.99, category: "flags", badge: null, image: "🏴", color: "#1E3A8A" },
  { id: 11, name: "AMERICA FIRST POLO", price: 49.99, category: "apparel", badge: null, image: "👔", color: "#FAFAF9" },
  { id: 12, name: "FREEDOM STICKER PACK", price: 12.99, category: "accessories", badge: null, image: "🏷️", color: "#DC2626" },
];

const categories = ["ALL", "APPAREL", "HEADWEAR", "FLAGS", "ACCESSORIES"];

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

      {/* Navigation */}
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
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
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
        </div>

        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          {['HOME', 'SHOP', 'ABOUT', 'CONTACT'].map(item => (
            <a key={item} href="#" style={{
              color: '#A8A29E',
              textDecoration: 'none',
              fontSize: '13px',
              letterSpacing: '2px',
              fontWeight: 600,
              transition: 'color 0.3s',
            }}
            onMouseEnter={e => e.target.style.color = '#DC2626'}
            onMouseLeave={e => e.target.style.color = '#A8A29E'}
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => setShowCart(!showCart)}
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
            🛒 CART ({cart.length})
          </button>
        </div>
      </nav>

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

      {/* Footer */}
      <footer style={{
        padding: '60px 40px',
        background: '#0A0A0A',
        borderTop: '2px solid #DC2626'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto 40px'
        }}>
          <div>
            <h4 style={{
              fontSize: '14px',
              letterSpacing: '3px',
              marginBottom: '20px',
              color: '#DC2626'
            }}>PATRIOT SUPPLY CO.</h4>
            <p style={{
              fontSize: '13px',
              color: '#78716C',
              lineHeight: 1.8
            }}>
              Proudly supporting American values since 2016. 
              All products made in the USA.
            </p>
          </div>

          {[
            { title: 'SHOP', links: ['All Products', 'Apparel', 'Headwear', 'Flags', 'Accessories'] },
            { title: 'SUPPORT', links: ['Contact Us', 'Shipping Info', 'Returns', 'FAQ', 'Size Guide'] },
            { title: 'COMPANY', links: ['About Us', 'Our Mission', 'Reviews', 'Blog', 'Careers'] }
          ].map(section => (
            <div key={section.title}>
              <h4 style={{
                fontSize: '12px',
                letterSpacing: '3px',
                marginBottom: '20px',
                color: '#FAFAF9'
              }}>{section.title}</h4>
              {section.links.map(link => (
                <a key={link} href="#" style={{
                  display: 'block',
                  color: '#78716C',
                  textDecoration: 'none',
                  fontSize: '13px',
                  marginBottom: '10px',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={e => e.target.style.color = '#DC2626'}
                onMouseLeave={e => e.target.style.color = '#78716C'}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid #292524',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{
            fontSize: '12px',
            color: '#57534E',
            letterSpacing: '1px'
          }}>
            © 2024 PATRIOT SUPPLY CO. ALL RIGHTS RESERVED. 🇺🇸
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['VISA', 'MC', 'AMEX', 'PAYPAL'].map(pay => (
              <span key={pay} style={{
                padding: '5px 12px',
                background: '#1C1917',
                fontSize: '10px',
                color: '#78716C',
                letterSpacing: '1px'
              }}>{pay}</span>
            ))}
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      {showCart && (
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
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '30px'
                    }}>{item.image}</div>
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
      )}
    </div>
  );
}
