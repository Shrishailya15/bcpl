import { create } from 'zustand';
import type { Allocation, AllocationHistory, Group, Player, Team } from '../types';
import { groups as seedGroups, teams as seedTeams } from '../data/seed';

interface AppState {
  teams: Team[];
  groups: Group[];
  allocations: Allocation[];
  history: AllocationHistory[];
  selectedGroupId: string | null;
  selectedTeamId: string | null;
  sidebarOpen: boolean;
  liveAllocationState: 'idle' | 'generating' | 'revealed';
  setSelectedGroupId: (groupId: string | null) => void;
  setSelectedTeamId: (teamId: string | null) => void;
  setSidebarOpen: (value: boolean) => void;
  startLiveAllocation: () => void;
  finishLiveAllocation: () => void;
  allocateGroup: (groupId: string) => Allocation[];
  getGroupById: (groupId: string) => Group | undefined;
  getTeamById: (teamId: string) => Team | undefined;
}

const shuffle = <T>(array: T[]) => {
  const items = [...array];
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};

export const useStore = create<AppState>((set, get) => ({
  teams: seedTeams,
  groups: seedGroups,
  allocations: [],
  history: [],
  selectedGroupId: null,
  selectedTeamId: null,
  sidebarOpen: true,
  liveAllocationState: 'idle',
  setSelectedGroupId: (groupId) => set({ selectedGroupId: groupId }),
  setSelectedTeamId: (teamId) => set({ selectedTeamId: teamId }),
  setSidebarOpen: (value) => set({ sidebarOpen: value }),
  startLiveAllocation: () => set({ liveAllocationState: 'generating' }),
  finishLiveAllocation: () => set({ liveAllocationState: 'revealed' }),
  getGroupById: (groupId) => get().groups.find((group) => group.id === groupId),
  getTeamById: (teamId) => get().teams.find((team) => team.id === teamId),
  allocateGroup: (groupId) => {
    const state = get();
    const currentGroup = state.groups.find((group) => group.id === groupId);
    if (!currentGroup || currentGroup.allocated) {
      return [];
    }
    const teamIds = shuffle(state.teams.map((team) => team.id));
    const allocations: Allocation[] = currentGroup.players.map((player, index) => {
      const teamId = teamIds[index];
      const team = state.teams.find((entry) => entry.id === teamId);
      return {
        groupId,
        playerId: player.id,
        playerName: player.name,
        teamId,
        teamName: team?.name ?? 'Unknown',
        teamLogo: team?.logo ?? '',
        timestamp: new Date().toISOString(),
      };
    });

    const updatedTeams = state.teams.map((team) => {
      const assignedPlayers = allocations
        .filter((allocation) => allocation.teamId === team.id)
        .map((allocation) => allocation.playerName);
      return {
        ...team,
        players: [...team.players, ...assignedPlayers],
      };
    });

    const updatedGroups: Group[] = state.groups.map((group) => {
      if (group.id !== groupId) return group;
      return {
        ...group,
        status: 'Completed',
        allocated: true,
        completedAt: new Date().toISOString(),
      };
    });

    const nextIndex = state.groups.findIndex((group) => group.id === groupId) + 1;
    const updatedNextGroups: Group[] = updatedGroups.map((group, idx): Group => {
      if (idx === nextIndex && !group.allocated) {
        return {
          ...group,
          status: 'Ready',
        };
      }
      return group;
    });

    const historyEntry: AllocationHistory = {
      id: `history-${groupId}`,
      groupId,
      groupName: currentGroup.name,
      status: 'Completed',
      allocatedAt: new Date().toISOString(),
      allocations,
    };

    set({
      teams: updatedTeams,
      groups: updatedNextGroups,
      allocations: [...state.allocations, ...allocations],
      history: [...state.history, historyEntry],
    });

    return allocations;
  },
}));
