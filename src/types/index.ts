export interface Team {
  id: string;
  name: string;
  logo: string;
  captain: string;
  strength: string;
  players: string[];
  titles: number;
  predecessor?: string;
}

export interface Player {
  id: string;
  name: string;
  role: string;
  age: number;
  groupId: string;
  avatar: string;
}

export interface Group {
  id: string;
  name: string;
  status: 'Ready' | 'Pending' | 'Completed';
  players: Player[];
  allocated: boolean;
  completedAt?: string;
}

export interface Allocation {
  groupId: string;
  teamId: string;
  playerId: string;
  playerName: string;
  teamName: string;
  teamLogo: string;
  timestamp: string;
}

export interface AllocationHistory {
  id: string;
  groupId: string;
  groupName: string;
  status: 'Completed' | 'Pending';
  allocatedAt: string;
  allocations: Allocation[];
}
