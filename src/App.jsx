import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SlideProvider } from './context/SlideContext';
import Header from './components/Header';
import Home from './pages/Home';
import CreateSlides from './pages/CreateSlides';
import Editor from './pages/Editor';
import Templates from './pages/Templates';

function App() {
  return (
    <SlideProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateSlides />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/templates" element={<Templates />} />
          </Routes>
        </div>
      </Router>
    </SlideProvider>
  );
}

export default App;