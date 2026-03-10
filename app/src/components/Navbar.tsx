import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

const navItems = [
  { label: 'PRODUCTS', id: 'products' },
  { label: 'SOLUTIONS', id: 'solutions' },
  { label: 'CASE STUDIES', id: 'case-studies' },
  { label: 'COMPANY', id: 'company' },
  { label: 'RESOURCES', id: 'resources', href: '#resources' },
];

const productItems = [
  {
    icon: '/assets/icon_cx.png',
    title: 'Client experience',
    description: 'Seamless collaboration, effortless administration.',
    href: '/client-experience',
  },
  {
    icon: '/assets/icon_ta.png',
    title: 'Trust accounting',
    description: 'Automate trust accounting streamline reconciliations, reduce errors, and save hours.',
    href: '/trust-accounting',
  },
];

const caseStudies = [
  'Case study: Birdseye Pension Group',
  'CrossPlans Case Study',
  'PlanPerfect Case Study/Testimonial',
  'Hunter Benefits Case Study',
  'Evergreen Retirement Case Study',
];

const solutionItems = [
  'Automate New Plan-Sponsor Deal Flow and Onboarding',
  'Boost Margins with Automated Trust Reconciliation',
  'Seamless 3(16) Payroll Processing & Compliance',
  'Integrated Smart Inbox for Seamless Communications',
  'Securely Share Files with Plan Sponsors',
];

const companyItems = [
  'About Stax.ai',
  'Join Our Team',
];

const NAV_ACTIVE_MAP: Record<string, string[]> = {
  products: ['/client-experience', '/trust-accounting'],
  solutions: [],
  'case-studies': [],
  company: ['/company'],
  resources: [],
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isMenuOpen = (id: string) => activeMenu === id;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#002836]/92 shadow-[0_16px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl' : ''}`}>
      <div className="container-stax">
        <nav className="flex h-[5.55rem] items-center justify-between">
          <BrandLogo />
          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            {navItems.map((item) => {
              const isActive = NAV_ACTIVE_MAP[item.id]?.some((p) => pathname.startsWith(p));
              return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.id)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.href ?? '#'}
                  className={`flex items-center gap-1 text-[0.62rem] font-semibold tracking-[0.14em] transition hover:text-white lg:text-[0.72rem] ${isActive ? 'text-[#1fd3ee]' : 'text-white/75'}`}
                >
                  {item.label}
                  {item.id !== 'resources' ? (
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isMenuOpen(item.id) ? 'rotate-180' : ''}`} />
                  ) : null}
                </a>
                <AnimatePresence>
                  {isMenuOpen(item.id) ? <DesktopMenu id={item.id} /> : null}
                </AnimatePresence>
              </div>
              );
            })}
          </div>
          <div className="hidden items-center gap-3 md:flex lg:gap-5">
            <a href="#" className="text-[0.62rem] font-semibold tracking-[0.14em] text-white/75 transition hover:text-white lg:text-[0.72rem]">
              LOGIN
            </a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full border border-[#1fd3ee] px-5 py-2.5 text-[0.72rem] font-semibold text-white transition hover:bg-[#1fd3ee]/10">
              Schedule a call
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-[#002836] md:hidden"
          >
            <div className="container-stax flex flex-col gap-5 py-6">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href ?? '#'}
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80"
                >
                  {item.label}
                </a>
              ))}
              <a href="#" className="text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                Login
              </a>
              <a href="#cta" className="btn-primary w-fit">
                Schedule a call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

const DesktopMenu = ({ id }: { id: string }) => {
  const sharedClassName =
    'absolute left-1/2 top-full mt-6 -translate-x-1/2 overflow-hidden rounded-[1.2rem] border border-[#0f4652] bg-[#002c39]/98 shadow-[0_30px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl';

  if (id === 'products') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.2 }}
        className={`${sharedClassName} w-[34rem] p-4`}
      >
        <div className="mb-3 border-b border-white/8 px-4 pb-4">
          <p className="text-sm font-semibold text-white">Products</p>
          <p className="mt-2 text-[0.72rem] uppercase tracking-[0.2em] text-[#1fd3ee]/75">
            Solutions tailored for TPAs.
          </p>
        </div>
        <div className="space-y-2">
          {productItems.map((item) => (
            <Link key={item.title} to={item.href} className="flex items-start gap-4 rounded-2xl px-4 py-4 transition hover:bg-white/5">
              <img src={item.icon} alt={item.title} className="h-14 w-14 flex-none object-contain" />
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  {item.title}
                  <ArrowRight className="h-3.5 w-3.5 text-[#1fd3ee]" />
                </p>
                <p className="mt-1 text-sm leading-6 text-white/56">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    );
  }

  if (id === 'case-studies') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.2 }}
        className={`${sharedClassName} w-[31.5rem] p-4`}
      >
        <div className="grid gap-4 md:grid-cols-[1.15fr_1.45fr]">
          <div className="rounded-[1.2rem] border border-[#0f4652] bg-[linear-gradient(180deg,rgba(4,55,67,0.88),rgba(0,29,38,0.98))] p-5">
            <p className="text-lg font-semibold text-white">Case Studies</p>
            <p className="mt-3 text-[0.72rem] uppercase leading-5 tracking-[0.22em] text-[#1fd3ee]/72">
              Case studies tailored for TPAs. Engineered for productivity.
            </p>
          </div>
          <div className="space-y-1">
            {caseStudies.map((study) => (
              <a key={study} href="#" className="block rounded-xl border-b border-white/8 px-4 py-3 text-sm text-white/82 transition hover:bg-white/5 hover:text-white">
                {study}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  if (id === 'solutions') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.2 }}
        className={`${sharedClassName} w-[31.5rem] p-4`}
      >
        <div className="grid gap-4 md:grid-cols-[1.15fr_1.45fr]">
          <div className="rounded-[1.2rem] border border-[#0f4652] bg-[linear-gradient(180deg,rgba(4,55,67,0.88),rgba(0,29,38,0.98))] p-5">
            <p className="text-lg font-semibold text-white">Solutions</p>
            <p className="mt-3 text-[0.72rem] uppercase leading-5 tracking-[0.22em] text-[#1fd3ee]/72">
              Solutions tailored for TPAs. Engineered for productivity.
            </p>
          </div>
          <div className="space-y-1">
            {solutionItems.map((item) => (
              <a key={item} href="#" className="block rounded-xl border-b border-white/8 px-4 py-3 text-sm text-white/82 transition hover:bg-white/5 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  if (id === 'company') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.2 }}
        className={`${sharedClassName} w-[18rem] p-4`}
      >
        <div className="space-y-1">
          {companyItems.map((item) => (
            <a key={item} href="#" className="block rounded-xl px-4 py-3 text-sm text-white/82 transition hover:bg-white/5 hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    );
  }

  return null;
};

export default Navbar;
