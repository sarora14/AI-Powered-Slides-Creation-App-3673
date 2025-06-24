import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCpu, FiArrowRight, FiLoader, FiZap, FiTarget, FiUsers, FiClock } = FiIcons;

function AIGenerator({ onSlidesCreated }) {
  const [topic, setTopic] = useState('');
  const [audience, setAudience] = useState('general');
  const [duration, setDuration] = useState('10');
  const [style, setStyle] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);

  const audiences = [
    { value: 'general', label: 'General Audience' },
    { value: 'business', label: 'Business Professionals' },
    { value: 'students', label: 'Students' },
    { value: 'technical', label: 'Technical Team' },
    { value: 'executives', label: 'Executives' }
  ];

  const styles = [
    { value: 'professional', label: 'Professional' },
    { value: 'creative', label: 'Creative' },
    { value: 'minimal', label: 'Minimal' },
    { value: 'modern', label: 'Modern' },
    { value: 'academic', label: 'Academic' }
  ];

  const generateSlides = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    // Mock AI-generated slides based on topic
    const aiSlides = [
      {
        id: '1',
        title: topic,
        content: `An AI-generated presentation about ${topic}`,
        type: 'title',
        background: style === 'creative' ? '#f0f9ff' : '#ffffff',
        textColor: '#333333',
        fontSize: '32px',
        fontFamily: 'Inter',
        layout: 'center',
        elements: []
      },
      {
        id: '2',
        title: 'Overview',
        content: `• Introduction to ${topic}\n• Key concepts and definitions\n• Current trends and developments\n• Practical applications`,
        type: 'content',
        background: '#ffffff',
        textColor: '#333333',
        fontSize: '18px',
        fontFamily: 'Inter',
        layout: 'left',
        elements: []
      },
      {
        id: '3',
        title: 'Key Benefits',
        content: `Understanding ${topic} provides:\n\n• Enhanced knowledge and expertise\n• Improved decision-making capabilities\n• Competitive advantages\n• Future-ready skills`,
        type: 'content',
        background: '#ffffff',
        textColor: '#333333',
        fontSize: '18px',
        fontFamily: 'Inter',
        layout: 'left',
        elements: []
      },
      {
        id: '4',
        title: 'Implementation Strategy',
        content: `Steps to implement ${topic}:\n\n1. Assessment and planning\n2. Resource allocation\n3. Execution and monitoring\n4. Evaluation and optimization`,
        type: 'content',
        background: '#ffffff',
        textColor: '#333333',
        fontSize: '18px',
        fontFamily: 'Inter',
        layout: 'left',
        elements: []
      },
      {
        id: '5',
        title: 'Conclusion',
        content: `• ${topic} offers significant opportunities\n• Implementation requires careful planning\n• Success depends on proper execution\n• Continuous improvement is essential`,
        type: 'content',
        background: '#ffffff',
        textColor: '#333333',
        fontSize: '18px',
        fontFamily: 'Inter',
        layout: 'left',
        elements: []
      }
    ];
    
    setIsGenerating(false);
    onSlidesCreated(aiSlides, `${topic} - AI Generated`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
          <SafeIcon icon={FiCpu} className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI Slide Generator</h2>
          <p className="text-gray-600">Let AI create a complete presentation for you</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Topic Input */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <SafeIcon icon={FiTarget} className="inline h-4 w-4 mr-1" />
            Presentation Topic
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Digital Marketing Strategy, Climate Change, Project Management..."
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        {/* Audience Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <SafeIcon icon={FiUsers} className="inline h-4 w-4 mr-1" />
            Target Audience
          </label>
          <select
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {audiences.map(aud => (
              <option key={aud.value} value={aud.value}>{aud.label}</option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <SafeIcon icon={FiClock} className="inline h-4 w-4 mr-1" />
            Presentation Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
          </select>
        </div>

        {/* Style Selection */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            <SafeIcon icon={FiZap} className="inline h-4 w-4 mr-1" />
            Presentation Style
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {styles.map(styleOption => (
              <button
                key={styleOption.value}
                onClick={() => setStyle(styleOption.value)}
                className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                  style === styleOption.value
                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {styleOption.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Features */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <h3 className="font-semibold text-purple-900 mb-2">AI will create:</h3>
        <ul className="text-sm text-purple-800 space-y-1">
          <li>• Structured content based on your topic</li>
          <li>• Appropriate slides for your audience</li>
          <li>• Optimized length for your duration</li>
          <li>• Professional styling and layout</li>
          <li>• Relevant talking points and insights</li>
        </ul>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={generateSlides}
        disabled={!topic.trim() || isGenerating}
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isGenerating ? (
          <>
            <SafeIcon icon={FiLoader} className="h-5 w-5 animate-spin" />
            <span>AI is generating your slides...</span>
          </>
        ) : (
          <>
            <SafeIcon icon={FiZap} className="h-5 w-5" />
            <span>Generate with AI</span>
            <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
          </>
        )}
      </motion.button>
    </div>
  );
}

export default AIGenerator;