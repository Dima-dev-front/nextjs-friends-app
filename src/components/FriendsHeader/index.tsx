import Link from 'next/link';
import { FriendsSearch } from '../FriendsSearch';

export const FriendsHeader = () => (
  <div className='mb-[30px] flex flex-col justify-between gap-5 md:flex-row'>
    <h1 className='text-gray700 text-[40px] font-extrabold min-[640px]:text-[42px] md:text-5xl'>
      Friends
    </h1>
    <div className='flex flex-col gap-5 min-[400px]:flex-row md:gap-[14px]'>
      <Link
        href='/friends/invite'
        className='bg-pinkish flex h-fit items-center justify-center
          rounded-lg px-5 py-[14px] font-bold text-white transition-opacity hover:opacity-80'
      >
        Invite someone
      </Link>
      <FriendsSearch />
    </div>
  </div>
);
