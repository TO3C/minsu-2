'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';

export default function BookingPage() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    room: '',
    checkin: '',
    checkout: '',
    guests: '2',
    message: '',
  });

  const rooms = [
    { id: '1', name: language === 'zh' ? '海景大床房' : language === 'en' ? 'Ocean View King Room' : 'Номер с видом на океан', price: 588 },
    { id: '2', name: language === 'zh' ? '园景双床房' : language === 'en' ? 'Garden View Twin Room' : 'Номер с видом на сад', price: 468 },
    { id: '3', name: language === 'zh' ? '豪华海景套房' : language === 'en' ? 'Deluxe Ocean Suite' : 'Люкс с видом на океан', price: 888 },
    { id: '4', name: language === 'zh' ? '家庭海景房' : language === 'en' ? 'Family Ocean Room' : 'Семейный номер', price: 688 },
    { id: '5', name: language === 'zh' ? '庭院花园套房' : language === 'en' ? 'Courtyard Garden Suite' : 'Люкс с садом', price: 758 },
    { id: '6', name: language === 'zh' ? '顶层豪华别墅' : language === 'en' ? 'Penthouse Villa' : 'Пентхаус вилла', price: 1288 },
  ];

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
          _subject: `New Booking Request - ${formData.name}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          room: '',
          checkin: '',
          checkout: '',
          guests: '2',
          message: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header - 写实风格 */}
      <section className="py-20 gradient-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-soft">{t.booking.title}</h1>
          <p className="text-xl opacity-95">{t.booking.subtitle}</p>
        </div>
      </section>

      {/* Booking Form - 写实风格 */}
      <section className="py-16 section-paper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card-realistic">
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-olive/20 flex items-center justify-center text-4xl">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {t.booking.form.success}
                    </h3>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 text-terracotta hover:text-terracotta-dark font-medium"
                    >
                      {language === 'zh' ? '继续预订' : language === 'en' ? 'Book Another' : 'Забронировать еще'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {t.booking.form.name} *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="input-realistic"
                          placeholder={language === 'zh' ? '请输入您的姓名' : 'Enter your name'}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {t.booking.form.email} *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="input-realistic"
                          placeholder="example@email.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {t.booking.form.phone} *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="input-realistic"
                          placeholder="+86 138 0000 0000"
                        />
                      </div>

                      {/* Room Selection */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {t.booking.form.room} *
                        </label>
                        <select
                          name="room"
                          required
                          value={formData.room}
                          onChange={handleChange}
                          className="input-realistic appearance-none cursor-pointer"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B5B4F'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                        >
                          <option value="">{language === 'zh' ? '请选择房型' : 'Select room type'}</option>
                          {rooms.map((room) => (
                            <option key={room.id} value={room.id}>
                              {room.name} - ¥{room.price}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Check-in Date */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {t.booking.form.checkin} *
                        </label>
                        <input
                          type="date"
                          name="checkin"
                          required
                          value={formData.checkin}
                          onChange={handleChange}
                          className="input-realistic"
                        />
                      </div>

                      {/* Check-out Date */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {t.booking.form.checkout} *
                        </label>
                        <input
                          type="date"
                          name="checkout"
                          required
                          value={formData.checkout}
                          onChange={handleChange}
                          className="input-realistic"
                        />
                      </div>

                      {/* Guests */}
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {t.booking.form.guests} *
                        </label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="input-realistic appearance-none cursor-pointer"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B5B4F'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>{num} {language === 'zh' ? '人' : language === 'en' ? 'Guests' : 'гостей'}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        {t.booking.form.message}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="input-realistic resize-none"
                        placeholder={language === 'zh' ? '请输入您的特殊需求，如早餐、接机服务等' : 'Any special requests?'}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? t.booking.form.submitting : t.booking.form.submit}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <div className="card-realistic">
                <h3 className="text-xl font-bold text-text-primary mb-4">{t.booking.info.title}</h3>
                <ul className="space-y-4 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-terracotta shrink-0">🕐</span>
                    <span>{t.booking.info.checkin}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-terracotta shrink-0">🕐</span>
                    <span>{t.booking.info.checkout}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-olive shrink-0">✓</span>
                    <span>{t.booking.info.cancel}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-terracotta shrink-0">💳</span>
                    <span>{t.booking.info.payment}</span>
                  </li>
                </ul>
              </div>

              <div className="card-realistic bg-gradient-to-br from-terracotta to-terracotta-dark text-white">
                <h3 className="text-xl font-bold mb-4">
                  {language === 'zh' ? '需要帮助？' : language === 'en' ? 'Need Help?' : 'Нужна помощь?'}
                </h3>
                <p className="opacity-95 mb-4">
                  {language === 'zh' ? '如有任何疑问，欢迎随时联系我们' : 'Feel free to contact us if you have any questions'}
                </p>
                <a href="tel:+8689812345678" className="inline-flex items-center text-white hover:text-sand transition-colors font-medium">
                  <span className="mr-2">📞</span> +86 898 1234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
