import React from 'react';
import { ProjectThumbnailsGrid } from './ProjectThumbnails';

export const ProjectThumbnailsDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Premium Portfolio Project Thumbnails
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Consistent modern visual style featuring MacBook mockups with elegant shadows 
            and clean layouts, perfect for a developer portfolio.
          </p>
        </div>
        
        <ProjectThumbnailsGrid />
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            All thumbnails feature consistent sizing, design theme, and visual quality
          </p>
        </div>
      </div>
    </div>
  );
};