import { FriendsHeader } from '@/components/FriendsHeader';
import { FriendsList } from '@/components/FriendsList';
import type { Friend } from '@/types/Friend';
import type { Metadata } from 'next';
import fs from 'fs/promises';

export const metadata: Metadata = {
  title: 'Friends',
};

const FriendsPage = async () => {
  const file = await fs.readFile(
    process.cwd() + '/src/dummyFriends.json',
    'utf8',
  );
  const friendsData = JSON.parse(file);
  const friends = friendsData.friends as Friend[];

  return (
    <div
      className='bg-gray100 flex min-h-screen flex-col
        px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16'
    >
      <div className='mx-auto w-full max-w-[1400px]'>
        <FriendsHeader />
        <div className='text-gray500 mb-[56px] min-[640px]:text-xl md:text-2xl'>
          See who&apos;s in your friends list!
        </div>
        <FriendsList friends={friends} />
      </div>
    </div>
  );
};

export default FriendsPage;
