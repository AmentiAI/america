import Link from 'next/link'

export default function Footer() {
  return (
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
          { title: 'SHOP', links: [
            { name: 'All Products', path: '/shop' },
            { name: 'Apparel', path: '/shop?category=APPAREL' },
            { name: 'Headwear', path: '/shop?category=HEADWEAR' },
            { name: 'Flags', path: '/shop?category=FLAGS' },
            { name: 'Accessories', path: '/shop?category=ACCESSORIES' }
          ]},
          { title: 'SUPPORT', links: [
            { name: 'Contact Us', path: '/contact' },
            { name: 'Shipping Info', path: '/contact' },
            { name: 'Returns', path: '/contact' },
            { name: 'FAQ', path: '/contact' },
            { name: 'Size Guide', path: '/contact' }
          ]},
          { title: 'COMPANY', links: [
            { name: 'About Us', path: '/about' },
            { name: 'Our Mission', path: '/about' },
            { name: 'Reviews', path: '/about' },
            { name: 'Blog', path: '/about' },
            { name: 'Careers', path: '/contact' }
          ]}
        ].map(section => (
          <div key={section.title}>
            <h4 style={{
              fontSize: '12px',
              letterSpacing: '3px',
              marginBottom: '20px',
              color: '#FAFAF9'
            }}>{section.title}</h4>
            {section.links.map(link => (
              <Link key={link.name} href={link.path} style={{
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
                {link.name}
              </Link>
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
  )
}
