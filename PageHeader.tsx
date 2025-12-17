import React from 'react';
import { Reveal } from './Reveal';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20 text-center">
        <Reveal width="100%">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h1>
          {subtitle && (
            <div className="flex items-center justify-center space-x-2 text-gray-300 text-sm font-medium uppercase tracking-widest">
              <span>Home</span>
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              <span className="text-blue-400">{subtitle}</span>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
};