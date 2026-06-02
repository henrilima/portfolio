import { type LucideIcon, Mail, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  Icon: LucideIcon | React.ComponentType<{ className?: string }>;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/henrilima",
    label: "github.com/henrilima",
    Icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/josehlima",
    label: "linkedin.com/in/josehlima",
    Icon: FaLinkedinIn,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5581996421340",
    label: "Conversar no WhatsApp",
    Icon: MessageSquare,
  },
  {
    name: "E-mail",
    url: "mailto:henrilima.contactme@gmail.com",
    label: "henrilima.contactme@gmail.com",
    Icon: Mail,
  },
];

export const personalInfo = {
  email: "henrilima.contactme@gmail.com",
  phone: "+55 (81) 99999-9999",
  location: "Pernambuco, Brasil",
};
