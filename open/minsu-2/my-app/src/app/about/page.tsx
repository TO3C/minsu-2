'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';

export default function AboutPage() {
  const { t, language } = useLanguage();
  const brandName = language === 'zh' ? '流云智炬' : language === 'en' ? 'Cloud & Torch' : 'Облако и Факел';

  const stats = [
    { number: '5+', label: language === 'zh' ? '年服务经验' : language === 'en' ? 'Years Experience' : 'Лет опыта' },
    { number: '1000+', label: language === 'zh' ? '满意客人' : language === 'en' ? 'Happy Guests' : 'Довольных гостей' },
    { number: '4.9', label: language === 'zh' ? '平均评分' : language === 'en' ? 'Average Rating' : 'Средний рейтинг' },
    { number: '12', label: language === 'zh' ? '精品客房' : language === 'en' ? 'Boutique Rooms' : 'Бутик-номеров' },
  ];

  // 民宿外观图片
  const hotelExterior = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80';

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section - 写实风格 */}
      <section className="relative py-24 gradient-warm text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-sand/30 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-soft">{t.about.title}</h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Story Section - 真实图片 */}
      <section className="py-24 section-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-terracotta text-sm font-medium tracking-wider uppercase">
                {language === 'zh' ? '我们的故事' : language === 'en' ? 'Our Story' : 'Наша история'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3 mb-6">
                {t.about.story.title}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {t.about.story.content}
              </p>
            </div>
            <div className="relative">
              {/* 民宿外观真实图片 */}
              <div className="photo-realistic aspect-[4/3] relative overflow-hidden">
                <Image
                  src={hotelExterior}
                  alt="Liuyun Zhiju Exterior"
                  fill
                  className="object-cover"
                />
                {/* 渐变叠加 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* 叠加信息 */}
                <div className="photo-overlay">
                  <p className="text-sm opacity-80">Liuyun Zhiju</p>
                  <p className="text-xl font-bold">流云智炬民宿</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - 写实卡片 */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta text-sm font-medium tracking-wider uppercase">
              {language === 'zh' ? '核心理念' : language === 'en' ? 'Philosophy' : 'Философия'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
              {t.about.values.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.about.values.items.map((value, index) => (
              <div key={index} className="card-realistic text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-terracotta to-terracotta-dark flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{value.title}</h3>
                <p className="text-text-secondary">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - 写实风格 */}
      <section className="py-24 gradient-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-shadow-soft">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - 写实卡片 */}
      <section className="py-24 section-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta text-sm font-medium tracking-wider uppercase">
              {language === 'zh' ? '专业团队' : language === 'en' ? 'Team' : 'Команда'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
              {language === 'zh' ? '我们的团队' : language === 'en' ? 'Our Team' : 'Наша команда'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: language === 'zh' ? '张经理' : 'Manager Zhang', role: language === 'zh' ? '创始人' : 'Founder', emoji: '👨‍💼' },
              { name: language === 'zh' ? '李管家' : 'Housekeeper Li', role: language === 'zh' ? '首席管家' : 'Chief Concierge', emoji: '👩‍💼' },
              { name: language === 'zh' ? '王设计师' : 'Designer Wang', role: language === 'zh' ? '设计总监' : 'Design Director', emoji: '👨‍🎨' },
            ].map((member, index) => (
              <div key={index} className="card-realistic text-center group">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-sand to-sand-dark flex items-center justify-center text-4xl shadow-inner">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold text-text-primary">{member.name}</h3>
                <p className="text-terracotta font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
