"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { 
  Phone, MessageCircle, CheckCircle2, ShieldCheck, Clock, Users, Baby, 
  Stethoscope, MapPin, Mail, ArrowRight, Heart, Microscope, Star,
  Award, Activity
} from 'lucide-react';

/* ── FLOATING BUTTONS ── */
const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
    <a href="https://wa.me/917894820510" target="_blank" rel="noopener noreferrer"
      className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
      <MessageCircle className="w-6 h-6" />
    </a>
    <a href="tel:06746811111"
      className="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300">
      <Phone className="w-6 h-6" />
    </a>
  </div>
);

/* ── HERO SECTION ── */
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20" style={{background: 'linear-gradient(135deg, #F0FAF8 0%, #E8F5F1 50%, #F4E1D2 100%)'}}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
      <div className="order-2 lg:order-1">
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <ShieldCheck className="w-4 h-4" />
          NABH Accredited Hospital
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Advanced Women's Health <span className="text-teal-700">&amp; IVF Solutions</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
          Experience compassionate care combined with state-of-the-art fertility technology. We are dedicated to turning your dreams of parenthood into reality.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href="#contact" 
            className="bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-teal-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
            Book Consultation <ArrowRight className="w-5 h-5" />
          </a>
          <a href="tel:06746811111"
            className="border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-full font-semibold text-base hover:bg-teal-50 transition-all flex items-center gap-2">
            <Phone className="w-5 h-5" /> 0674 681 1111
          </a>
        </div>
        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-700">1600+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-700">23+</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-700">4.7★</div>
            <div className="text-sm text-gray-500 uppercase tracking-wide">Google Rating</div>
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2 relative">
        <div className="absolute -inset-4 bg-teal-100 rounded-[3rem] opacity-50 blur-2xl"></div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/50">
          <img src="/assets/hospital.png" alt="Ahana Gynaecare & IVF Building" className="w-full h-auto object-cover" />
        </div>
        <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Clock className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <div className="text-xs text-gray-500">24/7 Emergency</div>
            <div className="text-sm font-bold text-gray-900">Always here for you</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── SERVICES ── */
const services = [
  { icon: <Microscope className="w-8 h-8" />, title: "IVF & Infertility", desc: "Advanced IVF, IUI, ICSI and complete fertility solutions with high success rates." },
  { icon: <Baby className="w-8 h-8" />, title: "High Risk Pregnancy", desc: "Specialized care for high-risk pregnancies with 24/7 monitoring and expert management." },
  { icon: <Heart className="w-8 h-8" />, title: "Normal Delivery", desc: "Safe, natural birthing experiences with skilled obstetricians and support staff." },
  { icon: <Activity className="w-8 h-8" />, title: "Laparoscopy", desc: "Minimally invasive laparoscopic surgery for fibroids, cysts, endometriosis & more." },
  { icon: <Stethoscope className="w-8 h-8" />, title: "PCOD / PCOS", desc: "Comprehensive hormonal and metabolic management for PCOD/PCOS patients." },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Fetal Medicine", desc: "Advanced fetal anomaly scans, 4D ultrasound, and high-risk pregnancy monitoring." },
];

const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">What We Offer</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Specialties</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Comprehensive women's healthcare services delivered with clinical excellence and compassionate care.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="group p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white hover:bg-teal-50/30">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-100 transition-colors">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
            <div className="text-teal-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Learn More <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── INFRASTRUCTURE ── */
const Infrastructure = () => (
  <section id="infrastructure" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">World Class Facilities</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Our Infrastructure</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { img: '/assets/ivf_lab.png', title: 'Advanced IVF Lab', desc: 'State-of-the-art embryology lab with latest technology for optimal success rates.' },
          { img: '/assets/maternity.png', title: 'Premium Maternity Suites', desc: 'Comfortable, private suites designed for a positive birthing experience.' },
          { img: '/assets/laparoscopy.png', title: 'Laparoscopy Theatre', desc: 'Hi-definition laparoscopic equipment for precision minimally invasive surgeries.' },
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div className="h-56 overflow-hidden">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── DOCTOR PROFILE ── */
const DoctorProfile = () => (
  <section id="doctor" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-8 -left-8 w-48 h-48 bg-teal-50 rounded-full -z-10"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pink-50 rounded-full -z-10"></div>
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
          <img src="/assets/doctor_final.png" alt="Dr. Sujit Kumar Behera" className="w-full h-auto object-cover" />
        </div>
      </div>

      <div>
        <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">Chief Specialist</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2">Dr. Sujit Kumar Behera</h2>
        <p className="text-teal-600 font-medium mb-6">MBBS, MS (Obs & Gynae) | Senior Consultant & Founder</p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          With over 23 years of expertise in Obstetrics & Gynaecology, Dr. Behera has transformed the lives of thousands of families. A pioneer in IVF and fertility treatments in Odisha, he combines technical mastery with genuine compassion for every patient.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {['23+ Years Experience', 'IVF Specialist', 'NABH Accredited', '1600+ Deliveries'].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-teal-50 rounded-xl">
              <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
              <span className="text-gray-700 font-medium text-sm">{item}</span>
            </div>
          ))}
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 bg-teal-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-800 transition-all shadow-lg">
          Book a Consultation <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
);

