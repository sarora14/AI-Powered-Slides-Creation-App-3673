import React, { createContext, useContext, useReducer } from 'react';

const SlideContext = createContext();

const initialState = {
  slides: [
    {
      id: '1',
      title: 'Welcome to Your Presentation',
      content: 'Click to edit this slide',
      type: 'title',
      background: '#ffffff',
      textColor: '#333333',
      fontSize: '24px',
      fontFamily: 'Inter',
      layout: 'center',
      elements: []
    }
  ],
  currentSlide: 0,
  presentation: {
    title: 'Untitled Presentation',
    theme: 'default',
    template: 'modern'
  },
  history: [],
  isGenerating: false
};

function slideReducer(state, action) {
  switch (action.type) {
    case 'ADD_SLIDE':
      return {
        ...state,
        slides: [...state.slides, action.payload],
        currentSlide: state.slides.length
      };
    
    case 'UPDATE_SLIDE':
      return {
        ...state,
        slides: state.slides.map(slide =>
          slide.id === action.payload.id ? { ...slide, ...action.payload.updates } : slide
        )
      };
    
    case 'DELETE_SLIDE':
      const newSlides = state.slides.filter(slide => slide.id !== action.payload);
      return {
        ...state,
        slides: newSlides,
        currentSlide: Math.min(state.currentSlide, newSlides.length - 1)
      };
    
    case 'SET_CURRENT_SLIDE':
      return {
        ...state,
        currentSlide: action.payload
      };
    
    case 'SET_SLIDES':
      return {
        ...state,
        slides: action.payload
      };
    
    case 'UPDATE_PRESENTATION':
      return {
        ...state,
        presentation: { ...state.presentation, ...action.payload }
      };
    
    case 'SET_GENERATING':
      return {
        ...state,
        isGenerating: action.payload
      };
    
    default:
      return state;
  }
}

export function SlideProvider({ children }) {
  const [state, dispatch] = useReducer(slideReducer, initialState);

  const addSlide = (slide) => {
    const newSlide = {
      id: Date.now().toString(),
      title: 'New Slide',
      content: 'Click to edit this slide',
      type: 'content',
      background: '#ffffff',
      textColor: '#333333',
      fontSize: '18px',
      fontFamily: 'Inter',
      layout: 'left',
      elements: [],
      ...slide
    };
    dispatch({ type: 'ADD_SLIDE', payload: newSlide });
  };

  const updateSlide = (id, updates) => {
    dispatch({ type: 'UPDATE_SLIDE', payload: { id, updates } });
  };

  const deleteSlide = (id) => {
    dispatch({ type: 'DELETE_SLIDE', payload: id });
  };

  const setCurrentSlide = (index) => {
    dispatch({ type: 'SET_CURRENT_SLIDE', payload: index });
  };

  const setSlides = (slides) => {
    dispatch({ type: 'SET_SLIDES', payload: slides });
  };

  const updatePresentation = (updates) => {
    dispatch({ type: 'UPDATE_PRESENTATION', payload: updates });
  };

  const setGenerating = (isGenerating) => {
    dispatch({ type: 'SET_GENERATING', payload: isGenerating });
  };

  const value = {
    ...state,
    addSlide,
    updateSlide,
    deleteSlide,
    setCurrentSlide,
    setSlides,
    updatePresentation,
    setGenerating
  };

  return (
    <SlideContext.Provider value={value}>
      {children}
    </SlideContext.Provider>
  );
}

export function useSlides() {
  const context = useContext(SlideContext);
  if (!context) {
    throw new Error('useSlides must be used within a SlideProvider');
  }
  return context;
}