import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiType, FiArrowRight, FiLoader } = FiIcons;

function TextToSlides({ onSlidesCreated }) {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const processText = async () => {
    if (!text.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Split text into paragraphs and create slides
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    const slides = [];
    
    // Title slide
    if (title.trim()) {
      slides.push({
        id: '1',
        title: title.trim(),
        content: 'Welcome to your presentation',
        type: 'title',
        background: '#ffffff',
        textColor: '#333333',
        fontSize: '32px',
        fontFamily: 'Inter',
        layout: 'center',
        elements: []
      });
    }
    
    // Content slides
    paragraphs.forEach((paragraph, index) => {
      const lines = paragraph.split('\n');
      const slideTitle = lines[0] || `Slide ${index + (title ? 2 : 1)}`;
      const slideContent = lines.slice(1).join('\n') || paragraph;
      
      slides.push({
        id: (index + (title ? 2 : 1)).toString(),
        title: slideTitle,
        content: slideContent,
        type: 'content',
        background: '#ffffff',
        textColor: '#333333',
        fontSize: '18px',
        fontFamily: 'Inter',
        layout: 'left',
        elements: []
      });
    });
    
    setIsProcessing(false);
    onSlidesCreated(slides, title || 'Text Presentation');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
          <SafeIcon icon={FiType} className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Create Slides from Text</h2>
          <p className="text-gray-600">Paste your content and we'll organize it into slides</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Presentation Title (Optional)
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter presentation title..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Content
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your text here... Separate different topics with double line breaks to create multiple slides."
            className="w-full h-64 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Tips for better slides:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Use double line breaks to separate different slides</li>
          <li>• Start each section with a clear heading</li>
          <li>• Keep content concise and focused</li>
          <li>• Use bullet points for lists</li>
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={processText}
        disabled={!text.trim() || isProcessing}
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isProcessing ? (
          <>
            <SafeIcon icon={FiLoader} className="h-5 w-5 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <>
            <span>Create Slides</span>
            <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
          </>
        )}
      </motion.button>
    </div>
  );
}

export default TextToSlides;