/* ── TEAM SECTION ── */
const TeamSection = () => {
  const team = [
    { name: 'Dr. Swarnima Das', image: '/assets/dr_swarnima.png' },
    { name: 'Dr. Sanjeev Behera', image: '/assets/dr_sanjeev.png' },
    { name: 'Dr. Shweta Pani', image: '/assets/dr_shweta.png' },
  ];
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">Our Experts</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Meet Our Expert Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((doc, i) => (
            <div key={i} className="group transition-all duration-500 hover:-translate-y-3">
              <div className="relative bg-gray-50 rounded-[2.5rem] overflow-hidden h-[420px] flex items-center justify-center shadow-md hover:shadow-2xl transition-all">
                <img src={doc.image} alt={doc.name} className="h-full w-full object-contain drop-shadow-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── TESTIMONIALS ── */
const Testimonials = () => {
  const reviews = [
    { text: "Dr. Behera and his team are exceptional. After 3 years of struggle, we finally have our baby. Forever grateful!", name: "Priya Mohanty", role: "IVF Patient", rating: 5 },
    { text: "The entire staff is so caring and professional. My delivery was smooth and I felt safe throughout.", name: "Saswati Das", role: "Maternity Patient", rating: 5 },
    { text: "Best gynaecology hospital in Bhubaneswar. The infrastructure and care level is truly world-class.", name: "Reena Patra", role: "PCOS Patient", rating: 5 },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-teal-600 font-semibold uppercase tracking-widest text-sm">Patient Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Patients Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100">
              <div className="flex gap-1 mb-4">
                {Array.from({length: r.rating}).map((_, j) => <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-600 italic mb-6 text-sm leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm">{r.name[0]}</div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{r.name}</div>
                  <div className="text-teal-600 text-xs font-medium">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── CONTACT SECTION ── */
const Contact = () => (
  <section id="contact" className="py-20 bg-teal-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      <div>
        <span className="text-teal-300 font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Book an Appointment</h2>
        <p className="text-teal-100 mb-8 leading-relaxed">Our team is here to help you 24/7. Reach out to schedule a consultation with our expert specialists.</p>
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 bg-teal-800 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <div className="font-semibold mb-1">Our Location</div>
              <div className="text-teal-200 text-sm">Plot No. 119, District Center, Chandrasekharpur, Bhubaneswar - 751016</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-teal-800 rounded-xl flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <div className="font-semibold mb-1">Call Us</div>
              <div className="text-teal-200 text-sm">0674 681 1111 | +91 78948 20510 (IVF)</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-teal-800 rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <div className="font-semibold mb-1">Email</div>
              <div className="text-teal-200 text-sm">ahanagynaecare@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-teal-800 rounded-xl flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-teal-300" />
            </div>
            <div>
              <div className="font-semibold mb-1">Timings</div>
              <div className="text-teal-200 text-sm">Mon–Sat: 9:00 AM – 8:00 PM | 24/7 Emergency</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
        <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-teal-300 focus:outline-none focus:border-teal-400 text-sm" />
          <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-teal-300 focus:outline-none focus:border-teal-400 text-sm" />
          <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-teal-300 focus:outline-none focus:border-teal-400 text-sm" />
          <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-teal-100 focus:outline-none focus:border-teal-400 text-sm">
            <option value="">Select Service</option>
            <option>IVF & Infertility</option>
            <option>High Risk Pregnancy</option>
            <option>Normal Delivery</option>
            <option>Laparoscopy</option>
            <option>PCOD/PCOS</option>
            <option>Fetal Medicine</option>
            <option>General Gynaecology</option>
          </select>
          <textarea placeholder="Your Message" rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-teal-300 focus:outline-none focus:border-teal-400 text-sm resize-none"></textarea>
          <button className="w-full bg-white text-teal-900 py-4 rounded-xl font-bold hover:bg-teal-50 transition-all text-sm shadow-lg">
            Send Request →
          </button>
        </form>
      </div>
    </div>
  </section>
);

/* ── MAIN PAGE ── */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Infrastructure />
      <DoctorProfile />
      <TeamSection />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}