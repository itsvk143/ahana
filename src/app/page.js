"use client";

import React, { useState } from 'react';
import { 
  BookOpen, 
  MessageCircle, 
  CheckCircle, 
  Zap, 
  Clock, 
  Users, 
  Atom, 
  GraduationCap, 
  MapPin, 
  Mail,
  ArrowRight,
  Menu,
  X,
  Lightbulb,
  FileText,
  Calendar,
  Youtube,
  Search
} from 'lucide-react';

/* --- REUSABLE COMPONENTS --- */

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">{title}</h2>
    <div className="h-1.5 w-20 bg-indigo-500 mx-auto mb-4 rounded-full"></div>
    {subtitle && <p className="text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const ButtonPrimary = ({ children, className = "", ...props }) => (
  <button 
    className={`bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all transform hover:-translate-y-1 shadow-md ${className}`}
    {...props}
  >
    {children}
  </button>
);

const ButtonSecondary = ({ children, className = "", ...props }) => (
  <button 
    className={`bg-white hover:bg-indigo-50 text-indigo-600 border-2 border-indigo-600 font-semibold py-3 px-8 rounded-lg transition-all ${className}`}
    {...props}
  >
    {children}
  </button>
);

/* --- MAIN SECTIONS --- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollToSection('home')}
        >
            <div className="bg-indigo-600 p-2 rounded-lg">
                <Atom className="text-white w-6 h-6" />
            </div>
            <div className="font-bold text-xl md:text-2xl text-slate-800 tracking-tight">
                Prof <span className="text-indigo-600">SETU KUMAR THAKUR</span>
            </div>
        </div>
        
        <div className="hidden md:flex gap-8 font-medium text-slate-700">
          <button onClick={() => scrollToSection('home')} className="hover:text-indigo-600 transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-indigo-600 transition-colors">Faculty Profile</button>
          <button onClick={() => scrollToSection('courses')} className="hover:text-indigo-600 transition-colors">Courses</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-600 transition-colors">Contact</button>
        </div>

        <button 
            onClick={() => scrollToSection('contact')}
            className="hidden md:block bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
            Enroll Now
        </button>

        <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-4">
           <button onClick={() => scrollToSection('home')} className="text-left text-slate-700 py-2 border-b">Home</button>
           <button onClick={() => scrollToSection('about')} className="text-left text-slate-700 py-2 border-b">About</button>
           <button onClick={() => scrollToSection('courses')} className="text-left text-slate-700 py-2 border-b">Courses</button>
           <button onClick={() => scrollToSection('contact')} className="bg-indigo-600 text-white w-full py-2 rounded-md mt-2 text-center">Get Started</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative bg-gradient-to-br from-slate-50 to-indigo-50 min-h-[600px] flex items-center py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <span className="inline-block py-1 px-4 rounded-full bg-indigo-100 text-indigo-700 text-lg font-bold mb-6 tracking-wide uppercase">
             Mastering Physics for JEE & NEET
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Crack Competitive <br/>
            <span className="text-indigo-600 underline decoration-indigo-200">Physics Exams</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
            Senior Physics Lecturer at ALLEN CARRER INSTITUTE <br />Join SETU KUMAR THAKUR's advanced physics coaching for JEE, NEET, and Academic Excellence with 16+ years of pedagogical experience.
          </p>
          <div className="flex flex-col sm:row gap-4">
            <ButtonPrimary onClick={scrollToContact} className="flex items-center justify-center gap-2">
               <BookOpen className="w-5 h-5" /> Browse Courses
            </ButtonPrimary>
            <ButtonSecondary onClick={scrollToContact} className="flex items-center justify-center gap-2">
               <Youtube className="w-5 h-5" /> Free Masterclass
            </ButtonSecondary>
          </div>
          <div className="mt-8 flex items-center gap-6">
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold">ST</div>)}
             </div>
             <p className="text-sm text-slate-500 font-medium italic">Join 500+ students already learning</p>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-indigo-400 rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
            <img 
              src="/assets/PHOTO.jpeg" 
              alt="Physics Lecture" 
              className="relative z-10 w-full rounded-2xl shadow-2xl border-b-8 border-indigo-600"
            />
        </div>
      </div>
    </div>
  );
};

const KeyFeatures = () => {
  const features = [
    { icon: <Zap className="w-8 h-8 text-indigo-600" />, title: "Concept Clarity", desc: "First-principles approach" },
    { icon: <GraduationCap className="w-8 h-8 text-indigo-600" />, title: "JEE/NEET Focus", desc: "Targeted problem solving" },
    { icon: <FileText className="w-8 h-8 text-indigo-600" />, title: "Digital Notes", desc: "Complete study material" },
    { icon: <Search className="w-8 h-8 text-indigo-600" />, title: "Doubt Clearing", desc: "1-on-1 personalized help" },
  ];

  return (
    <div className="bg-white py-16 border-b">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center p-6 hover:bg-indigo-50 rounded-2xl transition-all">
              <div className="mb-4 bg-white shadow-sm w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg text-slate-800">{feature.title}</h3>
              <p className="text-slate-500 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const courses = [
    { title: "Class XI Foundations", icon: <Atom className="w-6 h-6"/>, desc: "Mechanics, Thermodynamics, and Waves. Building the core pillars for engineering and medical entrance." },
    { title: "Class XII Boards + Entrance", icon: <CheckCircle className="w-6 h-6"/>, desc: "Electromagnetism, Optics, and Modern Physics. Comprehensive coverage for Board and National exams." },
    { title: "JEE/NEET Crash Course", icon: <Zap className="w-6 h-6"/>, desc: "Intensive 3-month program focusing on high-yield topics, shortcuts, and time management." },
    { title: "Numerical Masterclass", icon: <Lightbulb className="w-6 h-6"/>, desc: "Special sessions dedicated to solving complex calculations and application-based physics problems." },
    { title: "Personal Tutoring", icon: <Users className="w-6 h-6"/>, desc: "Individualized attention for students needing specialized support or fast-paced advancement." },
    { title: "Laboratory Mentorship", icon: <Search className="w-6 h-6"/>, desc: "Guidance for practical exams and scientific research projects for higher secondary students." },
  ];

  return (
    <div id="courses" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Learning Modules" subtitle="Structured curriculum designed to transform abstract theories into intuitive understanding." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className="bg-indigo-50 text-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.desc}</p>
              <div className="text-indigo-600 font-semibold text-sm flex items-center gap-1 cursor-pointer">
                View Syllabus <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutDoctor = () => {
  return (
    <div id="about" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full -z-10 animate-pulse"></div>
            <img 
                src="assets/PHOTO.jpeg" 
                alt="Prof. SETU KUMAR THAKUR" 
                className="w-full rounded-2xl shadow-2xl relative z-10"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Meet Your Instructor
            </h2>
            <h3 className="text-indigo-600 font-bold text-xl mb-6 flex items-center gap-2">
                <GraduationCap /> PhD in Theoretical Physics | Assistant Professor
            </h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Myself Prof. SETU KUMAR THAKUR an experienced Lecturer with 9+ years of teaching experience. Currently serving as a <strong>SENIOR LECTURER</strong> at <strong>ALLEN CARRER  INSTITUTE</strong>, specializing in <strong>NEET, JEE & OTHER COMPETITIVE EXAMINATIONS.</strong>
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              His teaching philosophy centers on "Visualization before Mathematics." By helping students visualize physical phenomena, she makes complex equations intuitive. She has successfully mentored hundreds of students into top IITs and Medical Colleges across India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                    "9+ Years Academic Experience",
                    "Author of Physics Prep Guides",
                    "Ex-Senior Faculty (National Institute)",
                    "Researcher in Astrophysics"
                ].map((text, i) => (
                    <div key={i} className="flex items-center p-3 bg-slate-50 rounded-lg">
                        <CheckCircle className="text-indigo-500 mr-2 w-5 h-5" />
                        <span className="text-slate-700 font-medium">{text}</span>
                    </div>
                ))}
            </div>

            <ButtonPrimary onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Book a Free Demo Class
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClinicInfo = () => {
    return (
      <div id="contact" className="py-20 bg-slate-900 text-white rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <div>
                   <h2 className="text-4xl font-bold mb-6">Start Your Journey</h2>
                   <p className="text-slate-400 mb-10 text-lg">
                       Visit our learning center for offline classes or join our hybrid digital classroom from anywhere in the country.
                   </p>
                   
                   <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="bg-slate-800 p-3 rounded-lg mr-4">
                                <MapPin className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-white">The Physics Lab</h4>
                                <p className="text-slate-400">Prachi Enclave, Rail Vihar,<br/>Chandrasekharpur, Bhubaneswar, 751016</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start">
                            <div className="bg-slate-800 p-3 rounded-lg mr-4">
                                <Clock className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-white">Batch Timings</h4>
                                <p className="text-slate-400">Weekday Evenings: 5:00 PM - 8:30 PM</p>
                                <p className="text-slate-400">Weekend Intensives: 10:00 AM - 4:00 PM</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-slate-800 p-3 rounded-lg mr-4">
                                <Mail className="w-6 h-6 text-indigo-400" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl text-white">Admissions</h4>
                                <p className="text-slate-400">+91 70082 88862</p>
                                <p className="text-slate-400 font-mono">contact@physicswithdebashree.edu</p>
                            </div>
                        </div>
                   </div>
               </div>
               
               <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                   <h3 className="text-2xl font-bold mb-6 text-center">Inquiry Form</h3>
                   <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Student Name" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-indigo-500 outline-none" />
                        <input type="email" placeholder="Email Address" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-indigo-500 outline-none" />
                        <select className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-indigo-500 outline-none">
                            <option>Select Grade</option>
                            <option>Class XI</option>
                            <option>Class XII</option>
                            <option>JEE/NEET Aspirant</option>
                        </select>
                        <textarea placeholder="Any specific requirements?" rows="3" className="w-full bg-slate-900 border border-slate-600 rounded-lg p-3 text-white focus:border-indigo-500 outline-none"></textarea>
                        <button className="w-full bg-indigo-600 py-3 rounded-lg font-bold hover:bg-indigo-500 transition-colors">Request Callback</button>
                   </form>
               </div>
           </div>
        </div>
      </div>
    );
};

const Testimonials = () => {
  return (
    <div className="py-20 bg-indigo-50/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Success Stories" subtitle="Join the ranks of students who transformed their fear of physics into their highest-scoring subject." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: "Her method of explaining Gauss's Law was eye-opening. I never had to memorize another formula again.", author: "Aryan Sharma", role: "IIT Delhi '24" },
            { text: "The crash course helped me jump from 40 to 95 percentile in JEE Mains Physics in just 2 months!", author: "Ipsita Patra", role: "NEET Rank 452" },
            { text: "Best teacher in Bhubaneswar. The numerical problem-solving sessions are exceptionally well-structured.", author: "Siddharth B.", role: "CBSE XII (98/100)" },
          ].map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative border border-slate-100">
              <p className="text-slate-700 italic mb-6">"{t.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600 font-bold">
                  {t.author[0]}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-indigo-500 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
                <div className="font-bold text-2xl text-slate-800 mb-2">Prof. SETU KUMAR <span className="text-indigo-600">THAKUR</span></div>
                <p className="text-sm text-slate-500 font-medium">Empowering students through the lens of Physics.</p>
            </div>
            
            <div className="flex gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white cursor-pointer transition-all">
                    <Youtube className="w-5 h-5"/>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white cursor-pointer transition-all">
                    <MessageCircle className="w-5 h-5"/>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-indigo-600 hover:text-white cursor-pointer transition-all">
                    <Mail className="w-5 h-5"/>
                </div>
            </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 text-center">
            <p className="text-slate-400 text-xs tracking-widest uppercase">
                &copy; 2025 Education Portal | Physics with SETU KUMAR THAKUR. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      <Navbar />
      <Hero />
      <KeyFeatures />
      <AboutDoctor />
      <Services />
      <ClinicInfo />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;