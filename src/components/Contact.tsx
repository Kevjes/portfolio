import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'kevin.tene@example.com',
      link: 'mailto:kevin.tene@example.com',
      color: '#4facfe'
    },
    {
      icon: FaPhone,
      label: 'Téléphone',
      value: '+237 6XX XXX XXX',
      link: 'tel:+2376XXXXXXX',
      color: '#00f2fe'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Localisation',
      value: 'Yaoundé, Cameroun',
      link: 'https://maps.google.com/?q=Yaoundé,Cameroun',
      color: '#f093fb'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kevin-tene-371a6b208',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      url: 'https://github.com/kevin-tene',
      color: '#333'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      url: 'https://twitter.com/kevin_tene',
      color: '#1DA1F2'
    }
  ];

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
    <section 
      ref={ref}
      style={{
        minHeight: '100vh',
        padding: '5rem 2rem',
        position: 'relative'
      }}
    >
      {/* Background elements */}
      <div
        className="morphing-shape"
        style={{
          width: '300px',
          height: '300px',
          top: '10%',
          left: '5%',
          animationDelay: '2s',
          opacity: 0.03
        }}
      />
      <div
        className="morphing-shape"
        style={{
          width: '250px',
          height: '250px',
          bottom: '15%',
          right: '8%',
          animationDelay: '5s',
          opacity: 0.03
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <motion.h2
            className="glass-title"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem'
            }}
          >
            Contactez-moi
          </motion.h2>
          <motion.div
            style={{
              width: '100px',
              height: '3px',
              background: 'linear-gradient(90deg, #4facfe, #00f2fe)',
              margin: '0 auto',
              borderRadius: '2px'
            }}
            initial={{ width: 0 }}
            animate={inView ? { width: '100px' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.p
            className="glass-text"
            style={{
              fontSize: '1.1rem',
              marginTop: '1.5rem',
              opacity: 0.8,
              maxWidth: '600px',
              margin: '1.5rem auto 0'
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos besoins en développement mobile et web.
          </motion.p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="glass-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              Informations de contact
            </h3>
            
            <div style={{ marginBottom: '3rem' }}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.5rem',
                    marginBottom: '1rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${info.color}40, ${info.color}20)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${info.color}60`
                    }}
                  >
                    <info.icon size={20} style={{ color: info.color }} />
                  </div>
                  <div>
                    <div className="glass-text" style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '0.25rem' }}>
                      {info.label}
                    </div>
                    <div className="glass-title" style={{ fontSize: '1rem' }}>
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="glass-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                Réseaux sociaux
              </h4>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-btn"
                    style={{
                      width: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none'
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} style={{ color: social.color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="glass-container" style={{ padding: '2rem' }}>
              <h3 className="glass-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="glass-text" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="glass-input"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="Votre nom complet"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="glass-text" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-input"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="glass-text" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    Sujet *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-input"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label className="glass-text" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="glass-input"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      minHeight: '120px'
                    }}
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                {/* Form Status */}
                {formStatus.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '1rem',
                      borderRadius: '10px',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: formStatus.type === 'success' 
                        ? 'rgba(76, 175, 80, 0.2)' 
                        : formStatus.type === 'error'
                        ? 'rgba(244, 67, 54, 0.2)'
                        : 'rgba(255, 193, 7, 0.2)',
                      border: `1px solid ${formStatus.type === 'success' 
                        ? '#4CAF50' 
                        : formStatus.type === 'error'
                        ? '#F44336'
                        : '#FFC107'}40`
                    }}
                  >
                    {formStatus.type === 'success' && <FaCheckCircle style={{ color: '#4CAF50' }} />}
                    {formStatus.type === 'error' && <FaExclamationTriangle style={{ color: '#F44336' }} />}
                    {formStatus.type === 'loading' && (
                      <div className="loading-dots" style={{ display: 'flex', gap: '0.25rem' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFC107', animation: 'bounce 1.4s ease-in-out infinite' }} />
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFC107', animation: 'bounce 1.4s ease-in-out infinite', animationDelay: '0.16s' }} />
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFC107', animation: 'bounce 1.4s ease-in-out infinite', animationDelay: '0.32s' }} />
                      </div>
                    )}
                    <span className="glass-text" style={{ fontSize: '0.9rem' }}>
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
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    background: formStatus.type === 'loading' 
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'linear-gradient(135deg, #4facfe, #00f2fe)',
                    border: 'none',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: formStatus.type === 'loading' ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    opacity: formStatus.type === 'loading' ? 0.7 : 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {formStatus.type === 'loading' ? (
                    <>
                      <div className="loading-dots" style={{ display: 'flex', gap: '0.25rem' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white', animation: 'bounce 1.4s ease-in-out infinite' }} />
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white', animation: 'bounce 1.4s ease-in-out infinite', animationDelay: '0.16s' }} />
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white', animation: 'bounce 1.4s ease-in-out infinite', animationDelay: '0.32s' }} />
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
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          style={{
            textAlign: 'center',
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <p className="glass-text" style={{ opacity: 0.6, fontSize: '0.9rem' }}>
            © 2024 Kévin Tene. Développé avec ❤️ en React & TypeScript
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;