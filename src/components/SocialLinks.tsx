import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLinksProps {
  showLabels?: boolean;
}

export function SocialLinks({ showLabels = false }: SocialLinksProps) {
  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:abhijitskv3@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <div className="flex space-x-4">
      {socials.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("http") || social.href.startsWith("mailto") ? "_blank" : undefined}
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center space-x-2 text-muted-foreground ${social.color} transition-colors`}
        >
          <social.icon size={20} />
          {showLabels && <span className="text-sm">{social.label}</span>}
        </motion.a>
      ))}
    </div>
  );
}