import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { GALLERY_ITEMS } from '../constants';

const MiniGallerySection: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="gallery" className="py-24 md:py-32">
            <div className="container mx-auto">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-4xl font-bold glow-text text-center mb-12">Design Gallery</h2>
                </AnimatedSection>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {GALLERY_ITEMS.map((item, index) => (
                        <AnimatedSection key={item.id} delay={`delay-${index * 100}`}>
                            <div 
                                className="group relative aspect-square rounded-lg overflow-hidden glow-border-hover cursor-pointer"
                                onClick={() => openModal(item.imageUrl)}
                            >
                                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <i className="ph ph-eye text-4xl text-white"></i>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease-out]"
                    onClick={closeModal}
                >
                    <img 
                        src={selectedImage} 
                        alt="Fullscreen preview" 
                        className="max-w-full max-h-full object-contain rounded-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on the image
                    />
                    <button 
                        className="absolute top-4 right-4 text-white text-4xl hover:text-cyan-400 transition-colors"
                        aria-label="Close image preview"
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    );
};

export default MiniGallerySection;
