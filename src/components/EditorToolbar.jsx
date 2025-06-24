import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSlides } from '../context/SlideContext';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiSave, FiDownload, FiPlay, FiSettings } = FiIcons;

function EditorToolbar() {
  const navigate = useNavigate();
  const { presentation, slides } = useSlides();

  const handleExport = () => {
    // Mock export functionality
    const dataStr = JSON.stringify({ presentation, slides }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${presentation.title}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handlePreview = () => {
    // Mock preview functionality
    alert('Preview mode would open here');
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/create')}
            className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="h-4 w-4" />
            <span>Back</span>
          </button>
          
          <div className="h-6 w-px bg-gray-300" />
          
          <div>
            <h1 className="font-semibold text-gray-900">{presentation.title}</h1>
            <p className="text-sm text-gray-500">{slides.length} slides</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={handlePreview}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiPlay} className="h-4 w-4" />
            <span>Preview</span>
          </button>
          
          <button
            onClick={handleExport}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <SafeIcon icon={FiDownload} className="h-4 w-4" />
            <span>Export</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <SafeIcon icon={FiSave} className="h-4 w-4" />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditorToolbar;