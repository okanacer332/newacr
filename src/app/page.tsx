import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      {/* Container yüksekliğini artırıyoruz ki scroll alanı oluşsun.
        Her section için yaklaşık 1.5 ekran boyu (150vh) ayırdık.
      */}
      <div className="relative h-[350vh]"> 
        <Solutions />
      </div>
      
      {/* Footer / CTA Geçici Alan */}
      <footer className="h-[50vh] bg-neutral-950 flex items-center justify-center border-t border-white/10">
        <div className="text-center">
             <h2 className="text-3xl font-bold text-white mb-4">Hazır mısınız?</h2>
             <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                Proje Başlat
             </button>
        </div>
      </footer>
    </main>
  );
}