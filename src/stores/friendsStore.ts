import type { Friend } from '@/types/Friend';
import { create } from 'zustand';

export const useFriendsStore = create<{
  total: number;
  friends: Friend[];
  setFriends: (friends: Friend[]) => void;
}>((set) => ({
  total: 0,
  friends: [],
  setFriends: (friends: Friend[]) => set({ friends, total: friends.length }),
}));
