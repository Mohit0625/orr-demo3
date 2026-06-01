import { Link, useLocation } from 'react-router-dom';
// @ts-expect-error image typing
import logo from '../logo-wbg.png';

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleLinkClick = (hash: string) => {
    if (isHomePage) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="ORRO DIGITAL" className="h-15 w-auto object-contain" />
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
              Building Websites That Drive Growth. A premium website development agency rooted in Delhi, pushing the boundaries of digital experiences.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Capabilities</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li><Link to="/#services" onClick={() => handleLinkClick('#services')} className="hover:text-brand-blue transition-colors">Web Development</Link></li>
              <li><Link to="/#services" onClick={() => handleLinkClick('#services')} className="hover:text-brand-blue transition-colors">E-Commerce</Link></li>
              <li><Link to="/#services" onClick={() => handleLinkClick('#services')} className="hover:text-brand-blue transition-colors">Landing Pages</Link></li>
              <li><Link to="/#services" onClick={() => handleLinkClick('#services')} className="hover:text-brand-blue transition-colors">Technical SEO</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6">Company</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li><Link to="/#aboutus" onClick={() => handleLinkClick('#aboutus')} className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/#portfolio" onClick={() => handleLinkClick('#portfolio')} className="hover:text-brand-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/#process" onClick={() => handleLinkClick('#process')} className="hover:text-brand-blue transition-colors">Process</Link></li>
              <li><Link to="/#contact" onClick={() => handleLinkClick('#contact')} className="hover:text-brand-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ORRO DIGITAL. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
