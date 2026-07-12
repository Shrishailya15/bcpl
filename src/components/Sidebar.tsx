import { NavLink } from 'react-router-dom';
import { FaChartLine, FaUsers, FaUser, FaLayerGroup, FaBullseye, FaHistory, FaTrophy } from 'react-icons/fa';

const links = [
  { label: 'Dashboard', path: '/', icon: FaChartLine },
  { label: 'Teams', path: '/teams', icon: FaUsers },
  { label: 'Players', path: '/players', icon: FaUser },
  { label: 'Groups', path: '/groups', icon: FaLayerGroup },
  { label: 'Allocation', path: '/groups', icon: FaBullseye },
  { label: 'History', path: '/history', icon: FaHistory },
  { label: 'Champions', path: '/champions', icon: FaTrophy },
];

function Sidebar() {
  return (
    <aside className="hidden w-72 flex-shrink-0 border-r border-slate-200 bg-[linear-gradient(180deg,_#07111f_0%,_#0f172a_100%)] p-6 md:block">
      <div className="mb-10 flex items-center gap-4 rounded-[24px] bg-slate-900/25 px-4 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.18)] backdrop-blur-sm ring-1 ring-white/10">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-300 text-white shadow-[0_16px_30px_rgba(245,158,11,0.25)]">
          <div className="absolute inset-0 rounded-[22px] border border-white/20" />
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/10 text-lg font-bold text-white shadow-[0_0_0_4px_rgba(255,255,255,0.08)]">
            <span className="text-xl">🏆</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white">BCPL</p>
          <p className="text-lg font-bold uppercase tracking-[0.18em] text-amber-300">Auction</p>
        </div>
      </div>
      <nav className="space-y-3">
        {links.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-4 rounded-[22px] px-4 py-4 text-sm font-medium transition-all ${
                  isActive ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_12px_30px_rgba(59,130,246,0.28)]' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl text-cyan-300 transition duration-300 group-hover:bg-white/15 group-hover:text-white">
                <Icon />
              </span>
              {item.label}
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-10 rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-[0_18px_45px_rgba(2,6,23,0.28)]">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Live Event</p>
        <h3 className="mt-3 text-lg font-semibold text-white">Projector Mode</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">Designed for live allocation ceremony with premium broadcast styling.</p>
      </div>
    </aside>
  );
}

export default Sidebar;
