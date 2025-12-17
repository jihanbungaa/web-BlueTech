import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Tentang Kami" 
        subtitle="Profil Perusahaan"
        backgroundImage="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600"
      />

      {/* Company Description */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Reveal>
                <div className="flex items-center gap-2 mb-4">
                    <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
                    <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Who We Are</h4>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">Pioneering Digital Excellence <br/> Since 2014</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  BlueTech didirikan dengan satu keyakinan utama: teknologi harus menjadi enabler, bukan penghalang. Kami adalah tim insinyur, desainer, dan strategis yang berdedikasi untuk menciptakan solusi digital yang bermakna.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Selama lebih dari satu dekade, kami telah bermitra dengan perusahaan multinasional hingga startup visioner, membantu mereka menavigasi kompleksitas era digital dengan solusi yang elegan, scalable, dan berorientasi masa depan.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5"/>
                        <span className="font-semibold text-slate-800">ISO 27001 Certified</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5"/>
                        <span className="font-semibold text-slate-800">24/7 Support Team</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5"/>
                        <span className="font-semibold text-slate-800">Agile Methodology</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle className="text-blue-600 w-5 h-5"/>
                        <span className="font-semibold text-slate-800">Global Partners</span>
                    </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="relative">
                 <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-slate-100 -z-10 translate-x-10 -translate-y-10 rounded-sm"></div>
                 <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=500" alt="Office" className="rounded-sm w-full h-64 object-cover shadow-lg" />
                    <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=500" alt="Meeting" className="rounded-sm w-full h-64 object-cover mt-12 shadow-lg" />
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Fondasi & Nilai Kami</h2>
                <p className="text-slate-600">Prinsip yang mengarahkan setiap langkah dan keputusan kami.</p>
            </Reveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Reveal delay={100}>
              <div className="bg-white p-10 shadow-sm border-t-4 border-blue-600 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Visi Kami</h3>
                <p className="text-slate-600 leading-relaxed">
                  Menjadi mitra teknologi global terdepan yang dikenal karena inovasi, kualitas, dan komitmen terhadap kesuksesan klien.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="bg-white p-10 shadow-sm border-t-4 border-blue-600 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Misi Kami</h3>
                <p className="text-slate-600 leading-relaxed">
                  Menghadirkan solusi teknologi mutakhir yang memberdayakan bisnis untuk beroperasi lebih efisien, aman, dan kompetitif di pasar global.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="bg-white p-10 shadow-sm border-t-4 border-blue-600 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Nilai Kami</h3>
                <p className="text-slate-600 leading-relaxed">
                  Integritas, Inovasi, Kolaborasi, dan Keunggulan adalah pilar utama dalam setiap kode yang kami tulis dan setiap strategi yang kami buat.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;