import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { useStore } from '../store/useStore';

function AllocationHistoryPage() {
  const history = useStore((state) => state.history);

  return (
    <div>
      <SectionHeader title="Allocation History" description="Audit past group draws and their results." />
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-card">
        <div className="grid gap-4">
          {history.length ? (
            history.map((entry) => (
              <div key={entry.id} className="rounded-[28px] border border-white/10 bg-slate-950/80 p-5 shadow-inner shadow-white/5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{entry.groupName}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{entry.status}</h3>
                  </div>
                  <div className="text-sm text-slate-400">
                    <p>{new Date(entry.allocatedAt).toLocaleString()}</p>
                    <p className="mt-1">{entry.allocations.length} players allocated</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-slate-400">Live ceremony allocation confirmed and added to team rosters.</p>
                  <Link
                    to={`/groups/${entry.groupId}/result`}
                    className="inline-flex items-center gap-2 rounded-3xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
                  >
                    View result <FaChevronRight className="text-xs" />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[28px] border border-dashed border-white/10 bg-slate-950/80 p-8 text-center text-slate-500">
              No allocations have been completed yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllocationHistoryPage;
