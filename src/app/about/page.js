"use client";

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CheckCircle2, Award, Users, Heart, Microscope, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 text-center" style={{background: 'linear-gradient(135deg, #F0FAF8 0%, #E8F5F1 100%)'}}>
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">📍 Photo Gallery</span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Ahana Gynaecare</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Established in 2018, Ahana Gynaecare & IVF has grown into a premier healthcare institution in Bhubaneswar, dedicated to women's health and fertility.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-teal-50 rounded-3xl p-10">
            <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
              <Heart className="w-7 h-7 text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To provide advanced, ethical, and compassionate women's healthcare and fertility solutions, ensuring every patient receives personalized attention and the best possible clinical outcomes.
            </p>
          </div>
          <div className="bg-pink-50 rounded-3xl p-10">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-pink-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the most trusted healthcare partner for women in Eastern India, recognized for our excellence in IVF technology, surgical precision, and patient-centric care.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Ahana?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Microscope className="w-6 h-6" />, title: "Advanced IVF Technology", desc: "State-of-the-art embryology lab with the latest assisted reproduction technology." },
              { icon: <Users className="w-6 h-6" />, title: "Expert Multidisciplinary Team", desc: "Specialists in gynaecology, IVF, laparoscopy, fetal medicine, and anesthesiology." },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "NABH Accredited", desc: "Nationally accredited for quality standards in patient safety and clinical care." },
              { icon: <Heart className="w-6 h-6" />, title: "Patient-First Philosophy", desc: "Every decision is guided by what's best for the patient's health and wellbeing." },
              { icon: <Award className="w-6 h-6" />, title: "23+ Years of Excellence", desc: "Over two decades of trusted obstetric and gynaecological expertise in Bhubaneswar." },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: "Transparent & Ethical", desc: "Honest communication, fair pricing, and no unnecessary interventions — ever." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '1600+', label: 'Happy Patients' },
            { number: '23+', label: 'Years Experience' },
            { number: '4.7★', label: 'Google Rating' },
            { number: '2018', label: 'Established' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-4xl font-bold mb-2">{s.number}</div>
              <div className="text-teal-200 text-sm uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
