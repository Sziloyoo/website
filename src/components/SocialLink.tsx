interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, label, children }) => {
  return (
    <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
