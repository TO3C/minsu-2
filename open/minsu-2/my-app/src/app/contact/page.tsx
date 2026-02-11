'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';

export default function ContactPage() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Contact Form: ${formData.subject}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: '📍',
      title: t.contact.info.address,
      content: language === 'zh' ? '海南省三亚市三亚湾路88号' : 
               language === 'en' ? '88 Sanya Bay Road, Sanya, Hainan, China' : 
               'Залив Санья, дорога 88, Санья, Хайнань, Китай',
    },
    {
      icon: '📞',
      title: t.contact.info.phone,
      content: '+86 898 1234 5678',
      link: 'tel:+8689812345678',
    },
    {
      icon: '✉️',
      title: t.contact.info.email,
      content: 'info@liuyunzhiju.com',
      link: 'mailto:info@liuyunzhiju.com',
    },
    {
      icon: '💬',
      title: t.contact.info.wechat,
      content: language === 'zh' ? '流云智炬民宿' : 'CloudTorch_Hotel',
    },
  ];

  // 地图图片
  const mapImage = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80';

  return (
    <div className="min-h-screen bg-cream">
      {/* Header - 写实风格 */}
      <section className="py-20 gradient-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-soft">{t.contact.title}</h1>
          <p className="text-xl opacity-95">{t.contact.subtitle}</p>
        </div>
      </section>

      {/* Contact Content - 写实风格 */}
      <section className="py-16 section-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="card-realistic text-center group">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-sand to-sand-dark flex items-center justify-center text-2xl shadow-inner">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-text-primary mb-1">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-terracotta hover:text-terracotta-dark transition-colors text-sm">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-text-secondary text-sm">{item.content}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Map - 真实地图图片 */}
              <div className="card-realistic overflow-hidden">
                <div className="h-56 photo-realistic relative overflow-hidden">
                  <Image
                    src={mapImage}
                    alt="Location Map"
                    fill
                    className="object-cover"
                  />
                  {/* 位置标记 */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-2xl text-white shadow-lg animate-bounce">
                      📍
                    </div>
                  </div>
                  {/* 渐变叠加 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                <div className="p-4 bg-cream border-t border-black/5">
                  <p className="text-sm text-text-secondary">
                    📍 {language === 'zh' ? '距离三亚凤凰国际机场约15分钟车程' : 
                       language === 'en' ? 'About 15 minutes drive from Sanya Phoenix International Airport' : 
                       'Около 15 минут езды от международного аэропорта Санья Феникс'}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="card-realistic">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  {language === 'zh' ? '营业时间' : language === 'en' ? 'Working Hours' : 'Часы работы'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center py-2 border-b border-black/5">
                    <span className="text-text-secondary">{language === 'zh' ? '前台服务' : 'Reception'}</span>
                    <span className="font-medium text-olive">24/7</span>
                  </li>
                  <li className="flex justify-between items-center py-2 border-b border-black/5">
                    <span className="text-text-secondary">{language === 'zh' ? '客房服务' : 'Room Service'}</span>
                    <span className="font-medium text-text-primary">07:00 - 23:00</span>
                  </li>
                  <li className="flex justify-between items-center py-2">
                    <span className="text-text-secondary">{language === 'zh' ? '餐厅' : 'Restaurant'}</span>
                    <span className="font-medium text-text-primary">07:00 - 22:00</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-realistic">
              <h2 className="text-2xl font-bold text-text-primary mb-6">{t.contact.form.title}</h2>
              
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-olive/20 flex items-center justify-center text-4xl">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {t.contact.form.success}
                  </h3>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-terracotta hover:text-terracotta-dark font-medium"
                  >
                    {language === 'zh' ? '发送新消息' : language === 'en' ? 'Send another message' : 'Отправить новое сообщение'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="input-realistic"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-realistic"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t.contact.form.subject} *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-realistic"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="input-realistic resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {language === 'zh' ? '发送中...' : 'Sending...'}
                      </span>
                    ) : (
                      t.contact.form.send
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
