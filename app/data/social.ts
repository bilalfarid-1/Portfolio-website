import {
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa6";

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/bilalfarid-1",
    icon: BiLogoGithub,
    status: "social",
  },
  {
    id: 2,
    name: "Email",
    url: "mailto:bilaldrosh1@gmail.com",
    icon: FaEnvelope,
    status: "social",
  },
  {
    id: 3,
    name: "WhatsApp",
    url: "https://wa.me/923464619093",
    icon: FaWhatsapp,
    status: "social",
  },
  {
    id: 4,
    name: "Phone",
    url: "tel:+923464619093",
    icon: FaPhone,
    status: "social",
  },
  {
    id: 5,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/bilalfarid1/",
    icon: BiLogoLinkedinSquare,
    status: "social",
  },
];
