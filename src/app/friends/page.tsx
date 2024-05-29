import { FriendsHeader } from '@/components/FriendsHeader';
import { FriendsList } from '@/components/FriendsList';
import type { Metadata } from 'next';
import { getFriendsData } from '../../services/getFriendsData';

export const metadata: Metadata = {
  title: 'Friends',
};

const FriendsPage = async () => {
  const { friends } = await getFriendsData();

  return (
    <div
      className='flex min-h-screen flex-col bg-gray100
        px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16'
    >
      <div className='mx-auto w-full max-w-[1400px]'>
        <FriendsHeader />
        <div className='mb-[56px] text-gray500 min-[640px]:text-xl md:text-2xl'>
          See who&apos;s in your friends list!
        </div>
        <FriendsList friendsFromServer={friends} />
      </div>
    </div>
  );
};

export default FriendsPage;
