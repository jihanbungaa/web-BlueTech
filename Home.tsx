import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Database, Shield, Zap, Calendar, User } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group rounded-sm h-full flex flex-col">
    <div className="w-16 h-16 bg-slate-50 rounded-sm flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6 flex-grow text-sm">{desc}</p>
    <Link to="/services" className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wider">
      Detail Layanan <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

const Home: React.FC = () => {
  const latestPosts = [
    {
      title: "Tren Transformasi Digital 2024",
      date: "12 Oct 2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
      excerpt: "Bagaimana AI dan cloud mengubah lanskap bisnis modern."
    },
    {
      title: "Pentingnya Cyber Security UMKM",
      date: "28 Sep 2023",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
      excerpt: "Strategi perlindungan data hemat biaya untuk bisnis berkembang."
    },
    {
      title: "Memilih Cloud Provider Tepat",
      date: "15 Sep 2023",
      image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=600",
      excerpt: "Komparasi AWS, Azure, dan GCP untuk kebutuhan startup."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600")' }}
        ></div>
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-900/30 z-10"></div>
        
        <div className="container mx-auto px-6 relative z-20 pt-20">
          <div className="max-w-4xl">
            <Reveal>
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 px-4 py-2 rounded-sm mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                <span className="text-blue-50 text-xs font-bold uppercase tracking-widest">Leading IT Solutions Provider</span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Solusi Teknologi untuk <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Masa Depan Bisnis Anda
                </span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl border-l-4 border-blue-500 pl-6">
                Kami membantu perusahaan bertransformasi melalui inovasi digital, pengembangan sistem handal, dan strategi IT yang terukur untuk pertumbuhan berkelanjutan.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="primary" showIcon className="w-full sm:w-auto">Hubungi Kami</Button>
                </Link>
                <Link to="/services">
                  <Button variant="white" className="w-full sm:w-auto">Jelajahi Layanan</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Intro / About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Element */}
        <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative pl-8 pb-8">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team collaboration" 
                  className="rounded-sm shadow-2xl relative z-10"
                />
                <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-100 rounded-sm z-0 translate-x-4 translate-y-4"></div>
                
                <div className="absolute bottom-12 -right-6 bg-slate-900 p-8 rounded-sm shadow-xl hidden lg:block z-20">
                  <div className="flex items-center gap-4 mb-2">
                     <span className="text-5xl font-bold text-white">10</span>
                     <span className="text-4xl text-blue-500 font-light">+</span>
                  </div>
                  <p className="text-slate-400 text-xs uppercase tracking-widest font-semibold">Tahun Pengalaman</p>
                </div>
              </div>
            </Reveal>
            
            <div className="space-y-8">
              <Reveal delay={200}>
                <div className="flex items-center gap-2 mb-4">
                    <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
                    <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Tentang BlueTech</h4>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">Mengubah Tantangan Menjadi <span className="text-blue-600">Peluang Digital</span></h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Kami bukan sekadar vendor IT, tapi mitra strategis. Fokus kami adalah memberikan solusi teknologi yang pragmatis, efisien, dan berdampak langsung pada bottom-line bisnis Anda.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                  {[
                    "Tim Ahli Bersertifikasi",
                    "Solusi Scalable & Aman",
                    "Support 24/7 Premium",
                    "ROI Focused Strategy"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="font-semibold text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link to="/about">
                    <Button variant="outline">Tentang Perusahaan</Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <Reveal>
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-4">
                    <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
                    <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Layanan Kami</h4>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Solusi Komprehensif IT</h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
               <Link to="/services" className="hidden md:flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  Lihat Semua Layanan <ArrowRight className="w-5 h-5 ml-2" />
               </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={100}>
              <ServiceCard 
                icon={<Code className="w-8 h-8" />} 
                title="Software Dev" 
                desc="Aplikasi web dan mobile kustom yang dirancang presisi sesuai kebutuhan bisnis."
              />
            </Reveal>
            <Reveal delay={200}>
              <ServiceCard 
                icon={<Database className="w-8 h-8" />} 
                title="Cloud Solutions" 
                desc="Infrastruktur cloud yang aman, scalable, dan efisien untuk operasional modern."
              />
            </Reveal>
            <Reveal delay={300}>
              <ServiceCard 
                icon={<Shield className="w-8 h-8" />} 
                title="Cyber Security" 
                desc="Proteksi aset digital tingkat lanjut dari ancaman siber yang terus berkembang."
              />
            </Reveal>
            <Reveal delay={400}>
              <ServiceCard 
                icon={<Zap className="w-8 h-8" />} 
                title="Digital Strategy" 
                desc="Konsultasi transformasi digital untuk mengoptimalkan proses bisnis."
              />
            </Reveal>
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/services">
              <Button variant="outline" className="w-full">Lihat Semua Layanan</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
                    <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Wawasan & Berita</h4>
                    <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
                </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Artikel Terbaru</h2>
              <p className="text-slate-600">Update terkini seputar teknologi, tren bisnis, dan inovasi digital.</p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="group bg-white border border-slate-100 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                      News
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium uppercase tracking-wide">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" /> Admin
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      <Link to="/blog">{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link to="/blog" className="inline-flex items-center text-sm font-bold text-blue-600 hover:underline">
                      Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    
    </>
  );
};

export default Home;