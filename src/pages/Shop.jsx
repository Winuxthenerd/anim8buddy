import React, { useState, useEffect } from 'react'
import './Shop.css'
import tee1Front from '../assets/shop/tee1-front.jpeg'
import tee1Back from '../assets/shop/tee1-back.jpeg'
import tee2Back from '../assets/shop/tee2-back.jpeg'
import tee3Front from '../assets/shop/tee3-front.jpeg'
import tee4Front from '../assets/shop/tee4-front.jpeg'
import tee5Front from '../assets/shop/tee5-front.jpeg'
import tee6Back from '../assets/shop/tee6-back.jpeg'
import tee7Front from '../assets/shop/tee7-front.jpeg'
import tee8Back from '../assets/shop/tee8-back.jpeg'
import tee9Front from '../assets/shop/tee9-front.jpeg'
import tee10Back from '../assets/shop/tee10-back.jpeg'
import hoodie1Back from '../assets/shop/hoodie1-back.jpeg'
import hoodie2Back from '../assets/shop/hoodie2-back.jpeg'



const tshirts = [
  {
    id: 1,
    name: 'Monkey D. Luffy Red Moon Tee',
    price: '₦5,500',
    color: 'Black',
    front: tee1Front,
    back: tee1Back,
    link: '#',
  },
  {
    id: 2,
    name: 'Monkey D. Luffy Full Body Tee',
    price: '₦5,500',
    color: 'White',
    front: 'https://placehold.co/400x500/111111/ffffff?text=Front',
    back: tee2Back,
    link: '#',
  },
  {
    id: 3,
    name: 'Straw Hat Pirates Unity Tee',
    price: '₦5,500',
    color: 'White',
    front: tee3Front,
    back: 'https://placehold.co/400x500/0057b8/ffffff?text=Back',
    link: '#',
  },
  {
    id: 4,
    name: 'Monkey D. Luffy Manga Panel Tee',
    price: '₦5,500',
    color: 'White',
    front: tee4Front,
    back: 'https://placehold.co/400x500/ff6b35/ffffff?text=Back',
    link: '#',
  },
  {
    id: 5,
    name: 'Roronoa Zoro Katana Tee',
    price: '₦6,000',
    color: 'Red',
    front: tee5Front,
    back: 'https://placehold.co/400x500/1a1a2e/ffffff?text=Back',
    link: '#',
  },
  {
    id: 6,
    name: 'Roronoa Zoro Sword Stance Tee',
    price: '₦7,500',
    color: 'White',
    front: 'https://placehold.co/400x500/111111/ffffff?text=Front',
    back: tee6Back,
    link: '#',
  },
  {
    id: 7,
    name: 'Trafalgar Law Tee',
    price: '₦6,500',
    color: 'White',
    front: tee7Front,
    back: 'https://placehold.co/400x500/111111/ffffff?text=Back',
    link: '#',
  },
  {
    id: 8,
    name: 'King of the Pirates Tee',
    price: '₦6,500',
    color: 'Black',
    front: 'https://placehold.co/400x500/1a1a2e/ffffff?text=Front',
    back: tee8Back,
    link: '#',
  },
  {
    id: 9,
    name: 'Roronoa Zoro Tee ',
    price: '₦6,500',
    color: 'Grey',
    front: tee9Front,
    back: 'https://placehold.co/400x500/0057b8/ffffff?text=Back',
    link: '#',
  },
  {
    id: 10,
    name: 'Monkey D. Luffy Sketch Tee',
    price: '₦6,500',
    color: 'Black',
    front: 'https://placehold.co/400x500/111111/ffffff?text=Front',
    back: tee10Back,
    link: '#',
  },
  {
    id: 11,
    name: 'Luffy, Zoro, and Sanji Hoodie',
    price: '₦6,500',
    color: 'Black',
    front: 'https://placehold.co/400x500/1a1a2e/ffffff?text=Front',
    back: hoodie1Back,
    link: '#',
  },
  {
    id: 12,
    name: 'Monkey D. Luffy Collage Hoodie',
    price: '₦6,500',
    color: 'White',
    front: 'https://placehold.co/400x500/e23636/ffffff?text=Front',
    back: hoodie2Back,
    link: '#',
  },
]

function ShopCard({ item }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => prev === 0 ? 1 : 0)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const images = [item.front, item.back]
  const labels = ['Front', 'Back']

  return (
    <div className="shop-card">
      <div className="shop-card-left">
        <img
          src={images[active]}
          alt={`${item.name} ${labels[active]}`}
          className="shop-card-main-img"
        />
      </div>
      <div className="shop-card-right">
        <div className="shop-card-thumbnails">
          {images.map((img, index) => (
            <div
              key={index}
              className={`shop-thumb ${active === index ? 'active' : ''}`}
              onClick={() => setActive(index)}
            >
              <img src={img} alt={labels[index]} />
              <span className="shop-thumb-label">{labels[index]}</span>
            </div>
          ))}
        </div>
        <div className="shop-card-info">
          <h3 className="shop-card-name">{item.name}</h3>
          <p className="shop-card-color">{item.color}</p>
          <p className="shop-card-price">{item.price}</p>
          <a href={item.link} target="_blank" rel="noreferrer" className="shop-card-btn">
            Shop on Bizraa
          </a>
        </div>
      </div>
    </div>
  )
}

function Shop() {
  return (
    <div className="shop">
      <div className="shop-header">
        <div className="shop-header-content">
          <h1 className="shop-title">One Piece Collection Edition</h1>
          <p className="shop-subtitle">----Available Until September 30th 2026----</p>
        </div>
      </div>

      <div className="shop-section">
        <div className="shop-section-header">
          <h2 className="shop-section-title">T-Shirts & Hoodies</h2>
          <span className="shop-badge">New Arrivals</span>
        </div>
        <div className="shop-grid">
          {tshirts.map((item) => (
            <ShopCard key={item.id} item={item} />
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