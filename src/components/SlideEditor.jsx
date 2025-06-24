import React from 'react';
import { useSlides } from '../context/SlideContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiType, FiPalette, FiLayout, FiSettings } = FiIcons;

function SlideEditor({ slide }) {
  const { updateSlide } = useSlides();

  if (!slide) return null;

  const handleUpdate = (field, value) => {
    updateSlide(slide.id, { [field]: value });
  };

  const layouts = [
    { value: 'left', label: 'Left Aligned' },
    { value: 'center', label: 'Centered' },
    { value: 'right', label: 'Right Aligned' }
  ];

  const fonts = [
    { value: 'Inter', label: 'Inter' },
    { value: 'Arial', label: 'Arial' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'Times New Roman', label: 'Times New Roman' }
  ];

  return (
    <div className="p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Slide Properties</h3>

      {/* Content Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-3">
          <SafeIcon icon={FiType} className="h-4 w-4 text-gray-500" />
          <span className="font-medium text-gray-700">Content</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={slide.title}
            onChange={(e) => handleUpdate('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            value={slide.content}
            onChange={(e) => handleUpdate('content', e.target.value)}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
          />
        </div>
      </div>

      {/* Layout Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-3">
          <SafeIcon icon={FiLayout} className="h-4 w-4 text-gray-500" />
          <span className="font-medium text-gray-700">Layout</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Text Alignment
          </label>
          <select
            value={slide.layout}
            onChange={(e) => handleUpdate('layout', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {layouts.map(layout => (
              <option key={layout.value} value={layout.value}>
                {layout.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Styling Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-3">
          <SafeIcon icon={FiPalette} className="h-4 w-4 text-gray-500" />
          <span className="font-medium text-gray-700">Styling</span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Background Color
          </label>
          <input
            type="color"
            value={slide.background}
            onChange={(e) => handleUpdate('background', e.target.value)}
            className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Text Color
          </label>
          <input
            type="color"
            value={slide.textColor}
            onChange={(e) => handleUpdate('textColor', e.target.value)}
            className="w-full h-10 border border-gray-300 rounded-lg cursor-pointer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Family
          </label>
          <select
            value={slide.fontFamily}
            onChange={(e) => handleUpdate('fontFamily', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {fonts.map(font => (
              <option key={font.value} value={font.value}>
                {font.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Font Size
          </label>
          <input
            type="range"
            min="12"
            max="48"
            value={parseInt(slide.fontSize)}
            onChange={(e) => handleUpdate('fontSize', `${e.target.value}px`)}
            className="w-full"
          />
          <div className="text-sm text-gray-500 mt-1">{slide.fontSize}</div>
        </div>
      </div>
    </div>
  );
}

export default SlideEditor;