import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { Code, Smartphone, Database, Layout, Shield, Cloud, Server, BarChart, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    desc: "Membangun website enterprise-grade yang responsif, cepat, dan scalable menggunakan stack teknologi modern (React, Next.js, Node.js)."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    desc: "Pengembangan aplikasi mobile native (iOS/Android) dan cross-platform yang memberikan pengalaman pengguna seamless."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX Design",
    desc: "Perancangan antarmuka yang estetis dan fungsional berbasis data research untuk memaksimalkan kepuasan pengguna."
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    desc: "Migrasi, manajemen, dan optimasi infrastruktur cloud (AWS, Google Cloud, Azure) untuk efisiensi biaya dan performa."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cyber Security",
    desc: "Audit keamanan komprehensif, penetration testing, dan implementasi firewall untuk melindungi aset digital vital."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Analytics & AI",
    desc: "Transformasi data mentah menjadi wawasan strategis menggunakan teknologi Big Data dan algoritma Machine Learning."
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "IT Infrastructure",
    desc: "Setup dan maintenance jaringan, server fisik/virtual, serta manajemen perangkat keras untuk operasional 24/7."
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Digital Marketing",
    desc: "Strategi pemasaran digital terukur (SEO, SEM, Social Media) untuk meningkatkan visibilitas brand dan konversi sales."
  }
];

const Services: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Layanan Kami" 
        subtitle="Solusi IT Terintegrasi"
        backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Reveal>
              <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
                  <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Expertise Area</h4>
                  <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Keahlian Teknis untuk Bisnis Modern</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Kami menawarkan rangkaian lengkap layanan IT end-to-end. Dari konsep hingga implementasi, kami memastikan setiap solusi mendukung tujuan bisnis Anda.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <Reveal key={index} delay={index * 50}>
                <div className="group p-8 border border-slate-100 bg-white rounded-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-sm flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {item.desc}
                  </p>
                  <a href="/contact" className="inline-flex items-center text-sm font-bold text-slate-400 group-hover:text-blue-600 uppercase tracking-wider transition-colors">
                    Konsultasi <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-3">Butuh solusi yang lebih spesifik?</h3>
            <p className="text-slate-300 text-lg">Tim engineer kami siap merancang Custom Solution sesuai workflow unik Anda.</p>
          </div>
          <a href="/contact" className="px-8 py-4 bg-white text-blue-900 font-bold rounded-sm hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap">
            Hubungi Tim Sales
          </a>
        </div>
      </section>
    </>
  );
};

export default Services;