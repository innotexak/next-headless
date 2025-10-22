'use client';

import React from 'react';
import { useQuery } from '@apollo/client/react';
import { baseUrl, GET_BANNER } from './helpers/queries';


interface BannerProps {
  route?: string;
}


// Default fallback image
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1723384747376-90f201a3bd55?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1071';



export const Banner: React.FC<BannerProps> = () => {
   
  //apollo querie
  const { data, loading, error } = useQuery(GET_BANNER, {variables:{baseUrl:baseUrl, route:'/homepage'}});

  if (loading) {
    return (
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-gray-200 flex items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 p-6 md:p-12 lg:p-16 max-w-3xl">
          <p className="text-white text-lg">Loading banner...</p>
        </div>
      </section>
    );
  }

  // Navigate through the correct data structure
  const modules = data?.contentByRoute?.properties?.modules?.blocks || [];
  

  // Find the Banner block
  const bannerBlock = modules.find(
    (block: any) => block.contentProperties?.__typename === 'Banner'
  );

  const bannerData = bannerBlock?.contentProperties;

  // Extract data with fallbacks to defaults
  const heading = bannerData?.bannerHeading?.value || 'Welcome to Our Platform';
  const description = bannerData?.descripion?.value || 'Discover innovative solutions and transform your business with our cutting-edge technology and expert services.';
  const images = bannerData?.imagePicker?.blocks || [];
  
  const imageBlock = images[0];
  const imageUrl = imageBlock?.contentProperties?.umbracoFile?.value || DEFAULT_IMAGE;
  const altText = imageBlock?.contentProperties?.alternateText?.value || heading;

  // Show error notification if there was an error
  const showErrorNotification = error;

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={altText}
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Error notification banner */}
      {showErrorNotification && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-md px-4">
          <div className="bg-yellow-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg text-sm text-center">
            Unable to load custom content. Showing default banner.
          </div>
        </div>
      )}

      {/* Content Overlay - Bottom Left */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-md">
            {/* Title - First Line */}
            {heading && (
              <h1 className="text-xl md:text-md font-bold text-white leading-tight mb-3 md:mb-4">
                {heading}
              </h1>
            )}
            
            {/* Description - Second Line */}
            {description && (
              <p className="text-base sm:text-sm md:text-md text-gray-200 leading-relaxed max-w-2xl">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};