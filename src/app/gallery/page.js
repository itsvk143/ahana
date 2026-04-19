'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Heart, X, ChevronLeft, ChevronRight, Loader2, AlertCircle, Facebook, Images } from 'lucide-react';

export default function GalleryPage() {
  const [photos, setPhotos] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [liked, setLiked] = useState(new Set());
  const observerRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isFbToken, setIsFbToken] = useState(false);

  const fetchPhotos = useCallback(async (cursor = null) => {
    if (loading) return;
    setLoading(true);
    try {
      const url = `/api/gallery${cursor ? `?cursor=${cursor}` : ''}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch photos');
      const data = await res.json();
      setPhotos(prev => cursor ? [...prev, ...data.photos] : data.photos);
      setNextCursor(data.nextCursor);
      setIsFbToken(data.isFbToken || false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setInitialLoading(false);
    }
  }, [loading]);

  useEffect(() => { fetchPhotos(); }, []);

  useEffect(() => {
    if (!sentinelRef.current) return;
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && nextCursor && !loading) {
        fetchPhotos(nextCursor);
      }
    }, { threshold: 0.1 });
    observerRef.current.observe(sentinelRef.current);
    return () => observerRef.current?.disconnect();
  }, [nextCursor, loading, fetchPhotos]);

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const prev = () => setLightbox(l => ({ ...l, index: (l.index - 1 + photos.length) % photos.length }));
  const next = () => setLightbox(l => ({ ...l, index: (l.index + 1) % photos.length }));
  const toggleLike = (id) => setLiked(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });

  useEffect(() => {
    const handleKey = (e) => {
      if (!lightbox.open) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox.open]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 text-center" style={{background: 'linear-gradient(135deg, #F0FAF8 0%, #E8F5F1 100%)'}}>
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Images className="w-4 h-4 inline mr-1" />Photo Gallery
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Moments at Ahana</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A glimpse into the heartwarming moments, our state-of-the-art facilities, and the lives we have touched.
          </p>
        </div>
      </section>



      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {initialLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-10 h-10 text-teal-600 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-500">{error}</div>
          ) : (
            <>
              <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                {photos.map((photo, i) => (
                  <div
                    key={photo.id}
                    className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                    onClick={() => openLightbox(i)}
                  >
                    <img
                      src={photo.url}
                      alt={photo.caption || `Ahana gallery photo ${i + 1}`}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      {photo.caption && (
                        <p className="text-white text-xs font-medium line-clamp-2 flex-1 mr-2">{photo.caption}</p>
                      )}
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleLike(photo.id); }}
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${liked.has(photo.id) ? 'bg-red-500 text-white scale-110' : 'bg-white/80 text-gray-700'}`}
                      >
                        <Heart className="w-4 h-4" fill={liked.has(photo.id) ? 'white' : 'none'} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sentinel for infinite scroll */}
              <div ref={sentinelRef} className="h-10 mt-8" />

              {loading && !initialLoading && (
                <div className="flex justify-center py-8">
                  <Loader2 className="w-8 h-8 text-teal-600 animate-spin" />
                </div>
              )}

              {!nextCursor && photos.length > 0 && (
                <div className="text-center mt-8">
                  <p className="text-gray-400 text-sm mb-4">You've reached the end of the gallery!</p>
                  <a
                    href="https://www.facebook.com/AhanaGynaecare/photos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md"
                  >
                    <Facebook className="w-5 h-5" /> See More on Facebook
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && photos[lightbox.index] && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 rounded-full p-2" onClick={closeLightbox}>
            <X className="w-6 h-6" />
          </button>
          <button className="absolute left-4 text-white/80 hover:text-white bg-white/10 rounded-full p-3" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src={photos[lightbox.index].url}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute right-4 text-white/80 hover:text-white bg-white/10 rounded-full p-3" onClick={(e) => { e.stopPropagation(); next(); }}>
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 text-white/60 text-sm">{lightbox.index + 1} / {photos.length}</div>
        </div>
      )}

      <Footer />
    </div>
  );
}
