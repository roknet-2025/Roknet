
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20rocket%20launch%20facility%20with%20sleek%20metallic%20rockets%20on%20launch%20pads%20against%20deep%20space%20background%20with%20stars%20and%20galaxies%2C%20futuristic%20aerospace%20engineering%20technology%2C%20professional%20industrial%20photography%20with%20dramatic%20lighting%2C%20high-tech%20space%20exploration%20equipment%2C%20clean%20geometric%20structures%2C%20advanced%20propulsion%20systems%20visible%2C%20dark%20cosmic%20atmosphere%20with%20subtle%20red%20accent%20lighting&width=1920&height=1080&seq=hero1&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            🚀 <span className="text-red-500">Genç Fikirlerden</span> Model Rokete!
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-200">
            İMHAD Derneği ve NEFTAIHL'in ortak yürüttüğü ROKNET projesi ile kendi roketimizi tasarlıyor, 
            geliştiriyor ve ulusal yarışmalarda boy gösteriyoruz. Bilim, azim ve inançlarla ilgili çalışmalar yapıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hakkimizda" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Projemizi Keşfet
            </Link>
            <Link href="/iletisim" 
                  className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              İletişime Geç
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}