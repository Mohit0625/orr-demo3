import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Layout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { client: 'Apex Healthcare Clinic', type: 'Healthcare Website', color: 'bg-brand-blue', desc: 'A complete digital transformation for a leading healthcare provider, featuring patient portals and secure appointment booking.' },
    { client: 'Summit Real Estate', type: 'Property Listings Portal', color: 'bg-brand-mint', desc: 'Custom property management portal with advanced search filters, map integration, and an intuitive agent dashboard.' },
    { client: 'Urban Tattoo Studio', type: 'Booking & Portfolio', color: 'bg-brand-deep-blue', desc: 'A visually striking portfolio site for a boutique tattoo studio, integrated with an online consultation scheduling system.' },
    { client: 'Vertex Financial', type: 'Consultancy Platform', color: 'bg-brand-cyan', desc: 'Corporate presence for a financial advisory firm, focused on trust-building, client testimonials, and lead generation.' },
    { client: 'Nova Tech Solutions', type: 'SaaS Landing Page', color: 'bg-brand-orange', desc: 'High-converting landing page for a B2B SaaS product, highlighting product features through interactive animations.' },
    { client: 'EcoLife Goods', type: 'E-Commerce Store', color: 'bg-brand-pink', desc: 'A sustainable products e-commerce store with Shopify integration, custom cart experience, and responsive design.' }
  ];

  return (
    <motion.main 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="pt-32 pb-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Our Portfolio</h1>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Selected Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A showcase of our recent digital projects. We partner with ambitious brands to create websites that are beautiful, functional, and fast.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={i} 
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/3] rounded-3xl ${project.color} bg-opacity-10 dark:bg-opacity-20 mb-6 relative overflow-hidden flex items-center justify-center border border-gray-200 dark:border-white/5`}>
                 {/* Abstract representation of a graphic since we have no real images */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/20 dark:from-white/0 dark:to-white/5 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-80"></div>
                <div className="w-1/2 h-1/2 rounded-full bg-white/20 dark:bg-white/10 blur-3xl transform group-hover:scale-125 transition-transform duration-700 ease-out"></div>
                <Layout className="w-20 h-20 text-gray-900/20 dark:text-white/20 relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-sm font-bold tracking-wider text-brand-blue uppercase">{project.type}</div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-blue transition-colors">
                  {project.client}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                <div className="inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">
                  View Case Study <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 text-center">
        <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-12 border border-gray-200 dark:border-white/10">
          <h3 className="font-display text-4xl font-bold mb-6 text-gray-900 dark:text-white">Have a project in mind?</h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals.
          </p>
          <Link to="/#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-deep-blue text-white font-semibold text-lg transition-all shadow-lg shadow-brand-blue/25 gap-2 group">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
