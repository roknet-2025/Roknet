
'use client';

export default function FeatureSection() {
  const features = [
    {
      icon: 'ri-rocket-line',
      title: 'Roket Tasarımı',
      description: 'Öğrencilerimiz kendi roketlerini sıfırdan tasarlayıp geliştiriyor'
    },
    {
      icon: 'ri-team-line',
      title: 'Ekip Çalışması',
      description: 'İMHAD Derneği ve NEFTAIHL iş birliğiyle güçlü bir ekip'
    },
    {
      icon: 'ri-trophy-line',
      title: 'Yarışmalarda Başarı',
      description: 'Ulusal yarışmalarda okulumuzu gururla temsil ediyoruz'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'İnovatif Yaklaşım',
      description: 'Bilim ve teknoloji alanında yenilikçi çözümler üretiyoruz'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden ROKNET?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Gençlerin bilim ve teknoloji alanında aktif rol almasını sağlayan projemizin öne çıkan özellikleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-red-100 rounded-full mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <i className={`${feature.icon} text-3xl text-red-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
