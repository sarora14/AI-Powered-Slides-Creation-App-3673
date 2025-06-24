import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiFileText, FiUpload, FiCpu, FiArrowRight, FiStar, FiUsers, FiTrendingUp } = FiIcons;

function Home() {
  const features = [
    {
      icon: FiFileText,
      title: 'Text to Slides',
      description: 'Convert your text content into beautiful slides instantly',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiUpload,
      title: 'Document Import',
      description: 'Upload PDFs, Word docs, and other files to create slides',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiCpu,
      title: 'AI Generation',
      description: 'Let AI create stunning presentations from your ideas',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiZap,
      title: 'Smart Templates',
      description: 'Choose from professionally designed templates',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { icon: FiUsers, value: '50K+', label: 'Active Users' },
    { icon: FiFileText, value: '1M+', label: 'Slides Created' },
    { icon: FiStar, value: '4.9', label: 'User Rating' },
    { icon: FiTrendingUp, value: '99%', label: 'Satisfaction' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6"
            >
              Create Amazing
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {' '}Presentations
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Transform your ideas into stunning slides with AI-powered tools. 
              Create from text, documents, or let our AI do the magic for you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/create"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Creating</span>
                <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
              </Link>
              
              <Link
                to="/templates"
                className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                Browse Templates
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Every Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to create professional presentations in minutes, not hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <SafeIcon icon={feature.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-4">
                  <SafeIcon icon={stat.icon} className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Create Your First Presentation?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who are already creating amazing presentations with SlideAI.
          </p>
          <Link
            to="/create"
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Get Started Free</span>
            <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;