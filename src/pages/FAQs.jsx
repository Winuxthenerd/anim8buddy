import React, { useState } from 'react'
import './FAQs.css'

const faqs = [
  {
    question: 'What is Anim8buddy?',
    answer: 'Anim8buddy is your one-stop platform for downloading anime and cartoons. You can browse our catalog, request specific titles, and even order a flash drive loaded with your favourite content delivered straight to your door.',
  },
  {
    question: 'How do I download a movie or series?',
    answer: 'Simply browse the catalog, click on the title you want, and select your preferred download option. Free users have limited downloads per month while subscribers enjoy unlimited access.',
  },
  {
    question: 'What is the Flash Drive Delivery service?',
    answer: 'Our Flash Drive Delivery service lets you order a physical USB drive preloaded with your chosen content bundle. Perfect for areas with slow or expensive internet — just pick your bundle, pay, and we deliver it to you via courier.',
  },
  {
    question: 'How long does Flash Drive Delivery take?',
    answer: 'Delivery times depend on your location within Nigeria. Most orders within Port Harcourt and Lagos arrive within 1-2 business days. Other states typically take 3-5 business days.',
  },
  {
    question: 'Can I request a movie or series that is not on the site?',
    answer: 'Yes! We have a dedicated Request system. Submit the title you want, make a small payment, and we will source and upload it within 48-72 hours. You will be notified once it is ready.',
  },
  {
    question: 'What are the subscription tiers?',
    answer: 'We offer a Free tier with limited monthly downloads and ads, and a Premium tier with unlimited downloads, no ads, and priority access to new releases. Pricing is in Naira and payment is via Paystack.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major Nigerian payment methods through Paystack — debit cards, bank transfers, and USSD payments.',
  },
  {
    question: 'Is the content available in HD quality?',
    answer: 'Yes, most titles are available in 480p, 720p, and 1080p. Higher quality options are available to Premium subscribers.',
  },
  {
    question: 'Can I watch content online or is it download only?',
    answer: 'Currently Anim8buddy is focused on downloads to keep things fast and data-friendly. Streaming may be introduced in a future update.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach us through the Contact page or send us a message on our social media handles. We typically respond within 24 hours.',
  },
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="faq-question">
        <span>{faq.question}</span>
        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
      </div>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  )
}

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faqs">
      <div className="faqs-header">
        <h1 className="faqs-title">Frequently Asked Questions</h1>
        <p className="faqs-subtitle">Everything you need to know about Anim8buddy.</p>
      </div>

      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default FAQs