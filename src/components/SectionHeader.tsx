interface Props {
  title: string;
  description: string;
}

function SectionHeader({ title, description }: Props) {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{title}</p>
      <h2 className="text-3xl font-semibold text-slate-900">{description}</h2>
    </div>
  );
}

export default SectionHeader;
