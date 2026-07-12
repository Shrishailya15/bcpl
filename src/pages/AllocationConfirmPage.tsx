import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaCheckCircle, FaTimes, FaBolt, FaUsers } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import { useStore } from '../store/useStore';

function AllocationConfirmPage() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const group = useStore((state) => state.groups.find((entry) => entry.id === groupId));
  const readyCount = useMemo(() => group?.players.length ?? 0, [group]);

  if (!group) {
    return <div className="rounded-[32px] border border-slate-200 bg-white p-8 text-slate-600">Group not found.</div>;
  }

  return (
    <div>
      <SectionHeader title="Allocation Confirmation" description={`Ready to allocate ${group.name}`} />
      <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-violet-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 to-cyan-50 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 text-2xl text-white shadow-lg shadow-violet-500/20">
                  <FaBolt />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Group status</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">{group.name} is {group.status}</h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                This ceremony will allocate all {readyCount} players from this group at once. Every team receives one player, with no duplicates and complete fairness guaranteed.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  <span className="block text-xs uppercase tracking-[0.24em] text-slate-500">Players</span>
                  <span className="mt-1 block font-semibold text-slate-900">{readyCount}</span>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                  <span className="block text-xs uppercase tracking-[0.24em] text-slate-500">Teams</span>
                  <span className="mt-1 block font-semibold text-slate-900">30</span>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-3 text-slate-700">
                <FaCheckCircle className="text-emerald-500" />
                <span>30 players ready for allocation</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-slate-700">
                <FaUsers className="text-violet-600" />
                <span>30 teams available</span>
              </div>
              <div className="mt-4 flex items-center gap-3 text-slate-700">
                <FaCheckCircle className="text-slate-500" />
                <span>One player per team guaranteed</span>
              </div>
              <div className="mt-6 rounded-[24px] border border-slate-200 bg-white p-4 text-sm text-slate-600">
                The live reveal will begin as soon as you confirm. This is the moment the crowd has been waiting for.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <FaTimes className="mr-2" /> Cancel
          </button>
          <button
            type="button"
            onClick={() => navigate(`/groups/${group.id}/live`)}
            className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.01] hover:shadow-violet-500/30"
          >
            <FaCheckCircle className="mr-2" /> Allocate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllocationConfirmPage;
