
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MissionVision() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Misyon & Vizyon</h1>
              <div className="w-24 h-1 bg-red-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-red-50 rounded-2xl p-8">
                <div className="w-20 h-20 flex items-center justify-center bg-red-100 rounded-full mb-6">
                  <i className="ri-target-line text-3xl text-red-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Gençlerin bilimsel düşünceleriyle tanışmasını sağlamak, model roket ve havacılık alanında 
                  deneyim edinmek ve Türkiye'nin model roket teknolojilerine katkıda bulunmak için 
                  bireyler istihdam ediliyor.
                </p>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mb-6">
                  <i className="ri-eye-line text-3xl text-blue-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Vizyonumuz</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Türkiye'nin genç nesillerine model roket teknolojileri alanında lider olan, ulusal ve 
                  uluslararası yarışmalarda başarılarıyla tanınan bir öğrenci topluluğu olmaktır.
                </p>
              </div>
            </div>

            <div 
              className="relative rounded-2xl overflow-hidden mb-12 h-96 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://readdy.ai/api/search-image?query=Futuristic%20space%20technology%20laboratory%20with%20advanced%20rocket%20prototypes%20and%20engineering%20equipment%2C%20young%20students%20and%20engineers%20working%20on%20innovative%20aerospace%20projects%2C%20modern%20clean%20workspace%20with%20holographic%20displays%20and%203D%20rocket%20models%2C%20inspiring%20vision%20of%20space%20exploration%20future%2C%20bright%20lighting%20with%20technology%20elements&width=800&height=400&seq=mission1&orientation=landscape')`
              }}
            >
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white max-w-2xl mx-auto px-4">
                  <h3 className="text-4xl font-bold mb-4">Geleceği Şekillendiriyoruz</h3>
                  <p className="text-xl">Bilim, teknoloji ve azimle uzaya doğru...</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8 mb-12">
              <h3 className="text-3xl font-bold text-center mb-8">Temel Değerlerimiz</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                    <i className="ri-book-line text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Bilim</h4>
                  <p className="text-gray-300">Bilimsel metodu temel alan yaklaşım</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                    <i className="ri-heart-line text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Azim</h4>
                  <p className="text-gray-300">Hedeflere ulaşmada kararlılık</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                    <i className="ri-star-line text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">İnanç</h4>
                  <p className="text-gray-300">Başarıya olan güven ve inanç</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-red-600 rounded-full mx-auto mb-4">
                    <i className="ri-team-line text-2xl"></i>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">İş birliği</h4>
                  <p className="text-gray-300">Güçlü ekip çalışması ruhu</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-red-700 text-white rounded-2xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Hedefimiz Net!</h3>
              <p className="text-xl mb-6">
                Türkiye'nin model roket teknolojilerinde söz sahibi olan genç nesilleri yetiştirmek
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  Ulusal Yarışmalar
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  Uluslararası Başarı
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  Teknoloji Lideri
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  Genç Yetenek
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
