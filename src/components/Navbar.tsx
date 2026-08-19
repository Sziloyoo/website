import { navLinks } from '../data/navLinks';
import { socialLinks } from '../data/socialLink';
import { SocialLink } from './SocialLink';

interface navbarnProps {
  websiteName: string;
  imagePath: string;
}

export const Navbar: React.FC<navbarnProps> = ({ websiteName, imagePath }) => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 text-white bg-[#003087]">
      <div className="flex items-center gap-4">
        <img className="size-12 rounded-full" src={imagePath} alt="avatar" />
        <span className="text-3xl font-bold">{websiteName}</span>
      </div>
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <a key={link.id} href={`#${link.id}`} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>
      <div className="flex gap-6">
        {socialLinks.map(({ href, label, icon: Icon }, index) => (
          <SocialLink key={index} href={href} label={label}>
            <Icon className="icon-link" />
          </SocialLink>
        ))}
      </div>
    </nav>
  );
};
