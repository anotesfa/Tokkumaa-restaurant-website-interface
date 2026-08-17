import React, { createContext, useContext, useState, useCallback } from 'react';

// Toast Context
const ToastContext = createContext();

// Toast Provider Component
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now() + Math.random();
    const toast = { id, message, type, duration };
    
    setToasts(prev => [...prev, toast]);
    
    // Auto remove toast after duration
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  const showSuccess = useCallback((message) => addToast(message, 'success'), [addToast]);
  const showError = useCallback((message) => addToast(message, 'error'), [addToast]);
  const showInfo = useCallback((message) => addToast(message, 'info'), [addToast]);
  const showWarning = useCallback((message) => addToast(message, 'warning'), [addToast]);

  const value = {
    toasts,
    addToast,
    removeToast,
    showSuccess,
    showError,
    showInfo,
    showWarning
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

// Toast Container Component
const ToastContainer = ({ toasts, onRemove }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
};

// Individual Toast Component
const Toast = ({ toast, onRemove }) => {
  const getToastClass = (type) => {
    const baseClass = 'toast-custom alert alert-dismissible fade show';
    switch (type) {
      case 'success': return `${baseClass} alert-success`;
      case 'error': return `${baseClass} alert-danger`;
      case 'warning': return `${baseClass} alert-warning`;
      case 'info':
      default: return `${baseClass} alert-info`;
    }
  };

  const getToastIcon = (type) => {
    switch (type) {
      case 'success': return 'bi-check-circle-fill';
      case 'error': return 'bi-x-circle-fill';
      case 'warning': return 'bi-exclamation-triangle-fill';
      case 'info':
      default: return 'bi-info-circle-fill';
    }
  };

  return (
    <div 
      className={getToastClass(toast.type)}
      style={{ 
        marginBottom: '10px',
        minWidth: '300px',
        animation: 'slideInRight 0.3s ease-out'
      }}
    >
      <div className="d-flex align-items-center">
        <i className={`bi ${getToastIcon(toast.type)} me-2`}></i>
        <span className="flex-grow-1">{toast.message}</span>
        <button 
          type="button" 
          className="btn-close"
          onClick={() => onRemove(toast.id)}
        ></button>
      </div>
    </div>
  );
};

// Custom hook to use toast
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default ToastProvider;