'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';

export default function RoomsPage() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', label: t.rooms.filters.all },
    { id: 'ocean', label: t.rooms.filters.ocean },
    { id: 'garden', label: t.rooms.filters.garden },
    { id: 'suite', label: t.rooms.filters.suite },
  ];

  const rooms = [
    {
      id: 1,
      name: language === 'zh' ? '海景大床房' : language === 'en' ? 'Ocean View King Room' : 'Номер с видом на океан',
      type: 'ocean',
      price: 588,
      size: '35m²',
      bed: language === 'zh' ? '1.8米大床' : 'King Bed',
      capacity: 2,
      amenities: ['wifi', 'ac', 'tv', 'shower'],
      description: language === 'zh' ? '坐拥无敌海景，清晨醒来即可欣赏壮丽的日出' : 'Enjoy stunning ocean views and spectacular sunrise',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    },
    {
      id: 2,
      name: language === 'zh' ? '园景双床房' : language === 'en' ? 'Garden View Twin Room' : 'Номер с видом на сад',
      type: 'garden',
      price: 468,
      size: '30m²',
      bed: language === 'zh' ? '1.2米双床' : 'Twin Beds',
      capacity: 2,
      amenities: ['wifi', 'ac', 'tv', 'shower'],
      description: language === 'zh' ? '静谧的花园景观，让您在绿意中放松身心' : 'Peaceful garden view to relax your mind',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    },
    {
      id: 3,
      name: language === 'zh' ? '豪华海景套房' : language === 'en' ? 'Deluxe Ocean Suite' : 'Люкс с видом на океан',
      type: 'suite',
      price: 888,
      size: '60m²',
      bed: language === 'zh' ? '2.0米大床' : 'Super King',
      capacity: 3,
      amenities: ['wifi', 'ac', 'tv', 'shower', 'bathtub', 'balcony'],
      description: language === 'zh' ? '宽敞奢华的空间，独立客厅与卧室，尽享尊贵体验' : 'Spacious luxury with separate living room and bedroom',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    },
    {
      id: 4,
      name: language === 'zh' ? '家庭海景房' : language === 'en' ? 'Family Ocean Room' : 'Семейный номер с видом на океан',
      type: 'ocean',
      price: 688,
      size: '45m²',
      bed: language === 'zh' ? '1.8米+1.2米' : 'King + Single',
      capacity: 4,
      amenities: ['wifi', 'ac', 'tv', 'shower'],
      description: language === 'zh' ? '适合家庭出游，宽敞空间让全家人尽享欢乐' : 'Perfect for families with spacious room for everyone',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    },
    {
      id: 5,
      name: language === 'zh' ? '庭院花园套房' : language === 'en' ? 'Courtyard Garden Suite' : 'Люкс с садом',
      type: 'garden',
      price: 758,
      size: '55m²',
      bed: language === 'zh' ? '1.8米大床' : 'King Bed',
      capacity: 2,
      amenities: ['wifi', 'ac', 'tv', 'shower', 'bathtub', 'balcony'],
      description: language === 'zh' ? '私人庭院设计，独享热带花园的静谧与美好' : 'Private courtyard with exclusive tropical garden access',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    },
    {
      id: 6,
      name: language === 'zh' ? '顶层豪华别墅' : language === 'en' ? 'Penthouse Villa' : 'Пентхаус вилла',
      type: 'suite',
      price: 1288,
      size: '120m²',
      bed: language === 'zh' ? '2.0米大床' : 'Super King',
      capacity: 6,
      amenities: ['wifi', 'ac', 'tv', 'shower', 'bathtub', 'balcony', 'kitchen'],
      description: language === 'zh' ? '顶层尊享空间，360度海景，极致奢华体验' : 'Exclusive penthouse with 360° ocean views',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
    },
  ];

  const filteredRooms = filter === 'all' 
    ? rooms 
    : rooms.filter(room => room.type === filter);

  const amenityIcons: { [key: string]: string } = {
    wifi: '📶',
    ac: '❄️',
    tv: '📺',
    shower: '🚿',
    bathtub: '🛁',
    balcony: '🌅',
    kitchen: '🍳',
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header - 写实风格 */}
      <section className="py-20 gradient-warm text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-2 mb-4 rounded-full bg-white/20 backdrop-blur text-sm font-medium">
            {language === 'zh' ? '精选住宿' : language === 'en' ? 'Accommodations' : 'Размещение'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-soft">{t.rooms.title}</h1>
          <p className="text-xl opacity-95">{t.rooms.subtitle}</p>
        </div>
      </section>

      {/* Filter - 写实风格 */}
      <section className="py-8 bg-cream border-b border-black/5 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  filter === f.id
                    ? 'bg-terracotta text-white shadow-lg'
                    : 'bg-sand text-text-primary hover:bg-sand-dark shadow-sm'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Grid - 真实图片卡片 */}
      <section className="py-16 section-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <div key={room.id} className="card-realistic overflow-hidden group">
                {/* Room Image - 真实图片 */}
                <div className="relative h-64 photo-realistic overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* 渐变叠加 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  {/* 标签 */}
                  <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                    <span className="glass-natural px-3 py-1.5 text-sm rounded-lg text-text-primary font-medium">
                      {room.size}
                    </span>
                    <span className="glass-natural px-3 py-1.5 text-sm rounded-lg text-text-primary font-medium">
                      {room.bed}
                    </span>
                  </div>
                  {/* 图片叠加 */}
                  <div className="photo-overlay py-4">
                    <p className="text-xs opacity-80 uppercase tracking-wider">
                      {room.type === 'ocean' ? 'Sea View Room' : room.type === 'garden' ? 'Garden View' : 'Luxury Suite'}
                    </p>
                  </div>
                </div>

                {/* Room Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-2">{room.name}</h3>
                  <p className="text-text-secondary text-sm mb-4">{room.description}</p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.map((amenity) => (
                      <span key={amenity} className="text-xl" title={amenity}>
                        {amenityIcons[amenity] || '•'}
                      </span>
                    ))}
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-black/10">
                    <div>
                      <span className="text-2xl font-bold text-terracotta">¥{room.price}</span>
                      <span className="text-text-muted text-sm ml-1">{t.rooms.price}</span>
                    </div>
                    <Link
                      href={`/booking?room=${room.id}`}
                      className="btn-primary text-sm px-6 py-2.5"
                    >
                      {t.rooms.bookNow}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
