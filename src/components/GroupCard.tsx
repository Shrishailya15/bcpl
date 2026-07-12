import { Link } from 'react-router-dom';
import type { Group } from '../types';

interface Props {
  group: Group;
}

function GroupCard({ group }: Props) {
  return (
    <div className="group rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-[0_24px_60px_rgba(76,29,149,0.14)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{group.name}</p>
          <h3 className="mt-3 text-xl font-semibold text-slate-900">{group.players.length} Players</h3>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
          group.status === 'Ready' ? 'bg-emerald-100 text-emerald-700' : group.status === 'Completed' ? 'bg-slate-200 text-slate-700' : 'bg-amber-100 text-amber-700'
        }`}>
          {group.status}
        </span>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-600">Each team will receive exactly one player from this group during the live allocation ceremony.</p>
      <div className="mt-6 flex items-center justify-between gap-3">
        <Link
          to={`/groups/${group.id}`}
          className="inline-flex items-center justify-center rounded-3xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
        >
          View Group
        </Link>
        <Link
          to={`/groups/${group.id}/confirm`}
          className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Allocate
        </Link>
      </div>
    </div>
  );
}

export default GroupCard;
