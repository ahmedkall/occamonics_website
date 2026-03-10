import { Link } from 'react-router-dom';
import { Linkedin, Youtube } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';
import { footerLinks } from '../content/stax';

const PRODUCT_ROUTES: Record<string, string> = {
  'Client experience': '/client-experience',
  'Trust accounting': '/trust-accounting',
};

const Footer = () => (
  <footer className="bg-[#002c39] pt-16 text-white">
    <div className="container-stax">
      <div className="mb-14">
        <BrandLogo />
      </div>
      <div className="grid gap-10 border-b border-white/10 pb-16 md:grid-cols-2 xl:grid-cols-5">
        <div>
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/42">Products</h2>
          <ul className="mt-5 space-y-3">
            {footerLinks.products.map((item) => (
              <li key={item}>
                {PRODUCT_ROUTES[item] ? (
                  <Link to={PRODUCT_ROUTES[item]} className="text-sm leading-6 text-white/70 transition hover:text-[#1fd3ee]">{item}</Link>
                ) : (
                  <a href="#" className="text-sm leading-6 text-white/70 transition hover:text-[#1fd3ee]">{item}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <FooterColumn title="Use Cases" items={footerLinks.useCases} />
        <FooterColumn title="Company" items={footerLinks.company} />
        <FooterColumn title="Resources" items={footerLinks.resources} />
        <div>
          <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/42">Contact</h2>
          <ul className="mt-5 space-y-3">
            {footerLinks.contactAddress.map((item) => (
              <li key={item}>
                <a href="#" className="text-sm leading-6 text-white/70 transition hover:text-[#1fd3ee]">{item}</a>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-2">
              <a href="#" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#1fd3ee] transition hover:text-white">
                Linkedin <Linkedin className="h-4 w-4" />
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#1fd3ee] transition hover:text-white">
                Youtube <Youtube className="h-4 w-4" />
              </a>
            </li>
            <li className="pt-2">
              <a href="#" className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70 transition hover:text-[#1fd3ee]">Login</a>
            </li>
            <li>
              <a href="#" className="text-sm font-semibold uppercase tracking-[0.14em] text-white/70 transition hover:text-[#1fd3ee]">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4 py-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
        <div>
          <p>Copyright &copy; 2019-2024 Stax.ai, Inc. All rights reserved.</p>
          <p className="mt-1 text-white/35">Design: Griflan</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded border border-white/20 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-white/50">
            SOC 2 Type II
          </div>
        </div>
      </div>
    </div>
  </footer>
);

type FooterColumnProps = {
  title: string;
  items: string[];
};

const FooterColumn = ({ title, items }: FooterColumnProps) => (
  <div>
    <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/42">{title}</h2>
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item}>
          <a href="#" className="text-sm leading-6 text-white/70 transition hover:text-[#1fd3ee]">{item}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
