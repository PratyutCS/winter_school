import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlowingBox from '../components/GlowingBox';

// Import background images
import bg1 from '../../assets/background/bg_image_1.jpg';
import bg2 from '../../assets/background/bg_image_2.jpg';
import bg3 from '../../assets/background/bg_image_3.jpg';
import bg4 from '../../assets/background/bg_image_4.jpg';
import bg5 from '../../assets/background/bg_image_5.jpg';
import bg6 from '../../assets/background/bg_image_6.jpg';

export default function Photostream() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    // Placeholder for photos. In the future, this can be fetched from an API or a static list.
    const photos = [
        // { id: 1, src: bg1, alt: 'Workshop Photo 1', caption: 'Workshop Highlights', label: 'Session 1' },
        // { id: 2, src: bg2, alt: 'Workshop Photo 2', caption: 'Deciphered Event', label: 'Session 2' },
        // { id: 3, src: bg3, alt: 'Workshop Photo 3', caption: 'Poster Submission', label: 'Session 3' },
        // { id: 4, src: bg4, alt: 'Workshop Photo 4', caption: 'Event Schedule', label: 'Session 4' },
        // { id: 5, src: bg5, alt: 'Workshop Photo 5', caption: 'Event Schedule', label: 'Session 5' },
        // { id: 6, src: bg6, alt: 'Workshop Photo 6', caption: 'Event Schedule', label: 'Session 6' },
    ];

    const [selectedPhoto, setSelectedPhoto] = React.useState(null);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedPhoto) return;

            if (e.key === 'ArrowRight') {
                const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
                const nextIndex = (currentIndex + 1) % photos.length;
                setSelectedPhoto(photos[nextIndex]);
            } else if (e.key === 'ArrowLeft') {
                const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
                const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
                setSelectedPhoto(photos[prevIndex]);
            } else if (e.key === 'Escape') {
                setSelectedPhoto(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPhoto, photos]);

    return (
        <div className="min-h-screen flex flex-col pt-[40px]">
            <main className="flex-grow px-4 md:px-8 pb-12">
                <div className="max-w-6xl mx-auto mt-16">
                    <h1
                        className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
                        data-aos="fade-down"
                        style={{ textShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }}
                    >
                        Photostream
                    </h1>

                    {photos.length === 0 ? (
                        <div className="flex justify-center" data-aos="fade-up">
                            <GlowingBox className="p-8 text-center max-w-2xl">
                                <p className="text-xl text-black font-medium">
                                    Photos from the workshop sessions will be uploaded here soon. Stay tuned!
                                </p>
                            </GlowingBox>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {photos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="group relative cursor-pointer"
                                    data-aos="fade-up"
                                    onClick={() => setSelectedPhoto(photo)}
                                >
                                    <GlowingBox className="overflow-hidden !p-0 h-64 transition-transform duration-300 group-hover:scale-105 border-none">
                                        <img
                                            src={photo.src}
                                            alt={photo.alt}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-900/10 to-pink-900/10 backdrop-blur-sm text-white px-6 py-2 rounded-full border border-white/10 shadow-lg z-10 transition-all duration-300 group-hover:scale-105">
                                            <span className="text-sm font-medium tracking-wide whitespace-nowrap">{photo.label}</span>
                                        </div>
                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity duration-300">
                                                View Full Image
                                            </span>
                                        </div>
                                    </GlowingBox>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 text-white text-4xl hover:text-purple-400 transition-colors"
                            onClick={() => setSelectedPhoto(null)}
                        >
                            &times;
                        </button>

                        {/* Navigation Buttons for better UX */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-6xl transition-colors hidden md:block"
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
                                const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
                                setSelectedPhoto(photos[prevIndex]);
                            }}
                        >
                            &#8249;
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-6xl transition-colors hidden md:block"
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
                                const nextIndex = (currentIndex + 1) % photos.length;
                                setSelectedPhoto(photos[nextIndex]);
                            }}
                        >
                            &#8250;
                        </button>

                        <img
                            src={selectedPhoto.src}
                            alt={selectedPhoto.alt}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />

                        {/* Session Label in Lightbox */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-900/10 to-pink-900/10 backdrop-blur-sm text-white px-8 py-3 rounded-full border border-white/10 shadow-lg z-20 transition-all duration-300">
                            <span className="text-lg font-medium tracking-wide whitespace-nowrap">{selectedPhoto.label}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
