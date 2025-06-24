import React from 'react';
import { motion } from 'framer-motion';
import { useSlides } from '../context/SlideContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlus, FiTrash2, FiCopy } = FiIcons;

function SlideList() {
  const { slides, currentSlide, setCurrentSlide, addSlide, deleteSlide } = useSlides();

  const duplicateSlide = (slide) => {
    const newSlide = {
      ...slide,
      id: Date.now().toString(),
      title: `${slide.title} (Copy)`
    };
    addSlide(newSlide);
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Slides</h3>
        <button
          onClick={() => addSlide()}
          className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
        >
          <SafeIcon icon={FiPlus} className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-2">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-3 rounded-lg cursor-pointer transition-all duration-200 group ${
              currentSlide === index
                ? 'bg-primary-100 border-2 border-primary-300'
                : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-500 mb-1">Slide {index + 1}</div>
                <div className="font-medium text-gray-900 truncate text-sm">
                  {slide.title}
                </div>
                <div className="text-xs text-gray-600 mt-1 line-clamp-2">
                  {slide.content}
                </div>
              </div>
              
              <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    duplicateSlide(slide);
                  }}
                  className="p-1 text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <SafeIcon icon={FiCopy} className="h-3 w-3" />
                </button>
                {slides.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSlide(slide.id);
                    }}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <SafeIcon icon={FiTrash2} className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SlideList;