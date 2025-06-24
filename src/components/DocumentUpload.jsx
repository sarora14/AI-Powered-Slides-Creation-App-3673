import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUpload, FiFile, FiArrowRight, FiLoader, FiX, FiCheck } = FiIcons;

function DocumentUpload({ onSlidesCreated }) {
  const [files, setFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      type: file.type
    })));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
    },
    maxFiles: 5
  });

  const removeFile = (id) => {
    setFiles(files.filter(f => f.id !== id));
  };

  const processDocuments = async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock processing - in real app, this would extract text from documents
    const mockSlides = [
      {
        id: '1',
        title: 'Document Summary',
        content: 'This presentation was generated from your uploaded documents.',
        type: 'title',
        background: '#ffffff',
        textColor: '#333333',
        fontSize: '32px',
        fontFamily: 'Inter',
        layout: 'center',
        elements: []
      },
      {
        id: '2',
        title: 'Key Points',
        content: '• Main topics extracted from your documents\n• Important findings and insights\n• Relevant data and statistics\n• Actionable recommendations',
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
        title: 'Next Steps',
        content: 'Based on the document analysis:\n\n• Review and customize the generated content\n• Add your own insights and commentary\n• Include additional visual elements\n• Present with confidence',
        type: 'content',
        background: '#ffffff',
        textColor: '#333333',
        fontSize: '18px',
        fontFamily: 'Inter',
        layout: 'left',
        elements: []
      }
    ];
    
    setIsProcessing(false);
    onSlidesCreated(mockSlides, 'Document Presentation');
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl">
          <SafeIcon icon={FiUpload} className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Upload Documents</h2>
          <p className="text-gray-600">Upload PDFs, Word docs, or text files to create slides</p>
        </div>
      </div>

      {/* File Upload Area */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
          isDragActive
            ? 'border-primary-400 bg-primary-50'
            : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <SafeIcon icon={FiUpload} className="h-8 w-8 text-gray-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {isDragActive ? 'Drop files here' : 'Drop files or click to upload'}
            </h3>
            <p className="text-gray-500 mt-1">
              Supports PDF, Word, PowerPoint, and text files (max 5 files)
            </p>
          </div>
        </div>
      </div>

      {/* Uploaded Files */}
      {files.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Uploaded Files</h3>
          {files.map((fileObj) => (
            <motion.div
              key={fileObj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
            >
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiFile} className="h-8 w-8 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">{fileObj.name}</p>
                  <p className="text-sm text-gray-500">{formatFileSize(fileObj.size)}</p>
                </div>
              </div>
              <button
                onClick={() => removeFile(fileObj.id)}
                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
              >
                <SafeIcon icon={FiX} className="h-5 w-5" />
              </button>
            </motion.div>
          ))}
        </div>
      )}

      {/* Supported Formats */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <h3 className="font-semibold text-green-900 mb-2">Supported Formats:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-green-800">
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCheck} className="h-4 w-4" />
            <span>PDF (.pdf)</span>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCheck} className="h-4 w-4" />
            <span>Word (.doc, .docx)</span>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCheck} className="h-4 w-4" />
            <span>PowerPoint (.ppt, .pptx)</span>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiCheck} className="h-4 w-4" />
            <span>Text (.txt)</span>
          </div>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={processDocuments}
        disabled={files.length === 0 || isProcessing}
        className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isProcessing ? (
          <>
            <SafeIcon icon={FiLoader} className="h-5 w-5 animate-spin" />
            <span>Processing Documents...</span>
          </>
        ) : (
          <>
            <span>Generate Slides</span>
            <SafeIcon icon={FiArrowRight} className="h-5 w-5" />
          </>
        )}
      </motion.button>
    </div>
  );
}

export default DocumentUpload;