import { Link } from 'react-router-dom';
import StackMark from './StackMark';

type BrandLogoProps = {
  dark?: boolean;
};

const BrandLogo = ({ dark = false }: BrandLogoProps) => {
  const textClassName = dark ? 'text-[#001f2b]' : 'text-white';

  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Stax.ai home">
      <StackMark className={`h-7 w-7 text-[#1fd3ee] ${dark ? 'opacity-90' : ''}`} />
      <span className={`text-[1.55rem] font-semibold leading-none tracking-[-0.06em] ${textClassName}`}>
        STAX.AI
      </span>
    </Link>
  );
};

export default BrandLogo;
