import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Layout, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { client: 'AuraFlow Product', type: 'Product Landing Page', color: 'bg-brand-blue', desc: 'A modern, high-converting product landing page designed to showcase features and drive conversions with a premium aesthetic.', url: 'https://auraflow-product.vercel.app/' },
    { client: 'Lens Photo', type: 'Photography Portfolio', color: 'bg-brand-mint', desc: 'A visually striking photography portfolio designed to highlight high-quality imagery with seamless galleries and elegant typography.', url: 'https://lens-photo.vercel.app/' },
    { client: 'Harborstone Real Estate', type: 'Real Estate Platform', color: 'bg-brand-deep-blue', desc: 'Custom property listing platform featuring advanced search, high-quality media galleries, and an intuitive user experience.', url: 'https://harborstone-real-estate.vercel.app/' },
    { client: 'Inkverse Tattoo', type: 'Tattoo Studio Portfolio', color: 'bg-brand-pink', desc: 'A bold, character-driven portfolio site for a custom tattoo studio, integrating artist showcases and booking inquiries.', url: 'https://inkverse-tattoo.vercel.app/' },
    { client: 'Artic Flow HVAC', type: 'HVAC Services', color: 'bg-brand-cyan', desc: 'A professional and trustworthy service corporate website for an HVAC company with lead-generation tools and service descriptions.', url: 'https://artic-flow-hvac.vercel.app/' },
    { client: 'Doctor Demo', type: 'Medical & Healthcare', color: 'bg-brand-orange', desc: 'A patient-first healthcare website design focused on accessibility, clear service offerings, and trust-building.', url: 'https://doctor-demo-sigma.vercel.app/' }
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
            <motion.a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={i} 
              className="group cursor-pointer block"
            >
              <div className={`aspect-[4/3] rounded-3xl ${project.color} bg-opacity-10 dark:bg-opacity-20 mb-6 relative overflow-hidden flex items-center justify-center border border-gray-200 dark:border-white/5`}>
                <img 
                  src={`https://image.thum.io/get/width/1200/crop/900/${project.url}`} 
                  alt={project.client} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            </motion.a>
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
