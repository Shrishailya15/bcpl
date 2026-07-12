import { useMemo } from 'react';
import { FaArrowLeft, FaDownload, FaChevronRight, FaTrophy, FaStar } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import AllocationResultTable from '../components/AllocationResultTable';
import SectionHeader from '../components/SectionHeader';
import { useStore } from '../store/useStore';

function AllocationResultPage() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const allocations = useStore((state) => state.allocations.filter((item) => item.groupId === groupId));
  const groups = useStore((state) => state.groups);

  const nextGroup = useMemo(() => {
    const currentIndex = groups.findIndex((group) => group.id === groupId);
    return groups[currentIndex + 1];
  }, [groupId, groups]);

  if (!groupId) {
    return <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-slate-300">Allocation result not found.</div>;
  }

  const groupName = groupId.replace('group-', 'Group ');

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <SectionHeader title="Allocation Result" description={`Group ${groupName} allocation complete`} />
          <p className="text-slate-600">Every player was allocated to a unique team. The result is ready for the live scoreboard.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <FaArrowLeft /> Back
          </button>
          <button type="button" className="inline-flex items-center gap-2 rounded-3xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500">
            <FaDownload /> Download Result
          </button>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-violet-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <div className="mb-6 overflow-hidden rounded-[32px] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.25),_transparent_35%),linear-gradient(135deg,_#111827_0%,_#1f2937_45%,_#4c1d95_100%)] p-6 text-white shadow-[0_16px_45px_rgba(15,23,42,0.24)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-200 backdrop-blur">
                <FaStar className="text-cyan-300" />
                Allocation summary
              </div>
              <h3 className="mt-4 text-3xl font-semibold text-white">{groupName} delivered successfully</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                The live ceremony has concluded with a perfect one-player-per-team result. The stage is ready for the next dramatic reveal.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Players allocated</p>
                <p className="mt-2 text-2xl font-semibold text-white">30</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-xs uppercase tracking-[0.28em] text-slate-300">Teams filled</p>
                <p className="mt-2 text-2xl font-semibold text-white">30</p>
              </div>
            </div>
          </div>
        </div>

        <AllocationResultTable allocations={allocations} />

        <div className="mt-6 flex flex-col gap-3 rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 text-white">
              <FaTrophy />
            </div>
            <p className="text-sm text-slate-600">Allocation result is now reflected in team rosters and history.</p>
          </div>
          {nextGroup ? (
            <button
              type="button"
              onClick={() => navigate(`/groups/${nextGroup.id}/confirm`)}
              className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.01] hover:shadow-violet-500/30"
            >
              Next Group <FaChevronRight className="text-sm" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => navigate('/teams')}
              className="inline-flex items-center gap-2 rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500"
            >
              View teams
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default AllocationResultPage;
