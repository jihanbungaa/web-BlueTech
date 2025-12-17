import React, { useEffect, useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { CheckCircle, Clock, Users, Award } from 'lucide-react';
import { Stat } from '../types';

const stats: Stat[] = [
  { label: 'Proyek Selesai', value: 250, suffix: '+' },
  { label: 'Klien Puas', value: 120, suffix: '+' },
  { label: 'Ahli IT', value: 45, suffix: '' },
  { label: 'Penghargaan', value: 15, suffix: '' },
];

const Counter: React.FC<{ end: number; suffix: string }> = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

const WhyUs: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Keunggulan Kami" 
        subtitle="Mengapa BlueTech"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <Reveal>
              <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Value Proposition</h4>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Standar Kualitas Tanpa Kompromi</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Di BlueTech, kami tidak hanya menulis kode, kami membangun masa depan bisnis Anda. Setiap proyek dikerjakan dengan presisi tinggi, mengikuti standar industri global, dan melalui proses quality assurance yang ketat.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Transparansi Penuh', desc: 'Laporan progress berkala dan akses langsung ke manajemen proyek.' },
                  { title: 'Teknologi Terdepan', desc: 'Kami selalu menggunakan stack teknologi terbaru yang stabil dan aman.' },
                  { title: 'On-Time Delivery', desc: 'Manajemen waktu yang disiplin untuk memastikan proyek selesai tepat waktu.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Apa Kata Mereka?</h3>
                <blockquote className="italic text-slate-600 text-lg mb-6">
                  "BlueTech mengubah cara kami beroperasi. Sistem ERP yang mereka bangun meningkatkan efisiensi kami hingga 40% dalam 3 bulan pertama. Sangat profesional dan responsif."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-300 rounded-full"></div>
                  <div>
                    <p className="font-bold text-slate-900">Budi Santoso</p>
                    <p className="text-sm text-slate-500">CEO, PT Maju Sejahtera</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-blue-600 p-8 rounded-sm text-white">
                <h3 className="text-2xl font-bold mb-4">Jaminan Keamanan</h3>
                <p className="text-blue-100">
                  Kami bersertifikasi ISO 27001 untuk manajemen keamanan informasi, menjamin data Anda aman bersama kami.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <Reveal key={index} delay={index * 100}>
                <div className="p-4">
                  <div className="text-4xl md:text-5xl font-bold text-blue-500 mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;