import React from 'react';
import { motion } from 'framer-motion';
import { useSlides } from '../context/SlideContext';
import SlideList from '../components/SlideList';
import SlideEditor from '../components/SlideEditor';
import SlidePreview from '../components/SlidePreview';
import EditorToolbar from '../components/EditorToolbar';

function Editor() {
  const { slides, currentSlide } = useSlides();

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      <EditorToolbar />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Slide List */}
        <div className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
          <SlideList />
        </div>

        {/* Main Editor */}
        <div className="flex-1 flex">
          {/* Slide Preview */}
          <div className="flex-1 p-6 overflow-auto">
            <SlidePreview slide={slides[currentSlide]} />
          </div>

          {/* Properties Panel */}
          <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
            <SlideEditor slide={slides[currentSlide]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;