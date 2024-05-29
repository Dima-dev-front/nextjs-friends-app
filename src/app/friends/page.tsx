import { FriendsHeader } from '@/components/FriendsHeader';

const FriendsPage = () => {
  return (
    <div
      className='bg-gray100 flex min-h-screen flex-col
        px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16'
    >
      <FriendsHeader />
      <div className='text-gray500 mb-[56px] min-[640px]:text-xl md:text-2xl'>
        See who&apos;s in your friends list!
      </div>
    </div>
  );
};

export default FriendsPage;
