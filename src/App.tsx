import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardPage from './pages/DashboardPage';
import GroupsPage from './pages/GroupsPage';
import GroupPreviewPage from './pages/GroupPreviewPage';
import AllocationConfirmPage from './pages/AllocationConfirmPage';
import LiveAllocationPage from './pages/LiveAllocationPage';
import AllocationResultPage from './pages/AllocationResultPage';
import TeamsPage from './pages/TeamsPage';
import TeamDetailsPage from './pages/TeamDetailsPage';
import AllocationHistoryPage from './pages/AllocationHistoryPage';
import HallOfChampionsPage from './pages/HallOfChampionsPage';
import PlayersPage from './pages/PlayersPage';
import NotFoundPage from './pages/NotFoundPage';
import { useStore } from './store/useStore';

function App() {
  const location = useLocation();
  const { sidebarOpen } = useStore();

  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#f4f7ff_45%,_#eef4ff_100%)] text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 bg-transparent px-4 py-4 md:px-6 lg:px-8">
          <Topbar />
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.32, ease: 'easeOut' }}
              className="mt-4"
            >
              <Routes location={location}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/groups" element={<GroupsPage />} />
                <Route path="/groups/:groupId" element={<GroupPreviewPage />} />
                <Route path="/groups/:groupId/confirm" element={<AllocationConfirmPage />} />
                <Route path="/groups/:groupId/live" element={<LiveAllocationPage />} />
                <Route path="/groups/:groupId/result" element={<AllocationResultPage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/teams/:teamId" element={<TeamDetailsPage />} />
                <Route path="/history" element={<AllocationHistoryPage />} />
                <Route path="/champions" element={<HallOfChampionsPage />} />
                <Route path="/players" element={<PlayersPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
