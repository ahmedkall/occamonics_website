import StackMark from './StackMark';

type SectionLabelProps = {
  text: string;
  dark?: boolean;
};

const SectionLabel = ({ text, dark = false }: SectionLabelProps) => (
  <div className="inline-flex items-center gap-2">
    <StackMark className="h-4 w-4 text-[#1fd3ee]" />
    <span className={`text-[0.72rem] font-semibold uppercase tracking-[0.26em] ${dark ? 'text-white/70' : 'text-[#001f2b]'}`}>
      {text}
    </span>
  </div>
);

export default SectionLabel;
