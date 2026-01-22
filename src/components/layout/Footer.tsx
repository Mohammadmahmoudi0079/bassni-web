import { ShoppingBag, Shield, Users, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
  ];

  const services = [
    { label: 'Wardrobe AI', href: '/services#ai' },
    { label: 'Outfit Planner', href: '/services#planner' },
    { label: 'Style Advisor', href: '/services#advisor' },
    { label: 'Mobile App', href: '/app' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'GDPR Compliance', href: '/gdpr' },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://instagram.com' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com' },
    { icon: <Facebook size={20} />, href: 'https://facebook.com' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-linear-to-r from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold">Bassni</span>
            </div>
            <p className="text-gray-400 mb-4">
              Smart wardrobe management and outfit planning powered by AI. Making fashion effortless since 2024.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="text-gray-400">
              <h4 className="font-medium mb-2">Contact Us</h4>
              <p className="text-sm">hello@bassni.com</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Bassni. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="/status" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Status</span>
              </a>
              <a href="/community" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="text-sm">Community</span>
              </a>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}