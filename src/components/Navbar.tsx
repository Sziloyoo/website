import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import { navLinks } from '../data/navLinks';
import { socialLinks } from '../data/socialLinks';
import { SocialLink } from './SocialLink';

interface NavbarProps {
  websiteName: string;
  imagePath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ websiteName, imagePath }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between gap-4 px-4 py-3 lg:px-6 lg:py-4 text-white bg-[#003087]">
      {/* Logo + name — always visible, shrinks with screen size */}
      <div className="flex shrink-0 items-center gap-2 md:gap-3 lg:gap-4">
        <img className="size-8 md:size-10 lg:size-12 rounded-full" src={imagePath} alt="avatar" />
        <span className="whitespace-nowrap text-lg font-bold md:text-xl lg:text-3xl">
          {websiteName}
        </span>
      </div>

      {/* Desktop nav links — compact at md, full at lg */}
      <div className="hidden md:flex md:gap-4 lg:gap-8">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop social links — compact at md, full at lg */}
      <div className="hidden md:flex md:gap-3 lg:gap-6">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <SocialLink key={label} href={href} label={label}>
            <Icon className="icon-link" />
          </SocialLink>
        ))}
      </div>

      {/* Hamburger — unchanged */}
      <button onClick={() => setIsOpen(true)} aria-label="Open menu" className="md:hidden">
        <HiBars3 className="size-8" />
      </button>

      {/* Slide-in panel + backdrop — unchanged */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-64 flex-col gap-6 bg-[#003087] p-6 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={() => setIsOpen(false)} aria-label="Close menu" className="self-end">
          <HiXMark className="size-8" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <div className="flex gap-6 border-t border-white/20 pt-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <SocialLink key={label} href={href} label={label}>
              <Icon className="icon-link" />
            </SocialLink>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
        />
      )}
    </nav>
  );
};
