import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo, socialLinks } from './core/data';
import {
  sectionSubtitleStyles,
  contactCardStyles,
  contactIconContainerStyles,
  infoLabelStyles,
  infoValueStyles,
  socialTitleStyles,
  socialLinksContainerStyles,
  socialLinkStyles
} from './core/styles';

interface ContactInfoProps {
  inView: boolean;
}

/**
 * Composant pour les informations de contact et les liens sociaux
 */
const ContactInfo: React.FC<ContactInfoProps> = ({ inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h3 className="glass-title" style={sectionSubtitleStyles}>
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
            style={contactCardStyles}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            whileHover={{ scale: 1.02, x: 5 }}
          >
            <div style={contactIconContainerStyles(info.color)}>
              <info.icon size={20} style={{ color: info.color }} />
            </div>
            <div>
              <div className="glass-text" style={infoLabelStyles}>
                {info.label}
              </div>
              <div className="glass-title" style={infoValueStyles}>
                {info.value}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h4 className="glass-title" style={socialTitleStyles}>
          Réseaux sociaux
        </h4>
        <div style={socialLinksContainerStyles}>
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn"
              style={socialLinkStyles}
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
  );
};

export default ContactInfo;