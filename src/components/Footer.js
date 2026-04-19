"use client";

import React from 'react';
import { Heart, MessageCircle, Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 overflow-hidden">
                <img 
                  src="/assets/logo_final.png" 
                  alt="Ahana Gynaecare & IVF Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-white">Ahana Gynaecare</span>
                <span className="text-xs text-teal-400 font-medium">& IVF</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premier women's healthcare and fertility center in Bhubaneswar, dedicated to compassionate, advanced medical care since 2018.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/AhanaGynaecare/" target="_blank" rel="noopener noreferrer" 
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://wa.me/917894820510" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Our Services</h4>
            <ul className="space-y-3">
              {['IVF & Infertility', 'High Risk Pregnancy', 'Normal Delivery', 'Laparoscopy', 'PCOD/PCOS', 'Fetal Medicine'].map((s) => (
                <li key={s}>
                  <span className="text-gray-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm">Plot No. 119, District Center, Chandrasekharpur, Bhubaneswar - 751016</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:06746811111" className="text-gray-400 text-sm hover:text-teal-400">0674 681 1111</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+917894820510" className="text-gray-400 text-sm hover:text-teal-400">+91 78948 20510 (IVF)</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:ahanagynaecare@gmail.com" className="text-gray-400 text-sm hover:text-teal-400">ahanagynaecare@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ahana Gynaecare & IVF. All rights reserved. | NABH Accredited Hospital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
