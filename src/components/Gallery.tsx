import React, { useState } from 'react';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'tech', label: 'Tech Events' },
    { id: 'cultural', label: 'Cultural Events' },
    { id: 'art', label: 'Art Events' },
    { id: 'fashion', label: 'Fashion Events' },
    { id: 'thrill', label: 'Thrill Events' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`py-2 px-4 rounded-full transition-colors ${
              activeCategory === category.id
                ? 'bg-yellow-500 text-black font-bold'
                : 'bg-gray-700 hover:bg-gray-600 text-white'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map(image => (
          <div 
            key={image.id} 
            className="overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image.url} 
              alt={image.alt} 
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-center mt-4 text-white">{selectedImage.alt}</p>
          </div>
          <button 
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;