'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';

export default function HomePage() {
  const { t, language } = useLanguage();
  const brandName = language === 'zh' ? '流云智炬' : language === 'en' ? 'Cloud & Torch' : 'Облако и Факел';

  const rooms = [
    {
      id: 1,
      name: language === 'zh' ? '海景大床房' : language === 'en' ? 'Ocean View King Room' : 'Номер с видом на океан',
      price: 588,
      tag: language === 'zh' ? '热门' : language === 'en' ? 'Popular' : 'Популярный',
      image: '/images/rooms/ocean-king.jpg',
      placeholder: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    },
    {
      id: 2,
      name: language === 'zh' ? '园景双床房' : language === 'en' ? 'Garden View Twin Room' : 'Номер с видом на сад',
      price: 468,
      tag: null,
      image: '/images/rooms/garden-twin.jpg',
      placeholder: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    },
    {
      id: 3,
      name: language === 'zh' ? '豪华海景套房' : language === 'en' ? 'Deluxe Ocean Suite' : 'Люкс с видом на океан',
      price: 888,
      tag: language === 'zh' ? '推荐' : language === 'en' ? 'Recommended' : 'Рекомендуется',
      image: '/images/rooms/deluxe-suite.jpg',
      placeholder: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    },
  ];

  // Hero 图片 - 三亚湾海滩风景（使用更稳定的图片源）
  const heroImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80&auto=format&fit=crop';

  return (
    <div className="overflow-hidden">
      {/* Hero Section - 使用真实图片 */}
      <section className="relative min-h-screen flex items-center">
        {/* 背景 - 自然纹理 */}
        <div className="absolute inset-0 section-paper" />
        
        {/* 装饰元素 - 有机形状 */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-terracotta/20 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-40 w-64 h-64 bg-sand/40 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 左侧内容 */}
            <div className="animate-slide-up">
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-terracotta/10 border border-terracotta/20">
                <span className="text-terracotta text-sm font-medium tracking-wide">
                  {t.home.hero.subtitle}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-text-primary mb-6 leading-tight tracking-tight">
                {brandName}
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary max-w-lg mb-8 leading-relaxed">
                {t.home.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link href="/booking" className="btn-primary">
                  {t.home.hero.cta}
                </Link>
                <Link href="/rooms" className="btn-secondary">
                  {t.home.hero.cta2}
                </Link>
              </div>

              {/* 统计数据 */}
              <div className="mt-12 pt-8 border-t border-black/10">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-terracotta">5+</div>
                    <div className="text-sm text-text-muted mt-1">
                      {language === 'zh' ? '年经验' : language === 'en' ? 'Years' : 'Лет опыта'}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-terracotta">1000+</div>
                    <div className="text-sm text-text-muted mt-1">
                      {language === 'zh' ? '满意客人' : language === 'en' ? 'Guests' : 'Гостей'}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-terracotta">4.9</div>
                    <div className="text-sm text-text-muted mt-1">
                      {language === 'zh' ? '评分' : language === 'en' ? 'Rating' : 'Рейтинг'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧 - 真实图片区域 */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* 主图框 - 真实海滩图片 */}
                <div className="photo-realistic aspect-[4/5] relative overflow-hidden bg-sand">
                  {/* 使用 img 标签直接加载图片 */}
                  <img 
                    src={heroImage}
                    alt="三亚湾海景"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ backgroundColor: '#D4C4A8' }}
                    onError={(e) => {
                      // 图片加载失败时的备用处理
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* 渐变叠加 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {/* 叠加文字 */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <p className="text-sm font-medium opacity-90 mb-1">Sanya Bay</p>
                    <p className="text-2xl font-semibold">三亚湾海景</p>
                  </div>
                </div>

                {/* 装饰元素 */}
                <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-terracotta/30 rounded-full pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 写实卡片 */}
      <section className="py-24 section-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-terracotta text-sm font-medium tracking-wider uppercase">
              {language === 'zh' ? '我们的优势' : language === 'en' ? 'Why Choose Us' : 'Почему мы'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
              {t.home.features.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t.home.features.items[0].title,
                description: t.home.features.items[0].description,
                image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80'
              },
              {
                title: t.home.features.items[1].title,
                description: t.home.features.items[1].description,
                image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80'
              },
              {
                title: t.home.features.items[2].title,
                description: t.home.features.items[2].description,
                image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80'
              }
            ].map((feature, index) => (
              <div key={index} className="card-realistic overflow-hidden group">
                {/* 实景图片 */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="text-center px-4 pb-4">
                  <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview Section - 使用真实图片 */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-terracotta text-sm font-medium tracking-wider uppercase">
                {language === 'zh' ? '精选住宿' : language === 'en' ? 'Accommodations' : 'Размещение'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-3">
                {t.home.rooms.title}
              </h2>
              <p className="text-text-secondary text-lg mt-2">{t.home.rooms.subtitle}</p>
            </div>
            <Link href="/rooms" className="btn-secondary mt-6 md:mt-0">
              {t.home.rooms.viewAll}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={room.id} className="card-realistic overflow-hidden group">
                {/* 房间真实图片 */}
                <div className="relative h-64 photo-realistic overflow-hidden">
                  <Image
                    src={room.placeholder}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* 渐变叠加 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  {room.tag && (
                    <span className="absolute top-4 right-4 tag-realistic z-10">
                      {room.tag}
                    </span>
                  )}
                  {/* 图片叠加信息 */}
                  <div className="photo-overlay py-4">
                    <p className="text-xs opacity-80 uppercase tracking-wider">
                      {index === 0 ? 'Ocean View' : index === 1 ? 'Garden View' : 'Deluxe Suite'}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-3">{room.name}</h3>
                  <div className="flex items-center justify-between pt-4 border-t border-black/10">
                    <div>
                      <span className="text-2xl font-bold text-terracotta">¥{room.price}</span>
                      <span className="text-sm text-text-muted ml-1">{t.rooms.price}</span>
                    </div>
                    <Link 
                      href={`/booking?room=${room.id}`} 
                      className="text-terracotta hover:text-terracotta-dark font-medium flex items-center gap-1 transition-colors"
                    >
                      {t.rooms.bookNow} 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - 写实风格 */}
      <section className="py-24 gradient-warm text-white relative overflow-hidden">
        {/* 纹理叠加 */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-shadow-soft">
            {language === 'zh' ? '准备好开始您的三亚之旅了吗？' : 
             language === 'en' ? 'Ready to start your Sanya journey?' : 
             'Готовы начать путешествие в Санья?'}
          </h2>
          <p className="text-xl mb-10 opacity-95">
            {language === 'zh' ? '立即预订，享受早鸟优惠' : 
             language === 'en' ? 'Book now and enjoy early bird discounts' : 
             'Забронируйте сейчас и получите скидку раннего бронирования'}
          </p>
          <Link 
            href="/booking" 
            className="inline-block bg-white text-terracotta font-bold px-10 py-4 rounded-lg hover:bg-cream transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            {t.home.hero.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
