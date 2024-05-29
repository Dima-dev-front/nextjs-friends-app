import type { Friend } from '@/types/Friend';
import fs from 'fs/promises';

export const getFriendsData = async (): Promise<{
  friends: Friend[];
  total: number;
}> => {
  const file = await fs.readFile(
    process.cwd() + '/src/dummyFriends.json',
    'utf8',
  );

  return JSON.parse(file);
};
