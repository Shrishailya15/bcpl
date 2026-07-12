import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBolt, FaUsers, FaTrophy } from 'react-icons/fa';
import { useStore } from '../store/useStore';
import SectionHeader from '../components/SectionHeader';

function LiveAllocationPage() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const group = useStore((state) => state.groups.find((entry) => entry.id === groupId));
  const allocateGroup = useStore((state) => state.allocateGroup);
  const [allocations, setAllocations] = useState<ReturnType<typeof allocateGroup>>([]);
  const [phase, setPhase] = useState(0);
  const messages = useMemo(
    () => [
      'Generating Random Allocation...',
      'Matching Players to Teams...',
      'Creating Fair Draw...',
      'Finalizing Allocation...',
      'Preparing Results...',
    ],
    [],
  );

  useEffect(() => {
    if (!groupId || !group) {
      return;
    }

    const result = allocateGroup(groupId);
    setAllocations(result);
  }, [allocateGroup, group, groupId]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((current) => {
        if (current >= messages.length - 1) {
          clearInterval(interval);
          return current;
        }
        return current + 1;
      });
    }, 1100);

    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    if (group && phase === messages.length - 1) {
      const timeout = window.setTimeout(() => {
        navigate(`/groups/${group.id}/result`);
      }, 1800);
      return () => window.clearTimeout(timeout);
    }
    return undefined;
  }, [group, messages.length, navigate, phase]);

  if (!group) {
    return <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-slate-300">Group not found.</div>;
  }

  return (
    <div>
      <SectionHeader title="Live Allocation" description={`Allocating ${group.name} in cinematic broadcast style`} />
      <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-violet-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-[radial-gradient(circle_at_top_left,_rgba(167,139,250,0.22),_transparent_40%),linear-gradient(135deg,_#111827_0%,_#1f2937_40%,_#4c1d95_100%)] p-8 shadow-[0_16px_45px_rgba(15,23,42,0.22)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.24),_transparent_45%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-10"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-200 backdrop-blur">
                  <FaBolt className="text-cyan-300" />
                  Broadcast Illumination
                </div>
                <h2 className="mt-4 text-4xl font-semibold text-white">{messages[phase]}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                  The BCPL allocation engine is shuffling all 30 teams and players in one premium reveal. Stay ready for the cinematic result drop.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-center backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Group</p>
                  <p className="mt-2 text-2xl font-semibold text-white">{group.name}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-center backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Players</p>
                  <p className="mt-2 text-2xl font-semibold text-white">30</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-center backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Teams</p>
                  <p className="mt-2 text-2xl font-semibold text-white">30</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.16, duration: 0.75 }}
                className="rounded-[28px] border border-white/10 bg-white/10 p-6 text-center backdrop-blur-md"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                  {index === 0 ? <FaUsers /> : index === 1 ? <FaTrophy /> : <FaBolt />}
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-slate-300">Team pickups</p>
                <p className="mt-3 text-3xl font-semibold text-white">{10 + index * 10}</p>
                <p className="mt-3 text-sm text-slate-300">Teams are being matched with players live.</p>
              </motion.div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.74))]" />
        </div>
      </div>

      <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Live reveal queue</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">First matches are now appearing on stage.</h3>
          </div>
          <div className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-semibold text-violet-700">
            Dramatic reveal
          </div>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {allocations.slice(0, 3).map((allocation) => (
            <motion.div
              key={allocation.playerId}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{allocation.playerName}</p>
              <p className="mt-3 text-lg font-semibold text-slate-900">{allocation.teamName}</p>
              <p className="mt-2 text-sm text-slate-600">Team match pending reveal</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LiveAllocationPage;
