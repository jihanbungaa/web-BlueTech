import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { Calendar, User, ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { BlogPost } from '../types';

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Tren Transformasi Digital di Tahun 2024",
    excerpt: "Pelajari bagaimana teknologi AI dan cloud computing mengubah lanskap bisnis di Indonesia tahun ini.",
    date: "12 Oct 2023",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: '2',
    title: "Pentingnya Cyber Security untuk UMKM",
    excerpt: "Mengapa bisnis kecil menengah menjadi target serangan siber dan bagaimana cara melindunginya.",
    date: "28 Sep 2023",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    content: "Content placeholder..."
  },
  {
    id: '3',
    title: "Memilih Cloud Provider yang Tepat",
    excerpt: "Panduan lengkap membandingkan AWS, Azure, dan Google Cloud untuk kebutuhan startup Anda.",
    date: "15 Sep 2023",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=800",
    content: "Content placeholder..."
  },
  {
    id: '4',
    title: "Masa Depan Web Development: Web 3.0",
    excerpt: "Apa itu Web 3.0 dan bagaimana dampaknya terhadap cara kita membangun aplikasi web di masa depan.",
    date: "05 Aug 2023",
    category: "Development",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    content: "Content placeholder..."
  },
  {
    id: '5',
    title: "Optimasi UI/UX untuk Konversi",
    excerpt: "Tips praktis meningkatkan penjualan melalui desain antarmuka yang lebih baik.",
    date: "22 Jul 2023",
    category: "Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=800",
    content: "Content placeholder..."
  },
  {
    id: '6',
    title: "Agile vs Waterfall: Mana yang Tepat?",
    excerpt: "Perbandingan metodologi pengembangan software untuk proyek enterprise.",
    date: "10 Jun 2023",
    category: "Management",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    content: "Content placeholder..."
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handlePostClick = (post: BlogPost) => {
    window.scrollTo(0, 0);
    setSelectedPost(post);
  };

  const handleBack = () => {
    window.scrollTo(0, 0);
    setSelectedPost(null);
  };

  if (selectedPost) {
    return (
      <>
        <div className="h-24 bg-slate-900"></div> {/* Spacer for fixed header */}
        <section className="py-20 bg-white min-h-screen">
          <div className="container mx-auto px-6 max-w-4xl">
            <button onClick={handleBack} className="flex items-center text-blue-600 font-bold mb-8 hover:underline uppercase tracking-wide text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Artikel
            </button>
            <div className="mb-10 text-center">
              <span className="bg-blue-100 text-blue-700 px-4 py-1.5 rounded-sm text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                {selectedPost.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {selectedPost.title}
              </h1>
              <div className="flex items-center justify-center text-slate-500 text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" /> {selectedPost.date}
                <span className="mx-4 text-slate-300">|</span>
                <User className="w-4 h-4 mr-2" /> Admin BlueTech
                <span className="mx-4 text-slate-300">|</span>
                <Clock className="w-4 h-4 mr-2" /> 5 min read
              </div>
            </div>
            <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-[500px] object-cover rounded-sm mb-12 shadow-2xl" />
            <div className="prose prose-lg prose-blue text-slate-600 leading-loose max-w-none">
              <p className="text-2xl text-slate-800 font-medium mb-8 leading-relaxed border-l-4 border-blue-600 pl-6 italic">{selectedPost.excerpt}</p>
              <p>{selectedPost.content}</p>
              <p>Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio.</p>
              <h3>Kesimpulan</h3>
              <p>Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader 
        title="Artikel & Berita" 
        subtitle="Wawasan Teknologi"
        backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600"
      />

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Reveal key={post.id} delay={index * 100}>
                <div 
                  onClick={() => handlePostClick(post)}
                  className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col border border-slate-100 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden h-56">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wide">
                      {post.category}
                    </div>
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/20 transition-colors duration-300"></div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-slate-400 text-xs mb-4 font-bold uppercase tracking-wide">
                      <Calendar className="w-3 h-3 mr-1.5" /> {post.date}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                      Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;