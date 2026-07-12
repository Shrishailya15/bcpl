import { ReactNode } from 'react';

interface Props {
  label: string;
  value: string;
  caption: string;
  icon: ReactNode;
}

function StatCard({ label, value, caption, icon }: Props) {
  return (
    <div className="group rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.06)] backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(76,29,149,0.12)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.32em] text-slate-500">{label}</p>
          <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 text-xl text-white shadow-lg shadow-violet-600/15 transition duration-300 group-hover:scale-105">
          {icon}
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-600">{caption}</p>
    </div>
  );
}

export default StatCard;
