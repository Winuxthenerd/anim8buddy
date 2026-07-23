import React from 'react'
import './Shop.css'

const tshirts = [
  { id: 1, name: 'Anim8buddy Logo Tee', price: '₦5,500', color: 'White', image: 'https://placehold.co/400x400/1a1a2e/ffffff?text=Logo+Tee', link: '#' },
  { id: 2, name: 'Anime Vibes Tee', price: '₦5,500', color: 'Black', image: 'https://placehold.co/400x400/111111/ffffff?text=Anime+Vibes', link: '#' },
  { id: 3, name: 'Cartoon Squad Tee', price: '₦5,500', color: 'Navy', image: 'https://placehold.co/400x400/0057b8/ffffff?text=Cartoon+Squad', link: '#' },
  { id: 4, name: 'Toonz Life Tee', price: '₦5,500', color: 'Orange', image: 'https://placehold.co/400x400/ff6b35/ffffff?text=Toonz+Life', link: '#' },
  { id: 5, name: 'Classic A8B Tee', price: '₦6,000', color: 'White', image: 'https://placehold.co/400x400/1a1a2e/ffffff?text=Classic+A8B', link: '#' },
  { id: 6, name: 'Limited Drop Tee', price: '₦7,500', color: 'Black', image: 'https://placehold.co/400x400/111111/ffffff?text=Limited+Drop', link: '#' },
]

function Shop() {
  return (
    <div className="shop">
      <div className="shop-header">
        <h1 className="shop-title">AnimeMerch Edition</h1>
        <p className="shop-subtitle">----Available Until September 30th 2026----</p>
      </div>

      <div className="shop-section">
        <div className="shop-section-header">
          <h2 className="shop-section-title">T-Shirts</h2>
          <span className="shop-badge">New Arrivals</span>
        </div>
        <div className="shop-grid">
          {tshirts.map((item) => (
            <div className="shop-card" key={item.id}>
              <div className="shop-card-image">
                <img src={item.image} alt={item.name} />
                <div className="shop-card-badge">{item.color}</div>
              </div>
              <div className="shop-card-info">
                <h3 className="shop-card-name">{item.name}</h3>
                <p className="shop-card-price">{item.price}</p>
                <a href={item.link} target="_blank" rel="noreferrer" className="shop-card-btn">
                  Shop on Bizraa
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shop-banner">
        <h2>More drops coming soon 🔥</h2>
        <p>Hoodies, hats, posters and more. Follow us to stay updated.</p>
      </div>
    </div>
  )
}

export default Shop