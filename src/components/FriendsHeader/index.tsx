import { FriendsSearch } from '../FriendsSearch';

export const FriendsHeader = () => (
  <div className='mb-[30px] flex flex-col justify-between gap-5 md:flex-row'>
    <h1 className='text-[40px] font-extrabold text-gray700 min-[640px]:text-[42px] md:text-5xl'>
      Friends
    </h1>
    <div className='flex flex-col gap-5 min-[400px]:flex-row md:gap-[14px]'>
      <FriendsSearch />
    </div>
  </div>
);
