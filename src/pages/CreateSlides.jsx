import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSlides } from '../context/SlideContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import TextToSlides from '../components/TextToSlides';
import DocumentUpload from '../components/DocumentUpload';
import AIGenerator from '../components/AIGenerator';

const { FiFileText, FiUpload, FiCpu, FiArrowLeft } = FiIcons;

function CreateSlides() {
  const [activeTab, setActiveTab] = useState('text');
  const navigate = useNavigate();
  const { setSlides, updatePresentation } = useSlides();

  const tabs = [
    {
      id: 'text',
      label: 'From Text',
      icon: FiFileText,
      description: 'Paste your content and create slides instantly'
    },
    {
      id: 'document',
      label: 'From Document',
      icon: FiUpload,
      description: 'Upload PDF, Word, or other documents'
    },
    {
      id: 'ai',
      label: 'AI Generator',
      icon: FiCpu,
      description: 'Let AI create slides from your topic'
    }
  ];

  const handleSlidesCreated = (slides, title = 'New Presentation') => {
    setSlides(slides);
    updatePresentation({ title });
    navigate('/editor');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Create Your Presentation
          </h1>
          <p className="text-xl text-gray-600">
            Choose how you'd like to create your slides
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-2 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-6 rounded-xl transition-all duration-300 text-left ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <SafeIcon icon={tab.icon} className="h-6 w-6" />
                  <span className="font-semibold text-lg">{tab.label}</span>
                </div>
                <p className={`text-sm ${
                  activeTab === tab.id ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {tab.description}
                </p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          {activeTab === 'text' && (
            <TextToSlides onSlidesCreated={handleSlidesCreated} />
          )}
          {activeTab === 'document' && (
            <DocumentUpload onSlidesCreated={handleSlidesCreated} />
          )}
          {activeTab === 'ai' && (
            <AIGenerator onSlidesCreated={handleSlidesCreated} />
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default CreateSlides;