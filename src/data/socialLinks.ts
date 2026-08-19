import type { IconType } from 'react-icons';
import { FaLinkedin } from 'react-icons/fa';
import { SiArtstation, SiGithub } from 'react-icons/si';

export interface SocialLinkData {
  href: string;
  label: string;
  icon: IconType;
}

export const socialLinks: SocialLinkData[] = [
  { href: 'https://linkedin.com/', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://github.com/', label: 'GitHub', icon: SiGithub },
  { href: 'https://www.artstation.com/', label: 'Artstation', icon: SiArtstation },
];
