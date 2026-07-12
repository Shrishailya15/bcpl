import type { Player } from '../types';

interface Props {
  players: Player[];
}

function PlayerTable({ players }: Props) {
  return (
    <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-card">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-0 text-sm text-slate-300">
          <thead>
            <tr className="bg-slate-950/80 text-left text-xs uppercase tracking-[0.25em] text-slate-500">
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Player</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Age</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id} className="border-t border-white/5 transition hover:bg-white/5">
                <td className="px-6 py-4 text-slate-400">{index + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={player.avatar} alt={player.name} className="h-10 w-10 rounded-2xl border border-white/10 object-cover" />
                    <div>
                      <p className="font-semibold text-white">{player.name}</p>
                      <p className="text-xs text-slate-500">Group {player.groupId.split('-')[1]}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-white">{player.role}</td>
                <td className="px-6 py-4 text-slate-400">{player.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayerTable;
