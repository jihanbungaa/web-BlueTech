import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHeader 
        title="Hubungi Kami" 
        subtitle="Mari Berkolaborasi"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <Reveal>
                <div className="flex items-center gap-2 mb-4">
                    <span className="h-1 w-10 bg-blue-600 rounded-full"></span>
                    <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Get in Touch</h4>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Punya Pertanyaan atau Ide Proyek?</h2>
                <p className="text-slate-600 leading-relaxed mb-10 text-lg">
                  Jangan ragu untuk menghubungi kami. Tim konsultan kami siap mendengarkan kebutuhan bisnis Anda dan memberikan solusi teknologi yang tepat.
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm text-blue-600 mb-2">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-slate-900 text-lg">Kantor Pusat</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Jalan Jendral Sudirman No. 45<br/>Jakarta Pusat, Indonesia 10220</p>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm text-blue-600 mb-2">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-slate-900 text-lg">Telepon</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">+62 21 555 0123 (Hunting)<br/>+62 812 3456 7890 (WA)</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm text-blue-600 mb-2">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-slate-900 text-lg">Email</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">hello@bluetech.co.id<br/>support@bluetech.co.id</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm text-blue-600 mb-2">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h5 className="font-bold text-slate-900 text-lg">Jam Operasional</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">Senin - Jumat: 08:30 - 17:30<br/>Sabtu - Minggu: Tutup</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-10 rounded-sm shadow-sm border border-slate-100">
              <Reveal delay={200}>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nama Lengkap</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Subjek</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-slate-600"
                    >
                      <option value="">Pilih Tujuan...</option>
                      <option value="Consultation">Konsultasi Proyek</option>
                      <option value="Quote">Permintaan Penawaran</option>
                      <option value="Partnership">Kemitraan</option>
                      <option value="Career">Karir</option>
                      <option value="Other">Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Pesan</label>
                    <textarea 
                      rows={5}
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      placeholder="Jelaskan kebutuhan proyek Anda..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">Kirim Pesan</Button>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="h-[500px] w-full bg-slate-200 border-t border-slate-300">
        <iframe 
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.299933555234!2d106.81971777499!3d-6.224128093766986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4cf6b8769%3A0x6737517c2e3992b8!2sJl.%20Jend.%20Sudirman%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1709123456789!5m2!1sen!2sid" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%)' }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;