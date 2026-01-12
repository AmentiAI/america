'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'

export default function ContactPage() {
  const [cart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
          🇺🇸 GET IN TOUCH 🇺🇸
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 10vw, 100px)',
          fontWeight: 900,
          letterSpacing: '8px',
          lineHeight: 0.9,
          margin: '0 0 30px 0',
          textShadow: '4px 4px 0 #DC2626, 8px 8px 0 #1E40AF'
        }}>
          CONTACT US
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#A8A29E',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: 1.6,
          letterSpacing: '1px'
        }}>
          Have a question? We're here to help. Reach out to our team.
        </p>
      </section>

      {/* Contact Section */}
      <section style={{
        padding: '0 40px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '40px'
      }}>
        {/* Contact Info */}
        <div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 900,
            letterSpacing: '3px',
            marginBottom: '40px',
            color: '#DC2626'
          }}>
            CONTACT INFO
          </h2>
          <div style={{
            background: 'linear-gradient(145deg, #1C1917 0%, #0F0E0D 100%)',
            border: '1px solid #292524',
            padding: '40px'
          }}>
            {[
              { icon: '📧', label: 'EMAIL', value: 'support@patriotsupplyco.com' },
              { icon: '📞', label: 'PHONE', value: '1-800-PATRIOT' },
              { icon: '📍', label: 'ADDRESS', value: '123 Freedom Way, USA' },
              { icon: '⏰', label: 'HOURS', value: 'Mon-Fri: 9AM-6PM EST' }
            ].map((info, index) => (
              <div key={index} style={{
                marginBottom: '30px',
                paddingBottom: '30px',
                borderBottom: index < 3 ? '1px solid #292524' : 'none'
              }}>
                <div style={{
                  fontSize: '24px',
                  marginBottom: '10px'
                }}>{info.icon}</div>
                <div style={{
                  fontSize: '11px',
                  letterSpacing: '2px',
                  color: '#78716C',
                  marginBottom: '8px'
                }}>{info.label}</div>
                <div style={{
                  fontSize: '16px',
                  color: '#FAFAF9',
                  fontWeight: 600
                }}>{info.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 900,
            letterSpacing: '3px',
            marginBottom: '40px',
            color: '#DC2626'
          }}>
            SEND MESSAGE
          </h2>
          <form onSubmit={handleSubmit} style={{
            background: 'linear-gradient(145deg, #1C1917 0%, #0F0E0D 100%)',
            border: '1px solid #292524',
            padding: '40px'
          }}>
            {submitted && (
              <div style={{
                background: '#047857',
                padding: '15px',
                marginBottom: '20px',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '1px'
              }}>
                ✓ Message sent successfully!
              </div>
            )}
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#A8A29E',
                marginBottom: '8px'
              }}>
                NAME
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  background: '#0A0A0A',
                  border: '1px solid #292524',
                  color: '#FAFAF9',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#A8A29E',
                marginBottom: '8px'
              }}>
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  background: '#0A0A0A',
                  border: '1px solid #292524',
                  color: '#FAFAF9',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#A8A29E',
                marginBottom: '8px'
              }}>
                SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '15px',
                  background: '#0A0A0A',
                  border: '1px solid #292524',
                  color: '#FAFAF9',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <label style={{
                display: 'block',
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#A8A29E',
                marginBottom: '8px'
              }}>
                MESSAGE
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                style={{
                  width: '100%',
                  padding: '15px',
                  background: '#0A0A0A',
                  border: '1px solid #292524',
                  color: '#FAFAF9',
                  fontSize: '14px',
                  letterSpacing: '1px',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
                border: '2px solid #DC2626',
                padding: '18px',
                color: '#FAFAF9',
                fontSize: '14px',
                fontWeight: 800,
                letterSpacing: '3px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)'
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1)'
              }}
            >
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{
        padding: '80px 40px',
        background: 'rgba(220, 38, 38, 0.05)',
        borderTop: '1px solid #292524'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 900,
            letterSpacing: '4px',
            textAlign: 'center',
            marginBottom: '50px',
            color: '#FAFAF9'
          }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            {[
              {
                q: 'How long does shipping take?',
                a: 'We offer 24-hour fast shipping on all orders. Most orders arrive within 3-5 business days.'
              },
              {
                q: 'Are all products made in the USA?',
                a: 'Yes! 100% of our products are proudly manufactured in the United States.'
              },
              {
                q: 'What is your return policy?',
                a: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, return it for a full refund.'
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Yes! Contact us for special pricing on orders of 10 or more items.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                style={{
                  background: 'linear-gradient(145deg, #1C1917 0%, #0F0E0D 100%)',
                  border: '1px solid #292524',
                  padding: '30px'
                }}
              >
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  marginBottom: '15px',
                  color: '#DC2626'
                }}>
                  {faq.q}
                </h3>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: '#A8A29E',
                  letterSpacing: '0.5px'
                }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar showCart={showCart} setShowCart={setShowCart} cart={cart} cartTotal={0} />
    </div>
  )
}
