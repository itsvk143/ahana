"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Calendar, ArrowRight, User, Clock } from 'lucide-react';
import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: 'What Happens During a Pap Smear?',
    excerpt: 'A Pap smear is a simple yet crucial procedure for detecting cervical cancer early. Here\'s what you need to know before your appointment.',
    image: '/assets/blog/pap-smear.png',
    author: 'Dr. Swarnima Das',
    date: 'April 10, 2025',
    readTime: '4 min read',
    category: 'Preventive Care',
  },
  {
    id: 2,
    title: '3 Foods Every Pregnant Woman Should Add to Her Diet',
    excerpt: 'Nutrition during pregnancy is vital. These three superfoods can help support your baby\'s development and keep you healthy.',
    image: '/assets/blog/pregnancy-foods.png',
    author: 'Dr. Sujit Kumar Behera',
    date: 'March 28, 2025',
    readTime: '5 min read',
    category: 'Pregnancy',
  },
  {
    id: 3,
    title: 'What Is Menopause? Early Signs & Symptoms',
    excerpt: 'Menopause is a natural biological process. Understanding the early signs can help you prepare and manage your health effectively.',
    image: '/assets/blog/menopause.png',
    author: 'Dr. Shweta Pani',
    date: 'March 15, 2025',
    readTime: '6 min read',
    category: 'Women\'s Health',
  },
  {
    id: 4,
    title: 'Normal Pregnancy vs High-Risk Pregnancy – Key Differences',
    excerpt: 'Not all pregnancies are the same. Learn about the key factors that define a high-risk pregnancy and how we manage them at Ahana.',
    image: '/assets/blog/high-risk-pregnancy.png',
    author: 'Dr. Sujit Kumar Behera',
    date: 'February 20, 2025',
    readTime: '7 min read',
    category: 'High-Risk Pregnancy',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center" style={{background: 'linear-gradient(135deg, #F0FAF8 0%, #E8F5F1 100%)'}}>
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">📖 Health Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Health Insights & Advice</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Expert articles from our doctors on women's health, fertility, pregnancy, and gynaecological care.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
