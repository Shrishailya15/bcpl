import type { Group, Player, Team } from '../types';

export const teams: Team[] = [
  { id: 'team-01', name: 'Royal Strikers', logo: '🏆', captain: 'Rahul', strength: 'Balanced', players: [], titles: 2, predecessor: 'Eagle Masters' },
  { id: 'team-02', name: 'Thunder Warriors', logo: '⚡', captain: 'Rohit', strength: 'Power', players: [], titles: 3, predecessor: 'Kings XI' },
  { id: 'team-03', name: 'Kings XI', logo: '👑', captain: 'Nikhil', strength: 'Tactical', players: [], titles: 4, predecessor: 'Super Giants' },
  { id: 'team-04', name: 'Eagle Masters', logo: '🦅', captain: 'Vikram', strength: 'Defence', players: [], titles: 1, predecessor: 'Blue Brigade' },
  { id: 'team-05', name: 'Super Giants', logo: 'SG', captain: 'Karan', strength: 'Youth', players: [], titles: 2, predecessor: 'Rising Stars' },
  { id: 'team-06', name: 'Rising Stars', logo: '⭐', captain: 'Deepak', strength: 'Raw Pace', players: [], titles: 0, predecessor: 'Champions' },
  { id: 'team-07', name: 'Blue Brigade', logo: 'BB', captain: 'Rahul Mehta', strength: 'All-Round', players: [], titles: 1, predecessor: 'Thunder Warriors' },
  { id: 'team-08', name: 'Golden Panthers', logo: '🐆', captain: 'Aakash', strength: 'Attack', players: [], titles: 0, predecessor: 'Royal Strikers' },
  { id: 'team-09', name: 'Challengers', logo: '⚔️', captain: 'Suraj', strength: 'Pace', players: [], titles: 0, predecessor: 'Eagle Masters' },
  { id: 'team-10', name: 'Legends United', logo: 'LU', captain: 'Ankit', strength: 'Experience', players: [], titles: 5, predecessor: 'Kings XI' },
  { id: 'team-11', name: 'Titan Force', logo: 'TF', captain: 'Sahil', strength: 'Firepower', players: [], titles: 1, predecessor: 'Thunder Warriors' },
  { id: 'team-12', name: 'Blaze Riders', logo: 'BR', captain: 'Manish', strength: 'Speed', players: [], titles: 1, predecessor: 'Rising Stars' },
  { id: 'team-13', name: 'Nova Knights', logo: 'NK', captain: 'Amit', strength: 'Tactics', players: [], titles: 0, predecessor: 'Super Giants' },
  { id: 'team-14', name: 'Apex Falcons', logo: 'AF', captain: 'Varun', strength: 'Fielding', players: [], titles: 0, predecessor: 'Blue Brigade' },
  { id: 'team-15', name: 'Crimson Royals', logo: 'CR', captain: 'Naveen', strength: 'Spin', players: [], titles: 0, predecessor: 'Golden Panthers' },
  { id: 'team-16', name: 'Velocity Vipers', logo: 'VV', captain: 'Harsh', strength: 'Pace', players: [], titles: 0, predecessor: 'Challengers' },
  { id: 'team-17', name: 'Shadow Strikers', logo: 'SS', captain: 'Tejas', strength: 'Finishing', players: [], titles: 0, predecessor: 'Legends United' },
  { id: 'team-18', name: 'Emerald Knights', logo: 'EK', captain: 'Rohit S.', strength: 'Balance', players: [], titles: 0, predecessor: 'Titan Force' },
  { id: 'team-19', name: 'Obsidian Eagles', logo: 'OE', captain: 'Lokesh', strength: 'Pressure', players: [], titles: 0, predecessor: 'Blaze Riders' },
  { id: 'team-20', name: 'Celestial Kings', logo: 'CK', captain: 'Yash', strength: 'Rhythm', players: [], titles: 0, predecessor: 'Nova Knights' },
  { id: 'team-21', name: 'Galaxy Hunters', logo: 'GH', captain: 'Mihir', strength: 'Pace', players: [], titles: 0, predecessor: 'Apex Falcons' },
  { id: 'team-22', name: 'Pulse Strikers', logo: 'PS', captain: 'Sourabh', strength: 'Depth', players: [], titles: 0, predecessor: 'Crimson Royals' },
  { id: 'team-23', name: 'Storm Chargers', logo: 'SC', captain: 'Rajat', strength: 'Powerplay', players: [], titles: 0, predecessor: 'Velocity Vipers' },
  { id: 'team-24', name: 'Vanguard Kings', logo: 'VK', captain: 'Aman', strength: 'Wisdom', players: [], titles: 0, predecessor: 'Shadow Strikers' },
  { id: 'team-25', name: 'Aurora Falcons', logo: 'AF', captain: 'Nikhil P.', strength: 'Field', players: [], titles: 0, predecessor: 'Emerald Knights' },
  { id: 'team-26', name: 'Inferno Bulls', logo: 'IB', captain: 'Sandeep', strength: 'Strike', players: [], titles: 0, predecessor: 'Obsidian Eagles' },
  { id: 'team-27', name: 'Nucleus Stars', logo: 'NS', captain: 'Praveen', strength: 'Composure', players: [], titles: 0, predecessor: 'Celestial Kings' },
  { id: 'team-28', name: 'Pulse Panthers', logo: 'PP', captain: 'Pratik', strength: 'Balance', players: [], titles: 0, predecessor: 'Galaxy Hunters' },
  { id: 'team-29', name: 'Meteor Giants', logo: 'MG', captain: 'Rishabh', strength: 'Impact', players: [], titles: 0, predecessor: 'Pulse Strikers' },
  { id: 'team-30', name: 'Zenith Warriors', logo: 'ZW', captain: 'Kirat', strength: 'Tactics', players: [], titles: 0, predecessor: 'Storm Chargers' },
];

const roles = ['All Rounder', 'Batsman', 'Bowler', 'Wicketkeeper'];

export const groups: Group[] = Array.from({ length: 10 }, (_, index) => {
  const groupId = `group-${index + 1}`;
  const players: Player[] = Array.from({ length: 30 }, (_, playerIndex: number) => ({
    id: `player-${groupId}-${playerIndex + 1}`,
    name: `Player ${index + 1}-${playerIndex + 1}`,
    role: roles[(playerIndex + index) % roles.length],
    age: 18 + ((playerIndex + index) % 12),
    groupId,
    avatar: `https://api.dicebear.com/5.x/avataaars/svg?seed=${encodeURIComponent(`BCPL-${groupId}-${playerIndex + 1}`)}`,
  }));

  return {
    id: groupId,
    name: `Group ${index + 1}`,
    status: index === 0 ? 'Ready' : 'Pending',
    players,
    allocated: false,
  };
});
