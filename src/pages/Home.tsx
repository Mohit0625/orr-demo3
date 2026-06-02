import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, Layout, Search, Smartphone, 
  Zap, Settings, ShieldCheck, ChevronDown, 
  Code, Star, ArrowUpRight, CheckCircle2, Target
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Reusable Parallax Wrapper Component
function ParallaxSection({ children, id, className = '' }: { children: React.ReactNode, id?: string, className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id={id} ref={ref} className={`py-24 overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="max-w-7xl mx-auto px-6 will-change-transform">
        {children}
      </motion.div>
    </section>
  );
}

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
        window.scrollTo(0,0);
    }
  }, [location]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {/* HERO SECTION */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Animated Background gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden h-full w-full">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }} 
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/20 blur-[120px] will-change-transform" 
          />
          <motion.div 
            animate={{ x: [0, -40, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }} 
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-brand-pink/20 blur-[120px] will-change-transform" 
          />
          <motion.div 
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] left-[20%] w-[60%] h-[50%] rounded-full bg-brand-blue/20 blur-[100px] will-change-transform" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 md:col-start-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/10 text-brand-mint text-sm font-semibold mb-6 border border-brand-mint/20"
            >
              <div className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
              Global Premium Development Agency
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] text-gray-900 dark:text-white"
            >
              Building Websites That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-mint">Drive Growth</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto"
            >
              We specialize in creating high-converting, modern, and performance-focused digital experiences for forward-thinking businesses.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-deep-blue text-white font-semibold text-lg transition-all shadow-lg shadow-brand-blue/25 flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/5 dark:hover:bg-white/10 text-gray-900 dark:text-white font-semibold text-lg transition-all border border-gray-200 dark:border-white/10 flex items-center justify-center gap-2 group">
                View Our Portfolio
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP / STATS */}
      <section className="py-10 border-y border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Founded In', value: '2021' },
              { label: 'Projects Delivered', value: '20+' },
              { label: 'Industries Served', value: '15+' },
              { label: 'Mobile Responsive', value: '100%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US (Parallax) */}
      <ParallaxSection id="aboutus">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-brand-pink uppercase mb-3">About Us</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              A modern digital agency with a <span className="text-brand-orange">global reach</span>.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Since 2021, ORRO DIGITAL has partnered with over 20 clients across 15+ industries to establish powerful online presences. We don't just build websites; we build scalable digital growth engines designed for conversion, speed, and aesthetics.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Custom-tailored business websites and landing pages',
                'Client-centric approach with dedicated ongoing support',
                'Focus on international brands, global startups, and fast-growing businesses'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-mint shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-deep-blue to-brand-blue rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex flex-wrap gap-4">
                {['Healthcare', 'Real Estate', 'Startups', 'Law Firms', 'Restaurants', 'HVAC', 'Finance', 'Education'].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-sm font-medium text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10">
                <p className="font-display text-xl font-medium text-gray-900 dark:text-white">
                  "Transforming visions into high-performing digital realities."
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gray-50 dark:bg-neutral-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">Our Expertise</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Comprehensive Web Solutions
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Custom Development', icon: Code, desc: 'Tailor-made websites engineered to match your unique brand identity and intricate business goals perfectly.', color: 'text-brand-blue', groupHover: 'group-hover:bg-brand-blue' },
              { title: 'Landing Pages', icon: Target, desc: 'High-octane, conversion-focused landing pages crafted specifically for maximum ROI on advertising campaigns.', color: 'text-brand-orange', groupHover: 'group-hover:bg-brand-orange' },
              { title: 'E-Commerce', icon: Smartphone, desc: 'Robust online stores configured with secure payment integrations and friction-free shopping experiences.', color: 'text-brand-mint', groupHover: 'group-hover:bg-brand-mint' },
              { title: 'Website Redesign', icon: Layout, desc: 'Modernizing outdated digital assets to dramatically improve performance, aesthetics, and user retention.', color: 'text-brand-pink', groupHover: 'group-hover:bg-brand-pink' },
              { title: 'SEO Foundation', icon: Search, desc: 'Technical SEO implementation including structured data, metadata optimization, and core web vitals speed tuning.', color: 'text-brand-cyan', groupHover: 'group-hover:bg-brand-cyan' },
              { title: 'Maintenance', icon: Settings, desc: 'Ongoing proactive support, security updates, robust backups, and continuous performance monitoring.', color: 'text-brand-deep-blue', groupHover: 'group-hover:bg-brand-deep-blue' },
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden relative">
                <div className={`absolute top-0 left-0 w-full h-1 opacity-0 ${service.groupHover} transition-opacity duration-300 group-hover:opacity-100`} />
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gray-50 dark:bg-white/5 mb-6 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <h2 className="text-sm font-bold tracking-widest text-brand-cyan uppercase mb-3">The ORRO Advantage</h2>
                <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why partner with us?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  We combine beautiful visual design with rigorous technical architecture to create websites that don't just look good, but actively drive business growth.
                </p>
                <Link to="/#contact" className="px-6 py-3 rounded-full bg-brand-deep-blue text-white font-medium flex items-center w-fit gap-2 hover:opacity-90 transition-opacity">
                  Consult with our experts <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6">
              {[
                { title: 'Mobile-First Design', desc: 'Crafted systematically for all screen sizes and devices before scaling up.' },
                { title: 'Lighting Fast Performance', desc: 'Architecture utilizing modern runtimes and CDNs for instant load times.' },
                { title: 'SEO-Ready Architecture', desc: 'Built cleanly with search engine visibility indexing logic from day one.' },
                { title: 'Lead Generation Focus', desc: 'Information architecture specifically designed to convert visitors into loyal customers.' },
              ].map((feature, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  key={i} className="p-8 rounded-3xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
                    <Zap className="w-6 h-6 " />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 bg-gray-900 text-white dark:bg-neutral-950 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-brand-mint uppercase mb-3">Methodology</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-6">Our Proven Process</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We analyze your business goals, target audience, and market positioning.' },
              { step: '02', title: 'Planning', desc: 'Creating strategic wireframes, site maps, and SEO foundations.' },
              { step: '03', title: 'Design', desc: 'Crafting visually engaging, high-fidelity UI designs based on your brand.' },
              { step: '04', title: 'Development', desc: 'Writing clean, performant, mobile-first code using modern frameworks.' },
              { step: '05', title: 'Launch', desc: 'Rigorous speed testing, QA, and a smooth deployment process.' },
              { step: '06', title: 'Support', desc: 'Ongoing maintenance, backups, and strategic performance reviews.' }
            ].map((phase, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-display font-black text-white/5 absolute -top-8 -left-4 select-none">{phase.step}</div>
                <h4 className="text-xl font-bold mb-3 relative z-10 text-white">{phase.title}</h4>
                <p className="text-gray-400 relative z-10">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section id="portfolio" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-brand-pink uppercase mb-3">Featured Work</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Recent Projects
            </h3>
          </div>
          <Link to="/portfolio" className="group flex items-center gap-2 font-medium text-gray-900 dark:text-white hover:text-brand-blue transition-colors">
            View All Projects <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div className="flex gap-8 px-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {[
            { client: 'Apex Healthcare Clinic', type: 'Healthcare Website', color: 'bg-brand-blue' },
            { client: 'Summit Real Estate', type: 'Property Listings Portal', color: 'bg-brand-mint' },
            { client: 'Urban Tattoo Studio', type: 'Booking & Portfolio', color: 'bg-brand-deep-blue' },
            { client: 'Vertex Financial', type: 'Consultancy Platform', color: 'bg-brand-cyan' }
          ].map((project, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[40vw] snap-center group cursor-pointer">
              <div className={`aspect-[4/3] rounded-3xl ${project.color} bg-opacity-10 dark:bg-opacity-20 mb-6 relative overflow-hidden flex items-center justify-center border border-gray-200 dark:border-white/5`}>
                 {/* Abstract representation of a graphic since we have no real images */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 to-black/20 dark:from-white/0 dark:to-white/5 mix-blend-overlay"></div>
                <div className="w-1/2 h-1/2 rounded-full bg-white/20 dark:bg-white/10 blur-3xl transform group-hover:scale-110 transition-transform duration-700"></div>
                <Layout className="w-16 h-16 text-gray-900/20 dark:text-white/20 relative z-10" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-2">{project.type}</div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-blue transition-colors">{project.client}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-brand-deep-blue text-white overflow-hidden relative">
        {/* Decorative blurred blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue rounded-full blur-[100px] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan rounded-full blur-[100px] opacity-30 transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-16">Client Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rajiv Sharma', role: 'Real Estate Consultant', quote: 'ORRO DIGITAL transformed our online presence and helped us generate consistent leads through our website. The results have been phenomenal.' },
              { name: 'Priya Malhotra', role: 'Healthcare Clinic Owner', quote: 'The team delivered exactly what we needed. Professional design, flawless mobile experience, and excellent ongoing support.' },
              { name: 'Aman Verma', role: 'Startup Founder', quote: 'Our website now reflects our brand perfectly and performs exceptionally well. They truly understand modern technical architecture.' }
            ].map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 relative">
                <Star className="w-8 h-8 text-brand-mint mb-6" />
                <p className="text-lg leading-relaxed mb-8">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-xl">{t.name}</div>
                  <div className="text-white/60 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Common Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'How long does it take to build a custom website?', a: 'Typically, a standard business website takes 3-4 weeks from discovery to launch. Complex e-commerce platforms or large portals may take 6-8 weeks.' },
              { q: 'Do you provide ongoing maintenance?', a: 'Yes, we offer comprehensive maintenance packages including security updates, regular backups, and content updates to keep your site performing optimally.' },
              { q: 'Will my website be mobile-friendly?', a: 'Absolutely. We practice mobile-first design, ensuring 100% responsiveness across all devices, strictly adhering to modern UI standards.' },
              { q: 'Do you help with SEO?', a: 'We build the technical SEO foundation for every site we develop, including schema markup, fast loading speeds, and optimized meta structures.' }
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 rounded-2xl cursor-pointer">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white">
                  <span className="text-lg font-bold">{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </span>
                </summary>
                <div className="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-deep-blue via-gray-900 to-black"></div>
            
            <div className="relative z-10 flex-1 text-white">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready to accelerate your growth?</h2>
              <p className="text-lg text-gray-400 mb-8 max-w-md">Get in touch with us today. Let's discuss your project goals and discover how we can elevate your global digital presence.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Headquarters</div>
                    <div className="font-medium">Delhi, India (Global Delivery)</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 flex-1 w-full max-w-md">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a free consultation</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Tell us about your requirements..."></textarea>
                  </div>
                  <button className="w-full py-4 rounded-xl bg-brand-blue hover:bg-brand-deep-blue text-white font-bold transition-colors mt-2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
