import { FriendsHeader } from '@/components/FriendsHeader';
import { FriendsList } from '@/components/FriendsList';
import type { Metadata } from 'next';
import { getFriendsData } from '../services/getFriendsData';

export const metadata: Metadata = {
  title: 'Friends',
};

const FriendsPage = async () => {
  const { friends } = await getFriendsData();

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
        <FriendsList friendsFromServer={friends} />
      </div>
    </div>
  );
};

export default FriendsPage;
