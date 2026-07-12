import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import PlayerTable from '../components/PlayerTable';
import SectionHeader from '../components/SectionHeader';
import { useStore } from '../store/useStore';

function GroupPreviewPage() {
  const { groupId } = useParams();
  const group = useStore((state) => state.groups.find((entry) => entry.id === groupId));

  if (!group) {
    return <div className="rounded-[32px] border border-slate-200 bg-white p-8 text-slate-600">Group not found.</div>;
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Group Preview</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">{group.name} Players Preview</h1>
          <p className="mt-2 text-slate-600">Preview all players in a group before the live allocation ceremony begins.</p>
        </div>
        <Link
          to="/groups"
          className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-900"
        >
          <FaArrowLeft /> Back to groups
        </Link>
      </div>

      <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-card">
        <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-700">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{group.name}</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">{group.players.length} Players</h2>
            </div>
            <span className={`rounded-full px-4 py-2 text-sm font-semibold ${
              group.status === 'Ready' ? 'bg-emerald-500/15 text-emerald-200' : group.status === 'Completed' ? 'bg-slate-800 text-slate-300' : 'bg-amber-500/15 text-amber-200'
            }`}>
              {group.status}
            </span>
          </div>
          <p className="text-sm text-slate-600">Each team will receive exactly one player from this group during the live random allocation. The ceremony is designed for broadcast-quality reveal.</p>
        </div>
        <PlayerTable players={group.players} />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Link
            to={`/groups/${group.id}/confirm`}
            className="inline-flex items-center justify-center rounded-3xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
          >
            Allocate Group
          </Link>
          <Link
            to="/groups"
            className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-slate-950/80 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-900"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GroupPreviewPage;
