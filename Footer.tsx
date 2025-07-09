
'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">ROKNET</h3>
            <p className="text-gray-300 leading-relaxed">
              İMHAD Derneği ve NEFTAIHL iş birliğiyle yürütülen öğrenci merkezli roketçilik projesi
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-red-400 transition-colors">Ana Sayfa</a>
              <a href="/hakkimizda" className="block text-gray-300 hover:text-red-400 transition-colors">Hakkımızda</a>
              <a href="/misyon-vizyon" className="block text-gray-300 hover:text-red-400 transition-colors">Misyon & Vizyon</a>
              <a href="/iletisim" className="block text-gray-300 hover:text-red-400 transition-colors">İletişim</a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/modelroknet" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-colors">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="mailto:modelroknet@gmail.com" 
                 className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-colors">
                <i className="ri-mail-line text-lg"></i>
              </a>
              <a href="https://wa.me/905510789071" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 rounded-full transition-colors">
                <i className="ri-whatsapp-line text-lg"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 ROKNET. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
