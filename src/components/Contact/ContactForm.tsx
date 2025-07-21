import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle 
} from 'react-icons/fa';
import { FormData, FormStatus } from './core/types';
import {
  formContainerStyles,
  formGroupStyles,
  messageFormGroupStyles,
  formLabelStyles,
  inputStyles,
  textareaStyles,
  formStatusContainerStyles,
  statusMessageStyles,
  submitButtonStyles,
  loadingDotsContainerStyles,
  loadingDotStyles,
  sectionSubtitleStyles
} from './core/styles';

interface ContactFormProps {
  inView: boolean;
}

/**
 * Composant pour le formulaire de contact
 */
const ContactForm: React.FC<ContactFormProps> = ({ inView }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setFormStatus({ type: 'error', message: 'Le nom est requis' });
      return false;
    }
    if (!formData.email.trim()) {
      setFormStatus({ type: 'error', message: 'L\'email est requis' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Format d\'email invalide' });
      return false;
    }
    if (!formData.subject.trim()) {
      setFormStatus({ type: 'error', message: 'Le sujet est requis' });
      return false;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: 'error', message: 'Le message est requis' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setFormStatus({ type: 'loading', message: 'Envoi en cours...' });

    try {
      // Simulation d'envoi d'email (remplacer par votre logique d'envoi)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setFormStatus({ 
        type: 'success', 
        message: 'Message envoyé avec succès! Je vous répondrai bientôt.' 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Erreur lors de l\'envoi. Veuillez réessayer.' 
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="glass-container" style={formContainerStyles}>
        <h3 className="glass-title" style={sectionSubtitleStyles}>
          Envoyez-moi un message
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyles}>
            <label className="glass-text" style={formLabelStyles}>
              Nom complet *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="glass-input"
              style={inputStyles}
              placeholder="Votre nom complet"
            />
          </div>

          <div style={formGroupStyles}>
            <label className="glass-text" style={formLabelStyles}>
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="glass-input"
              style={inputStyles}
              placeholder="votre.email@exemple.com"
            />
          </div>

          <div style={formGroupStyles}>
            <label className="glass-text" style={formLabelStyles}>
              Sujet *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="glass-input"
              style={inputStyles}
              placeholder="Sujet de votre message"
            />
          </div>

          <div style={messageFormGroupStyles}>
            <label className="glass-text" style={formLabelStyles}>
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              className="glass-input"
              style={textareaStyles}
              placeholder="Décrivez votre projet ou votre demande..."
            />
          </div>

          {/* Form Status */}
          {formStatus.type !== 'idle' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={formStatusContainerStyles(formStatus.type as 'success' | 'error' | 'loading')}
            >
              {formStatus.type === 'success' && <FaCheckCircle style={{ color: '#4CAF50' }} />}
              {formStatus.type === 'error' && <FaExclamationTriangle style={{ color: '#F44336' }} />}
              {formStatus.type === 'loading' && (
                <div className="loading-dots" style={loadingDotsContainerStyles}>
                  <div style={loadingDotStyles('0s', '#FFC107')} />
                  <div style={loadingDotStyles('0.16s', '#FFC107')} />
                  <div style={loadingDotStyles('0.32s', '#FFC107')} />
                </div>
              )}
              <span className="glass-text" style={statusMessageStyles}>
                {formStatus.message}
              </span>
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="glass-btn"
            disabled={formStatus.type === 'loading'}
            whileHover={{ scale: formStatus.type === 'loading' ? 1 : 1.02 }}
            whileTap={{ scale: formStatus.type === 'loading' ? 1 : 0.98 }}
            style={submitButtonStyles(formStatus.type === 'loading')}
          >
            {formStatus.type === 'loading' ? (
              <>
                <div className="loading-dots" style={loadingDotsContainerStyles}>
                  <div style={loadingDotStyles()} />
                  <div style={loadingDotStyles('0.16s')} />
                  <div style={loadingDotStyles('0.32s')} />
                </div>
                Envoi en cours...
              </>
            ) : (
              <>
                <FaPaperPlane size={16} />
                Envoyer le message
              </>
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;