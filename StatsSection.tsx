
'use client';

export default function StatsSection() {
  const stats = [
    { number: '25+', label: 'Aktif Öğrenci' },
    { number: '5+', label: 'Tamamlanan Proje' },
    { number: '3+', label: 'Yarışma Katılımı' },
    { number: '100%', label: 'Azim ve Kararlılık' }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Rakamlarla ROKNET</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Projemizin başarılarını gösteren sayısal veriler
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
