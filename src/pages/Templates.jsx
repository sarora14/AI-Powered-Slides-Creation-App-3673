import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSlides } from '../context/SlideContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiEye, FiDownload } = FiIcons;

function Templates() {
  const navigate = useNavigate();
  const { setSlides, updatePresentation } = useSlides();

  const templates = [
    {
      id: 1,
      name: 'Modern Business',
      description: 'Clean and professional design for business presentations',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
      category: 'Business',
      slides: [
        {
          id: '1',
          title: 'Your Business Title',
          content: 'Subtitle or tagline goes here',
          type: 'title',
          background: '#1e293b',
          textColor: '#ffffff',
          fontSize: '32px',
          fontFamily: 'Inter',
          layout: 'center',
          elements: []
        },
        {
          id: '2',
          title: 'About Us',
          content: '• Our mission and vision\n• Company values\n• Team expertise\n• Market position',
          type: 'content',
          background: '#ffffff',
          textColor: '#1e293b',
          fontSize: '18px',
          fontFamily: 'Inter',
          layout: 'left',
          elements: []
        }
      ]
    },
    {
      id: 2,
      name: 'Creative Portfolio',
      description: 'Vibrant and artistic template for creative professionals',
      thumbnail: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop',
      category: 'Creative',
      slides: [
        {
          id: '1',
          title: 'Creative Portfolio',
          content: 'Showcasing innovative work',
          type: 'title',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          textColor: '#ffffff',
          fontSize: '32px',
          fontFamily: 'Inter',
          layout: 'center',
          elements: []
        }
      ]
    },
    {
      id: 3,
      name: 'Academic Research',
      description: 'Formal template perfect for academic and research presentations',
      thumbnail: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
      category: 'Academic',
      slides: [
        {
          id: '1',
          title: 'Research Title',
          content: 'Subtitle and author information',
          type: 'title',
          background: '#ffffff',
          textColor: '#2d3748',
          fontSize: '32px',
          fontFamily: 'Georgia',
          layout: 'center',
          elements: []
        }
      ]
    }
  ];

  const handleTemplateSelect = (template) => {
    setSlides(template.slides);
    updatePresentation({ title: template.name, template: template.name });
    navigate('/editor');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 mb-6"
          >
            <SafeIcon icon={FiArrowLeft} className="h-5 w-5" />
            <span>Back to Home</span>
          </button>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Presentation Templates
          </h1>
          <p className="text-xl text-gray-600">
            Choose from professionally designed templates to get started quickly
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {template.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {template.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {template.description}
                </p>
                
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleTemplateSelect(template)}
                    className="flex-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                  >
                    Use Template
                  </button>
                  
                  <button className="p-2 text-gray-500 hover:text-primary-600 border border-gray-300 rounded-lg hover:border-primary-300 transition-colors">
                    <SafeIcon icon={FiEye} className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">More Templates Coming Soon</h3>
            <p className="text-gray-600 mb-4">
              We're working on adding more beautiful templates for every occasion.
            </p>
            <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-medium">
              Get Notified
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Templates;