import { Link } from 'react-router-dom';
import type { Team } from '../types';

interface Props {
  team: Team;
}

function TeamCard({ team }: Props) {
  return (
    <Link
      to={`/teams/${team.id}`}
      className="group block rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-slate-50"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-violet-600/10 text-3xl text-violet-600 shadow-lg shadow-violet-500/10">
          {team.logo}
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Team</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900">{team.name}</h3>
        </div>
      </div>
      <div className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
        <div>
          <p className="text-slate-500">Captain</p>
          <p className="mt-1 font-semibold text-slate-900">{team.captain}</p>
        </div>
        <div>
          <p className="text-slate-500">Players</p>
          <p className="mt-1 font-semibold text-slate-900">{team.players.length}/10</p>
        </div>
        <div>
          <p className="text-slate-500">Strength</p>
          <p className="mt-1 font-semibold text-slate-900">{team.strength}</p>
        </div>
      </div>
    </Link>
  );
}

export default TeamCard;
