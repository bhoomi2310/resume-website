import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => {
  return <FaGithub className={className} />;
};

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => {
  return <FaLinkedin className={className} />;
};
