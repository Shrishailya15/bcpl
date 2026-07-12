import type { Allocation } from '../types';

interface Props {
  allocations: Allocation[];
}

function AllocationResultTable({ allocations }: Props) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-sm text-slate-700">
          <thead>
            <tr className="bg-slate-50 text-left text-xs uppercase tracking-[0.25em] text-slate-500">
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Player Name</th>
              <th className="px-6 py-4">Team</th>
              <th className="px-6 py-4">Group</th>
            </tr>
          </thead>
          <tbody>
            {allocations.map((allocation, index) => (
              <tr key={`${allocation.groupId}-${allocation.playerId}`} className="border-t border-slate-200 transition hover:bg-slate-50">
                <td className="px-6 py-4 text-slate-500">{index + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-900">{allocation.playerName}</span>
                    <span className="mt-1 text-xs text-slate-500">Confirmed pick</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-lg text-violet-700">{allocation.teamLogo}</span>
                    <div>
                      <span className="font-semibold text-slate-900">{allocation.teamName}</span>
                      <p className="text-xs text-slate-500">Assigned team</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                    {allocation.groupId.replace('group-', 'Group ')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllocationResultTable;
