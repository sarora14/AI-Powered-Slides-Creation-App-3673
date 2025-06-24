import React from 'react';
import { motion } from 'framer-motion';

function SlidePreview({ slide }) {
  if (!slide) return null;

  const getLayoutStyles = () => {
    switch (slide.layout) {
      case 'center':
        return 'justify-center items-center text-center';
      case 'left':
        return 'justify-start items-start text-left';
      case 'right':
        return 'justify-end items-end text-right';
      default:
        return 'justify-start items-start text-left';
    }
  };

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-4xl aspect-video bg-white rounded-xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: slide.background }}
      >
        <div className={`h-full p-12 flex flex-col ${getLayoutStyles()}`}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-bold mb-6"
            style={{
              color: slide.textColor,
              fontSize: slide.type === 'title' ? '3rem' : '2rem',
              fontFamily: slide.fontFamily,
              lineHeight: '1.2'
            }}
          >
            {slide.title}
          </motion.h1>
          
          {slide.content && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="whitespace-pre-wrap"
              style={{
                color: slide.textColor,
                fontSize: slide.fontSize,
                fontFamily: slide.fontFamily,
                lineHeight: '1.6'
              }}
            >
              {slide.content}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default SlidePreview;